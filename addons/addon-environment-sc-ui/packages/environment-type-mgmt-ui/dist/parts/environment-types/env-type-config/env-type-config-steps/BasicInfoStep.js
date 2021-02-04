"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _TextArea = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/TextArea"));

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

var BasicInfoStep = /*#__PURE__*/function (_BaseEnvTypeConfigSte) {
  _inherits(BasicInfoStep, _BaseEnvTypeConfigSte);

  var _super = _createSuper(BasicInfoStep);

  function BasicInfoStep() {
    _classCallCheck(this, BasicInfoStep);

    return _super.apply(this, arguments);
  }

  _createClass(BasicInfoStep, [{
    key: "renderFormFields",
    value: function renderFormFields(_ref) {
      var form = _ref.form,
          processing = _ref.processing;
      var isUpdating = this.isEditAction();
      var idField = form.$('id');
      var nameField = form.$('name');
      var descField = form.$('desc');
      var estimatedCostInfoField = form.$('estimatedCostInfo');
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isUpdating && /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        field: idField,
        disabled: processing
      }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        field: nameField,
        disabled: processing
      }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
        field: descField,
        disabled: processing
      }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
        field: estimatedCostInfoField,
        disabled: processing
      }));
    }
  }]);

  return BasicInfoStep;
}(_BaseEnvTypeConfigStep["default"]);

var _default = (0, _mobxReact.observer)(BasicInfoStep);

exports["default"] = _default;
//# sourceMappingURL=BasicInfoStep.js.map