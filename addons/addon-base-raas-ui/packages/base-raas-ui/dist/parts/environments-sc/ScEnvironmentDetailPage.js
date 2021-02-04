"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _By = _interopRequireDefault(require("../helpers/By"));

var _ScEnvironmentButtons = _interopRequireDefault(require("./parts/ScEnvironmentButtons"));

var _ScEnvironmentCost = _interopRequireDefault(require("./parts/ScEnvironmentCost"));

var _ScEnvironmentTypeName = _interopRequireDefault(require("./parts/ScEnvironmentTypeName"));

var _ScEnvironmentCostTable = _interopRequireDefault(require("./parts/ScEnvironmentCostTable"));

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
// - scEnvironmentsStore (via injection)


var ScEnvironmentDetailPage = /*#__PURE__*/function (_React$Component2) {
  _inherits(ScEnvironmentDetailPage, _React$Component2);

  var _super2 = _createSuper(ScEnvironmentDetailPage);

  function ScEnvironmentDetailPage() {
    _classCallCheck(this, ScEnvironmentDetailPage);

    return _super2.apply(this, arguments);
  }

  _createClass(ScEnvironmentDetailPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      var store = this.getEnvStore();

      if (store) {
        (0, _utils.swallowError)(store.load());
        store.startHeartbeat();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.getEnvStore();

      if (store) {
        store.stopHeartbeat();
      }
    }
  }, {
    key: "getEnvStore",
    value: function getEnvStore() {
      var envsStore = this.envsStore;
      var envId = this.instanceId;
      return envsStore.getScEnvironmentStore(envId);
    }
  }, {
    key: "getEnv",
    value: function getEnv() {
      var store = this.getEnvStore();
      if (!store) return {};
      if (!(0, _BaseStore.isStoreReady)(store)) return {};
      return store.scEnvironment;
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getEnvStore();
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
      var envId = this.instanceId;

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
      }, "Workspace # ", envId));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var env = this.getEnv();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderTitle(env), this.renderError(env), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
        className: "mt1 mb1"
      }), this.renderButtons(env), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
        className: "mt1"
      }), env.description || 'Not description for this workspace was provided.', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        columns: 2,
        stackable: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Row, {
        stretched: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        width: 12
      }, this.renderDetailTable(env)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        width: 4
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "w-100 overflow-hidden"
      }, /*#__PURE__*/_react["default"].createElement(_ScEnvironmentCost["default"], {
        envId: env.id
      })))))), this.renderTabs(env));
    }
  }, {
    key: "renderDetailTable",
    value: function renderDetailTable(env) {
      var studyIds = _lodash["default"].get(env, 'studyIds', []);

      var studyCount = _lodash["default"].size(studyIds);

      var renderRow = function renderRow(key, value) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 5
        }, key), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 11,
          className: "breakout"
        }, value));
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        definition: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, renderRow('Status', this.renderStatus(env)), renderRow('Owner', /*#__PURE__*/_react["default"].createElement(_By["default"], {
        uid: env.createdBy,
        skipPrefix: true
      })), renderRow('Studies', studyCount === 0 ? 'No studies linked to this workspace' : studyIds.join(', ')), renderRow('Project', _lodash["default"].isEmpty(env.projectId) ? 'N/A' : env.projectId), renderRow('Restricted CIDR', _lodash["default"].isEmpty(env.cidr) ? 'N/A' : env.cidr), renderRow('Workspace Type', /*#__PURE__*/_react["default"].createElement(_ScEnvironmentTypeName["default"], {
        envTypeId: env.envTypeId
      }))));
    }
  }, {
    key: "renderButtons",
    value: function renderButtons(env) {
      return /*#__PURE__*/_react["default"].createElement(_ScEnvironmentButtons["default"], {
        scEnvironment: env
      });
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(env) {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "mt1"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, env.name), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey"
      }, "Created ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: env.createdAt,
        className: "mr2"
      }), " ", /*#__PURE__*/_react["default"].createElement(_By["default"], {
        uid: env.createdBy,
        className: "mr2"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey mr2"
      }, " ", env.id)));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus(env) {
      var state = env.state;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          cursor: 'default'
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
        trigger: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          size: "mini",
          color: state.color
        }, state.spinner && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "spinner",
          loading: true
        }), state.display)
      }, state.tip));
    }
  }, {
    key: "renderError",
    value: function renderError(env) {
      if (_lodash["default"].isEmpty(env.error)) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        negative: true
      }, /*#__PURE__*/_react["default"].createElement("p", null, env.error));
    }
  }, {
    key: "renderTabs",
    value: function renderTabs(env) {
      var _this = this;

      var panes = [{
        menuItem: 'Cost',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            attached: false,
            key: "cost",
            as: TabPaneWrapper
          }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
            return /*#__PURE__*/_react["default"].createElement(_ScEnvironmentCostTable["default"], {
              envId: env.id
            });
          }));
        }
      }, {
        menuItem: 'CloudFormation Output',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
            attached: false,
            key: "cfn-outputs",
            as: TabPaneWrapper
          }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
            return _this.renderCfnOutput(env);
          }));
        }
      }];
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab, {
        className: "mt4",
        menu: {
          secondary: true,
          pointing: true
        },
        renderActiveOnly: true,
        panes: panes
      });
    }
  }, {
    key: "renderCfnOutput",
    value: function renderCfnOutput(env) {
      var outputs = env.outputs;

      var isEmpty = _lodash["default"].isEmpty(outputs);

      var renderRow = function renderRow(index, key, value, desc) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: index
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 5
        }, key), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 11,
          className: "breakout"
        }, value, /*#__PURE__*/_react["default"].createElement("div", {
          className: "fs-7"
        }, desc)));
      };

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isEmpty && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        definition: true,
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, _lodash["default"].map(outputs, function (item, index) {
        return renderRow(index, item.OutputKey, item.OutputValue, item.Description);
      }))), isEmpty && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        className: "mt3",
        content: "None is available"
      }));
    }
  }, {
    key: "envsStore",
    get: function get() {
      return this.props.scEnvironmentsStore;
    }
  }, {
    key: "instanceId",
    get: function get() {
      return (this.props.match.params || {}).instanceId;
    }
  }]);

  return ScEnvironmentDetailPage;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentDetailPage, {
  instanceId: _mobx.computed,
  envsStore: _mobx.computed
});

var _default = (0, _mobxReact.inject)('scEnvironmentsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentDetailPage)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentDetailPage.js.map