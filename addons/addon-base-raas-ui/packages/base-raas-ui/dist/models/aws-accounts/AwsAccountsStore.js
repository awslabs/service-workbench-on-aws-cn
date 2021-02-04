"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.AwsAccountsStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

var _AwsAccount = require("./AwsAccount");

var _BudgetStore = require("./BudgetStore");

var _Budget = _interopRequireDefault(require("./Budget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// AwsAccountsStore
// ==================================================================
var AwsAccountsStore = _BaseStore.BaseStore.named('AwsAccountsStore').props({
  awsAccounts: _mobxStateTree.types.optional(_mobxStateTree.types.map(_AwsAccount.AwsAccount), {}),
  budgetStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_BudgetStore.BudgetStore), {}),
  tickPeriod: 10 * 1000 // 10 sec

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var awsAccounts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getAwsAccounts)();

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = [];

              case 5:
                awsAccounts = _context.t0;
                // We try to preserve existing accounts data and merge the new data instead
                // We could have used self.accounts.replace(), but it will do clear() then merge()
                self.runInAction(function () {
                  awsAccounts.forEach(function (awsAccount) {
                    var awsAccountsModel = _AwsAccount.AwsAccount.create(awsAccount);

                    var previous = self.awsAccounts.get(awsAccountsModel.id);

                    if (!previous) {
                      self.awsAccounts.set(awsAccountsModel.id, awsAccountsModel);
                    } else {
                      previous.setAwsAccounts(awsAccount);
                    }
                  });
                });
                return _context.abrupt("return", undefined);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cleanup: function cleanup() {
      superCleanup();
    },
    addAwsAccount: function () {
      var _addAwsAccount2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(awsAccount) {
        var addedAwsAccount;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.addAwsAccount)(awsAccount);

              case 2:
                addedAwsAccount = _context2.sent;
                self.runInAction(function () {
                  var addedAwsAccountModel = _AwsAccount.AwsAccount.create(addedAwsAccount);

                  self.awsAccounts.set(addedAwsAccountModel.id, addedAwsAccountModel);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addAwsAccount(_x) {
        return _addAwsAccount2.apply(this, arguments);
      }

      return addAwsAccount;
    }(),
    createAwsAccount: function () {
      var _createAwsAccount2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(awsAccount) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api.createAwsAccount)(awsAccount);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createAwsAccount(_x2) {
        return _createAwsAccount2.apply(this, arguments);
      }

      return createAwsAccount;
    }(),
    getBudgetStore: function getBudgetStore(awsAccountUUID) {
      var entry = self.budgetStores.get(awsAccountUUID);

      if (!entry) {
        // Lazily create the store
        self.budgetStores.set(awsAccountUUID, _BudgetStore.BudgetStore.create({
          awsAccountUUID: awsAccountUUID
        }));
        entry = self.budgetStores.get(awsAccountUUID);
      }

      return entry;
    },
    addBudget: function addBudget(awsAccountUUID, rawBudget) {
      var account = self.awsAccounts.get(awsAccountUUID);
      account.budget = _Budget["default"].create(rawBudget);
    }
  };
}).views(function (self) {
  return {
    get list() {
      var result = []; // converting map self.users to result array

      self.awsAccounts.forEach(function (awsAccount) {
        var res = {};
        res.name = awsAccount.name;
        res.id = awsAccount.id;
        res.accountId = awsAccount.accountId;
        res.roleArn = awsAccount.roleArn;
        res.description = awsAccount.description;
        res.externalId = awsAccount.externalId;
        res.vpcId = awsAccount.vpcId;
        res.subnetId = awsAccount.subnetId;
        res.encryptionKeyArn = awsAccount.encryptionKeyArn;
        result.push(res);
      });
      return result;
    },

    get dropdownOptions() {
      var result = []; // converting map self.users to result array

      self.awsAccounts.forEach(function (awsAccount) {
        var account = {};
        account.key = awsAccount.id;
        account.value = awsAccount.id; // For migration purposes fallback to id if there's no name

        account.text = "".concat(awsAccount.description, " (").concat(awsAccount.name || awsAccount.id, ")");
        result.push(account);
      });
      return result;
    },

    getNameForAccountId: function getNameForAccountId(id) {
      var account = self.awsAccounts.get(id); // For migration purposes fallback to id if there's no name

      if (!account || !account.name) {
        return id;
      }

      return "".concat(account.name, " (").concat(account.accountId, ")");
    },
    getAwsAccount: function getAwsAccount(id) {
      return self.awsAccounts.get(id);
    }
  };
});

exports.AwsAccountsStore = AwsAccountsStore;

function registerContextItems(appContext) {
  appContext.awsAccountsStore = AwsAccountsStore.create({}, appContext);
}
//# sourceMappingURL=AwsAccountsStore.js.map