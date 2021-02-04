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

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _AccountCfnPanel = _interopRequireDefault(require("./parts/AccountCfnPanel"));

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
// - account (via prop)
// - dataSourceAccountsStore (via injection)
var DataSourceAccountCfn = /*#__PURE__*/function (_React$Component) {
  _inherits(DataSourceAccountCfn, _React$Component);

  var _super = _createSuper(DataSourceAccountCfn);

  function DataSourceAccountCfn() {
    _classCallCheck(this, DataSourceAccountCfn);

    return _super.apply(this, arguments);
  }

  _createClass(DataSourceAccountCfn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getStackInfoStore();

      if (!(0, _BaseStore.isStoreReady)(store)) {
        (0, _utils.swallowError)(store.load());
      }

      store.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.getStackInfoStore();
      (0, _BaseStore.stopHeartbeat)(store);
    }
  }, {
    key: "getStackInfoStore",
    value: function getStackInfoStore() {
      var accountsStore = this.accountsStore;
      var account = this.account || {};
      var accountStore = accountsStore.getAccountStore(account.id);
      return accountStore.getStackInfoStore();
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getStackInfoStore();
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "p0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 1
        });
      } else if ((0, _BaseStore.isStoreReady)(store)) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return content;
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var account = this.account;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animated fadeIn mb3"
      }, /*#__PURE__*/_react["default"].createElement(_AccountCfnPanel["default"], {
        account: account
      }));
    }
  }, {
    key: "account",
    get: function get() {
      return this.props.account;
    }
  }, {
    key: "accountsStore",
    get: function get() {
      return this.props.dataSourceAccountsStore;
    }
  }]);

  return DataSourceAccountCfn;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(DataSourceAccountCfn, {
  accountsStore: _mobx.computed,
  account: _mobx.computed
});

var _default = (0, _mobxReact.inject)('dataSourceAccountsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(DataSourceAccountCfn)));

exports["default"] = _default;
//# sourceMappingURL=DataSourceAccountCfn.js.map