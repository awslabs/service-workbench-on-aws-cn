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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// expected props
// - field (via props), this is the mobx form field object
// - options (via props), an array of [ {text, value}, {text, value}, ...]
// - show (via props), can be 'headerOnly', 'buttonsOnly', 'both' (default to 'both')
// - className (via props)
// - onChange (via props), a call back function that receives (value, field)
//
// The following props are to support existing React Semantic UI props:
// - disabled (via props), default to false
// - size (via props), default to tiny
var Component = (0, _mobxReact.observer)(function (_ref) {
  var field = _ref.field,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? 'both' : _ref$show,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'mb4' : _ref$className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'tiny' : _ref$size,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      onChange = _ref.onChange;
  var id = field.id,
      value = field.value,
      sync = field.sync,
      _field$error = field.error,
      error = _field$error === void 0 ? '' : _field$error,
      _field$extra = field.extra,
      extra = _field$extra === void 0 ? {} : _field$extra;
  var mergedOptions = [].concat(_toConsumableArray(extra && extra.options || []), _toConsumableArray(options));
  var hasError = !_lodash["default"].isEmpty(error); // IMPORTANT do NOT use field.hasError

  var isDisabled = field.disabled || disabled;
  var disabledClass = isDisabled ? 'disabled' : '';
  var errorClass = hasError ? 'error' : '';

  var handleClick = function handleClick(toAssign) {
    return function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (isDisabled) return;
      sync(toAssign);
      field.validate({
        showErrors: true
      });
      if (onChange) onChange(toAssign, field);
    };
  };

  var headerOrHeaderAndButtons = show === 'both' || show === 'headerOnly';
  var headerOnly = show === 'headerOnly';
  var buttonsOnly = show === 'buttonsOnly';

  var buttons = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button.Group, {
    id: id,
    size: size
  }, _lodash["default"].map(mergedOptions, function (option) {
    return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
      key: option.value,
      onClick: handleClick(option.value),
      disabled: isDisabled,
      basic: option.value !== value,
      color: hasError ? 'red' : 'blue'
    }, option.text);
  }));

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, errorClass, disabledClass)
  }, headerOrHeaderAndButtons && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap mb1"
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    field: field,
    className: "mt1 mb0 mr2"
  }), !headerOnly && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", null, buttons), /*#__PURE__*/_react["default"].createElement(_ErrorPointer["default"], {
    field: field
  }))), /*#__PURE__*/_react["default"].createElement(_Description["default"], {
    field: field
  })), buttonsOnly && buttons);
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=SelectionButtons.js.map