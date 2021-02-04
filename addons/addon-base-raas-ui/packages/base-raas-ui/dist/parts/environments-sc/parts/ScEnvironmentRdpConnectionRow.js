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

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _CopyToClipboard = _interopRequireDefault(require("../../helpers/CopyToClipboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
// - connectionId (via prop)
// - scEnvironmentsStore (via injection)
var ScEnvironmentRdpConnectionRow = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentRdpConnectionRow, _React$Component);

  var _super = _createSuper(ScEnvironmentRdpConnectionRow);

  function ScEnvironmentRdpConnectionRow(props) {
    var _this;

    _classCallCheck(this, ScEnvironmentRdpConnectionRow);

    _this = _super.call(this, props);
    _this.handleGetInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var store, connectionId, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store = _this.getConnectionStore();
              connectionId = _this.connectionId;
              _this.windowsRdpInfo = undefined;
              _this.showPassword = false;
              _this.processingGetInfo = true;
              _context.prev = 5;
              _context.next = 8;
              return store.getWindowsRdpInfo(connectionId);

            case 8:
              result = _context.sent;
              (0, _mobx.runInAction)(function () {
                _this.windowsRdpInfo = result || {};
              });
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);
              (0, _notification.displayError)(_context.t0);

            case 15:
              _context.prev = 15;
              (0, _mobx.runInAction)(function () {
                _this.processingGetInfo = false;
              });
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12, 15, 18]]);
    }));

    _this.toggleShowPassword = function () {
      _this.showPassword = !_this.showPassword;
    };

    (0, _mobx.runInAction)(function () {
      // The windowsRdpInfo we get once we ask for the windows rdp info
      // This is an object { password: <string>, networkInterfaces: [ ... ] }
      _this.windowsRdpInfo = undefined; // A flag to indicate if we are in the process of getting the windows rdp info

      _this.processingGetInfo = false; // Should the password be shown

      _this.showPassword = false;
    });
    return _this;
  }

  _createClass(ScEnvironmentRdpConnectionRow, [{
    key: "getConnectionStore",
    value: function getConnectionStore() {
      return this.envsStore.getScEnvConnectionStore(this.environment.id);
    } // Returns only the connections that scheme = 'rdp'
    // [ {id, name: <string>(optional), instanceId: <string>, scheme: 'rdp'}, ... ]

  }, {
    key: "render",
    value: function render() {
      var item = this.connection;
      var windowsRdpInfo = this.windowsRdpInfo;
      var processing = this.processingGetInfo;
      var rows = [/*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
        key: item.id
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        size: "mini",
        primary: true,
        loading: processing,
        onClick: this.handleGetInfo
      }, "Get Password"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1"
      }, item.name || 'Connect')))];

      if (windowsRdpInfo) {
        rows.push(this.renderExpanded());
      }

      return rows;
    }
  }, {
    key: "renderExpanded",
    value: function renderExpanded() {
      var _this2 = this;

      var item = this.connection;
      var windowsRdpInfo = this.windowsRdpInfo;
      var interfaces = this.networkInterfaces;
      var username = 'Administrator';
      var password = windowsRdpInfo.password;
      var showPassword = this.showPassword;
      var moreThanOne = _lodash["default"].size(interfaces) > 1;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
        key: "".concat(item.id, "__2")
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        className: "p3"
      }, /*#__PURE__*/_react["default"].createElement("b", null, "Your Windows workspace can be accessed via an RDP client by using the DNS host name and credentials defined below."), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        bulleted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The IP Address or DNS of the instance.", ' ', moreThanOne ? 'Ask your administrator if you are not sure which one to use:' : '', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, null, _lodash["default"].map(interfaces, function (network) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
          key: network.value,
          className: "flex"
        }, _this2.renderHostLabel(network), /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
          text: network.value
        }));
      }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The username and password:", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
        className: "flex"
      }, this.renderUsernameLabel(username), /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
        text: username
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
        className: "flex"
      }, this.renderPasswordLabel(password), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        className: "ml2",
        basic: true,
        size: "mini",
        onClick: this.toggleShowPassword
      }, showPassword ? 'Hide' : 'Show'), /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
        text: password
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, "Additional information about connecting via RDP can be found in the documentation below:"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        bulleted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
        href: "https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html#connect-rdp",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Connect to Your Windows Instance"))));
    }
  }, {
    key: "renderPasswordLabel",
    value: function renderPasswordLabel(password) {
      var showPassword = this.showPassword;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, null, "Password", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label.Detail, null, showPassword ? password : '****************'));
    }
  }, {
    key: "renderUsernameLabel",
    value: function renderUsernameLabel(username) {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, null, "Username", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label.Detail, null, username));
    }
  }, {
    key: "renderHostLabel",
    value: function renderHostLabel(network) {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, null, "Host", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label.Detail, null, network.value, " ", /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-7 pl1"
      }, "(", network.info, ")")));
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
  }, {
    key: "connections",
    get: function get() {
      var connections = this.environment.getConnections(function (item) {
        return item.scheme === 'rdp';
      });
      return connections;
    }
  }, {
    key: "connection",
    get: function get() {
      var id = this.connectionId;
      var connections = this.connections;
      return _lodash["default"].find(connections, ['id', id]) || {};
    }
  }, {
    key: "connectionId",
    get: function get() {
      return this.props.connectionId;
    }
  }, {
    key: "networkInterfaces",
    get: function get() {
      var entries = _lodash["default"].get(this.windowsRdpInfo, 'networkInterfaces');

      if (_lodash["default"].isEmpty(entries)) return [];
      var result = [];

      _lodash["default"].forEach(entries, function (item) {
        if (item.publicDnsName) result.push({
          value: item.publicDnsName,
          type: 'dns',
          scope: 'public',
          info: 'Public'
        });
        if (item.privateIp) result.push({
          value: item.privateIp,
          type: 'ip',
          scope: 'private',
          info: 'Private'
        });
      });

      return result;
    }
  }]);

  return ScEnvironmentRdpConnectionRow;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentRdpConnectionRow, {
  envsStore: _mobx.computed,
  environment: _mobx.computed,
  connections: _mobx.computed,
  connection: _mobx.computed,
  connectionId: _mobx.computed,
  networkInterfaces: _mobx.computed,
  windowsRdpInfo: _mobx.observable,
  processingGetInfo: _mobx.observable,
  showPassword: _mobx.observable,
  handleGetInfo: _mobx.action,
  toggleShowPassword: _mobx.action
});

var _default = (0, _mobxReact.inject)('scEnvironmentsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentRdpConnectionRow)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentRdpConnectionRow.js.map