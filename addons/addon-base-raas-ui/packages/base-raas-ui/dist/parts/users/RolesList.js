"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactRouterDom = require("react-router-dom");

var _mobx = require("mobx");

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

var RolesList = /*#__PURE__*/function (_React$Component) {
  _inherits(RolesList, _React$Component);

  var _super = _createSuper(RolesList);

  function RolesList(props) {
    var _this;

    _classCallCheck(this, RolesList);

    _this = _super.call(this, props);

    _this.handleAddUserRole = function () {
      _this["goto"]('/user-roles/add');
    };

    _this.state = {};
    (0, _mobx.runInAction)(function () {
      // An object that keeps track of which user is being edited
      // Each key in the object below has key as user's unique id (<ns>/<username>)
      // and value as flag indicating whether to show the editor for the user
      _this.mapOfUsersBeingEdited = {};
      _this.formProcessing = false;
    });
    return _this;
  }

  _createClass(RolesList, [{
    key: "getUserRolesStore",
    value: function getUserRolesStore() {
      var store = this.props.userRolesStore;
      return store;
    }
  }, {
    key: "getUserRoles",
    value: function getUserRoles() {
      var store = this.getUserRolesStore();
      return store.list;
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var userRolesData = this.getUserRoles();
      var pageSize = userRolesData.length;
      var showPagination = userRolesData.length > pageSize;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTable["default"], {
        data: userRolesData,
        showPagination: showPagination,
        defaultPageSize: pageSize,
        className: "-striped -highlight",
        filterable: true,
        defaultFilterMethod: function defaultFilterMethod(filter, row) {
          var columnValue = String(row[filter.id]).toLowerCase();
          var filterValue = filter.value.toLowerCase();
          return columnValue.indexOf(filterValue) >= 0;
        },
        columns: [{
          Header: 'User Role Name',
          accessor: 'id'
        }, {
          Header: 'Description',
          accessor: 'description'
        }, {
          Header: 'User Type',
          accessor: 'userType'
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
        name: "id badge",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "User Roles", this.renderTotal())));
    }
  }, {
    key: "renderTotal",
    value: function renderTotal() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true
      }, this.getUserRoles().length);
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getUserRolesStore();
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

  return RolesList;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(RolesList, {
  mapOfUsersBeingEdited: _mobx.observable,
  formProcessing: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userRolesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(RolesList)));

exports["default"] = _default;
//# sourceMappingURL=RolesList.js.map