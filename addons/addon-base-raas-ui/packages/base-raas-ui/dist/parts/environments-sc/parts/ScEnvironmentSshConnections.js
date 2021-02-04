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

var _KeyPairCreateForm = _interopRequireDefault(require("@aws-ee/key-pair-mgmt-ui/dist/parts/key-pairs/parts/KeyPairCreateForm"));

var _ScEnvironmentSshConnectionRow = _interopRequireDefault(require("./ScEnvironmentSshConnectionRow"));

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
// - environment (via prop)
// - keyPairsStore  (vai injection)
var ScEnvironmentSshConnections = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentSshConnections, _React$Component);

  var _super = _createSuper(ScEnvironmentSshConnections);

  function ScEnvironmentSshConnections(props) {
    var _this;

    _classCallCheck(this, ScEnvironmentSshConnections);

    _this = _super.call(this, props);

    _this.toggleCreateKey = function () {
      _this.showCreateKey = !_this.showCreateKey;
    };

    (0, _mobx.runInAction)(function () {
      // A flag to indicate if we need to show the create key form
      _this.showCreateKey = false;
    });
    return _this;
  }

  _createClass(ScEnvironmentSshConnections, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.keyPairsStore;

      if (!(0, _BaseStore.isStoreReady)(store)) {
        (0, _utils.swallowError)(store.load());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.keyPairsStore;
      var env = this.environment;
      var state = env.state;
      var canConnect = state.canConnect;

      var empty = _lodash["default"].isEmpty(this.connections);

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
      } else if (empty) {
        content = this.renderEmpty();
      } else {
        content = this.renderConnections();
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "fadeIn animated"
      }, content);
    }
  }, {
    key: "renderConnections",
    value: function renderConnections() {
      var env = this.environment;
      var showCreateKey = this.showCreateKey;
      var connections = this.connections;
      var store = this.keyPairsStore;
      var empty = store.empty;
      if (showCreateKey) return this.renderCreateKeyForm();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 mb2 fadeIn animated"
      }, empty && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        warning: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Attention!"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.List, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "You do not have any key pairs. A key pair is needed to connect via SSH to the target machine."), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, null, "You can create a key pair now by clicking on the 'Create Key' button below."))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        celled: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        colSpan: "3",
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        color: "blue",
        size: "mini",
        basic: true,
        onClick: this.toggleCreateKey
      }, "Create Key")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1"
      }, "SSH Connections")))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, _lodash["default"].map(connections, function (item) {
        return /*#__PURE__*/_react["default"].createElement(_ScEnvironmentSshConnectionRow["default"], {
          key: item.id,
          scEnvironment: env,
          connectionId: item.id
        });
      }))));
    }
  }, {
    key: "renderCreateKeyForm",
    value: function renderCreateKeyForm() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "clearfix mt2 mb2 p2 fadeIn animated"
      }, /*#__PURE__*/_react["default"].createElement(_KeyPairCreateForm["default"], {
        onCancel: this.toggleCreateKey
      }));
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
      }), "No SSH Connections", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "This workspace does not have any defined SSH connections.")));
    }
  }, {
    key: "environment",
    get: function get() {
      return this.props.scEnvironment;
    }
  }, {
    key: "keyPairsStore",
    get: function get() {
      return this.props.keyPairsStore;
    } // Returns only the connections that scheme = 'ssh'
    // [ {id, name: <string>(optional), instanceId: <string>, scheme: 'ssh'}, ... ]

  }, {
    key: "connections",
    get: function get() {
      var connections = this.environment.getConnections(function (item) {
        return item.scheme === 'ssh';
      });
      return connections;
    }
  }]);

  return ScEnvironmentSshConnections;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentSshConnections, {
  environment: _mobx.computed,
  keyPairsStore: _mobx.computed,
  connections: _mobx.computed,
  showCreateKey: _mobx.observable,
  toggleCreateKey: _mobx.action
});

var _default = (0, _mobxReact.inject)('keyPairsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentSshConnections)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentSshConnections.js.map