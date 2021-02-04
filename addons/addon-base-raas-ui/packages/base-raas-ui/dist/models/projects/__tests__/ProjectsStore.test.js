"use strict";

var _ProjectsStore = require("../ProjectsStore");

var _api = require("../../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('ProjectsStore', function () {
  var store = null;
  var appContext = {};
  var newProject = {
    id: 'aCreativeName!',
    rev: 1,
    description: 'simple description',
    indexId: '10',
    createdAt: 'now',
    updatedAt: 'later'
  };
  var diffProject = {
    id: 'anotherCreativeName',
    rev: 1,
    description: 'simple description',
    indexId: '11',
    createdAt: 'before',
    updatedAt: 'after'
  };
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _ProjectsStore.registerContextItems)(appContext);

          case 2:
            store = appContext.projectsStore;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  describe('add project', function () {
    it('should add a project', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              _api.getProjects.mockResolvedValueOnce([]);

              _context2.next = 3;
              return store.load();

            case 3:
              _context2.next = 5;
              return store.addProject(newProject);

            case 5:
              // CHECK
              expect(_api.addProject).toHaveBeenCalledWith(newProject);

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
              _api.getProjects.mockResolvedValueOnce([diffProject]);

              _context3.next = 3;
              return store.load();

            case 3:
              _context3.next = 5;
              return store.addProject(diffProject);

            case 5:
              // CHECK
              expect(_api.addProject).not.toHaveBeenCalledWith(diffProject);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('update project', function () {
    it('should try to add the updated function', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // BUILD
              _api.getProjects.mockResolvedValueOnce([newProject]);

              _context4.next = 3;
              return store.load();

            case 3:
              _api.updateProject.mockResolvedValueOnce(diffProject);

              store.addProject = jest.fn(); // OPERATE

              _context4.next = 7;
              return store.updateProject(diffProject);

            case 7:
              // CHECK
              expect(store.addProject).toHaveBeenCalledWith(diffProject);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
});
//# sourceMappingURL=ProjectsStore.test.js.map