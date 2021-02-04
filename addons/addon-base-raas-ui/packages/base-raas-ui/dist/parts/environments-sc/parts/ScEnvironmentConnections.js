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

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ScEnvironmentHttpConnections = _interopRequireDefault(require("./ScEnvironmentHttpConnections"));

var _ScEnvironmentSshConnections = _interopRequireDefault(require("./ScEnvironmentSshConnections"));

var _ScEnvironmentRdpConnections = _interopRequireDefault(require("./ScEnvironmentRdpConnections"));

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
// - scEnvironmentsStore (via injection)
var ScEnvironmentConnections = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentConnections, _React$Component);

  var _super = _createSuper(ScEnvironmentConnections);

  function ScEnvironmentConnections() {
    _classCallCheck(this, ScEnvironmentConnections);

    return _super.apply(this, arguments);
  }

  _createClass(ScEnvironmentConnections, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getConnectionStore();

      if (!(0, _BaseStore.isStoreReady)(store)) {
        (0, _utils.swallowError)(store.load());
      }
    }
  }, {
    key: "getConnectionStore",
    value: function getConnectionStore() {
      return this.envsStore.getScEnvConnectionStore(this.environment.id);
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getConnectionStore();
      var env = this.environment;
      var state = env.state;
      var canConnect = state.canConnect;
      if (!canConnect) return null;
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "pt2 mb2"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 1,
          className: "mt2 mb2"
        });
      } else if ((0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else if ((0, _BaseStore.isStoreNotEmpty)(store)) {
        content = this.renderConnections();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "fadeIn animated"
      }, content);
    }
  }, {
    key: "renderConnections",
    value: function renderConnections() {
      var env = this.environment;

      var isHttp = function isHttp(scheme) {
        return scheme === 'http' || scheme === 'https' || _lodash["default"].isEmpty(scheme);
      };

      var isSsh = function isSsh(scheme) {
        return scheme === 'ssh';
      };

      var isRdp = function isRdp(scheme) {
        return scheme === 'rdp';
      };

      var hasHttp = !_lodash["default"].isEmpty(env.getConnections(function (item) {
        return isHttp(item.scheme);
      }));
      var hasSsh = !_lodash["default"].isEmpty(env.getConnections(function (item) {
        return isSsh(item.scheme);
      }));
      var hasRdp = !_lodash["default"].isEmpty(env.getConnections(function (item) {
        return isRdp(item.scheme);
      }));
      return (
        /*#__PURE__*/
        // Keep the order the way it is, otherwise the drop down menus in the ssh connections
        // will be cropped due to the 'fadeIn animated' changing the z index
        _react["default"].createElement(_react["default"].Fragment, null, hasHttp && /*#__PURE__*/_react["default"].createElement(_ScEnvironmentHttpConnections["default"], {
          scEnvironment: env
        }), hasRdp && /*#__PURE__*/_react["default"].createElement(_ScEnvironmentRdpConnections["default"], {
          scEnvironment: env
        }), hasSsh && /*#__PURE__*/_react["default"].createElement(_ScEnvironmentSshConnections["default"], {
          scEnvironment: env
        }))
      );
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt2 mb2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "linkify"
      }), "No Connections", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "This workspace does not have any defined connections.")));
    }
  }, {
    key: "environment",
    get: function get() {
      return this.props.scEnvironment;
    }
  }, {
    key: "envsStore",
    get: function get() {
      return this.props.scEnvironmentsStore;
    }
  }]);

  return ScEnvironmentConnections;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentConnections, {
  envsStore: _mobx.computed,
  environment: _mobx.computed
});

var _default = (0, _mobxReact.inject)('scEnvironmentsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentConnections)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentConnections.js.map