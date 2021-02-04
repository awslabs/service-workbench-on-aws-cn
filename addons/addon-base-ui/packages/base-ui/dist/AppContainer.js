"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactRouterDom = require("react-router-dom");

var _mobxReact = require("mobx-react");

var _mobxStateTree = require("mobx-state-tree");

var _semanticUiReact = require("semantic-ui-react");

var _settings = require("./helpers/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
// - pluginRegistry (via injection)
// - app (via injection)
// - location (from react router)
var AppContainer = /*#__PURE__*/function (_Component) {
  _inherits(AppContainer, _Component);

  var _super = _createSuper(AppContainer);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _super.apply(this, arguments);
  }

  _createClass(AppContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = _settings.branding.page.title;
      document.querySelector("link[rel='shortcut icon']").href = this.props.assets.images.faviconIcon;
      document.querySelector("link[rel='icon']").href = this.props.assets.images.faviconImage;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          location = _this$props.location,
          pluginRegistry = _this$props.pluginRegistry,
          app = _this$props.app;

      var plugins = _lodash["default"].reverse(pluginRegistry.getPluginsWithMethod('app-component', 'getAppComponent') || []);

      var App = this.renderError(); // We ask each plugin in reverse order if they have the App component

      _lodash["default"].forEach(plugins, function (plugin) {
        var result = plugin.getAppComponent({
          location: location,
          appContext: (0, _mobxStateTree.getEnv)(app)
        });
        if (_lodash["default"].isUndefined(result)) return;
        App = result; // eslint-disable-next-line consistent-return

        return false; // This will stop lodash from continuing the forEach loop
      });

      plugins = _lodash["default"].reverse(pluginRegistry.getPluginsWithMethod('app-component', 'getAutoLogoutComponent') || []);

      var AutoLogout = function AutoLogout() {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }; // We ask each plugin in reverse order if they have the AutoLogout component


      _lodash["default"].forEach(plugins, function (plugin) {
        var result = plugin.getAutoLogoutComponent({
          location: location,
          appContext: (0, _mobxStateTree.getEnv)(app)
        });
        if (_lodash["default"].isUndefined(result)) return;
        AutoLogout = result; // eslint-disable-next-line consistent-return

        return false; // This will stop lodash from continuing the forEach loop
      });

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(AutoLogout, null), /*#__PURE__*/_react["default"].createElement(App, null));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        negative: true,
        className: "clearfix mt4"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "A problem was encountered"), /*#__PURE__*/_react["default"].createElement("p", null, "No plugins provided the App react component!")));
    }
  }]);

  return AppContainer;
}(_react.Component);

var _default = (0, _mobxReact.inject)('pluginRegistry', 'app', 'assets')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AppContainer)));

exports["default"] = _default;
//# sourceMappingURL=AppContainer.js.map