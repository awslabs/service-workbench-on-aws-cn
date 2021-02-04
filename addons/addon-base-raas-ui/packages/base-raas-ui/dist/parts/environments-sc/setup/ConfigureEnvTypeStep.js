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

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _CreateInternalEnvForm = _interopRequireDefault(require("./CreateInternalEnvForm"));

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
// - onCompleted (via props) a function is called after a call to create a workspace is performed
// - envTypeId (via props)
// - studyIds (via props)
// - envTypesStore (via injection)
// - clientInformationStore (via injection)
// - userStore (via injection)
// - scEnvironmentsStore (via injection)
var ConfigureEnvTypeStep = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfigureEnvTypeStep, _React$Component);

  var _super = _createSuper(ConfigureEnvTypeStep);

  function ConfigureEnvTypeStep() {
    var _this;

    _classCallCheck(this, ConfigureEnvTypeStep);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handlePrevious = function () {
      if (_lodash["default"].isFunction(_this.props.onPrevious)) _this.props.onPrevious();
    };

    _this.handleCreate = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var studyIds, store, environment;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                studyIds = _this.studyIds || [];
                store = _this.scEnvironmentsStore;
                _context.next = 4;
                return store.createScEnvironment(_objectSpread({}, data, {
                  studyIds: studyIds
                }));

              case 4:
                environment = _context.sent;
                return _context.abrupt("return", _this.props.onCompleted(environment));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return _this;
  }

  _createClass(ConfigureEnvTypeStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      (0, _utils.swallowError)(this.envTypeConfigsStore.load());
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.envTypeConfigsStore;
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = this.renderLoadingError();
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          className: "mt2"
        });
      } else if ((0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else {
        content = this.renderContent();
      }

      return content;
    }
  }, {
    key: "renderLoadingError",
    value: function renderLoadingError() {
      var store = this.envTypeConfigsStore;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
        error: store.error,
        className: "p0 mt2 mb3"
      }), this.renderButtons());
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var envTypeId = this.envTypeId;
      var configurations = this.configurations;
      var title = this.envTypeTitle;
      var defaultCidr = this.defaultCidr;
      var isExternal = this.userStore.user.isExternalUser;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, !isExternal && /*#__PURE__*/_react["default"].createElement(_CreateInternalEnvForm["default"], {
        envTypeId: envTypeId,
        configurations: configurations,
        title: title,
        defaultCidr: defaultCidr,
        onPrevious: this.handlePrevious,
        onNext: this.handleCreate
      }), isExternal && this.renderExternalNotSupported());
    }
  }, {
    key: "renderExternalNotSupported",
    value: function renderExternalNotSupported() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server"
      }), "No support for external researchers", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "There are no workspace configurations to choose from. Your role is restricted. Please contact your administrator."))), this.renderButtons());
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      var title = this.envTypeTitle;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        textAlign: "center",
        className: "mt2"
      }, title), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server"
      }), "No workspace configurations", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "There are no workspace configurations to choose from. Your role might be restricted. Please contact your administrator."))), this.renderButtons());
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$nextDisabled = _ref2.nextDisabled,
          nextDisabled = _ref2$nextDisabled === void 0 ? true : _ref2$nextDisabled;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        className: "ml2",
        primary: true,
        content: "Create Research Workspace",
        disabled: nextDisabled
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        icon: "left arrow",
        labelPosition: "left",
        className: "ml2",
        content: "Previous",
        onClick: this.handlePrevious
      }));
    }
  }, {
    key: "envTypeId",
    get: function get() {
      return this.props.envTypeId;
    }
  }, {
    key: "envTypeTitle",
    get: function get() {
      return _lodash["default"].get(this.envTypesStore.getEnvType(this.envTypeId), 'name');
    }
  }, {
    key: "userStore",
    get: function get() {
      return this.props.userStore;
    }
  }, {
    key: "clientInformationStore",
    get: function get() {
      return this.props.clientInformationStore;
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }, {
    key: "scEnvironmentsStore",
    get: function get() {
      return this.props.scEnvironmentsStore;
    }
  }, {
    key: "envTypeConfigsStore",
    get: function get() {
      return this.envTypesStore.getEnvTypeConfigsStore(this.envTypeId);
    }
  }, {
    key: "configurations",
    get: function get() {
      return this.envTypeConfigsStore.list;
    }
  }, {
    key: "defaultCidr",
    get: function get() {
      if (_lodash["default"].isEmpty(this.clientInformationStore.ipAddress)) return '';
      return "".concat(this.clientInformationStore.ipAddress, "/32");
    }
  }, {
    key: "studyIds",
    get: function get() {
      return this.props.studyIds;
    }
  }]);

  return ConfigureEnvTypeStep;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ConfigureEnvTypeStep, {
  handlePrevious: _mobx.action,
  handleCreate: _mobx.action,
  userStore: _mobx.computed,
  envTypesStore: _mobx.computed,
  clientInformationStore: _mobx.computed,
  envTypeId: _mobx.computed,
  defaultCidr: _mobx.computed,
  envTypeTitle: _mobx.computed,
  scEnvironmentsStore: _mobx.computed,
  configurations: _mobx.computed,
  studyIds: _mobx.computed
});

var _default = (0, _mobxReact.inject)('userStore', 'envTypesStore', 'scEnvironmentsStore', 'clientInformationStore')((0, _mobxReact.observer)(ConfigureEnvTypeStep));

exports["default"] = _default;
//# sourceMappingURL=ConfigureEnvTypeStep.js.map