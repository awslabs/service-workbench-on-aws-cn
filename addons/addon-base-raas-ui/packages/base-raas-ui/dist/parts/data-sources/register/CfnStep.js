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

var _AccountCfnPanel = _interopRequireDefault(require("../parts/AccountCfnPanel"));

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
var CfnStep = /*#__PURE__*/function (_React$Component) {
  _inherits(CfnStep, _React$Component);

  var _super = _createSuper(CfnStep);

  function CfnStep() {
    var _this;

    _classCallCheck(this, CfnStep);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleNext = function () {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _this.wizard.reset();

      _goto('/data-sources');
    };

    return _this;
  }

  _createClass(CfnStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var account = this.account;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        icon: true,
        textAlign: "center",
        className: "mt2",
        color: "grey"
      }, "Register Studies"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "p3"
      }, this.renderWhatIsNext(), /*#__PURE__*/_react["default"].createElement(_AccountCfnPanel["default"], {
        account: account,
        largeText: true
      }), this.renderButtons()));
    }
  }, {
    key: "renderWhatIsNext",
    value: function renderWhatIsNext() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "mb0"
      }, "What to do next?"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        bulleted: true,
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Review the content of the CloudFormation template to familiarize yourself with the roles and policies that will be created in the account."), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Once provisioned or updated, the stack creates or updates the necessary roles and policies to allow the Service Workbench application access to the studies and make them available to the designated researchers."), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Follow the steps outlined below"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Once you complete the steps below and while the stack is being provisioned or updated, you can click on", ' ', /*#__PURE__*/_react["default"].createElement("b", null, "Done"), ". This will take you to the Data Sources list page where you can test the connection once the stack is finished deploying. You will also be able to view this information from within the Data Sources list page.")));
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt4"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        className: "ml2",
        primary: true,
        content: "Done",
        onClick: this.handleNext
      }));
    }
  }, {
    key: "wizard",
    get: function get() {
      return this.props.wizard;
    }
  }, {
    key: "account",
    get: function get() {
      return this.wizard.processedAccount;
    }
  }]);

  return CfnStep;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(CfnStep, {
  wizard: _mobx.computed,
  account: _mobx.computed,
  handleNext: _mobx.action
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(CfnStep)));

exports["default"] = _default;
//# sourceMappingURL=CfnStep.js.map