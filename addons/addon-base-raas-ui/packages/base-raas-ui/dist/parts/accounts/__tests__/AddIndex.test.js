"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AddIndex = _interopRequireDefault(require("../AddIndex"));

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
  dropdownOptions: [{
    key: '1',
    value: '123',
    text: 'Index 123'
  }]
};
var indexesStore = {
  addIndex: jest.fn()
};
describe('AddIndex', function () {
  var component = null;
  var wrapper = null;
  beforeEach(function () {
    // Render AddIndex component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_AddIndex["default"].WrappedComponent, {
      indexesStore: indexesStore,
      usersStore: usersStore,
      awsAccountsStore: awsAccountsStore
    })); // Get instance of the component

    component = wrapper.instance(); // Mock goto function

    component["goto"] = jest.fn();
  });
  it('should give an error if accountId is not present', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var errors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Set index attributes, except awsAccountId
            component.index.id = 'index-123';
            component.index.description = 'Some relevant description'; // Submit form

            _context.next = 4;
            return component.handleSubmit();

          case 4:
            // Verify an error is displayed
            errors = component.validationErrors.errors;
            expect(errors.awsAccountId).toBeDefined();
            expect(errors.awsAccountId).toContain('The awsAccountId field is required.');

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should not give an error if accountId is provided', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Set index attributes
            component.index.id = 'index-123';
            component.index.description = 'Some relevant description'; // Also set indexId, which is in the component state for some reason

            wrapper.setState({
              awsAccountId: 'abc'
            }); // Submit form

            _context2.next = 5;
            return component.handleSubmit();

          case 5:
            // Verify addIndex gets invoked
            expect(component.validationErrors.errors).not.toBeDefined();
            expect(indexesStore.addIndex).toHaveBeenCalled();
            expect(component["goto"]).toHaveBeenCalledWith('/accounts');

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=AddIndex.test.js.map