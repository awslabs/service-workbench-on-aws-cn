"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _settings = require("../../helpers/settings");

var _AWSServiceCatalog = _interopRequireDefault(require("../../../images/AWS-Service-Catalog.svg"));

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
// - envTypeCandidatesStore (via injection)
var EnvTypeCandidatesList = /*#__PURE__*/function (_Component) {
  _inherits(EnvTypeCandidatesList, _Component);

  var _super = _createSuper(EnvTypeCandidatesList);

  function EnvTypeCandidatesList(props) {
    var _this;

    _classCallCheck(this, EnvTypeCandidatesList);

    _this = _super.call(this, props);

    _this.handleShowAllVersionsToggle = function () {
      _this.showAllVersions = !_this.showAllVersions;
    };

    _this.handleImportButtonClick = function (id) {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto("/workspace-types-management/import/".concat(encodeURIComponent(id)));
    };

    (0, _mobx.runInAction)(function () {
      _this.showAllVersions = false;
    });
    return _this;
  }

  _createClass(EnvTypeCandidatesList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.envTypeCandidatesStore.load());
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.envTypeCandidatesStore;
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
        var list = this.envTypeCandidatesList;

        if (_lodash["default"].isEmpty(list)) {
          // The store may not be empty (there may be older versions of the AWS Service Catalog Product)
          // but if the user selected to show only latest versions that are not imported yet then that list
          // may be empty so checking for "isEmpty" here in addition to "isStoreEmpty"
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
        var store = _this2.envTypeCandidatesStore;
        var showCount = (0, _BaseStore.isStoreReady)(store) && (0, _BaseStore.isStoreNotEmpty)(store);
        return showCount && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          circular: true,
          size: "medium"
        }, _this2.envTypeCandidatesList.length);
      };

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Image, {
        src: _AWSServiceCatalog["default"]
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "AWS Service Catalog Products", renderCount()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
        className: "mt2"
      }, "Available AWS Service Catalog Product Versions not imported yet")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Checkbox, {
        toggle: true,
        checked: this.showAllVersions,
        onClick: function onClick() {
          return _this2.handleShowAllVersionsToggle();
        },
        label: this.showAllVersions ? 'All Versions' : 'Latest Versions'
      })));
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
        name: "computer"
      }), "No AWS Service Catalog Product Versions available for importing", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
        className: "mt2"
      }, "Please create AWS Service Catalog Product Version and share the Portfolio with the AWS IAM role", ' ', /*#__PURE__*/_react["default"].createElement("strong", null, _settings.envMgmtRoleName), ".")));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var _this3 = this;

      var list = this.envTypeCandidatesList;

      if (_lodash["default"].isEmpty(list)) {
        // The store may not be empty (there may be older versions of the AWS Service Catalog Product)
        // but if the user selected to show only latest versions that are not imported yet then that list
        // may be empty so checking for "isEmpty" here in addition to isStoreEmpty check in the render method
        return this.renderEmpty();
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Group, {
        stackable: true,
        itemsPerRow: 3
      }, _lodash["default"].map(list, function (envTypeCandidate) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
          key: "etc-".concat(envTypeCandidate.id),
          raised: true,
          className: "mb3"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
          as: "h4"
        }, envTypeCandidate.name), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Meta, null, _lodash["default"].get(envTypeCandidate, 'provisioningArtifact.name')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Description, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "mb3 pr1 pl1 pb1"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          dangerouslySetInnerHTML: {
            __html: envTypeCandidate.descHtml
          }
        })))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, {
          extra: true
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          basic: true,
          icon: true,
          color: "blue",
          onClick: function onClick() {
            return _this3.handleImportButtonClick(envTypeCandidate.id);
          },
          labelPosition: "right",
          floated: "right",
          size: "mini"
        }, "Import", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "arrow down"
        }))));
      }));
    }
  }, {
    key: "envTypeCandidatesStore",
    get: function get() {
      return this.props.envTypeCandidatesStore;
    }
  }, {
    key: "envTypeCandidatesList",
    get: function get() {
      return this.showAllVersions ? this.envTypeCandidatesStore.listAllVersions : this.envTypeCandidatesStore.listLatestVersions;
    }
  }]);

  return EnvTypeCandidatesList;
}(_react.Component);

(0, _mobx.decorate)(EnvTypeCandidatesList, {
  envTypeCandidatesList: _mobx.computed,
  envTypeCandidatesStore: _mobx.computed,
  showAllVersions: _mobx.observable,
  handleShowAllVersionsToggle: _mobx.action,
  handleImportButtonClick: _mobx.action
});

var _default = (0, _mobxReact.inject)('envTypeCandidatesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvTypeCandidatesList)));

exports["default"] = _default;
//# sourceMappingURL=EnvTypeCandidatesList.js.map