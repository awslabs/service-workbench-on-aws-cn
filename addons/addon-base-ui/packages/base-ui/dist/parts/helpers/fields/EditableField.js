"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobxReact = require("mobx-react");

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _lodash = _interopRequireDefault(require("lodash"));

var _notification = require("../../../helpers/notification");

var _Form = _interopRequireDefault(require("./Form"));

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
// - form -- A single field Mobx Form specific to this field.
// - renderFieldForView -- Called to render the field in "view" mode.
// - renderFieldForEdit -- Called to render the field in "edit" mode.
// - onSubmit - optional -- Called when form specific to this field is submitted
// - onCancel - optional -- Called when the field is being canceled for edit (i.e., transitioning from edit mode to view mode)
// - onError - optional -- Called when any error occurs when processing the form (may be validation errors)

/**
 * A field component that can be used for places where you require single field edits (such as inline edits).
 * The field handles switching between "view" mode and "edit" mode.
 */
var EditableField = /*#__PURE__*/function (_React$Component) {
  _inherits(EditableField, _React$Component);

  var _super = _createSuper(EditableField);

  function EditableField(props) {
    var _this;

    _classCallCheck(this, EditableField);

    _this = _super.call(this, props);
    _this.handleEditorOn = (0, _mobx.action)(function () {
      _this.editorOn = true;
    });
    _this.handleFormSubmission = (0, _mobx.action)( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.notifyHandler(_this.props.onSubmit, form);

              case 3:
                (0, _mobx.runInAction)(function () {
                  _this.editorOn = false;
                });
                _context.next = 11;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                (0, _notification.displayError)(_context.t0);
                form.clear();
                (0, _mobx.runInAction)(function () {
                  _this.editorOn = false;
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _this.handleCancel = (0, _mobx.action)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.editorOn = false; // notify onCancel

              _context2.next = 3;
              return _this.notifyHandler(_this.props.onCancel);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    _this.handleFormError = (0, _mobx.action)( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(form, errors) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.notifyHandler(_this.props.onError, form, errors);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _this.notifyHandler = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(handlerFn) {
        var handlerFnToNotify,
            _len,
            args,
            _key,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                handlerFnToNotify = handlerFn || _lodash["default"].noop;

                for (_len = _args4.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = _args4[_key];
                }

                _context4.next = 4;
                return handlerFnToNotify.apply(void 0, args);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.editorOn = _lodash["default"].isNil(props.editorOn) ? false : props.editorOn;
    });
    return _this;
  }

  _createClass(EditableField, [{
    key: "render",
    value: function render() {
      if (this.editorOn) return this.renderEditMode();
      return this.renderViewMode();
    }
  }, {
    key: "renderEditMode",
    value: function renderEditMode() {
      var form = this.props.form;
      var renderFieldForEdit = this.props.renderFieldForEdit;
      return /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        dimmer: this.props.showDimmer,
        showErrorPanel: this.props.showErrorPanel,
        renderFormAs: this.props.renderFormAs,
        onCancel: this.handleCancel,
        onSuccess: this.handleFormSubmission,
        onError: this.handleFormError
      }, function (_ref5) {
        var processing = _ref5.processing,
            onSubmit = _ref5.onSubmit,
            onCancel = _ref5.onCancel;
        return renderFieldForEdit({
          processing: processing,
          onSubmit: onSubmit,
          onCancel: onCancel
        });
      });
    }
  }, {
    key: "renderViewMode",
    value: function renderViewMode() {
      return this.props.renderFieldForView({
        onEditorOn: this.handleEditorOn
      });
    }
  }]);

  return EditableField;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(EditableField, {
  editorOn: _mobx.observable
});

var _default = (0, _mobxReact.observer)(EditableField);

exports["default"] = _default;
//# sourceMappingURL=EditableField.js.map