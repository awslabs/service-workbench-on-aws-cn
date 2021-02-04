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
// - account (via props)
// - onCancel (via props) a call back function when the user clicks on Done
var AccountStatusMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountStatusMessage, _React$Component);

  var _super = _createSuper(AccountStatusMessage);

  function AccountStatusMessage(props) {
    var _this;

    _classCallCheck(this, AccountStatusMessage);

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

  _createClass(AccountStatusMessage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 mb2 animated fadeIn"
      }, this.renderAvailable(), this.renderPending(), this.renderError());
    }
  }, {
    key: "renderAvailable",
    value: function renderAvailable() {
      var account = this.account;
      if (!account.reachableState) return null;
      var expanded = this.expanded;
      var expandText = expanded ? 'less' : 'more';
      var msg = account.statusMessageInfo.message;
      var hasMsg = !_lodash["default"].isEmpty(msg);

      if (!hasMsg) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
          positive: true,
          onDismiss: this.handleCancel
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Available"), /*#__PURE__*/_react["default"].createElement("p", null, "The account is reachable and available for use."));
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        warning: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Available"), /*#__PURE__*/_react["default"].createElement("p", null, "The account is reachable but only partially configured. Some studies might be inaccessible.", /*#__PURE__*/_react["default"].createElement("span", {
        className: "underline ml1 cursor-pointer",
        onClick: this.handleExpand
      }, expandText)), expanded && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, "This is usually an indication that the CloudFormation stack that is deployed to AWS account #", account.id, ' ', "is out of sync with the CloudFormation template generated by the SWB application."), /*#__PURE__*/_react["default"].createElement("p", null, msg)));
    }
  }, {
    key: "renderPending",
    value: function renderPending() {
      var account = this.account;
      var expanded = this.expanded;
      var expandText = expanded ? 'less' : 'more';
      var msg = account.statusMessageInfo.message;
      if (!account.pendingState) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        warning: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Not available yet"), /*#__PURE__*/_react["default"].createElement("p", null, "The account is in the process of being connected with the application. It is unreachable until the CloudFormation stack is successfully deploy.", /*#__PURE__*/_react["default"].createElement("span", {
        className: "underline ml1 cursor-pointer",
        onClick: this.handleExpand
      }, expandText)), expanded && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "CloudFormation stack already deployed?"), this.renderTips()), expanded && !_lodash["default"].isEmpty(msg) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Message received from the server"), /*#__PURE__*/_react["default"].createElement("p", null, msg)));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var account = this.account;
      var expanded = this.expanded;
      var expandText = expanded ? 'less' : 'more';
      var msg = account.statusMessageInfo.message;
      if (!account.errorState) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        negative: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Not available"), /*#__PURE__*/_react["default"].createElement("p", null, "The account is unreachable. This is usually an indication of a problem during the CloudFormation stack deployment.", /*#__PURE__*/_react["default"].createElement("span", {
        className: "underline ml1 cursor-pointer",
        onClick: this.handleExpand
      }, expandText)), expanded && this.renderTips(), expanded && !_lodash["default"].isEmpty(msg) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Message received from the server"), /*#__PURE__*/_react["default"].createElement("p", null, msg)));
    }
  }, {
    key: "renderTips",
    value: function renderTips() {
      var account = this.account;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.List, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Check if the CloudFormation stack is deployed in the correct AWS account #", account.id), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Check if the CloudFormation stack is deployed in the correct AWS region '", account.mainRegion, "'"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "Try the connection check test again"));
    }
  }, {
    key: "account",
    get: function get() {
      return this.props.account;
    }
  }]);

  return AccountStatusMessage;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(AccountStatusMessage, {
  account: _mobx.computed,
  expanded: _mobx.observable,
  handleExpand: _mobx.action,
  handleCancel: _mobx.action
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AccountStatusMessage)));

exports["default"] = _default;
//# sourceMappingURL=AccountStatusMessage.js.map