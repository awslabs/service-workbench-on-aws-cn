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

var openWindow = function openWindow(url, windowFeatures) {
  return window.open(url, '_blank', windowFeatures);
}; // expected props
// - environment (via prop)
// - scEnvironmentsStore (via injection)


var ScEnvironmentHttpConnections = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentHttpConnections, _React$Component);

  var _super = _createSuper(ScEnvironmentHttpConnections);

  function ScEnvironmentHttpConnections(props) {
    var _this;

    _classCallCheck(this, ScEnvironmentHttpConnections);

    _this = _super.call(this, props);

    _this.handleConnect = function (id) {
      return (0, _mobx.action)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var store, connections, connectInfo, url, newTab;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _this.getConnectionStore();
                connections = _this.environment.connections;
                connectInfo = _lodash["default"].find(connections, ['id', id]) || {};
                url = connectInfo.url;
                _this.processingId = id;
                _context.prev = 5;

                if (!url) {
                  _context.next = 10;
                  break;
                }

                // We use noopener and noreferrer for good practices https://developer.mozilla.org/en-US/docs/Web/API/Window/open#noopener
                openWindow(url, 'noopener,noreferrer');
                _context.next = 15;
                break;

              case 10:
                newTab = openWindow('about:blank');
                _context.next = 13;
                return store.createConnectionUrl(id);

              case 13:
                url = _context.sent;
                newTab.location = url;

              case 15:
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](5);
                (0, _notification.displayError)(_context.t0);

              case 20:
                _context.prev = 20;
                (0, _mobx.runInAction)(function () {
                  _this.processingId = '';
                });
                return _context.finish(20);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 17, 20, 23]]);
      })));
    };

    (0, _mobx.runInAction)(function () {
      // The id of the connection that is being processed
      _this.processingId = '';
    });
    return _this;
  }

  _createClass(ScEnvironmentHttpConnections, [{
    key: "getConnectionStore",
    value: function getConnectionStore() {
      return this.envsStore.getScEnvConnectionStore(this.environment.id);
    } // Returns only the connections that either have a scheme = 'http' or 'https' or no scheme
    // [ {id, name: <string>(optional), url: <string>(optional)}, ... ]

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var env = this.environment;
      var state = env.state;
      var canConnect = state.canConnect;
      var connections = this.connections;
      var processingId = this.processingId;

      var isDisabled = function isDisabled(id) {
        return processingId !== id && !_lodash["default"].isEmpty(processingId);
      };

      var isLoading = function isLoading(id) {
        return processingId === id;
      };

      if (!canConnect) return null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 mb2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        celled: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        colSpan: "1"
      }, "HTTP Connections"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, _lodash["default"].map(connections, function (item) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: item.id
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          className: "clearfix"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          size: "mini",
          primary: true,
          disabled: isDisabled(item.id),
          loading: isLoading(item.id),
          onClick: _this2.handleConnect(item.id)
        }, "Connect"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "mt1"
        }, item.name || 'Connect')));
      }))));
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
      }), "No HTTP Connections", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "This workspace does not have any defined HTTP connections.")));
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
      var isHttp = function isHttp(scheme) {
        return scheme === 'http' || scheme === 'https' || _lodash["default"].isEmpty(scheme);
      };

      var connections = this.environment.getConnections(function (item) {
        return isHttp(item.scheme);
      });
      return connections;
    }
  }]);

  return ScEnvironmentHttpConnections;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentHttpConnections, {
  envsStore: _mobx.computed,
  environment: _mobx.computed,
  connections: _mobx.computed,
  processingId: _mobx.observable
});

var _default = (0, _mobxReact.inject)('scEnvironmentsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentHttpConnections)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentHttpConnections.js.map