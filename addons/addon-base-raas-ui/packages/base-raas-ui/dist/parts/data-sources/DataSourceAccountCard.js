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

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _By = _interopRequireDefault(require("../helpers/By"));

var _DataSourceStudiesList = _interopRequireDefault(require("./DataSourceStudiesList"));

var _DataSourceAccountCfn = _interopRequireDefault(require("./DataSourceAccountCfn"));

var _DataSourceAccountInfo = _interopRequireDefault(require("./DataSourceAccountInfo"));

var _Operation = require("../../models/helpers/Operation");

var _AccountConnectionPanel = _interopRequireDefault(require("./parts/AccountConnectionPanel"));

var _AccountStatusMessage = _interopRequireDefault(require("./parts/AccountStatusMessage"));

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

// This component is used with the TabPane to replace the default Segment wrapper since
// we don't want to display the border.
// eslint-disable-next-line react/prefer-stateless-function
var TabPaneWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(TabPaneWrapper, _React$Component);

  var _super = _createSuper(TabPaneWrapper);

  function TabPaneWrapper() {
    _classCallCheck(this, TabPaneWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(TabPaneWrapper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.children);
    }
  }]);

  return TabPaneWrapper;
}(_react["default"].Component); // expected props
// - account (via prop)
// - dataSourceAccountsStore (via injection)


var DataSourceAccountCard = /*#__PURE__*/function (_React$Component2) {
  _inherits(DataSourceAccountCard, _React$Component2);

  var _super2 = _createSuper(DataSourceAccountCard);

  function DataSourceAccountCard(props) {
    var _this;

    _classCallCheck(this, DataSourceAccountCard);

    _this = _super2.call(this, props);

    _this.handleCheckConnection = function () {
      _this.connectionPanel.show = true;
      var account = _this.account;
      var accountsStore = _this.accountsStore;
      var operation = _this.connectionPanel.operation;

      var doWork = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return accountsStore.checkAccountReachability(account.id);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function doWork() {
          return _ref.apply(this, arguments);
        };
      }();

      (0, _utils.swallowError)(operation.run(doWork));
    };

    _this.handleDismissPanel = function () {
      _this.connectionPanel.show = false;
    };

    (0, _mobx.runInAction)(function () {
      _this.expanded = false;
      _this.connectionPanel = {
        show: false,
        operation: _Operation.Operation.create({})
      };
    });
    return _this;
  }

  _createClass(DataSourceAccountCard, [{
    key: "getAccountStore",
    value: function getAccountStore() {
      var accountsStore = this.accountsStore;
      var account = this.account || {};
      return accountsStore.getAccountStore(account.id);
    }
  }, {
    key: "render",
    value: function render() {
      var account = this.account;
      var operation = this.connectionPanel.operation;
      var showPanel = this.connectionPanel.show;
      var reachable = account.reachableState;
      var hasMsg = !_lodash["default"].isEmpty(account.statusMessageInfo.message);
      var showMsg = !showPanel && (!reachable || reachable && hasMsg);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        size: "mini",
        floated: "right",
        color: "brown",
        basic: true,
        onClick: this.handleCheckConnection
      }, "Test Connection"), this.renderTitle(account), this.renderStatus(account), showMsg && /*#__PURE__*/_react["default"].createElement(_AccountStatusMessage["default"], {
        account: account
      }), showPanel && /*#__PURE__*/_react["default"].createElement(_AccountConnectionPanel["default"], {
        account: account,
        operation: operation,
        onCancel: this.handleDismissPanel
      }), this.renderStackMismatch(account), this.renderTabs());
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var getMenuItemLabel = function getMenuItemLabel() {
        var store = _this2.getAccountStore();

        var emptySpan = null;
        if (!store) return emptySpan;
        if ((0, _BaseStore.isStoreError)(store)) return emptySpan;
        if ((0, _BaseStore.isStoreNew)(store)) return emptySpan;
        if ((0, _BaseStore.isStoreLoading)(store)) return emptySpan;
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, null, (0, _utils.niceNumber)(store.studiesTotal));
      };

      var account = this.account;
      var panes = [{
        menuItem: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, {
          key: "studies"
        }, "Studies ", getMenuItemLabel()),
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            attached: false,
            key: "studies",
            as: TabPaneWrapper
          }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
            return /*#__PURE__*/_react["default"].createElement(_DataSourceStudiesList["default"], {
              account: account
            });
          }));
        }
      }, {
        menuItem: 'CloudFormation',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            attached: false,
            key: "cloudformation",
            as: TabPaneWrapper
          }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
            return /*#__PURE__*/_react["default"].createElement(_DataSourceAccountCfn["default"], {
              account: account
            });
          }));
        }
      }, {
        menuItem: 'Account Information',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            attached: false,
            key: "accountInfo",
            as: TabPaneWrapper
          }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
            return /*#__PURE__*/_react["default"].createElement(_DataSourceAccountInfo["default"], {
              account: account
            });
          }));
        }
      }];
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab, {
        className: "mt2",
        menu: {
          secondary: true,
          pointing: true
        },
        renderActiveOnly: true,
        panes: panes
      });
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(account) {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "mt3 breakout"
      }, account.name, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey mr1"
      }, "Registered ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: account.createdAt
      }), " ", /*#__PURE__*/_react["default"].createElement(_By["default"], {
        uid: account.createdBy,
        className: "mr1"
      }), "\u2014"), /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey mr1"
      }, "Status checked ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: account.statusAt,
        className: "mr1"
      }), "\u2014"), /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey"
      }, "AWS Account # ", account.id)));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus(account) {
      var state = account.state;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        attached: "top left",
        size: "mini",
        color: state.color
      }, state.display);
    }
  }, {
    key: "renderStackMismatch",
    value: function renderStackMismatch(account) {
      var stackOutDated = account.stackOutDated;
      var incorrectStackNameProvisioned = account.incorrectStackNameProvisioned;
      if (!stackOutDated && !incorrectStackNameProvisioned) return null;

      if (incorrectStackNameProvisioned) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
          warning: true
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Incorrect stack name"), /*#__PURE__*/_react["default"].createElement("p", null, "It seems that the correct CloudFormation stack was deployed to AWS account ", /*#__PURE__*/_react["default"].createElement("b", null, account.id), " but with an incorrect stack name. Please ensure that you have the latest CloudFormation template deployed with the stack name ", account.stack, " in the account. If you just updated the stack you can run the connection test again."));
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        warning: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Stack is outdated"), /*#__PURE__*/_react["default"].createElement("p", null, "It seems that the CloudFormation stack ", account.stack, " deployed to AWS account ", /*#__PURE__*/_react["default"].createElement("b", null, account.id), " is outdated and does not contain the latest changes made. Please use the latest CloudFormation template to update the stack. If you just updated the stack you can run the connection test again."));
    }
  }, {
    key: "account",
    get: function get() {
      return this.props.account;
    }
  }, {
    key: "accountsStore",
    get: function get() {
      return this.props.dataSourceAccountsStore;
    }
  }]);

  return DataSourceAccountCard;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(DataSourceAccountCard, {
  accountsStore: _mobx.computed,
  account: _mobx.computed,
  handleCheckConnection: _mobx.action,
  handleDismissPanel: _mobx.action,
  connectionPanel: _mobx.observable
});

var _default = (0, _mobxReact.inject)('dataSourceAccountsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(DataSourceAccountCard)));

exports["default"] = _default;
//# sourceMappingURL=DataSourceAccountCard.js.map