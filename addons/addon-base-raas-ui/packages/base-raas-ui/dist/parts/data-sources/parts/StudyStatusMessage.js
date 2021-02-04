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
// - study (via props)
// - onCancel (via props) a call back function when the user clicks on Done
var StudyStatusMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(StudyStatusMessage, _React$Component);

  var _super = _createSuper(StudyStatusMessage);

  function StudyStatusMessage(props) {
    var _this;

    _classCallCheck(this, StudyStatusMessage);

    _this = _super.call(this, props);

    _this.handleExpand = function () {
      _this.expanded = !_this.expanded;
    };

    _this.handleCancel = function () {
      if (!_lodash["default"].isFunction(_this.props.onCancel)) return;

      _this.props.onCancel();
    };

    (0, _mobx.runInAction)(function () {
      _this.expanded = false;
    });
    return _this;
  }

  _createClass(StudyStatusMessage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 mb2 animated fadeIn"
      }, this.renderAvailable(), this.renderPending(), this.renderError());
    }
  }, {
    key: "renderAvailable",
    value: function renderAvailable() {
      var study = this.study;
      if (!study.reachableState) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        positive: true,
        onDismiss: this.handleCancel
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Available"), /*#__PURE__*/_react["default"].createElement("p", null, "The study is reachable and available for use."));
    }
  }, {
    key: "renderPending",
    value: function renderPending() {
      var study = this.study;
      var expanded = this.expanded;
      var expandText = expanded ? 'less' : 'more';
      var msg = study.statusMessageInfo.message;
      if (!study.pendingState) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        warning: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Not available yet"), /*#__PURE__*/_react["default"].createElement("p", null, "The study is in the process of being connected with the application. It is unreachable until the CloudFormation stack is successfully deploy.", /*#__PURE__*/_react["default"].createElement("span", {
        className: "underline ml1 cursor-pointer",
        onClick: this.handleExpand
      }, expandText)), expanded && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "CloudFormation stack already deployed?"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.List, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Check if the CloudFormation stack is deployed in the correct AWS account"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Check if the CloudFormation stack is deployed in the correct AWS region"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Try the connection check test again"))), expanded && !_lodash["default"].isEmpty(msg) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Message received from the server"), /*#__PURE__*/_react["default"].createElement("p", null, msg)));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var study = this.study;
      var expanded = this.expanded;
      var expandText = expanded ? 'less' : 'more';
      var msg = study.statusMessageInfo.message;
      if (!study.errorState) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        negative: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Not available"), /*#__PURE__*/_react["default"].createElement("p", null, "The study is unreachable. This is usually an indication of a problem during the CloudFormation stack deployment.", /*#__PURE__*/_react["default"].createElement("span", {
        className: "underline ml1 cursor-pointer",
        onClick: this.handleExpand
      }, expandText)), expanded && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.List, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Check if the CloudFormation stack is deployed in the correct AWS account"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Check if the CloudFormation stack is deployed in the correct AWS region"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Try the connection check test again")), expanded && !_lodash["default"].isEmpty(msg) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Message received from the server"), /*#__PURE__*/_react["default"].createElement("p", null, msg)));
    }
  }, {
    key: "study",
    get: function get() {
      return this.props.study;
    }
  }]);

  return StudyStatusMessage;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(StudyStatusMessage, {
  study: _mobx.computed,
  expanded: _mobx.observable,
  handleExpand: _mobx.action,
  handleCancel: _mobx.action
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(StudyStatusMessage)));

exports["default"] = _default;
//# sourceMappingURL=StudyStatusMessage.js.map