"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.AccountsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _api = require("../../helpers/api");

var _Account = require("./Account");

var _AccountStore = require("./AccountStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// AccountsStore
// ==================================================================
var AccountsStore = _BaseStore.BaseStore.named('AccountsStore').props({
  accounts: _mobxStateTree.types.optional(_mobxStateTree.types.map(_Account.Account), {}),
  accountStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_AccountStore.AccountStore), {}),
  tickPeriod: 5 * 1000 // 10 sec

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var accounts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getAccounts)();

              case 2:
                accounts = _context.sent;
                // We try to preserve existing accounts data and merge the new data instead
                // We could have used self.accounts.replace(), but it will do clear() then merge()
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.accounts, accounts, function (exiting, newItem) {
                    exiting.setAccount(newItem);
                  });
                });
                return _context.abrupt("return", undefined);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addAccount: function addAccount(rawAccount) {
      var id = rawAccount.id;
      var previous = self.accounts.get(id);

      if (!previous) {
        self.accounts.put(rawAccount);
      } else {
        previous.setAccount(rawAccount);
      }
    },
    removeItem: function removeItem(id) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var account;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                account = self.accounts.get(id);
                self.accounts["delete"](account);
                _context2.next = 4;
                return (0, _api.removeAccountInfo)(id);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getAccountStore: function getAccountStore(accountId) {
      var entry = self.accountStores.get(accountId);

      if (!entry) {
        // Lazily create the store
        self.accountStores.set(accountId, _AccountStore.AccountStore.create({
          accountId: accountId
        }));
        entry = self.accountStores.get(accountId);
      }

      return entry;
    },
    cleanup: function cleanup() {
      self.accounts.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get listCreatingAccount() {
      var result = [];
      self.accounts.forEach(function (account) {
        if (account.status === 'PENDING') {
          result.push(account);
        }
      });
      return _lodash["default"].reverse(_lodash["default"].sortBy(result, ['createdAt', 'name']));
    },

    get listErrorAccount() {
      var result = [];
      self.accounts.forEach(function (account) {
        if (account.status === 'FAILED') {
          result.push(account);
        }
      });
      return _lodash["default"].reverse(_lodash["default"].sortBy(result, ['createdAt', 'name']));
    },

    get empty() {
      return self.accounts.size === 0;
    },

    get total() {
      return self.accounts.size;
    },

    get list() {
      var result = [];
      self.accounts.forEach(function (account) {
        return result.push(account);
      });
      return _lodash["default"].reverse(_lodash["default"].sortBy(result, ['createdAt', 'name']));
    },

    hasAccount: function hasAccount(id) {
      return self.accounts.has(id);
    },
    getAccount: function getAccount(id) {
      return self.accounts.get(id);
    }
  };
});

exports.AccountsStore = AccountsStore;

function registerContextItems(appContext) {
  appContext.accountsStore = AccountsStore.create({}, appContext);
}
//# sourceMappingURL=AccountsStore.js.map