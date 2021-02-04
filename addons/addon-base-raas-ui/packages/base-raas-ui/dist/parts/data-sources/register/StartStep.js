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
// wizard (via props)
var StartStep = /*#__PURE__*/function (_React$Component) {
  _inherits(StartStep, _React$Component);

  var _super = _createSuper(StartStep);

  function StartStep() {
    var _this;

    _classCallCheck(this, StartStep);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleNext = function () {
      _this.wizard.advanceToNextStep();
    };

    _this.handleCancel = function () {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _this.wizard.reset();

      _goto('/data-sources');
    };

    return _this;
  }

  _createClass(StartStep, [{
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
        className: "pt4 pr4 pl4 pb3"
      }, this.renderBeforeYouStart(), this.renderWhatIsNext(), this.renderLimitations(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt4"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        className: "ml2",
        primary: true,
        icon: "right arrow",
        labelPosition: "right",
        content: "Next",
        onClick: this.handleNext
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        className: "ml2",
        content: "Cancel",
        onClick: this.handleCancel
      }))));
    }
  }, {
    key: "renderBeforeYouStart",
    value: function renderBeforeYouStart() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "mb0"
      }, "Before you start"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "ui large list mt2"
      }, "You need to collect some information regarding the studies. The information that you need is:"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        bulleted: true,
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The AWS account id of the account owning the studies and the region where the CloudFormation stack will be deployed"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The bucket name and region containing the studies"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The KMS ARN used to encrypt the bucket (if one is used) or the KMS ARNs used to encrypt each study"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The path of each study to be registered"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The access level desired for each study, can be either read only or read and write")));
    }
  }, {
    key: "renderWhatIsNext",
    value: function renderWhatIsNext() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "mb0"
      }, "What to expect next"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        bulleted: true,
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "You will be asked to provide the information listed above"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Some fields might be pre-populated for you if you had previously registered the account and/or the bucket"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "You will be asked to assign study admins for each study"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Once you enter all the information requested, a CloudFormation template is generated"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "You will be able to create/update the stack using the generated CloudFormation template")));
    }
  }, {
    key: "renderLimitations",
    value: function renderLimitations() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "mb0"
      }, "Limitations"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        bulleted: true,
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Studies can not contain other studies"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Buckets that restrict access to specific VPC endpoints and/or specific external IP addresses are not supported"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Different studies can be encrypted using different KMS keys, however, objects within the same study must be encrypted with the same key"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Accessing buckets via fips endpoints is not supported"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Buckets with requester pays are not supported")));
    }
  }, {
    key: "wizard",
    get: function get() {
      return this.props.wizard;
    }
  }]);

  return StartStep;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(StartStep, {
  wizard: _mobx.computed,
  handleCancel: _mobx.action,
  handleNext: _mobx.action
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(StartStep)));

exports["default"] = _default;
//# sourceMappingURL=StartStep.js.map