"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _mobxReact = require("mobx-react");

var _lodash = _interopRequireDefault(require("lodash"));

var _NameValueForm = require("../../../models/forms/NameValueForm");

var _EditableField = _interopRequireDefault(require("./EditableField"));

var _Input = _interopRequireDefault(require("./Input"));

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
// - rowKey (via props) -- The key to identify this row
// - name (via props) -- The name in the { name, value } pair
// - value (via props) -- The value in the { name, value } pair
// - editorOn (via props) -- Flag indicating if the row should be displayed in
//                            edit more or view mode (true - edit mode, false - view mode)
// - onSubmit (via props) -- Function to call when save is clicked on the row
// - onCancel (via props) -- Function to call when cancel is clicked on the row
// - onDelete (via props) -- Function to call when delete is clicked on the row
// - onEnterEditMode -- (optional) function to notify when row enters edit mode.
//                      The function is passed the "rowKey" that is entering the edit mode.
// - onExitEditMode -- (optional) function to notify when row exists edit mode. (due to clicking cancel or save).
//                      The function is passed the "rowKey" that is entering the edit mode.
var EditableNameValueRow = /*#__PURE__*/function (_React$Component) {
  _inherits(EditableNameValueRow, _React$Component);

  var _super = _createSuper(EditableNameValueRow);

  function EditableNameValueRow(props) {
    var _this;

    _classCallCheck(this, EditableNameValueRow);

    _this = _super.call(this, props);
    _this.handleEditClick = (0, _mobx.action)( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.notifyHandler(_this.props.onEnterEditMode, key);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _this.handleSubmit = (0, _mobx.action)( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(form) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.notifyHandler(_this.props.onExitEditMode, _this.props.rowKey);

              case 2:
                _context2.next = 4;
                return _this.notifyHandler(_this.props.onSubmit, form);

              case 4:
                (0, _mobx.runInAction)(function () {
                  _this.form = (0, _NameValueForm.getNameValueForm)({
                    name: _this.props.name,
                    value: _this.props.value
                  });
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    _this.handleCancel = (0, _mobx.action)( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(form) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.notifyHandler(_this.props.onExitEditMode, _this.props.rowKey);

              case 2:
                _context3.next = 4;
                return _this.notifyHandler(_this.props.onCancel, form);

              case 4:
                (0, _mobx.runInAction)(function () {
                  _this.form = (0, _NameValueForm.getNameValueForm)({
                    name: _this.props.name,
                    value: _this.props.value
                  });
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
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
      _this.form = (0, _NameValueForm.getNameValueForm)({
        name: props.name,
        value: props.value
      });

      if (props.editorOn) {
        _this.handleEditClick();
      }
    });
    return _this;
  }

  _createClass(EditableNameValueRow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.form;
      var nameField = form.$('name');
      var valueField = form.$('value');
      var onDelete = this.props.onDelete;
      return /*#__PURE__*/_react["default"].createElement(_EditableField["default"], {
        form: form,
        showDimmer: false,
        showErrorPanel: false,
        renderFormAs: // Do not want the EditableField to render a "form" tag so rendering
        // the content of the form as is without the "form".
        // This is done because the row is rendered inside table.body
        // rendering form directly in the table body is invalid structure
        function renderFormAs(formContent) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, formContent);
        },
        editorOn: this.props.editorOn,
        onSubmit: this.handleSubmit,
        onCancel: this.handleCancel,
        renderFieldForView: function renderFieldForView(_ref5) {
          var onClickEdit = _ref5.onEditorOn;
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, _this2.props.name), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, _this2.props.value), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
            name: "pencil",
            className: "ml1 cursor-pointer",
            color: "grey",
            onClick: function onClick() {
              onClickEdit();

              _this2.handleEditClick(_this2.props.rowKey);
            }
          }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
            name: "trash",
            className: "ml1 cursor-pointer",
            color: "grey",
            onClick: onDelete
          })));
        },
        renderFieldForEdit: function renderFieldForEdit(_ref6) {
          var processing = _ref6.processing,
              submit = _ref6.onSubmit,
              onCancel = _ref6.onCancel;
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
            field: nameField,
            className: "mb0",
            showHeader: false,
            disabled: processing
          })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
            field: valueField,
            className: "mb0",
            showHeader: false,
            disabled: processing
          })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
            name: "close",
            className: "ml1 cursor-pointer",
            color: "grey",
            onClick: onCancel
          }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
            name: "check",
            className: "ml1 cursor-pointer",
            color: "grey",
            onClick: submit
          })));
        }
      });
    }
  }]);

  return EditableNameValueRow;
}(_react["default"].Component);

var _default = (0, _mobxReact.observer)(EditableNameValueRow);

exports["default"] = _default;
//# sourceMappingURL=EditableNameValueRow.js.map