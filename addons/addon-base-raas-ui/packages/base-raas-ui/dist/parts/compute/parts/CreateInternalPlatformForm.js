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

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _DropDown = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/DropDown"));

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _TextArea = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/TextArea"));

var _CreateInternalPlatformForm = require("../../../models/forms/CreateInternalPlatformForm");

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
var CreateInternalPlatformForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CreateInternalPlatformForm, _React$Component);

  var _super = _createSuper(CreateInternalPlatformForm);

  function CreateInternalPlatformForm(props) {
    var _this;

    _classCallCheck(this, CreateInternalPlatformForm);

    _this = _super.call(this, props);

    _this.handlePrevious = function () {
      if (_lodash["default"].isFunction(_this.props.onPrevious)) return _this.props.onPrevious();
    };

    _this.handleNext = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var data, configuration;
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
                });

                _context.prev = 3;
                _context.next = 6;
                return _this.props.onNext(data);

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                (0, _notification.displayError)(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.form = (0, _CreateInternalPlatformForm.getCreateInternalPlatformForm)({
        projectIdOptions: _this.projectIdOptions,
        cidr: _this.props.defaultCidr
      });
    });
    return _this;
  }

  _createClass(CreateInternalPlatformForm, [{
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
      var form = this.form;
      var askForCidr = !_lodash["default"].isUndefined(this.props.defaultCidr);
      var configurations = this.configurations;
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
        }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: form.$('projectId'),
          fluid: true,
          selection: true
        }), /*#__PURE__*/_react["default"].createElement(_SelectConfigurationCards["default"], {
          configurations: configurations,
          formField: form.$('configurationId')
        }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
          field: form.$('description')
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
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
    key: "projectIdOptions",
    get: function get() {
      var store = this.userStore;
      return store.projectIdDropdown;
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
    } // eslint-disable-next-line consistent-return

  }]);

  return CreateInternalPlatformForm;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(CreateInternalPlatformForm, {
  form: _mobx.observable,
  platformId: _mobx.computed,
  configurations: _mobx.computed,
  userStore: _mobx.computed,
  projectIdOptions: _mobx.computed,
  handlePrevious: _mobx.action
});

var _default = (0, _mobxReact.inject)('userStore', 'clientInformationStore')((0, _mobxReact.observer)(CreateInternalPlatformForm));

exports["default"] = _default;
//# sourceMappingURL=CreateInternalPlatformForm.js.map