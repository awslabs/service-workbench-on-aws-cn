"use strict";

var _ProjectConfigure = _interopRequireDefault(require("../ProjectConfigure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@aws-ee/base-ui/dist/helpers/notification');

var notificationMock = require('@aws-ee/base-ui/dist/helpers/notification');

var usersStore = {};
var userStore = {};
var awsAccountsStore = {};
var projectsStore = {};
var project = {
  rev: 2,
  id: 'id',
  description: 'desc',
  indexId: 'idxid',
  projectAdmins: ['admin1', 'admin2']
};
describe('ProjectConfigure', function () {
  var component = null;
  beforeEach(function () {
    // Can't use enzyme, ProjectConfigure doesn't implement wrappedComponent or WrappedComponent
    component = new _ProjectConfigure["default"]({
      usersStore: usersStore,
      userStore: userStore,
      awsAccountsStore: awsAccountsStore,
      projectsStore: projectsStore,
      project: project
    }); // Mock notifications

    notificationMock.displayError = jest.fn(function (x) {
      return x;
    });
    notificationMock.displaySuccess = jest.fn(function (x) {
      return x;
    });
  });
  it('should update the project', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var store;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BUILD
            store = {
              updateProject: jest.fn()
            };
            component.getStore = jest.fn(function () {
              return store;
            }); // OPERATE

            _context.next = 4;
            return component.handleClickSubmitButton();

          case 4:
            // CHECK
            expect(store.updateProject).toHaveBeenCalledWith(project);
            expect(notificationMock.displaySuccess).toHaveBeenCalledWith('Updated project successfully');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should fail to update the project', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var newProject, error, store;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // BUILD
            newProject = {
              id: 'a-new-project'
            };
            error = {
              message: 'failed to update'
            };
            store = {
              updateProject: jest.fn(function () {
                throw error;
              })
            };
            component.getStore = jest.fn(function () {
              return store;
            });
            component.updateProject = newProject; // OPERATE

            _context2.next = 7;
            return component.handleClickSubmitButton();

          case 7:
            // CHECK
            expect(store.updateProject).toHaveBeenCalledWith(newProject);
            expect(notificationMock.displayError).toHaveBeenCalledWith(error);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should delete the project', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var store;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // BUILD
            store = {
              deleteProject: jest.fn(),
              load: jest.fn()
            };
            component.getStore = jest.fn(function () {
              return store;
            }); // OPERATE

            _context3.next = 4;
            return component.handleClickDeleteButton();

          case 4:
            // CHECK
            expect(store.deleteProject).toHaveBeenCalledWith(project.id);
            expect(notificationMock.displayError).not.toHaveBeenCalled();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should fail to delete the project', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var error, store;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // BUILD
            error = {
              message: 'failed to update'
            };
            store = {
              deleteProject: jest.fn(function () {
                throw error;
              }),
              load: jest.fn()
            };
            component.getStore = jest.fn(function () {
              return store;
            }); // OPERATE

            _context4.next = 5;
            return component.handleClickDeleteButton();

          case 5:
            // CHECK
            expect(store.deleteProject).toHaveBeenCalledWith(project.id);
            expect(notificationMock.displayError).toHaveBeenCalledWith(error);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
//# sourceMappingURL=ProjectConfigure.test.js.map