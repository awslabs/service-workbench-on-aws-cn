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

var _classnames = _interopRequireDefault(require("classnames"));

var _StudyFilesTable = _interopRequireDefault(require("./StudyFilesTable"));

var _StudyPermissionsTable = _interopRequireDefault(require("./StudyPermissionsTable"));

var _UploadStudyFiles = _interopRequireDefault(require("./UploadStudyFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// - study (via props)
// - isSelectable (via props)
// - filesSelection (via injection)
var StudyRow = /*#__PURE__*/function (_React$Component) {
  _inherits(StudyRow, _React$Component);

  var _super = _createSuper(StudyRow);

  function StudyRow(props) {
    var _this;

    _classCallCheck(this, StudyRow);

    _this = _super.call(this, props);

    _this.handleFileSelection = function (study) {
      var selection = _this.props.filesSelection;

      if (selection.hasFile(study.id)) {
        selection.deleteFile(study.id);
      } else {
        var id = study.id,
            name = study.name,
            description = study.description; // TODO: actually do different statuses?

        selection.setFile({
          id: id,
          name: name,
          description: description,
          accessStatus: 'approved'
        });
      }
    };

    _this.handleFilesExpanded = function () {
      _this.filesExpanded = !_this.filesExpanded;
    };

    _this.handlePermissionsExpanded = function () {
      _this.permissionsExpanded = !_this.permissionsExpanded;
    };

    (0, _mobx.runInAction)(function () {
      _this.filesExpanded = false;
      _this.permissionsExpanded = false;
    });
    return _this;
  }

  _createClass(StudyRow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isSelectable = this.isSelectable; // Internal and external guests can't select studies

      var study = this.study;
      var selection = this.props.filesSelection;
      var isSelected = selection.hasFile(study.id);
      var attrs = {};
      var onClickAttr = {};
      if (isSelected) attrs.color = 'blue';
      if (isSelectable) onClickAttr.onClick = function () {
        return _this2.handleFileSelection(study);
      };
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, _extends({
        clearing: true,
        padded: true,
        raised: true,
        className: "mb3"
      }, attrs), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex"
      }, /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: "mr2"
      }, onClickAttr), isSelectable && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Checkbox, {
        checked: isSelected,
        style: {
          marginTop: '3px'
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-auto mb1"
      }, this.renderHeader(study), this.renderDescription(study), this.renderFilesAccordion(study), this.renderPermissionsAccordion(study))));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(study) {
      var _this3 = this;

      var isSelectable = this.isSelectable; // Internal and external guests can't select studies

      var onClickAttr = {};
      if (isSelectable) onClickAttr.onClick = function () {
        return _this3.handleFileSelection(study);
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, study.uploadLocationEnabled && study.canUpload && /*#__PURE__*/_react["default"].createElement(_UploadStudyFiles["default"], {
        studyId: study.id
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, _extends({
        as: "h3",
        color: "blue",
        className: (0, _classnames["default"])('mt0', isSelectable ? 'cursor-pointer' : '')
      }, onClickAttr), study.name, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "pt1 fs-8 color-grey"
      }, study.id), study.projectId && /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey"
      }, " \xB7 ", study.projectId))));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription(study) {
      return /*#__PURE__*/_react["default"].createElement("div", null, study.description);
    }
  }, {
    key: "renderFilesAccordion",
    value: function renderFilesAccordion(study) {
      if (study.isOpenDataStudy) return null;
      if (!study.uploadLocationEnabled) return null;
      var expanded = this.filesExpanded;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion, {
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion.Title, {
        active: expanded,
        index: 0,
        onClick: this.handleFilesExpanded
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "dropdown"
      }), /*#__PURE__*/_react["default"].createElement("b", null, "Files")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion.Content, {
        active: expanded
      }, expanded && study.uploadLocationEnabled && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2"
      }, /*#__PURE__*/_react["default"].createElement(_StudyFilesTable["default"], {
        study: study
      }))));
    }
  }, {
    key: "renderPermissionsAccordion",
    value: function renderPermissionsAccordion(study) {
      if (!study.isOrganizationStudy) return null;
      var expanded = this.permissionsExpanded;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion, {
        className: "mt0"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion.Title, {
        active: expanded,
        index: 0,
        onClick: this.handlePermissionsExpanded
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "dropdown"
      }), /*#__PURE__*/_react["default"].createElement("b", null, "Permissions")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion.Content, {
        active: expanded
      }, expanded && /*#__PURE__*/_react["default"].createElement(_StudyPermissionsTable["default"], {
        study: study
      })));
    }
  }, {
    key: "study",
    get: function get() {
      return this.props.study;
    }
  }, {
    key: "isSelectable",
    get: function get() {
      return this.props.isSelectable;
    }
  }]);

  return StudyRow;
}(_react["default"].Component);

(0, _mobx.decorate)(StudyRow, {
  handleFileSelection: _mobx.action,
  handleFilesExpanded: _mobx.action,
  handlePermissionsExpanded: _mobx.action,
  study: _mobx.computed,
  filesExpanded: _mobx.observable,
  permissionsExpanded: _mobx.observable,
  isSelectable: _mobx.computed
});

var _default = (0, _mobxReact.inject)('filesSelection')((0, _mobxReact.observer)(StudyRow));

exports["default"] = _default;
//# sourceMappingURL=StudyRow.js.map