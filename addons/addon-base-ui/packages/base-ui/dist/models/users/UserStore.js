"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.UserStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _api = require("../../helpers/api");

var _BaseStore = require("../BaseStore");

var _User = require("./User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UserStore = _BaseStore.BaseStore.named('UserStore').props({
  user: _mobxStateTree.types.maybe(_User.User)
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getUser)();

              case 2:
                user = _context.sent;
                self.runInAction(function () {
                  self.user = _User.User.create(user);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cleanup: function cleanup() {
      self.user = undefined;
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return _lodash["default"].isEmpty(self.user);
    }

  };
});

exports.UserStore = UserStore;

function registerContextItems(appContext) {
  appContext.userStore = UserStore.create({}, appContext);
}
//# sourceMappingURL=UserStore.js.map