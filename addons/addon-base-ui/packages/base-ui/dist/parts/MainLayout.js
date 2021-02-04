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

var _routing = require("../helpers/routing");

var _notification = require("../helpers/notification");

var _settings = require("../helpers/settings");

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

// expected props
// - userStore (via injection)
var MainLayout = /*#__PURE__*/function (_React$Component) {
  _inherits(MainLayout, _React$Component);

  var _super = _createSuper(MainLayout);

  function MainLayout() {
    var _this;

    _classCallCheck(this, MainLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this["goto"] = function (pathname) {
      return function () {
        var location = _this.props.location;
        var link = (0, _routing.createLink)({
          location: location,
          pathname: pathname
        });

        _this.props.history.push(link);
      };
    };

    _this.handleLogout = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();
                _context.prev = 2;
                _context.next = 5;
                return _this.props.authentication.logout();

              case 5:
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);
                (0, _notification.displayError)(_context.t0);

              case 10:
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

    return _this;
  }

  _createClass(MainLayout, [{
    key: "getMenuItems",
    value: function getMenuItems() {
      return this.props.menuItems || [];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentUser = this.props.userStore.user;
      var displayName = currentUser ? currentUser.displayName : 'Not Logged In';

      var pathname = _lodash["default"].get(this.props.location, 'pathname', '');

      var is = function is(value) {
        return _lodash["default"].startsWith(pathname, value);
      };

      var itemsArr = this.getMenuItems();
      return [/*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu, {
        vertical: true,
        inverted: true,
        fixed: "left",
        icon: "labeled",
        key: "ml1",
        style: {
          overflowY: 'auto'
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, {
        name: " ",
        style: {
          height: '40px'
        }
      }), _lodash["default"].map(itemsArr, function (item, index) {
        var show = _lodash["default"].isFunction(item.shouldShow) && item.shouldShow() || item.shouldShow;
        return show && (item.body ? item.body : /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, {
          key: index,
          active: is(item.url),
          onClick: is(item.url) ? undefined : _this2["goto"](item.url)
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: item.icon,
          size: "mini"
        }), /*#__PURE__*/_react["default"].createElement("span", {
          className: "fs-7"
        }, item.title)));
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu, {
        inverted: true,
        color: "black",
        fixed: "top",
        className: "box-shadow zindex-1500",
        key: "ml2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, {
        style: {
          height: '50px',
          verticalAlign: 'middle'
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Image, {
        size: "mini",
        src: this.props.assets.images.logoImage,
        className: "mr1",
        style: {
          height: '40px',
          width: 'auto'
        }
      }), /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          paddingLeft: '5px'
        }
      }, _settings.branding.main.title)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Menu, {
        position: "right"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "user"
      }), " ", displayName), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, {
        name: "logout",
        onClick: this.handleLogout
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "fit animated fadeIn",
        style: {
          paddingTop: '40px',
          paddingLeft: '84px',
          paddingBottom: '100px'
        },
        key: "ml3"
      }, this.props.children)];
    }
  }]);

  return MainLayout;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(MainLayout, {
  handleLogout: _mobx.action
});

var _default = (0, _mobxReact.inject)('authentication', 'userStore', 'assets')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(MainLayout)));

exports["default"] = _default;
//# sourceMappingURL=MainLayout.js.map