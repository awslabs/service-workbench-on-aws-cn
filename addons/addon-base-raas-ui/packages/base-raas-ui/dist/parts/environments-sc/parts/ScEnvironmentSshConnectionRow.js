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

var _ScEnvSshConnRowExpanded = _interopRequireDefault(require("./ScEnvSshConnRowExpanded"));

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
// - keyPairsStore  (vai injection)
var ScEnvironmentSshConnectionRow = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentSshConnectionRow, _React$Component);

  var _super = _createSuper(ScEnvironmentSshConnectionRow);

  function ScEnvironmentSshConnectionRow(props) {
    var _this;

    _classCallCheck(this, ScEnvironmentSshConnectionRow);

    _this = _super.call(this, props);
    _this.handleActivate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var keyId, store, connectionId, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              keyId = _this.selectedKeyId;
              store = _this.getConnectionStore();
              connectionId = _this.connectionId;

              if (!_lodash["default"].isEmpty(keyId)) {
                _context.next = 6;
                break;
              }

              (0, _notification.displayError)('Please select the name of the key pair that you want to use');
              return _context.abrupt("return");

            case 6:
              _this.networkInterfaces = undefined;
              _this.processingSendKey = true;
              _context.prev = 8;
              _context.next = 11;
              return store.sendSshKey(connectionId, keyId);

            case 11:
              result = _context.sent;
              (0, _mobx.runInAction)(function () {
                _this.networkInterfaces = _lodash["default"].get(result, 'networkInterfaces');
              });
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](8);
              (0, _notification.displayError)(_context.t0);

            case 18:
              _context.prev = 18;
              (0, _mobx.runInAction)(function () {
                _this.processingSendKey = false;
              });
              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 15, 18, 21]]);
    }));

    _this.handleKeyChange = function (e, data) {
      var value = _lodash["default"].get(data, 'value');

      var changed = value !== _this.selectedKeyId;
      _this.selectedKeyId = value;
      if (changed) _this.networkInterfaces = undefined;
    };

    (0, _mobx.runInAction)(function () {
      var key = _lodash["default"].first(_this.keyPairsStore.listActive) || {}; // The networksInterfaces we get once we send the ssh key

      _this.networkInterfaces = undefined; // A flag to indicate if the activation of ssh is being processed

      _this.processingSendKey = false; // We default the selected key (if any) to the first latest active key

      _this.selectedKeyId = key.id;
    });
    return _this;
  }

  _createClass(ScEnvironmentSshConnectionRow, [{
    key: "getConnectionStore",
    value: function getConnectionStore() {
      return this.envsStore.getScEnvConnectionStore(this.environment.id);
    } // Returns only the connections that scheme = 'ssh'
    // [ {id, name: <string>(optional), instanceId: <string>, scheme: 'ssh'}, ... ]

  }, {
    key: "render",
    value: function render() {
      var store = this.keyPairsStore;

      var emptyKeys = _lodash["default"].isEmpty(store.listActive);

      var item = this.connection;
      var networkInterfaces = this.networkInterfaces;
      var options = this.keyPairOptions;
      var selectedKeyId = this.selectedKeyId;
      var selectedKeyName = this.selectedKeyName;
      var rows = [/*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
        key: item.id
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1"
      }, item.name || item.instanceId)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, emptyKeys && 'No key pair found', !emptyKeys && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dropdown, {
        upward: true,
        placeholder: "Select Key",
        fluid: true,
        selection: true,
        options: options,
        value: selectedKeyId,
        onChange: this.handleKeyChange,
        disabled: emptyKeys || this.processingSendKey
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        collapsing: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        primary: true,
        size: "mini",
        onClick: this.handleActivate,
        disabled: emptyKeys,
        loading: this.processingSendKey
      }, "Use this SSH Key")))];

      if (networkInterfaces) {
        rows.push( /*#__PURE__*/_react["default"].createElement(_ScEnvSshConnRowExpanded["default"], {
          key: "".concat(item.id, "__1"),
          networkInterfaces: networkInterfaces,
          keyName: selectedKeyName,
          connectionId: item.id
        }));
      }

      return rows;
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
    key: "keyPairsStore",
    get: function get() {
      return this.props.keyPairsStore;
    }
  }, {
    key: "keyPairOptions",
    get: function get() {
      return _lodash["default"].map(this.keyPairsStore.listActive, function (item) {
        return {
          key: item.id,
          value: item.id,
          text: item.name
        };
      });
    }
  }, {
    key: "connections",
    get: function get() {
      var connections = this.environment.getConnections(function (item) {
        return item.scheme === 'ssh';
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
    key: "selectedKeyName",
    get: function get() {
      if (_lodash["default"].isEmpty(this.selectedKeyId)) return '';
      return _lodash["default"].get(this.keyPairsStore.getKeyPair(this.selectedKeyId), 'name');
    }
  }]);

  return ScEnvironmentSshConnectionRow;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentSshConnectionRow, {
  envsStore: _mobx.computed,
  environment: _mobx.computed,
  keyPairsStore: _mobx.computed,
  connections: _mobx.computed,
  connection: _mobx.computed,
  connectionId: _mobx.computed,
  keyPairOptions: _mobx.computed,
  selectedKeyName: _mobx.computed,
  selectedKeyId: _mobx.observable,
  networkInterfaces: _mobx.observable,
  processingSendKey: _mobx.observable,
  handleActivate: _mobx.action,
  handleKeyChange: _mobx.action
});

var _default = (0, _mobxReact.inject)('scEnvironmentsStore', 'keyPairsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentSshConnectionRow)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentSshConnectionRow.js.map