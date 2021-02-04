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

var _CreateInternalPlatformForm = _interopRequireDefault(require("./parts/CreateInternalPlatformForm"));

var _CreateExternalPlatformForm = _interopRequireDefault(require("./parts/CreateExternalPlatformForm"));

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
// - platformId (via props)
// - studyIds (via props)
// - computePlatformsStore (via injection)
// - clientInformationStore (via injection)
// - userStore (via injection)
// - environmentsStore (via injection)
var ConfigureComputePlatformStep = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfigureComputePlatformStep, _React$Component);

  var _super = _createSuper(ConfigureComputePlatformStep);

  function ConfigureComputePlatformStep() {
    var _this;

    _classCallCheck(this, ConfigureComputePlatformStep);

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
                store = _this.environmentsStore;
                _context.next = 4;
                return store.createEnvironment(_objectSpread({}, data, {
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

  _createClass(ConfigureComputePlatformStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      // Note: we assume that whatever component that is including this component, has
      // already loaded and verified that the computePlatformsStore has no errors
      var configurations = this.configurations;
      var content = null;

      if (_lodash["default"].isEmpty(configurations)) {
        content = this.renderEmpty();
      } else {
        content = this.renderContent();
      }

      return content;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var platformId = this.platformId;
      var configurations = this.configurations;
      var title = this.platformTitle;
      var defaultCidr = this.defaultCidr;
      var isExternal = this.userStore.user.isExternalUser;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, !isExternal && /*#__PURE__*/_react["default"].createElement(_CreateInternalPlatformForm["default"], {
        platformId: platformId,
        configurations: configurations,
        title: title,
        defaultCidr: defaultCidr,
        onPrevious: this.handlePrevious,
        onNext: this.handleCreate
      }), isExternal && /*#__PURE__*/_react["default"].createElement(_CreateExternalPlatformForm["default"], {
        platformId: platformId,
        configurations: configurations,
        title: title,
        defaultCidr: defaultCidr,
        onPrevious: this.handlePrevious,
        onNext: this.handleCreate
      }));
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      var title = this.platformTitle;
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
      }), "No compute platform configurations", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "There are no compute platform configurations to choose from. Your role might be restricted. Please contact your administrator."))), this.renderButtons());
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
    key: "platformId",
    get: function get() {
      return this.props.platformId;
    }
  }, {
    key: "platformTitle",
    get: function get() {
      return _lodash["default"].get(this.computePlatformsStore.getComputePlatform(this.platformId), 'title');
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
    key: "computePlatformsStore",
    get: function get() {
      return this.props.computePlatformsStore;
    }
  }, {
    key: "environmentsStore",
    get: function get() {
      return this.props.environmentsStore;
    }
  }, {
    key: "configurations",
    get: function get() {
      var platform = this.computePlatformsStore.getComputePlatform(this.platformId);
      if (!platform) return [];
      return platform.configurationsList;
    }
  }, {
    key: "defaultCidr",
    get: function get() {
      // We pick the first one
      var value = _lodash["default"].get(_lodash["default"].first(this.configurations), 'defaultCidr');

      if (_lodash["default"].isUndefined(value)) return undefined; // This means that cidr should not be treated as an input

      if (!_lodash["default"].isEmpty(value)) return value;
      if (_lodash["default"].isEmpty(this.clientInformationStore.ipAddress)) return '';
      return "".concat(this.clientInformationStore.ipAddress, "/32");
    }
  }, {
    key: "studyIds",
    get: function get() {
      return this.props.studyIds;
    }
  }]);

  return ConfigureComputePlatformStep;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ConfigureComputePlatformStep, {
  handlePrevious: _mobx.action,
  handleCreate: _mobx.action,
  userStore: _mobx.computed,
  computePlatformsStore: _mobx.computed,
  clientInformationStore: _mobx.computed,
  platformId: _mobx.computed,
  defaultCidr: _mobx.computed,
  platformTitle: _mobx.computed,
  environmentsStore: _mobx.computed,
  studyIds: _mobx.computed
});

var _default = (0, _mobxReact.inject)('userStore', 'computePlatformsStore', 'clientInformationStore', 'environmentsStore')((0, _mobxReact.observer)(ConfigureComputePlatformStep));

exports["default"] = _default;
//# sourceMappingURL=ConfigureComputePlatformStep.js.map