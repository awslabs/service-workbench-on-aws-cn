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

var _semanticUiReact = require("semantic-ui-react");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _TextArea = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/TextArea"));

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _settings = require("@aws-ee/base-ui/dist/helpers/settings");

var _CreateExternalPlatformForm = require("../../../models/forms/CreateExternalPlatformForm");

var _SelectConfigurationCards = _interopRequireDefault(require("./SelectConfigurationCards"));

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
// - onPrevious (via props)
// - onNext (via props) a function is called with the form data
// - platformId (via props)
// - configurations (via props)
// - title (via props)
// - defaultCidr (via props)
// - clientInformationStore (via injection)
// - userStore (via injection)
// - usersStore (via injection)
var CreateExternalPlatformForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CreateExternalPlatformForm, _React$Component);

  var _super = _createSuper(CreateExternalPlatformForm);

  function CreateExternalPlatformForm(_props) {
    var _this;

    _classCallCheck(this, CreateExternalPlatformForm);

    _this = _super.call(this, _props);

    _this.handlePrevious = function () {
      if (_lodash["default"].isFunction(_this.props.onPrevious)) return _this.props.onPrevious();
    };

    _this.handleNext = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var data, configuration, askForCredentials, user, props, credentials, usersStore, adjustedData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _objectSpread({}, form.values(), {
                  params: {},
                  platformId: _this.platformId
                }); // We pick the mutable parameters and put them in params object

                configuration = _lodash["default"].find(_this.configurations, ['id', data.configurationId]);

                _lodash["default"].forEach(_lodash["default"].keys(configuration.mutableParams), function (key) {
                  if (!_lodash["default"].has(data, key)) return;
                  data.params[key] = data[key];
                  delete data[key];
                }); // Next, we need to encrypt the credentials if they are provided


                askForCredentials = _this.askForCredentials;
                user = _this.userStore.user;
                props = ['accessKeyId', 'secretAccessKey'];
                _context.prev = 6;

                if (!askForCredentials) {
                  _context.next = 15;
                  break;
                }

                credentials = _lodash["default"].pick(data, props);
                credentials.region = _settings.awsRegion;
                usersStore = _this.usersStore;
                _context.next = 13;
                return user.setEncryptedCreds(credentials, data.pin);

              case 13:
                _context.next = 15;
                return usersStore.updateUser(user);

              case 15:
                // We remove any access key information from data
                // but we keep pin in data, and the environment store will remove it
                adjustedData = _lodash["default"].omit(data, props);
                _context.next = 18;
                return _this.props.onNext(adjustedData);

              case 18:
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](6);
                (0, _notification.displayError)(_context.t0);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 20]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleForgotPin = function (event) {
      event.preventDefault();
      event.stopPropagation();
      var form = _this.form;

      var addRequired = function addRequired(field) {
        var rules = field.rules;
        if (_lodash["default"].startsWith('required')) return;
        field.set('rules', "required|".concat(rules));
      };

      addRequired(form.$('accessKeyId'));
      addRequired(form.$('secretAccessKey'));
      _this.askForCredentials = true;
    };

    (0, _mobx.runInAction)(function () {
      _this.askForCredentials = !_this.userStore.user.hasCredentials;
      _this.form = (0, _CreateExternalPlatformForm.getCreateExternalPlatformForm)({
        askForCredentials: _this.askForCredentials,
        cidr: _this.props.defaultCidr
      });
    });
    return _this;
  }

  _createClass(CreateExternalPlatformForm, [{
    key: "render",
    value: function render() {
      var title = this.props.title || '';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        textAlign: "center"
      }, title), this.renderForm());
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      var _this2 = this;

      var form = this.form;
      var askForCidr = !_lodash["default"].isUndefined(this.props.defaultCidr);
      var configurations = this.configurations;
      var askForCredentials = this.askForCredentials;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "p3 mb3"
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.handlePrevious,
        onSuccess: this.handleNext
      }, function (_ref2) {
        var processing = _ref2.processing,
            onCancel = _ref2.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('name')
        }), askForCidr && /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('cidr')
        }), /*#__PURE__*/_react["default"].createElement(_SelectConfigurationCards["default"], {
          configurations: configurations,
          formField: form.$('configurationId')
        }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
          field: form.$('description')
        }), askForCredentials && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('accessKeyId')
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('secretAccessKey'),
          type: "password"
        })), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('pin'),
          type: "password",
          icon: "lock",
          iconPosition: "left"
        }), !askForCredentials && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "left",
          disabled: processing,
          onClick: _this2.handleForgotPin
        }, "Forgot PIN?"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          className: "ml2",
          primary: true,
          content: "Create Research Workspace",
          disabled: processing,
          type: "submit"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          icon: "left arrow",
          labelPosition: "left",
          className: "ml2",
          content: "Previous",
          disabled: processing,
          onClick: onCancel
        }));
      }));
    }
  }, {
    key: "platformId",
    get: function get() {
      return this.props.platformId;
    }
  }, {
    key: "configurations",
    get: function get() {
      return this.props.configurations;
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
    } // eslint-disable-next-line consistent-return

  }]);

  return CreateExternalPlatformForm;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(CreateExternalPlatformForm, {
  form: _mobx.observable,
  platformId: _mobx.computed,
  askForCredentials: _mobx.observable,
  configurations: _mobx.computed,
  userStore: _mobx.computed,
  usersStore: _mobx.computed,
  handlePrevious: _mobx.action,
  handleForgotPin: _mobx.action
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore', 'clientInformationStore')((0, _mobxReact.observer)(CreateExternalPlatformForm));

exports["default"] = _default;
//# sourceMappingURL=CreateExternalPlatformForm.js.map