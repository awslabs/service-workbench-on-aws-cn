"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.DataSourceAccountsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _mobx = require("mobx");

var _mobxStateTree = require("mobx-state-tree");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

var _DataSourceAccount = require("./DataSourceAccount");

var _DataSourceAccountStore = require("./DataSourceAccountStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// DataSourceAccountsStore
// ==================================================================
var DataSourceAccountsStore = _BaseStore.BaseStore.named('DataSourceAccountsStore').props({
  accounts: _mobxStateTree.types.map(_DataSourceAccount.DataSourceAccount),
  accountStores: _mobxStateTree.types.map(_DataSourceAccountStore.DataSourceAccountStore),
  tickPeriod: 3 * 60 * 1000 // 3 minutes

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
                return (0, _api.getDataSourceAccounts)();

              case 2:
                accounts = _context.sent;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.accounts, accounts, function (existing, newItem) {
                    existing.setDataSourceAccount(newItem);
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
    addAccount: function addAccount(raw) {
      var id = raw.id;
      var previous = self.accounts.get(id);

      if (!previous) {
        self.accounts.set(raw.id, raw);
      } else {
        previous.setDataSourceAccount(raw);
      }
    },
    getAccountStore: function getAccountStore(accountId) {
      var entry = self.accountStores.get(accountId);

      if (!entry) {
        // Lazily create the store
        self.accountStores.set(accountId, _DataSourceAccountStore.DataSourceAccountStore.create({
          accountId: accountId
        }));
        entry = self.accountStores.get(accountId);
      }

      return entry;
    },
    updateAccount: function updateAccount(account) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var updatedAccount, existingAccount;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.updateRegisteredAccount)(account.id, _lodash["default"].omit(account, ['id']));

              case 2:
                updatedAccount = _context2.sent;
                existingAccount = self.getAccount(account.id); // If we get null values for the props, we need to change them to empty string

                if (_lodash["default"].isEmpty(updatedAccount.contactInfo)) {
                  updatedAccount.contactInfo = '';
                }

                if (_lodash["default"].isEmpty(updatedAccount.description)) {
                  updatedAccount.description = '';
                }

                if (_lodash["default"].isEmpty(updatedAccount.name)) {
                  updatedAccount.name = '';
                }

                existingAccount.setDataSourceAccount(updatedAccount);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    registerAccount: function registerAccount(account) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var newAccount;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api.registerAccount)(account);

              case 2:
                newAccount = _context3.sent;
                self.addAccount(newAccount);
                return _context3.abrupt("return", self.getAccount(account.id));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    registerBucket: function registerBucket(accountId) {
      var _arguments = arguments;
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var bucket, normalizedBucket, account, newBucket;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                bucket = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
                normalizedBucket = _objectSpread({}, bucket, {
                  awsPartition: 'aws',
                  access: 'roles'
                });
                account = self.getAccount(accountId);

                if (!_lodash["default"].isEmpty(account)) {
                  _context4.next = 5;
                  break;
                }

                throw new Error("Account #".concat(accountId, " is not loaded yet"));

              case 5:
                _context4.next = 7;
                return (0, _api.registerBucket)(accountId, normalizedBucket);

              case 7:
                newBucket = _context4.sent;
                return _context4.abrupt("return", account.setBucket(newBucket));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    registerStudy: function registerStudy(accountId, bucketName) {
      var _arguments2 = arguments;
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var study, account, newStudy;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                study = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : {};
                account = self.getAccount(accountId);

                if (!_lodash["default"].isEmpty(account)) {
                  _context5.next = 4;
                  break;
                }

                throw new Error("Account #".concat(accountId, " is not loaded yet"));

              case 4:
                _context5.next = 6;
                return (0, _api.registerStudy)(accountId, bucketName, study);

              case 6:
                newStudy = _context5.sent;
                return _context5.abrupt("return", account.setStudy(newStudy));

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    checkAccountReachability: function checkAccountReachability(accountId) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var accountEntity, account;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _api.checkAccountReachability)(accountId);

              case 2:
                accountEntity = _context6.sent;
                account = self.getAccount(accountId);
                if (account) account.setDataSourceAccount(accountEntity);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    checkStudyReachability: function checkStudyReachability(studyId) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var studyEntity, account, study;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _api.checkStudyReachability)(studyId);

              case 2:
                studyEntity = _context7.sent;
                account = self.getAccount(studyEntity.accountId);
                study = account.getStudy(studyId);
                if (study) study.setStudy(studyEntity);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    cleanup: function cleanup() {
      self.accounts.clear();
      self.accountStores.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.accounts.size === 0;
    },

    get total() {
      return self.accounts.size;
    },

    get list() {
      return _lodash["default"].orderBy((0, _mobx.values)(self.accounts), ['createdAt', 'name'], ['desc', 'asc']);
    },

    getAccount: function getAccount(id) {
      return self.accounts.get(id);
    },

    get dropdownOptions() {
      var result = _lodash["default"].map((0, _mobx.values)(self.accounts), function (account) {
        return {
          key: account.id,
          value: account.id,
          text: account.id,
          content: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
            as: "h5",
            content: account.id,
            subheader: "".concat(account.name).concat(account.hosting ? ' (Hosting Account)' : '')
          })
        };
      });

      return result;
    }

  };
});

exports.DataSourceAccountsStore = DataSourceAccountsStore;

function registerContextItems(appContext) {
  appContext.dataSourceAccountsStore = DataSourceAccountsStore.create({}, appContext);
}
//# sourceMappingURL=DataSourceAccountsStore.js.map