"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactRouterDom = require("react-router-dom");

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactTable = _interopRequireDefault(require("react-table"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

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

var AwsAccountsList = /*#__PURE__*/function (_React$Component) {
  _inherits(AwsAccountsList, _React$Component);

  var _super = _createSuper(AwsAccountsList);

  function AwsAccountsList(props) {
    var _this;

    _classCallCheck(this, AwsAccountsList);

    _this = _super.call(this, props);

    _this.handleAddAwsAccount = function () {
      _this["goto"]('/aws-accounts/add');
    };

    _this.handleCreateAwsAccount = function () {
      _this["goto"]('/aws-accounts/create');
    };

    _this.state = {};
    (0, _mobx.runInAction)(function () {
      // An object that keeps track of which user is being edited
      // Each key in the object below has key as user's unique id (i.e., uid)
      // and value as flag indicating whether to show the editor for the user
      _this.mapOfUsersBeingEdited = {};
    });
    return _this;
  }

  _createClass(AwsAccountsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var accountsStore = this.props.accountsStore;
      var awsAccountsStore = this.props.awsAccountsStore;
      (0, _utils.swallowError)(accountsStore.load());
      (0, _utils.swallowError)(awsAccountsStore.load());
      accountsStore.startHeartbeat();
      awsAccountsStore.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var accountsStore = this.props.accountsStore;
      var awsAccountsStore = this.props.awsAccountsStore;
      accountsStore.stopHeartbeat();
      awsAccountsStore.stopHeartbeat();
    }
  }, {
    key: "getAwsAccountsStore",
    value: function getAwsAccountsStore() {
      var store = this.props.awsAccountsStore;
      return store;
    }
  }, {
    key: "getAwsAccounts",
    value: function getAwsAccounts() {
      var store = this.getAwsAccountsStore();
      return store.list;
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var _this2 = this;

      var awsAccountsData = this.getAwsAccounts();
      var pageSize = 5;
      var showPagination = awsAccountsData.length > pageSize;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTable["default"], {
        data: awsAccountsData,
        showPagination: showPagination,
        defaultPageSize: pageSize,
        className: "-striped -highlight",
        filterable: true,
        defaultFilterMethod: function defaultFilterMethod(filter, row) {
          var columnValue = String(row[filter.id]).toLowerCase();
          var filterValue = filter.value.toLowerCase();
          return columnValue.indexOf(filterValue) >= 0;
        },
        columns: [{
          Header: 'Account Name',
          accessor: 'name'
        }, {
          Header: 'AWS Account ID',
          accessor: 'accountId'
        }, {
          Header: 'Description',
          accessor: 'description'
        }, {
          Header: 'Role ARN',
          accessor: 'roleArn'
        }, {
          Header: 'External ID',
          accessor: 'externalId'
        }, {
          Header: 'VPC ID',
          accessor: 'vpcId'
        }, {
          Header: 'Subnet ID',
          accessor: 'subnetId'
        }, {
          Header: 'Encryption Key Arn',
          accessor: 'encryptionKeyArn'
        }, {
          Header: 'Budget Configuration',
          filterable: false,
          Cell: (0, _mobxReact.observer)(function (cell) {
            return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
              primary: true,
              compact: true,
              size: "mini",
              onClick: function onClick() {
                return _this2.handleBudgetConfiguration(cell.original.id);
              }
            }, "Budget Detail");
          })
        }]
      }));
    }
  }, {
    key: "goto",
    value: function goto(pathname) {
      var location = this.props.location;
      var link = (0, _routing.createLink)({
        location: location,
        pathname: pathname
      });
      this.props.history.push(link);
    }
  }, {
    key: "handleBudgetConfiguration",
    value: function handleBudgetConfiguration(awsAccountId) {
      this["goto"]("/aws-accounts/budget/".concat(awsAccountId));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "amazon",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "AWS Accounts", this.renderTotal())), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        size: "medium",
        basic: true,
        onClick: this.handleCreateAwsAccount
      }, "Create AWS Account"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        className: "ml2",
        color: "blue",
        size: "medium",
        basic: true,
        onClick: this.handleAddAwsAccount
      }, "Add AWS Account"));
    }
  }, {
    key: "renderTotal",
    value: function renderTotal() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true
      }, this.getAwsAccounts().length);
    }
  }, {
    key: "handleDismiss",
    value: function handleDismiss(id) {
      var accountsStore = this.props.accountsStore;
      accountsStore.removeItem(id);
      this.componentDidMount();
    }
  }, {
    key: "renderCreatingAccountNotification",
    value: function renderCreatingAccountNotification() {
      var _this3 = this;

      var accountsStore = this.props.accountsStore;
      var pendingAccount = accountsStore.listCreatingAccount;
      var errorAccounts = accountsStore.listErrorAccount;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 mb3 animated fadeIn"
      }, pendingAccount.map(function (account) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "circle notched",
          loading: true
        }), "Trying to create accountID: ", account.id);
      }), errorAccounts.map(function (account) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
          onDismiss: function onDismiss() {
            return _this3.handleDismiss(account.id);
          }
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "times",
          color: "red"
        }), "Error happended in creating accountID: ", account.id, ". If the account is created, please contact follow", ' ', /*#__PURE__*/_react["default"].createElement("a", {
          href: "https://aws.amazon.com/blogs/security/aws-organizations-now-supports-self-service-removal-of-accounts-from-an-organization/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "instruction"), ' ', "to remove it. You may close this message after you make sure the account is removed.");
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getAwsAccountsStore();
      var content;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 3
        });
      } else {
        content = this.renderMain();
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 animated fadeIn"
      }, this.renderHeader(), this.renderCreatingAccountNotification(), content);
    }
  }]);

  return AwsAccountsList;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(AwsAccountsList, {
  mapOfUsersBeingEdited: _mobx.observable
});

var _default = (0, _mobxReact.inject)('awsAccountsStore', 'accountsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AwsAccountsList)));

exports["default"] = _default;
//# sourceMappingURL=AwsAccountsList.js.map