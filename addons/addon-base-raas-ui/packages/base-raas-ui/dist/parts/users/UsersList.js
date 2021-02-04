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

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _UpdateUser = _interopRequireDefault(require("./UpdateUser"));

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

var UsersList = /*#__PURE__*/function (_React$Component) {
  _inherits(UsersList, _React$Component);

  var _super = _createSuper(UsersList);

  function UsersList(props) {
    var _this;

    _classCallCheck(this, UsersList);

    _this = _super.call(this, props);

    _this.handleAddUser = function () {
      _this["goto"]('/users/add');
    };

    _this.handleAddLocalUser = function () {
      _this["goto"]('/users/add/local');
    };

    _this.handleAddAuthenticationProvider = function () {
      _this["goto"]('/authentication-providers');
    };

    _this.notifyNonRootUsers = true;
    _this.state = {
      // eslint-disable-next-line react/no-unused-state
      selectedRole: '',
      // eslint-disable-next-line react/no-unused-state
      projectId: [],
      // eslint-disable-next-line react/no-unused-state
      identityProviderName: '',
      // eslint-disable-next-line react/no-unused-state
      isIdentityProviderNameChanged: false,
      // eslint-disable-next-line react/no-unused-state
      unchangedIdentityProviderName: ''
    };
    (0, _mobx.runInAction)(function () {
      // An object that keeps track of which user is being edited
      // Each key in the object below has key as user's unique id (<ns>/<username>)
      // and value as flag indicating whether to show the editor for the user
      _this.mapOfUsersBeingEdited = {};
      _this.formProcessing = false;
    });
    return _this;
  }

  _createClass(UsersList, [{
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
      return this.props.usersStore;
    }
  }, {
    key: "goto",
    value: function goto(pathname) {
      var _this$props = this.props,
          location = _this$props.location,
          history = _this$props.history;
      var link = (0, _routing.createLink)({
        location: location,
        pathname: pathname
      });
      history.push(link);
    }
  }, {
    key: "getAwsAccountOptions",
    value: function getAwsAccountOptions() {
      var accountStore = this.props.awsAccountsStore;
      return accountStore.dropdownOptions;
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
        name: "users",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Users", this.renderTotal())), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        size: "medium",
        className: "mr2",
        basic: true,
        onClick: this.handleAddLocalUser
      }, ' ', "Add Local User", ' '), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        size: "medium",
        basic: true,
        onClick: this.handleAddUser
      }, ' ', "Add Federated User", ' '));
    }
  }, {
    key: "renderTotal",
    value: function renderTotal() {
      var store = this.getStore();
      if ((0, _BaseStore.isStoreError)(store) || (0, _BaseStore.isStoreLoading)(store)) return null;
      var nonRootUsers = store.nonRootUsers;
      var count = nonRootUsers.length;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true
      }, count);
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      return this.renderUsers();
    }
  }, {
    key: "renderUsers",
    value: function renderUsers() {
      var _this2 = this;

      // Read "this.mapOfUsersBeingEdited" in the "render" method here
      // The usersBeingEditedMap is then used in the ReactTable
      // If we directly use this.mapOfUsersBeingEdited in the ReactTable's cell method, MobX does not
      // realize that it is being used in the outer component's "render" method's scope
      // Due to this, MobX does not re-render the component when observable state changes.
      // To make this work correctly, we need to access "this.mapOfUsersBeingEdited" out side of ReactTable once
      var store = this.getStore();
      var usersList = store.list;
      var pageSize = usersList.length;
      var showPagination = usersList.length > pageSize;
      var processing = this.formProcessing;
      return (
        /*#__PURE__*/
        // TODO: add api token stats and active flag here in the table
        _react["default"].createElement(_semanticUiReact.Segment, {
          basic: true,
          className: "p0"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer, {
          active: processing,
          inverted: true
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Loader, {
          inverted: true
        }, "Updating")), /*#__PURE__*/_react["default"].createElement(_reactTable["default"], {
          data: usersList,
          defaultSorted: [{
            id: 'lastName',
            desc: true
          }],
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
            Header: 'Name',
            accessor: 'username',
            width: 200
          }, {
            Header: 'Email',
            accessor: 'email',
            width: 200
          }, {
            Header: 'Identity Provider',
            accessor: 'identityProviderName',
            Cell: function Cell(row) {
              var user = row.original;
              return user.identityProviderName || 'internal';
            }
          }, {
            Header: 'Type',
            accessor: 'isExternalUser',
            width: 100,
            Cell: function Cell(row) {
              var user = row.original;
              return user.isExternalUser ? 'External' : 'Internal';
            },
            filterMethod: function filterMethod(filter) {
              if (filter.value.toLowerCase().includes('ex')) {
                return false;
              }

              return true;
            }
          }, {
            Header: 'Role',
            accessor: 'userRole',
            width: 100,
            style: {
              whiteSpace: 'unset'
            },
            Cell: function Cell(row) {
              var user = row.original;
              return user.userRole || 'N/A';
            }
          }, {
            Header: 'Project',
            style: {
              whiteSpace: 'unset'
            },
            Cell: function Cell(row) {
              var user = row.original;
              return user.projectId.join(', ') || '<<none>>';
            }
          }, {
            Header: 'Status',
            accessor: 'isActive',
            width: 100,
            Cell: function Cell(row) {
              var user = row.original;
              var lable = null;

              if (user.status === 'active') {
                lable = /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
                  color: "green"
                }, /*#__PURE__*/_react["default"].createElement("i", {
                  className: "check circle outline icon"
                }), "Active"));
              } else if (user.status === 'inactive') {
                lable = /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
                  color: "red"
                }, /*#__PURE__*/_react["default"].createElement("i", {
                  className: "circle icon"
                }), "Inactive"));
              } else {
                lable = /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
                  color: "orange"
                }, /*#__PURE__*/_react["default"].createElement("i", {
                  className: "exclamation icon"
                }), "Pending"));
              }

              return lable;
            },
            filterMethod: function filterMethod(filter, row) {
              if (row._original.status.indexOf(filter.value.toLowerCase()) >= 0) {
                return true;
              }

              return false;
            }
          }, {
            Header: '',
            filterable: false,
            Cell: function Cell(cell) {
              var user = cell.original;
              return /*#__PURE__*/_react["default"].createElement("div", {
                style: {
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }
              }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
                content: "View User Detail",
                trigger: /*#__PURE__*/_react["default"].createElement(_UpdateUser["default"], {
                  user: user,
                  adminMode: true,
                  userStore: _this2.props.userStore,
                  usersStore: _this2.props.usersStore,
                  userRolesStore: _this2.props.userRolesStore,
                  awsAccountsStore: _this2.props.awsAccountsStore,
                  projectsStore: _this2.props.projectsStore
                })
              })));
            }
          }]
        }))
      );
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
        if (!store.hasNonRootUsers) {
          if (this.notifyNonRootUsers) {
            this.notifyNonRootUsers = false;
            (0, _notification.displayWarning)('Please add users in the Data Lake. May need to configure authentication provider in the Auth tab at left. Then login as a regular non-root User.');
          }
        }

        content = this.renderMain();
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 animated fadeIn"
      }, this.renderHeader(), content);
    }
  }]);

  return UsersList;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(UsersList, {
  mapOfUsersBeingEdited: _mobx.observable,
  formProcessing: _mobx.observable,
  handleAddUser: _mobx.action,
  handleAddAuthenticationProvider: _mobx.action,
  handleAddLocalUser: _mobx.action
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore', 'userRolesStore', 'awsAccountsStore', 'projectsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(UsersList)));

exports["default"] = _default;
//# sourceMappingURL=UsersList.js.map