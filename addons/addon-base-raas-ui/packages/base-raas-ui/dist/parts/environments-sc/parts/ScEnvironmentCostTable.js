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

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

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
var ScEnvironmentCostTable = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentCostTable, _React$Component);

  var _super = _createSuper(ScEnvironmentCostTable);

  function ScEnvironmentCostTable() {
    _classCallCheck(this, ScEnvironmentCostTable);

    return _super.apply(this, arguments);
  }

  _createClass(ScEnvironmentCostTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var costStore = this.getEnvCostStore();

      if (!(0, _BaseStore.isStoreReady)(costStore) && !(0, _BaseStore.isStoreError)(costStore)) {
        (0, _utils.swallowError)(costStore.load());
      }

      costStore.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var costStore = this.getEnvCostStore();
      costStore.stopHeartbeat();
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
      var store = this.getEnvCostStore();
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "p0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else if ((0, _BaseStore.isStoreReady)(store)) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, content);
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var costStore = this.getEnvCostStore();
      var cost = costStore.scEnvironmentCost;
      var list = cost.list;

      var isEmpty = _lodash["default"].isEmpty(list);

      var renderRow = function renderRow(index, key, value) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: index
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 5
        }, key), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 11,
          className: "breakout"
        }, "$", (0, _utils.nicePrice)(value)));
      };

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isEmpty && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        definition: true,
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, _lodash["default"].map(list, function (item, index) {
        return renderRow(index, item.date, item.amount);
      }))), isEmpty && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        className: "mt3",
        content: "None is available"
      }));
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
  }]);

  return ScEnvironmentCostTable;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentCostTable, {
  costsStore: _mobx.computed,
  envId: _mobx.computed
});

var _default = (0, _mobxReact.inject)('scEnvironmentCostsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentCostTable)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentCostTable.js.map