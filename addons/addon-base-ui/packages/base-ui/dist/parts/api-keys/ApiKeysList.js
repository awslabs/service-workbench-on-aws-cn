"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("../../helpers/utils");

var _BaseStore = require("../../models/BaseStore");

var _Progress = _interopRequireDefault(require("../helpers/Progress"));

var _ErrorBox = _interopRequireDefault(require("../helpers/ErrorBox"));

var _notification = require("../../helpers/notification");

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
// - userApiKeysStore (via injection)
var ApiKeysList = /*#__PURE__*/function (_Component) {
  _inherits(ApiKeysList, _Component);

  var _super = _createSuper(ApiKeysList);

  function ApiKeysList() {
    var _this;

    _classCallCheck(this, ApiKeysList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.handleCreateApiKey = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.getStore().createNewApiKey();

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              (0, _notification.displayError)(_context.t0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    _this.handleRevokeApiKey = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apiKeyId) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this.getStore().revokeApiKey(apiKeyId);

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
                (0, _notification.displayError)(_context2.t0);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 5]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  _createClass(ApiKeysList, [{
    key: "getStore",
    value: function getStore() {
      return this.props.userApiKeysStore.getCurrentUserApiKeysStore();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var store = this.getStore();
      (0, _utils.swallowError)(store.load());
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.getStore();
      var content;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement("div", {
          className: "m3"
        }, /*#__PURE__*/_react["default"].createElement(_Progress["default"], null));
      } else if ((0, _BaseStore.isStoreReady)(store) && (0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else if ((0, _BaseStore.isStoreReady)(store) && (0, _BaseStore.isStoreNotEmpty)(store)) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 ml3 mr3 animated fadeIn"
      }, content);
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        text: true,
        className: "mt4 center"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h2",
        icon: true,
        textAlign: "center",
        className: "mt3",
        color: "grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "key",
        circular: true
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 ml3 mr3 animated fadeIn"
      }, "You do not have any API Keys."), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 ml3 mr3 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        color: "blue",
        size: "medium",
        basic: true,
        onClick: this.handleCreateApiKey
      }, "Create New API Key"))));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var _this2 = this;

      var apiKeys = _lodash["default"].orderBy(this.getStore().list, ['createdAt', 'status'], ['desc', 'asc']);

      var renderTotal = function renderTotal() {
        var count = apiKeys.length;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex mb3"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
          as: "h2",
          color: "grey",
          className: "flex-auto ml3"
        }, "You have", ' ', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          circular: true,
          size: "huge"
        }, count), ' ', "API Keys"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          color: "blue",
          size: "medium",
          basic: true,
          onClick: _this2.handleCreateApiKey
        }, "Create New API Key"));
      };

      var renderRow = function renderRow(rowNum, apiKey) {
        var panels = [{
          key: "panel-".concat(rowNum),
          title: {
            content: /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
              color: "blue",
              content: "Key ".concat(rowNum)
            })
          },
          content: {
            content: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("textarea", {
              style: {
                minWidth: '400px'
              },
              rows: 7,
              disabled: true,
              value: apiKey.key
            }))
          }
        }];
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: rowNum,
          className: "fit animated fadeIn"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          textAlign: "left",
          collapsing: true
        }, rowNum), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          textAlign: "left"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion, {
          defaultActiveIndex: 1,
          panels: panels
        })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          textAlign: "center",
          collapsing: true
        }, /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
          date: apiKey.createdAt
        })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          textAlign: "center",
          collapsing: true
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
          color: apiKey.effectiveStatus === 'active' ? 'green' : 'red',
          size: "small"
        }, _lodash["default"].capitalize(apiKey.effectiveStatus))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          textAlign: "center",
          collapsing: true
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          size: "small",
          color: "red",
          disabled: !apiKey.isActive,
          onClick: function onClick() {
            return _this2.handleRevokeApiKey(apiKey.id);
          }
        }, "Revoke")));
      };

      var renderTableBody = function renderTableBody() {
        var rowNum = 0;
        return _lodash["default"].map(apiKeys, function (apiKey) {
          ++rowNum;
          return renderRow(rowNum, apiKey);
        });
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        text: true,
        className: "mt4 center"
      }, renderTotal(), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        celled: true,
        striped: true,
        stackable: true,
        selectable: true,
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        textAlign: "left",
        collapsing: true
      }, "#"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        textAlign: "left"
      }, "Key"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        textAlign: "center",
        collapsing: true
      }, "Issued"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        textAlign: "center",
        collapsing: true
      }, "Status"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        textAlign: "center",
        collapsing: true
      }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, renderTableBody()))));
    }
  }]);

  return ApiKeysList;
}(_react.Component);

var _default = (0, _mobxReact.inject)('userApiKeysStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(ApiKeysList)));

exports["default"] = _default;
//# sourceMappingURL=ApiKeysList.js.map