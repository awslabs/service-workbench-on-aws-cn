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

// expected props
// - envId (via prop)
// - scEnvironmentCostsStore  (via injection)
var ScEnvironmentCost = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentCost, _React$Component);

  var _super = _createSuper(ScEnvironmentCost);

  function ScEnvironmentCost() {
    _classCallCheck(this, ScEnvironmentCost);

    return _super.apply(this, arguments);
  }

  _createClass(ScEnvironmentCost, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var costStore = this.getEnvCostStore();

      if (!(0, _BaseStore.isStoreReady)(costStore) && !(0, _BaseStore.isStoreError)(costStore)) {
        (0, _utils.swallowError)(costStore.load());
      }
    }
  }, {
    key: "getEnvCostStore",
    value: function getEnvCostStore() {
      var costsStore = this.costsStore;
      var envId = this.envId;
      return costsStore.getScEnvironmentCostStore(envId);
    }
  }, {
    key: "render",
    value: function render() {
      var envCost = this.envCost;

      var isLoading = _lodash["default"].isUndefined(envCost);

      var isError = !isLoading && !_lodash["default"].isEmpty(envCost.error);
      var previousCost = !isLoading && !isError ? envCost.previousDayCost : 0;

      if (isLoading) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder.Line, {
          length: "full"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder.Line, {
          length: "full"
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "center breakout"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Statistic, {
        color: isError ? 'red' : 'black',
        size: "mini"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Statistic.Value, null, isError ? 'N/A' : "$".concat((0, _utils.nicePrice)(previousCost))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Statistic.Label, null, "Yesterday's Cost"))), isError && this.renderErrorPopup(envCost.error));
    }
  }, {
    key: "renderErrorPopup",
    value: function renderErrorPopup(error) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 center"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
        trigger: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          size: "mini",
          basic: true,
          color: "red"
        }, "Show Error"),
        basic: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-red"
      }, /*#__PURE__*/_react["default"].createElement("p", null, "An error occurred while retrieving the cost information."), /*#__PURE__*/_react["default"].createElement("p", null, "If this workspace is provisioned in a new account, verify with your administer that the cost explorer feature is enabled for the account."), /*#__PURE__*/_react["default"].createElement("p", null, "The system returned this error message:"), /*#__PURE__*/_react["default"].createElement("p", null, error))));
    }
  }, {
    key: "costsStore",
    get: function get() {
      return this.props.scEnvironmentCostsStore;
    }
  }, {
    key: "envId",
    get: function get() {
      return this.props.envId;
    }
  }, {
    key: "envCost",
    get: function get() {
      var envId = this.envId;
      return this.costsStore.getScEnvironmentCost(envId);
    }
  }]);

  return ScEnvironmentCost;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentCost, {
  costsStore: _mobx.computed,
  envId: _mobx.computed
});

var _default = (0, _mobxReact.inject)('scEnvironmentCostsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentCost)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentCost.js.map