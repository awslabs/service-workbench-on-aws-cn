"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _api = require("../helpers/api");

var _notification = require("../helpers/notification");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AUTHN_EXTENSION_POINT = 'authentication';
/**
 * This is where we run the initialization logic that is common across any type of applications.
 *
 * @param payload A free form object. This function makes a property named 'tokenInfo' available on this payload object.
 * @param appContext An application context object containing various Mobx Stores, Models etc.
 *
 * @returns {Promise<void>}
 */

function init(_x, _x2) {
  return _init.apply(this, arguments);
}
/**
 * This is where we run the post initialization logic that is common across any type of applications.
 *
 * @param payload A free form object. This function expects a property named 'tokenInfo' to be available on the payload object.
 * @param appContext An application context object containing various Mobx Stores, Models etc.
 *
 * @returns {Promise<void>}
 */


function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload, appContext) {
    var authentication, authenticationProviderPublicConfigsStore, pluginRegistry, tokenInfo, idToken, decodedIdToken;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authentication = appContext.authentication, authenticationProviderPublicConfigsStore = appContext.authenticationProviderPublicConfigsStore, pluginRegistry = appContext.pluginRegistry;
            _context.next = 3;
            return authenticationProviderPublicConfigsStore.load();

          case 3:
            _context.next = 5;
            return authentication.getIdTokenInfo();

          case 5:
            tokenInfo = _context.sent;
            payload.tokenInfo = _objectSpread({}, payload.tokenInfo, {}, tokenInfo);
            idToken = tokenInfo.idToken, decodedIdToken = tokenInfo.decodedIdToken;

            if (!(tokenInfo.status === 'notExpired')) {
              _context.next = 16;
              break;
            }

            (0, _api.setIdToken)(idToken, decodedIdToken);
            authentication.saveIdToken(idToken); // Set selected authentication provider. This is used during logout

            authentication.setSelectedAuthenticationProviderId(decodedIdToken.iss); // Notify each authentication plugins's 'loginDetected' method since we detected that the user is logged in
            // (i.e., we have active token).
            // Note that we are not passing "explicitLogin: true" or "explicitLogin: false"
            // because we can't determine for sure if this was an explicit login (i.e., the user logged in by clicking login button)
            // or we have access to the token from memory or local store because the user had logged in the past

            _context.next = 14;
            return pluginRegistry.runPlugins(AUTHN_EXTENSION_POINT, 'loginDetected');

          case 14:
            _context.next = 18;
            break;

          case 16:
            _context.next = 18;
            return pluginRegistry.runPlugins(AUTHN_EXTENSION_POINT, 'logoutDetected');

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

function postInit(_x3, _x4) {
  return _postInit.apply(this, arguments);
}

function _postInit() {
  _postInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(payload, appContext) {
    var tokenNotExpired, userStore, isRootUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tokenNotExpired = _lodash["default"].get(payload, 'tokenInfo.status') === 'notExpired';

            if (tokenNotExpired) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            // Continue only if we have a token that is not expired
            userStore = appContext.userStore;
            _context2.next = 6;
            return userStore.load();

          case 6:
            isRootUser = userStore.user.isRootUser;

            if (isRootUser) {
              (0, _notification.displayWarning)('You have logged in as root user. Logging in as root user is discouraged.');
            }

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _postInit.apply(this, arguments);
}

var plugin = {
  init: init,
  postInit: postInit
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=initialization-plugin.js.map