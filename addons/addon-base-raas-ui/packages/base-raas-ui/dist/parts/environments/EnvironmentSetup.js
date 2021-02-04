"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _settings = require("../../helpers/settings");

var _CurrentStep = require("../compute/helpers/CurrentStep");

var _ComputePlatformSetup = _interopRequireDefault(require("../compute/ComputePlatformSetup"));

var _SetupStepsProgress = _interopRequireDefault(require("../environments-builtin/SetupStepsProgress"));

var _ScEnvironmentSetup = _interopRequireDefault(require("../environments-sc/setup/ScEnvironmentSetup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// expected props
var EnvironmentSetup = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvironmentSetup, _React$Component);

  var _super = _createSuper(EnvironmentSetup);

  function EnvironmentSetup(props) {
    var _this;

    _classCallCheck(this, EnvironmentSetup);

    _this = _super.call(this, props);

    _this.handlePrevious = function () {
      if (_this.envTypeId) {
        // If envTypeId is already preselected selected
        // then we must have reached here via env type management page so go back to that page
        _this["goto"]('/workspace-types-management');
      } else {
        _this["goto"]('/workspaces');
      }
    };

    _this.handleCompleted = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(environment) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _notification.displaySuccess)('The research workspace is being provisioned');

                _this["goto"]('/workspaces');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      var step = 'selectEnvType';

      if (_settings.enableBuiltInWorkspaces) {
        step = 'selectComputePlatform';
      } else if (_this.envTypeId) {
        step = 'selectEnvConfig'; // If envTypeId id is passed then jump to env config step
      }

      _this.currentStep = _CurrentStep.CurrentStep.create({
        step: step
      });
    });
    return _this;
  }

  _createClass(EnvironmentSetup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "goto",
    value: function goto(pathname) {
      var _goto = (0, _routing.gotoFn)(this);

      _goto(pathname);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3"
      }, this.renderTitle(), this.renderStepsProgress(), this.renderContent());
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Research Workspaces")));
    }
  }, {
    key: "renderStepsProgress",
    value: function renderStepsProgress() {
      return /*#__PURE__*/_react["default"].createElement(_SetupStepsProgress["default"], {
        currentStep: this.currentStep,
        envTypeImmutable: !!this.envTypeId
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var content = null;

      if (_settings.enableBuiltInWorkspaces) {
        content = /*#__PURE__*/_react["default"].createElement(_ComputePlatformSetup["default"], {
          currentStep: this.currentStep,
          onPrevious: this.handlePrevious,
          onCompleted: this.handleCompleted
        });
      } else {
        content = /*#__PURE__*/_react["default"].createElement(_ScEnvironmentSetup["default"], {
          currentStep: this.currentStep,
          onPrevious: this.handlePrevious,
          onCompleted: this.handleCompleted,
          envTypeId: this.envTypeId,
          envTypeImmutable: !!this.envTypeId // If envTypeId is passed already then do not allow selecting it

        });
      }

      return content;
    }
  }, {
    key: "envTypeId",
    get: function get() {
      return (this.props.match.params || {}).envTypeId;
    }
  }]);

  return EnvironmentSetup;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(EnvironmentSetup, {
  handlePrevious: _mobx.action,
  handleCompleted: _mobx.action,
  currentStep: _mobx.observable
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvironmentSetup)));

exports["default"] = _default;
//# sourceMappingURL=EnvironmentSetup.js.map