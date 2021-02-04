"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

var _mobx = require("mobx");

var _reactRouterDom = require("react-router-dom");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _EnvTypeConfigCard = _interopRequireDefault(require("../env-type-config/EnvTypeConfigCard"));

var _EnvTypeConfigEditor = _interopRequireDefault(require("../env-type-config/EnvTypeConfigEditor"));

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

var ConfigStep = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfigStep, _React$Component);

  var _super = _createSuper(ConfigStep);

  function ConfigStep(props) {
    var _this;

    _classCallCheck(this, ConfigStep);

    _this = _super.call(this, props);

    _this.showEnvTypeConfigDialog = function () {
      _this.shouldShowEnvTypeConfigDialog = true;
      _this.processing = false;
    };

    _this.hideEnvTypeConfigDialog = function () {
      if (_this.processing) return;
      _this.shouldShowEnvTypeConfigDialog = false;
    };

    _this.onNext = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var wizardModel, onEnvTypeSaveComplete;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              wizardModel = _this.props.wizardModel;
              onEnvTypeSaveComplete = _this.props.onEnvTypeSaveComplete;

              if (!(_this.isImportAction() && wizardModel.hasNext)) {
                _context.next = 6;
                break;
              }

              wizardModel.next();
              _context.next = 9;
              break;

            case 6:
              if (!_lodash["default"].isFunction(onEnvTypeSaveComplete)) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return onEnvTypeSaveComplete();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    (0, _mobx.runInAction)(function () {
      _this.processing = false;
      _this.shouldShowEnvTypeConfigDialog = false;
    });
    return _this;
  }

  _createClass(ConfigStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.envTypeConfigsStore.load());
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.envTypeConfigsStore;
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
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 mb4"
      }, content);
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !this.shouldShowEnvTypeConfigDialog && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "settings"
      }), "No Configurations for this Workspace Type yet", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, {
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement("p", null, "Configurations are predefined set of Input Parameter values for the AWS Service Catalog Product. The configurations are presented as preset options when launching workspaces of this type."), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "blue",
        onClick: this.showEnvTypeConfigDialog
      }, "Add Configuration")))), this.shouldShowEnvTypeConfigDialog && this.renderConfigEditorDialog(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "right-align"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "grey",
        onClick: this.props.onCancel
      }, "Cancel")));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        basic: true
      }, !this.shouldShowEnvTypeConfigDialog && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        className: "ml3",
        basic: true,
        color: "blue",
        floated: "right",
        onClick: this.showEnvTypeConfigDialog
      }, "Add Configuration"), this.renderEnvTypeConfigs(), this.shouldShowEnvTypeConfigDialog && this.renderConfigEditorDialog(), !this.shouldShowEnvTypeConfigDialog && this.renderActionButtons({
        onCancel: this.props.onCancel
      })));
    }
  }, {
    key: "renderConfigEditorDialog",
    value: function renderConfigEditorDialog() {
      // return (
      //   <EnvTypeConfigEditor onCancel={this.hideEnvTypeConfigDialog} envTypeConfigsStore={this.envTypeConfigsStore} onEnvTypeConfigSaveComplete={this.hideEnvTypeConfigDialog}/>
      // );
      var shouldShowEnvTypeConfigDialog = this.shouldShowEnvTypeConfigDialog;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        closeIcon: true,
        open: shouldShowEnvTypeConfigDialog,
        onClose: this.hideEnvTypeConfigDialog,
        closeOnDimmerClick: false,
        closeOnEscape: false,
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement(_EnvTypeConfigEditor["default"], {
        onCancel: this.hideEnvTypeConfigDialog,
        envTypeConfigsStore: this.envTypeConfigsStore,
        envType: this.props.envType,
        onEnvTypeConfigSaveComplete: this.hideEnvTypeConfigDialog,
        action: "create"
      }));
    }
  }, {
    key: "renderEnvTypeConfigs",
    value: function renderEnvTypeConfigs() {
      var _this2 = this;

      var list = this.envTypeConfigsStore.listAll;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Group, {
        stackable: true,
        itemsPerRow: 3
      }, _lodash["default"].map(list, function (envTypeConfig) {
        return /*#__PURE__*/_react["default"].createElement(_EnvTypeConfigCard["default"], {
          key: envTypeConfig.id,
          envTypeConfig: envTypeConfig,
          envType: _this2.props.envType,
          envTypeConfigsStore: _this2.envTypeConfigsStore
        });
      }));
    }
  }, {
    key: "renderActionButtons",
    value: function renderActionButtons(_ref2) {
      var processing = _ref2.processing,
          onCancel = _ref2.onCancel;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "right-align"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "grey",
        onClick: onCancel
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        className: "ml2",
        primary: true,
        content: "Done",
        disabled: processing,
        onClick: this.onNext
      })));
    }
  }, {
    key: "isImportAction",
    value: function isImportAction() {
      return this.props.workspaceTypeAction === 'import';
    }
  }, {
    key: "envTypeConfigsStore",
    get: function get() {
      return this.props.envTypeConfigsStore;
    }
  }]);

  return ConfigStep;
}(_react["default"].Component);

(0, _mobx.decorate)(ConfigStep, {
  envTypeConfigsStore: _mobx.computed,
  processing: _mobx.observable,
  shouldShowEnvTypeConfigDialog: _mobx.observable,
  showEnvTypeConfigDialog: _mobx.action,
  hideEnvTypeConfigDialog: _mobx.action
});

var _default = (0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ConfigStep));

exports["default"] = _default;
//# sourceMappingURL=ConfigStep.js.map