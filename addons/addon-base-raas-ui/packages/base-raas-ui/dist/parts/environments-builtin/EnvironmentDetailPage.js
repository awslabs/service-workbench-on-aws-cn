"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _reactRouterDom = require("react-router-dom");

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

var _semanticUiReact = require("semantic-ui-react");

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _crypto = _interopRequireDefault(require("crypto"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _EnvironmentStatusIcon = _interopRequireDefault(require("./EnvironmentStatusIcon"));

var _By = _interopRequireDefault(require("../helpers/By"));

var _EnvironmentConnectButton = _interopRequireDefault(require("./EnvironmentConnectButton"));

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ErrorInfo = function ErrorInfo(_ref) {
  var environment = _ref.environment;

  var _React$useState = _react["default"].useState(function () {
    return false;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1]; // if (!environment.error) {
  //   environment.getEnvironmentError();
  // }


  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, "This research workspace encountered an ", environment.error ? 'error' : 'unknown error', ".", environment.error ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion.Title, {
    active: visible,
    index: 0,
    onClick: function onClick() {
      return setVisible(function (s) {
        return !s;
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
    name: "dropdown"
  }), "Detailed error information"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion.Content, {
    active: visible
  }, /*#__PURE__*/_react["default"].createElement("p", null, environment.error))) : null);
}; // expected props
// - environmentsStore (via injection)
// - userStore (via injection)
// - location (from react router)


var EnvironmentDetailPage = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvironmentDetailPage, _React$Component);

  var _super = _createSuper(EnvironmentDetailPage);

  function EnvironmentDetailPage(props) {
    var _this;

    _classCallCheck(this, EnvironmentDetailPage);

    _this = _super.call(this, props);

    _this.handleSharedWithUsersSelection = function (e, _ref2) {
      var value = _ref2.value;
      _this.updateSharedWithUsers = value.map(function (item) {
        return JSON.parse(item);
      });
    };

    _this.handleSubmitSharedWithUsersClick = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var environment, updateEnvironment;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                environment = _this.getEnvironment();
                (0, _mobx.runInAction)(function () {
                  _this.formProcessing = true;
                });
                updateEnvironment = {
                  id: environment.id,
                  sharedWithUsers: _this.updateSharedWithUsers
                };
                _context.prev = 5;
                _context.next = 8;
                return _this.props.environmentsStore.updateEnvironment(updateEnvironment);

              case 8:
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](5);
                (0, _mobx.runInAction)(function () {
                  _this.formProcessing = false;
                });
                (0, _notification.displayError)(_context.t0);

              case 14:
                (0, _mobx.runInAction)(function () {
                  _this.formProcessing = false;
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 10]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.handleKeyPairRequest = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
        var environment, keyPair, downloadLink;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                environment = _this.getEnvironment();
                _context2.next = 5;
                return environment.getKeyPair();

              case 5:
                keyPair = _context2.sent;
                downloadLink = document.createElement('a');
                downloadLink.setAttribute('href', "data:application/octet-stream,".concat(encodeURIComponent(keyPair.privateKey)));
                downloadLink.setAttribute('download', "".concat(environment.id, ".pem"));
                downloadLink.click();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.handleWindowsPasswordRequest = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
        var environment, _yield$environment$ge, _yield$environment$ge2, privateKey, passwordData, password;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                (0, _mobx.runInAction)(function () {
                  _this.windowsPassword = 'loading';
                });
                environment = _this.getEnvironment();
                _context3.next = 5;
                return environment.getWindowsPassword();

              case 5:
                _yield$environment$ge = _context3.sent;
                _yield$environment$ge2 = _slicedToArray(_yield$environment$ge, 2);
                privateKey = _yield$environment$ge2[0].privateKey;
                passwordData = _yield$environment$ge2[1].passwordData;
                password = _crypto["default"].privateDecrypt({
                  key: privateKey,
                  padding: _crypto["default"].constants.RSA_PKCS1_PADDING
                }, Buffer.from(passwordData, 'base64')).toString('utf8');
                (0, _mobx.runInAction)(function () {
                  _this.windowsPassword = password;
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.updateSharedWithUsers = [];
      _this.formProcessing = false;
    });
    return _this;
  }

  _createClass(EnvironmentDetailPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getInstanceStore();
      (0, _utils.swallowError)(store.load());
      store.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.getInstanceStore();
      store.stopHeartbeat();
    }
  }, {
    key: "getInstanceStore",
    value: function getInstanceStore() {
      var instanceId = this.getInstanceId();
      return this.props.environmentsStore.getEnvironmentStore(instanceId);
    }
  }, {
    key: "getUserStore",
    value: function getUserStore() {
      return this.props.userStore;
    }
  }, {
    key: "getUser",
    value: function getUser() {
      var store = this.getUserStore();
      if (!(0, _BaseStore.isStoreReady)(store)) return {};
      return store.user;
    }
  }, {
    key: "getInstanceId",
    value: function getInstanceId() {
      return (this.props.match.params || {}).instanceId;
    }
  }, {
    key: "getEnvironment",
    value: function getEnvironment() {
      var store = this.getInstanceStore();
      if (!(0, _BaseStore.isStoreReady)(store)) return {};
      return store.environment;
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getInstanceStore();
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "p0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else if ((0, _BaseStore.isStoreReady)(store)) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3"
      }, this.renderBreadcrumb(), content);
    }
  }, {
    key: "renderBreadcrumb",
    value: function renderBreadcrumb() {
      var instanceId = this.getInstanceId();

      var _goto = (0, _routing.gotoFn)(this);

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb, {
        className: "block mb3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb.Section, {
        link: true,
        onClick: function onClick() {
          return _goto('/workspaces');
        }
      }, "Research Workspaces"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb.Divider, {
        icon: "right angle"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb.Section, {
        active: true
      }, instanceId));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var instance = this.getEnvironment();
      var id = instance.id,
          name = instance.name,
          updatedAt = instance.updatedAt,
          updatedBy = instance.updatedBy;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex mb2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        color: "grey",
        className: "mt0 flex-auto ellipsis"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "flex justify-between"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        color: "blue",
        className: "ml0 mr1"
      }, "Research Workspace"), name, " - ", id), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_EnvironmentStatusIcon["default"], {
        environment: instance
      }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
        className: "fs-9 color-grey mt1"
      }, /*#__PURE__*/_react["default"].createElement("div", null, "updated ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: updatedAt
      }), " ", /*#__PURE__*/_react["default"].createElement(_By["default"], {
        uid: updatedBy
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3"
      }, this.renderTabs()));
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var environment = this.getEnvironment();

      if (environment.isCompleted) {
        return this.renderCompletedTabs();
      }

      if (environment.isStopped) {
        return this.renderStoppedTabs();
      }

      if (environment.isError) {
        return /*#__PURE__*/_react["default"].createElement(ErrorInfo, {
          environment: environment
        });
      }

      if (environment.isTerminated) {
        return this.renderTerminateInfo();
      }

      return this.renderPendingInfo();
    }
  }, {
    key: "renderCostDetailsTabPane",
    value: function renderCostDetailsTabPane() {
      var _this2 = this;

      return {
        menuItem: 'Research Workspace Details',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            attached: false
          }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
            return _this2.renderInstanceDetails();
          }));
        }
      };
    }
  }, {
    key: "renderCompletedTabs",
    value: function renderCompletedTabs() {
      var _this3 = this;

      var environment = this.getEnvironment();
      var panes = [{
        menuItem: 'Security',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            attached: false
          }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
            switch (environment.instanceInfo.type) {
              case 'ec2-rstudio':
                return _this3.renderRStudioSecurity();

              case 'ec2-linux':
                return _this3.renderEc2LinuxSecurity();

              case 'ec2-windows':
                return _this3.renderEc2WindowsSecurity();

              case 'sagemaker':
                return _this3.renderSagemakerSecurity();

              case 'emr':
                return _this3.renderEmrSecurity();

              default:
                return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
                  placeholder: true
                }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
                  icon: true,
                  className: "color-grey"
                }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
                  name: "hdd"
                }), "Security"));
            }
          }));
        }
      }, this.renderCostDetailsTabPane(), this.renderUserShareTabPane()];
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab, {
        menu: {
          secondary: true,
          pointing: true
        },
        panes: panes
      });
    }
  }, {
    key: "renderInstanceDetails",
    value: function renderInstanceDetails() {
      return this.renderCostInfo();
    }
  }, {
    key: "renderCostInfo",
    value: function renderCostInfo() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "center"
      }, " Daily Costs"), this.renderCostTable());
    }
  }, {
    key: "renderUserShareTabPane",
    value: function renderUserShareTabPane() {
      var _this4 = this;

      var environment = this.getEnvironment();
      var uid = environment.createdBy;
      var sharedWithUsersDropDownOptions = this.props.usersStore.asDropDownOptions().filter(function (item) {
        return !(item.value === uid);
      });
      return {
        menuItem: 'Sharing',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            attached: false
          }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
            return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, /*#__PURE__*/_react["default"].createElement("h2", {
              className: "center"
            }, "Share with Users"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dropdown, {
              options: sharedWithUsersDropDownOptions,
              defaultValue: environment.sharedWithUsers.map(function (item) {
                return item.id;
              }),
              fluid: true,
              multiple: true,
              selection: true,
              search: true,
              placeholder: "Select other users you want to share this environment",
              disabled: _this4.formProcessing,
              onChange: _this4.handleSharedWithUsersSelection
            }), /*#__PURE__*/_react["default"].createElement("div", {
              className: "mb2"
            }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
              color: "blue",
              disabled: _this4.formProcessing,
              onClick: _this4.handleSubmitSharedWithUsersClick
            }, "Update"));
          }));
        }
      };
    }
  }, {
    key: "renderStoppedTabs",
    value: function renderStoppedTabs() {
      var panes = [this.renderUserShareTabPane(), this.renderCostDetailsTabPane()];
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab, {
        menu: {
          secondary: true,
          pointing: true
        },
        panes: panes
      });
    }
  }, {
    key: "renderCostTable",
    value: function renderCostTable() {
      // Convert from mobx obj to normal obj
      var environment = JSON.parse(JSON.stringify(this.getEnvironment()));
      var costHeadings = [];
      var rows = [];
      environment.costs.forEach(function (costItemGivenADate) {
        var cost = costItemGivenADate.cost;
        var headings = Object.keys(cost);
        costHeadings.push(headings);
        var rowValues = {};
        rowValues.date = costItemGivenADate.startDate;
        var total = 0;
        headings.forEach(function (heading) {
          var amount = cost[heading].amount;
          rowValues[heading] = amount.toFixed(2);
          total += amount;
        });
        rowValues.total = total.toFixed(2);
        rows.push(rowValues);
      });
      costHeadings = _lodash["default"].flatten(costHeadings);
      costHeadings = _lodash["default"].uniq(costHeadings);
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        celled: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Date"), costHeadings.map(function (header) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
          key: header
        }, header);
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Total"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, rows.map(function (row) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: row.date
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, row.date), costHeadings.map(function (header) {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
            key: row
          }, "$", _lodash["default"].get(row, header, 0));
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, "$", row.total));
      })));
    }
  }, {
    key: "renderTerminateInfo",
    value: function renderTerminateInfo() {
      var environment = this.getEnvironment();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, "This research workspace was terminated ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: environment.updatedAt
      }), ' ', /*#__PURE__*/_react["default"].createElement(_By["default"], {
        uid: environment.updatedBy
      }), "."), this.renderCostInfo());
    }
  }, {
    key: "renderPendingInfo",
    value: function renderPendingInfo() {
      var environment = this.getEnvironment();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, "This research workspace was started ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: environment.createdAt
      }), ' ', /*#__PURE__*/_react["default"].createElement(_By["default"], {
        uid: environment.createdBy
      }), "."));
    }
  }, {
    key: "renderCopyToClipboard",
    value: function renderCopyToClipboard(text) {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
        content: "Copy",
        trigger:
        /*#__PURE__*/
        // <CopyToClipboard text={text} style={{ 'margin-left': '4px', cursor: 'pointer' }}>
        _react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
          className: "ml1 mr0",
          text: text,
          style: {
            cursor: 'pointer'
          }
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "copy"
        }))
      });
    }
  }, {
    key: "renderEc2LinuxSecurity",
    value: function renderEc2LinuxSecurity() {
      var environment = this.getEnvironment();
      return /*#__PURE__*/_react["default"].createElement("div", null, "You'll need two pieces of information to connect to this research workspace.", /*#__PURE__*/_react["default"].createElement("ol", null, /*#__PURE__*/_react["default"].createElement("li", null, "The IP Address or DNS of the instance, for this research workspace it is", ' ', environment.instanceInfo.Ec2WorkspaceDnsName), /*#__PURE__*/_react["default"].createElement("li", null, "The ssh key")), "Connecting to your research workspace depends on the operating system you are connecting from.", /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html"
      }, "Connecting from Windows via Putty")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html"
      }, "Connecting from MacOS or Linux via SSH"))), "Example:", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, "ssh -i ".concat(environment.id, ".pem ec2-user@").concat(environment.instanceInfo.Ec2WorkspaceDnsName)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        onClick: this.handleKeyPairRequest
      }, "Download SSH Key"));
    }
  }, {
    key: "renderEc2WindowsSecurity",
    value: function renderEc2WindowsSecurity() {
      var environment = this.getEnvironment();
      var passRevealDisabled = !this.windowsPassword || this.windowsPassword === 'loading';
      var passRevealStyle = {
        width: '27em',
        height: '5em'
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, "Your Windows workspace can be accessed via an RDP client by using the DNS host name and credentials defined defined below."), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        className: "mx1"
      }, "Host ", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label.Detail, null, environment.instanceInfo.Ec2WorkspaceDnsName), this.renderCopyToClipboard(environment.instanceInfo.Ec2WorkspaceDnsName)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Reveal, {
        className: "mt1",
        animated: "move",
        disabled: passRevealDisabled
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Reveal.Content, {
        visible: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        onClick: this.handleWindowsPasswordRequest,
        loading: this.windowsPassword === 'loading',
        style: passRevealStyle
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: passRevealDisabled ? 'lock' : 'unlock'
      }), passRevealDisabled ? 'Get ' : 'Show ', " Windows Credentials")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Reveal.Content, {
        hidden: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "px1 py1",
        style: passRevealStyle
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, null, "Username ", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label.Detail, null, "Administrator")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        className: "mx0"
      }, "Password", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label.Detail, null, this.windowsPassword), this.renderCopyToClipboard(this.windowsPassword))))), /*#__PURE__*/_react["default"].createElement("p", {
        className: "mt2"
      }, "Additional information about connecting via RDP can be found in the documentation below:", /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html#connect-rdp",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Connect to Your Windows Instance")))));
    }
  }, {
    key: "renderRStudioSecurity",
    value: function renderRStudioSecurity() {
      return this.renderConnectBtn('To connect to this RStudio Server instance simply click the launch button below.');
    }
  }, {
    key: "renderEmrSecurity",
    value: function renderEmrSecurity() {
      return this.renderConnectBtn('To connect to this EMR Jupyter notebook instance simply click the launch button below.');
    }
  }, {
    key: "renderSagemakerSecurity",
    value: function renderSagemakerSecurity() {
      return this.renderConnectBtn('To connect to this SageMaker notebook instance simply click the launch button below.');
    }
  }, {
    key: "renderConnectBtn",
    value: function renderConnectBtn(msg) {
      var environment = this.getEnvironment();
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, msg), /*#__PURE__*/_react["default"].createElement(_EnvironmentConnectButton["default"], {
        as: _semanticUiReact.Button,
        environment: environment,
        color: "green"
      }, environment.fetchingUrl ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Connecting", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        loading: true,
        name: "spinner",
        size: "small",
        className: "ml1 mr1"
      })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Connect")));
    }
  }]);

  return EnvironmentDetailPage;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(EnvironmentDetailPage, {
  windowsPassword: _mobx.observable,
  updateSharedWithUsers: _mobx.observable,
  formProcessing: _mobx.observable,
  handleSharedWithUsersSelection: _mobx.action
});

var _default = (0, _mobxReact.inject)('environmentsStore', 'userStore', 'usersStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvironmentDetailPage)));

exports["default"] = _default;
//# sourceMappingURL=EnvironmentDetailPage.js.map