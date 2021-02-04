"use strict";

var _categories = require("../categories");

var _StudiesStore = require("../StudiesStore");

var _api = require("../../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('StudiesStore', function () {
  var store = null;
  var appContext = {};
  var newStudy = {
    id: 'studying_anew',
    rev: 1,
    name: 'new_beginnings'
  };
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _StudiesStore.registerContextItems)(appContext);
            store = appContext.studiesStoresMap[_categories.categories.organization.id];

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  describe('addStudy', function () {
    it('should add a study', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              _api.getStudies.mockResolvedValueOnce([]);

              _context2.next = 3;
              return store.load();

            case 3:
              _context2.next = 5;
              return store.addStudy(newStudy);

            case 5:
              // CHECk
              expect(store.list[0]).toMatchObject(newStudy);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should not add the study because it already exists', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // BUILD
              _api.getStudies.mockResolvedValueOnce([newStudy]);

              _context3.next = 3;
              return store.load();

            case 3:
              _context3.next = 5;
              return store.addStudy(newStudy);

            case 5:
              // CHECk
              expect(store.list.length).toBe(1);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('getStudyStore', function () {
    it('should create a study store if it does not exist', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var retVal;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // BUILD
              _api.getStudies.mockResolvedValueOnce([]);

              _context4.next = 3;
              return store.load();

            case 3:
              _context4.next = 5;
              return store.getStudyStore('newStudyStoreID');

            case 5:
              retVal = _context4.sent;
              // CHECK
              expect(retVal.studyId).toBe('newStudyStoreID');

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('createStudy', function () {
    it('should create a new study and return it', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var retVal;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // BUILD
              _api.getStudies.mockResolvedValueOnce([]);

              _api.createStudy.mockResolvedValueOnce(newStudy);

              _context5.next = 4;
              return store.load();

            case 4:
              _context5.next = 6;
              return store.createStudy(newStudy);

            case 6:
              retVal = _context5.sent;
              // CHECK
              expect(retVal).toMatchObject(newStudy);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
});
//# sourceMappingURL=StudiesStore.test.js.map