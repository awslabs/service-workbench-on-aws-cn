"use strict";

var _IndexesStore = require("../IndexesStore");

var _api = require("../../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('IndexesStore', function () {
  var store = null;
  var appContext = {};
  var newIndex = {
    id: 'gon_freecss',
    rev: 2,
    awsAccountId: 'aws-account-info',
    description: 'whale island',
    createdAt: '1999',
    updatedAt: '2011'
  };
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _IndexesStore.registerContextItems)(appContext);

          case 2:
            store = appContext.indexesStore;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  describe('add index', function () {
    it('should successfully add an index', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              _api.getIndexes.mockResolvedValue([]);

              _api.addIndex.mockResolvedValue(newIndex);

              _context2.next = 4;
              return store.load();

            case 4:
              _context2.next = 6;
              return store.addIndex(newIndex);

            case 6:
              // CHECK
              expect(store.list[0].id).toEqual(newIndex.id);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
  describe('get index', function () {
    it('should get and return the specified index', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var retVal;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // BUILD
              _api.getIndexes.mockResolvedValue([newIndex]);

              _context3.next = 3;
              return store.load();

            case 3:
              _context3.next = 5;
              return store.getIndex(newIndex.id);

            case 5:
              retVal = _context3.sent;
              // CHECK
              expect(retVal).toMatchObject(newIndex);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it('should return an empty object', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var retVal;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // BUILD
              _api.getIndexes.mockResolvedValue([newIndex]);

              _context4.next = 3;
              return store.load();

            case 3:
              _context4.next = 5;
              return store.getIndex('index_that_doesnt_exist');

            case 5:
              retVal = _context4.sent;
              // CHECK
              expect(retVal).toMatchObject({});

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
});
//# sourceMappingURL=IndexesStore.test.js.map