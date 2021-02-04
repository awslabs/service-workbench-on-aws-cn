"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _StudiesPage = _interopRequireDefault(require("../StudiesPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

global.window = {
  scrollTo: jest.fn()
};
var match = {
  params: {}
};
var studiesStoresMap = {};
var filesSelectionEmpty = {
  empty: true,
  count: 10
};
var filesSelectionFull = {
  empty: false,
  count: 10
};
describe('StudiesPage', function () {
  var component = null;
  var wrapper = null;
  it('should allow the user to select a study', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var userStore, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Render component
            userStore = {
              user: {
                capabilities: null
              }
            };
            wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_StudiesPage["default"].WrappedComponent, {
              userStore: userStore,
              studiesStoresMap: studiesStoresMap,
              filesSelection: filesSelectionEmpty,
              match: match
            })); // Get instance of the component

            component = wrapper.instance(); // mock functions

            component.renderWarningWithButton = jest.fn(function (x) {
              return x;
            }); // OPERATE

            _context.next = 6;
            return component.renderSelection();

          case 6:
            res = _context.sent;
            // CHECK
            expect(res.content).toHaveProperty(['props', 'children', 0], expect.stringContaining('Select one or more studies to proceed'));
            expect(component.renderWarningWithButton).toHaveBeenCalled();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should warn the user they do not have projects', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var userStore;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Render component
            userStore = {
              user: {
                capabilities: null,
                hasProjects: false
              }
            };
            wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_StudiesPage["default"].WrappedComponent, {
              userStore: userStore,
              studiesStoresMap: studiesStoresMap,
              filesSelection: filesSelectionEmpty,
              match: match
            })); // Get instance of the component

            component = wrapper.instance(); // mock functions

            component.renderWarning = jest.fn(function (x) {
              return x;
            });
            component.renderWarningWithButton = jest.fn(function (x) {
              return x;
            }); // OPERATE

            _context2.next = 7;
            return component.renderSelection();

          case 7:
            // CHECK
            expect(component.renderWarning).toHaveBeenCalledWith(expect.objectContaining({
              header: 'Missing association with one or more projects!'
            }));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should display the studies to the user without warnings', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var userStore, res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Render component
            userStore = {
              user: {
                capabilities: null
              }
            };
            wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_StudiesPage["default"].WrappedComponent, {
              userStore: userStore,
              studiesStoresMap: studiesStoresMap,
              filesSelection: filesSelectionFull,
              match: match
            })); // Get instance of the component

            component = wrapper.instance(); // mock functions

            component.renderWarning = jest.fn(function (x) {
              return x;
            });
            component.renderWarningWithButton = jest.fn(function (x) {
              return x;
            }); // OPERATE

            _context3.next = 7;
            return component.renderSelection();

          case 7:
            res = _context3.sent;
            // CHECK
            expect(res.props.className).toBe('clearfix');
            expect(component.renderWarning).not.toHaveBeenCalled();
            expect(component.renderWarningWithButton).not.toHaveBeenCalled();

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
//# sourceMappingURL=StudiesPage.test.js.map