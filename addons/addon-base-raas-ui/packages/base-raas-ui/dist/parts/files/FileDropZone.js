"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A reusable file input component.
 * Motivation: <input type="file" /> components are stateful and behave unexpectedly
 * when attempting to reuse them to upload multiple files.
 */
var ReusableFileInput = _react["default"].forwardRef(function (_ref, ref) {
  var _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["onChange"]);

  var _React$useState = _react["default"].useState((0, _v["default"])()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputKey = _React$useState2[0],
      setInputKey = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    key: inputKey,
    ref: ref,
    type: "file",
    onChange: function onChange(event) {
      _onChange(event);

      setInputKey((0, _v["default"])());
    }
  }, props));
});

var FileDropZone = /*#__PURE__*/function (_React$Component) {
  _inherits(FileDropZone, _React$Component);

  var _super = _createSuper(FileDropZone);

  function FileDropZone(props) {
    var _this;

    _classCallCheck(this, FileDropZone);

    _this = _super.call(this, props);
    (0, _mobx.runInAction)(function () {
      _this.highlighted = false;
    });
    return _this;
  }

  _createClass(FileDropZone, [{
    key: "setHighlight",
    value: function setHighlight(isHighlighted) {
      var _this2 = this;

      (0, _mobx.runInAction)(function () {
        _this2.highlighted = isHighlighted;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var fileInputRef = _react["default"].createRef();

      var enabled = this.props.state === 'PENDING';
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        tertiary: this.highlighted,
        placeholder: true,
        onDragEnter: function onDragEnter(event) {
          if (enabled) {
            if (event.dataTransfer.types.includes('Files')) {
              event.preventDefault();

              _this3.setHighlight(true);
            }
          }
        },
        onDragOver: function onDragOver(event) {
          if (enabled) {
            if (event.dataTransfer.types.includes('Files')) {
              event.preventDefault();

              _this3.setHighlight(true);
            }
          }
        },
        onDragLeave: function onDragLeave() {
          _this3.setHighlight(false);
        },
        onDragEnd: function onDragEnd() {
          _this3.setHighlight(false);
        },
        onDrop: function onDrop(event) {
          if (enabled) {
            if (event.dataTransfer.types.includes('Files')) {
              event.preventDefault();

              _this3.setHighlight(false);

              var fileList = event.dataTransfer.files || [];

              _this3.props.onSelectFiles(_toConsumableArray(fileList));
            }
          }
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        color: "grey"
      }, /*#__PURE__*/_react["default"].createElement(ReusableFileInput, {
        ref: fileInputRef,
        hidden: true,
        multiple: true,
        onChange: function onChange(event) {
          if (_this3.props.onSelectFiles) {
            var fileList = event.currentTarget.files || [];

            _this3.props.onSelectFiles(_toConsumableArray(fileList));
          }
        }
      }), this.props.state === 'PENDING' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "upload",
        className: "mb2"
      }), "Drag and drop", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
        horizontal: true
      }, "Or"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "blue",
        onClick: function onClick() {
          if (fileInputRef.current) {
            fileInputRef.current.click();
          }
        }
      }, "Browse Files")) : this.props.state === 'UPLOADING' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        loading: true,
        name: "circle notch",
        className: "mb2"
      }), "Uploading") : this.props.state === 'COMPLETE' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "check",
        className: "mb2"
      }), "Upload Complete") : null));
    }
  }]);

  return FileDropZone;
}(_react["default"].Component);

FileDropZone.propTypes = {
  state: _propTypes["default"].oneOf(['PENDING', 'UPLOADING', 'COMPLETE']).isRequired,
  onSelectFiles: _propTypes["default"].func
};
FileDropZone.defaultProps = {
  onSelectFiles: null
};
(0, _mobx.decorate)(FileDropZone, {
  setHighlight: _mobx.observable
});

var _default = (0, _mobxReact.observer)(FileDropZone);

exports["default"] = _default;
//# sourceMappingURL=FileDropZone.js.map