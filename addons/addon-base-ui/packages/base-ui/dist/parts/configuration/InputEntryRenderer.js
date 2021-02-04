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

var _Input = _interopRequireDefault(require("../helpers/fields/Input"));

var _YesNo = _interopRequireDefault(require("../helpers/fields/YesNo"));

var _DropDown = _interopRequireDefault(require("../helpers/fields/DropDown"));

var _TextArea = _interopRequireDefault(require("../helpers/fields/TextArea"));

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
// - form (via props)
// - inputEntry (via props)
// - processing (via props) (default to false)
var InputEntryRenderer = /*#__PURE__*/function (_React$Component) {
  _inherits(InputEntryRenderer, _React$Component);

  var _super = _createSuper(InputEntryRenderer);

  function InputEntryRenderer() {
    _classCallCheck(this, InputEntryRenderer);

    return _super.apply(this, arguments);
  }

  _createClass(InputEntryRenderer, [{
    key: "getForm",
    value: function getForm() {
      return this.props.form;
    }
  }, {
    key: "getInputEntry",
    value: function getInputEntry() {
      return this.props.inputEntry;
    }
  }, {
    key: "getProcessing",
    value: function getProcessing() {
      return this.props.processing || false;
    }
  }, {
    key: "render",
    value: function render() {
      // entry is an object of a shape like:
      // { name: 'id',  type: 'string/yesNo,..', label, children: [ <optional> ], .. }
      var entry = this.getInputEntry();
      var field = this.getField();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderDivider(entry), field);
    }
  }, {
    key: "renderDivider",
    value: function renderDivider(entry) {
      if (entry.divider === undefined) return null;
      var divider = entry.divider;
      var hasIcon = !!divider.icon;
      if (_lodash["default"].isBoolean(entry.divider)) return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
        className: "mb3 mt0"
      });
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
        horizontal: true,
        className: "mb3 mt0"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h4",
        color: "grey"
      }, hasIcon && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: divider.icon,
        color: "grey"
      }), divider.title));
    }
  }, {
    key: "getField",
    value: function getField() {
      var processing = this.getProcessing();
      var form = this.getForm(); // entry is an object of a shape like:
      // { name: 'id',  type: 'string/yesNo,..', label, children: [ <optional> ], .. }

      var entry = this.getInputEntry();
      var field = form.$(entry.name);

      switch (entry.type) {
        case 'stringInput':
          return /*#__PURE__*/_react["default"].createElement(_Input["default"], {
            field: field,
            disabled: processing
          });

        case 'yesNoInput':
          return /*#__PURE__*/_react["default"].createElement(_YesNo["default"], {
            field: field,
            disabled: processing
          });

        case 'dropDownInput':
          return /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
            field: field,
            fluid: true,
            selection: true,
            disabled: processing
          });

        case 'textAreaInput':
          return /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
            field: field,
            disabled: processing
          });

        default:
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
    }
  }]);

  return InputEntryRenderer;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(InputEntryRenderer, {});

var _default = (0, _mobxReact.inject)()((0, _mobxReact.observer)(InputEntryRenderer));

exports["default"] = _default;
//# sourceMappingURL=InputEntryRenderer.js.map