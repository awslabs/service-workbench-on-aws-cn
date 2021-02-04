"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _EditableNameValueRow = _interopRequireDefault(require("./EditableNameValueRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
// - field (via props) -- this is the mobx form field object. The field's value is a JSON string representation
//   of the object in shape [{key,value}]
// - nameHeader (via props) -- (optional) The label to display for the name column
// - valueHeader (via props) -- (optional) The label to display for the value column
// - actionHeader (via props) -- (optional) The label to display for the action column
// - onEnterEditMode -- (optional) function to notify when row enters edit mode.
//                      The function is passed the "rowKey" that is entering the edit mode.
// - onExitEditMode -- (optional) function to notify when row exists edit mode. (due to clicking cancel or save).
//                      The function is passed the "rowKey" that is entering the edit mode.
var NameValuesEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(NameValuesEditor, _React$Component);

  var _super = _createSuper(NameValuesEditor);

  function NameValuesEditor() {
    var _this;

    _classCallCheck(this, NameValuesEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onEnterEditMode = function (rowKey) {
      _this.hideShowAddRowButton();

      var onEnterEditMode = _this.props.onEnterEditMode;

      if (onEnterEditMode) {
        onEnterEditMode(rowKey);
      }
    };

    _this.onExitEditMode = function (rowKey) {
      _this.showAddRowButton();

      var onExitEditMode = _this.props.onExitEditMode;

      if (onExitEditMode) {
        onExitEditMode(rowKey);
      }
    };

    _this.handleNameValueChange = function (_ref) {
      var rowIdx = _ref.rowIdx,
          nameValueForm = _ref.nameValueForm;
      var nameField = nameValueForm.$('name');
      var valueField = nameValueForm.$('value');
      _this.nameValues[rowIdx] = {
        name: nameField.value,
        value: valueField.value
      };

      _this.syncField();

      _this.showAddRowButton();
    };

    _this.handleNameValueDelete = function (_ref2) {
      var rowIdx = _ref2.rowIdx;

      _this.nameValues.splice(rowIdx, 1);

      _this.syncField();
    };

    _this.hideShowAddRowButton = function () {
      _this.shouldShowAddRowButton = false;
    };

    _this.showAddRowButton = function () {
      _this.shouldShowAddRowButton = true;

      _this.hideCreateRow();
    };

    _this.hideCreateRow = function () {
      _this.shouldShowCreateRow = false;
    };

    _this.showCreateRow = function () {
      _this.shouldShowCreateRow = true;

      _this.hideShowAddRowButton();
    };

    _this.syncField = function () {
      // The nameValues is the JavaScript object representation of the specified field
      // so convert it to value by stringifying it and then sync the given form field value
      _this.value = JSON.stringify(_this.nameValues);
      var sync = _this.props.field.sync;
      sync(_this.value);
    };

    return _this;
  }

  _createClass(NameValuesEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _mobx.runInAction)(function () {
        // The value of this field as string
        _this2.value = _this2.props.field.value || '[]'; // An array containing {key, value} or { name, value } objects

        var fromKeyValueToNameValue = function fromKeyValueToNameValue(keyValue) {
          var name = keyValue.key || keyValue.name;
          return {
            name: name,
            value: keyValue.value
          };
        }; // This object's JSON string representation is used as the value for this field.


        var keyValues = JSON.parse(_this2.value || '[]') || [];
        _this2.nameValues = _lodash["default"].map(keyValues, fromKeyValueToNameValue);
        _this2.shouldShowAddRowButton = true;
        _this2.shouldShowCreateRow = false;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var nameHeader = _lodash["default"].isNil(this.props.nameHeader) ? 'Name' : this.props.nameHeader;
      var valueHeader = _lodash["default"].isNil(this.props.valueHeader) ? 'Value' : this.props.valueHeader;
      var actionHeader = _lodash["default"].isNil(this.props.actionHeader) ? 'Action' : this.props.actionHeader;

      var rows = _lodash["default"].map(this.nameValues, function (_ref3, rowIdx) {
        var name = _ref3.name,
            value = _ref3.value;
        return _this3.renderNameValueLine({
          rowIdx: rowIdx,
          name: name,
          value: value
        });
      });

      if (this.shouldShowCreateRow) {
        var rowIdx = this.nameValues.length;
        rows.push( /*#__PURE__*/_react["default"].createElement(_EditableNameValueRow["default"], {
          key: rowIdx,
          name: "",
          value: "",
          editorOn: true,
          onSubmit: function onSubmit(form) {
            _this3.handleNameValueChange({
              rowIdx: rowIdx,
              nameValueForm: form
            });
          },
          onDelete: this.hideCreateRow,
          onEnterEditMode: this.onEnterEditMode,
          onExitEditMode: this.onExitEditMode
        }));
      }

      if (_lodash["default"].isEmpty(rows)) {
        var emptyMessage = _lodash["default"].isFunction(this.props.emptyRenderer) ? this.props.emptyRenderer() : /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: "empty-row"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          colSpan: 3
        }, "No name/value pairs. Click + to add one."));
        rows.push(emptyMessage);
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        celled: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, nameHeader), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, valueHeader), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        width: 2
      }, actionHeader))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, rows), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Footer, {
        fullWidth: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, this.shouldShowAddRowButton && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        colSpan: "3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        icon: true,
        color: "blue",
        size: "tiny",
        className: "ml1",
        onClick: this.showCreateRow
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "plus"
      }))), !this.shouldShowAddRowButton && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        colSpan: "3",
        className: "pb3"
      }))));
    }
  }, {
    key: "renderNameValueLine",
    value: function renderNameValueLine(_ref4) {
      var _this4 = this;

      var rowIdx = _ref4.rowIdx,
          name = _ref4.name,
          value = _ref4.value;
      return /*#__PURE__*/_react["default"].createElement(_EditableNameValueRow["default"], {
        key: rowIdx,
        rowKey: rowIdx,
        name: name,
        value: value,
        onSubmit: function onSubmit(form) {
          return _this4.handleNameValueChange({
            rowIdx: rowIdx,
            nameValueForm: form
          });
        },
        onDelete: function onDelete() {
          return _this4.handleNameValueDelete({
            rowIdx: rowIdx
          });
        },
        onEnterEditMode: this.onEnterEditMode,
        onExitEditMode: this.onExitEditMode
      });
    }
  }]);

  return NameValuesEditor;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(NameValuesEditor, {
  nameValues: _mobx.observable,
  shouldShowAddRowButton: _mobx.observable,
  shouldShowCreateRow: _mobx.observable,
  hideShowAddRowButton: _mobx.action,
  showAddRowButton: _mobx.action,
  hideCreateRow: _mobx.action,
  showCreateRow: _mobx.action,
  handleNameValueChange: _mobx.action,
  handleNameValueDelete: _mobx.action
});

var _default = (0, _mobxReact.observer)(NameValuesEditor);

exports["default"] = _default;
//# sourceMappingURL=NameValuesEditor.js.map