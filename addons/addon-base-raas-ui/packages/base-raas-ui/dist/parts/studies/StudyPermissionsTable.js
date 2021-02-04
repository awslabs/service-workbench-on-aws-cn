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

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _UserLabels = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/UserLabels"));

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
// - study
// - userStore (via injection)
// - usersStore (via injection)
var StudyPermissionsTable = /*#__PURE__*/function (_React$Component) {
  _inherits(StudyPermissionsTable, _React$Component);

  var _super = _createSuper(StudyPermissionsTable);

  function StudyPermissionsTable(props) {
    var _this;

    _classCallCheck(this, StudyPermissionsTable);

    _this = _super.call(this, props);

    _this.enableEditMode = function () {
      // Set users who currently have permission to the study as the selected users
      _this.permissionsStore.studyPermissions.userTypes.forEach(function (userType) {
        _this.selectedUserIds[userType] = _this.permissionsStore.studyPermissions["".concat(userType, "Users")];
      }); // Show edit dropdowns via observable


      _this.editModeOn = true;
    };

    _this.resetForm = function () {
      _this.editModeOn = false;
      _this.isProcessing = false;
      _this.selectedUserIds = {};
    };

    _this.submitUpdate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _mobx.runInAction)(function () {
                _this.isProcessing = true;
              }); // Perform update

              _context.prev = 1;
              _context.next = 4;
              return _this.permissionsStore.update(_this.selectedUserIds);

            case 4:
              (0, _notification.displaySuccess)('Update Succeeded');
              (0, _mobx.runInAction)(function () {
                _this.resetForm();
              });
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              (0, _notification.displayError)('Update Failed', _context.t0);
              (0, _mobx.runInAction)(function () {
                _this.isProcessing = false;
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));
    (0, _mobx.runInAction)(function () {
      _this.permissionsStore = props.study.getPermissionsStore();
      _this.currUser = props.userStore.user;
      _this.usersStore = props.usersStore;

      _this.resetForm();
    });
    return _this;
  }

  _createClass(StudyPermissionsTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.permissionsStore.load());
      this.permissionsStore.startHeartbeat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.permissionsStore.stopHeartbeat();
    }
  }, {
    key: "render",
    value: function render() {
      // Render loading, error, or permissions table
      var content;

      if ((0, _BaseStore.isStoreError)(this.permissionsStore)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: this.permissionsStore.error,
          className: "mt0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(this.permissionsStore) || (0, _BaseStore.isStoreNew)(this.permissionsStore)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 1
        });
      } else {
        content = this.renderTable();
      }

      return content;
    }
  }, {
    key: "renderTable",
    value: function renderTable() {
      var _this2 = this;

      var studyPermissions = this.permissionsStore.studyPermissions;
      var isEditable = studyPermissions.adminUsers.some(function (uid) {
        return uid === _this2.currUser.uid;
      });
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer.Dimmable, {
        dimmed: this.isProcessing
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer, {
        active: this.isProcessing,
        inverted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Loader, {
        size: "big"
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        striped: true,
        className: "mt0"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        width: 2
      }, "Permission Level"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Users", isEditable && !this.editModeOn && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "pencil",
        className: "ml1 cursor-pointer",
        color: "grey",
        onClick: this.enableEditMode
      })))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, this.permissionsStore.studyPermissions.userTypes.map(function (userType) {
        var uids = studyPermissions["".concat(userType, "Users")];

        var userIdentifiers = _lodash["default"].map(uids, function (uid) {
          return {
            uid: uid
          };
        });

        var users = _this2.usersStore.asUserObjects(userIdentifiers);

        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: userType
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          style: {
            textTransform: 'capitalize'
          }
        }, userType), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, _this2.editModeOn ? _this2.renderUsersDropdown(userType) : /*#__PURE__*/_react["default"].createElement(_UserLabels["default"], {
          users: users
        })));
      }))), this.editModeOn && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        disabled: this.isProcessing,
        onClick: this.submitUpdate,
        size: "mini",
        color: "blue",
        icon: true
      }, "Submit"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        disabled: this.isProcessing,
        onClick: this.resetForm,
        size: "mini"
      }, "Cancel"))));
    }
  }, {
    key: "renderUsersDropdown",
    value: function renderUsersDropdown(userType) {
      var _this3 = this;

      var dropdownOnChange = (0, _mobx.action)(function (_event, data) {
        _this3.selectedUserIds[userType] = data.value;
      });
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dropdown, {
        selection: true,
        fluid: true,
        multiple: true,
        search: true,
        options: this.usersStore.asDropDownOptions(),
        value: this.selectedUserIds[userType],
        placeholder: "Select users",
        onChange: dropdownOnChange
      });
    }
  }]);

  return StudyPermissionsTable;
}(_react["default"].Component);

(0, _mobx.decorate)(StudyPermissionsTable, {
  editModeOn: _mobx.observable,
  isProcessing: _mobx.observable,
  selectedUserIds: _mobx.observable,
  enableEditMode: _mobx.action,
  resetForm: _mobx.action,
  submitUpdate: _mobx.action
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore')((0, _mobxReact.observer)(StudyPermissionsTable));

exports["default"] = _default;
//# sourceMappingURL=StudyPermissionsTable.js.map