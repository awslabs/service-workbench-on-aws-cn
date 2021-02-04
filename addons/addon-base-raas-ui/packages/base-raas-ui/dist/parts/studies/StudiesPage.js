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

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _categories = require("../../models/studies/categories");

var _StudiesTab = _interopRequireDefault(require("./StudiesTab"));

var _CreateStudy = _interopRequireDefault(require("./CreateStudy"));

var _StudyStepsProgress = _interopRequireDefault(require("./StudyStepsProgress"));

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
// - filesSelection (via injection)
// - studiesStoresMap (via injection)
// - userStore (via injection)


var StudiesPage = /*#__PURE__*/function (_React$Component2) {
  _inherits(StudiesPage, _React$Component2);

  var _super2 = _createSuper(StudiesPage);

  function StudiesPage() {
    var _this;

    _classCallCheck(this, StudiesPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    _this.handleNext = function () {
      if (_this.envTypeId) {
        _this["goto"]("/studies/setup-workspace/type/".concat(encodeURIComponent(_this.envTypeId)));
      } else {
        _this["goto"]('/studies/setup-workspace');
      }
    };

    _this.handlePrevious = function () {
      _this["goto"]('/workspace-types-management');
    };

    return _this;
  }

  _createClass(StudiesPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "getStudiesStore",
    value: function getStudiesStore(category) {
      return this.props.studiesStoresMap[category.id];
    }
  }, {
    key: "goto",
    value: function goto(pathname) {
      var _goto = (0, _routing.gotoFn)(this);

      _goto(pathname);
    }
  }, {
    key: "render",
    value: function render() {
      var canSelectStudy = this.canSelectStudy;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3"
      }, this.renderTitle(), canSelectStudy && this.renderStepsProgress(), this.renderSelection(), this.renderStudyTabs());
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var canCreateStudy = this.canCreateStudy;
      var hasProjects = this.hasProjects;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "book",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Studies")), canCreateStudy && hasProjects && /*#__PURE__*/_react["default"].createElement(_CreateStudy["default"], null));
    }
  }, {
    key: "renderStepsProgress",
    value: function renderStepsProgress() {
      return /*#__PURE__*/_react["default"].createElement(_StudyStepsProgress["default"], {
        envTypeImmutable: !!this.envTypeId
      });
    }
  }, {
    key: "renderStudyTabs",
    value: function renderStudyTabs() {
      var _this2 = this;

      var isExternalUser = this.isExternalUser;

      var getMenuItemLabel = function getMenuItemLabel(category) {
        var store = _this2.getStudiesStore(category);

        var emptySpan = null;
        if (!store) return emptySpan;
        if ((0, _BaseStore.isStoreError)(store)) return emptySpan;
        if ((0, _BaseStore.isStoreNew)(store)) return emptySpan;
        if ((0, _BaseStore.isStoreLoading)(store)) return emptySpan;
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, null, (0, _utils.niceNumber)(store.total));
      }; // Create tab panes for each study category. If the user is not external user, then myStudies pane should not be shown


      var applicableCategories = _lodash["default"].filter(_categories.categories, function (category) {
        if (category.id === 'my-studies' && isExternalUser) return false;
        return true;
      });

      var studyPanes = _lodash["default"].map(applicableCategories, function (category) {
        return {
          menuItem: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, {
            key: category.id
          }, category.name, " ", getMenuItemLabel(category)),
          render: function render() {
            return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab.Pane, {
              attached: false,
              key: category.id,
              as: TabPaneWrapper
            }, /*#__PURE__*/_react["default"].createElement(_mobxReact.Observer, null, function () {
              return /*#__PURE__*/_react["default"].createElement(_StudiesTab["default"], {
                category: category
              });
            }));
          }
        };
      });

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Tab, {
        className: "mt3",
        menu: {
          secondary: true,
          pointing: true
        },
        renderActiveOnly: true,
        panes: studyPanes
      });
    }
  }, {
    key: "renderSelection",
    value: function renderSelection() {
      var selection = this.props.filesSelection;
      var empty = selection.empty;
      var count = selection.count;
      var canCreateStudy = this.canCreateStudy;
      var canSelectStudy = this.canSelectStudy;
      var hasProjects = this.hasProjects;

      if (empty && canCreateStudy && canSelectStudy && hasProjects) {
        return this.renderWarningWithButton({
          content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Select one or more studies to proceed to the next step or create a study by clicking on ", /*#__PURE__*/_react["default"].createElement("b", null, "Create Study"), ' ', "button at the top.")
        });
      }

      if (empty && canCreateStudy && canSelectStudy && !hasProjects) {
        return this.renderWarning({
          header: 'Missing association with one or more projects!',
          content: "You won't be able to select or create studies because you currently don't have any association with one or more projects, please contact your administrator."
        });
      }

      if (empty && canSelectStudy && !canCreateStudy) {
        return this.renderWarningWithButton({
          content: 'Select one or more studies to proceed to the next step.'
        });
      }

      if (empty) {
        return this.renderWarning({
          header: 'Limited access',
          content: 'You currently have limited access and will not be able to select studies to proceed to the next step.'
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        visible: true,
        className: "clearfix",
        info: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        icon: true,
        labelPosition: "right",
        className: "ml2",
        floated: "right",
        onClick: this.handleNext,
        color: "blue"
      }, "Next", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "right arrow"
      })), // If envTypeId is present then it means we landed on this page after
      // env type selection from workspace-type-management page.
      // Show previous button in this case to allow to go back to workspace-type-management screen
      this.envTypeId && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        icon: "left arrow",
        labelPosition: "left",
        className: "ml2",
        content: "Previous",
        onClick: this.handlePrevious
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1"
      }, /*#__PURE__*/_react["default"].createElement("span", null, "Selected studies", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true,
        color: "blue",
        className: "ml1"
      }, (0, _utils.niceNumber)(count)), ' ')));
    }
  }, {
    key: "renderWarning",
    value: function renderWarning(_ref) {
      var header = _ref.header,
          content = _ref.content;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        icon: true,
        warning: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "warning"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, header), /*#__PURE__*/_react["default"].createElement("p", null, content)));
    }
  }, {
    key: "renderWarningWithButton",
    value: function renderWarningWithButton(_ref2) {
      var content = _ref2.content;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        visible: true,
        className: "clearfix",
        warning: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        icon: true,
        labelPosition: "right",
        className: "ml2",
        floated: "right",
        disabled: true
      }, "Next", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "right arrow"
      })), // If envTypeId is present then it means we landed on this page after
      // env type selection from workspace-type-management page.
      // Show previous button in this case to allow to go back to workspace-type-management screen
      this.envTypeId && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        icon: "left arrow",
        labelPosition: "left",
        className: "ml2",
        content: "Previous",
        onClick: this.handlePrevious
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt1"
      }, content));
    }
  }, {
    key: "canCreateStudy",
    get: function get() {
      // Note, this does not cover the case if you can create a study but don't have any project linked with you yet.
      return _lodash["default"].get(this.props.userStore, 'user.capabilities.canCreateStudy', true);
    }
  }, {
    key: "canSelectStudy",
    get: function get() {
      return _lodash["default"].get(this.props.userStore, 'user.capabilities.canSelectStudy', true);
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
  }, {
    key: "envTypeId",
    get: function get() {
      return (this.props.match.params || {}).envTypeId;
    }
  }]);

  return StudiesPage;
}(_react["default"].Component);

(0, _mobx.decorate)(StudiesPage, {
  getStudiesStore: _mobx.observable,
  canCreateStudy: _mobx.computed,
  canSelectStudy: _mobx.computed,
  hasProjects: _mobx.computed,
  isExternalUser: _mobx.computed,
  handleNext: _mobx.action
});

var _default = (0, _mobxReact.inject)('filesSelection', 'studiesStoresMap', 'userStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(StudiesPage)));

exports["default"] = _default;
//# sourceMappingURL=StudiesPage.js.map