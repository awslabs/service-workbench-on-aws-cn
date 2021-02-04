"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.ScEnvironmentCostsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

var _ScEnvironmentCost = require("./ScEnvironmentCost");

var _ScEnvironmentCostStore = require("./ScEnvironmentCostStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// WARNING WARNING WARNING WARNING WARNING
// ---------------------------------------
// This store is here as a temporary solution, in this store we call the cost api
// for each sc environment. This obviously is not scalable and should not be even an acceptable
// approach, but we need to have it here for now to maintain an existing behaviour.
// The cost api design needs to be addressed ASAP.
// ---------------------------------------
// WARNING WARNING WARNING WARNING WARNING
// ==================================================================
// ScEnvironmentCostsStore
// ==================================================================
var ScEnvironmentCostsStore = _BaseStore.BaseStore.named('ScEnvironmentCostsStore').props({
  costs: _mobxStateTree.types.optional(_mobxStateTree.types.map(_ScEnvironmentCost.ScEnvironmentCost), {}),
  costStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_ScEnvironmentCostStore.ScEnvironmentCostStore), {}),
  tickPeriod: 60 * 1000 // 60 seconds

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var scEnvironmentsStore, environments, getCost, costs;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // we need to check if the environment lists is loaded
                scEnvironmentsStore = self.scEnvironmentsStore;

                if ((0, _BaseStore.isStoreReady)(scEnvironmentsStore)) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return scEnvironmentsStore.load();

              case 4:
                environments = scEnvironmentsStore.list; // 'getCost' is an async function that will attempt to load the
                // cost for the given environment, if an error occurs we
                // don't fail the whole outer doLoad() function.  We just
                // keep the error message in the 'error' props of the raw entity object

                getCost = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(environment) {
                    var envId, rawEntity, entries, message;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            envId = environment.id;
                            rawEntity = {
                              entries: [],
                              id: "".concat(envId, "-cost"),
                              error: ''
                            };
                            _context.prev = 2;
                            _context.next = 5;
                            return (0, _api.getScEnvironmentCost)(envId, 30);

                          case 5:
                            entries = _context.sent;
                            rawEntity.entries = entries;
                            _context.next = 13;
                            break;

                          case 9:
                            _context.prev = 9;
                            _context.t0 = _context["catch"](2);
                            message = _lodash["default"].get(_context.t0, 'message') || _lodash["default"].get(_context.t0, 'friendly', 'Something went wrong');
                            rawEntity.error = message;

                          case 13:
                            return _context.abrupt("return", rawEntity);

                          case 14:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[2, 9]]);
                  }));

                  return function getCost(_x) {
                    return _ref.apply(this, arguments);
                  };
                }();

                _context2.next = 8;
                return Promise.all(_lodash["default"].map(environments, function (env) {
                  return getCost(env);
                }));

              case 8:
                costs = _context2.sent;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.costs, costs, function (exiting, newItem) {
                    exiting.setScEnvironmentCost(newItem);
                  });
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addScEnvironmentCost: function addScEnvironmentCost(rawCost) {
      var id = rawCost.id;
      var previous = self.costs.get(id);

      if (!previous) {
        self.costs.put(rawCost);
      } else {
        previous.setScEnvironmentCost(rawCost);
      }
    },
    getScEnvironmentCostStore: function getScEnvironmentCostStore(envId) {
      var entry = self.costStores.get(envId);

      if (!entry) {
        // Lazily create the store
        self.costStores.set(envId, _ScEnvironmentCostStore.ScEnvironmentCostStore.create({
          envId: envId
        }));
        entry = self.costStores.get(envId);
      }

      return entry;
    },
    cleanup: function cleanup() {
      self.costStores.clear();
      self.costs.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.costs.size === 0;
    },

    getScEnvironmentCost: function getScEnvironmentCost(id) {
      return self.costs.get("".concat(id, "-cost"));
    },

    get scEnvironmentsStore() {
      return (0, _mobxStateTree.getEnv)(self).scEnvironmentsStore;
    }

  };
});

exports.ScEnvironmentCostsStore = ScEnvironmentCostsStore;

function registerContextItems(appContext) {
  appContext.scEnvironmentCostsStore = ScEnvironmentCostsStore.create({}, appContext);
}
//# sourceMappingURL=ScEnvironmentCostsStore.js.map