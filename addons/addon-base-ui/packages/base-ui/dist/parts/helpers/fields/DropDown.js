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

var _classnames = _interopRequireDefault(require("classnames"));

var _Header = _interopRequireDefault(require("./Header"));

var _Description = _interopRequireDefault(require("./Description"));

var _ErrorPointer = _interopRequireDefault(require("./ErrorPointer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
// - field (via props), this is the mobx form field object
// - options (via props), an array of [ {text, value}, {text, value}, ...]
// - onChange (via props), (optional) if provided, it will be given (value, field)
// - className (via props)
//
// The following props are to support existing React Semantic UI props:
// - selection (via props), default to false
// - fluid (via props), default to false
// - disabled (via props), default to false
// - clearable (via props), default to false
// - multiple (via props), default to false
// - search (via props), default to false
// - allowAdditions (via props), default to false
// - className (via props), default to 'mb4'
// - additionLabel (via props), default to 'Custom Value:'
var DEFAULT_SELECTION = false;
var DEFAULT_FLUID = false;
var DEFAULT_DISABLED = false;
var DEFAULT_CLEARABLE = false;
var DEFAULT_MULTIPLE = false;
var DEFAULT_SEARCH = false;
var DEFAULT_ALLOW_ADDITIONS = false;
var DEFAULT_CLASS_NAME = 'mb4';

var DEFAULT_ADDITION_LABEL = /*#__PURE__*/_react["default"].createElement("i", {
  style: {
    color: 'red'
  }
}, "Custom Value: ");

var DropDown = /*#__PURE__*/function (_React$Component) {
  _inherits(DropDown, _React$Component);

  var _super = _createSuper(DropDown);

  function DropDown(props) {
    var _this;

    _classCallCheck(this, DropDown);

    _this = _super.call(this, props);

    _this.onAddItem = function (e) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Append the item to options that just got added
      _this.optionsInState = _lodash["default"].concat({
        text: data.value,
        value: data.value
      }, _this.optionsInState);
    };

    (0, _mobx.runInAction)(function () {
      _this.optionsInState = [];
    });
    return _this;
  }

  _createClass(DropDown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          field = _this$props.field,
          selection = _this$props.selection,
          fluid = _this$props.fluid,
          disabled = _this$props.disabled,
          clearable = _this$props.clearable,
          multiple = _this$props.multiple,
          search = _this$props.search,
          allowAdditions = _this$props.allowAdditions,
          additionLabel = _this$props.additionLabel,
          className = _this$props.className,
          _this$props$options = _this$props.options,
          options = _this$props$options === void 0 ? [] : _this$props$options,
          _onChange = _this$props.onChange,
          dataTestId = _this$props.dataTestId;
      var id = field.id,
          value = field.value,
          sync = field.sync,
          placeholder = field.placeholder,
          _field$error = field.error,
          error = _field$error === void 0 ? '' : _field$error;
      var hasError = !_lodash["default"].isEmpty(error); // IMPORTANT do NOT use field.hasError

      var extra = field.extra || {};
      extra.options = extra.options || [];

      var mergeOptions = _lodash["default"].uniq([].concat(_toConsumableArray(this.optionsInState), _toConsumableArray(extra.options), _toConsumableArray(options)));

      var isDisabled = field.disabled || disabled;
      var disabledClass = isDisabled ? 'disabled' : '';
      var errorClass = hasError ? 'error' : '';
      /**
       * A utility function to see if the given component attribute is passed as an argument when rendering this component
       * or specified in the "extra" object.
       * The function returns the attribute value in the following order of precedence
       * 1. attribute value directly specified at the time of rendering the component (i.e., passed to the component), if the attribute was not passed then
       * 2. attribute value specified in the "extra" object of the given field, if it was not passed in the extra object as well then
       * 3. default attribute value
       *
       * @param attribName The name of the attribute
       * @param attribValue The attribute value that was passed when rendering the component
       * @param defaultAttribValue The default attribute value to use
       * @returns {*}
       */

      var getValue = function getValue(attribName, attribValue, defaultAttribValue) {
        var fromExtra = extra && extra[attribName]; // use specified attribValue if it is passed. If not, then try to use attrib value from the "extra" object

        var toUse = _lodash["default"].isNil(attribValue) ? fromExtra : attribValue; // if the attrib is neither passed nor in extra then use default value

        if (_lodash["default"].isNil(toUse)) {
          toUse = defaultAttribValue;
        }

        return toUse;
      };

      var attrs = {
        id: id,
        value: value,
        // applicable only when allowAdditions = true
        onAddItem: this.onAddItem,
        onChange: function onChange(e) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          sync(data.value);
          field.validate({
            showErrors: true
          });
          if (_onChange) _onChange(data.value, field);
        },
        placeholder: placeholder,
        selection: getValue('selection', selection, DEFAULT_SELECTION),
        clearable: getValue('clearable', clearable, DEFAULT_CLEARABLE),
        multiple: getValue('multiple', multiple, DEFAULT_MULTIPLE),
        search: getValue('search', search, DEFAULT_SEARCH),
        fluid: getValue('fluid', fluid, DEFAULT_FLUID),
        allowAdditions: getValue('allowAdditions', allowAdditions, DEFAULT_ALLOW_ADDITIONS),
        disabled: getValue('disabled', disabled, DEFAULT_DISABLED),
        additionLabel: getValue('additionLabel', additionLabel, DEFAULT_ADDITION_LABEL),
        error: hasError
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(getValue('className', className, DEFAULT_CLASS_NAME), errorClass, disabledClass)
      }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        field: field
      }), /*#__PURE__*/_react["default"].createElement(_Description["default"], {
        field: field
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dropdown, _extends({
        "data-testid": dataTestId,
        className: "field",
        options: mergeOptions
      }, attrs)), /*#__PURE__*/_react["default"].createElement(_ErrorPointer["default"], {
        field: field
      }));
    }
  }]);

  return DropDown;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(DropDown, {
  optionsInState: _mobx.observable,
  onAddItem: _mobx.action
});

var _default = (0, _mobxReact.observer)(DropDown);

exports["default"] = _default;
//# sourceMappingURL=DropDown.js.map