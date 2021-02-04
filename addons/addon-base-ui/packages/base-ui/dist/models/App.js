"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.App = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var App = _mobxStateTree.types.model('BaseApp', {
  userAuthenticated: false
}).actions(function () {
  return {
    // I had issues using runInAction from mobx
    // the issue is discussed here https://github.com/mobxjs/mobx-state-tree/issues/915
    runInAction: function runInAction(fn) {
      return fn();
    }
  };
}).actions(function (self) {
  return {
    init: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload) {
        var tokenNotExpired;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tokenNotExpired = _lodash["default"].get(payload, 'tokenInfo.status') === 'notExpired';

                if (tokenNotExpired) {
                  self.setUserAuthenticated(true);
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    setUserAuthenticated: function setUserAuthenticated(flag) {
      self.userAuthenticated = flag;
    },
    // this method is called by the Cleaner
    cleanup: function cleanup() {
      self.setUserAuthenticated(false);
    }
  };
});

exports.App = App;

function registerContextItems(appContext) {
  appContext.app = App.create({}, appContext);
}
//# sourceMappingURL=App.js.map