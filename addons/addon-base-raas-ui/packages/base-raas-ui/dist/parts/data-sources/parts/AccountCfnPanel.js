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

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

var _YesNo = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/YesNo"));

var _SelectionButtons = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/SelectionButtons"));

var _CopyToClipboard = _interopRequireDefault(require("../../helpers/CopyToClipboard"));

var _form = require("../../../helpers/form");

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

var adminOptions = [{
  text: 'I have admin access',
  value: 'admin'
}, {
  text: 'I do not have admin access',
  value: 'notAdmin'
}]; // expected props
// - account (via prop)
// - largeText (via prop) default to false

var AccountCfnPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountCfnPanel, _React$Component);

  var _super = _createSuper(AccountCfnPanel);

  function AccountCfnPanel(props) {
    var _this;

    _classCallCheck(this, AccountCfnPanel);

    _this = _super.call(this, props);
    (0, _mobx.runInAction)(function () {
      // We want to create a simple one button form
      var account = props.account || {};

      var _ref = account.stackInfo || {},
          hasUpdateStackUrl = _ref.hasUpdateStackUrl;

      var fields = {
        managed: {
          value: 'admin'
        },
        createOrUpdate: {
          extra: {
            yesLabel: 'Stack Create',
            noLabel: 'Stack Update',
            yesValue: 'create',
            noValue: 'update',
            showHeader: false
          },
          value: hasUpdateStackUrl ? 'update' : 'create'
        }
      };
      _this.form = (0, _form.createForm)(fields);
    });
    return _this;
  }

  _createClass(AccountCfnPanel, [{
    key: "render",
    value: function render() {
      var id = this.account.id;
      var form = this.form;
      var field = form.$('managed');
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderCfnTemplate(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "pr3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-between"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h4",
        className: "mb0 mt1 flex-auto"
      }, "AWS Account # ", id), /*#__PURE__*/_react["default"].createElement(_SelectionButtons["default"], {
        field: field,
        options: adminOptions,
        show: "buttonsOnly",
        className: "mb0"
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null)), this.renderSteps());
    }
  }, {
    key: "renderCfnTemplate",
    value: function renderCfnTemplate() {
      var stackInfo = this.stackInfo;
      var name = stackInfo.name,
          formattedTemplate = stackInfo.formattedTemplate;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form, {
        className: "mb3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h4",
        className: "mb2 mt3"
      }, "CloudFormation Stack Name"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2 flex"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        value: name,
        size: "large"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1 p0"
      }, /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
        text: name
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2 flex"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.TextArea, {
        value: formattedTemplate,
        rows: 10
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1 p0"
      }, /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
        text: formattedTemplate
      }))));
    }
  }, {
    key: "renderSteps",
    value: function renderSteps() {
      // We need to determine if this is for creating the stack or updating the stack
      var form = this.form;
      var stackInfo = this.stackInfo;
      var hasUpdateStackUrl = stackInfo.hasUpdateStackUrl;
      var field = form.$('createOrUpdate');
      var update = field.value === 'update';
      var hasAdminAccess = form.$('managed').value === 'admin';
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-between pt3 pb0 pr3 pl1"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        size: "medium",
        className: "mb2"
      }, "Steps"), hasUpdateStackUrl && /*#__PURE__*/_react["default"].createElement(_YesNo["default"], {
        field: field,
        className: "mb0 mt0"
      })), !update && hasAdminAccess && this.renderCreateSteps(), update && hasAdminAccess && this.renderUpdateSteps(), !hasAdminAccess && this.renderEmailTemplate(update));
    }
  }, {
    key: "renderCreateSteps",
    value: function renderCreateSteps() {
      var account = this.account;
      var textSize = this.textSize;
      var stackInfo = this.stackInfo;
      var id = account.id,
          mainRegion = account.mainRegion;
      var createStackUrl = stackInfo.createStackUrl;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        ordered: true,
        size: textSize
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "In a separate browser tab, login to the aws console using the correct account.", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        className: "mr3 mt2 mb2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Attention"), /*#__PURE__*/_react["default"].createElement("p", null, "Ensure that you are logged in to the aws account # ", /*#__PURE__*/_react["default"].createElement("b", null, id), " and region ", /*#__PURE__*/_react["default"].createElement("b", null, mainRegion)))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Click on the ", /*#__PURE__*/_react["default"].createElement("b", null, "Create Stack"), " button, this opens a separate browser tab and takes you to the CloudFormation console where you can review the stack information and provision it.", /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb0 flex mt2"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        fluid: true,
        as: "a",
        target: "_blank",
        href: createStackUrl,
        rel: "noopener noreferrer"
      }, "Create Stack"), this.renderExpires(stackInfo)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1 p0"
      }, /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
        text: createStackUrl
      })))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "While the stack is being provisioned, it is okay to navigate away from this page and come back to the Data Source list page where you can test the connection once the stack is finished deploying.")));
    }
  }, {
    key: "renderUpdateSteps",
    value: function renderUpdateSteps() {
      var account = this.account;
      var stackInfo = this.stackInfo;
      var textSize = this.textSize;
      var id = account.id,
          mainRegion = account.mainRegion;
      var updateStackUrl = stackInfo.updateStackUrl,
          cfnConsoleUrl = stackInfo.cfnConsoleUrl;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        ordered: true,
        size: textSize
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "In a separate browser tab, login to the aws console using the correct account.", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        className: "mr3 mt2 mb2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Attention"), /*#__PURE__*/_react["default"].createElement("p", null, "Ensure that you are logged in to the aws account # ", /*#__PURE__*/_react["default"].createElement("b", null, id), " and region ", /*#__PURE__*/_react["default"].createElement("b", null, mainRegion)))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Go to the", ' ', /*#__PURE__*/_react["default"].createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: cfnConsoleUrl
      }, "AWS CloudFormation Console"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        className: "mr3 mt2 mb2"
      }, /*#__PURE__*/_react["default"].createElement("p", null, "You need to visit the AWS CloudFormation console page before you can click on the Update Stack button"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Click on the ", /*#__PURE__*/_react["default"].createElement("b", null, "Update Stack"), " button, this opens a separate browser tab and takes you to the CloudFormation console where you can review the stack information and provision it.", /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb0 flex mt2"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        fluid: true,
        as: "a",
        target: "_blank",
        href: updateStackUrl,
        rel: "noopener noreferrer"
      }, "Update Stack"), this.renderExpires(stackInfo)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1 p0"
      }, /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
        text: updateStackUrl
      })))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "While the stack is being provisioned, it is okay to navigate away from this page and come back to the Data Source list page where you can test the connection once the stack is finished deploying.")));
    }
  }, {
    key: "renderEmailTemplate",
    value: function renderEmailTemplate() {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var account = this.account;
      var stackInfo = this.stackInfo;
      var textSize = this.textSize;
      var emailTemplate = update ? account.updateStackEmailTemplate : account.createStackEmailTemplate;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        ordered: true,
        size: textSize
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "You can use the following email template to send an email to the admin of the account"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form, {
        className: "mb3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-between"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h4",
        className: "mb2 mt2"
      }, "Email Template"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 mr4"
      }, this.renderExpires(stackInfo))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2 flex"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.TextArea, {
        value: emailTemplate,
        rows: 20
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1 p0"
      }, /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
        text: emailTemplate
      }))))));
    }
  }, {
    key: "renderExpires",
    value: function renderExpires(stackInfo) {
      var urlExpiry = stackInfo.urlExpiry,
          expired = stackInfo.expired;

      if (expired) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "fs-9 center color-red mt1"
        }, "Expired ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
          date: urlExpiry
        }));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "fs-9 center mt1"
      }, "Expires ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: urlExpiry
      }));
    }
  }, {
    key: "account",
    get: function get() {
      return this.props.account || {};
    }
  }, {
    key: "stackInfo",
    get: function get() {
      return this.account.stackInfo || {};
    }
  }, {
    key: "largeText",
    get: function get() {
      return this.props.largeText;
    }
  }, {
    key: "textSize",
    get: function get() {
      return this.largeText ? 'large' : 'medium';
    }
  }]);

  return AccountCfnPanel;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(AccountCfnPanel, {
  account: _mobx.computed,
  stackInfo: _mobx.computed,
  largeText: _mobx.computed,
  textSize: _mobx.computed,
  form: _mobx.observable
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AccountCfnPanel)));

exports["default"] = _default;
//# sourceMappingURL=AccountCfnPanel.js.map