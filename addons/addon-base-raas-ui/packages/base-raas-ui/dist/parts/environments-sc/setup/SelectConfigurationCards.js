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

var _Header = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Header"));

var _Description = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Description"));

var _ErrorPointer = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/ErrorPointer"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// - configurations (via props) and array of the env type configurations MST
// - formField (via props) an instance of the mobx form field
var SelectConfigurationCards = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectConfigurationCards, _React$Component);

  var _super = _createSuper(SelectConfigurationCards);

  function SelectConfigurationCards() {
    var _this;

    _classCallCheck(this, SelectConfigurationCards);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleSelectConfigurationId = function (configId) {
      _this.formField.sync(configId);

      _this.formField.resetValidation();
    };

    return _this;
  }

  _createClass(SelectConfigurationCards, [{
    key: "render",
    value: function render() {
      var field = this.formField;
      var _field$error = field.error,
          error = _field$error === void 0 ? '' : _field$error;
      var hasError = !_lodash["default"].isEmpty(error); // IMPORTANT do NOT use field.hasError

      var isDisabled = field.disabled;
      var disabledClass = isDisabled ? 'disabled' : '';
      var errorClass = hasError ? 'error' : '';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('mb4', errorClass, disabledClass)
      }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        field: field
      }), /*#__PURE__*/_react["default"].createElement(_Description["default"], {
        field: field
      }), /*#__PURE__*/_react["default"].createElement(_ErrorPointer["default"], {
        field: field,
        className: "mb1"
      }), this.renderCards());
    }
  }, {
    key: "renderCards",
    value: function renderCards() {
      var _this2 = this;

      var disabled = this.formField.disabled;
      var configurations = this.configurations;

      var isSelected = function isSelected(config) {
        return config.id === _this2.configurationId;
      };

      var getAttrs = function getAttrs(config) {
        var attrs = {};
        if (isSelected(config)) attrs.color = 'blue';
        if (!disabled) attrs.onClick = function () {
          return _this2.handleSelectConfigurationId(config.id);
        };
        return attrs;
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Group, {
        stackable: true,
        itemsPerRow: 3,
        className: "mt1"
      }, _lodash["default"].map(configurations, function (config) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, _extends({
          "data-testid": "configuration-card",
          key: config.id,
          className: (0, _classnames["default"])('mb3', {
            'cursor-pointer': !disabled
          })
        }, getAttrs(config)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Header, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex mt1"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Radio, {
          className: "mr2",
          checked: isSelected(config),
          disabled: disabled
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
          as: "h4",
          className: "flex-auto mt0 pt0"
        }, config.name)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Description, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "pr1 pl1 pb1"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          dangerouslySetInnerHTML: {
            __html: config.descHtml
          }
        })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null), _this2.renderEstimatedCostInfo(config))));
      }));
    }
  }, {
    key: "renderEstimatedCostInfo",
    value: function renderEstimatedCostInfo(config) {
      var hasCost = !_lodash["default"].isEmpty(config.estimatedCostInfoHtml);

      var content = /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex p1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "bold flex-auto"
      }, "Estimated Cost"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "pr1"
      }, "N/A"));

      if (hasCost) {
        content = /*#__PURE__*/_react["default"].createElement("div", {
          className: "p1"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "mb2 bold"
        }, "Estimated Cost"), /*#__PURE__*/_react["default"].createElement("div", {
          dangerouslySetInnerHTML: {
            __html: config.estimatedCostInfoHtml
          }
        }));
      }

      return content;
    }
  }, {
    key: "renderTableInfo",
    value: function renderTableInfo(config) {
      // estimatedCostInfo
      var priceTitle = function priceTitle(item) {
        var isSpot = _lodash["default"].get(item, 'priceInfo.type') === 'spot';
        return isSpot ? 'Maximum price per day' : 'Price per day';
      };

      var region = function region(item) {
        return _lodash["default"].get(item, 'priceInfo.region');
      };

      var price = function price(item) {
        var perDay = item.pricePerDay;
        if (_lodash["default"].isUndefined(perDay) || _lodash["default"].isString(perDay) && _lodash["default"].isEmpty(perDay)) return 'N/A';
        return "$".concat((0, _utils.nicePrice)(perDay));
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        basic: "very",
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, _lodash["default"].map(config.displayProps).map(function (property, propertyIndex) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          _react["default"].createElement(_semanticUiReact.Table.Row, {
            key: propertyIndex,
            textAlign: "center"
          }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, property.key), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, property.value))
        );
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
        textAlign: "center"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, priceTitle(config), /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-grey fs-9"
      }, region(config))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        verticalAlign: "top"
      }, price(config)))));
    }
  }, {
    key: "configurations",
    get: function get() {
      return this.props.configurations;
    }
  }, {
    key: "configurationId",
    get: function get() {
      return this.formField.value;
    }
  }, {
    key: "formField",
    get: function get() {
      return this.props.formField;
    }
  }]);

  return SelectConfigurationCards;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(SelectConfigurationCards, {
  configurations: _mobx.computed,
  configurationId: _mobx.computed,
  formField: _mobx.computed,
  handleSelectConfigurationId: _mobx.action
});

var _default = (0, _mobxReact.inject)()((0, _mobxReact.observer)(SelectConfigurationCards));

exports["default"] = _default;
//# sourceMappingURL=SelectConfigurationCards.js.map