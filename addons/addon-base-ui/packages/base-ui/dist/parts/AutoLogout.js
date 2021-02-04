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

var _reactIdleTimer = _interopRequireDefault(require("react-idle-timer"));

var _settings = require("../helpers/settings");

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
// - authentication
// - app
var AutoLogout = /*#__PURE__*/function (_React$Component) {
  _inherits(AutoLogout, _React$Component);

  var _super = _createSuper(AutoLogout);

  function AutoLogout(props) {
    var _this;

    _classCallCheck(this, AutoLogout);

    _this = _super.call(this, props);

    _this.startDialogCountDown = function () {
      if (!_lodash["default"].isUndefined(_this.intervalId)) return;
      _this.dialogCountDown = 60;
      _this.intervalId = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-next-line consistent-return
                (0, _mobx.runInAction)(function () {
                  if (_this.dialogCountDown <= 0) {
                    return _this.doLogout();
                  }

                  _this.dialogCountDown -= 1;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), 1000);
    };

    _this.cancelDialogCountDown = function () {
      _this.clearInterval();
    };

    _this.doLogout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.clearInterval();

              return _context2.abrupt("return", _this.authentication.logout({
                autoLogout: true
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    _this.handleLogout = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                return _context3.abrupt("return", _this.doLogout());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.dialogCountDown = undefined;
      _this.intervalId = undefined;
    });
    return _this;
  }

  _createClass(AutoLogout, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
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

      this.dialogCountDown = undefined;
    })
  }, {
    key: "render",
    value: function render() {
      var authenticated = this.app.userAuthenticated;
      if (!authenticated) return null;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactIdleTimer["default"], {
        timeout: 1000 * 60 * _settings.autoLogoutTimeoutInMinutes,
        onIdle: this.startDialogCountDown
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        open: this.modalOpen,
        closeOnEscape: false,
        closeOnDimmerClick: false,
        centered: false
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Header, null, "Are you still there?"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, {
        className: "center"
      }, /*#__PURE__*/_react["default"].createElement("div", null, "For security purposes, you will be logged out in"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h1"
      }, this.dialogCountDown), /*#__PURE__*/_react["default"].createElement("div", null, "seconds")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        primary: true,
        content: "Keep Me Logged In",
        onClick: this.cancelDialogCountDown
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        content: "Log Out",
        onClick: this.handleLogout
      }))));
    }
  }, {
    key: "app",
    get: function get() {
      return this.props.app;
    }
  }, {
    key: "authentication",
    get: function get() {
      return this.props.authentication;
    }
  }, {
    key: "modalOpen",
    get: function get() {
      return this.dialogCountDown >= 0;
    }
  }]);

  return AutoLogout;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(AutoLogout, {
  app: _mobx.computed,
  authentication: _mobx.computed,
  modalOpen: _mobx.computed,
  intervalId: _mobx.observable,
  dialogCountDown: _mobx.observable,
  startDialogCountDown: _mobx.action,
  doLogout: _mobx.action,
  handleLogout: _mobx.action,
  cancelDialogCountDown: _mobx.action,
  clearInterval: _mobx.action
});

var _default = (0, _mobxReact.inject)('authentication', 'app')((0, _mobxReact.observer)(AutoLogout));

exports["default"] = _default;
//# sourceMappingURL=AutoLogout.js.map