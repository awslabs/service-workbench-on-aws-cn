"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _EnvTypeConfigEditor = _interopRequireDefault(require("../EnvTypeConfigEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@aws-ee/base-ui/dist/helpers/notification');

var displayErrorMock = require('@aws-ee/base-ui/dist/helpers/notification');

var envTypeConfigsStore = {
  ready: true,
  updateEnvTypeConfig: jest.fn()
};
var userRolesStore = {
  ready: true
};
var envTypeConfig = {
  id: 'example_id',
  name: 'exampleName'
};
var onEnvTypeConfigSaveComplete = jest.fn();
describe('EnvTypeConfigEditor', function () {
  var wrapper = null;
  var component = null;
  beforeEach(function () {
    // render component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_EnvTypeConfigEditor["default"].wrappedComponent, {
      envTypeConfigsStore: envTypeConfigsStore,
      userRolesStore: userRolesStore,
      envTypeConfig: envTypeConfig,
      onEnvTypeConfigSaveComplete: onEnvTypeConfigSaveComplete
    })); // Get instance of the component

    component = wrapper.instance();
    component.isEditAction = jest.fn(function () {
      return true;
    }); // Mock display functions because they don't function correctly in enzyme

    displayErrorMock.displayError = jest.fn(function (x) {
      return x;
    });
    displayErrorMock.displaySuccess = jest.fn(function (x) {
      return x;
    });
  });
  it('should update the environment config', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var ret, form;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BUILD
            ret = {
              name: 'some_new_name'
            };
            form = {
              values: jest.fn(function () {
                return ret;
              })
            }; // OPERATE

            _context.next = 4;
            return component.handleFormSubmission(form);

          case 4:
            // CHECK
            expect(envTypeConfigsStore.updateEnvTypeConfig).toHaveBeenCalledWith(expect.objectContaining(ret));
            expect(onEnvTypeConfigSaveComplete).toHaveBeenCalled();
            expect(displayErrorMock.displaySuccess).toHaveBeenCalledWith("Successfully updated ".concat(ret.name, " configuration"));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should catch the error successfully', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var ret, form, error;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // BUILD
            ret = {
              name: 'a_weird_name'
            };
            form = {
              values: jest.fn(function () {
                return ret;
              })
            };
            error = {
              message: 'oh no! An error!'
            };
            envTypeConfigsStore.updateEnvTypeConfig.mockImplementationOnce(function () {
              throw error;
            }); // OPERATE

            _context2.next = 6;
            return component.handleFormSubmission(form);

          case 6:
            // CHECK
            expect(displayErrorMock.displayError).toHaveBeenCalledWith(error);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=EnvTypeConfigEditor.test.js.map