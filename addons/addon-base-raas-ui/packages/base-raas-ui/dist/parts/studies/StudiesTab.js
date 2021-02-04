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

var _semanticUiReact = require("semantic-ui-react");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _StudyRow = _interopRequireDefault(require("./StudyRow"));

var _categories = require("../../models/studies/categories");

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
// - category (an object with the shape { name, id})
// - studiesStoresMap (via injection)
// - userStore (via injection)
var StudiesTab = /*#__PURE__*/function (_React$Component) {
  _inherits(StudiesTab, _React$Component);

  var _super = _createSuper(StudiesTab);

  function StudiesTab() {
    _classCallCheck(this, StudiesTab);

    return _super.apply(this, arguments);
  }

  _createClass(StudiesTab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.studiesStore;
      if (!store) return;
      if (!(0, _BaseStore.isStoreReady)(store)) (0, _utils.swallowError)(store.load());
      store.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.studiesStore;
      if (!store) return;
      store.stopHeartbeat();
    }
  }, {
    key: "render",
    value: function render() {
      var studiesStore = this.studiesStore;
      if (!studiesStore) return null; // Render loading, error, or tab content

      var content;

      if ((0, _BaseStore.isStoreError)(studiesStore)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: studiesStore.error,
          className: "mt3 mr0 ml0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(studiesStore)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 3,
          className: "mt3 mr0 ml0"
        });
      } else if ((0, _BaseStore.isStoreEmpty)(studiesStore)) {
        content = this.renderEmpty();
      } else {
        content = this.renderContent();
      }

      return content;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var studiesStore = this.studiesStore;
      var isSelectable = this.canSelectStudy;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 mr0 ml0"
      }, studiesStore.list.map(function (study) {
        return /*#__PURE__*/_react["default"].createElement(_StudyRow["default"], {
          key: study.id,
          study: study,
          isSelectable: isSelectable
        });
      }));
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      var categoryId = this.props.category.id;
      var isOpenData = categoryId === _categories.categories.openData.id;
      var isOrgData = categoryId === _categories.categories.organization.id;
      var canCreateStudy = this.canCreateStudy;
      var header = 'No studies';
      var subheader = canCreateStudy ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "To create a study, click on the ", /*#__PURE__*/_react["default"].createElement("b", null, "Create Study"), " button at the top.") : '';

      if (isOpenData) {
        header = 'No studies from the Open Data project';
        subheader = 'The information in this page is updated once a day, please come back later.';
      }

      if (isOrgData) {
        header = 'No studies shared with you';
        subheader = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, "Studies created at the organization level can be shared but you don't have any that is shared with you."), canCreateStudy && /*#__PURE__*/_react["default"].createElement("div", null, "You can create one yourself by clicking on the ", /*#__PURE__*/_react["default"].createElement("b", null, "Create Study"), " button at the top."), !canCreateStudy && /*#__PURE__*/_react["default"].createElement("div", null, "Consider viewing the Open Data studies by clicking on the ", /*#__PURE__*/_react["default"].createElement("span", null, "Open Data"), " tab above."));
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "clipboard outline"
      }), header, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, subheader)));
    }
  }, {
    key: "studiesStore",
    get: function get() {
      return this.props.studiesStoresMap[this.props.category.id];
    }
  }, {
    key: "canCreateStudy",
    get: function get() {
      return _lodash["default"].get(this.props.userStore, 'user.capabilities.canCreateStudy', true) && this.hasProjects;
    }
  }, {
    key: "canSelectStudy",
    get: function get() {
      var can = _lodash["default"].get(this.props.userStore, 'user.capabilities.canSelectStudy', true);

      if (!can) return can; // If can't select study, then return early, no need to examine if the user is internal and does not have projects

      if (!this.isExternalUser) return this.hasProjects;
      return can;
    }
  }, {
    key: "isExternalUser",
    get: function get() {
      // Both external guests and external researchers are considered external users
      return _lodash["default"].get(this.props.userStore, 'user.isExternalUser', true);
    }
  }, {
    key: "hasProjects",
    get: function get() {
      return _lodash["default"].get(this.props.userStore, 'user.hasProjects', true);
    }
  }]);

  return StudiesTab;
}(_react["default"].Component);

(0, _mobx.decorate)(StudiesTab, {
  studiesStore: _mobx.computed,
  canCreateStudy: _mobx.computed,
  canSelectStudy: _mobx.computed,
  hasProjects: _mobx.computed,
  isExternalUser: _mobx.computed
});

var _default = (0, _mobxReact.inject)('studiesStoresMap', 'userStore')((0, _mobxReact.observer)(StudiesTab));

exports["default"] = _default;
//# sourceMappingURL=StudiesTab.js.map