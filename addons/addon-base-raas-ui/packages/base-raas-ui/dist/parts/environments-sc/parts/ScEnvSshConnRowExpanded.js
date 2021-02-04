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
// networkInterfaces (via props)
// keyName (via props)
// connectionId (via props)
var ScEnvSshConnRowExpanded = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvSshConnRowExpanded, _React$Component);

  var _super = _createSuper(ScEnvSshConnRowExpanded);

  function ScEnvSshConnRowExpanded(props) {
    var _this;

    _classCallCheck(this, ScEnvSshConnRowExpanded);

    _this = _super.call(this, props);

    _this.startCountDown = function () {
      if (!_lodash["default"].isUndefined(_this.intervalId)) return;
      _this.countDown = 60;
      _this.intervalId = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-next-line consistent-return
                (0, _mobx.runInAction)(function () {
                  if (_this.countDown <= 0) {
                    _this.clearInterval();

                    _this.expired = true;
                    return;
                  }

                  _this.countDown -= 1;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), 1000);
    };

    (0, _mobx.runInAction)(function () {
      // The count down value
      _this.countDown = undefined;
      _this.intervalId = undefined;
      _this.expired = false;
    });
    return _this;
  }

  _createClass(ScEnvSshConnRowExpanded, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCountDown();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearInterval();
    }
  }, {
    key: "clearInterval",
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      if (!_lodash["default"].isUndefined(this.intervalId)) {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }

      this.countDown = undefined;
      this.expired = false;
    })
  }, {
    key: "render",
    value: function render() {
      var connectionId = this.connectionId;
      var keyName = this.keyName;
      var interfaces = this.networkInterfaces;
      var example = "ssh -i '".concat(keyName, ".pem' ec2-user@").concat(_lodash["default"].get(_lodash["default"].first(interfaces), 'value'));
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
        key: connectionId,
        className: "fadeIn animated"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        colSpan: "3",
        className: "p3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        columns: 2,
        stackable: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Row, {
        stretched: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        width: 12
      }, this.renderInfo()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        width: 4
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "w-100 overflow-hidden"
      }, this.renderCountDown()))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, "Example:", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "mt2"
      }, example, " ", /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
        text: example,
        className: "ml2 mt0"
      })))));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo() {
      var _this2 = this;

      var interfaces = this.networkInterfaces;
      var moreThanOne = _lodash["default"].size(interfaces) > 1;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("b", null, "You'll need two pieces of information to connect to this research workspace."), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        bulleted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The IP Address or DNS of the instance.", ' ', moreThanOne ? 'Ask your administrator if you are not sure which one to use:' : '', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, null, _lodash["default"].map(interfaces, function (network) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
          key: network.value,
          className: "flex"
        }, _this2.renderHostLabel(network), /*#__PURE__*/_react["default"].createElement(_CopyToClipboard["default"], {
          text: network.value
        }));
      }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "The SSH private key. You downloaded the private key when you created the SSH key.")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, "Connecting to your research workspace depends on the operating system you are connecting from."), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        bulleted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
        href: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Connecting from MacOS or Linux via SSH"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
        href: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Connecting from Windows via Putty")));
    }
  }, {
    key: "renderCountDown",
    value: function renderCountDown() {
      var expired = this.expired;
      var countDown = this.countDown;

      if (expired) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "center color-red"
        }, "The time window to connect has expired. To reset it, click on the ", /*#__PURE__*/_react["default"].createElement("b", {
          className: "fs-9"
        }, "Use this SSH Key"), ' ', "button again.");
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb1"
      }, "You have ", /*#__PURE__*/_react["default"].createElement("br", null), " ", /*#__PURE__*/_react["default"].createElement("b", null, countDown), " ", /*#__PURE__*/_react["default"].createElement("br", null), " seconds to connect"));
    }
  }, {
    key: "renderHostLabel",
    value: function renderHostLabel(network) {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, null, "Host", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label.Detail, null, network.value, " ", /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-7 pl1"
      }, "(", network.info, ")")));
    }
  }, {
    key: "networkInterfaces",
    get: function get() {
      var entries = this.props.networkInterfaces;
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
  }, {
    key: "keyName",
    get: function get() {
      return this.props.keyName;
    }
  }, {
    key: "connectionId",
    get: function get() {
      return this.props.connectionId;
    }
  }]);

  return ScEnvSshConnRowExpanded;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvSshConnRowExpanded, {
  networkInterfaces: _mobx.computed,
  keyName: _mobx.computed,
  connectionId: _mobx.computed,
  intervalId: _mobx.observable,
  countDown: _mobx.observable,
  expired: _mobx.observable,
  startCountDown: _mobx.action,
  clearInterval: _mobx.action
});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvSshConnRowExpanded)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvSshConnRowExpanded.js.map