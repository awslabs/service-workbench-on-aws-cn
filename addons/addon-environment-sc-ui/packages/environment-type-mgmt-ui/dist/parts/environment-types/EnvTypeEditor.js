"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _Wizard = require("@aws-ee/base-ui/dist/models/Wizard");

var _BasicInfoStep = _interopRequireDefault(require("./env-type-editor-steps/BasicInfoStep"));

var _ConfigStep = _interopRequireDefault(require("./env-type-editor-steps/ConfigStep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

// This component is used with the TabPane to replace the default Segment wrapper since
// we don't want to display the border.
function TabPaneWrapper(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.children);
}

var EnvTypeEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvTypeEditor, _React$Component);

  var _super = _createSuper(EnvTypeEditor);

  function EnvTypeEditor(props) {
    var _this;

    _classCallCheck(this, EnvTypeEditor);

    _this = _super.call(this, props);

    _this.renderTitle = function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "computer",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, _this.isEditAction() ? 'Edit' : 'Import', " Workspace Type"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
        className: "mt2"
      }, _lodash["default"].get(_this.envType, 'name'))));
    };

    _this.renderContent = function () {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this.renderTitle(), // When importing new env type, render the wizard as steps with linear flow
      // When updating existing env type, render the wizard steps as tabs to allow random access
      _this.isImportAction() ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this.renderStepProgress(), _this.renderCurrentStep()) : _this.renderStepTabs());
    };

    _this.renderStepProgress = function () {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Group, {
        ordered: true,
        className: "container"
      }, _lodash["default"].map(_this.wizardModel.steps, function (step) {
        var stepAttribs = {
          key: step.key,
          completed: step.isComplete,
          active: _this.wizardModel.isStepActive(step.key)
        };
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step, stepAttribs, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Title, null, step.title), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Description, null, step.desc)));
      }));
    };

    _this.renderStepTabs = function () {
      var stepPanes = _lodash["default"].map(_this.wizardModel.steps, function (step) {
        return {
          menuItem: step.title,
          render: function render() {
            return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
              attached: false,
              key: step.key,
              as: TabPaneWrapper
            }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
              return _this.renderEnvTypeStep(step.key);
            })) // <Observer>{() => this.renderEnvTypeStep(step.key)}</Observer>
            ;
          }
        };
      });

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab, {
        className: "mt3",
        menu: {
          secondary: true,
          pointing: true
        },
        renderActiveOnly: true,
        panes: stepPanes
      });
    };

    _this.renderCurrentStep = function () {
      return _this.renderEnvTypeStep(_this.wizardModel.currentStep.key);
    };

    _this.handleCancel = function () {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto("/workspace-types-management");
    };

    _this.handleDone = function () {
      _this.handleCancel();
    };

    (0, _mobx.runInAction)(function () {
      _this.stores = new _Stores["default"]([_this.envTypeCandidatesStore, _this.envTypesStore]);
      _this.wizardModel = (0, _Wizard.createWizard)([{
        key: 'basic_information',
        title: 'Basic Information',
        desc: 'Enter basic information about the Environment Type',
        isComplete: false
      }, {
        key: 'configurations',
        title: 'Configurations',
        desc: 'Define configurations with predefined set of AWS CloudFormation Input Parameter values',
        isComplete: false
      }]);
    });
    return _this;
  }

  _createClass(EnvTypeEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.stores.load());
    }
  }, {
    key: "render",
    value: function render() {
      var stores = this.stores;
      var content = null;

      if (stores.hasError) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: stores.error,
          className: "p0 mb3"
        });
      } else if ((0, _BaseStore.isStoreLoading)(stores)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else if ((0, _BaseStore.isStoreReady)(stores)) {
        content = this.renderContent();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 mb4"
      }, content);
    }
  }, {
    key: "renderEnvTypeStep",
    value: function renderEnvTypeStep(stepKey) {
      switch (stepKey) {
        case 'basic_information':
          return /*#__PURE__*/_react["default"].createElement(_BasicInfoStep["default"], {
            envTypesStore: this.envTypesStore,
            envType: this.envType,
            wizardModel: this.wizardModel,
            workspaceTypeAction: this.getAction(),
            onCancel: this.handleCancel,
            onEnvTypeSaveComplete: this.handleDone
          });

        case 'configurations':
          return /*#__PURE__*/_react["default"].createElement(_ConfigStep["default"], {
            envType: this.envType,
            envTypeConfigsStore: this.getEnvTypeConfigsStore(),
            wizardModel: this.wizardModel,
            workspaceTypeAction: this.getAction(),
            onCancel: this.handleCancel,
            onEnvTypeSaveComplete: this.handleDone
          });

        default:
          return undefined;
      }
    }
  }, {
    key: "isEditAction",
    value: function isEditAction() {
      return this.getAction() === 'edit';
    }
  }, {
    key: "isImportAction",
    value: function isImportAction() {
      return this.getAction() === 'import';
    }
  }, {
    key: "getEnvTypeConfigsStore",
    value: function getEnvTypeConfigsStore() {
      return this.envTypesStore.getEnvTypeConfigsStore(this.getEnvTypeId());
    }
  }, {
    key: "getEnvTypeId",
    value: function getEnvTypeId() {
      return decodeURIComponent((this.props.match.params || {}).id);
    }
  }, {
    key: "getAction",
    value: function getAction() {
      return decodeURIComponent((this.props.match.params || {}).action);
    }
  }, {
    key: "envType",
    get: function get() {
      var id = this.getEnvTypeId(); // env type

      var envType = this.envTypesStore.getEnvType(id);

      if (!envType && this.isImportAction()) {
        // Importing env type candidate as new env type, the envType may not exist yet in that case (if this is the first step in the wizard)
        // Returning env type candidate in that case containing subset of env type information
        var envTypeCandidate = this.envTypeCandidatesStore.getEnvTypeCandidate(id);
        return envTypeCandidate;
      }

      return envType;
    }
  }, {
    key: "envTypeCandidatesStore",
    get: function get() {
      return this.props.envTypeCandidatesStore;
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }]);

  return EnvTypeEditor;
}(_react["default"].Component);

(0, _mobx.decorate)(EnvTypeEditor, {
  envTypesStore: _mobx.computed,
  envType: _mobx.computed,
  envTypeCandidatesStore: _mobx.computed,
  stores: _mobx.observable,
  steps: _mobx.observable,
  currentStepNo: _mobx.observable
});

var _default = (0, _mobxReact.inject)('envTypesStore', 'envTypeCandidatesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvTypeEditor)));

exports["default"] = _default;
//# sourceMappingURL=EnvTypeEditor.js.map