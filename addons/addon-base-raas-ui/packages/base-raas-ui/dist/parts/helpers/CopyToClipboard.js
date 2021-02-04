"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// expected props
// - text (via props)
// - message (via props) (a message to display when done copying to clip board "optional")
// - size (via props) (the size of the copy icon)
// - icon (via props) (the name of the icon, default to 'copy outline')
// - className (via props)
var Component = (0, _mobxReact.observer)(function (_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'ml2 mt1' : _ref$className,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Copied to clipboard' : _ref$message,
      size = _ref.size,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'copy outline' : _ref$name;
  var iconAttrs = {
    name: name
  };
  if (size) iconAttrs.size = size;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
    content: "Copy",
    trigger: /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
      className: (0, _classnames["default"])(className),
      text: text,
      style: {
        cursor: 'pointer'
      },
      onCopy: function onCopy() {
        return (0, _notification.displaySuccess)(message, 'Done');
      }
    }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, iconAttrs))
  });
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=CopyToClipboard.js.map