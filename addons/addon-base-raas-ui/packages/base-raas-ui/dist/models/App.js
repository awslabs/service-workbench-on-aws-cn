"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createAppType(appContext) {
  var ParentApp = (0, _mobxStateTree.getType)(appContext.app);
  var AppType = ParentApp.named('RaasApp').props({
    userRegistered: false
  }).actions(function (self) {
    // save the base implementations of the parent app
    var superInit = self.init;
    var superCleanup = self.cleanup;
    return {
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return superInit(payload);

                case 2:
                  self.runInAction(function () {
                    var userStore = (0, _mobxStateTree.getEnv)(self).userStore;

                    if (_lodash["default"].get(userStore, 'user.status') === 'active') {
                      self.setUserRegistered(true);
                    }
                  });

                case 3:
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
      setUserRegistered: function setUserRegistered(flag) {
        self.userRegistered = flag;
      },
      // this method is called by the Cleaner
      cleanup: function cleanup() {
        self.setUserRegistered(false);
        superCleanup();
      }
    };
  });
  return AppType;
}

function registerContextItems(appContext) {
  var App = createAppType(appContext);
  appContext.app = App.create({}, appContext);
}
//# sourceMappingURL=App.js.map