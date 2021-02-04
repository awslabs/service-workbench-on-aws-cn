"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _api = require("../../helpers/api");

var _BaseStore = require("../BaseStore");

var _ApiKey = _interopRequireDefault(require("./ApiKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ApiKeysStore = _BaseStore.BaseStore.named('ApiKeysStore').props({
  uid: _mobxStateTree.types.identifier,
  apiKeys: _mobxStateTree.types.optional(_mobxStateTree.types.map(_ApiKey["default"]), {})
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var apiKeys;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getApiKeys)(!self.isStoreForCurrentUser() && {
                  uid: self.uid
                });

              case 2:
                apiKeys = _context.sent;
                self.runInAction(function () {
                  var map = {};
                  apiKeys.forEach(function (apiKey) {
                    var apiKeyModel = _ApiKey["default"].create(apiKey);

                    map[apiKeyModel.id] = apiKeyModel;
                  });
                  self.apiKeys.replace(map);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    createNewApiKey: function createNewApiKey() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var apiKey;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.createNewApiKey)(!self.isStoreForCurrentUser() && {
                  uid: self.uid
                });

              case 2:
                apiKey = _context2.sent;
                self.runInAction(function () {
                  // The put call below will automatically use the id from ApiKey
                  // (as it is marked "types.identifier") and add that as a key in the map and
                  // store the object as value against it
                  self.apiKeys.put(_ApiKey["default"].create(apiKey));
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    revokeApiKey: function revokeApiKey(apiKeyId) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var apiKey;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api.revokeApiKey)(apiKeyId, !self.isStoreForCurrentUser() && {
                  uid: self.uid
                });

              case 2:
                apiKey = _context3.sent;
                self.runInAction(function () {
                  self.apiKeys.put(_ApiKey["default"].create(apiKey));
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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
      return self.apiKeys.size === 0;
    },

    get list() {
      var result = []; // converting map self.apiKeys to result array

      self.apiKeys.forEach(function (apiKey) {
        return result.push(apiKey);
      });
      return result;
    },

    isStoreForCurrentUser: function isStoreForCurrentUser() {
      var userStore = (0, _mobxStateTree.getEnv)(self).userStore;
      var currentUser = userStore.user;
      return currentUser.uid === self.uid;
    }
  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use UserStore.apiKeysStore or UsersStore.getApiKeysStore(uid)


var _default = ApiKeysStore;
exports["default"] = _default;
//# sourceMappingURL=ApiKeysStore.js.map