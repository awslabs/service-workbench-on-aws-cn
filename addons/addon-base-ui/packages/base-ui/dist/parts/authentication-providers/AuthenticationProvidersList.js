"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _routing = require("../../helpers/routing");

var _utils = require("../../helpers/utils");

var _BaseStore = require("../../models/BaseStore");

var _BasicProgressPlaceholder = _interopRequireDefault(require("../helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("../helpers/ErrorBox"));

var _AuthenticationProviderCard = _interopRequireDefault(require("./AuthenticationProviderCard"));

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
// -  authenticationProviderConfigsStore (via injection)
var AuthenticationProvidersList = /*#__PURE__*/function (_Component) {
  _inherits(AuthenticationProvidersList, _Component);

  var _super = _createSuper(AuthenticationProvidersList);

  function AuthenticationProvidersList() {
    var _this;

    _classCallCheck(this, AuthenticationProvidersList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleAddAuthenticationProviderClick = function (_event) {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto('/authentication-providers/add');
    };

    return _this;
  }

  _createClass(AuthenticationProvidersList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getStore();
      (0, _utils.swallowError)(store.load());
      store.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.getStore();
      store.stopHeartbeat();
    }
  }, {
    key: "getStore",
    value: function getStore() {
      return this.props.authenticationProviderConfigsStore;
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getStore();
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 3
        });
      } else if ((0, _BaseStore.isStoreReady)(store)) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb4"
      }, this.renderTitle(), content));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this2 = this;

      var renderCount = function renderCount() {
        var store = _this2.getStore();

        var showCount = (0, _BaseStore.isStoreReady)(store) && (0, _BaseStore.isStoreNotEmpty)(store);
        var list = store.list;
        return showCount && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          circular: true,
          size: "medium"
        }, list.length);
      };

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "user secret",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Authentication Providers", renderCount())));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var store = this.getStore();
      var list = store.list;
      return /*#__PURE__*/_react["default"].createElement("div", null, _lodash["default"].map(list, function (authNProviderConfig, idx) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
          clearing: true,
          key: authNProviderConfig.id,
          className: "mb2"
        }, /*#__PURE__*/_react["default"].createElement(_AuthenticationProviderCard["default"], {
          authenticationProviderConfig: authNProviderConfig,
          pos: idx + 1
        }));
      }));
    }
  }]);

  return AuthenticationProvidersList;
}(_react.Component);

var _default = (0, _mobxReact.inject)('authenticationProviderConfigsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AuthenticationProvidersList)));

exports["default"] = _default;
//# sourceMappingURL=AuthenticationProvidersList.js.map