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

var _classnames = _interopRequireDefault(require("classnames"));

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
// - form (via props) the mobx form instance
// - onSuccess (via props) is called once mobx form calls on hooks.onSuccess(), receives (form)
// - onError (via props) is called once mobx form calls on hooks.onError(), receives (form)
// - onCancel (via props) receives (form)
// - dimmer (via props) default to true, set to false if you don't want to use the dimmer (buttons will still be disabled during processing)
// - className (via props)
// - showErrorPanel (via props) default to true, set to false if you don't want the error panel to be rendered (i.e., if you only want the errors to be displayed next to the fields but not show the main error panel)
var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);

    _this.handleFormSubmission = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var onSuccess, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                onSuccess = _this.getOnSuccess();
                _this.formProcessing = true;
                _context.prev = 2;
                _context.next = 5;
                return onSuccess(form);

              case 5:
                result = _context.sent;
                (0, _mobx.runInAction)(function () {
                  _this.formProcessing = false;
                });
                return _context.abrupt("return", result);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                (0, _mobx.runInAction)(function () {
                  _this.formProcessing = false;
                });
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleFormErrors = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(form) {
        var onError, errors;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onError = _this.getOnError();
                _this.formProcessing = false;
                errors = _this.getFormErrors();
                return _context2.abrupt("return", onError(form, errors));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleSubmit = function (event) {
      var form = _this.getForm();

      event.preventDefault();
      event.stopPropagation();
      _this.formProcessing = true;

      try {
        return form.onSubmit(event, _this.formHooks);
      } catch (error) {
        _this.formProcessing = false;
        throw error;
      }
    };

    _this.handleCancel = function (event) {
      var form = _this.getForm();

      var onCancel = _this.getOnCancel();

      event.preventDefault();
      event.stopPropagation();
      _this.formProcessing = false;
      form.reset();
      onCancel(form);
    };

    _this.formHooks = {
      onSuccess: _this.handleFormSubmission,
      onError: _this.handleFormErrors
    };
    (0, _mobx.runInAction)(function () {
      _this.formProcessing = false;
    });
    return _this;
  }

  _createClass(Form, [{
    key: "getForm",
    value: function getForm() {
      return this.props.form;
    }
  }, {
    key: "getDimmer",
    value: function getDimmer() {
      var dimmer = this.props.dimmer;
      return _lodash["default"].isUndefined(dimmer) ? true : !!dimmer;
    }
  }, {
    key: "getOnCancel",
    value: function getOnCancel() {
      return this.props.onCancel || _lodash["default"].noop;
    }
  }, {
    key: "getOnSuccess",
    value: function getOnSuccess() {
      return this.props.onSuccess || _lodash["default"].noop;
    }
  }, {
    key: "getOnError",
    value: function getOnError() {
      return this.props.onError || _lodash["default"].noop;
    }
  }, {
    key: "getFormErrors",
    value: function getFormErrors() {
      var form = this.getForm();
      var errorMap = form.errors() || {};
      var errors = [];

      var visit = function visit(obj) {
        if (_lodash["default"].isNil(obj)) return;

        if (_lodash["default"].isString(obj) && !_lodash["default"].isEmpty(obj)) {
          errors.push(obj);
          return;
        }

        if (_lodash["default"].isArray(obj) || _lodash["default"].isObject(obj)) {
          _lodash["default"].forEach(obj, function (value) {
            visit(value);
          });
        }
      };

      visit(errorMap);
      return errors;
    }
  }, {
    key: "renderErrorPanel",
    value: function renderErrorPanel() {
      var errors = this.getFormErrors();
      var size = errors.length;
      if (size === 0) return null;
      var title = "Please Correct The Following Error".concat(size === 1 ? '' : 's');

      var toMessage = function toMessage(msg) {
        return _lodash["default"].isObject(msg) ? JSON.stringify(msg) : "".concat(msg);
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        className: "mb3 mt0 animated fadeIn",
        negative: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, title), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.List, null, _lodash["default"].map(errors, function (msg, index) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Item, {
          key: index
        }, toMessage(msg));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var processing = this.formProcessing;
      var renderer = _lodash["default"].isFunction(this.props.children) ? this.props.children : _lodash["default"].noop;
      var className = this.props.className;
      var dimmer = this.getDimmer();
      var errors = this.getFormErrors();
      var showErrorPanel = _lodash["default"].isNil(this.props.showErrorPanel) || this.props.showErrorPanel;

      var formContent = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, dimmer && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer, {
        active: processing,
        inverted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Loader, {
        inverted: true
      }, "Processing")), showErrorPanel && this.renderErrorPanel(), renderer({
        processing: processing,
        errors: errors,
        onSubmit: this.handleSubmit,
        onCancel: this.handleCancel
      }));

      var renderFormAs = this.props.renderFormAs;

      if (_lodash["default"].isFunction(renderFormAs)) {
        return renderFormAs(formContent);
      }

      return /*#__PURE__*/_react["default"].createElement("form", {
        className: (0, _classnames["default"])('ui fluid form', className),
        onSubmit: this.handleSubmit
      }, formContent);
    }
  }]);

  return Form;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(Form, {
  formProcessing: _mobx.observable,
  handleSubmit: _mobx.action,
  handleFormSubmission: _mobx.action,
  handleFormErrors: _mobx.action,
  handleCancel: _mobx.action
});

var _default = (0, _mobxReact.observer)(Form);

exports["default"] = _default;
//# sourceMappingURL=Form.js.map