"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScEnvConnectionStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// ScEnvConnectionStore
// ==================================================================
var ScEnvConnectionStore = _BaseStore.BaseStore.named('ScEnvConnectionStore').props({
  envId: '',
  tickPeriod: 30 * 1000 // 30 seconds

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var env, raw;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                env = self.scEnvironment;
                _context.next = 3;
                return (0, _api.getScEnvironmentConnections)(self.envId);

              case 3:
                raw = _context.sent;
                env.setConnections(raw);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    createConnectionUrl: function createConnectionUrl(connectionId) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var urlObj;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.createScEnvironmentConnectionUrl)(self.envId, connectionId);

              case 2:
                urlObj = _context2.sent;
                return _context2.abrupt("return", _lodash["default"].get(urlObj, 'url'));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    sendSshKey: function sendSshKey(connectionId, keyPairId) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", (0, _api.sendSshKey)(self.envId, connectionId, keyPairId));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getWindowsRdpInfo: function getWindowsRdpInfo(connectionId) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", (0, _api.getWindowsRpInfo)(self.envId, connectionId));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    cleanup: function cleanup() {
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get scEnvironment() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var w = parent.getScEnvironment(self.envId);
      return w;
    },

    get empty() {
      return _lodash["default"].isEmpty(self.scEnvironment.connections);
    }

  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use scEnvironmentsStore.getScEnvConnectionStore()
// eslint-disable-next-line import/prefer-default-export


exports.ScEnvConnectionStore = ScEnvConnectionStore;
//# sourceMappingURL=ScEnvConnectionStore.js.map