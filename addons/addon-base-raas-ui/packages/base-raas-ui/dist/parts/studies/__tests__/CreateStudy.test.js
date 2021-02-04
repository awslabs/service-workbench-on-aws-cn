"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CreateStudy = _interopRequireDefault(require("../CreateStudy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@aws-ee/base-ui/dist/helpers/notification');

var displayErrorMock = require('@aws-ee/base-ui/dist/helpers/notification');

var userStore = {
  asDropDownOptions: function asDropDownOptions() {
    return [{
      key: 'userABC',
      value: 'userABC',
      text: 'Dr. John Doe'
    }];
  },
  projectIdDropdown: ['proj1', 'proj2']
};
var studiesStore = {
  createStudy: jest.fn()
};
var studiesStoresMap = {
  'my-studies': studiesStore,
  'open-data': studiesStore,
  'organization': studiesStore
};
describe('CreateStudy', function () {
  var component = null;
  var wrapper = null;
  beforeEach(function () {
    // Render component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_CreateStudy["default"].wrappedComponent, {
      userStore: userStore,
      studiesStoresMap: studiesStoresMap
    })); // Get instance of the component

    component = wrapper.instance(); // mock displayError because toastr cant function properly in a wrappedComponent setting

    displayErrorMock.displayError = jest.fn(function (err) {
      throw err;
    });
  });
  it('should try to create a study based on form input', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var form;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BUILD
            form = {
              values: function values() {
                return {
                  categoryId: 'my-studies'
                };
              },
              clear: jest.fn()
            }; // OPERATE

            _context.next = 3;
            return component.handleFormSubmission(form);

          case 3:
            // CHECK
            expect(studiesStore.createStudy).toHaveBeenCalledWith({
              category: 'My Studies'
            });
            expect(form.clear).toHaveBeenCalled();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should fail if the categoryId is not valid or missing', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var form;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // BUILD
            form = {
              values: function values() {
                return {};
              },
              clear: jest.fn()
            }; // OPERATE

            _context2.prev = 1;
            _context2.next = 4;
            return component.handleFormSubmission(form);

          case 4:
            expect.hasAssertions();
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            expect(displayErrorMock.displayError).toHaveBeenCalled();
            expect(_context2.t0.message).toEqual("Cannot read property 'createStudy' of undefined");

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  })));
});
//# sourceMappingURL=CreateStudy.test.js.map