"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * This is where we run the post initialization logic that is specific to Service Workbench.
 *
 * @param payload A free form object. This function expects a property named 'tokenInfo' to be available on the payload object.
 * @param appContext An application context object containing various Mobx Stores, Models etc.
 *
 * @returns {Promise<void>}
 */
function postInit(_x, _x2) {
  return _postInit.apply(this, arguments);
}

function _postInit() {
  _postInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload, appContext) {
    var tokenNotExpired, userStore, usersStore, awsAccountsStore, userRolesStore, indexesStore, projectsStore;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokenNotExpired = _lodash["default"].get(payload, 'tokenInfo.status') === 'notExpired';

            if (tokenNotExpired) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            // Continue only if we have a token that is not expired
            userStore = appContext.userStore, usersStore = appContext.usersStore, awsAccountsStore = appContext.awsAccountsStore, userRolesStore = appContext.userRolesStore, indexesStore = appContext.indexesStore, projectsStore = appContext.projectsStore; // TODO: Load these stores as needed instead of on startup

            if (!(userStore.user.status === 'active')) {
              _context.next = 7;
              break;
            }

            _context.next = 7;
            return Promise.all([usersStore.load(), awsAccountsStore.load(), userRolesStore.load(), indexesStore.load(), projectsStore.load()]);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _postInit.apply(this, arguments);
}

var plugin = {
  postInit: postInit
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=initialization-plugin.js.map