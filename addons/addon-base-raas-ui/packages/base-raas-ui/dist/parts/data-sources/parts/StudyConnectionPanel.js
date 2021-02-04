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

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _StudyStatusMessage = _interopRequireDefault(require("./StudyStatusMessage"));

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
// - onCancel (via props) a call back function when the user clicks on Done
// - study (via props)
// - operation (via props)
var StudyConnectionPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(StudyConnectionPanel, _React$Component);

  var _super = _createSuper(StudyConnectionPanel);

  function StudyConnectionPanel() {
    var _this;

    _classCallCheck(this, StudyConnectionPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleCancel = function () {
      if (!_lodash["default"].isFunction(_this.props.onCancel)) return;

      _this.props.onCancel();
    };

    return _this;
  }

  _createClass(StudyConnectionPanel, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 mb2 animated fadeIn"
      }, this.renderError(), this.renderProcessing(), this.renderMessage());
    }
  }, {
    key: "renderProcessing",
    value: function renderProcessing() {
      var operation = this.operation;
      var processing = operation.processing;
      if (!processing) return null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Progress, {
        percent: 100,
        active: true
      }, "Checking Connection"));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var operation = this.operation;
      var processing = operation.processing;
      if (processing) return null;
      if (!operation.hasError) return null;
      return /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
        error: operation.error,
        className: "p0 mb2",
        onCancel: this.handleCancel
      });
    }
  }, {
    key: "renderMessage",
    value: function renderMessage() {
      var operation = this.operation;
      var study = this.study;
      var processing = operation.processing;
      if (processing) return null;
      if (operation.hasError) return null;
      return /*#__PURE__*/_react["default"].createElement(_StudyStatusMessage["default"], {
        study: study,
        onCancel: this.handleCancel
      });
    }
  }, {
    key: "study",
    get: function get() {
      return this.props.study;
    }
  }, {
    key: "operation",
    get: function get() {
      return this.props.operation;
    }
  }, {
    key: "progress",
    get: function get() {
      return this.operation.progress;
    }
  }]);

  return StudyConnectionPanel;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(StudyConnectionPanel, {
  study: _mobx.computed,
  operation: _mobx.computed,
  progress: _mobx.computed,
  handleCancel: _mobx.action
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(StudyConnectionPanel)));

exports["default"] = _default;
//# sourceMappingURL=StudyConnectionPanel.js.map