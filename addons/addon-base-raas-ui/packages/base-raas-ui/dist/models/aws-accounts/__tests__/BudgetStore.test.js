"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mobxStateTreeModule = _interopRequireWildcard(require("mobx-state-tree"));

var _api = require("../../../helpers/api");

var _BudgetStore = require("../BudgetStore");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('BudgetStore', function () {
  var store = _BudgetStore.BudgetStore.create({
    awsAccountUUID: 'some-uuid-value'
  });

  describe('createOrUpdateBudget', function () {
    var awsAccount = {};
    var awsAccountsStore = {
      getAwsAccount: function getAwsAccount() {
        return awsAccount;
      }
    };
    mobxStateTreeModule.getParent = jest.fn().mockReturnValue(awsAccountsStore);
    it('should add a new budget successfully', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var newBudget;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // BUILD
              newBudget = {
                budgetLimit: '1000.0',
                startDate: 1598400000,
                endDate: 1608854400,
                thresholds: [50, 90, 100],
                notificationEmail: 'test@example.com'
              };
              awsAccount = {
                budget: {
                  budgetLimit: ''
                }
              }; // OPERATE

              _context.next = 4;
              return store.createOrUpdateBudget(newBudget);

            case 4:
              // CHECK
              expect(_api.createAwsAccountBudget).toHaveBeenCalledWith({
                id: 'some-uuid-value',
                budgetConfiguration: newBudget
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('should update an existing budget successfully', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var newBudget;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              newBudget = {
                budgetLimit: '1000.0',
                startDate: 1598400000,
                endDate: 1608854400,
                thresholds: [],
                notificationEmail: ''
              };
              awsAccount = {
                budget: {
                  budgetLimit: '500.0'
                }
              }; // OPERATE

              _context2.next = 4;
              return store.createOrUpdateBudget(newBudget);

            case 4:
              // CHECK
              expect(_api.updateAwsAccountBudget).toHaveBeenCalledWith({
                id: 'some-uuid-value',
                budgetConfiguration: {
                  budgetLimit: '1000.0',
                  startDate: 1598400000,
                  endDate: 1608854400
                }
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should throw validation error when input is invalid', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var newBudget;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // BUILD
              newBudget = {
                budgetLimit: '1000.0',
                startDate: 1598400000,
                endDate: 1608854400,
                thresholds: [50],
                notificationEmail: ''
              }; // OPERATE and CHECK

              _context3.next = 3;
              return expect(store.createOrUpdateBudget(newBudget)).rejects.toThrow('Thresholds depends on notification. Please input notification or remove thresholds');

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
});
//# sourceMappingURL=BudgetStore.test.js.map