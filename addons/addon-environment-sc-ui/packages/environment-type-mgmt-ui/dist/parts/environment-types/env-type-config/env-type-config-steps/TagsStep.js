"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _NameValuesEditor = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/NameValuesEditor"));

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

var TagsStep = /*#__PURE__*/function (_BaseEnvTypeConfigSte) {
  _inherits(TagsStep, _BaseEnvTypeConfigSte);

  var _super = _createSuper(TagsStep);

  function TagsStep(props) {
    var _this;

    _classCallCheck(this, TagsStep);

    _this = _super.call(this, props);

    _this.disableActionButtons = function () {
      _this.shouldEnableActionButtons = false;
    };

    _this.enableActionButtons = function () {
      _this.shouldEnableActionButtons = true;
    };

    (0, _mobx.runInAction)(function () {
      _this.processing = false;
      _this.shouldEnableActionButtons = true;
    });
    return _this;
  }

  _createClass(TagsStep, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.form;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer, {
        active: this.processing,
        inverted: true
      }), this.renderFormFields({
        form: form
      }), /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.props.onCancel,
        onSuccess: this.props.onSubmit
      }, function (_ref) {
        var processing = _ref.processing,
            onCancel = _ref.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this2.renderActionButtons({
          processing: processing,
          onCancel: onCancel
        }));
      }));
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "renderFormFields",
    value: function renderFormFields(_ref2) {
      var form = _ref2.form;
      var tagsField = form.$('tags');
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml1 mb2"
      }, "Click plus (+) button below to add resource tags. These tags will be applied to the environment resources that are launched using this configuration. Additionally, some standard tags for cost allocation will be automatically applied even if you do not configure any other resource tags here."), /*#__PURE__*/_react["default"].createElement(_NameValuesEditor["default"], {
        field: tagsField,
        onEnterEditMode: this.disableActionButtons,
        onExitEditMode: this.enableActionButtons,
        emptyRenderer: function emptyRenderer() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
            key: "empty-row",
            textAlign: "center"
          }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
            colSpan: 3
          }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
            icon: true,
            className: "color-grey"
          }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
            name: "tags"
          }), "No resource tags are added yet")));
        }
      }));
    }
  }, {
    key: "renderActionButtons",
    value: function renderActionButtons(_ref3) {
      var _this3 = this;

      var processing = _ref3.processing,
          onCancel = _ref3.onCancel;
      var isUpdating = this.isEditAction();
      var submitButtonTitle = isUpdating ? 'Save' : this.props.wizardModel.hasNext ? 'Next' : 'Add';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        onClick: (0, _mobx.action)(function () {
          _this3.processing = true;
        }),
        className: "ml2 mb3",
        primary: true,
        content: submitButtonTitle,
        disabled: processing || !this.shouldEnableActionButtons,
        type: "submit",
        floated: "right"
      }), !isUpdating && this.props.wizardModel.hasPrevious && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        className: "ml2 mb3",
        primary: true,
        content: "Previous",
        disabled: processing || !this.shouldEnableActionButtons,
        floated: "right",
        onClick: this.props.onPrevious
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "grey",
        disabled: processing || !this.shouldEnableActionButtons,
        onClick: onCancel,
        floated: "left"
      }, "Cancel"));
    }
  }]);

  return TagsStep;
}(_BaseEnvTypeConfigStep["default"]);

(0, _mobx.decorate)(TagsStep, {
  disableActionButtons: _mobx.action,
  enableActionButtons: _mobx.action,
  processing: _mobx.observable,
  shouldEnableActionButtons: _mobx.observable
});

var _default = (0, _mobxReact.observer)(TagsStep);

exports["default"] = _default;
//# sourceMappingURL=TagsStep.js.map