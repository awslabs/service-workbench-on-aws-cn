"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _lodash = _interopRequireDefault(require("lodash"));

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _AddProjectForm = require("../../models/forms/AddProjectForm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var ProjectConfigure = /*#__PURE__*/function (_React$Component) {
  _inherits(ProjectConfigure, _React$Component);

  var _super = _createSuper(ProjectConfigure);

  function ProjectConfigure(props) {
    var _this;

    _classCallCheck(this, ProjectConfigure);

    _this = _super.call(this, props);

    _this.handleModalOpen = function () {
      (0, _mobx.runInAction)(function () {
        var _this$props$project = _this.props.project,
            rev = _this$props$project.rev,
            id = _this$props$project.id,
            description = _this$props$project.description,
            indexId = _this$props$project.indexId,
            projectAdmins = _this$props$project.projectAdmins;
        _this.updateProject = {
          rev: rev,
          id: id,
          description: description,
          indexId: indexId,
          projectAdmins: projectAdmins
        };
        _this.formProcessing = false;
        _this.modalOpen = false;
        _this.confirmDeleteOpen = false;
        _this.view = 'detail';
        _this.modalOpen = true;
      });
    };

    _this.handleModalClose = function () {
      _this.cleanUp();
    };

    _this.handleDeleteConfirmOpen = function () {
      (0, _mobx.runInAction)(function () {
        _this.confirmDeleteOpen = true;
      });
    };

    _this.handleDeleteConfirmClose = function () {
      (0, _mobx.runInAction)(function () {
        _this.confirmDeleteOpen = false;
      });
    };

    _this.handleClickEditButton = function () {
      (0, _mobx.runInAction)(function () {
        _this.view = 'edit';
      });
    };

    _this.handleClickCancelButton = function () {
      if (_this.view === 'edit') {
        (0, _mobx.runInAction)(function () {
          _this.view = 'detail';
        });
      } else {
        _this.handleModalClose();
      }
    };

    _this.handleClickSubmitButton = (0, _mobx.action)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var store;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.updateProject.id) {
                _this.updateProject.id = _this.currentProject.id;
              }

              (0, _mobx.runInAction)(function () {
                _this.formProcessing = true;
              });
              _context.prev = 2;
              store = _this.getStore();
              _context.next = 6;
              return store.updateProject(_this.updateProject);

            case 6:
              (0, _mobx.runInAction)(function () {
                _this.formProcessing = false;
              });

              _this.cleanUp();

              (0, _notification.displaySuccess)('Updated project successfully');
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              (0, _mobx.runInAction)(function () {
                _this.formProcessing = false;
              });
              (0, _notification.displayError)(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    })));
    _this.handleClickDeleteButton = (0, _mobx.action)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var store;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              (0, _mobx.runInAction)(function () {
                _this.confirmDeleteOpen = false;
                _this.formProcessing = true;
              });
              _context3.prev = 1;
              store = _this.getStore();
              _context3.next = 5;
              return store.deleteProject(_this.currentProject.id);

            case 5:
              _context3.next = 7;
              return store.load();

            case 7:
              (0, _mobx.runInAction)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _this.formProcessing = false;

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })));

              _this.cleanUp();

              _context3.next = 15;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);
              (0, _mobx.runInAction)(function () {
                _this.formProcessing = false;
              });
              (0, _notification.displayError)(_context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 11]]);
    })));

    _this.handleProjectAdminsSelection = function (e, _ref4) {
      var value = _ref4.value;
      (0, _mobx.runInAction)(function () {
        _this.updateProject.projectAdmins = value;
      });
    };

    (0, _mobx.runInAction)(function () {
      _this.stores = new _Stores["default"]([_this.usersStore, _this.awsAccountsStore, _this.projectsStore, _this.userStore]);
      var _this$props$project2 = _this.props.project,
          rev = _this$props$project2.rev,
          id = _this$props$project2.id,
          description = _this$props$project2.description,
          indexId = _this$props$project2.indexId,
          projectAdmins = _this$props$project2.projectAdmins;
      _this.updateProject = {
        rev: rev,
        id: id,
        description: description,
        indexId: indexId,
        projectAdmins: projectAdmins
      };
      _this.formProcessing = false;
      _this.modalOpen = false;
      _this.confirmDeleteOpen = false;
      _this.view = 'detail';
    });
    _this.form = (0, _AddProjectForm.getAddProjectForm)();
    _this.addProjectFormFields = (0, _AddProjectForm.getAddProjectFormFields)();
    _this.currentProject = _this.props.project;
    return _this;
  }

  _createClass(ProjectConfigure, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUp();
    }
  }, {
    key: "getStores",
    value: function getStores() {
      return this.stores;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.getStores().load());
    }
  }, {
    key: "cleanUp",
    value: function cleanUp() {
      var _this2 = this;

      (0, _mobx.runInAction)(function () {
        _this2.modalOpen = false;
        _this2.confirmDeleteOpen = false;
      });
    }
  }, {
    key: "renderDetailView",
    value: function renderDetailView() {
      var _this3 = this;

      var getFieldLabel = function getFieldLabel(fieldName) {
        return _this3.form.$(fieldName).label;
      };

      var toRow = function toRow(fieldName) {
        var value = _lodash["default"].get(_this3.currentProject, fieldName);

        var displayValue = _lodash["default"].isArray(value) ? _lodash["default"].map(value, function (v, k) {
          var user = _this3.usersStore.asUserObject({
            uid: v
          });

          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
            key: k,
            content: user.username
          });
        }) : value;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          collapsing: true,
          active: true
        }, getFieldLabel(fieldName)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, displayValue));
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        basic: true,
        className: "ui fluid form mb4"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        celled: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('id')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('description')), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, toRow('projectAdmins')))), this.renderButtons());
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        size: "mini",
        compact: true,
        color: "blue",
        onClick: this.handleModalOpen
      }, "Detail");
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var content = null;

      if (this.view === 'detail') {
        content = this.renderDetailView();
      } else if (this.view === 'edit') {
        content = this.renderEditView();
      }

      return content;
    }
  }, {
    key: "render",
    value: function render() {
      var stores = this.getStores();
      var content = null;

      if (stores.hasError) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: stores.error,
          className: "p0 mb3"
        });
      } else if (stores.loading) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else if (stores.ready) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        closeIcon: true,
        trigger: this.renderTrigger(),
        open: this.modalOpen,
        onClose: this.handleModalClose
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        icon: true,
        textAlign: "center",
        className: "mt3",
        color: "grey"
      }, "Project Detail"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 ml3 mr3 animated fadeIn"
      }, content)));
    }
  }, {
    key: "renderEditView",
    value: function renderEditView() {
      var _this4 = this;

      var processing = this.formProcessing;
      var fields = this.addProjectFormFields;

      var toEditableInput = function toEditableInput(attributeName) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
        var handleChange = (0, _mobx.action)(function (event) {
          event.preventDefault();
          _this4.updateProject[attributeName] = event.target.value;
        });
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "ui focus input"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: type,
          defaultValue: _this4.currentProject[attributeName],
          placeholder: fields[attributeName].placeholder || '',
          onChange: handleChange
        }));
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        basic: true,
        className: "ui fluid form"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer, {
        active: processing,
        inverted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Loader, {
        inverted: true
      }, "Checking")), this.renderField('id', toEditableInput('id', 'id')), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2"
      }), this.renderField('description', toEditableInput('description', 'description')), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2"
      }), this.renderField('projectAdmins'), this.renderProjectAdminsSelection(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2"
      }), this.renderButtons(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb4"
      }));
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this5 = this;

      var processing = this.formProcessing;

      var makeButton = function makeButton(_ref5) {
        var _ref5$label = _ref5.label,
            label = _ref5$label === void 0 ? '' : _ref5$label,
            _ref5$color = _ref5.color,
            color = _ref5$color === void 0 ? 'blue' : _ref5$color,
            _ref5$floated = _ref5.floated,
            floated = _ref5$floated === void 0 ? 'left' : _ref5$floated,
            props = _objectWithoutProperties(_ref5, ["label", "color", "floated"]);

        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, _extends({
          color: color,
          floated: floated,
          disabled: processing,
          className: "ml2"
        }, props), label);
      };

      var makeConfirmDeleteButton = function makeConfirmDeleteButton() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref6$label = _ref6.label,
            label = _ref6$label === void 0 ? 'Delete' : _ref6$label,
            _ref6$color = _ref6.color,
            color = _ref6$color === void 0 ? 'red' : _ref6$color,
            _ref6$floated = _ref6.floated,
            floated = _ref6$floated === void 0 ? 'right' : _ref6$floated;

        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          color: color,
          floated: floated,
          disabled: processing,
          className: "ml2",
          onClick: _this5.handleDeleteConfirmOpen
        }, label), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Confirm, {
          open: _this5.confirmDeleteOpen,
          content: "Are you sure you want to delete this project?",
          onCancel: _this5.handleDeleteConfirmClose,
          onConfirm: _this5.handleClickDeleteButton
        }));
      };

      var editButton = this.view === 'detail' ? makeButton({
        label: 'Edit',
        onClick: this.handleClickEditButton
      }) : '';
      var saveButton = this.view === 'edit' ? makeButton({
        label: 'Save',
        onClick: this.handleClickSubmitButton
      }) : '';
      var deleteButton = this.view === 'detail' ? makeConfirmDeleteButton() : '';
      var cancelButton = makeButton({
        label: 'Cancel',
        floated: 'right',
        color: 'grey',
        onClick: this.handleClickCancelButton
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 mb3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, null, cancelButton, deleteButton, saveButton, editButton));
    }
  }, {
    key: "renderProjectAdminsSelection",
    value: function renderProjectAdminsSelection() {
      var usersStore = this.props.usersStore;
      var projectAdminsOption = usersStore.asDropDownOptions();

      var currentProjectAdminUsers = _lodash["default"].map(this.currentProject.projectAdmins, function (uid) {
        return usersStore.asUserObject({
          uid: uid
        });
      });

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dropdown, {
        options: projectAdminsOption,
        defaultValue: _lodash["default"].map(currentProjectAdminUsers, function (x) {
          return x.uid;
        }),
        fluid: true,
        multiple: true,
        selection: true,
        onChange: this.handleProjectAdminsSelection
      });
    }
  }, {
    key: "renderField",
    value: function renderField(name, component, contentRenderer) {
      var fields = this.addProjectFormFields;
      var explain = fields[name].explain;
      var label = fields[name].label;
      var hasExplain = !_lodash["default"].isEmpty(explain);
      var content = this.currentProject[name];

      if (contentRenderer && typeof contentRenderer === 'function') {
        content = contentRenderer(content);
      }

      content = _lodash["default"].isEmpty(content) ? 'N/A' : content;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        className: "mr3 mt0",
        as: "h4",
        color: "grey"
      }, label), hasExplain && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2"
      }, explain, " ", /*#__PURE__*/_react["default"].createElement("span", null, this.view === 'detail' ? content : '')), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ui field input block m0"
      }, component));
    }
  }, {
    key: "getStore",
    value: function getStore() {
      return this.props.projectsStore;
    }
  }, {
    key: "userStore",
    get: function get() {
      return this.props.userStore;
    }
  }, {
    key: "usersStore",
    get: function get() {
      return this.props.usersStore;
    }
  }, {
    key: "awsAccountsStore",
    get: function get() {
      return this.props.awsAccountsStore;
    }
  }, {
    key: "projectStore",
    get: function get() {
      return this.props.projectsStore.getProjectStore();
    }
  }, {
    key: "projectsStore",
    get: function get() {
      return this.props.projectsStore;
    }
  }]);

  return ProjectConfigure;
}(_react["default"].Component); // Using the MobX 4 way to use decorators without decorator syntax


(0, _mobx.decorate)(ProjectConfigure, {
  formProcessing: _mobx.observable,
  modalOpen: _mobx.observable,
  confirmDeleteOpen: _mobx.observable,
  view: _mobx.observable,
  updateProject: _mobx.observable,
  projectsStore: _mobx.computed,
  awsAccountsStore: _mobx.computed,
  usersStore: _mobx.computed,
  userStore: _mobx.computed,
  handleClickSubmitButton: _mobx.action
});

var _default = (0, _mobxReact.observer)(ProjectConfigure);

exports["default"] = _default;
//# sourceMappingURL=ProjectConfigure.js.map