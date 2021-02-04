"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComputePlatformStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// ComputePlatformStore
// ==================================================================
var ComputePlatformStore = _BaseStore.BaseStore.named('ComputePlatformStore').props({
  platformId: '',
  tickPeriod: 300 * 1000 // 5 minutes

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var configurations, platform;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getComputeConfigurations)(self.platformId);

              case 2:
                configurations = _context.sent;
                platform = self.computePlatform;

                if (platform) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                platform.setConfigurations(configurations);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cleanup: function cleanup() {
      self.platformId = '';
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get computePlatform() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var platform = parent.getComputePlatform(self.platformId);
      return platform;
    }

  };
}); // Note: Do NOT register this in the app context, if you want to gain access to an instance
//       use computePlatformsStore.getComputePlatformStore()


exports.ComputePlatformStore = ComputePlatformStore;
//# sourceMappingURL=ComputePlatformStore.js.map