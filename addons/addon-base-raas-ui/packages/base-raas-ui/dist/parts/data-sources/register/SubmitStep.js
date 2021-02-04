"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
// - wizard (via prop)
var SubmitStep = /*#__PURE__*/function (_React$Component) {
  _inherits(SubmitStep, _React$Component);

  var _super = _createSuper(SubmitStep);

  function SubmitStep() {
    var _this;

    _classCallCheck(this, SubmitStep);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleCancel = function () {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _this.wizard.reset();

      _goto('/data-sources');
    };

    _this.handleRetry = function () {
      (0, _utils.swallowError)(_this.wizard.retry());
    };

    _this.handleNext = function () {
      _this.wizard.advanceToNextStep();
    };

    return _this;
  }

  _createClass(SubmitStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        icon: true,
        textAlign: "center",
        className: "mt2",
        color: "grey"
      }, "Register Studies"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "p3"
      }, this.renderContent()));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var operations = this.operations;
      var running = this.running;
      var success = this.success;
      var error = this.failure;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement("div", null, running && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        className: "mb3",
        as: "h3",
        color: "grey"
      }, "Registering Studies"), success && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        className: "mb3",
        as: "h3",
        color: "grey"
      }, "Successfully Registered Studies"), error && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        className: "mb3",
        as: "h3",
        color: "grey"
      }, "Error Registering Studies")), /*#__PURE__*/_react["default"].createElement("div", null, _lodash["default"].map(operations.ops, function (op) {
        return _this2.renderOperation(op);
      }), this.renderButtons()));
    }
  }, {
    key: "renderFailedStepsWarning",
    value: function renderFailedStepsWarning() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        warning: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Failures have occurred"), /*#__PURE__*/_react["default"].createElement("p", null, "It seems that one or more steps have failed while registration. Please fix the errors and retry."), /*#__PURE__*/_react["default"].createElement("p", null, "If you wish to proceed anyway with creating/updating the CloudFormation stack, resources corresponding to the failed steps might not be reflected in the CloudFormation template."));
    }
  }, {
    key: "renderOperation",
    value: function renderOperation(op) {
      var isError = op.failure;
      var isSuccess = op.success;
      var isSkipped = op.skipped;
      var isRunning = op.running;
      var color = isError ? 'red' : isSuccess ? 'green' : isRunning ? 'orange' : isSkipped ? 'orange' : 'grey';
      var message = op.error || op.message;
      var name = op.name;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        padded: true,
        className: "mb2",
        style: {
          minHeight: '130px'
        },
        key: op.id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        color: color,
        name: isRunning ? 'circle notch' : 'circle',
        loading: isRunning,
        size: "large"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h5",
        className: "mb0"
      }, name), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Progress, {
        className: "mb1 w-100",
        percent: 100,
        active: isRunning,
        error: isError,
        success: isSuccess,
        warning: isSkipped,
        color: color,
        size: "tiny"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "fs-9 color-grey"
      }, message))));
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      // Show retry button if allFailed or some failure
      // Show next button if failure or success
      // Show cancel button if allFailed
      var running = this.running;
      var disabled = this.running;
      var success = this.success;
      var failure = this.failure;
      var allFailed = this.allFailed;
      var showNext = !allFailed && (failure || success);
      var showRetry = allFailed || failure;
      var showCancel = showRetry;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, this.failure && this.renderFailedStepsWarning(), showNext && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        className: "ml2",
        primary: true,
        icon: "right arrow",
        labelPosition: "right",
        content: "Next",
        loading: running,
        disabled: disabled,
        onClick: this.handleNext
      }), showRetry && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        color: "red",
        className: "ml2",
        content: "Retry",
        loading: running,
        disabled: disabled,
        onClick: this.handleRetry
      }), showCancel && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        className: "ml2",
        content: "Cancel",
        disabled: disabled,
        onClick: this.handleCancel
      }));
    }
  }, {
    key: "operations",
    get: function get() {
      return this.wizard.operations;
    }
  }, {
    key: "running",
    get: function get() {
      return this.operations.running;
    }
  }, {
    key: "success",
    get: function get() {
      return this.operations.success;
    }
  }, {
    key: "failure",
    get: function get() {
      return this.operations.failure;
    }
  }, {
    key: "allFailed",
    get: function get() {
      return this.operations.allFailed;
    }
  }, {
    key: "wizard",
    get: function get() {
      return this.props.wizard;
    }
  }]);

  return SubmitStep;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(SubmitStep, {
  wizard: _mobx.computed,
  operations: _mobx.computed,
  running: _mobx.computed,
  success: _mobx.computed,
  failure: _mobx.computed,
  allFailed: _mobx.computed,
  handleCancel: _mobx.action,
  handleRetry: _mobx.action,
  handleNext: _mobx.action
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(SubmitStep)));

exports["default"] = _default;
//# sourceMappingURL=SubmitStep.js.map