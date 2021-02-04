"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _lodash = _interopRequireDefault(require("lodash"));

var _api = require("../../helpers/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// BudgetStore
// ==================================================================
var BudgetStore = _BaseStore.BaseStore.named('BudgetStore').props({
  awsAccountUUID: ''
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var parent, rawBudget;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parent = (0, _mobxStateTree.getParent)(self, 2);
                _context.next = 3;
                return (0, _api.getAwsAccountBudget)(self.awsAccountUUID);

              case 3:
                rawBudget = _context.sent;
                parent.addBudget(self.awsAccountUUID, rawBudget);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    createOrUpdateBudget: function createOrUpdateBudget(rawBudget) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var parent, existingBudget, requestData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                parent = (0, _mobxStateTree.getParent)(self, 2);
                existingBudget = parent.getAwsAccount(self.awsAccountUUID).budget; // Validate dependency between email and thresholds

                if (!(_lodash["default"].isEmpty(rawBudget.thresholds) && !_lodash["default"].isEmpty(rawBudget.notificationEmail))) {
                  _context2.next = 4;
                  break;
                }

                throw new Error('Notification depends on thresholds. Please input thresholds or remove notification.');

              case 4:
                if (!(!_lodash["default"].isEmpty(rawBudget.thresholds) && _lodash["default"].isEmpty(rawBudget.notificationEmail))) {
                  _context2.next = 6;
                  break;
                }

                throw new Error('Thresholds depends on notification. Please input notification or remove thresholds');

              case 6:
                // Remove empty attributes
                rawBudget = _lodash["default"].omitBy(rawBudget, function (val) {
                  return _lodash["default"].isEmpty(val) && !_lodash["default"].isNumber(val);
                });
                requestData = {
                  id: self.awsAccountUUID,
                  budgetConfiguration: rawBudget
                };

                if (!_lodash["default"].isEmpty(existingBudget.budgetLimit)) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 11;
                return (0, _api.createAwsAccountBudget)(requestData);

              case 11:
                _context2.next = 15;
                break;

              case 13:
                _context2.next = 15;
                return (0, _api.updateAwsAccountBudget)(requestData);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    cleanup: function cleanup() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      superCleanup();
      parent.addBudget(self.awsAccountUUID, {});
    }
  };
}).views(function (self) {
  return {
    get budget() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var account = parent.getAwsAccount(self.awsAccountUUID);
      return account.budget;
    },

    get thresholdsOptions() {
      return [{
        id: '50',
        value: 50,
        text: '50%'
      }, {
        id: '70',
        value: 70,
        text: '70%'
      }, {
        id: '80',
        value: 80,
        text: '80%'
      }, {
        id: '90',
        value: 90,
        text: '90%'
      }, {
        id: '100',
        value: 100,
        text: '100%'
      }];
    }

  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use awsAccountsStore.getBudgetStore()
// eslint-disable-next-line import/prefer-default-export


exports.BudgetStore = BudgetStore;
//# sourceMappingURL=BudgetStore.js.map