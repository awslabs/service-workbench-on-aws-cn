"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobxReact = require("mobx-react");

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("../../helpers/notification");

var _routing = require("../../helpers/routing");

var _utils = require("../../helpers/utils");

var _AuthenticationProviderConfigsStore = require("../../models/authentication/AuthenticationProviderConfigsStore");

var _BaseStore = require("../../models/BaseStore");

var _ConfigurationEditor = _interopRequireDefault(require("../configuration/ConfigurationEditor"));

var _ConfigurationReview = _interopRequireDefault(require("../configuration/ConfigurationReview"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("../helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("../helpers/ErrorBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

// expected props
// - authenticationProviderConfigId (via react router params)
// - authenticationProviderConfigsStore (via injection)
var EditAuthenticationProvider = /*#__PURE__*/function (_Component) {
  _inherits(EditAuthenticationProvider, _Component);

  var _super = _createSuper(EditAuthenticationProvider);

  function EditAuthenticationProvider() {
    var _this;

    _classCallCheck(this, EditAuthenticationProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleCancel = function () {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _goto('/authentication-providers');
    };

    _this.handleSave = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(configs) {
        var authenticationProviderConfigToUpdate, original, typeObj, providerTypeId, _goto2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                authenticationProviderConfigToUpdate = (0, _AuthenticationProviderConfigsStore.fromConfiguration)(configs);
                original = _this.getAuthenticationProviderConfig();
                typeObj = original.config.type;
                providerTypeId = typeObj.type;
                _context.next = 7;
                return _this.getStore().updateAuthenticationProvider({
                  providerTypeId: providerTypeId,
                  providerConfig: authenticationProviderConfigToUpdate
                });

              case 7:
                _goto2 = (0, _routing.gotoFn)(_assertThisInitialized(_this));

                _goto2('/authentication-providers');

                (0, _notification.displaySuccess)("The authentication provider is updated successfully");
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                (0, _notification.displayError)(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return _this;
  }

  _createClass(EditAuthenticationProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getStore();
      (0, _utils.swallowError)(store.load());
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getStore();
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 3
        });
      } else if ((0, _BaseStore.isStoreReady)(store)) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb4"
      }, content));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var id = this.getAuthenticationProviderConfigId();
      var authenticationProviderConfig = this.getAuthenticationProviderConfig();
      if (!authenticationProviderConfig) return /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
        error: "The Authentication Provider \"".concat(id, "\" does not exist")
      });

      var _goto3 = (0, _routing.gotoFn)(this);

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb.Section, {
        link: true,
        onClick: function onClick() {
          return _goto3('/authentication-providers');
        }
      }, "Authentication Providers"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb.Divider, {
        icon: "right angle"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb.Section, null, "Authentication Provider"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb.Divider, {
        icon: "right angle"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Breadcrumb.Section, {
        active: true
      }, authenticationProviderConfig.id)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml2"
      }, this.renderTitle(authenticationProviderConfig), this.renderDetails(authenticationProviderConfig.id))));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(authenticationProviderConfig) {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h1",
        color: "grey",
        className: "ml2 mt3"
      }, authenticationProviderConfig.config.title);
    }
  }, {
    key: "renderDetails",
    value: function renderDetails(authenticationProviderConfigId) {
      var authenticationProviderConfigEditor = this.getStore().getUpdateAuthenticationProviderConfigEditor(authenticationProviderConfigId);
      var model = authenticationProviderConfigEditor.configEditor;
      var review = model.review;

      if (review) {
        return /*#__PURE__*/_react["default"].createElement(_ConfigurationReview["default"], {
          model: model,
          onCancel: this.handleCancel,
          onSave: this.handleSave
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_ConfigurationEditor["default"], {
        model: model,
        onCancel: this.handleCancel
      });
    }
  }, {
    key: "getStore",
    value: function getStore() {
      return this.props.authenticationProviderConfigsStore;
    }
  }, {
    key: "getAuthenticationProviderConfigId",
    value: function getAuthenticationProviderConfigId() {
      return decodeURIComponent((this.props.match.params || {}).authenticationProviderConfigId);
    }
  }, {
    key: "getAuthenticationProviderConfig",
    value: function getAuthenticationProviderConfig() {
      var id = this.getAuthenticationProviderConfigId();
      return this.getStore().getAuthenticationProviderConfig(id);
    }
  }]);

  return EditAuthenticationProvider;
}(_react.Component);

var _default = (0, _mobxReact.inject)('authenticationProviderConfigsStore')((0, _mobxReact.observer)(EditAuthenticationProvider));

exports["default"] = _default;
//# sourceMappingURL=EditAuthenticationProvider.js.map