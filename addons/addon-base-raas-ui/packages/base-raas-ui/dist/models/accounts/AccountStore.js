"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// AccountStore
// ==================================================================
var AccountStore = _BaseStore.BaseStore.named('AccountStore').props({
  accountId: '',
  tickPeriod: 300 * 1000 // 5 minutes

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var parent, rawAccount;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parent = (0, _mobxStateTree.getParent)(self, 2);
                _context.next = 3;
                return (0, _api.getAccount)(self.accountId);

              case 3:
                rawAccount = _context.sent;
                parent.addAccount(rawAccount);
                return _context.abrupt("return", undefined);

              case 6:
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
    get account() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var w = parent.getAccount(self.accountId);
      return w;
    }

  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use accountsStore.getAccountStore()
// eslint-disable-next-line import/prefer-default-export


exports.AccountStore = AccountStore;
//# sourceMappingURL=AccountStore.js.map