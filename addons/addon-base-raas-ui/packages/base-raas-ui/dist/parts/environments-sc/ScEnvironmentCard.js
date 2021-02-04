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

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _By = _interopRequireDefault(require("../helpers/By"));

var _ScEnvironmentButtons = _interopRequireDefault(require("./parts/ScEnvironmentButtons"));

var _ScEnvironmentCost = _interopRequireDefault(require("./parts/ScEnvironmentCost"));

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
// - scEnvironment (via prop)
// - envTypesStore (via injection)
var ScEnvironmentCard = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentCard, _React$Component);

  var _super = _createSuper(ScEnvironmentCard);

  function ScEnvironmentCard() {
    _classCallCheck(this, ScEnvironmentCard);

    return _super.apply(this, arguments);
  }

  _createClass(ScEnvironmentCard, [{
    key: "render",
    value: function render() {
      var env = this.environment;
      var state = env.state;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderStatus(state), this.renderTitle(env), this.renderError(env), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
        className: "mt1 mb1"
      }), this.renderButtons(env), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
        className: "mt1"
      }), env.description || 'No description was provided for this workspace.', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        columns: 2,
        stackable: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Row, {
        stretched: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        width: 12
      }, this.renderDetailTable(env)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        width: 4
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "w-100 overflow-hidden"
      }, /*#__PURE__*/_react["default"].createElement(_ScEnvironmentCost["default"], {
        envId: env.id
      })))))));
    }
  }, {
    key: "renderDetailTable",
    value: function renderDetailTable(env) {
      var studyCount = _lodash["default"].size(_lodash["default"].get(env, 'studyIds', []));

      var envType = this.envType || {};

      var renderRow = function renderRow(key, value) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 5
        }, key), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 11,
          className: "breakout"
        }, value));
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        definition: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, renderRow('Owner', /*#__PURE__*/_react["default"].createElement(_By["default"], {
        uid: env.createdBy,
        skipPrefix: true
      })), renderRow('Studies', studyCount === 0 ? 'No studies linked to this workspace' : (0, _utils.niceNumber)(studyCount)), renderRow('Project', _lodash["default"].isEmpty(env.projectId) ? 'N/A' : env.projectId), renderRow('Restricted CIDR', _lodash["default"].isEmpty(env.cidr) ? 'N/A' : env.cidr), renderRow('Workspace Type', envType.name)));
    }
  }, {
    key: "renderButtons",
    value: function renderButtons(env) {
      return /*#__PURE__*/_react["default"].createElement(_ScEnvironmentButtons["default"], {
        scEnvironment: env,
        showDetailButton: true
      });
    }
  }, {
    key: "renderStatus",
    value: function renderStatus(state) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          cursor: 'default'
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
        trigger: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          attached: "top left",
          size: "mini",
          color: state.color
        }, state.spinner && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "spinner",
          loading: true
        }), state.display)
      }, state.tip));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(env) {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "mt1"
      }, env.name, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey"
      }, "Created ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: env.createdAt,
        className: "mr2"
      }), " ", /*#__PURE__*/_react["default"].createElement(_By["default"], {
        uid: env.createdBy,
        className: "mr2"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey mr2"
      }, " ", env.id)));
    }
  }, {
    key: "renderError",
    value: function renderError(env) {
      if (_lodash["default"].isEmpty(env.error)) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        negative: true
      }, /*#__PURE__*/_react["default"].createElement("p", null, env.error));
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }, {
    key: "environment",
    get: function get() {
      return this.props.scEnvironment;
    }
  }, {
    key: "envType",
    get: function get() {
      var env = this.props.scEnvironment;
      var store = this.envTypesStore;
      var envType = store.getEnvType(env.envTypeId);
      return envType;
    }
  }]);

  return ScEnvironmentCard;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentCard, {
  envTypesStore: _mobx.computed,
  environment: _mobx.computed,
  envType: _mobx.computed
});

var _default = (0, _mobxReact.inject)('envTypesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentCard)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentCard.js.map