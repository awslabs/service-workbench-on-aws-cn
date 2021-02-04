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

var _ScEnvironmentsStore = require("../../../models/environments-sc/ScEnvironmentsStore");

var _filterColorMap;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var filterColorMap = (_filterColorMap = {}, _defineProperty(_filterColorMap, _ScEnvironmentsStore.filterNames.ALL, 'blue'), _defineProperty(_filterColorMap, _ScEnvironmentsStore.filterNames.AVAILABLE, 'green'), _defineProperty(_filterColorMap, _ScEnvironmentsStore.filterNames.PENDING, 'orange'), _defineProperty(_filterColorMap, _ScEnvironmentsStore.filterNames.ERRORED, 'red'), _defineProperty(_filterColorMap, _ScEnvironmentsStore.filterNames.TERMINATED, 'grey'), _filterColorMap); // expected props
// - selectedFilter (via prop) the filter name of the currently selected filter
// - onSelectedFilter (via prop) a fn to be called when a button is selected
// - className (via prop) optional

var ScEnvironmentsFilterButtons = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentsFilterButtons, _React$Component);

  var _super = _createSuper(ScEnvironmentsFilterButtons);

  function ScEnvironmentsFilterButtons() {
    var _this;

    _classCallCheck(this, ScEnvironmentsFilterButtons);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleSelected = function (name) {
      return (0, _mobx.action)(function () {
        _this.onSelectedFilter(name);
      });
    };

    return _this;
  }

  _createClass(ScEnvironmentsFilterButtons, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedFilter = this.selectedFilter;

      var getAttrs = function getAttrs(name) {
        var color = _lodash["default"].get(filterColorMap, name, 'grey');

        var selected = name === selectedFilter;
        var attrs = {
          active: selected,
          basic: !selected,
          color: color,
          style: {
            cursor: selected ? 'default' : 'pointer'
          }
        };
        if (!selected) attrs.onClick = _this2.handleSelected(name);
        return attrs;
      };

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('clearfix', this.props.className)
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button.Group, {
        floated: "right"
      }, _lodash["default"].map(_lodash["default"].keys(filterColorMap), function (name) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, _extends({
          key: name
        }, getAttrs(name)), _lodash["default"].startCase(name));
      })));
    }
  }, {
    key: "selectedFilter",
    get: function get() {
      return this.props.selectedFilter;
    }
  }, {
    key: "onSelectedFilter",
    get: function get() {
      var fn = this.props.onSelectedFilter;
      return _lodash["default"].isFunction(fn) ? fn : function () {};
    }
  }]);

  return ScEnvironmentsFilterButtons;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentsFilterButtons, {
  selectedFilter: _mobx.computed,
  onSelectedFilter: _mobx.computed
});

var _default = (0, _mobxReact.observer)(ScEnvironmentsFilterButtons);

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentsFilterButtons.js.map