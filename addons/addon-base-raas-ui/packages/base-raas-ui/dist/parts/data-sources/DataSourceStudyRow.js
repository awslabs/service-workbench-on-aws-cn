"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _UserLabels = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/UserLabels"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _Operation = require("../../models/helpers/Operation");

var _StudyConnectionPanel = _interopRequireDefault(require("./parts/StudyConnectionPanel"));

var _StudyStatusMessage = _interopRequireDefault(require("./parts/StudyStatusMessage"));

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
// - study (via prop)
// - store (via prop) (this the study store)
// - dataSourceAccountsStore (via injection)
// - usersStore (via injection)
var DataSourceStudyRow = /*#__PURE__*/function (_React$Component) {
  _inherits(DataSourceStudyRow, _React$Component);

  var _super = _createSuper(DataSourceStudyRow);

  function DataSourceStudyRow(props) {
    var _this;

    _classCallCheck(this, DataSourceStudyRow);

    _this = _super.call(this, props);

    _this.handleExpandClick = function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.expanded = !_this.expanded;
      var store = _this.studyStore;

      if (!(0, _BaseStore.isStoreReady)(store) && _this.expanded) {
        (0, _utils.swallowError)(store.load());
        store.startHeartbeat();
      }

      if (!_this.expanded) {
        (0, _BaseStore.stopHeartbeat)(store);
      }
    };

    _this.handleCheckConnection = function () {
      _this.connectionPanel.show = true;
      var study = _this.study;
      var accountsStore = _this.accountsStore;
      var operation = _this.connectionPanel.operation;

      var doWork = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return accountsStore.checkStudyReachability(study.id);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function doWork() {
          return _ref.apply(this, arguments);
        };
      }();

      (0, _utils.swallowError)(operation.run(doWork));
    };

    _this.handleDismissPanel = function () {
      _this.connectionPanel.show = false;
    };

    (0, _mobx.runInAction)(function () {
      _this.expanded = false;
      _this.connectionPanel = {
        show: false,
        operation: _Operation.Operation.create({})
      };
    });
    return _this;
  }

  _createClass(DataSourceStudyRow, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var store = this.studyStore;
      (0, _BaseStore.stopHeartbeat)(store);
    }
  }, {
    key: "render",
    value: function render() {
      var expanded = this.expanded;
      var item = this.study;
      var id = item.id,
          category = item.category,
          folder = item.folder,
          friendlyAccessType = item.friendlyAccessType,
          state = item.state;

      var value = function value(text) {
        return /*#__PURE__*/_react["default"].createElement("span", null, _lodash["default"].isEmpty(text) ? 'Not Provided' : text);
      };

      var iconName = expanded ? 'angle down' : 'angle right';
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
        className: "cursor-pointer",
        onClick: this.handleExpandClick
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        collapsing: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: iconName
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        className: "breakout"
      }, value(id)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        className: "breakout"
      }, value(folder)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        className: "nowrap"
      }, value(category)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        className: "nowrap"
      }, value(friendlyAccessType)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, this.renderStatus(state))), expanded && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
        className: "animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        colSpan: "6"
      }, this.renderExpanded())));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus(state, classnames) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classnames
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        size: "mini",
        color: state.color
      }, state.display));
    }
  }, {
    key: "renderExpanded",
    value: function renderExpanded() {
      var store = this.studyStore;
      var content = null;

      if ((0, _BaseStore.isStoreError)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: store.error,
          className: "p0"
        });
      } else if ((0, _BaseStore.isStoreLoading)(store)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], {
          segmentCount: 1
        });
      } else {
        content = this.renderExpandedContent();
      }

      return content;
    }
  }, {
    key: "renderExpandedContent",
    value: function renderExpandedContent() {
      var study = this.study;
      var operation = this.connectionPanel.operation;
      var showPanel = this.connectionPanel.show;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        size: "mini",
        floated: "right",
        basic: true,
        color: "brown",
        onClick: this.handleCheckConnection
      }, "Test Connection")), !study.reachableState && !showPanel && /*#__PURE__*/_react["default"].createElement(_StudyStatusMessage["default"], {
        study: study
      }), showPanel && /*#__PURE__*/_react["default"].createElement(_StudyConnectionPanel["default"], {
        study: study,
        operation: operation,
        onCancel: this.handleDismissPanel
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "p1",
        style: {
          height: '1px'
        }
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        stackable: true,
        columns: 2,
        className: "block"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, this.renderDetailTablePart1()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, this.renderDetailTablePart2())), this.renderDetailTablePart3(), this.renderPermissionsTable());
    }
  }, {
    key: "renderDetailTablePart1",
    value: function renderDetailTablePart1() {
      var store = this.studyStore;
      var study = store.study;
      var id = study.id,
          name = study.name,
          state = study.state,
          statusAt = study.statusAt,
          folder = study.folder;

      var naIfEmpty = function naIfEmpty(value) {
        return _lodash["default"].isEmpty(value) ? 'N/A' : value;
      };

      var renderRow = function renderRow(key, value) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 2,
          className: "nowrap"
        }, key), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 14,
          className: "breakout"
        }, value));
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        definition: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        width: 2,
        className: "nowrap"
      }, "Status"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        width: 16,
        className: "flex"
      }, this.renderStatus(state, 'flex-auto mr1'), /*#__PURE__*/_react["default"].createElement("span", {
        className: "fs-8 color-grey mr1"
      }, "Status checked ", /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
        date: statusAt,
        className: "color-grey fs-8"
      })))), renderRow('ID', id), renderRow('Name', naIfEmpty(name)), renderRow('Path', folder)));
    }
  }, {
    key: "renderDetailTablePart2",
    value: function renderDetailTablePart2() {
      var store = this.studyStore;
      var study = store.study;
      var category = study.category,
          friendlyAccessType = study.friendlyAccessType,
          bucket = study.bucket,
          projectId = study.projectId,
          region = study.region;

      var naIfEmpty = function naIfEmpty(value) {
        return _lodash["default"].isEmpty(value) ? 'N/A' : value;
      };

      var renderRow = function renderRow(key, value) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 2,
          className: "nowrap"
        }, key), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 14,
          className: "breakout"
        }, value));
      };

      var bucketRow = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        width: 2,
        className: "nowrap"
      }, "Bucket"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        width: 16,
        className: "breakout flex"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "breakout flex-auto mr1"
      }, bucket), /*#__PURE__*/_react["default"].createElement("div", {
        className: "fs-9 color-grey nowrap"
      }, region)));

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        definition: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, renderRow('Project', naIfEmpty(projectId)), renderRow('Type', category), renderRow('Access', friendlyAccessType), bucketRow));
    }
  }, {
    key: "renderDetailTablePart3",
    value: function renderDetailTablePart3() {
      var store = this.studyStore;
      var study = store.study;
      var description = study.description,
          kmsScope = study.kmsScope,
          kmsArn = study.kmsArn;

      var naIfEmpty = function naIfEmpty(value) {
        return _lodash["default"].isEmpty(value) ? 'None' : value;
      };

      var kms = kmsScope === 'bucket' ? 'Use bucket default encryption' : kmsArn;

      var renderRow = function renderRow(key, value) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 2,
          className: "nowrap"
        }, key), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          width: 14,
          className: "breakout"
        }, value));
      };

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        definition: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, renderRow('KMS Arn', naIfEmpty(kms)), renderRow('Description', naIfEmpty(description))));
    }
  }, {
    key: "renderPermissionsTable",
    value: function renderPermissionsTable() {
      var store = this.studyStore;
      var study = store.study;
      var accessType = study.accessType,
          myStudies = study.myStudies;

      var _ref2 = study.permissions || {},
          _ref2$adminUsers = _ref2.adminUsers,
          adminUsers = _ref2$adminUsers === void 0 ? [] : _ref2$adminUsers,
          _ref2$readonlyUsers = _ref2.readonlyUsers,
          readonlyUsers = _ref2$readonlyUsers === void 0 ? [] : _ref2$readonlyUsers,
          _ref2$readwriteUsers = _ref2.readwriteUsers,
          readwriteUsers = _ref2$readwriteUsers === void 0 ? [] : _ref2$readwriteUsers;

      var showReadonly = accessType === 'readonly' || accessType === 'readwrite';
      var showReadwrite = accessType === 'readwrite';
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        definition: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, this.renderUsersRow('Admin', adminUsers), showReadonly && !myStudies && this.renderUsersRow('Read Only', readonlyUsers), showReadwrite && !myStudies && this.renderUsersRow('Read & Write', readwriteUsers)));
    }
  }, {
    key: "renderUsersRow",
    value: function renderUsersRow(title) {
      var userIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var userIdentifiers = _lodash["default"].map(userIds, function (uid) {
        return {
          uid: uid
        };
      });

      var users = this.usersStore.asUserObjects(userIdentifiers);
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        width: 2,
        className: "nowrap"
      }, title), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
        width: 14,
        className: "breakout"
      }, !_lodash["default"].isEmpty(userIds) && /*#__PURE__*/_react["default"].createElement(_UserLabels["default"], {
        users: users
      }), _lodash["default"].isEmpty(userIds) && /*#__PURE__*/_react["default"].createElement("span", null, "None")));
    }
  }, {
    key: "study",
    get: function get() {
      return this.props.study;
    }
  }, {
    key: "accountsStore",
    get: function get() {
      return this.props.dataSourceAccountsStore;
    }
  }, {
    key: "usersStore",
    get: function get() {
      return this.props.usersStore;
    }
  }, {
    key: "studyStore",
    get: function get() {
      return this.props.store;
    }
  }]);

  return DataSourceStudyRow;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(DataSourceStudyRow, {
  accountsStore: _mobx.computed,
  study: _mobx.computed,
  studyStore: _mobx.computed,
  usersStore: _mobx.computed,
  handleExpandClick: _mobx.action,
  handleCheckConnection: _mobx.action,
  handleDismissPanel: _mobx.action,
  expanded: _mobx.observable,
  connectionPanel: _mobx.observable
});

var _default = (0, _mobxReact.inject)('dataSourceAccountsStore', 'usersStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(DataSourceStudyRow)));

exports["default"] = _default;
//# sourceMappingURL=DataSourceStudyRow.js.map