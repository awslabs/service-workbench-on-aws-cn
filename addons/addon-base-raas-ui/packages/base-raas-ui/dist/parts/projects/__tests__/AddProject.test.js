"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AddProject = _interopRequireDefault(require("../AddProject"));

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
var indexesStore = {
  dropdownOptions: [{
    key: '1',
    value: '123',
    text: 'Index 123'
  }]
};
var projectsStore = {
  addProject: jest.fn()
};
describe('AddProject', function () {
  var component = null;
  var wrapper = null;
  beforeEach(function () {
    // Render AddProject component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_AddProject["default"].WrappedComponent, {
      indexesStore: indexesStore,
      projectsStore: projectsStore,
      usersStore: usersStore
    })); // Get instance of the component

    component = wrapper.instance(); // Mock goto function

    component["goto"] = jest.fn();
  });
  it('should give an error if indexId is not present', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var errors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Set project attributes, except indexId
            component.project.id = 'my-research-project';
            component.project.description = 'Some relevant description';
            component.project.projectAdmins = ['userABC']; // Submit form

            _context.next = 5;
            return component.handleSubmit();

          case 5:
            // Verify an error is displayed
            errors = component.validationErrors.errors;
            expect(errors.indexId).toBeDefined();
            expect(errors.indexId).toContain('The indexId field is required.');

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should not give an error if indexId is provided', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Set project attributes
            component.project.id = 'my-research-project';
            component.project.description = 'Some relevant description';
            component.project.projectAdmins = ['userABC']; // Also set indexId, which is in the component state for some reason

            wrapper.setState({
              indexId: '123'
            }); // Submit form

            _context2.next = 6;
            return component.handleSubmit();

          case 6:
            // Verify addProject gets invoked
            expect(component.validationErrors.errors).not.toBeDefined();
            expect(projectsStore.addProject).toHaveBeenCalled();
            expect(component["goto"]).toHaveBeenCalledWith('/accounts');

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=AddProject.test.js.map