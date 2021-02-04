"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _mobx = require("mobx");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _EnvTypeConfigEditor = _interopRequireDefault(require("./EnvTypeConfigEditor"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var EnvTypeConfigCard = /*#__PURE__*/function (_Component) {
  _inherits(EnvTypeConfigCard, _Component);

  var _super = _createSuper(EnvTypeConfigCard);

  function EnvTypeConfigCard(props) {
    var _this;

    _classCallCheck(this, EnvTypeConfigCard);

    _this = _super.call(this, props);

    _this.showDeleteDialog = function () {
      _this.shouldShowDeleteDialog = true;
      _this.processing = false;
    };

    _this.hideDeleteDialog = function () {
      if (_this.processing) return;
      _this.shouldShowDeleteDialog = false;
    };

    _this.showCloneDialog = function () {
      _this.cloning = true;

      _this.showEditorDialog();
    };

    _this.showEditorDialog = function () {
      _this.shouldShowEditorDialog = true;
      _this.processing = false;
    };

    _this.hideEditorDialog = function () {
      if (_this.processing) return;
      _this.shouldShowEditorDialog = false;
      _this.cloning = false;
    };

    _this.handleDeleteClick = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var store;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.processing = true;
                store = _this.envTypeConfigsStore;
                _context.prev = 2;
                _context.next = 5;
                return store.deleteEnvTypeConfig(id);

              case 5:
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);
                (0, _notification.displayError)(_context.t0);

              case 10:
                (0, _mobx.runInAction)(function () {
                  _this.processing = false;

                  _this.hideDeleteDialog();
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.processing = false;
      _this.shouldShowDeleteDialog = false;
      _this.shouldShowEditorDialog = false;
      _this.cloning = false;
    });
    return _this;
  }

  _createClass(EnvTypeConfigCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var envTypeConfig = this.props.envTypeConfig;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
        key: "etConfig-".concat(envTypeConfig.id),
        raised: true,
        className: "mb3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h4"
      }, envTypeConfig.name), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Meta, {
        className: "flex"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "flex-auto"
      }, _lodash["default"].get(envTypeConfig, 'id')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "grey",
        onClick: function onClick() {
          return _this2.showCloneDialog();
        },
        floated: "right",
        size: "mini",
        disabled: this.processing
      }, "Clone")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Description, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 pr1 pl1 pb1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: envTypeConfig.descHtml
        }
      })))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, {
        extra: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "blue",
        onClick: function onClick() {
          return _this2.showEditorDialog();
        },
        floated: "right",
        size: "mini",
        disabled: this.processing
      }, "Edit"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "red",
        onClick: function onClick() {
          return _this2.showDeleteDialog();
        },
        floated: "right",
        size: "mini",
        disabled: this.processing
      }, "Delete"), this.renderDeleteConfirmation(envTypeConfig), this.renderEditorPopup(envTypeConfig)));
    }
  }, {
    key: "renderEditorPopup",
    value: function renderEditorPopup(envTypeConfig) {
      var shouldShowEditorDialog = this.shouldShowEditorDialog;
      var mode = this.cloning ? 'clone' : 'edit';
      var envTypeConfigForEditor = this.cloning ? _objectSpread({}, envTypeConfig, {
        id: "".concat(envTypeConfig.id, "-copy"),
        name: "".concat(envTypeConfig.name, "-copy")
      }) : envTypeConfig;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        closeIcon: true,
        open: shouldShowEditorDialog,
        onClose: this.hideEditorDialog,
        closeOnDimmerClick: false,
        closeOnEscape: false,
        size: "large"
      }, /*#__PURE__*/_react["default"].createElement(_EnvTypeConfigEditor["default"], {
        onCancel: this.hideEditorDialog,
        envTypeConfig: envTypeConfigForEditor,
        envType: this.props.envType,
        envTypeConfigsStore: this.envTypeConfigsStore,
        onEnvTypeConfigSaveComplete: this.hideEditorDialog,
        action: mode
      }));
    }
  }, {
    key: "renderDeleteConfirmation",
    value: function renderDeleteConfirmation(envTypeConfig) {
      var _this3 = this;

      var shouldShowDeleteDialog = this.shouldShowDeleteDialog;
      var processing = this.processing;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        open: shouldShowDeleteDialog,
        onClose: this.hideDeleteDialog,
        closeOnDimmerClick: !processing
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Header, null, "Delete Configuration: ", /*#__PURE__*/_react["default"].createElement("strong", null, envTypeConfig.name)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, /*#__PURE__*/_react["default"].createElement("p", null, "Are you sure you want to delete ", /*#__PURE__*/_react["default"].createElement("strong", null, envTypeConfig.name), " configuration?"), /*#__PURE__*/_react["default"].createElement("p", null, "Once you delete environment type configuration, users will not be able launch workspaces using that configuration. You will need to re-create the configuration."), /*#__PURE__*/_react["default"].createElement("p", null, "Is it okay to delete?")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        icon: true,
        color: "grey",
        labelPosition: "right",
        size: "mini",
        disabled: this.processing,
        onClick: this.hideDeleteDialog
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "close"
      }), "Cancel"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        icon: true,
        color: "red",
        labelPosition: "right",
        size: "mini",
        disabled: this.processing,
        onClick: function onClick() {
          return _this3.handleDeleteClick(envTypeConfig.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "trash"
      }), " Delete")));
    }
  }, {
    key: "envTypeConfigsStore",
    get: function get() {
      return this.props.envTypeConfigsStore;
    }
  }]);

  return EnvTypeConfigCard;
}(_react.Component);

(0, _mobx.decorate)(EnvTypeConfigCard, {
  processing: _mobx.observable,
  envTypeConfigsStore: _mobx.computed,
  shouldShowDeleteDialog: _mobx.observable,
  shouldShowEditorDialog: _mobx.observable,
  cloning: _mobx.observable,
  handleDeleteClick: _mobx.action,
  showDeleteDialog: _mobx.action,
  hideDeleteDialog: _mobx.action,
  showCloneDialog: _mobx.action,
  showEditorDialog: _mobx.action,
  hideEditorDialog: _mobx.action
});

var _default = (0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvTypeConfigCard));

exports["default"] = _default;
//# sourceMappingURL=EnvTypeConfigCard.js.map