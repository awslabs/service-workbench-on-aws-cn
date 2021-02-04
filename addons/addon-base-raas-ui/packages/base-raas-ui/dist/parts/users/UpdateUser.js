"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _lodash = _interopRequireDefault(require("lodash"));

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _DropDown = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/DropDown"));

var _YesNo = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/YesNo"));

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _UpdateUserConfig = require("../../models/forms/UpdateUserConfig");

var _UserFormUtils = require("../../models/forms/UserFormUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var UpdateUser = /*#__PURE__*/function (_React$Component) {
  _inherits(UpdateUser, _React$Component);

  var _super = _createSuper(UpdateUser);

  function UpdateUser(props) {
    var _this;

    _classCallCheck(this, UpdateUser);

    _this = _super.call(this, props);

    _this.handleEditClick = function () {
      _this.view = 'edit';
    };

    _this.handleCancel = function () {
      _this.form.clear();

      if (_this.view === 'edit') {
        // if it's in edit mode then switch to detail view mode
        _this.view = 'detail';
      } else {
        // if not in edit mode then close
        _this.handleClose();
      }
    };

    _this.handleFormSubmission = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var values, isInternalUser, isInternalGuest, projectId, firstName, lastName, email, userRole, status, isAdmin, identityProviderNameField, userToUpdate, usersStore, idpOptionValue;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values = form.values();
                isInternalUser = _this.userRolesStore.isInternalUser(values.userRole);
                isInternalGuest = _this.userRolesStore.isInternalGuest(values.userRole);
                projectId = values.projectId || [];

                if (!isInternalUser || isInternalGuest) {
                  // Pass projectId(s) only if the user's role is internal role and if the user is not a guest.
                  // Pass empty array otherwise.
                  projectId = [];
                }

                firstName = values.firstName, lastName = values.lastName, email = values.email, userRole = values.userRole, status = values.status;
                isAdmin = userRole === 'admin';
                identityProviderNameField = form.$('identityProviderName');
                userToUpdate = _objectSpread({}, _this.getCurrentUser(), {
                  firstName: firstName,
                  lastName: lastName,
                  email: email
                });

                if (_this.props.adminMode && !_this.getCurrentUser().isRootUser) {
                  userToUpdate = _objectSpread({}, userToUpdate, {
                    userRole: userRole,
                    isAdmin: isAdmin,
                    projectId: projectId,
                    status: status
                  });
                }

                _context.prev = 10;
                usersStore = _this.usersStore;

                if (!identityProviderNameField.isDirty) {
                  _context.next = 27;
                  break;
                }

                if (!_this.props.adminMode) {
                  _context.next = 24;
                  break;
                }

                // clear out the user namespace as it will be re-derived based on authenticationProviderId and
                // identityProviderName on server side
                userToUpdate.ns = undefined; // The values.identityProviderName is in JSON string format
                // containing authentication provider id as well as identity provider name
                // See "src/models/forms/UserFormUtils.js" for more details.

                idpOptionValue = (0, _UserFormUtils.toIdpFromValue)(identityProviderNameField.value);
                userToUpdate.identityProviderName = idpOptionValue.idpName;
                userToUpdate.authenticationProviderId = idpOptionValue.authNProviderId;
                _context.next = 20;
                return usersStore.addUser(userToUpdate);

              case 20:
                _context.next = 22;
                return usersStore.deleteUser(_this.getCurrentUser());

              case 22:
                _context.next = 25;
                break;

              case 24:
                (0, _notification.displayError)('Only admins can update identity provider information for the user');

              case 25:
                _context.next = 29;
                break;

              case 27:
                _context.next = 29;
                return usersStore.updateUser(userToUpdate);

              case 29:
                form.clear();
                (0, _notification.displaySuccess)('Updated user successfully'); // reload the current user's store after user updates, in case the currently
                // logged in user is updated

                _context.next = 33;
                return _this.userStore.load();

              case 33:
                _this.handleClose();

                _context.next = 39;
                break;

              case 36:
                _context.prev = 36;
                _context.t0 = _context["catch"](10);
                (0, _notification.displayError)(_context.t0);

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[10, 36]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleDeleteClick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _this.processing = true;
              _context2.next = 4;
              return _this.usersStore.deleteUser(_this.getCurrentUser());

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              (0, _notification.displayError)(_context2.t0);

            case 9:
              (0, _mobx.runInAction)(function () {
                _this.processing = false;
              });

              _this.handleClose();

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    _this.handleApproveDisapproveClick = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(status) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _this.processing = true;
                _context3.next = 4;
                return _this.usersStore.updateUser(_objectSpread({}, _this.getCurrentUser(), {
                  status: status
                }));

              case 4:
                _context3.next = 6;
                return _this.userStore.load();

              case 6:
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                (0, _notification.displayError)(_context3.t0);

              case 11:
                (0, _mobx.runInAction)(function () {
                  _this.processing = false;
                });

                _this.handleClose();

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.handleOpen = function () {
      _this.usersStore.stopHeartbeat(); // Need to recreate form based on the user being passed (i.e., getCurrentUser) to make sure the form field values
      // are updated as per the latest user information


      _this.form = (0, _UpdateUserConfig.getUpdateUserConfigForm)(_this.getCurrentUser());
      _this.modalOpen = true;
    };

    _this.handleClose = function () {
      _this.usersStore.startHeartbeat();

      _this.modalOpen = false;
    };

    _this.handleFormError = function (_form, _errors) {// We don't need to do anything here
    };

    (0, _mobx.runInAction)(function () {
      _this.stores = new _Stores["default"]([_this.userStore, _this.userRolesStore, _this.awsAccountsStore, _this.projectsStore, _this.authenticationProviderConfigsStore]);
      _this.modalOpen = false;
      _this.processing = false;
      _this.view = 'detail'; // view mode or edit mode
    });
    _this.form = (0, _UpdateUserConfig.getUpdateUserConfigForm)(_this.getCurrentUser());
    return _this;
  }

  _createClass(UpdateUser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.getStores().load());
    }
  }, {
    key: "render",
    value: function render() {
      var stores = this.getStores();
      var content = null;

      if (stores.hasError) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: stores.error,
          className: "p0 mb3"
        });
      } else if (stores.loading) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else if (stores.ready) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        closeIcon: true,
        trigger: this.renderTrigger(),
        open: this.modalOpen,
        onClose: this.handleClose
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        icon: true,
        textAlign: "center",
        className: "mt3",
        color: "grey"
      }, "User Detail"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 ml3 mr3 animated fadeIn"
      }, content)));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var content = null;

      if (this.view === 'detail') {
        content = this.renderDetailView();
      } else if (this.view === 'edit') {
        content = this.renderEditView();
      }

      return content;
    }
  }, {
    key: "renderDetailView",
    value: function renderDetailView() {
      var _this2 = this;

      var getFieldLabel = function getFieldLabel(fieldName) {
        return _this2.form.$(fieldName).label;
      };

      var toRow = function toRow(fieldName) {
        var value = _lodash["default"].get(_this2.getCurrentUser(), fieldName);

        var displayValue = _lodash["default"].isArray(value) ? _lodash["default"].map(value, function (v, k) {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
            key: k,
            content: v
          });
        }) : value;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          collapsing: true,
          active: true
        }, getFieldLabel(fieldName)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, displayValue));
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        basic: true,
        className: "ui fluid form mb4"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        celled: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('username')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('firstName')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('lastName')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('email')), this.getCurrentUser().isRootUser ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('userRole')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('identityProviderName')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('projectId')), this.getCurrentUser().status === 'pending' && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('applyReason')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('status'))))), this.renderDetailViewButtons());
    }
  }, {
    key: "renderDetailViewButtons",
    value: function renderDetailViewButtons() {
      var _this3 = this;

      var makeButton = function makeButton(_ref4) {
        var _ref4$label = _ref4.label,
            label = _ref4$label === void 0 ? '' : _ref4$label,
            _ref4$color = _ref4.color,
            color = _ref4$color === void 0 ? 'blue' : _ref4$color,
            _ref4$floated = _ref4.floated,
            floated = _ref4$floated === void 0 ? 'left' : _ref4$floated,
            _ref4$disabled = _ref4.disabled,
            disabled = _ref4$disabled === void 0 ? false : _ref4$disabled,
            props = _objectWithoutProperties(_ref4, ["label", "color", "floated", "disabled"]);

        var attrs = {};
        if (color) attrs.color = color;
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, _extends({
          floated: floated,
          disabled: disabled,
          className: "ml2"
        }, attrs, props), label);
      };

      var currentUser = this.getCurrentUser();
      var cancelButton = makeButton({
        label: 'Cancel',
        floated: 'left',
        color: '',
        onClick: this.handleCancel,
        disabled: this.processing
      });
      var deleteButton = // TODO: deletion actions should be confirmed by user first
      this.view === 'detail' ? makeButton({
        label: 'Delete',
        floated: 'right',
        color: 'red',
        onClick: this.handleDeleteClick,
        disabled: currentUser.isRootUser || this.processing
      }) : '';
      var activeButton = this.props.user.status === 'pending' || this.props.user.status === 'inactive' ? makeButton({
        label: 'Activate User',
        floated: 'right',
        color: 'blue',
        onClick: function onClick() {
          return _this3.handleApproveDisapproveClick('active');
        },
        disabled: this.processing
      }) : '';
      var deactiveButton = this.props.user.status === 'active' || this.props.user.status === 'pending' ? makeButton({
        label: 'Deactivate User',
        floated: 'right',
        disabled: currentUser.isRootUser || this.processing,
        onClick: function onClick() {
          return _this3.handleApproveDisapproveClick('inactive');
        }
      }) : '';
      var editButton = currentUser.status === 'active' || currentUser.status === 'inactive' // do not show "edit" button for other status(es) such as "pending"
      ? makeButton({
        label: 'Edit',
        onClick: this.handleEditClick,
        floated: 'right',
        disabled: this.processing
      }) : '';
      return this.props.adminMode ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt4 mb4"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, null, cancelButton, deleteButton, deactiveButton, activeButton, editButton)) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt4 mb4"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, null, cancelButton, editButton));
    }
  }, {
    key: "renderEditView",
    value: function renderEditView() {
      var _this4 = this;

      var form = this.form;
      var firstNameField = form.$('firstName');
      var lastNameField = form.$('lastName');
      var emailField = form.$('email');
      var identityProviderNameField = form.$('identityProviderName');
      var userRoleField = form.$('userRole');
      var projectIdField = form.$('projectId');
      var statusField = form.$('status');
      var identityProviderOptions = this.getIdentityProviderOptions();
      var userRoleOptions = this.getUserRoleOptions();
      var projectIdOptions = this.getProjectOptions();
      var isInternalUser = this.userRolesStore.isInternalUser(userRoleField.value);
      var isInternalGuest = this.userRolesStore.isInternalGuest(userRoleField.value);
      var showProjectField = !_lodash["default"].isEmpty(projectIdOptions) && isInternalUser && !isInternalGuest;
      var isAdminMode = this.props.adminMode;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "p3 mb4"
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.handleCancel,
        onSuccess: this.handleFormSubmission,
        onError: this.handleFormError
      }, function (_ref5) {
        var processing = _ref5.processing,
            onCancel = _ref5.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: firstNameField,
          disabled: processing
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: lastNameField,
          disabled: processing
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: emailField,
          disabled: processing
        }), _this4.getCurrentUser().isRootUser ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isAdminMode && /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: identityProviderNameField,
          options: identityProviderOptions,
          selection: true,
          fluid: true,
          disabled: processing
        }), isAdminMode && /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: userRoleField,
          options: userRoleOptions,
          selection: true,
          fluid: true,
          disabled: processing
        }), isAdminMode && showProjectField && /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: projectIdField,
          options: projectIdOptions,
          multiple: true,
          selection: true,
          clearable: true,
          fluid: true,
          disabled: processing
        }), /*#__PURE__*/_react["default"].createElement(_YesNo["default"], {
          field: statusField,
          disabled: processing
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "mt3"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          color: "blue",
          icon: true,
          disabled: processing,
          className: "ml2",
          type: "submit"
        }, "Save"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          disabled: processing,
          onClick: onCancel
        }, "Cancel")));
      }));
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger() {
      var content = null;

      if (this.props.adminMode) {
        content = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          size: "mini",
          compact: true,
          color: "blue",
          onClick: this.handleOpen
        }, "Detail");
      } else {
        content = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, {
          onClick: this.handleOpen
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "user"
        }), " ", this.props.userStore.user.displayName);
      }

      return content;
    }
  }, {
    key: "getStores",
    value: function getStores() {
      return this.stores;
    }
  }, {
    key: "getIdentityProviderOptions",
    value: function getIdentityProviderOptions() {
      return (0, _UserFormUtils.toIdpOptions)(this.authenticationProviderConfigsStore.list);
    }
  }, {
    key: "getUserRoleOptions",
    value: function getUserRoleOptions() {
      return this.userRolesStore.dropdownOptions;
    }
  }, {
    key: "getProjectOptions",
    value: function getProjectOptions() {
      return this.projectsStore.dropdownOptions;
    }
  }, {
    key: "getCurrentUser",
    value: function getCurrentUser() {
      return this.props.user;
    }
  }, {
    key: "userStore",
    get: function get() {
      return this.props.userStore;
    }
  }, {
    key: "usersStore",
    get: function get() {
      return this.props.usersStore;
    }
  }, {
    key: "userRolesStore",
    get: function get() {
      return this.props.userRolesStore;
    }
  }, {
    key: "awsAccountsStore",
    get: function get() {
      return this.props.awsAccountsStore;
    }
  }, {
    key: "projectsStore",
    get: function get() {
      return this.props.projectsStore;
    }
  }, {
    key: "authenticationProviderConfigsStore",
    get: function get() {
      return this.props.authenticationProviderConfigsStore;
    }
  }]);

  return UpdateUser;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(UpdateUser, {
  modalOpen: _mobx.observable,
  view: _mobx.observable,
  processing: _mobx.observable,
  authenticationProviderConfigsStore: _mobx.computed,
  projectsStore: _mobx.computed,
  awsAccountsStore: _mobx.computed,
  userRolesStore: _mobx.computed,
  usersStore: _mobx.computed,
  userStore: _mobx.computed,
  handleOpen: _mobx.action,
  handleClose: _mobx.action,
  handleCancel: _mobx.action,
  handleEditClick: _mobx.action,
  handleDeleteClick: _mobx.action,
  handleApproveDisapproveClick: _mobx.action,
  handleFormSubmission: _mobx.action
});

var _default = (0, _mobxReact.inject)('authenticationProviderConfigsStore')((0, _mobxReact.observer)(UpdateUser));

exports["default"] = _default;
//# sourceMappingURL=UpdateUser.js.map