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

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _DataSourceAccountCard = _interopRequireDefault(require("./DataSourceAccountCard"));

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
// - dataSourceAccountsStore (via injection)
var DataSourceAccountsList = /*#__PURE__*/function (_React$Component) {
  _inherits(DataSourceAccountsList, _React$Component);

  var _super = _createSuper(DataSourceAccountsList);

  function DataSourceAccountsList() {
    var _this;

    _classCallCheck(this, DataSourceAccountsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleRegisterStudies = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto("/data-sources/register");
    };

    return _this;
  }

  _createClass(DataSourceAccountsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      var store = this.accountsStore;

      if (!(0, _BaseStore.isStoreReady)(store)) {
        (0, _utils.swallowError)(store.load());
      }

      store.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.envsStore;
      (0, _BaseStore.stopHeartbeat)(store);
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.accountsStore;
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "p0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 2
        });
      } else if ((0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else if ((0, _BaseStore.isStoreNotEmpty)(store)) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 animated fadeIn"
      }, this.renderTitle(), content);
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var store = this.accountsStore;
      var list = store.list;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _lodash["default"].map(list, function (item) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
          className: "pr3 pl3 pb3 pt1 mb3",
          clearing: true,
          key: item.id
        }, /*#__PURE__*/_react["default"].createElement(_DataSourceAccountCard["default"], {
          account: item
        }));
      }));
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        "data-testid": "data-sources-accounts",
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "database"
      }), "No data sources", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "To create a data source, click Register Studies.")));
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
        name: "database",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Data Sources ", this.renderTotal())), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        "data-testid": "register-data-studies",
        color: "blue",
        size: "medium",
        onClick: this.handleRegisterStudies
      }, "Register Studies")));
    }
  }, {
    key: "renderTotal",
    value: function renderTotal() {
      var store = this.accountsStore;
      if ((0, _BaseStore.isStoreError)(store) || (0, _BaseStore.isStoreLoading)(store)) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true
      }, store.total);
    }
  }, {
    key: "accountsStore",
    get: function get() {
      return this.props.dataSourceAccountsStore;
    }
  }]);

  return DataSourceAccountsList;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(DataSourceAccountsList, {
  accountsStore: _mobx.computed,
  handleRegisterStudies: _mobx.action
});

var _default = (0, _mobxReact.inject)('dataSourceAccountsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(DataSourceAccountsList)));

exports["default"] = _default;
//# sourceMappingURL=DataSourceAccountsList.js.map