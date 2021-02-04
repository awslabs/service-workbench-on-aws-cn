"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvTypeStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// EnvTypeStore
// ==================================================================
var EnvTypeStore = _BaseStore.BaseStore.named('EnvTypeStore').props({
  envTypeId: ''
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var parent, rawEnv;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parent = (0, _mobxStateTree.getParent)(self, 2);
                _context.next = 3;
                return (0, _api.getEnvType)(self.envTypeId);

              case 3:
                rawEnv = _context.sent;
                parent.addEnvType(rawEnv);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cleanup: function cleanup() {
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get envType() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var envType = parent.getEnvType(self.envTypeId);
      return envType;
    }

  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use envTypesStore.getEnvTypeStore()
// eslint-disable-next-line import/prefer-default-export


exports.EnvTypeStore = EnvTypeStore;
//# sourceMappingURL=EnvTypeStore.js.map