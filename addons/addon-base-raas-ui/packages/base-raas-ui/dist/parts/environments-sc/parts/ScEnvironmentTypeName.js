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

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

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

// This component displays the name of the env type. The envTypeId is expected to be passed
// as a prop to this component. This component displays a progress place holder or an error with a popup
// message if the env type name can't be determined.
// expected props
// - envTypeId  (via prop)
// - envTypesStore (via injection)
var ScEnvironmentTypeName = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentTypeName, _React$Component);

  var _super = _createSuper(ScEnvironmentTypeName);

  function ScEnvironmentTypeName() {
    _classCallCheck(this, ScEnvironmentTypeName);

    return _super.apply(this, arguments);
  }

  _createClass(ScEnvironmentTypeName, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getEnvTypeStore();

      if (store && !(0, _BaseStore.isStoreReady)(store)) {
        (0, _utils.swallowError)(store.load());
      }
    }
  }, {
    key: "getEnvTypeStore",
    value: function getEnvTypeStore() {
      var envTypesStore = this.envTypesStore;
      var envTypeId = this.envTypeId;
      return envTypesStore.getEnvTypeStore(envTypeId);
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getEnvTypeStore();
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = this.renderError(store.error);
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder.Line, null));
      } else if ((0, _BaseStore.isStoreReady)(store)) {
        content = store.envType.name || 'Not provided';
      } else {
        content = null;
      }

      return content;
    }
  }, {
    key: "renderError",
    value: function renderError(error) {
      var defaultMessage = 'Hmm... something went wrong';
      var rawMessage = error || defaultMessage;
      var message = _lodash["default"].isString(rawMessage) ? rawMessage : _lodash["default"].get(rawMessage, 'message', defaultMessage);
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
        trigger: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          size: "mini",
          basic: true,
          color: "red"
        }, "Show Error"),
        basic: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-red"
      }, /*#__PURE__*/_react["default"].createElement("p", null, "An error occurred while retrieving the workspace type information."), /*#__PURE__*/_react["default"].createElement("p", null, "The system returned this error message:"), /*#__PURE__*/_react["default"].createElement("p", null, message)));
    }
  }, {
    key: "envTypeId",
    get: function get() {
      return this.props.envTypeId;
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }]);

  return ScEnvironmentTypeName;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentTypeName, {
  envTypeId: _mobx.computed,
  envTypesStore: _mobx.computed
});

var _default = (0, _mobxReact.inject)('envTypesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentTypeName)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentTypeName.js.map