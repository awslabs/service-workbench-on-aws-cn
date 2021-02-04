"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require("../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Called when user attempts to login explicitly (i.e., when the user explicitly initiates the login process).
 * Note that this method is ONLY invoked during explicit login initiation. For example, if the user has logged in before
 * and during the application initialization, the application detects the login automatically (due to presence of the
 * authorization token in local storage or url etc) this method is NOT called.
 *
 * Also, this method is called upon login attempt BEFORE the login process is actually complete.
 *
 * @returns {Promise<void>}
 */
function loginInitiated() {
  return _loginInitiated.apply(this, arguments);
}
/**
 * Called when the application detects that the user has logged in explicitly or implicitly.
 * Note that this is called even for implicit login detection. For example, if the user has logged in before and during
 * the application initialization, the application detects login automatically (due to presence of the authorization token
 * in local storage or url etc) this method is still called.
 *
 * Also, this method is called AFTER login is detected i.e., after the login process is complete.
 *
 * @param explicitLogin A flag indicating whether the login was detected as a result of explicit login attempt.
 * This flag will NOT be passed in situations where the application cannot determine with certainty if the detected login
 * was a result of explicit login or implicit login.
 *
 * @returns {Promise<void>}
 */
// eslint-disable-next-line no-unused-vars


function _loginInitiated() {
  _loginInitiated = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loginInitiated.apply(this, arguments);
}

function loginDetected() {
  return _loginDetected.apply(this, arguments);
}
/**
 * Called when user attempts to logout explicitly (i.e., when the user explicitly initiates the logout process).
 * Note that this method is only invoked during explicit logout initiation. For example, if the user has logged out before
 * and during the application initialization, the application detects that the user has logged out (due to absence of the
 * authorization token in local storage and url etc) this method is NOT called.
 *
 * @param autoLogout A flag indicating whether the logout was explicitly initiated due to an auto-logout action.
 * For example, if the application explicitly initiates an auto-logout sequence after detecting user inactivity for
 * certain period.
 *
 * @returns {Promise<void>}
 */
// eslint-disable-next-line no-unused-vars


function _loginDetected() {
  _loginDetected = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _ref,
        explicitLogin,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, explicitLogin = _ref.explicitLogin;

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loginDetected.apply(this, arguments);
}

function logoutInitiated() {
  return _logoutInitiated.apply(this, arguments);
}
/**
 * Called when the application detects that the user has logged out explicitly or implicitly.
 * Note that this is called even for implicit logout detection. For example, if the user has logged out before
 * and during the application initialization, the application detects that the user has logged out (due to absence of the
 * authorization token in local storage and url etc) this method is still called.
 * (In this sense the "log out detection" is more of "log in NOT detected")
 *
 * Also, this method is called AFTER logout is detected i.e., after the logout process is complete
 * (and the authorization token(s) have been cleared from memory or local storage).
 *
 * @param explicitLogout A flag indicating whether the logout was detected as a result of explicit logout attempt.
 * This flag will NOT be passed in situations where the application cannot determine with certainty if the detected logout
 * was a result of explicit logout or implicit logout.
 * @param autoLogout A flag indicating whether the logout was explicitly initiated due to an auto-logout action.
 * For example, if the application explicitly initiates an auto-logout sequence after detecting user inactivity for
 * certain period.
 * This flag will NOT be passed in situations where the application cannot determine with certainty if the detected logout
 * was a result of explicit auto-logout or implicit logout.
 *
 * @returns {Promise<void>}
 */
// eslint-disable-next-line no-unused-vars


function _logoutInitiated() {
  _logoutInitiated = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _ref2,
        autoLogout,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref2 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, autoLogout = _ref2.autoLogout;
            _context3.next = 3;
            return (0, _api.logout)();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logoutInitiated.apply(this, arguments);
}

function logoutDetected() {
  return _logoutDetected.apply(this, arguments);
}

function _logoutDetected() {
  _logoutDetected = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var _ref3,
        explicitLogout,
        autoLogout,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref3 = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, explicitLogout = _ref3.explicitLogout, autoLogout = _ref3.autoLogout;

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _logoutDetected.apply(this, arguments);
}

var plugin = {
  loginInitiated: loginInitiated,
  loginDetected: loginDetected,
  logoutInitiated: logoutInitiated,
  logoutDetected: logoutDetected
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=authentication-plugin.js.map