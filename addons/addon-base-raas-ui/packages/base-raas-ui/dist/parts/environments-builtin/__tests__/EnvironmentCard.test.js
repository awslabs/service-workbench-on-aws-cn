"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _EnvironmentCard = _interopRequireDefault(require("../EnvironmentCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@aws-ee/base-ui/dist/helpers/notification');

var displayErrorMock = require('@aws-ee/base-ui/dist/helpers/notification');

jest.mock('../../../../images/marketplace/sagemaker-notebook-icon.svg');
var environment = {
  name: 'name',
  description: 'descrip goes here',
  createdAt: '01-01-1900',
  createdBy: 'anonymous',
  fetchingUrl: 'example.com',
  status: 'active',
  instanceInfo: {
    type: 'sagemaker'
  },
  sharedWithUsers: {},
  projectId: 'projId',
  setFetchingUrl: jest.fn(),
  isExternal: false
};
var environmentsStore = {
  startEnvironment: jest.fn(),
  stopEnvironment: jest.fn()
};
var userDisplayName = {
  getLongDisplayName: jest.fn(function () {
    return 'longDisplayName';
  })
};
var event = {
  preventDefault: jest.fn(),
  stopPropagation: jest.fn()
};
describe('EnvironmentCard', function () {
  var component = null;
  var wrapper = null;
  beforeEach(function () {
    // render component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_EnvironmentCard["default"].WrappedComponent, {
      environmentsStore: environmentsStore,
      environment: environment,
      userDisplayName: userDisplayName
    })); // get instance of component

    component = wrapper.instance(); // mock error function because it doesn't function properly in enzyme

    displayErrorMock.displayError = jest.fn(function (x) {
      return x;
    });
  });
  it('should start the environment', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return component.handleStartEnvironment(event);

          case 2:
            // CHECK
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
            expect(environmentsStore.startEnvironment).toHaveBeenCalledWith(environment);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should stop the environment', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return component.handleStopEnvironment(event);

          case 2:
            // CHECK
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
            expect(environmentsStore.stopEnvironment).toHaveBeenCalledWith(environment);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should throw an error during stop environment', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var error;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // BUILD
            error = {
              message: 'failed to stop environment'
            };
            environmentsStore.stopEnvironment.mockImplementationOnce(function () {
              throw error;
            }); // OPERATE

            _context3.next = 4;
            return component.handleStopEnvironment(event);

          case 4:
            // CHECK
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
            expect(environmentsStore.stopEnvironment).toHaveBeenCalledWith(environment);
            expect(displayErrorMock.displayError).toHaveBeenCalledWith(error);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should throw an error during start environment', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var error;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // BUILD
            error = {
              message: 'failed to start environment'
            };
            environmentsStore.startEnvironment.mockImplementationOnce(function () {
              throw error;
            }); // OPERATE

            _context4.next = 4;
            return component.handleStartEnvironment(event);

          case 4:
            // CHECK
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
            expect(environmentsStore.startEnvironment).toHaveBeenCalledWith(environment);
            expect(displayErrorMock.displayError).toHaveBeenCalledWith(error);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
//# sourceMappingURL=EnvironmentCard.test.js.map