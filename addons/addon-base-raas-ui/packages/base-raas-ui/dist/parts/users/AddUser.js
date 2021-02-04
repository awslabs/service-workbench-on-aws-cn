"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _UserFormUtils = require("../../models/forms/UserFormUtils");

var _DragDrop = _interopRequireDefault(require("./DragDrop"));

var _AddSingleUser = _interopRequireDefault(require("./AddSingleUser"));

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
// - authenticationProviderConfigsStore (via injection)
var AddUser = /*#__PURE__*/function (_React$Component) {
  _inherits(AddUser, _React$Component);

  var _super = _createSuper(AddUser);

  function AddUser() {
    _classCallCheck(this, AddUser);

    return _super.apply(this, arguments);
  }

  _createClass(AddUser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.getStore().load());
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getStore();
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "p0 mb3"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else if ((0, _BaseStore.isStoreReady)(store)) {
        content = this.renderMain();
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 mb4"
      }, this.renderTitle(), content);
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "user",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Add User")));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var identityProviderOptions = this.getIdentityProviderOptions();
      var panes = [{
        menuItem: 'Add Single User',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            basic: true,
            attached: false
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "mt3 animated fadeIn"
          }, /*#__PURE__*/_react["default"].createElement(_AddSingleUser["default"], null)));
        }
      }, {
        menuItem: 'Add Multiple Users',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            basic: true,
            attached: false
          }, /*#__PURE__*/_react["default"].createElement(_DragDrop["default"], {
            identityProviderOptions: identityProviderOptions
          }));
        }
      }];
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab, {
        defaultActiveIndex: 0,
        className: "mt2",
        menu: {
          secondary: true,
          pointing: true
        },
        panes: panes
      })));
    }
  }, {
    key: "getIdentityProviderOptions",
    value: function getIdentityProviderOptions() {
      return (0, _UserFormUtils.toIdpOptions)(this.getStore().list);
    }
  }, {
    key: "getStore",
    value: function getStore() {
      return this.props.authenticationProviderConfigsStore;
    }
  }]);

  return AddUser;
}(_react["default"].Component);

var _default = (0, _mobxReact.inject)('authenticationProviderConfigsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AddUser)));

exports["default"] = _default;
//# sourceMappingURL=AddUser.js.map