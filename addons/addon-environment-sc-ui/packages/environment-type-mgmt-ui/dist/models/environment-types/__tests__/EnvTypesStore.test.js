"use strict";

var _api = require("../../../helpers/api");

var _EnvTypesStore = require("../EnvTypesStore");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('EnvTypesStore', function () {
  var store = null;
  var appContext = {
    envTypeCandidatesStore: {
      onEnvTypeCandidateImport: jest.fn(),
      load: jest.fn()
    }
  };
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _EnvTypesStore.registerContextItems)(appContext);

          case 2:
            store = appContext.envTypesStore;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should add a new envType', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var newEnvType, ret;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // BUILD
            newEnvType = {
              id: 'watson',
              status: 'approved'
            };
            _context2.next = 3;
            return store.load();

          case 3:
            _context2.next = 5;
            return store.addEnvType(newEnvType);

          case 5:
            // CHECK
            ret = store.getEnvType(newEnvType.id);
            expect(ret).toBeDefined();
            expect(ret.id).toBe(newEnvType.id);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should create a new envType', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var newEnvType;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // BUILD
            newEnvType = {
              id: 'crick?',
              status: 'approved'
            };

            _api.createEnvType.mockResolvedValueOnce(newEnvType);

            _context3.next = 4;
            return store.load();

          case 4:
            _context3.next = 6;
            return store.createEnvType(newEnvType);

          case 6:
            // CHECK
            expect(store.list[0].id).toBe(newEnvType.id);
            expect(appContext.envTypeCandidatesStore.onEnvTypeCandidateImport).toHaveBeenCalledWith(newEnvType.id);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should remove the existing environment', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var existingEnvType;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // BUILD
            existingEnvType = {
              id: 'or_jennings?',
              status: 'approved'
            };

            _api.getAllEnvTypes.mockResolvedValueOnce([existingEnvType]);

            _context4.next = 4;
            return store.load();

          case 4:
            expect(store.list[0]).toBeDefined(); // OPERATE

            _context4.next = 7;
            return store.deleteEnvType(existingEnvType.id);

          case 7:
            // CHECK
            expect(store.list[0]).toBeUndefined();
            expect(store.list.length).toBe(0);
            expect(appContext.envTypeCandidatesStore.load).toHaveBeenCalled();

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
//# sourceMappingURL=EnvTypesStore.test.js.map