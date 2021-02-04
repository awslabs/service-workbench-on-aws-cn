"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

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

var BaseEnvTypeConfigStep = /*#__PURE__*/function (_React$Component) {
  _inherits(BaseEnvTypeConfigStep, _React$Component);

  var _super = _createSuper(BaseEnvTypeConfigStep);

  function BaseEnvTypeConfigStep(props) {
    var _this;

    _classCallCheck(this, BaseEnvTypeConfigStep);

    _this = _super.call(this, props);
    (0, _mobx.runInAction)(function () {
      _this.form = props.form;
      _this.wizard = props.wizard;
    });
    return _this;
  }

  _createClass(BaseEnvTypeConfigStep, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.props.form;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "mt3 p3"
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.props.onCancel,
        onSuccess: this.props.onSubmit
      }, function (_ref) {
        var processing = _ref.processing,
            onCancel = _ref.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this2.renderFormFields({
          form: form,
          processing: processing,
          onCancel: onCancel
        }), _this2.renderActionButtons({
          processing: processing,
          onCancel: onCancel
        }));
      }));
    }
  }, {
    key: "renderActionButtons",
    value: function renderActionButtons(_ref2) {
      var processing = _ref2.processing,
          onCancel = _ref2.onCancel;
      var isUpdating = this.isEditAction();
      var submitButtonTitle = isUpdating ? 'Save' : this.props.wizardModel.hasNext ? 'Next' : 'Add';
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        className: "ml2 mb2",
        primary: true,
        content: submitButtonTitle,
        disabled: processing,
        type: "submit",
        floated: "right"
      }), !isUpdating && this.props.wizardModel.hasPrevious && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        className: "ml2 mb2",
        primary: true,
        content: "Previous",
        disabled: processing,
        floated: "right",
        onClick: this.props.onPrevious
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "grey",
        disabled: processing,
        onClick: onCancel,
        floated: "left"
      }, "Cancel"));
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
    key: "getEnvTypeConfig",
    value: function getEnvTypeConfig() {
      return this.props.envTypeConfig;
    }
  }]);

  return BaseEnvTypeConfigStep;
}(_react["default"].Component);

var _default = BaseEnvTypeConfigStep;
exports["default"] = _default;
//# sourceMappingURL=BaseEnvTypeConfigStep.js.map