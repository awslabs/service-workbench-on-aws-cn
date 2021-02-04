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

var _lodash = _interopRequireDefault(require("lodash"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _ProjectConfigure = _interopRequireDefault(require("./ProjectConfigure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ProjectsList = /*#__PURE__*/function (_React$Component) {
  _inherits(ProjectsList, _React$Component);

  var _super = _createSuper(ProjectsList);

  function ProjectsList(props) {
    var _this;

    _classCallCheck(this, ProjectsList);

    _this = _super.call(this, props);

    _this.handleAddProject = function () {
      _this["goto"]('/projects/add');
    };

    _this.state = {};
    (0, _mobx.runInAction)(function () {
      _this.stores = new _Stores["default"]([_this.props.projectsStore]);
    });
    return _this;
  }

  _createClass(ProjectsList, [{
    key: "getProjectsStore",
    value: function getProjectsStore() {
      var store = this.props.projectsStore;
      store.load();
      return store;
    }
  }, {
    key: "getProjects",
    value: function getProjects() {
      var store = this.getProjectsStore();
      return store.list;
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var _this2 = this;

      var projectsData = this.getProjects();
      var pageSize = projectsData.length;
      var pagination = projectsData.length > pageSize;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTable["default"], {
        data: projectsData,
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
          Header: 'Project Name',
          accessor: 'id'
        }, {
          Header: 'Index Id',
          accessor: 'indexId'
        }, {
          Header: 'Description',
          accessor: 'description'
        }, {
          Header: 'Project Admins',
          accessor: 'projectAdmins',
          style: {
            whiteSpace: 'unset'
          },
          Cell: (0, _mobxReact.observer)(function (row) {
            var project = row.original;
            var projectAdminUsers = project.projectAdminUsers;
            return _lodash["default"].map(projectAdminUsers, function (u) {
              return u.username;
            }).join(', ') || '<<none>>';
          })
        }, {
          Header: '',
          accessor: 'viewDetail',
          filterable: false,
          Cell: (0, _mobxReact.observer)(function (cell) {
            var project = _objectSpread({}, cell.original);

            return /*#__PURE__*/_react["default"].createElement("div", {
              style: {
                textAlign: 'center',
                verticalAlign: 'middle'
              }
            }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
              content: "View Project Detail",
              trigger: /*#__PURE__*/_react["default"].createElement(_ProjectConfigure["default"], {
                project: project,
                userStore: _this2.props.userStore,
                usersStore: _this2.props.usersStore,
                projectsStore: _this2.props.projectsStore,
                awsAccountsStore: _this2.props.awsAccountsStore
              })
            })));
          })
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
      }, "Projects", this.renderTotal())), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        size: "medium",
        basic: true,
        onClick: this.handleAddProject
      }, "Add Project"));
    }
  }, {
    key: "renderTotal",
    value: function renderTotal() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true
      }, this.getProjects().length);
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getProjectsStore();
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

  return ProjectsList;
}(_react["default"].Component);

var _default = (0, _mobxReact.inject)('awsAccountsStore', 'projectsStore', 'userStore', 'usersStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ProjectsList)));

exports["default"] = _default;
//# sourceMappingURL=ProjectsList.js.map