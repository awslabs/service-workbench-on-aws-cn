"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _DataSourceStudyRow = _interopRequireDefault(require("./DataSourceStudyRow"));

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
var DataSourceStudiesList = /*#__PURE__*/function (_React$Component) {
  _inherits(DataSourceStudiesList, _React$Component);

  var _super = _createSuper(DataSourceStudiesList);

  function DataSourceStudiesList() {
    _classCallCheck(this, DataSourceStudiesList);

    return _super.apply(this, arguments);
  }

  _createClass(DataSourceStudiesList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getAccountStore();

      if (!(0, _BaseStore.isStoreReady)(store)) {
        (0, _utils.swallowError)(store.load());
      }

      store.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.getAccountStore();
      (0, _BaseStore.stopHeartbeat)(store);
    }
  }, {
    key: "getAccountStore",
    value: function getAccountStore() {
      var accountsStore = this.accountsStore;
      var account = this.account || {};
      return accountsStore.getAccountStore(account.id);
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getAccountStore();
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
      } else if ((0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else if ((0, _BaseStore.isStoreNotEmpty)(store)) {
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
      var accountStore = this.getAccountStore();
      var list = account.studiesList;

      var getStudyStore = function getStudyStore(study) {
        return accountStore.getStudyStore(study.id);
      };

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        className: "mt0"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        width: 5
      }, "Study Id"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        width: 7
      }, "Path"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        width: 2
      }, "Type"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        width: 1
      }, "Access"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        width: 1
      }, "Status"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, _lodash["default"].map(list, function (item) {
        return /*#__PURE__*/_react["default"].createElement(_DataSourceStudyRow["default"], {
          key: item.id,
          study: item,
          store: getStudyStore(item)
        });
      }))));
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "book"
      }), "No registered studies", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "To add studies, click Register Studies.")));
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

  return DataSourceStudiesList;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(DataSourceStudiesList, {
  accountsStore: _mobx.computed,
  account: _mobx.computed
});

var _default = (0, _mobxReact.inject)('dataSourceAccountsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(DataSourceStudiesList)));

exports["default"] = _default;
//# sourceMappingURL=DataSourceStudiesList.js.map