"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.filterNames = exports.ScEnvironmentsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _mobxStateTree = require("mobx-state-tree");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

var _ScEnvironment = require("./ScEnvironment");

var _ScEnvironmentStore = require("./ScEnvironmentStore");

var _ScEnvConnectionStore = require("./ScEnvConnectionStore");

var _filters;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var filterNames = {
  ALL: 'all',
  AVAILABLE: 'available',
  STOPPED: 'stopped',
  PENDING: 'pending',
  ERRORED: 'errored',
  TERMINATED: 'terminated'
}; // A map, with the key being the filter name and the value being the function that will be used to filter the workspace

exports.filterNames = filterNames;
var filters = (_filters = {}, _defineProperty(_filters, filterNames.ALL, function () {
  return true;
}), _defineProperty(_filters, filterNames.AVAILABLE, function (env) {
  return env.status === 'COMPLETED' || env.status === 'TAINTED';
}), _defineProperty(_filters, filterNames.STOPPED, function (env) {
  return env.status === 'STOPPED';
}), _defineProperty(_filters, filterNames.PENDING, function (env) {
  return env.status === 'PENDING' || env.status === 'TERMINATING' || env.status === 'STARTING' || env.status === 'STOPPING';
}), _defineProperty(_filters, filterNames.ERRORED, function (env) {
  return env.status === 'FAILED' || env.status === 'TERMINATING_FAILED' || env.status === 'STARTING_FAILED' || env.status === 'STOPPING_FAILED';
}), _defineProperty(_filters, filterNames.TERMINATED, function (env) {
  return env.status === 'TERMINATED';
}), _filters); // ==================================================================
// ScEnvironmentsStore
// ==================================================================

var ScEnvironmentsStore = _BaseStore.BaseStore.named('ScEnvironmentsStore').props({
  environments: _mobxStateTree.types.optional(_mobxStateTree.types.map(_ScEnvironment.ScEnvironment), {}),
  environmentStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_ScEnvironmentStore.ScEnvironmentStore), {}),
  connectionStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_ScEnvConnectionStore.ScEnvConnectionStore), {}),
  tickPeriod: 30 * 1000 // 30 seconds

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var environments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getScEnvironments)();

              case 2:
                environments = _context.sent;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.environments, environments, function (exiting, newItem) {
                    exiting.setScEnvironment(newItem);
                  });
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addScEnvironment: function addScEnvironment(rawEnvironment) {
      var id = rawEnvironment.id;
      var previous = self.environments.get(id);

      if (!previous) {
        self.environments.put(rawEnvironment);
      } else {
        previous.setScEnvironment(rawEnvironment);
      }
    },
    createScEnvironment: function createScEnvironment(environment) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.createScEnvironment)(environment);

              case 2:
                result = _context2.sent;
                self.addScEnvironment(result);
                return _context2.abrupt("return", self.getScEnvironment(result.id));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    terminateScEnvironment: function terminateScEnvironment(id) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var env;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api.deleteScEnvironment)(id);

              case 2:
                env = self.getScEnvironment(id);

                if (env) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                env.setStatus('TERMINATING');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    startScEnvironment: function startScEnvironment(id) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var env;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _api.startScEnvironment)(id);

              case 2:
                env = self.getScEnvironment(id);

                if (env) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                env.setStatus('STARTING');

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    stopScEnvironment: function stopScEnvironment(id) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var env;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _api.stopScEnvironment)(id);

              case 2:
                env = self.getScEnvironment(id);

                if (env) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return");

              case 5:
                env.setStatus('STOPPING');

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getScEnvironmentStore: function getScEnvironmentStore(envId) {
      var entry = self.environmentStores.get(envId);

      if (!entry) {
        // Lazily create the store
        self.environmentStores.set(envId, _ScEnvironmentStore.ScEnvironmentStore.create({
          envId: envId
        }));
        entry = self.environmentStores.get(envId);
      }

      return entry;
    },
    getScEnvConnectionStore: function getScEnvConnectionStore(envId) {
      var entry = self.connectionStores.get(envId);

      if (!entry) {
        // Lazily create the store
        self.connectionStores.set(envId, _ScEnvConnectionStore.ScEnvConnectionStore.create({
          envId: envId
        }));
        entry = self.connectionStores.get(envId);
      }

      return entry;
    },
    cleanup: function cleanup() {
      self.environments.clear();
      self.environmentStores.clear();
      self.connectionStores.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.environments.size === 0;
    },

    get total() {
      return self.environments.size;
    },

    get list() {
      return _lodash["default"].orderBy((0, _mobx.values)(self.environments), ['createdAt', 'name'], ['desc', 'asc']);
    },

    filtered: function filtered(filterName) {
      var filter = filters[filterName] || function () {
        return true;
      };

      var filtered = _lodash["default"].filter((0, _mobx.values)(self.environments), filter);

      return _lodash["default"].orderBy(filtered, ['createdAt', 'name'], ['desc', 'asc']);
    },
    getScEnvironment: function getScEnvironment(id) {
      return self.environments.get(id);
    },
    canChangeState: function canChangeState(id) {
      var outputs = self.environments.get(id).outputs;
      var result = false;
      outputs.forEach(function (output) {
        if (output.OutputKey === 'Ec2WorkspaceInstanceId' || output.OutputKey === 'NotebookInstanceName') {
          result = true;
        }
      });
      return result;
    },

    get user() {
      return (0, _mobxStateTree.getEnv)(self).userStore.user;
    }

  };
});

exports.ScEnvironmentsStore = ScEnvironmentsStore;

function registerContextItems(appContext) {
  appContext.scEnvironmentsStore = ScEnvironmentsStore.create({}, appContext);
}
//# sourceMappingURL=ScEnvironmentsStore.js.map