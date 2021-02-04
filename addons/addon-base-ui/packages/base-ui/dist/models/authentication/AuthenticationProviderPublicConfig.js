"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _api = require("../../helpers/api");

var _utils = require("../../helpers/utils");

var _errors = require("../../helpers/errors");

var _settings = require("../../helpers/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toAbsoluteUrl(uri) {
  return (0, _utils.isAbsoluteUrl)(uri) ? uri : "".concat(_api.config.apiPath, "/").concat(uri);
}

var AUTHN_EXTENSION_POINT = 'authentication'; // TODO: Remove this temp adjustment method. See comments in "absoluteSignInUrl" getter below for more details.

function adjustRedirectUri(uri) {
  var redirectType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'login';
  // Adjust the name of the query param to update and determine whether to preserve the path
  // based on whether the user is logging in or out
  var redirectParamName = 'redirect_uri';
  var preservePath = true;

  if (redirectType === 'logout') {
    redirectParamName = 'logout_uri';
    preservePath = false;
  } // if the current uri contains redirect param and if it is not the same as websiteUrl then adjust it
  // This is required during local development. For other envs, redirectUri and websiteUrl will be same.


  var initialRedirectUri = (0, _utils.getQueryParam)(uri, [redirectParamName]);
  var adjustedUri = uri;

  if (initialRedirectUri !== _settings.websiteUrl) {
    adjustedUri = (0, _utils.removeQueryParams)(uri, [redirectParamName]);
    adjustedUri = (0, _utils.addQueryParams)(adjustedUri, _defineProperty({}, redirectParamName, preservePath ? window.location : window.location.origin));
  }

  return adjustedUri;
}

var AuthenticationProviderPublicConfig = _mobxStateTree.types.model('AuthenticationProviderPublicConfig', {
  id: '',
  title: _mobxStateTree.types.identifier,
  type: '',
  credentialHandlingType: '',
  signInUri: '',
  signOutUri: '',
  enableNativeUserPoolUsers: _mobxStateTree.types.maybeNull(_mobxStateTree.types["boolean"])
}).actions(function (self) {
  return {
    cleanup: function cleanup() {// No-op for now
    },
    login: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref,
            username,
            password,
            pluginRegistry,
            handleException,
            authenticationProviderId,
            loginResult,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, username = _ref.username, password = _ref.password;
                pluginRegistry = (0, _mobxStateTree.getEnv)(self).pluginRegistry;

                handleException = function handleException(err) {
                  var code = _lodash["default"].get(err, 'code');

                  var isBoom = _lodash["default"].get(err, 'isBoom');

                  if (code === 'badRequest') throw _errors.boom.badRequest(err, err.message);
                  if (isBoom) throw err;
                  throw _errors.boom.apiError(err, 'Something went wrong while trying to contact the server.');
                };

                _context.prev = 3;
                _context.next = 6;
                return pluginRegistry.runPlugins(AUTHN_EXTENSION_POINT, 'loginInitiated');

              case 6:
                if (!(self.credentialHandlingType === 'submit')) {
                  _context.next = 14;
                  break;
                }

                // if the selectedAuthenticationProvider requires credentials to be submitted
                // then submit the username/password to the specified URL
                authenticationProviderId = self.id;
                _context.next = 10;
                return (0, _api.authenticate)(self.absoluteSignInUrl, username, password, authenticationProviderId);

              case 10:
                loginResult = _context.sent;
                _context.next = 13;
                return pluginRegistry.runPlugins(AUTHN_EXTENSION_POINT, 'loginDetected', {
                  explicitLogin: true
                });

              case 13:
                return _context.abrupt("return", loginResult);

              case 14:
                if (self.credentialHandlingType === 'redirect') {
                  // if the selectedAuthenticationProvider requires us to redirect to identity provider
                  // instead of collecting credentials from user (for example, in case of SAML)
                  // just redirect to the specified url.
                  // The authentication plugins will be notified of 'loginDetected' in this case after the login process is
                  // complete by the "initialization-plugin"
                  window.location = self.absoluteSignInUrl;
                }

                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](3);
                handleException(_context.t0);

              case 20:
                return _context.abrupt("return", undefined);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 17]]);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }(),
    logout: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref2,
            _ref2$autoLogout,
            autoLogout,
            pluginRegistry,
            cleaner,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref2 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref2$autoLogout = _ref2.autoLogout, autoLogout = _ref2$autoLogout === void 0 ? false : _ref2$autoLogout;
                pluginRegistry = (0, _mobxStateTree.getEnv)(self).pluginRegistry; // Notify each authentication plugins of explicit logout attempt.
                // Explicit logout may be explicitly initiated
                // - by user - "autoLogout: false" - (e.g., clicking on logout) OR
                // - by application automatically - "autoLogout: true" - (e.g., app code initiating logout due to certain period
                // of user inactivity

                _context2.next = 4;
                return pluginRegistry.runPlugins(AUTHN_EXTENSION_POINT, 'logoutInitiated', {
                  autoLogout: autoLogout
                });

              case 4:
                if (!self.signOutUri) {
                  _context2.next = 8;
                  break;
                }

                // if the selectedAuthenticationProvider requires us to redirect to some logout URL
                // (such as SAML logout url in case of identity federation) just redirect to the specified url.
                // The authentication plugins will be notified of 'logoutDetected' in this case after the logout process is
                // complete by the "initialization-plugin"
                window.location = self.absoluteSignOutUrl;
                _context2.next = 14;
                break;

              case 8:
                cleaner = (0, _mobxStateTree.getEnv)(self).cleaner;
                _context2.next = 11;
                return cleaner.cleanup();

              case 11:
                window.history.pushState('', '', '/'); // Notify each authentication plugins after explicit logout.

                _context2.next = 14;
                return pluginRegistry.runPlugins(AUTHN_EXTENSION_POINT, 'logoutDetected', {
                  explicitLogout: true,
                  autoLogout: autoLogout
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  };
}).views(function (self) {
  return {
    get absoluteSignInUrl() {
      // The "signInUri" below contains redirectUrl that comes from server and points back to the actual websiteUrl
      // (even on local machines during local development)
      // TODO: Temp code: Adjust redirectUrl for local development.
      //  This will go away once we switch to the idea of "provider registry". Currently, the provider configs are retrieved
      //  from a central "AuthenticationProviderConfigService" on the server side and the providers do not get a chance to adjust "signInUri"
      //  (or any other config variables) before returning them during local development, once we move to "provider registry" the registry will
      //  pick appropriate auth provider impl and give it a chance to adjust variables or create derived variables
      return adjustRedirectUri(toAbsoluteUrl(self.signInUri));
    },

    get absoluteSignOutUrl() {
      return adjustRedirectUri(toAbsoluteUrl(self.signOutUri), 'logout');
    }

  };
});

var _default = AuthenticationProviderPublicConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthenticationProviderPublicConfig.js.map