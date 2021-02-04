"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactRouterDom = require("react-router-dom");

var _mobxReact = require("mobx-react");

var _reactTable = _interopRequireDefault(require("react-table"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

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

var IndexesList = /*#__PURE__*/function (_React$Component) {
  _inherits(IndexesList, _React$Component);

  var _super = _createSuper(IndexesList);

  function IndexesList(props) {
    var _this;

    _classCallCheck(this, IndexesList);

    _this = _super.call(this, props);

    _this.handleAddIndex = function () {
      _this["goto"]('/indexes/add');
    };

    _this.state = {};
    return _this;
  }

  _createClass(IndexesList, [{
    key: "getIndexesStore",
    value: function getIndexesStore() {
      var store = this.props.indexesStore;
      store.load();
      return store;
    }
  }, {
    key: "getIndexes",
    value: function getIndexes() {
      var store = this.getIndexesStore();
      return store.list;
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var _this2 = this;

      var indexesData = this.getIndexes();
      var pageSize = indexesData.length;
      var pagination = indexesData.length > pageSize;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTable["default"], {
        data: indexesData,
        showPagination: pagination,
        defaultPageSize: pageSize,
        className: "-striped -highlight",
        filterable: true,
        defaultFilterMethod: function defaultFilterMethod(filter, row) {
          var columnValue = String(row[filter.id]).toLowerCase();
          var filterValue = filter.value.toLowerCase();
          return columnValue.indexOf(filterValue) >= 0;
        },
        columns: [{
          Header: 'Index Name',
          accessor: 'id'
        }, {
          Header: 'AWS Account',
          id: 'awsAccountId',
          accessor: function accessor(row) {
            return _this2.props.awsAccountsStore.getNameForAccountId(row.awsAccountId);
          }
        }, {
          Header: 'Description',
          accessor: 'description'
        }]
      }), /*#__PURE__*/_react["default"].createElement("br", null));
    }
  }, {
    key: "goto",
    value: function goto(pathname) {
      var location = this.props.location;
      var link = (0, _routing.createLink)({
        location: location,
        pathname: pathname
      });
      this.props.history.push(link);
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "briefcase",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Indexes", this.renderTotal())), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        size: "medium",
        basic: true,
        onClick: this.handleAddIndex
      }, "Add Index"));
    }
  }, {
    key: "renderTotal",
    value: function renderTotal() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true
      }, this.getIndexes().length);
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getIndexesStore();
      var content;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 3
        });
      } else {
        content = this.renderMain();
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 animated fadeIn"
      }, this.renderHeader(), content);
    }
  }]);

  return IndexesList;
}(_react["default"].Component);

var _default = (0, _mobxReact.inject)('awsAccountsStore', 'indexesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(IndexesList)));

exports["default"] = _default;
//# sourceMappingURL=IndexesList.js.map