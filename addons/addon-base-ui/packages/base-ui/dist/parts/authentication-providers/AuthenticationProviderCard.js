"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxReact = require("mobx-react");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _routing = require("../../helpers/routing");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
// - authenticationProviderConfig
// - pos
var AuthenticationProviderCard = /*#__PURE__*/function (_Component) {
  _inherits(AuthenticationProviderCard, _Component);

  var _super = _createSuper(AuthenticationProviderCard);

  function AuthenticationProviderCard() {
    var _this;

    _classCallCheck(this, AuthenticationProviderCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleEditModeClick = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var id = _this.getAuthenticationProviderConfig().id;

      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto("/authentication-providers/".concat(encodeURIComponent(id), "/edit"));
    };

    return _this;
  }

  _createClass(AuthenticationProviderCard, [{
    key: "render",
    value: function render() {
      var authenticationProviderConfig = this.getAuthenticationProviderConfig();
      return (
        /*#__PURE__*/
        // The custom attribute "data-id" here is used for conveying the id of the virtualDatabase being clicked in the "handleVirtualDatabaseClick" handler
        _react["default"].createElement("div", {
          className: "flex"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex-auto"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex"
        }, this.renderIndexLabel(), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
          as: "h2",
          color: "grey",
          className: "mt0"
        }, authenticationProviderConfig.config.title, ' ', /*#__PURE__*/_react["default"].createElement("span", {
          className: "pl2 fs-9 breakout"
        }, authenticationProviderConfig.id), /*#__PURE__*/_react["default"].createElement("div", null, this.renderStatus(authenticationProviderConfig))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "ml-auto"
        }, this.renderActionButtons())), /*#__PURE__*/_react["default"].createElement("div", {
          className: "ml3 mb2 mt2 breakout"
        }, authenticationProviderConfig.config.type.description)))
      );
    }
  }, {
    key: "getAuthenticationProviderConfig",
    value: function getAuthenticationProviderConfig() {
      return this.props.authenticationProviderConfig;
    }
  }, {
    key: "renderStatus",
    value: function renderStatus(authenticationProviderConfig) {
      var isActive = _lodash["default"].toLower(authenticationProviderConfig.status) === 'active';
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        color: isActive ? 'green' : 'red'
      }, authenticationProviderConfig.status);
    }
  }, {
    key: "renderIndexLabel",
    value: function renderIndexLabel() {
      var pos = this.props.pos;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        size: "mini",
        ribbon: true,
        color: "blue",
        className: "line-height-20-px"
      }, pos);
    }
  }, {
    key: "renderActionButtons",
    value: function renderActionButtons() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button.Group, {
        basic: true,
        size: "mini"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        icon: "edit",
        onClick: this.handleEditModeClick
      }));
    }
  }]);

  return AuthenticationProviderCard;
}(_react.Component);

var _default = (0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AuthenticationProviderCard));

exports["default"] = _default;
//# sourceMappingURL=AuthenticationProviderCard.js.map