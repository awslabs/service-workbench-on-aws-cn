"use strict";

var _EnvironmentsStore = require("../EnvironmentsStore");

var _api = require("../../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('EnvironmentsStore', function () {
  var internalStore = null;
  var internalAppContext = {
    userStore: {
      user: {
        username: 'd.grayson',
        isExternalResearcher: false
      }
    },
    uiEventBus: {
      fireEvent: jest.fn()
    }
  };
  var exampleCost = {
    startDate: '01-01-1900',
    cost: {
      exampleCost: {
        amount: 10,
        unit: '$200'
      }
    }
  };
  var newEnv = null;
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _EnvironmentsStore.registerContextItems)(internalAppContext);
            internalStore = internalAppContext.environmentsStore;
            newEnv = {
              id: 'gotham_city',
              rev: 1,
              description: 'city of the (in)famous hero',
              name: '',
              status: 'COMPLETED',
              indexId: 'env-id',
              projectId: 'civic_city',
              createdAt: '1941',
              updatedAt: '2019',
              costs: [exampleCost],
              sharedWithUsers: [],
              isExternal: false
            };

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  describe('createEnvironment', function () {
    it('should successfully add the internal environment', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var retVal;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              _api.getEnvironments.mockResolvedValueOnce([]);

              _api.createEnvironment.mockResolvedValueOnce(newEnv);

              _context2.next = 4;
              return internalStore.load();

            case 4:
              _context2.next = 6;
              return internalStore.createEnvironment({
                pin: '1581963'
              });

            case 6:
              retVal = _context2.sent;
              // CHECK
              expect(retVal).toMatchObject(expect.objectContaining({
                id: newEnv.id,
                description: newEnv.description,
                projectId: newEnv.projectId
              }));
              expect(internalStore.list.length).toEqual(1);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should not create a new internal environment since it already exists', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var retVal;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // BUILD
              _api.getEnvironments.mockResolvedValueOnce([newEnv]);

              _api.createEnvironment.mockResolvedValueOnce(newEnv);

              _api.getEnvironmentCost.mockResolvedValueOnce([exampleCost]);

              _context3.next = 5;
              return internalStore.load();

            case 5:
              _context3.next = 7;
              return internalStore.createEnvironment({
                pin: '1581963'
              });

            case 7:
              retVal = _context3.sent;
              // CHECK
              expect(retVal).toMatchObject(expect.objectContaining({
                id: newEnv.id,
                description: newEnv.description,
                projectId: newEnv.projectId
              }));
              expect(internalStore.list.length).toBe(1);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('deleteEnvironment', function () {
    it('should try to delete the environment', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // BUILD
              _api.getEnvironments.mockResolvedValueOnce([newEnv]);

              _api.getEnvironmentCost.mockResolvedValueOnce([exampleCost]);

              _context4.next = 4;
              return internalStore.load();

            case 4:
              // OPERATE
              internalStore.deleteEnvironment(newEnv, internalAppContext.userStore.user, '123456'); // CHECK

              expect(_api.deleteEnvironment).toHaveBeenCalledWith(internalStore.list[0].id);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
});
//# sourceMappingURL=EnvironmentsStore.test.js.map