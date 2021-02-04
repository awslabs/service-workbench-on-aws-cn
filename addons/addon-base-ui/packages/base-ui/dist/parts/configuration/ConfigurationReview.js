"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("../../helpers/notification");

var _ConfigTable = _interopRequireDefault(require("./ConfigTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
// - model - an instance of the ConfigurationEditor model instance (via props)
// - onCancel (via props) is called after all the necessary clean up
// - onSave (via props) is called with (configuration) which is just an object with key/value pairs
// - dimmer (via props) default to true, set to false if you don't want to use the dimmer (buttons will still be disabled during processing)
var ConfigurationReview = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfigurationReview, _React$Component);

  var _super = _createSuper(ConfigurationReview);

  function ConfigurationReview(props) {
    var _this;

    _classCallCheck(this, ConfigurationReview);

    _this = _super.call(this, props);

    _this.handleCancel = function () {
      _this.processing = false;
      var onCancel = _this.props.onCancel || _lodash["default"].noop;

      var model = _this.getModel();

      model.cancel();
      return onCancel();
    };

    _this.handleSave = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var onSave, model, configuration, _iterator, _step, _step$value, key, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onSave = _this.props.onSave || _lodash["default"].noop;
              model = _this.getModel();
              configuration = {};
              /* eslint-disable no-restricted-syntax */

              _iterator = _createForOfIteratorHelper(model.configuration.entries());

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], value = _step$value[1];
                  configuration[key] = value;
                }
                /* eslint-enable no-restricted-syntax */

              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _context.prev = 5;
              _this.processing = true;
              _context.next = 9;
              return onSave(configuration);

            case 9:
              (0, _mobx.runInAction)(function () {
                _this.processing = false;
              });
              model.applyChanges();
              model.restart();
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](5);
              (0, _mobx.runInAction)(function () {
                _this.processing = false;
              });
              (0, _notification.displayError)(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 14]]);
    }));

    _this.handlePrevious = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var form = _this.getForm();

      var model = _this.getModel();

      _this.processing = false;
      model.previous(form);
    };

    (0, _mobx.runInAction)(function () {
      _this.processing = false;
    });
    return _this;
  }

  _createClass(ConfigurationReview, [{
    key: "getModel",
    value: function getModel() {
      return this.props.model;
    }
  }, {
    key: "getForm",
    value: function getForm() {
      var model = this.getModel();
      return model.form;
    }
  }, {
    key: "getDimmer",
    value: function getDimmer() {
      var dimmer = this.props.dimmer;
      return _lodash["default"].isUndefined(dimmer) ? true : !!dimmer;
    }
  }, {
    key: "render",
    value: function render() {
      var processing = this.processing;
      var dimmer = this.getDimmer();
      var model = this.getModel();
      var configRows = model.definedConfigList || [];
      var empty = configRows.length === 0;
      var review = model.review;

      var buttons = /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 clearfix"
      }, review && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        color: "blue",
        icon: "save",
        labelPosition: "left",
        disabled: processing || !review || empty,
        className: "ml2",
        content: "Save",
        onClick: this.handleSave
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        icon: true,
        disabled: processing,
        labelPosition: "left",
        onClick: this.handlePrevious
      }, "Previous", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "left arrow"
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "left",
        disabled: processing,
        onClick: this.handleCancel
      }, "Cancel"));

      var content = /*#__PURE__*/_react["default"].createElement(_ConfigTable["default"], {
        rows: configRows
      });

      if (empty) content = 'No configuration values are provided';
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, review && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        padded: true
      }, dimmer && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer, {
        active: processing,
        inverted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Loader, {
        inverted: true
      }, "Processing")), content), buttons);
    }
  }]);

  return ConfigurationReview;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(ConfigurationReview, {
  processing: _mobx.observable,
  handleSave: _mobx.action,
  handlePrevious: _mobx.action,
  handleCancel: _mobx.action
});

var _default = (0, _mobxReact.observer)(ConfigurationReview);

exports["default"] = _default;
//# sourceMappingURL=ConfigurationReview.js.map