"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _TextArea = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/TextArea"));

var _AddUserApplicationForm = require("../models/forms/AddUserApplicationForm");

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

var UserApplication = /*#__PURE__*/function (_React$Component) {
  _inherits(UserApplication, _React$Component);

  var _super = _createSuper(UserApplication);

  function UserApplication(props) {
    var _this;

    _classCallCheck(this, UserApplication);

    _this = _super.call(this, props);
    _this.handleLogout = (0, _mobx.action)( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.logoutProcessing = true;
                event.preventDefault();
                event.stopPropagation();
                _context.prev = 3;
                _context.next = 6;
                return _this.props.authentication.logout();

              case 6:
                (0, _mobx.runInAction)(function () {
                  _this.logoutProcessing = false;
                });
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                (0, _notification.displayError)(_context.t0);
                (0, _mobx.runInAction)(function () {
                  _this.logoutProcessing = false;
                });

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

    _this.handleSubmit = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(form) {
        var user, updatedUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                user = form.values();
                _this.currentUser.firstName = user.firstName;
                _this.currentUser.lastName = user.lastName;
                _this.currentUser.applyReason = user.applyReason;
                _this.currentUser.status = 'pending';
                _context2.next = 8;
                return _this.getStore().updateUserApplication(_this.currentUser);

              case 8:
                updatedUser = _context2.sent;
                (0, _mobx.runInAction)(function () {
                  _this.currentUser.status = updatedUser.status;
                });
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                (0, _notification.displayError)(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {};
    (0, _mobx.runInAction)(function () {
      _this.logoutProcessing = false;
      _this.currentUser = props.userStore.cloneUser;
    });
    _this.form = (0, _AddUserApplicationForm.getAddUserApplicationForm)();
    _this.form.$('email').value = _this.currentUser.username;
    return _this;
  }

  _createClass(UserApplication, [{
    key: "render",
    value: function render() {
      var content = null;

      if (this.currentUser.status === 'pending') {
        content = this.renderFormSubmittedMessage();
      } else {
        content = this.renderAddUserPage();
      }

      return content;
    }
  }, {
    key: "renderAddUserPage",
    value: function renderAddUserPage() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "pt4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h2",
        icon: true,
        textAlign: "center",
        className: "mt3",
        color: "grey"
      }, "Research Portal Application"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 ml3 mr3 animated fadeIn"
      }, this.renderAddUserForm())));
    }
  }, {
    key: "renderFormSubmittedMessage",
    value: function renderFormSubmittedMessage() {
      var processing = this.logoutProcessing;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        text: true,
        className: "pt4"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        icon: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "We have received your application"), "You will not have access to the portal until an administrator reviews and approves your application.", /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2"
      }, "We recommend you logout and login when you have received access.", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        color: "blue",
        icon: true,
        disabled: processing,
        className: "ml2",
        onClick: this.handleLogout
      }, "Logout")))));
    }
  }, {
    key: "renderAddUserForm",
    value: function renderAddUserForm() {
      var form = this.form;
      return /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onSuccess: this.handleSubmit
      }, function (_ref3) {
        var processing = _ref3.processing;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('email'),
          disabled: true,
          className: "mt3 mb4"
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('firstName'),
          className: "mt3 mb4"
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('lastName')
        }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
          field: form.$('applyReason')
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          className: "ml2 mb3",
          floated: "right",
          color: "blue",
          icon: true,
          disabled: processing,
          type: "submit"
        }, "Submit Application"));
      });
    }
  }, {
    key: "getStore",
    value: function getStore() {
      return this.props.usersStore;
    }
  }]);

  return UserApplication;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(UserApplication, {
  logoutProcessing: _mobx.observable,
  currentUser: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore', 'userRolesStore', 'awsAccountsStore', 'indexesStore', 'authentication')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(UserApplication)));

exports["default"] = _default;
//# sourceMappingURL=UserApplication.js.map