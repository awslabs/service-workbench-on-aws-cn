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

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _settings = require("../../helpers/settings");

var EnvTypeStatusEnum = _interopRequireWildcard(require("../../models/environment-types/EnvTypeStatusEnum"));

var _EnvTypeCard = _interopRequireDefault(require("./EnvTypeCard"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
// - envTypesStore (via injection)
var EnvTypesList = /*#__PURE__*/function (_React$Component) {
  _inherits(EnvTypesList, _React$Component);

  var _super = _createSuper(EnvTypesList);

  function EnvTypesList(props) {
    var _this;

    _classCallCheck(this, EnvTypesList);

    _this = _super.call(this, props);

    _this.handleStatusFilterChange = function (e, _ref) {
      var value = _ref.value;
      _this.statusFilter = value;
    };

    (0, _mobx.runInAction)(function () {
      _this.statusFilter = '*';
    });
    return _this;
  }

  _createClass(EnvTypesList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.envTypesStore.load());
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.envTypesStore;
      var content;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "p0 mb3"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else if ((0, _BaseStore.isStoreReady)(store) && (0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else if ((0, _BaseStore.isStoreReady)(store) && (0, _BaseStore.isStoreNotEmpty)(store)) {
        var list = this.envTypesList;

        if (_lodash["default"].isEmpty(list)) {
          // The store may not be empty (there may be env types) but if the user selected to show only approved or
          // not-approved versions then that list may be empty so checking for "isEmpty" here in addition to "isStoreEmpty"
          // check above
          content = this.renderEmpty();
        } else {
          content = this.renderMain();
        }
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 mb4"
      }, this.renderTitle(), content);
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this2 = this;

      var renderCount = function renderCount() {
        var store = _this2.envTypesStore;
        var showCount = (0, _BaseStore.isStoreReady)(store) && (0, _BaseStore.isStoreNotEmpty)(store);
        return showCount && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          circular: true,
          size: "medium"
        }, _this2.envTypesList.length);
      };

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "computer",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Workspace Types", renderCount()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
        className: "mt2"
      }, "AWS Service Catalog Product Versions imported as Environment Types")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Radio, {
        label: "Approved",
        name: "statusFilter",
        checked: EnvTypeStatusEnum.isApproved(this.statusFilter),
        value: EnvTypeStatusEnum.approved,
        onChange: this.handleStatusFilterChange,
        className: "mr2"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Radio, {
        label: "Not Approved",
        name: "statusFilter",
        checked: EnvTypeStatusEnum.isNotApproved(this.statusFilter),
        value: EnvTypeStatusEnum.notApproved,
        onChange: this.handleStatusFilterChange,
        className: "mr2"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Radio, {
        label: "All",
        name: "statusFilter",
        checked: this.statusFilter === '*',
        value: "*",
        onChange: this.handleStatusFilterChange,
        className: "mr2"
      })));
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      var _this3 = this;

      var getEmptyMessage = function getEmptyMessage() {
        var msg;

        if (EnvTypeStatusEnum.isApproved(_this3.statusFilter)) {
          msg = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "No approved Environment Types found");
        } else if (EnvTypeStatusEnum.isNotApproved(_this3.statusFilter)) {
          msg = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "No Environments Types found that require approval");
        } else {
          msg = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "No AWS Service Catalog Product Versions imported yet", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
            className: "mt2"
          }, "Start by importing an AWS Service Catalog Product Version as Environment Type. AWS Service Catalog Products that are part of AWS Service Catalog Portfolio shared with AWS IAM role", ' ', /*#__PURE__*/_react["default"].createElement("strong", null, _settings.envMgmtRoleName), " are eligible for importing."));
        }

        return msg;
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "computer"
      }), getEmptyMessage()));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var _this4 = this;

      var list = this.envTypesList;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Group, {
        stackable: true,
        itemsPerRow: 3
      }, _lodash["default"].map(list, function (envType) {
        return /*#__PURE__*/_react["default"].createElement(_EnvTypeCard["default"], {
          key: envType.id,
          envType: envType,
          envTypesStore: _this4.envTypesStore
        });
      }));
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }, {
    key: "envTypesList",
    get: function get() {
      var list = [];

      if (EnvTypeStatusEnum.isApproved(this.statusFilter)) {
        list = this.envTypesStore.listApproved;
      } else if (EnvTypeStatusEnum.isNotApproved(this.statusFilter)) {
        list = this.envTypesStore.listNotApproved;
      } else {
        list = this.envTypesStore.list;
      }

      return list;
    }
  }]);

  return EnvTypesList;
}(_react["default"].Component);

(0, _mobx.decorate)(EnvTypesList, {
  envTypesList: _mobx.computed,
  envTypesStore: _mobx.computed,
  statusFilter: _mobx.observable,
  handleStatusFilterChange: _mobx.action
});

var _default = (0, _mobxReact.inject)('envTypesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvTypesList)));

exports["default"] = _default;
//# sourceMappingURL=EnvTypesList.js.map