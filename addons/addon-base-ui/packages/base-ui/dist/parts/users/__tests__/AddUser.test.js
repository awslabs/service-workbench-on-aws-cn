"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AddUser = _interopRequireDefault(require("../AddUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/notification');

var notifMock = require('../../../helpers/notification');

var userStore = {};
var usersStore = {};
describe('AddUser', function () {
  var component = null;
  var wrapper = null;
  beforeEach(function () {
    // Render component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_AddUser["default"].WrappedComponent, {
      userStore: userStore,
      usersStore: usersStore
    })); // Get instance of the component

    component = wrapper.instance(); // mock functions

    component["goto"] = jest.fn();
    notifMock.displayError = jest.fn(function (x) {
      return x;
    });
  });
  it('should fail because the user did not provide password or last name', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var user, errors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BUILD
            user = {
              username: 'dschrute',
              email: 'dschrute@example.com',
              firstName: 'Dwight'
            };
            component.user = user; // OPERATE

            _context.next = 4;
            return component.handleSubmit();

          case 4:
            // CHECK
            errors = component.validationErrors.errors;
            expect(Object.keys(errors).length).toBe(2);
            expect(errors.password).toContain('The password field is required.');
            expect(errors.lastName).toContain('The lastName field is required.');

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should fail because the store threw an error', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var user, error, badStore;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // BUILD
            user = {
              username: 'mscott',
              email: 'mscott@example.com',
              password: 'threat_level_midnight',
              firstName: 'Michael',
              lastName: 'Scarn'
            };
            error = {
              message: 'cannot add user'
            };
            badStore = {
              addUser: jest.fn(function () {
                throw error;
              })
            };
            component.getStore = jest.fn(function () {
              return badStore;
            });
            component.user = user; // OPERATE

            _context2.next = 7;
            return component.handleSubmit();

          case 7:
            // CHECK
            expect(badStore.addUser).toHaveBeenCalledWith(user);
            expect(notifMock.displayError).toHaveBeenCalledWith(error);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should add the user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var user, goodStore;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // BUILD
            user = {
              username: 'jhalpert',
              email: 'jhalpert@example.com',
              password: 'jim&pam<3',
              firstName: 'Jim',
              lastName: 'Halpert'
            };
            goodStore = {
              addUser: jest.fn()
            };
            component.getStore = jest.fn(function () {
              return goodStore;
            });
            component.user = user; // OPERATE

            _context3.next = 6;
            return component.handleSubmit();

          case 6:
            // CHECK
            expect(goodStore.addUser).toHaveBeenCalledWith(user);
            expect(component["goto"]).toHaveBeenCalledWith('/users');
            expect(notifMock.displayError).not.toHaveBeenCalled();

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
//# sourceMappingURL=AddUser.test.js.map