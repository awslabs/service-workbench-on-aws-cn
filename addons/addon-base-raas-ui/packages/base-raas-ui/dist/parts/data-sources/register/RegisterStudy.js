"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _InputStep = _interopRequireDefault(require("./InputStep"));

var _SubmitStep = _interopRequireDefault(require("./SubmitStep"));

var _CfnStep = _interopRequireDefault(require("./CfnStep"));

var _StartStep = _interopRequireDefault(require("./StartStep"));

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
// - dataSourceAccountsStore (via injection)
var RegisterStudy = /*#__PURE__*/function (_React$Component) {
  _inherits(RegisterStudy, _React$Component);

  var _super = _createSuper(RegisterStudy);

  function RegisterStudy(props) {
    var _this;

    _classCallCheck(this, RegisterStudy);

    _this = _super.call(this, props);
    (0, _mobx.runInAction)(function () {
      _this.stores = new _Stores["default"]([_this.accountsStore, _this.usersStore]);
    });
    return _this;
  }

  _createClass(RegisterStudy, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      (0, _utils.swallowError)(this.stores.load());
    }
  }, {
    key: "render",
    value: function render() {
      var stores = this.stores;
      var content = null;

      if (stores.hasError) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: stores.error,
          className: "p0"
        });
      } else if (stores.loading) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 1
        });
      } else if (stores.ready) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 animated fadeIn"
      }, this.renderTitle(), content);
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var wizard = this.wizard;
      if (wizard.isStartStep) return /*#__PURE__*/_react["default"].createElement(_StartStep["default"], {
        wizard: wizard
      });
      if (wizard.isInputStep) return /*#__PURE__*/_react["default"].createElement(_InputStep["default"], {
        wizard: wizard
      });
      if (wizard.isSubmitStep) return /*#__PURE__*/_react["default"].createElement(_SubmitStep["default"], {
        wizard: wizard
      });
      if (wizard.isCfnStep) return /*#__PURE__*/_react["default"].createElement(_CfnStep["default"], {
        wizard: wizard
      });
      return null;
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "database",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Data Sources"));
    }
  }, {
    key: "accountsStore",
    get: function get() {
      return this.props.dataSourceAccountsStore;
    }
  }, {
    key: "usersStore",
    get: function get() {
      return this.props.usersStore;
    }
  }, {
    key: "wizard",
    get: function get() {
      return this.props.registerStudyWizard;
    }
  }]);

  return RegisterStudy;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(RegisterStudy, {
  usersStore: _mobx.computed,
  accountsStore: _mobx.computed,
  wizard: _mobx.computed
});

var _default = (0, _mobxReact.inject)('dataSourceAccountsStore', 'usersStore', 'registerStudyWizard')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(RegisterStudy)));

exports["default"] = _default;
//# sourceMappingURL=RegisterStudy.js.map