"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _reactRouterDom = require("react-router-dom");

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

var _semanticUiReact = require("semantic-ui-react");

var _reactDotdotdot = _interopRequireDefault(require("react-dotdotdot"));

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _EnvironmentStatusIcon = _interopRequireDefault(require("./EnvironmentStatusIcon"));

var _By = _interopRequireDefault(require("../helpers/By"));

var _EnvironmentConnectButton = _interopRequireDefault(require("./EnvironmentConnectButton"));

var _localStorageKeys = _interopRequireDefault(require("../../models/constants/local-storage-keys"));

var _sagemakerNotebookIcon = _interopRequireDefault(require("../../../images/marketplace/sagemaker-notebook-icon.svg"));

var _emrIcon = _interopRequireDefault(require("../../../images/marketplace/emr-icon.svg"));

var _ec2Icon = _interopRequireDefault(require("../../../images/marketplace/ec2-icon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UPDATE_INTERVAL_MS = 20000; // expected props
// - environment - a Environment model instance (via props)
// - userDisplayName (via injection)
// - location (from react router)

var EnvironmentCard = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvironmentCard, _React$Component);

  var _super = _createSuper(EnvironmentCard);

  function EnvironmentCard(props) {
    var _this;

    _classCallCheck(this, EnvironmentCard);

    _this = _super.call(this, props);

    _this.checkExternalUpdate = function (environment, user) {
      var pin = _utils.storage.getItem(_localStorageKeys["default"].pinToken); // Confirm if the stack still needs to be checked


      if (!(environment.isExternal && environment.isPending && user.isExternalUser)) {
        clearInterval(_this.intervalId);
        return;
      }

      if (!_lodash["default"].isEmpty(pin)) {
        _this.getStore().updateExternalEnvironment(environment, user, pin);
      }
    };

    _this.handleTerminateEnvironment = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var cleanTerminationState, store;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();

                cleanTerminationState = function cleanTerminationState() {
                  (0, _mobx.runInAction)(function () {
                    _this.shouldShowTerminateDialog = false;
                    _this.terminationInProgress = false;
                  });
                };

                _context.prev = 3;
                (0, _mobx.runInAction)(function () {
                  _this.terminationInProgress = true;
                });
                store = _this.getStore();
                _context.next = 8;
                return store.deleteEnvironment(_this.getEnvironment(), _this.props.user, _utils.storage.getItem(_localStorageKeys["default"].pinToken));

              case 8:
                cleanTerminationState();
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                cleanTerminationState();
                (0, _notification.displayError)(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleStopEnvironment = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
        var store;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                _context2.prev = 2;
                store = _this.getStore();
                _context2.next = 6;
                return store.stopEnvironment(_this.getEnvironment());

              case 6:
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                (0, _notification.displayError)(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleStartEnvironment = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
        var store;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                _context3.prev = 2;
                store = _this.getStore();
                _context3.next = 6;
                return store.startEnvironment(_this.getEnvironment());

              case 6:
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](2);
                (0, _notification.displayError)(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.showTerminateDialog = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                _this.shouldShowTerminateDialog = true;
                _this.terminationInProgress = false;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.hideTerminateDialog = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(event) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();

                if (!_this.terminationInProgress) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return");

              case 4:
                _this.shouldShowTerminateDialog = false;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.shouldShowTerminateDialog = false;
      _this.terminationInProgress = false;
    });
    return _this;
  }

  _createClass(EnvironmentCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var environment = this.getEnvironment();
      environment.setFetchingUrl(false);

      if (environment.isExternal && environment.isPending && this.props.user.isExternalUser) {
        // TODO abstract this workflow to be used elsewhere
        // Call checkExternalUpdate every minute
        this.intervalId = setInterval(this.checkExternalUpdate, UPDATE_INTERVAL_MS, environment, this.props.user);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "renderTerminateDialog",
    value: function renderTerminateDialog(environment) {
      var shouldShowTerminateDialog = this.shouldShowTerminateDialog;
      var name = environment.name;
      var progress = this.terminationInProgress;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        open: shouldShowTerminateDialog,
        size: "tiny",
        onClose: this.hideTerminateDialog,
        closeOnDimmerClick: !progress
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        content: "Terminate Environment"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, /*#__PURE__*/_react["default"].createElement("p", null, "Are you sure you want to terminate environment \"", name, "\" ?")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        disabled: progress,
        onClick: this.hideTerminateDialog
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        loading: progress,
        disabled: progress,
        color: "red",
        onClick: this.handleTerminateEnvironment
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "remove"
      }), " Terminate")));
    }
  }, {
    key: "getEnvironment",
    value: function getEnvironment() {
      return this.props.environment;
    }
  }, {
    key: "getStore",
    value: function getStore() {
      return this.props.environmentsStore;
    }
  }, {
    key: "getUserDisplayNameService",
    value: function getUserDisplayNameService() {
      return this.props.userDisplayName;
    }
  }, {
    key: "getIcon",
    value: function getIcon(type) {
      switch (type) {
        case 'sagemaker':
          return _sagemakerNotebookIcon["default"];

        case 'emr':
          return _emrIcon["default"];

        case 'ec2-linux':
        case 'ec2-windows':
          return _ec2Icon["default"];

        default:
          return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.getEnvironment();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex"
      }, this.renderLeftCard(item), this.renderRightCard(item), this.renderTerminateDialog(item));
    }
  }, {
    key: "renderLeftCard",
    value: function renderLeftCard(env) {
      var name = env.name,
          description = env.description,
          createdAt = env.createdAt,
          createdBy = env.createdBy,
          fetchingUrl = env.fetchingUrl,
          status = env.status,
          instanceInfo = env.instanceInfo;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-auto"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Image, {
        src: this.getIcon(instanceInfo.type),
        className: "mt0 mr1",
        style: {
          maxHeight: '24px',
          maxWidth: '24px'
        }
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        color: "grey",
        className: "mt0 flex-auto"
      }, name), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        className: "flex-auto basic",
        style: {
          border: 0
        }
      }, status === 'COMPLETED' && (instanceInfo.type === 'sagemaker' || instanceInfo.type === 'emr') && /*#__PURE__*/_react["default"].createElement(_EnvironmentConnectButton["default"], {
        as: _semanticUiReact.Label,
        user: this.props.user,
        environment: env,
        size: "mini",
        color: "green"
      }, fetchingUrl ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Connecting", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        loading: true,
        name: "spinner",
        size: "small",
        className: "ml1 mr1"
      })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Connect"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        className: "flex-auto basic",
        style: {
          border: 0
        }
      }, /*#__PURE__*/_react["default"].createElement(_EnvironmentStatusIcon["default"], {
        environment: env
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml3 mb2 mt2 breakout"
      }, "created ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: createdAt
      }), " ", /*#__PURE__*/_react["default"].createElement(_By["default"], {
        user: createdBy
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml3 mb2 mt2 breakout"
      }, /*#__PURE__*/_react["default"].createElement(_reactDotdotdot["default"], {
        clamp: 3
      }, description)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml3 mb2 mt2 breakout bold"
      }, "Yesterday's Research Workspace Cost: $", this.getCostInPastDay(env.costs)));
    }
  }, {
    key: "getCostInPastDay",
    value: function getCostInPastDay(costInfo) {
      if (_lodash["default"].isEmpty(costInfo)) {
        return 0;
      }

      var costsForLatestDate = costInfo[costInfo.length - 1].cost;
      var total = 0;
      costsForLatestDate.forEach(function (service) {
        total += service.amount;
      });
      return total.toFixed(2);
    }
  }, {
    key: "renderRightCard",
    value: function renderRightCard(environment) {
      var displayNameService = this.getUserDisplayNameService();

      var sharedWithUsernames = _lodash["default"].map(environment.sharedWithUsers, 'username');

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "border-left border-grey pl2 ml2"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1 fs-9"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "bold  inline-block"
      }, "Research Workspace Owners"), ' ', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true,
        size: "mini",
        color: "blue"
      }, 1)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "fs-9"
      }, /*#__PURE__*/_react["default"].createElement(_reactDotdotdot["default"], {
        clamp: 1
      }, displayNameService.getLongDisplayName(environment.createdBy))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 fs-9"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "bold  inline-block"
      }, "Research Workspace Shared Users"), ' ', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true,
        size: "mini"
      }, sharedWithUsernames.length)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "fs-9"
      }, /*#__PURE__*/_react["default"].createElement(_reactDotdotdot["default"], {
        clamp: 1
      }, sharedWithUsernames.join(', '))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 fs-9"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "bold  inline-block"
      }, "Project"), ' '), /*#__PURE__*/_react["default"].createElement("div", {
        className: "fs-9 mb2"
      }, /*#__PURE__*/_react["default"].createElement(_reactDotdotdot["default"], {
        clamp: 1
      }, environment.projectId)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb1 mt5 breakout flex-auto"
      }, this.renderStopButton(environment), this.renderStartButton(environment), this.renderTerminateButton(environment)));
    }
  }, {
    key: "renderTerminateButton",
    value: function renderTerminateButton(environment) {
      var terminateButton;

      if (environment.isCompleted || environment.isStopped) {
        terminateButton = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          color: "red",
          className: "cursor-pointer",
          "data-id": environment.id,
          onClick: this.showTerminateDialog
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "minus circle"
        }), "Terminate");
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, terminateButton);
    }
  }, {
    key: "renderStopButton",
    value: function renderStopButton(environment) {
      var stopButton; // Only the environment types listed here currently have the start/stop functionality

      var validEnvTypes = ['ec2-windows', 'ec2-linux', 'sagemaker']; // Render button if Environment can be stopped AND prevent admins from attempting to terminate external envs

      if (environment.isCompleted && !(this.props.user.isAdmin && environment.isExternal) && _lodash["default"].includes(validEnvTypes, environment.instanceInfo.type)) {
        stopButton = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          color: "orange",
          className: "cursor-pointer",
          "data-id": environment.id,
          onClick: this.handleStopEnvironment
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "power"
        }), "Stop");
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, stopButton);
    }
  }, {
    key: "renderStartButton",
    value: function renderStartButton(environment) {
      var startButton; // Render button if Environment can be stpped AND prevent admins from attempting to terminate external envs

      if (environment.isStopped && !(this.props.user.isAdmin && environment.isExternal)) {
        startButton = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          color: "green",
          className: "cursor-pointer",
          "data-id": environment.id,
          onClick: this.handleStartEnvironment
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "power"
        }), "Start");
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, startButton);
    }
  }]);

  return EnvironmentCard;
}(_react["default"].Component); // Using MobX-4 to decorate here


(0, _mobx.decorate)(EnvironmentCard, {
  showTerminateDialog: _mobx.action,
  hideTerminateDialog: _mobx.action,
  handleStartEnvironment: _mobx.action,
  handleStopEnvironment: _mobx.action,
  shouldShowTerminateDialog: _mobx.observable,
  terminationInProgress: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userDisplayName')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvironmentCard)));

exports["default"] = _default;
//# sourceMappingURL=EnvironmentCard.js.map