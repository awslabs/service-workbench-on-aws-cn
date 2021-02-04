"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.Authentication = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _utils = require("../../helpers/utils");

var _api = require("../../helpers/api");

var _localStorageKeys = _interopRequireDefault(require("../constants/local-storage-keys"));

var _errors = require("../../helpers/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function removeTokensFromUrl() {
  var newUrl = (0, _utils.removeFragmentParams)(document.location, ['id_token', 'access_token', 'token_type', 'expires_in']);
  window.history.replaceState({}, document.title, newUrl);
} // ==================================================================
// Login model
// ==================================================================


var Authentication = _mobxStateTree.types.model('Authentication', {
  processing: false,
  selectedAuthenticationProviderId: ''
}).actions(function (self) {
  return {
    runInAction: function runInAction(fn) {
      return fn();
    },
    // this method is called by the Cleaner
    cleanup: function cleanup() {
      if (self.selectedAuthenticationProvider) {
        // give selected authentication provider a chance to do its own cleanup
        self.selectedAuthenticationProvider.cleanup();
      }

      self.clearTokens();
    },
    clearTokens: function clearTokens() {
      _lodash["default"].forEach(_localStorageKeys["default"], function (keyValue) {
        return _utils.storage.removeItem(keyValue);
      });
    },
    setSelectedAuthenticationProviderId: function setSelectedAuthenticationProviderId(authenticationProviderId) {
      self.selectedAuthenticationProviderId = authenticationProviderId;
    },
    getIdToken: function getIdToken() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var idTokenFromUrl, idTokenFromLocal, idToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // The id token would be in URL in case of SAML redirection.
                // The name of the token param is "id_token" in that case (instead of "appIdToken"), if the token is
                // issued by Cognito.
                // Also the id_token is returned via URL fragment i.e, with # instead of query param something like
                // https://web.site.url/#id_token=blabla instead of
                // https://web.site.url?idToken=blabla
                // TODO: Make the retrieval of id token from query string param or fragment param (or any other mechanism)
                // dynamic based on the authentication provider. Without that, the following code will only work for
                // any auth providers that set id token either in local storage as "appIdToken" or deliver to us
                // via URL fragment parameter as "id_token".
                // This code will NOT work for auth providers issuing id token and delivering via any other mechanism.
                idTokenFromUrl = (0, _utils.getFragmentParam)(document.location, 'id_token');
                if (idTokenFromUrl) removeTokensFromUrl(); // we remove the idToken from the url for a good security measure

                idTokenFromLocal = _utils.storage.getItem(_localStorageKeys["default"].appIdToken);
                idToken = idTokenFromUrl || idTokenFromLocal;
                return _context.abrupt("return", idToken);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getIdTokenInfo: function getIdTokenInfo() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var idToken, tokenStatus, decodedIdToken, expiresAt;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return self.getIdToken();

              case 2:
                idToken = _context2.sent;
                tokenStatus = 'notFound';

                if (idToken) {
                  try {
                    decodedIdToken = (0, _jwtDecode["default"])(idToken); // Check if the token is expired
                    // decodedIdToken.exp is epoch time in SECONDS
                    // ( - See "exp" claim JWT RFC - https://tools.ietf.org/html/rfc7519#section-4.1.4 for details
                    //   - the claim is in "NumericDate" format.
                    //   - NumericDate is Epoch in Seconds - https://ldapwiki.com/wiki/NumericDate )
                    //
                    // Date.now() returns epoch time in MILLISECONDS

                    expiresAt = _lodash["default"].get(decodedIdToken, 'exp', 0) * 1000;

                    if (Date.now() >= expiresAt) {
                      tokenStatus = 'expired';
                    } else {
                      tokenStatus = 'notExpired';
                    }
                  } catch (e) {
                    // the token may not be a well-formed JWT toekn in case of any error
                    // decoding it
                    tokenStatus = 'corrupted';
                  }
                }

                return _context2.abrupt("return", {
                  idToken: idToken,
                  decodedIdToken: decodedIdToken,
                  status: tokenStatus
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveIdToken: function saveIdToken(idToken) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var decodedIdToken;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _utils.storage.setItem(_localStorageKeys["default"].appIdToken, idToken);

                decodedIdToken = idToken && (0, _jwtDecode["default"])(idToken);
                (0, _api.setIdToken)(idToken, decodedIdToken);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    login: function login(_ref) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var username, password, result, _ref2, idToken, appRunner;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                username = _ref.username, password = _ref.password;

                if (!self.shouldCollectUserNamePassword) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 4;
                return self.selectedAuthenticationProvider.login({
                  username: username,
                  password: password,
                  authenticationProviderId: self.selectedAuthenticationProviderId
                });

              case 4:
                result = _context4.sent;
                _ref2 = result || {}, idToken = _ref2.idToken;

                if (!_lodash["default"].isEmpty(idToken)) {
                  _context4.next = 8;
                  break;
                }

                throw _errors.boom.incorrectImplementation("There is a problem with the implementation of the server side code. The id token is not returned.");

              case 8:
                _context4.next = 10;
                return self.saveIdToken(idToken);

              case 10:
                appRunner = (0, _mobxStateTree.getEnv)(self).appRunner;
                _context4.next = 13;
                return appRunner.run();

              case 13:
                _context4.next = 17;
                break;

              case 15:
                _context4.next = 17;
                return self.selectedAuthenticationProvider.login();

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    logout: function logout() {
      var _arguments = arguments;
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _ref3, _ref3$autoLogout, autoLogout;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _ref3 = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {}, _ref3$autoLogout = _ref3.autoLogout, autoLogout = _ref3$autoLogout === void 0 ? false : _ref3$autoLogout;
                self.cleanup();
                return _context5.abrupt("return", self.selectedAuthenticationProvider.logout({
                  autoLogout: autoLogout
                }));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  };
}).views(function (self) {
  return {
    get isCognitoUserPool() {
      return self.selectedAuthenticationProvider.type === 'cognito_user_pool';
    },

    get selectedAuthenticationProvider() {
      var authenticationProviderPublicConfigsStore = (0, _mobxStateTree.getEnv)(self).authenticationProviderPublicConfigsStore;
      return authenticationProviderPublicConfigsStore.toAuthenticationProviderFromId(self.selectedAuthenticationProviderId);
    },

    get shouldCollectUserNamePassword() {
      var selectedAuthenticationProvider = self.selectedAuthenticationProvider;
      return selectedAuthenticationProvider && selectedAuthenticationProvider.credentialHandlingType === 'submit';
    }

  };
});

exports.Authentication = Authentication;

function registerContextItems(appContext) {
  appContext.authentication = Authentication.create({}, appContext);
}
//# sourceMappingURL=Authentication.js.map