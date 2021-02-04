"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.EnvTypesStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _EnvType = require("./EnvType");

var _api = require("../../helpers/api");

var _EnvTypeConfigsStore = require("./EnvTypeConfigsStore");

var _EnvTypeStore = require("./EnvTypeStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// EnvTypesStore
// ==================================================================
var EnvTypesStore = _BaseStore.BaseStore.named('EnvTypesStore').props({
  // map of EnvTypes with key = id, value = EnvType MST model instance
  envTypes: _mobxStateTree.types.optional(_mobxStateTree.types.map(_EnvType.EnvType), {}),
  // map of EnvTypeStores with key = id, value = EnvTypeStore MST model instance
  envTypeStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_EnvTypeStore.EnvTypeStore), {}),
  // map of EnvTypeConfigsStores with key = id, value = EnvTypeConfigsStore MST model instance
  envTypeConfigsStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_EnvTypeConfigsStore.EnvTypeConfigsStore), {}),
  tickPeriod: 60 * 1000 // 1 minute

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var envTypes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getAllEnvTypes)();

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = [];

              case 5:
                envTypes = _context.t0;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.envTypes, envTypes, function (exiting, newItem) {
                    exiting.setEnvType(newItem);
                  });
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addEnvType: function addEnvType(rawEnvType) {
      var id = rawEnvType.id;
      var previous = self.envTypes.get(id);

      if (!previous) {
        self.envTypes.put(rawEnvType);
      } else {
        previous.setEnvType(rawEnvType);
      }
    },
    createEnvType: function createEnvType(envType) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var createdEnvType, appContext;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.createEnvType)(envType);

              case 2:
                createdEnvType = _context2.sent;
                self.runInAction(function () {
                  // TODO replace this with a call to self.addEnvType() above
                  // Add newly created env type to env types map
                  var createdEnvTypeModel = _EnvType.EnvType.create(createdEnvType);

                  self.envTypes.set(createdEnvTypeModel.id, createdEnvTypeModel);
                }); // Addition or deletion of env type impacts env type candidates store
                // because imported env types are no longer candidates for import
                // let candidate store know that env type candidate is imported

                appContext = (0, _mobxStateTree.getEnv)(self);
                _context2.next = 7;
                return appContext.envTypeCandidatesStore.onEnvTypeCandidateImport(envType.id);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteEnvType: function deleteEnvType(id) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var appContext;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api.deleteEnvType)(id);

              case 2:
                self.runInAction(function () {
                  self.envTypes["delete"](id);
                }); // Addition or deletion of env type impacts env type candidates store
                // because delete env types are candidates for import again
                // reload env type candidates store as well

                appContext = (0, _mobxStateTree.getEnv)(self);
                _context3.next = 6;
                return appContext.envTypeCandidatesStore.load();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateEnvType: function updateEnvType(envType) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var updatedEnvType;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _api.updateEnvType)(envType);

              case 2:
                updatedEnvType = _context4.sent;
                self.runInAction(function () {
                  var previousEnvType = self.envTypes.get(updatedEnvType.id);
                  previousEnvType.setEnvType(updatedEnvType);
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    approveEnvType: function approveEnvType(id) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var previous, updated;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                previous = self.getEnvType(id);
                _context5.next = 3;
                return (0, _api.approveEnvType)(id, previous.rev);

              case 3:
                updated = _context5.sent;
                previous.setEnvType(updated);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    revokeEnvType: function revokeEnvType(id) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var previous, updated;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                previous = self.getEnvType(id);
                _context6.next = 3;
                return (0, _api.revokeEnvType)(id, previous.rev);

              case 3:
                updated = _context6.sent;
                previous.setEnvType(updated);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getEnvTypeStore: function getEnvTypeStore(envTypeId) {
      var entry = self.envTypeStores.get(envTypeId);

      if (!entry) {
        // Lazily create the store
        self.envTypeStores.set(envTypeId, _EnvTypeStore.EnvTypeStore.create({
          envTypeId: envTypeId
        }));
        entry = self.envTypeStores.get(envTypeId);
      }

      return entry;
    },
    getEnvTypeConfigsStore: function getEnvTypeConfigsStore(envTypeId) {
      var envTypeConfigsStore = self.envTypeConfigsStores.get(envTypeId);

      if (!envTypeConfigsStore) {
        self.envTypeConfigsStores.set(envTypeId, _EnvTypeConfigsStore.EnvTypeConfigsStore.create({
          id: envTypeId
        }));
        envTypeConfigsStore = self.envTypeConfigsStores.get(envTypeId);
      }

      return envTypeConfigsStore;
    },
    cleanup: function cleanup() {
      self.envTypes.clear();
      self.envTypeStores.clear();
      self.envTypeConfigsStores.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get list() {
      return _lodash["default"].sortBy((0, _utils.mapToArray)(self.envTypes), function (c) {
        return -1 * _lodash["default"].get(c, 'provisioningArtifact.createdTime');
      });
    },

    get listApproved() {
      return _lodash["default"].filter(self.list, 'isApproved');
    },

    get listNotApproved() {
      return _lodash["default"].filter(self.list, 'isNotApproved');
    },

    get empty() {
      return _lodash["default"].isEmpty(self.list);
    },

    getEnvType: function getEnvType(id) {
      return self.envTypes.get(id);
    }
  };
});

exports.EnvTypesStore = EnvTypesStore;

function registerContextItems(appContext) {
  appContext.envTypesStore = EnvTypesStore.create({}, appContext);
}
//# sourceMappingURL=EnvTypesStore.js.map