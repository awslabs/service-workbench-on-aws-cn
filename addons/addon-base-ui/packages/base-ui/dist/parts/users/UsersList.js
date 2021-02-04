"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactRouterDom = require("react-router-dom");

var _mobx = require("mobx");

var _mobxStateTree = require("mobx-state-tree");

var _mobxReact = require("mobx-react");

var _reactTable = _interopRequireDefault(require("react-table"));

var _BaseStore = require("../../models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("../helpers/ErrorBox"));

var _routing = require("../../helpers/routing");

var _notification = require("../../helpers/notification");

var _BasicProgressPlaceholder = _interopRequireDefault(require("../helpers/BasicProgressPlaceholder"));

var _utils = require("../../helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

    _this.handleEditorOn = function (user) {
      return (0, _mobx.action)(function (event) {
        event.preventDefault();
        event.stopPropagation(); // Get the underlying plain JavaScript object from the "user"
        // MobX State Tree object using "getSnapshot" function

        _this.mapOfUsersBeingEdited[user.id] = _lodash["default"].assign({
          id: user.id
        }, (0, _mobxStateTree.getSnapshot)(user)); // The this.mapOfUsersBeingEdited is observable, to make sure the render is triggered update the this.mapOfUsersBeingEdited
        // reference by reassigning a new reference to this.mapOfUsersBeingEdited

        _this.mapOfUsersBeingEdited = _lodash["default"].clone(_this.mapOfUsersBeingEdited);
      });
    };

    _this.handleSave = function (user) {
      return (0, _mobx.action)( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault();
                  event.stopPropagation();
                  _this.formProcessing = true;
                  _context.prev = 3;
                  _context.next = 6;
                  return _this.getStore().updateUser(user);

                case 6:
                  (0, _mobx.runInAction)(function () {
                    _this.mapOfUsersBeingEdited[user.id] = undefined; // // The this.mapOfUsersBeingEdited is observable, to make sure the render is triggered update the this.mapOfUsersBeingEdited
                    // // reference by reassigning a new reference to this.mapOfUsersBeingEdited
                    // this.mapOfUsersBeingEdited = _.assign({}, this.mapOfUsersBeingEdited);
                    // this.mapOfUsersBeingEdited = {
                    //   [user.id]: undefined,
                    // };

                    _this.formProcessing = false;
                  });
                  _context.next = 13;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](3);
                  (0, _mobx.runInAction)(function () {
                    _this.formProcessing = false;
                  });
                  (0, _notification.displayError)(_context.t0);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 9]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    };

    _this.handleCancel = function (user) {
      return (0, _mobx.action)(function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this.mapOfUsersBeingEdited[user.id] = undefined; // // The this.mapOfUsersBeingEdited is observable, to make sure the render is triggered update the this.mapOfUsersBeingEdited
        // // reference by reassigning a new reference to this.mapOfUsersBeingEdited

        _this.mapOfUsersBeingEdited = _lodash["default"].clone(_this.mapOfUsersBeingEdited); // this.mapOfUsersBeingEdited = {
        //   [user.id]: undefined,
        // };
      });
    };

    _this.handleAddUser = function () {
      _this["goto"]('/users/add');
    };

    _this.handleAddAuthenticationProvider = function () {
      _this["goto"]('/authentication-providers');
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
    key: "getStore",
    value: function getStore() {
      return this.props.usersStore;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getStore();
      (0, _utils.swallowError)(store.load());
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
    key: "renderNoNonRootAdmins",
    value: function renderNoNonRootAdmins() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "users"
      }), "Brand new data lake", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
        className: "mt2"
      }, "No admin users in the Data Lake. Please add users in the Data Lake or Configure Authentication Provider then login as a regular non-root User.")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment.Inline, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        onClick: this.handleAddUser
      }, "Add Users"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "teal",
        onClick: this.handleAddAuthenticationProvider
      }, "Configure Auth Provider")));
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
        basic: true,
        onClick: this.handleAddUser
      }, "Add User"));
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
      var usersBeingEditedMap = this.mapOfUsersBeingEdited;
      var store = this.getStore();
      var nonRootUsers = store.nonRootUsers; // const nonRootUsers = store.list;

      var pageSize = Math.min(nonRootUsers.length, 50);
      var showPagination = nonRootUsers.length > pageSize;

      var displayEditableInput = function displayEditableInput(attributeName) {
        return function (row) {
          var user = row.original;
          var userBeingEdited = usersBeingEditedMap[user.id];
          var handleChange = (0, _mobx.action)(function (event) {
            event.preventDefault();
            userBeingEdited[attributeName] = event.target.value;
          });
          return userBeingEdited ? /*#__PURE__*/_react["default"].createElement("div", {
            className: "ui focus input"
          }, /*#__PURE__*/_react["default"].createElement("input", {
            type: "text",
            defaultValue: row.value,
            onChange: handleChange
          })) : user[attributeName];
        };
      };

      var handleCheckboxChange = function handleCheckboxChange(userBeingEdited, attributeName) {
        return (0, _mobx.action)(function (event, _ref2) {
          var checked = _ref2.checked;
          userBeingEdited[attributeName] = checked; // update this.mapOfUsersBeingEdited reference to force re-render

          _this2.mapOfUsersBeingEdited = _lodash["default"].clone(_this2.mapOfUsersBeingEdited);
          event.stopPropagation();
        });
      };

      var handleRadioChange = function handleRadioChange(userBeingEdited, attributeName) {
        return (0, _mobx.action)(function (event, _ref3) {
          var value = _ref3.value;
          userBeingEdited[attributeName] = value; // update this.mapOfUsersBeingEdited reference to force re-render

          _this2.mapOfUsersBeingEdited = _lodash["default"].clone(_this2.mapOfUsersBeingEdited);
          event.stopPropagation();
        });
      };

      var booleanColumnValueFilter = function booleanColumnValueFilter() {
        var trueString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yes';
        var falseString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no';
        return function (filter, row) {
          var columnValueBoolean = row[filter.id];
          var columnValueStr = columnValueBoolean ? trueString : falseString;
          var filterValue = filter.value.toLowerCase(); // Allow filtering by typing "yes/no" or "true/false"

          return columnValueStr.indexOf(filterValue) === 0 || String(columnValueBoolean).toLowerCase().indexOf(filterValue) === 0;
        };
      };

      var processing = this.formProcessing;

      if (!store.hasNonRootUsers) {
        return null;
      }

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
          data: nonRootUsers,
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
            Header: 'User Name',
            accessor: 'username'
          }, {
            Header: 'Email',
            accessor: 'email',
            Cell: displayEditableInput('email')
          }, {
            Header: 'First Name',
            accessor: 'firstName',
            Cell: displayEditableInput('firstName')
          }, {
            Header: 'Last Name',
            accessor: 'lastName',
            Cell: displayEditableInput('lastName')
          }, {
            Header: 'Admin',
            accessor: 'isAdmin',
            filterMethod: booleanColumnValueFilter(),
            Cell: function Cell(row) {
              var user = row.original;
              var userBeingEdited = usersBeingEditedMap[user.id];
              return userBeingEdited ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Checkbox, {
                checked: userBeingEdited.isAdmin,
                label: userBeingEdited.isAdmin ? 'Yes' : 'No',
                onChange: handleCheckboxChange(userBeingEdited, 'isAdmin')
              })) : user.isAdmin ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", {
                className: "check circle outline icon green"
              }), "Yes") : /*#__PURE__*/_react["default"].createElement("span", null, "No");
            }
          }, {
            Header: 'Status',
            accessor: 'isActive',
            filterMethod: booleanColumnValueFilter('active', 'inactive'),
            minWidth: 125,
            Cell: function Cell(row) {
              var user = row.original;
              var userBeingEdited = usersBeingEditedMap[user.id];
              var isActive = userBeingEdited ? userBeingEdited.status.toLowerCase() === 'active' : row.value;
              return userBeingEdited ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Radio, {
                name: "status-".concat(user.id),
                checked: isActive,
                value: "active",
                label: "Active",
                onChange: handleRadioChange(userBeingEdited, 'status')
              }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Radio, {
                className: "ml1",
                name: "status-".concat(user.id),
                checked: !isActive,
                value: "inactive",
                label: "Inactive",
                onChange: handleRadioChange(userBeingEdited, 'status')
              })) : user.isActive ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
                color: "green"
              }, /*#__PURE__*/_react["default"].createElement("i", {
                className: "check circle outline icon"
              }), "Active")) : /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
                color: "red"
              }, "Inactive"));
            }
          }, {
            Header: '',
            filterable: false,
            Cell: function Cell(cell) {
              var user = cell.original;
              var userBeingEdited = usersBeingEditedMap[user.id];
              return userBeingEdited ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
                name: "checkmark",
                className: "ml1 cursor-pointer",
                color: "green",
                onClick: _this2.handleSave(userBeingEdited)
              }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
                name: "close",
                className: "ml1 cursor-pointer",
                color: "red",
                onClick: _this2.handleCancel(userBeingEdited)
              })) : /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
                name: "pencil",
                className: "ml1 cursor-pointer",
                color: "blue",
                onClick: _this2.handleEditorOn(user)
              });
            }
          }]
        }))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getStore();
      var content;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 3
        });
      } else if ((0, _BaseStore.isStoreReady)(store) && !store.hasNonRootAdmins) {
        content = this.renderNoNonRootAdmins();
      } else if ((0, _BaseStore.isStoreReady)(store) && store.hasNonRootAdmins) {
        content = this.renderMain();
      } else {
        content = null;
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
  formProcessing: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(UsersList)));

exports["default"] = _default;
//# sourceMappingURL=UsersList.js.map