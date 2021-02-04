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

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _localStorageKeys = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/constants/local-storage-keys"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ScEnvironmentsStore = require("../../models/environments-sc/ScEnvironmentsStore");

var _ScEnvironmentCard = _interopRequireDefault(require("./ScEnvironmentCard"));

var _ScEnvironmentsFilterButtons = _interopRequireDefault(require("./parts/ScEnvironmentsFilterButtons"));

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
// - scEnvironmentsStore (via injection)
// - envTypesStore (via injection)
var ScEnvironmentsList = /*#__PURE__*/function (_React$Component) {
  _inherits(ScEnvironmentsList, _React$Component);

  var _super = _createSuper(ScEnvironmentsList);

  function ScEnvironmentsList(props) {
    var _this;

    _classCallCheck(this, ScEnvironmentsList);

    _this = _super.call(this, props);

    _this.handleCreateEnvironment = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto("/workspaces/create");
    };

    _this.handleSelectedFilter = function (name) {
      _this.selectedFilter = name;
      var key = _localStorageKeys["default"].workspacesFilterName;

      _utils.storage.setItem(key, name);
    };

    (0, _mobx.runInAction)(function () {
      var key = _localStorageKeys["default"].workspacesFilterName;

      var name = _utils.storage.getItem(key) || _ScEnvironmentsStore.filterNames.ALL;

      _utils.storage.setItem(key, name);

      _this.selectedFilter = name;
    });
    return _this;
  }

  _createClass(ScEnvironmentsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      var store = this.envsStore;
      (0, _utils.swallowError)(store.load());
      store.startHeartbeat();
      var typesStore = this.envTypesStore;

      if (!(0, _BaseStore.isStoreReady)(typesStore)) {
        (0, _utils.swallowError)(typesStore.load());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.envsStore;
      store.stopHeartbeat();
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.envsStore;
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
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
      }, this.renderTitle(), content);
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var store = this.envsStore;
      var selectedFilter = this.selectedFilter;
      var list = store.filtered(selectedFilter);

      var isEmpty = _lodash["default"].isEmpty(list);

      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-testid": "workspaces"
      }, /*#__PURE__*/_react["default"].createElement(_ScEnvironmentsFilterButtons["default"], {
        selectedFilter: selectedFilter,
        onSelectedFilter: this.handleSelectedFilter,
        className: "mb3"
      }), !isEmpty && _lodash["default"].map(list, function (item) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
          className: "p3 mb4",
          clearing: true,
          key: item.id
        }, /*#__PURE__*/_react["default"].createElement(_ScEnvironmentCard["default"], {
          scEnvironment: item
        }));
      }), isEmpty && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server"
      }), "No research workspaces matching the selected filter.", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "Select 'All' to view all the workspaces"))));
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        "data-testid": "workspaces",
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server"
      }), "No research workspaces", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "To create a research workspace, click Create Research Workspace.")));
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
      }, "Research Workspaces ", this.renderTotal())), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        "data-testid": "create-workspace",
        color: "blue",
        size: "medium",
        basic: true,
        onClick: this.handleCreateEnvironment
      }, "Create Research Workspace")));
    }
  }, {
    key: "renderTotal",
    value: function renderTotal() {
      var store = this.envsStore;
      if ((0, _BaseStore.isStoreError)(store) || (0, _BaseStore.isStoreLoading)(store)) return null;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true
      }, store.total);
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }, {
    key: "envsStore",
    get: function get() {
      return this.props.scEnvironmentsStore;
    }
  }]);

  return ScEnvironmentsList;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ScEnvironmentsList, {
  selectedFilter: _mobx.observable,
  envsStore: _mobx.computed,
  envTypesStore: _mobx.computed,
  handleCreateEnvironment: _mobx.action,
  handleSelectedFilter: _mobx.action
});

var _default = (0, _mobxReact.inject)('scEnvironmentsStore', 'envTypesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ScEnvironmentsList)));

exports["default"] = _default;
//# sourceMappingURL=ScEnvironmentsList.js.map