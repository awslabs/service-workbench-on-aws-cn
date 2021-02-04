"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvironmentStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _api = require("../../helpers/api");

var _externalCostUtil = require("../../helpers/externalCostUtil");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// EnvironmentStore
// ==================================================================
var EnvironmentStore = _BaseStore.BaseStore.named('EnvironmentStore').props({
  environmentId: '',
  tickPeriod: 300 * 1000 // 5 minutes

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var parent, rawEnvironment, envCreatedAt, now, diffTime, numberOfDaysBetweenDateCreatedAndToday, numberDaysInPast, environmentCost;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parent = (0, _mobxStateTree.getParent)(self, 2);
                _context.next = 3;
                return (0, _api.getEnvironment)(self.environmentId);

              case 3:
                rawEnvironment = _context.sent;
                envCreatedAt = new Date(rawEnvironment.createdAt);
                now = new Date();
                diffTime = Math.abs(now - envCreatedAt);
                numberOfDaysBetweenDateCreatedAndToday = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                _context.prev = 8;
                numberDaysInPast = Math.min(30, numberOfDaysBetweenDateCreatedAndToday);

                if (!rawEnvironment.isExternal) {
                  _context.next = 16;
                  break;
                }

                _context.next = 13;
                return (0, _externalCostUtil.getEstimatedCost)(rawEnvironment, numberDaysInPast);

              case 13:
                _context.t0 = _context.sent;
                _context.next = 19;
                break;

              case 16:
                _context.next = 18;
                return (0, _api.getEnvironmentCost)(self.environmentId, numberDaysInPast);

              case 18:
                _context.t0 = _context.sent;

              case 19:
                environmentCost = _context.t0;
                rawEnvironment.costs = environmentCost;
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t1 = _context["catch"](8);
                (0, _notification.displayWarning)('Error encountered retrieving cost data', _context.t1);

              case 26:
                parent.addEnvironment(rawEnvironment);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 23]]);
      }))();
    },
    cleanup: function cleanup() {
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get environment() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var w = parent.getEnvironment(self.environmentId);
      return w;
    }

  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use environmentsStore.getEnvironmentStore()
// eslint-disable-next-line import/prefer-default-export


exports.EnvironmentStore = EnvironmentStore;
//# sourceMappingURL=EnvironmentStore.js.map