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

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _ScEnvironmentConnections = _interopRequireDefault(require("./ScEnvironmentConnections"));

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
// - showDetailButton (via prop)
// - scEnvironmentsStore (via injection)
var ScEnvironmentButtons = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentButtons, _React$Component);

  var _super = _createSuper(ScEnvironmentButtons);

  function ScEnvironmentButtons(props) {
    var _this;

    _classCallCheck(this, ScEnvironmentButtons);

    _this = _super.call(this, props);

    _this.handleViewDetail = function () {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto("/workspaces/id/".concat(_this.environment.id));
    };

    _this.handleTerminate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.handleAction( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var store;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        store = _this.envsStore;
                        _context.next = 3;
                        return store.terminateScEnvironment(_this.environment.id);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    _this.handleStop = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.handleAction( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var store;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        store = _this.envsStore;
                        _context3.next = 3;
                        return store.stopScEnvironment(_this.environment.id);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    _this.handleStart = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this.handleAction( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var store;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        store = _this.envsStore;
                        _context5.next = 3;
                        return store.startScEnvironment(_this.environment.id);

                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              })));

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    _this.handleAction = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(fn) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this.processing = true;
                _context7.prev = 1;
                _context7.next = 4;
                return fn();

              case 4:
                _context7.next = 9;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](1);
                (0, _notification.displayError)(_context7.t0);

              case 9:
                _context7.prev = 9;
                (0, _mobx.runInAction)(function () {
                  _this.processing = false;
                });
                return _context7.finish(9);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 6, 9, 12]]);
      }));

      return function (_x) {
        return _ref7.apply(this, arguments);
      };
    }();

    _this.handleToggle = function () {
      _this.connectionsButtonActive = !_this.connectionsButtonActive;
    };

    (0, _mobx.runInAction)(function () {
      // A flag to indicate if we are processing the call to trigger the terminate action
      _this.processing = false; // A flag to indicate if the connections button is active

      _this.connectionsButtonActive = false;
    });
    return _this;
  }

  _createClass(ScEnvironmentButtons, [{
    key: "canChangeState",
    value: function canChangeState() {
      return this.envsStore.canChangeState(this.environment.id);
    }
  }, {
    key: "render",
    value: function render() {
      var env = this.environment;
      var state = env.state;
      var processing = this.processing;
      var showDetailButton = this.props.showDetailButton;
      var connectionsButtonActive = this.connectionsButtonActive;
      var canConnect = state.canConnect;
      var canStart = state.canStart && this.canChangeState();
      var canStop = state.canStop && this.canChangeState();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix",
        style: {
          minHeight: '42px'
        }
      }, state.canTerminate && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        trigger: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          "data-testid": "sc-env-terminate",
          floated: "right",
          basic: true,
          color: "red",
          size: "mini",
          className: "mt1 mb1",
          loading: processing
        }, "Terminate"),
        header: "Are you sure?",
        content: "This action can not be reverted.",
        actions: ['Cancel', {
          key: 'terminate',
          content: 'Terminate',
          negative: true,
          onClick: this.handleTerminate
        }],
        size: "mini"
      }), canStart && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        "data-testid": "sc-env-start",
        floated: "right",
        basic: true,
        color: "green",
        size: "mini",
        className: "mt1 mb1 ml2",
        onClick: this.handleStart,
        loading: processing
      }, "Start"), canStop && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        "data-testid": "sc-env-stop",
        floated: "right",
        basic: true,
        color: "green",
        size: "mini",
        className: "mt1 mb1 ml2",
        onClick: this.handleStop,
        loading: processing
      }, "Stop"), canConnect && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "left",
        basic: true,
        size: "mini",
        className: "mt1 mb1",
        toggle: true,
        active: connectionsButtonActive,
        onClick: this.handleToggle
      }, "Connections"), showDetailButton && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "left",
        basic: true,
        size: "mini",
        className: "mt1 mb1 ml2",
        onClick: this.handleViewDetail
      }, "View Detail")), canConnect && connectionsButtonActive && /*#__PURE__*/_react["default"].createElement(_ScEnvironmentConnections["default"], {
        scEnvironment: env
      }));
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

  return ScEnvironmentButtons;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentButtons, {
  envsStore: _mobx.computed,
  environment: _mobx.computed,
  processing: _mobx.observable,
  connectionsButtonActive: _mobx.observable,
  handleViewDetail: _mobx.action,
  handleAction: _mobx.action,
  handleToggle: _mobx.action
});

var _default = (0, _mobxReact.inject)('scEnvironmentsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentButtons)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentButtons.js.map