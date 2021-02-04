"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _mobxStateTree = require("mobx-state-tree");

var _reactRouterDom = require("react-router-dom");

var _withAuth = _interopRequireDefault(require("./withAuth"));

var _pluginsUtil = require("./helpers/plugins-util");

var _MainLayout = _interopRequireDefault(require("./parts/MainLayout"));

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
// - app model (via injection)
// - location (from react router)
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "getRoutes",
    value: function getRoutes() {
      var location = this.props.location;
      var appContext = this.appContext;
      return (0, _pluginsUtil.getRoutes)({
        location: location,
        appContext: appContext
      });
    }
  }, {
    key: "getMenuItems",
    value: function getMenuItems() {
      var location = this.props.location;
      var appContext = this.appContext;
      return (0, _pluginsUtil.getMenuItems)({
        location: location,
        appContext: appContext
      });
    }
  }, {
    key: "getDefaultRouteLocation",
    value: function getDefaultRouteLocation() {
      // See https://reacttraining.com/react-router/web/api/withRouter
      var location = this.props.location;
      var appContext = this.appContext;
      return (0, _pluginsUtil.getDefaultRouteLocation)({
        location: location,
        appContext: appContext
      });
    }
  }, {
    key: "renderApp",
    value: function renderApp() {
      var defaultLocation = this.getDefaultRouteLocation();
      return /*#__PURE__*/_react["default"].createElement(_MainLayout["default"], {
        menuItems: this.getMenuItems()
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
        exact: true,
        from: "/",
        to: defaultLocation
      }), this.getRoutes()));
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderApp();
    }
  }, {
    key: "appContext",
    get: function get() {
      return (0, _mobxStateTree.getEnv)(this.props.app) || {};
    }
  }]);

  return App;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(App, {
  appContext: _mobx.computed
});

var _default = (0, _withAuth["default"])((0, _mobxReact.inject)('app', 'userStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(App))));

exports["default"] = _default;
//# sourceMappingURL=App.js.map