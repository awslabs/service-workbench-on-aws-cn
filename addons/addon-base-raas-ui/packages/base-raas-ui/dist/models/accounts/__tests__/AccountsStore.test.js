"use strict";

var _api = require("../../../helpers/api");

var _AccountsStore = require("../AccountsStore");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('AccountsStore', function () {
  var store = null;
  var appContext = {};
  var newAccount = {
    id: 'mscott',
    accountName: 'It all starts with an idea.',
    accountArn: 'But you can never tell where an idea will end up.',
    email: 'because-ideas-spread-they-change-they-grow@example.com',
    name: 'They connect us with the world.',
    createdAt: 'Limitless paper',
    updatedAt: 'in a paperless world',
    rev: 100,
    status: 'COMPLETED'
  };
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _AccountsStore.registerContextItems)(appContext);

          case 2:
            store = appContext.accountsStore;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  describe('addAccount', function () {
    it('should add a account', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              _api.getAccounts.mockResolvedValueOnce([]);

              _context2.next = 3;
              return store.load();

            case 3:
              _context2.next = 5;
              return store.addAccount(newAccount);

            case 5:
              // CHECK
              expect(store.list[0]).toMatchObject(newAccount);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should not add the project because it already exists', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // BUILD
              _api.getAccounts.mockResolvedValueOnce([newAccount]);

              _context3.next = 3;
              return store.load();

            case 3:
              _context3.next = 5;
              return store.addAccount(newAccount);

            case 5:
              // CHECK
              expect(store.list.length).toBe(1);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('removeItem', function () {
    it('should remove the account', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // BUILD
              _api.getAccounts.mockResolvedValueOnce([newAccount]);

              _context4.next = 3;
              return store.load();

            case 3:
              _context4.next = 5;
              return store.removeItem(newAccount.id);

            case 5:
              // I'm not sure why the function is 'removeItem' and not 'deleteAccount'
              // breaks the convention set by some of the others
              // CHECK
              expect(_api.removeAccountInfo).toHaveBeenCalledWith(newAccount.id);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
});
//# sourceMappingURL=AccountsStore.test.js.map