"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScEnvironmentCostStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// ScEnvironmentCostStore
// ==================================================================
var ScEnvironmentCostStore = _BaseStore.BaseStore.named('ScEnvironmentCostStore').props({
  envId: '',
  tickPeriod: 12 * 60 * 60 * 1000 // 12 hours

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, parent, rawEntity, entries, message;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = self.envId;
                parent = (0, _mobxStateTree.getParent)(self, 2);
                rawEntity = {
                  entries: [],
                  id: "".concat(id, "-cost"),
                  error: ''
                }; // We are breaking the norm here by doing a try/catch. This is because we also want
                // to update the entity.error value based on if we received an error. In general,
                // entity models don't have 'error' property that reflects the loading status, this is
                // because the 'error' property belongs to the store.

                _context.prev = 3;
                _context.next = 6;
                return (0, _api.getScEnvironmentCost)(id, 30);

              case 6:
                entries = _context.sent;
                rawEntity.entries = entries;
                parent.addScEnvironmentCost(rawEntity);
                _context.next = 17;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                message = _lodash["default"].get(_context.t0, 'message') || _lodash["default"].get(_context.t0, 'friendly', 'Something went wrong');
                rawEntity.error = message;
                parent.addScEnvironmentCost(rawEntity); // We want to throw an error here so that the store can be in the correct state

                throw _context.t0;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }))();
    },
    cleanup: function cleanup() {
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get scEnvironmentCost() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var cost = parent.getScEnvironmentCost(self.envId);
      return cost;
    }

  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use scEnvironmentCostsStore.getScEnvironmentCostStore()
// eslint-disable-next-line import/prefer-default-export


exports.ScEnvironmentCostStore = ScEnvironmentCostStore;
//# sourceMappingURL=ScEnvironmentCostStore.js.map