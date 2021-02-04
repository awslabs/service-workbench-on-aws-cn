"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _Header = _interopRequireDefault(require("./Header"));

var _Description = _interopRequireDefault(require("./Description"));

var _ErrorPointer = _interopRequireDefault(require("./ErrorPointer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// expected props
// - field (via props), this is the mobx form field object
// - className (via props)
//
// The following props are to support existing React Semantic UI props:
// - fluid (via props), default to true
// - disabled (via props), default to false
// - autoFocus (via props), default to false
// - icon (via props)
// - iconPosition (via props)
var Component = (0, _mobxReact.observer)(function (_ref) {
  var field = _ref.field,
      _ref$fluid = _ref.fluid,
      fluid = _ref$fluid === void 0 ? true : _ref$fluid,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'mb4' : _ref$className,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      _ref$showHeader = _ref.showHeader,
      showHeader = _ref$showHeader === void 0 ? true : _ref$showHeader,
      _ref$dataTestId = _ref.dataTestId,
      dataTestId = _ref$dataTestId === void 0 ? '' : _ref$dataTestId;
  var _field$error = field.error,
      error = _field$error === void 0 ? '' : _field$error;
  var hasError = !_lodash["default"].isEmpty(error); // IMPORTANT do NOT use field.hasError

  var isDisabled = field.disabled || disabled;
  var disabledClass = isDisabled ? 'disabled' : '';
  var errorClass = hasError ? 'error' : '';

  var attrs = _objectSpread({
    fluid: fluid,
    disabled: isDisabled,
    error: hasError
  }, _lodash["default"].omit(field.bind(), ['label']), {
    autoFocus: autoFocus,
    type: type,
    icon: icon,
    iconPosition: iconPosition
  });

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, errorClass, disabledClass)
  }, showHeader && /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    field: field
  }), /*#__PURE__*/_react["default"].createElement(_Description["default"], {
    field: field
  }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, _extends({
    "data-testid": dataTestId,
    className: "field"
  }, attrs)), /*#__PURE__*/_react["default"].createElement(_ErrorPointer["default"], {
    field: field
  }));
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=Input.js.map