"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

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
// - study
var StudyFilesTable = /*#__PURE__*/function (_React$Component) {
  _inherits(StudyFilesTable, _React$Component);

  var _super = _createSuper(StudyFilesTable);

  function StudyFilesTable(props) {
    var _this;

    _classCallCheck(this, StudyFilesTable);

    _this = _super.call(this, props);
    (0, _mobx.runInAction)(function () {
      _this.filesStore = props.study.getFilesStore();
    });
    return _this;
  }

  _createClass(StudyFilesTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.filesStore.load());
      this.filesStore.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.filesStore.stopHeartbeat();
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.filesStore; // Render loading, error, or tab content

      var content;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "m0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 1
        });
      } else if ((0, _BaseStore.isStoreEmpty)(store)) {
        content = this.renderEmpty();
      } else {
        content = this.renderTable();
      }

      return content;
    }
  }, {
    key: "renderTable",
    value: function renderTable() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        striped: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Filename"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Size"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Last Modified"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, this.filesStore.files.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: file.filename
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, file.filename), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, (0, _utils.formatBytes)(file.size)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, file.lastModified.toISOString()));
      }))));
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        placeholder: true,
        className: "mt0"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        icon: true,
        className: "color-grey"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "file outline"
      }), "No files", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, "No files are uploaded yet for this study")));
    }
  }]);

  return StudyFilesTable;
}(_react["default"].Component);

(0, _mobx.decorate)(StudyFilesTable, {
  filesStore: _mobx.observable
});

var _default = (0, _mobxReact.observer)(StudyFilesTable);

exports["default"] = _default;
//# sourceMappingURL=StudyFilesTable.js.map