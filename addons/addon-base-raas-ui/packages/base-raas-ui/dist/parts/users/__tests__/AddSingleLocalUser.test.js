"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AddSingleLocalUser = _interopRequireDefault(require("../AddSingleLocalUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@aws-ee/base-ui/dist/helpers/notification');

var displayErrorMock = require('@aws-ee/base-ui/dist/helpers/notification');

jest.mock('@aws-ee/base-ui/dist/helpers/routing');

var gotoMock = require('@aws-ee/base-ui/dist/helpers/routing');

var projectsStore = {};
var userRolesStore = {
  isInternalUser: jest.fn(function (val) {
    return val === 'internalUser';
  }),
  isInternalGuest: jest.fn(function (val) {
    return val === 'internalGuest';
  })
};
var usersStore = {
  addUser: jest.fn()
};
describe('AddSingleLocalUser', function () {
  var component = null;
  var wrapper = null;
  beforeEach(function () {
    // Render component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_AddSingleLocalUser["default"].WrappedComponent, {
      projectsStore: projectsStore,
      userRolesStore: userRolesStore,
      usersStore: usersStore
    })); // Get instance of the component

    component = wrapper.instance(); // Mock display functions because they don't function correctly in enzyme

    displayErrorMock.displayError = jest.fn(function (x) {
      return x;
    });
    displayErrorMock.displaySuccess = jest.fn(function (x) {
      return x;
    }); // Mock goto function

    gotoMock.gotoFn = jest.fn(function () {
      return jest.fn();
    });
  });
  it('should throw an error', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var ret, error, form;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BUILD
            ret = {
              userRole: 'internalUser'
            };
            error = {
              message: 'adding failed'
            };
            form = {
              values: jest.fn(function () {
                return ret;
              }),
              clear: jest.fn(function () {
                throw error;
              })
            }; // OPERATE

            _context.next = 5;
            return component.handleFormSubmission(form);

          case 5:
            // CHECK
            expect(displayErrorMock.displayError).toHaveBeenCalledWith(error);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should create an internal user with projectIds', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var ret, form;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ret = {
              userRole: 'internalUser',
              projectId: ['potatoes']
            };
            form = {
              values: jest.fn(function () {
                return ret;
              }),
              clear: jest.fn()
            }; // OPERATE

            _context2.next = 4;
            return component.handleFormSubmission(form);

          case 4:
            // CHECK
            expect(displayErrorMock.displaySuccess).toHaveBeenCalledWith('Added local user successfully');
            expect(displayErrorMock.displayError).not.toHaveBeenCalled();
            expect(usersStore.addUser).toHaveBeenCalledWith(expect.objectContaining({
              projectId: ret.projectId
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should create a non-internal user without projectIds', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var ret, check, form;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ret = {
              userRole: 'internalGuest',
              projectId: ['potatoes']
            };
            check = {
              userRole: ret.userRole,
              projectId: []
            };
            form = {
              values: jest.fn(function () {
                return ret;
              }),
              clear: jest.fn()
            }; // OPERATE

            _context3.next = 5;
            return component.handleFormSubmission(form);

          case 5:
            // CHECK
            expect(displayErrorMock.displaySuccess).toHaveBeenCalledWith('Added local user successfully');
            expect(displayErrorMock.displayError).not.toHaveBeenCalled();
            expect(usersStore.addUser).toHaveBeenCalledWith(check);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
//# sourceMappingURL=AddSingleLocalUser.test.js.map