"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CreateAwsAccount = _interopRequireDefault(require("../CreateAwsAccount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var usersStore = {
  asDropDownOptions: function asDropDownOptions() {
    return [{
      key: 'userABC',
      value: 'userABC',
      text: 'Dr. John Doe'
    }];
  }
};
var awsAccountsStore = {
  createAwsAccount: jest.fn(),
  dropdownOptions: [{
    key: '1',
    value: '123',
    text: 'Index 123'
  }]
};
describe('CreateAwsAccount', function () {
  var component = null;
  var wrapper = null;
  beforeEach(function () {
    // Render CreateAwsAccount component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_CreateAwsAccount["default"].WrappedComponent, {
      usersStore: usersStore,
      awsAccountsStore: awsAccountsStore
    })); // Get instance of the component

    component = wrapper.instance(); // Mock goto function

    component["goto"] = jest.fn();
    awsAccountsStore.createAwsAccount = jest.fn();
  });
  it('should create an AWS account if all information is provided', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Set all fields to valid values
            component.awsAccount = {
              accountName: 'MyResearchProjectAccount',
              accountEmail: 'user@example.com',
              masterRoleArn: 'arn:aws:iam::111111111111:role/MyRole',
              externalId: '123',
              description: 'This is my research project account'
            }; // Submit form

            _context.next = 3;
            return component.handleSubmit();

          case 3:
            // Verify account gets created
            expect(awsAccountsStore.createAwsAccount).toHaveBeenCalledWith(component.awsAccount); // And user gets redirected to the accounts page

            expect(component["goto"]).toHaveBeenCalledWith('/accounts');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should not create an account if required fields are not provided', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var fieldsWithError;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Set invalid values (i.e. user leaves the form empty)
            component.awsAccount = {}; // Submit form

            _context2.next = 3;
            return component.handleSubmit();

          case 3:
            // Should not create account and errors should be displayed
            expect(awsAccountsStore.createAwsAccount).not.toHaveBeenCalled(); // Verify errors are set

            expect(component.validationErrors.errors).toBeDefined();
            fieldsWithError = Object.keys(component.validationErrors.errors);
            expect(fieldsWithError).toEqual(expect.arrayContaining(['accountName', 'accountEmail', 'masterRoleArn', 'externalId', 'description']));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=CreateAwsAccount.test.js.map