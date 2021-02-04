"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _EnvTypeEditor = _interopRequireDefault(require("../EnvTypeEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@aws-ee/base-ui/dist/helpers/routing');

var gotoMock = require('@aws-ee/base-ui/dist/helpers/routing');

var envTypeCandidatesStore = {};
var envTypesStore = {
  getEnvType: jest.fn()
};
var match = {
  params: {}
};
describe('EnvTypeEditor', function () {
  it('should render successfully', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var goTo, wrapper, component;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            goTo = jest.fn();
            gotoMock.gotoFn = jest.fn(function () {
              return goTo;
            });
            wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_EnvTypeEditor["default"].WrappedComponent, {
              envTypeCandidatesStore: envTypeCandidatesStore,
              envTypesStore: envTypesStore,
              match: match
            }));
            component = wrapper.instance();
            _context.next = 6;
            return component.handleDone();

          case 6:
            expect(wrapper).toBeDefined();
            expect(goTo).toHaveBeenCalledWith("/workspace-types-management");

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
//# sourceMappingURL=EnvTypeEditor.test.js.map