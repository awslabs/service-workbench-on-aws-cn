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

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _DropDown = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/DropDown"));

var _SessionStore = require("@aws-ee/base-ui/dist/models/SessionStore");

var _CfnParamsForm = require("../../../../models/forms/CfnParamsForm");

var _BaseEnvTypeConfigStep = _interopRequireDefault(require("./BaseEnvTypeConfigStep"));

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

var InputParamsStep = /*#__PURE__*/function (_BaseEnvTypeConfigSte) {
  _inherits(InputParamsStep, _BaseEnvTypeConfigSte);

  var _super = _createSuper(InputParamsStep);

  function InputParamsStep(props) {
    var _this;

    _classCallCheck(this, InputParamsStep);

    _this = _super.call(this, props);

    _this.handleCfnParamsFormSubmit = function (cfnParamsForm) {
      var cfnParams = [];
      cfnParamsForm.each(function (field) {
        return cfnParams.push({
          key: field.key,
          value: field.value
        });
      }); // Set the params field on the form passed in via props

      var paramsField = _this.form.$('params');

      paramsField.value = JSON.stringify(cfnParams);

      _this.props.onSubmit(_this.form);
    };

    (0, _mobx.runInAction)(function () {
      var cfnParams = _lodash["default"].get(props.envType, 'params');

      var existingParamValues = _lodash["default"].get(props.envTypeConfig, 'params');

      var keyPrefix = _this.props.wizardTempStoreKeyPrefix;
      var key = "".concat(keyPrefix, "-InputParamsStep");

      var cfnParamsForm = _SessionStore.sessionStore.get(key);

      if (!cfnParamsForm) {
        // Create and save the cfn params form outside of the component (in session store)
        // to make sure the form values are not wiped out on unmount
        // without this if the user clicks next and then previous all entered values will be wiped
        cfnParamsForm = (0, _CfnParamsForm.getCfnParamsForm)(cfnParams, existingParamValues);

        _SessionStore.sessionStore.set(key, cfnParamsForm);
      }

      _this.cfnParamsForm = cfnParamsForm;
    });
    return _this;
  }

  _createClass(InputParamsStep, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // The cfnParamsForm below is different from "this.form".
      // cfnParamsForm is specifically for the CloudFormation params and the "this.form" is for the EnvTypeConfig.
      // When the inner form "cfnParamsForm" is submitted, the values from "cfnParamsForm" are read and the field named "params" of
      // the outer EnvTypeConfig form (i.e., "this.form") is set as JSON string
      // See "handleCfnParamsFormSubmit" method for details
      var cfnParamsForm = this.cfnParamsForm;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "mt3 p3"
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: cfnParamsForm,
        onCancel: this.props.onCancel,
        onSuccess: this.handleCfnParamsFormSubmit
      }, function (_ref) {
        var processing = _ref.processing,
            onCancel = _ref.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this2.renderFormFields({
          form: cfnParamsForm,
          processing: processing,
          onCancel: onCancel
        }), _this2.renderActionButtons({
          processing: processing,
          onCancel: onCancel
        }));
      }));
    }
  }, {
    key: "renderFormFields",
    value: function renderFormFields(_ref2) {
      var form = _ref2.form,
          processing = _ref2.processing;
      var configVarOptions = [];
      var envTypeConfigVars = this.props.envTypeConfigsStore.envTypeConfigVars;
      envTypeConfigVars.forEach(function (v) {
        configVarOptions.push({
          key: v.name,
          value: "${".concat(v.name, "}"),
          text: "${".concat(v.name, "}"),
          content: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
            as: "h5",
            content: v.name,
            subheader: v.desc
          })
        });
      });
      var fields = [];
      form.each(function (field) {
        return fields.push(field);
      });
      return _lodash["default"].map(fields, function (field) {
        // if custom literal value was entered instead of selecting from available config vars then field's value may not
        // be in the available options so adding an option for field.value (without this custom drop down values will not
        // pre-populate when editing or when navigating to the step again with "previous")
        var options = _lodash["default"].uniqBy([{
          key: field.key,
          value: field.value,
          text: field.value
        }].concat(configVarOptions), 'value');

        return /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          key: field.key,
          field: field,
          options: options,
          disabled: processing,
          search: true,
          selection: true,
          fluid: true,
          allowAdditions: true,
          clearable: true
        });
      });
    }
  }]);

  return InputParamsStep;
}(_BaseEnvTypeConfigStep["default"]);

(0, _mobx.decorate)(InputParamsStep, {
  handleCfnParamsFormSubmit: _mobx.action
});

var _default = (0, _mobxReact.observer)(InputParamsStep);

exports["default"] = _default;
//# sourceMappingURL=InputParamsStep.js.map