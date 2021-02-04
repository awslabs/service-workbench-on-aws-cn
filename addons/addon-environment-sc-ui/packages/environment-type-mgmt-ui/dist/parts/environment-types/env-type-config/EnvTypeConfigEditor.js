"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _Wizard = require("@aws-ee/base-ui/dist/models/Wizard");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _SessionStore = require("@aws-ee/base-ui/dist/models/SessionStore");

var _EnvTypeConfigForm = require("../../../models/forms/EnvTypeConfigForm");

var _BasicInfoStep = _interopRequireDefault(require("./env-type-config-steps/BasicInfoStep"));

var _AccessControlStep = _interopRequireDefault(require("./env-type-config-steps/AccessControlStep"));

var _InputParamsStep = _interopRequireDefault(require("./env-type-config-steps/InputParamsStep"));

var _TagsStep = _interopRequireDefault(require("./env-type-config-steps/TagsStep"));

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

var steps = [{
  key: 'basic_information',
  title: 'Basic Information',
  desc: 'Enter basic information',
  isComplete: false,
  stepComponent: _BasicInfoStep["default"]
}, {
  key: 'access_control',
  title: 'Access Control',
  desc: 'Define who can access',
  isComplete: false,
  stepComponent: _AccessControlStep["default"]
}, {
  key: 'input_params',
  title: 'Input Parameters',
  desc: 'Provide AWS CloudFormation Inputs',
  isComplete: false,
  stepComponent: _InputParamsStep["default"]
}, {
  key: 'tags',
  title: 'Tags',
  desc: 'Specify Resource Tags',
  isComplete: false,
  stepComponent: _TagsStep["default"]
}];
var wizardTempStoreKeyPrefix = 'EnvTypeConfigEditor-TempStore';

function clearState() {
  _SessionStore.sessionStore.removeStartsWith(wizardTempStoreKeyPrefix);
}

var EnvTypeConfigEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvTypeConfigEditor, _React$Component);

  var _super = _createSuper(EnvTypeConfigEditor);

  function EnvTypeConfigEditor(props) {
    var _this;

    _classCallCheck(this, EnvTypeConfigEditor);

    _this = _super.call(this, props);

    _this.renderTitle = function () {
      var envTypConfig = _this.envTypeConfig;

      var isUpdating = _this.isEditAction();

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "settings",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, isUpdating ? 'Edit' : 'Add', " Configuration"), isUpdating && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
        className: "mt2"
      }, envTypConfig.name)));
    };

    _this.renderContent = function () {
      var isUpdating = _this.isEditAction();

      return (
        /*#__PURE__*/
        // Render as tabs when updating configuration,
        // Render as wizard when adding configuration
        _react["default"].createElement(_react["default"].Fragment, null, isUpdating ? _this.renderStepTabs() : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this.renderStepProgress(), _this.renderCurrentStep()))
      );
    };

    _this.renderStepTabs = function () {
      var stepPanes = _lodash["default"].map(_this.wizardModel.steps, function (step) {
        return {
          menuItem: step.title,
          render: function render() {
            return /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
              return _this.renderEnvTypeConfigStep(step.key);
            });
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

    _this.renderCurrentStep = function () {
      return _this.renderEnvTypeConfigStep(_this.wizardModel.currentStep.key);
    };

    _this.handlePreviousClick = function () {
      _this.wizardModel.previous();
    };

    _this.handleFormSubmission = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var existingEnvTypeConfig, isUpdating, _form$values, id, name, desc, estimatedCostInfo, allowRoleIds, denyRoleIds, paramsJsonStr, tagsJsonStr, existingParams, existingTags, params, updatedTags, fromNameValueToKeyValue, tags, envTypeConfig, savedEnvTypeConfig;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                existingEnvTypeConfig = _this.envTypeConfig;
                isUpdating = _this.isEditAction();
                _form$values = form.values(), id = _form$values.id, name = _form$values.name, desc = _form$values.desc, estimatedCostInfo = _form$values.estimatedCostInfo, allowRoleIds = _form$values.allowRoleIds, denyRoleIds = _form$values.denyRoleIds, paramsJsonStr = _form$values.params, tagsJsonStr = _form$values.tags;

                if (isUpdating) {
                  existingParams = existingEnvTypeConfig.params;
                  existingTags = existingEnvTypeConfig.tags;
                } // The params and tags fields are submitted as JSON string via the form


                params = !_lodash["default"].isEmpty(paramsJsonStr) ? JSON.parse(paramsJsonStr) : existingParams; // The updatedTags below has [{name,value}] form. Translate it to [{key,value}]

                updatedTags = JSON.parse(tagsJsonStr || '[]') || [];

                fromNameValueToKeyValue = function fromNameValueToKeyValue(nameValue) {
                  return {
                    key: nameValue.key || nameValue.name,
                    value: nameValue.value
                  };
                };

                tags = !_lodash["default"].isEmpty(tagsJsonStr) ? _lodash["default"].map(updatedTags, fromNameValueToKeyValue) : existingTags;
                envTypeConfig = _objectSpread({}, existingEnvTypeConfig || {}, {
                  id: id,
                  name: name,
                  desc: desc,
                  estimatedCostInfo: estimatedCostInfo,
                  allowRoleIds: allowRoleIds || [],
                  denyRoleIds: denyRoleIds || [],
                  params: params,
                  tags: tags
                });
                _context.prev = 9;

                if (!(!isUpdating && _this.wizardModel.hasNext)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", _this.wizardModel.next());

              case 12:
                if (!isUpdating) {
                  _context.next = 19;
                  break;
                }

                _context.next = 15;
                return _this.envTypeConfigsStore.updateEnvTypeConfig(envTypeConfig);

              case 15:
                savedEnvTypeConfig = _context.sent;
                (0, _notification.displaySuccess)("Successfully updated ".concat(envTypeConfig.name, " configuration"));
                _context.next = 22;
                break;

              case 19:
                _context.next = 21;
                return _this.envTypeConfigsStore.createEnvTypeConfig(envTypeConfig);

              case 21:
                savedEnvTypeConfig = _context.sent;

              case 22:
                clearState();

                _this.props.onEnvTypeConfigSaveComplete(savedEnvTypeConfig);

                return _context.abrupt("return", savedEnvTypeConfig);

              case 27:
                _context.prev = 27;
                _context.t0 = _context["catch"](9);
                (0, _notification.displayError)(_context.t0);

              case 30:
                return _context.abrupt("return", undefined);

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[9, 27]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.stores = new _Stores["default"]([_this.envTypeConfigsStore, _this.userRolesStore]);
      _this.form = (0, _EnvTypeConfigForm.getEnvTypeConfigForm)(props.envTypeConfig);
      _this.wizardModel = (0, _Wizard.createWizard)(_lodash["default"].map(steps, function (s) {
        return _lodash["default"].omit(s, 'stepComponent');
      }));
    });
    return _this;
  }

  _createClass(EnvTypeConfigEditor, [{
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

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml3 mt3 mr3 mb4"
      }, this.renderTitle(), content);
    }
  }, {
    key: "renderEnvTypeConfigStep",
    value: function renderEnvTypeConfigStep(stepKey) {
      var _this2 = this;

      var step = _lodash["default"].find(steps, {
        key: stepKey
      });

      var StepComponentClass = _lodash["default"].get(step, 'stepComponent');

      return /*#__PURE__*/_react["default"].createElement(StepComponentClass, {
        form: this.form,
        wizardModel: this.wizardModel,
        onCancel: function onCancel() {
          clearState();

          _this2.props.onCancel();
        },
        onSubmit: this.handleFormSubmission,
        envTypeConfig: this.envTypeConfig,
        envType: this.envType,
        envTypeConfigsStore: this.envTypeConfigsStore,
        onPrevious: this.handlePreviousClick // steps can store temporary information in session store with the following key prefix
        // see InputParamsStep as an example, it needs to create a different mobx form specifically for cfn params
        // the values entered for that form will wipe out on next/previous click as the component gets unmounted/mounted
        // to preserve those values outside of the step component the step component can save the info in session store
        // with this key prefix
        // This component (i.e., EnvTypeConfigEditor) will take care of clearing session keys with this prefix upon
        // completion or cancel
        ,
        wizardTempStoreKeyPrefix: wizardTempStoreKeyPrefix,
        action: this.getAction()
      });
    }
  }, {
    key: "isEditAction",
    value: function isEditAction() {
      return this.getAction() === 'edit';
    }
  }, {
    key: "getAction",
    value: function getAction() {
      return this.props.action;
    }
  }, {
    key: "envTypeConfigsStore",
    get: function get() {
      return this.props.envTypeConfigsStore;
    }
  }, {
    key: "userRolesStore",
    get: function get() {
      return this.props.userRolesStore;
    }
  }, {
    key: "envType",
    get: function get() {
      return this.props.envType;
    }
  }, {
    key: "envTypeConfig",
    get: function get() {
      return this.props.envTypeConfig;
    }
  }]);

  return EnvTypeConfigEditor;
}(_react["default"].Component);

(0, _mobx.decorate)(EnvTypeConfigEditor, {
  userRolesStore: _mobx.computed,
  envTypeConfigsStore: _mobx.computed,
  envTypeConfig: _mobx.computed,
  envType: _mobx.computed,
  handleFormSubmission: _mobx.action,
  stores: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userRolesStore')((0, _mobxReact.observer)(EnvTypeConfigEditor));

exports["default"] = _default;
//# sourceMappingURL=EnvTypeConfigEditor.js.map