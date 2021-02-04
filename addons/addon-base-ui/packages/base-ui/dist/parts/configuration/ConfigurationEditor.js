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

var _Form = _interopRequireDefault(require("../helpers/fields/Form"));

var _InputEntriesRenderer = _interopRequireDefault(require("./InputEntriesRenderer"));

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

// expected props
// - model - an instance of the ConfigurationEditor model instance (via props)
// - onCancel (via props) is called after all the necessary clean up
var ConfigurationEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfigurationEditor, _React$Component);

  var _super = _createSuper(ConfigurationEditor);

  function ConfigurationEditor() {
    var _this;

    _classCallCheck(this, ConfigurationEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleCancel = function () {
      var onCancel = _this.props.onCancel || _lodash["default"].noop;

      var model = _this.getModel();

      model.cancel();
      return onCancel();
    };

    _this.handleNext = function (form) {
      var model = _this.getModel();

      model.next(form);
    };

    _this.handlePrevious = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var form = _this.getForm();

      var model = _this.getModel();

      model.previous(form);
    };

    _this.handleClear = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var form = _this.getForm();

      var model = _this.getModel();

      model.clearSectionConfigs();
      form.reset();
    };

    return _this;
  }

  _createClass(ConfigurationEditor, [{
    key: "getModel",
    value: function getModel() {
      return this.props.model;
    }
  }, {
    key: "getForm",
    value: function getForm() {
      var model = this.getModel();
      return model.form;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.getForm();
      var model = this.getModel();
      var hasPrevious = model.hasPrevious;
      var inputManifestSection = model.inputManifestSection || {};
      var inputEntries = inputManifestSection.children || [];
      var empty = inputEntries.length === 0;
      return /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.handleCancel,
        onSuccess: this.handleNext
      }, function (_ref) {
        var processing = _ref.processing,
            errors = _ref.errors,
            _onSubmit = _ref._onSubmit,
            onCancel = _ref.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !empty && /*#__PURE__*/_react["default"].createElement("div", {
          className: "mt3 clearfix p2"
        }, _this2.renderSectionTitles(errors), /*#__PURE__*/_react["default"].createElement(_InputEntriesRenderer["default"], {
          form: form,
          inputEntries: inputEntries,
          processing: processing
        })), empty && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
          padded: true,
          className: "mb3"
        }, "No configuration values are provided"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "mt0 clearfix"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          type: "submit",
          color: "blue",
          icon: true,
          disabled: processing,
          className: "ml2",
          labelPosition: "right"
        }, "Next", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "right arrow"
        })), hasPrevious && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          className: "ml2",
          icon: true,
          disabled: processing,
          labelPosition: "left",
          onClick: _this2.handlePrevious
        }, "Previous", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "left arrow"
        })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          disabled: processing,
          onClick: _this2.handleClear
        }, "Clear"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "left",
          disabled: processing,
          onClick: onCancel
        }, "Cancel")));
      });
    }
  }, {
    key: "renderSectionTitles",
    value: function renderSectionTitles(errors) {
      var model = this.getModel();
      var totalSections = model.totalSections;
      var currentSectionIndex = model.currentSectionIndex;
      var showSectionTitles = totalSections > 1;
      var sectionTitles = model.sectionsTitles;
      var hasError = errors.length > 0;
      if (!showSectionTitles) return null;
      if (totalSections < 3) return null; // only show the titles when we have 3 or more sections

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Group, {
        size: "mini",
        fluid: true
      }, _lodash["default"].times(totalSections, function (index) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step, {
          active: index === currentSectionIndex,
          completed: index < currentSectionIndex
        }, hasError && index === currentSectionIndex ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "times"
        }) : /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "setting"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Title, null, sectionTitles[index] || '')));
      }));
    }
  }]);

  return ConfigurationEditor;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ConfigurationEditor, {
  handleNext: _mobx.action,
  handlePrevious: _mobx.action,
  handleCancel: _mobx.action,
  handleClear: _mobx.action
});

var _default = (0, _mobxReact.observer)(ConfigurationEditor);

exports["default"] = _default;
//# sourceMappingURL=ConfigurationEditor.js.map