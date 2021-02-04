"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.UserApiKeysStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("../BaseStore");

var _ApiKeysStore = _interopRequireDefault(require("./ApiKeysStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UserApiKeysStore = _BaseStore.BaseStore.named('UserApiKeysStore').props({
  // key = uid and value = ApiKeysStore for that user
  userApiKeysStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_ApiKeysStore["default"]), {})
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userStore, currentUser, currentUserApiKeyStore;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userStore = (0, _mobxStateTree.getEnv)(self).userStore;

                if ((0, _BaseStore.isStoreReady)(userStore)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return userStore.load();

              case 4:
                currentUser = userStore.user;
                currentUserApiKeyStore = _ApiKeysStore["default"].create({
                  uid: currentUser.uid
                });

                if ((0, _BaseStore.isStoreReady)(currentUserApiKeyStore)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 9;
                return currentUserApiKeyStore.load();

              case 9:
                self.runInAction(function () {
                  // The put call below will automatically use the id from currentUserApiKeyStore
                  // (as it is marked "types.identifier") and add that as a key in the map and
                  // store the object as value against it
                  self.userApiKeysStores.put(currentUserApiKeyStore);
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getApiKeysStore: function getApiKeysStore(uid) {
      var entry = self.userApiKeysStores.get(uid);

      if (!entry) {
        self.userApiKeysStores.put(_ApiKeysStore["default"].create({
          uid: uid
        }));
        entry = self.userApiKeysStores.get(uid);
      }

      return entry;
    },
    getCurrentUserApiKeysStore: function getCurrentUserApiKeysStore() {
      var userStore = (0, _mobxStateTree.getEnv)(self).userStore;
      var currentUser = userStore.user;
      return self.getApiKeysStore(currentUser.id);
    },
    cleanup: function cleanup() {
      self.user = undefined;
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.userApiKeysStores.size === 0;
    }

  };
});

exports.UserApiKeysStore = UserApiKeysStore;

function registerContextItems(appContext) {
  appContext.userApiKeysStore = UserApiKeysStore.create({}, appContext);
}
//# sourceMappingURL=UserApiKeysStore.js.map