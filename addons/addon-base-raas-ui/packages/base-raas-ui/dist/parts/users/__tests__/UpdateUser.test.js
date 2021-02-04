"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _UpdateUser = _interopRequireDefault(require("../UpdateUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@aws-ee/base-ui/dist/helpers/notification');

var displayErrorMock = require('@aws-ee/base-ui/dist/helpers/notification');

jest.mock('../../../models/forms/UserFormUtils');

var userFormUtilsMock = require('../../../models/forms/UserFormUtils');

var projectsStore = {};
var userRolesStore = {
  isInternalUser: jest.fn(function (val) {
    return val === 'internalUser';
  }),
  isInternalGuest: jest.fn(function (val) {
    return val === 'internalGuest';
  })
};
var userStore = {
  user: {
    displayName: 'placeholder'
  },
  load: jest.fn()
};
var usersStore = {
  updateUser: jest.fn(),
  addUser: jest.fn(),
  deleteUser: jest.fn()
};
var awsAccountsStore = {};
var authenticationProviderConfigsStore = {};
describe('UpdateUser', function () {
  var component = null;
  var wrapper = null;
  beforeEach(function () {
    // Mock display functions because they don't function correctly in enzyme
    displayErrorMock.displayError = jest.fn(function (x) {
      return x;
    });
    displayErrorMock.displaySuccess = jest.fn(function (x) {
      return x;
    });
  });
  it('should fail because non-admins cannot update identityProviderName', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var user, form;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BUILD
            // Render component
            wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_UpdateUser["default"].wrappedComponent, {
              projectsStore: projectsStore,
              userRolesStore: userRolesStore,
              userStore: userStore,
              usersStore: usersStore,
              awsAccountsStore: awsAccountsStore,
              authenticationProviderConfigsStore: authenticationProviderConfigsStore,
              adminMode: false
            })); // Get instance of the component

            component = wrapper.instance();
            user = {
              username: 'username',
              firstName: 'fName',
              lastName: 'lName',
              email: 'email@example.com',
              userRole: 'internalUser',
              status: 'active'
            };
            form = {
              values: jest.fn(function () {
                return user;
              }),
              $: jest.fn(function () {
                return {
                  isDirty: true
                };
              }),
              clear: jest.fn()
            }; // OPERATE

            _context.next = 6;
            return component.handleFormSubmission(form);

          case 6:
            // CHECK
            expect(usersStore.updateUser).not.toHaveBeenCalledWith(user);
            expect(displayErrorMock.displayError).toHaveBeenCalledWith('Only admins can update identity provider information for the user');

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should succeed to update without saving projectId values', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var user, form;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // BUILD
            // Render component
            wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_UpdateUser["default"].wrappedComponent, {
              projectsStore: projectsStore,
              userRolesStore: userRolesStore,
              userStore: userStore,
              usersStore: usersStore,
              awsAccountsStore: awsAccountsStore,
              authenticationProviderConfigsStore: authenticationProviderConfigsStore,
              adminMode: false
            })); // Get instance of the component

            component = wrapper.instance();
            user = {
              username: 'newer_username',
              firstName: 'hName',
              lastName: 'nName',
              email: 'gockn@example.com',
              userRole: 'internalGuest',
              status: 'active',
              projectId: ['potatoface']
            };
            form = {
              values: jest.fn(function () {
                return user;
              }),
              $: jest.fn(function () {
                return {
                  isDirty: false
                };
              }),
              clear: jest.fn()
            }; // OPERATE

            _context2.next = 6;
            return component.handleFormSubmission(form);

          case 6:
            // CHECK
            expect(usersStore.updateUser).not.toHaveBeenCalledWith(expect.objectContaining({
              projectId: user.projectId
            }));
            expect(displayErrorMock.displaySuccess).toHaveBeenCalledWith('Updated user successfully');
            expect(userStore.load).toHaveBeenCalled();

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should update by deleting current user and adding a new one', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var user, form;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // BUILD
            user = {
              username: 'newest_username',
              firstName: 'iName',
              lastName: 'oName',
              email: 'hpdlo@example.com',
              userRole: 'internalUser',
              status: 'active',
              projectId: ['potatopancake'],
              isRootUser: false
            };
            form = {
              values: jest.fn(function () {
                return user;
              }),
              $: jest.fn(function () {
                return {
                  isDirty: true
                };
              }),
              clear: jest.fn()
            };
            userFormUtilsMock.toIdpFromValue = jest.fn(function () {
              return {
                idpName: 'example',
                authNProviderId: 'example2'
              };
            }); // Render component

            wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_UpdateUser["default"].wrappedComponent, {
              projectsStore: projectsStore,
              userRolesStore: userRolesStore,
              userStore: userStore,
              usersStore: usersStore,
              awsAccountsStore: awsAccountsStore,
              authenticationProviderConfigsStore: authenticationProviderConfigsStore,
              adminMode: true,
              user: user
            })); // Get instance of the component

            component = wrapper.instance(); // OPERATE

            _context3.next = 7;
            return component.handleFormSubmission(form);

          case 7:
            // CHECK
            expect(usersStore.addUser).toHaveBeenCalledWith(expect.objectContaining({
              projectId: user.projectId
            }));
            expect(usersStore.deleteUser).toHaveBeenCalledWith(user);
            expect(displayErrorMock.displaySuccess).toHaveBeenCalledWith('Updated user successfully');
            expect(userStore.load).toHaveBeenCalled();

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should fail because of an error being thrown during update', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var user, check, error, form;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // BUILD
            // Render component
            wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_UpdateUser["default"].wrappedComponent, {
              projectsStore: projectsStore,
              userRolesStore: userRolesStore,
              userStore: userStore,
              usersStore: usersStore,
              awsAccountsStore: awsAccountsStore,
              authenticationProviderConfigsStore: authenticationProviderConfigsStore,
              adminMode: false
            })); // Get instance of the component

            component = wrapper.instance();
            user = {
              username: 'new_username',
              firstName: 'gName',
              lastName: 'mName',
              email: 'fnbjm@example.com',
              userRole: 'internalUser',
              status: 'active'
            };
            check = {
              email: 'fnbjm@example.com',
              firstName: 'gName',
              lastName: 'mName'
            };
            error = {
              message: 'cannot update'
            };
            form = {
              values: jest.fn(function () {
                return user;
              }),
              $: jest.fn(function () {
                return {
                  isDirty: false
                };
              }),
              clear: jest.fn(function () {
                throw error;
              })
            }; // OPERATE

            _context4.next = 8;
            return component.handleFormSubmission(form);

          case 8:
            // CHECK
            // tries to update
            expect(usersStore.updateUser).toHaveBeenCalledWith(check); // fails on form.clear()

            expect(displayErrorMock.displayError).toHaveBeenCalledWith(error);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
//# sourceMappingURL=UpdateUser.test.js.map