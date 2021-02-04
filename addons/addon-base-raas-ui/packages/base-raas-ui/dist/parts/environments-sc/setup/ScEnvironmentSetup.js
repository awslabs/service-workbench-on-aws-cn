"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _UserOnboarding = _interopRequireDefault(require("../../users/UserOnboarding"));

var _SelectEnvTypeStep = _interopRequireDefault(require("./SelectEnvTypeStep"));

var _ConfigureEnvTypeStep = _interopRequireDefault(require("./ConfigureEnvTypeStep"));

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

// expected props
// - onPrevious (via props)
// - onCompleted (via props) a function is called after a call to create an environment is performed
// - studyIds (via props) (optional) an array of the selected study ids
// - envTypeId (via props) (optional) id of the env type
// - envTypeImmutable (via props) (optional) flag indicating if env type is immutable and env type selection should be disallowed
// - currentStep (via props) an instance of the CurrentStep model
// - envTypesStore (via injection)
// - clientInformationStore (via injection)
var ScEnvironmentSetup = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentSetup, _React$Component);

  var _super = _createSuper(ScEnvironmentSetup);

  function ScEnvironmentSetup(props) {
    var _this;

    _classCallCheck(this, ScEnvironmentSetup);

    _this = _super.call(this, props);

    _this.setOnboarding = function (value) {
      _this.onboardingOpen = value;
    };

    _this.handleConfigureCredentials = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.setOnboarding(true);
    };

    _this.handleSelectEnvType = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(envTypeId) {
        var envTypesStore, configurationStore;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.selectedTypeId = envTypeId;
                envTypesStore = _this.envTypesStore;

                if (envTypesStore) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                // We start the loading of the configurations for the selected type
                configurationStore = _this.envTypesStore.getEnvTypeConfigsStore(envTypeId);
                _context.next = 7;
                return configurationStore.load();

              case 7:
                window.scrollTo(0, 0);
                (0, _mobx.runInAction)(function () {
                  _this.currentStep.setStep('selectEnvConfig');
                });

              case 9:
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

    _this.handlePrevious = function () {
      var currentStep = _this.currentStep;

      if (currentStep.step === 'selectEnvType' || _this.props.envTypeImmutable) {
        _this.props.onPrevious();
      } else {
        _this.currentStep.setStep('selectEnvType');
      }
    };

    _this.handleCompleted = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(environment) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.props.onCompleted(environment));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.stores = new _Stores["default"]([_this.envTypesStore, _this.clientInformationStore]);
      _this.selectedTypeId = props.envTypeId;
    });
    return _this;
  }

  _createClass(ScEnvironmentSetup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      (0, _utils.swallowError)(this.stores.load());
    }
  }, {
    key: "goto",
    value: function goto(pathname) {
      var _goto = (0, _routing.gotoFn)(this);

      _goto(pathname);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var store = this.envTypesStore;
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

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, content, " ", this.onboardingOpen && /*#__PURE__*/_react["default"].createElement(_UserOnboarding["default"], {
        onclose: function onclose() {
          return _this2.setOnboarding(false);
        }
      }));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var step = this.currentStep.step;
      var typeId = this.selectedTypeId;
      var studyIds = this.studyIds;
      var user = this.userStore.user;
      var hasProjects = user.hasProjects;
      var isExternalResearcher = user.isExternalResearcher;
      var canCreateWorkspace = user.capabilities.canCreateWorkspace;
      var hasCredentials = user.hasCredentials;
      var content = null;

      if (!canCreateWorkspace) {
        return this.renderEmpty();
      }

      if (!isExternalResearcher && !hasProjects) {
        return this.renderMissingProjects();
      } // Check if external and no credentials
      // TODO - service catalog (sc) workspaces don't support external researchers


      if (isExternalResearcher && !hasCredentials) {
        return this.renderMissingCredentials();
      }

      if (step === 'selectEnvType') {
        content = /*#__PURE__*/_react["default"].createElement(_SelectEnvTypeStep["default"], {
          onPrevious: this.handlePrevious,
          onNext: this.handleSelectEnvType
        });
      } else if (step === 'selectEnvConfig') {
        content = /*#__PURE__*/_react["default"].createElement(_ConfigureEnvTypeStep["default"], {
          envTypeId: typeId,
          studyIds: studyIds,
          onPrevious: this.handlePrevious,
          onCompleted: this.handleCompleted
        });
      }

      return content;
    }
  }, {
    key: "renderLoadingError",
    value: function renderLoadingError() {
      var store = this.envTypesStore;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
        error: store.error,
        className: "p0 mt2 mb3"
      }), this.renderButtons());
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server"
      }), "No workspace types", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "There are no workspace types to choose from. Your role might be restricted. Please contact your administrator."))), this.renderButtons());
    }
  }, {
    key: "renderMissingProjects",
    value: function renderMissingProjects() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "lock"
      }), "Missing association with projects", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "You currently do not have permissions to use any projects for the workspace. please contact your administrator."))), this.renderButtons());
    }
  }, {
    key: "renderMissingCredentials",
    value: function renderMissingCredentials() {
      // IMPORTANT: service catalog workspaces do not support external researchers. This code
      // is here to help make a decision if we keep it or remove it.
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "key"
      }), "No AWS credentials", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "To manage research workspaces, click Configure AWS Credentials.")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "orange",
        size: "medium",
        basic: true,
        onClick: this.handleConfigureCredentials,
        style: {
          maxWidth: '100%'
        }
      }, "Configure AWS Credentials"))), this.renderButtons());
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        icon: "right arrow",
        labelPosition: "right",
        className: "ml2",
        primary: true,
        content: "Next",
        disabled: true
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
    key: "userStore",
    get: function get() {
      return this.props.userStore;
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }, {
    key: "clientInformationStore",
    get: function get() {
      return this.props.clientInformationStore;
    }
  }, {
    key: "currentStep",
    get: function get() {
      return this.props.currentStep;
    }
  }, {
    key: "studyIds",
    get: function get() {
      return this.props.studyIds;
    }
  }]);

  return ScEnvironmentSetup;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentSetup, {
  handleSelectEnvType: _mobx.action,
  handlePrevious: _mobx.action,
  handleCompleted: _mobx.action,
  setOnboarding: _mobx.action,
  studyIds: _mobx.computed,
  userStore: _mobx.computed,
  envTypesStore: _mobx.computed,
  clientInformationStore: _mobx.computed,
  currentStep: _mobx.computed,
  selectedTypeId: _mobx.observable,
  onboardingOpen: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userStore', 'envTypesStore', 'clientInformationStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentSetup)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentSetup.js.map