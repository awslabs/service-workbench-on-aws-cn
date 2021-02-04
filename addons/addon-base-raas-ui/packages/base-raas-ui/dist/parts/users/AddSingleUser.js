"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("@aws-ee/base-ui/dist//helpers/notification");

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _YesNo = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/YesNo"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _DropDown = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/DropDown"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _AddUserForm = require("../../models/forms/AddUserForm");

var _UserFormUtils = require("../../models/forms/UserFormUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

// expected props
// - userStore (via injection)
// - usersStore (via injection)
// - userRolesStore (via injection)
// - awsAccountsStore (via injection)
// - projectsStore (via injection)
// - authenticationProviderConfigsStore (via injection)
var AddSingleUser = /*#__PURE__*/function (_React$Component) {
  _inherits(AddSingleUser, _React$Component);

  var _super = _createSuper(AddSingleUser);

  function AddSingleUser(props) {
    var _this;

    _classCallCheck(this, AddSingleUser);

    _this = _super.call(this, props);

    _this.handleCancel = function () {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto('/users');
    };

    _this.handleFormSubmission = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var values, isInternalUser, isInternalGuest, projectId, idpOptionValue, identityProviderName, authenticationProviderId, _goto2;

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
                } // The values.identityProviderName is in JSON string format
                // containing authentication provider id as well as identity provider name
                // See "src/models/forms/UserFormUtils.js" for more details.


                idpOptionValue = (0, _UserFormUtils.toIdpFromValue)(values.identityProviderName);
                identityProviderName = idpOptionValue.idpName;
                authenticationProviderId = idpOptionValue.authNProviderId;
                _context.prev = 8;
                _context.next = 11;
                return _this.usersStore.addUser(_objectSpread({}, values, {
                  authenticationProviderId: authenticationProviderId,
                  identityProviderName: identityProviderName,
                  projectId: projectId
                }));

              case 11:
                form.clear();
                (0, _notification.displaySuccess)('Added user successfully');
                _goto2 = (0, _routing.gotoFn)(_assertThisInitialized(_this));

                _goto2('/users');

                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](8);
                (0, _notification.displayError)(_context.t0);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 17]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleFormError = function (_form, _errors) {// We don't need to do anything here
    };

    (0, _mobx.runInAction)(function () {
      _this.stores = new _Stores["default"]([_this.userStore, _this.usersStore, _this.userRolesStore, _this.awsAccountsStore, _this.projectsStore, _this.authenticationProviderConfigsStore]);
    });
    _this.form = (0, _AddUserForm.getAddUserForm)();
    _this.addUserFormFields = (0, _AddUserForm.getAddUserFormFields)();
    return _this;
  }

  _createClass(AddSingleUser, [{
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

      return content;
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var form = this.form;
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
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "p3"
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.handleCancel,
        onSuccess: this.handleFormSubmission,
        onError: this.handleFormError
      }, function (_ref2) {
        var processing = _ref2.processing,
            _onSubmit = _ref2._onSubmit,
            onCancel = _ref2.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: emailField,
          disabled: processing
        }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: identityProviderNameField,
          options: identityProviderOptions,
          selection: true,
          fluid: true,
          disabled: processing
        }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: userRoleField,
          options: userRoleOptions,
          selection: true,
          fluid: true,
          disabled: processing
        }), showProjectField && /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
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
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "mt3"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          color: "blue",
          icon: true,
          disabled: processing,
          className: "ml2",
          type: "submit"
        }, "Add User"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          disabled: processing,
          onClick: onCancel
        }, "Cancel")));
      }));
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
    } // Private methods

  }, {
    key: "getStores",
    value: function getStores() {
      return this.stores;
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

  return AddSingleUser;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(AddSingleUser, {
  userStore: _mobx.computed,
  usersStore: _mobx.computed,
  userRolesStore: _mobx.computed,
  awsAccountsStore: _mobx.computed,
  projectsStore: _mobx.computed,
  authenticationProviderConfigsStore: _mobx.computed
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore', 'userRolesStore', 'awsAccountsStore', 'projectsStore', 'authenticationProviderConfigsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AddSingleUser)));

exports["default"] = _default;
//# sourceMappingURL=AddSingleUser.js.map