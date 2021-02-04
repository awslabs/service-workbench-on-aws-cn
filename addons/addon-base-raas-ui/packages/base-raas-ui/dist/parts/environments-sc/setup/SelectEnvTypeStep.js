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

var _classnames = _interopRequireDefault(require("classnames"));

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// - onPrevious (via props)
// - onNext (via props) a function is called with the selected envTypeId
// - envTypesStore (via injection)
// - userStore (via injection)
var SelectEnvTypeStep = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectEnvTypeStep, _React$Component);

  var _super = _createSuper(SelectEnvTypeStep);

  function SelectEnvTypeStep(props) {
    var _this;

    _classCallCheck(this, SelectEnvTypeStep);

    _this = _super.call(this, props);

    _this.handleSelectedEnvType = function (typeId) {
      _this.selectedEnvTypeId = typeId;
    };

    _this.handlePrevious = function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (_lodash["default"].isFunction(_this.props.onPrevious)) _this.props.onPrevious();
    };

    _this.handleNext = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                event.stopPropagation();

                if (!_lodash["default"].isFunction(_this.props.onNext)) {
                  _context.next = 15;
                  break;
                }

                _context.prev = 3;
                _this.processing = true;
                _context.next = 7;
                return _this.props.onNext(_this.selectedEnvTypeId);

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                (0, _notification.displayError)(_context.t0);

              case 12:
                _context.prev = 12;
                (0, _mobx.runInAction)(function () {
                  _this.processing = false;
                });
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9, 12, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.selectedEnvTypeId = undefined;
      _this.processing = false;
    });
    return _this;
  }

  _createClass(SelectEnvTypeStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      (0, _utils.swallowError)(this.envTypesStore.load());
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
      var store = this.envTypesStore;
      if (!store) return null;
      var content;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = this.renderLoadingError();
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          className: "mt2"
        });
      } else if ((0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else {
        content = this.renderContent();
      }

      return content;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      // Logic:
      // - if external researcher and no aws creds configured yet, show a message
      // - if guest (internal/external) show a message
      // - if internal researcher and no project ids, show a message
      // - else show env types card
      var nextDisabled = _lodash["default"].isUndefined(this.selectedEnvTypeId);

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, this.renderCards(), this.renderButtons({
        nextDisabled: nextDisabled
      }));
    }
  }, {
    key: "renderCards",
    value: function renderCards() {
      var _this2 = this;

      var processing = this.processing;
      var envTypes = this.envTypesStore.listApproved || [];

      var isSelected = function isSelected(type) {
        return type.id === _this2.selectedEnvTypeId;
      };

      var getAttrs = function getAttrs(type) {
        var attrs = {};
        if (isSelected(type)) attrs.color = 'blue';
        if (!processing) attrs.onClick = function () {
          return _this2.handleSelectedEnvType(type.id);
        };
        return attrs;
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Group, {
        stackable: true,
        itemsPerRow: 3
      }, _lodash["default"].map(envTypes, function (type) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, _extends({
          "data-testid": "env-type-card",
          key: type.id,
          raised: true,
          className: (0, _classnames["default"])('mb3', {
            'cursor-pointer': !processing
          })
        }, getAttrs(type)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Header, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex mt1"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Radio, {
          className: "mr2",
          checked: isSelected(type),
          disabled: processing
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
          as: "h4",
          className: "flex-auto mt0 pt0"
        }, type.name)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Description, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "mb3 pr1 pl1 pb1"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          dangerouslySetInnerHTML: {
            __html: type.descHtml
          }
        })))));
      }));
    }
  }, {
    key: "renderLoadingError",
    value: function renderLoadingError() {
      var store = this.envTypesStore;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
        error: store.error,
        className: "p0 mt2 mb3"
      }), this.renderButtons());
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "server"
      }), "No workspace types", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "There are no workspace types to choose from. Your role might be restricted. Please contact your administrator."))), this.renderButtons());
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$nextDisabled = _ref2.nextDisabled,
          nextDisabled = _ref2$nextDisabled === void 0 ? true : _ref2$nextDisabled;

      var processing = this.processing;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        icon: "right arrow",
        labelPosition: "right",
        className: "ml2",
        primary: true,
        content: "Next",
        loading: processing,
        disabled: nextDisabled || processing,
        onClick: this.handleNext
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        icon: "left arrow",
        labelPosition: "left",
        className: "ml2",
        content: "Previous",
        disabled: processing,
        onClick: this.handlePrevious
      }));
    }
  }, {
    key: "userStore",
    get: function get() {
      return this.props.userStore;
    }
  }, {
    key: "envTypesStore",
    get: function get() {
      return this.props.envTypesStore;
    }
  }]);

  return SelectEnvTypeStep;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(SelectEnvTypeStep, {
  handlePrevious: _mobx.action,
  handleNext: _mobx.action,
  handleSelectedEnvType: _mobx.action,
  userStore: _mobx.computed,
  envTypesStore: _mobx.computed,
  processing: _mobx.observable,
  selectedEnvTypeId: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userStore', 'envTypesStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(SelectEnvTypeStep)));

exports["default"] = _default;
//# sourceMappingURL=SelectEnvTypeStep.js.map