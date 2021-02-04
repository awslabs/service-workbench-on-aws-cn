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

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _EnvironmentCard = _interopRequireDefault(require("./EnvironmentCard"));

var _UserOnboarding = _interopRequireDefault(require("../users/UserOnboarding"));

var _UserPinModal = _interopRequireDefault(require("../users/UserPinModal"));

var _localStorageKeys = _interopRequireDefault(require("../../models/constants/local-storage-keys"));

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

// expected props
// - environmentsStore (via injection)
// - location (from react router)
var EnvironmentsList = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvironmentsList, _React$Component);

  var _super = _createSuper(EnvironmentsList);

  function EnvironmentsList(props) {
    var _this;

    _classCallCheck(this, EnvironmentsList);

    _this = _super.call(this, props);

    _this.setOnboarding = function (value) {
      _this.onboardingOpen = value;
    };

    _this.hidePinModal = function () {
      _this.pinModalOpen = false;
    };

    _this.handleDetailClick = function (event) {
      event.preventDefault();
      event.stopPropagation(); // see https://reactjs.org/docs/events.html and https://github.com/facebook/react/issues/5733

      var instanceId = event.currentTarget.dataset.instance;

      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto("/workspaces/id/".concat(instanceId));
    };

    _this.handleCreateEnvironment = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var _goto2 = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto2("/workspaces/create");
    };

    _this.handleConfigureCredentials = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.setOnboarding(true);
    };

    _this.needsAWSCredentials = function () {
      return _this.user.isExternalResearcher && !_this.user.hasCredentials;
    };

    var user = _this.getUserStore().user;

    (0, _mobx.runInAction)(function () {
      _this.user = user;
      _this.onboardingOpen = false;
      _this.pinModalOpen = user.isExternalUser && _lodash["default"].isEmpty(_utils.storage.getItem(_localStorageKeys["default"].pinToken));
    });
    return _this;
  }

  _createClass(EnvironmentsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.getEnvironmentsStore().load());
      this.getEnvironmentsStore().startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.getEnvironmentsStore().stopHeartbeat();
    }
  }, {
    key: "getEnvironmentsStore",
    value: function getEnvironmentsStore() {
      return this.props.environmentsStore;
    }
  }, {
    key: "getUserStore",
    value: function getUserStore() {
      return this.props.userStore;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var store = this.getEnvironmentsStore();
      var content = null;

      if (this.needsAWSCredentials()) {
        content = this.renderConfigureAWS();
      } else if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "p0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 3
        });
      } else if ((0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else if ((0, _BaseStore.isStoreNotEmpty)(store)) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 animated fadeIn"
      }, this.renderTitle(), content, this.onboardingOpen && /*#__PURE__*/_react["default"].createElement(_UserOnboarding["default"], {
        onclose: function onclose() {
          return _this2.setOnboarding(false);
        }
      }));
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "clipboard outline"
      }), "No research workspaces", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "To create a research workspace, click Create Research Workspace.")));
    }
  }, {
    key: "renderConfigureAWS",
    value: function renderConfigureAWS() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "key"
      }), "No AWS credentials", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "To manage research workspaces, click Configure AWS Credentials.")));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Research Workspaces ", this.renderTotal())), this.needsAWSCredentials() ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "orange",
        size: "medium",
        basic: true,
        onClick: this.handleConfigureCredentials
      }, "Configure AWS Credentials") : /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        size: "medium",
        basic: true,
        onClick: this.handleCreateEnvironment
      }, "Create Research Workspace"));
    }
  }, {
    key: "renderTotal",
    value: function renderTotal() {
      var store = this.getEnvironmentsStore();
      if ((0, _BaseStore.isStoreError)(store) || (0, _BaseStore.isStoreLoading)(store)) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true
      }, store.total);
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var _this3 = this;

      var store = this.getEnvironmentsStore();
      var list = store.list;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_UserPinModal["default"], {
        show: this.pinModalOpen,
        hideModal: this.hidePinModal,
        user: this.user,
        message: "PIN is required to get previously created stack information"
      }), _lodash["default"].map(list, function (item) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
          className: "p3 mb2 cursor-pointer",
          clearing: true,
          key: item.id,
          "data-instance": item.id,
          onClick: _this3.handleDetailClick
        }, /*#__PURE__*/_react["default"].createElement(_EnvironmentCard["default"], {
          environment: item,
          environmentsStore: _this3.getEnvironmentsStore(),
          user: _this3.user
        }));
      }));
    }
  }]);

  return EnvironmentsList;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(EnvironmentsList, {
  handleDetailClick: _mobx.action,
  setOnboarding: _mobx.action,
  hidePinModal: _mobx.action,
  user: _mobx.observable,
  onboardingOpen: _mobx.observable,
  pinModalOpen: _mobx.observable
});

var _default = (0, _mobxReact.inject)('environmentsStore', 'userStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvironmentsList)));

exports["default"] = _default;
//# sourceMappingURL=EnvironmentsList.js.map