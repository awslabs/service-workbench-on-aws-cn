"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var LOADING_ICON = 'circle notched';
var MESSAGE_POS = 'positive';
var MESSAGE_NEG = 'negative';
var MESSAGE_INFO = 'info';

var CfnStackOutput = /*#__PURE__*/function (_PureComponent) {
  _inherits(CfnStackOutput, _PureComponent);

  var _super = _createSuper(CfnStackOutput);

  function CfnStackOutput() {
    _classCallCheck(this, CfnStackOutput);

    return _super.apply(this, arguments);
  }

  _createClass(CfnStackOutput, [{
    key: "render",
    value: function render() {
      var messageType = MESSAGE_POS;
      var iconType = 'check';

      if (this.props.isStackExecuting) {
        messageType = MESSAGE_INFO;
        iconType = LOADING_ICON;
      } else if (this.props.errorMessage) {
        messageType = MESSAGE_NEG;
        iconType = 'dont';
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        icon: true,
        positive: messageType === MESSAGE_POS,
        negative: messageType === MESSAGE_NEG,
        info: messageType === MESSAGE_INFO
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: iconType,
        loading: iconType === LOADING_ICON
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Results from the creating the stack"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, null, this.props.outputs.map(function (item, index) {
        // eslint-disable-next-line react/no-array-index-key
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
          key: index
        }, item);
      })), this.props.errorMessage));
    }
  }]);

  return CfnStackOutput;
}(_react.PureComponent);

exports["default"] = CfnStackOutput;
CfnStackOutput.propTypes = {
  isStackExecuting: _propTypes["default"].bool.isRequired,
  outputs: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  errorMessage: _propTypes["default"].string
};
CfnStackOutput.defaultProps = {
  errorMessage: ''
};
//# sourceMappingURL=CfnStackOutput.js.map