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

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var EnvTypeStatusEnum = _interopRequireWildcard(require("../../models/environment-types/EnvTypeStatusEnum"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var EnvTypeCard = /*#__PURE__*/function (_Component) {
  _inherits(EnvTypeCard, _Component);

  var _super = _createSuper(EnvTypeCard);

  function EnvTypeCard(props) {
    var _this;

    _classCallCheck(this, EnvTypeCard);

    _this = _super.call(this, props);

    _this.showDeleteDialog = function () {
      _this.shouldShowDeleteDialog = true;
      _this.processing = false;
    };

    _this.hideDeleteDialog = function () {
      if (_this.processing) return;
      _this.shouldShowDeleteDialog = false;
    };

    _this.handleApproveRevokeClick = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var revoking,
            store,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                revoking = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
                _this.processing = true;
                store = _this.envTypesStore;
                _context.prev = 3;

                if (!revoking) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return store.revokeEnvType(id);

              case 7:
                _context.next = 11;
                break;

              case 9:
                _context.next = 11;
                return store.approveEnvType(id);

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                (0, _notification.displayError)(_context.t0);

              case 16:
                (0, _mobx.runInAction)(function () {
                  _this.processing = false;
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleDeleteClick = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var store;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.processing = true;
                store = _this.envTypesStore;
                _context2.prev = 2;
                _context2.next = 5;
                return store.deleteEnvType(id);

              case 5:
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](2);
                (0, _notification.displayError)(_context2.t0);

              case 10:
                (0, _mobx.runInAction)(function () {
                  _this.processing = false;

                  _this.hideDeleteDialog();
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 7]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleEditClick = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var _goto;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

                _goto("/workspace-types-management/edit/".concat(encodeURIComponent(id)));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.processing = false;
      _this.shouldShowDeleteDialog = false;
    });
    return _this;
  }

  _createClass(EnvTypeCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var envType = this.props.envType;
      var isApproved = EnvTypeStatusEnum.isApproved(envType.status);
      var pluginRegistry = this.props.pluginRegistry;
      var defaultMetaActions = [];
      var metaActions = pluginRegistry.visitPlugins('env-type-management', 'getEnvTypeCardMetaActions', {
        payload: defaultMetaActions
      }, envType);
      var defaultMgmtActions = [/*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        key: "env-type-mgmt-action-edit",
        basic: true,
        color: "blue",
        onClick: function onClick() {
          return _this2.handleEditClick(envType.id);
        },
        floated: "right",
        size: "mini",
        disabled: this.processing
      }, "Edit"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        key: "env-type-mgmt-action-delete",
        basic: true,
        color: "red",
        onClick: function onClick() {
          return _this2.showDeleteDialog();
        },
        floated: "right",
        size: "mini",
        disabled: this.processing
      }, "Delete"), this.renderDeleteConfirmation(envType), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        key: "env-type-mgmt-action-revoke-or-approve",
        basic: true,
        color: isApproved ? 'red' : 'blue',
        onClick: function onClick() {
          return _this2.handleApproveRevokeClick(envType.id, isApproved);
        },
        floated: "right",
        size: "mini",
        disabled: this.processing
      }, isApproved ? 'Revoke' : 'Approve')];
      var mgmtActions = pluginRegistry.visitPlugins('env-type-management', 'getEnvTypeCardMgmtActions', {
        payload: defaultMgmtActions
      }, envType);
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
        key: "et-".concat(envType.id),
        raised: true,
        className: "mb3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h4"
      }, envType.name), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Meta, {
        className: "flex"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey mr2"
      }, envType.id), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        className: "ml1",
        size: "mini",
        color: isApproved ? 'green' : 'red'
      }, isApproved ? 'Approved' : 'Not Approved')), _lodash["default"].map(metaActions, function (c) {
        return c;
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Description, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 pr1 pl1 pb1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: envType.descHtml
        }
      })))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, {
        extra: true
      }, _lodash["default"].map(mgmtActions, function (c) {
        return c;
      })));
    }
  }, {
    key: "renderDeleteConfirmation",
    value: function renderDeleteConfirmation(envType) {
      var _this3 = this;

      var shouldShowDeleteDialog = this.shouldShowDeleteDialog;
      var processing = this.processing;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        key: "env-type-mgmt-action-delete-confirmation",
        open: shouldShowDeleteDialog,
        onClose: this.hideDeleteDialog,
        closeOnDimmerClick: !processing
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Header, null, "Delete ", envType.name), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, /*#__PURE__*/_react["default"].createElement("p", null, "Are you sure you want to delete ", envType.name, "?"), /*#__PURE__*/_react["default"].createElement("p", null, "Once you delete environment type, users will not be able launch them. You will need to re-import it from the AWS Service Catalog Product."), /*#__PURE__*/_react["default"].createElement("p", null, "Is it okay to delete?")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
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
          return _this3.handleDeleteClick(envType.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "trash"
      }), " Delete")));
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }]);

  return EnvTypeCard;
}(_react.Component);

(0, _mobx.decorate)(EnvTypeCard, {
  processing: _mobx.observable,
  envTypesStore: _mobx.computed,
  shouldShowDeleteDialog: _mobx.observable,
  handleEditClick: _mobx.action,
  handleDeleteClick: _mobx.action,
  handleApproveRevokeClick: _mobx.action,
  showDeleteDialog: _mobx.action,
  hideDeleteDialog: _mobx.action
});

var _default = (0, _mobxReact.inject)('pluginRegistry')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(EnvTypeCard)));

exports["default"] = _default;
//# sourceMappingURL=EnvTypeCard.js.map