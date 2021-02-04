"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _TextArea = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/TextArea"));

var _UpdateRegisteredAccountForm = require("../../models/forms/UpdateRegisteredAccountForm");

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
// - account (via prop)
// - dataSourceAccountsStore (via injection)
var DataSourceAccountInfo = /*#__PURE__*/function (_React$Component) {
  _inherits(DataSourceAccountInfo, _React$Component);

  var _super = _createSuper(DataSourceAccountInfo);

  function DataSourceAccountInfo(props) {
    var _this;

    _classCallCheck(this, DataSourceAccountInfo);

    _this = _super.call(this, props);

    _this.handleCancel = function () {
      _this.form.reset();
    };

    _this.handleSave = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var account, accountsStore, formData, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                account = _this.account;
                accountsStore = _this.accountsStore;
                formData = form.values();
                data = _objectSpread({}, formData, {
                  id: account.id,
                  rev: account.rev
                });
                _context.prev = 4;
                _context.next = 7;
                return accountsStore.updateAccount(data);

              case 7:
                (0, _mobx.runInAction)(function () {
                  _this.form = (0, _UpdateRegisteredAccountForm.getAccountForm)(data);
                });
                (0, _notification.displaySuccess)('Account information updated successfully');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                (0, _notification.displayError)(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.form = (0, _UpdateRegisteredAccountForm.getAccountForm)(props.account);
    });
    return _this;
  }

  _createClass(DataSourceAccountInfo, [{
    key: "getFields",
    value: function getFields(names, container) {
      var form = container || this.form;
      return _lodash["default"].map(names, function (name) {
        return form.$(name);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var form = this.form;
      var isDirty = form.isDirty;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animated fadeIn mb3 mt3"
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.handleCancel,
        onSuccess: this.handleSave
      }, function (_ref2) {
        var processing = _ref2.processing,
            onCancel = _ref2.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('name'),
          className: "mb3"
        }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
          field: form.$('contactInfo'),
          className: "mb3"
        }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
          field: form.$('description'),
          className: "mb3"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          className: "ml2",
          primary: true,
          content: "Save",
          disabled: processing || !isDirty,
          type: "submit"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          className: "ml2",
          content: "Reset",
          disabled: processing || !isDirty,
          onClick: onCancel
        }));
      }));
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

  return DataSourceAccountInfo;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(DataSourceAccountInfo, {
  accountsStore: _mobx.computed,
  account: _mobx.computed,
  form: _mobx.observable,
  handleCancel: _mobx.action
});

var _default = (0, _mobxReact.inject)('dataSourceAccountsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(DataSourceAccountInfo)));

exports["default"] = _default;
//# sourceMappingURL=DataSourceAccountInfo.js.map