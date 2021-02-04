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

var _notification = require("@aws-ee/base-ui/dist//helpers/notification");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _DropDown = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/DropDown"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _AddBudgetForm = _interopRequireDefault(require("../../models/forms/AddBudgetForm"));

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
// - awsAccount (pass in from AwsAccountList cell click)
// - awsAccountsStore (from injection)
var UpdateBudget = /*#__PURE__*/function (_React$Component) {
  _inherits(UpdateBudget, _React$Component);

  var _super = _createSuper(UpdateBudget);

  function UpdateBudget(props) {
    var _this;

    _classCallCheck(this, UpdateBudget);

    _this = _super.call(this, props);
    _this.componentDidMount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.budgetStore.load();

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              (0, _notification.displayError)(_context.t0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    _this.handleCancel = function () {
      _this.goBackToAccountsPage();
    };

    _this.handleFormSubmission = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(form) {
        var values;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                values = _this.convertDateToEpoch(form.values());
                _context2.next = 4;
                return _this.budgetStore.createOrUpdateBudget(values);

              case 4:
                form.clear();
                (0, _notification.displaySuccess)('Updated budget successfully');

                _this.goBackToAccountsPage();

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                (0, _notification.displayError)(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.awsAccountUUID = (_this.props.match.params || {}).id;
    _this.budgetStore = _this.props.awsAccountsStore.getBudgetStore(_this.awsAccountUUID);
    return _this;
  }

  _createClass(UpdateBudget, [{
    key: "render",
    value: function render() {
      var content;

      if ((0, _BaseStore.isStoreError)(this.budgetStore)) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: this.budgetStore.error,
          className: "p0 mb3"
        });
      } else if ((0, _BaseStore.isStoreLoading)(this.budgetStore)) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else {
        content = this.renderMain();
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h2",
        icon: true,
        textAlign: "center",
        className: "mt3",
        color: "grey"
      }, "Budget Detail"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 ml3 mr3 animated fadeIn"
      }, content));
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var budget = this.budgetStore.budget;
      var form = (0, _AddBudgetForm["default"])(budget);
      var thresholdsOptions = this.budgetStore.thresholdsOptions;
      return /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.handleCancel,
        onSuccess: this.handleFormSubmission
      }, function (_ref3) {
        var processing = _ref3.processing,
            onCancel = _ref3.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('budgetLimit'),
          type: "number"
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('startDate'),
          type: "date"
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('endDate'),
          type: "date"
        }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: form.$('thresholds'),
          options: thresholdsOptions,
          multiple: true,
          selection: true,
          clearable: true,
          fluid: true
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('notificationEmail'),
          type: "email"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "mt3"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          primary: true,
          className: "ml2",
          type: "submit",
          content: "Update Budget",
          disabled: processing
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          onClick: onCancel,
          content: "Cancel",
          disabled: processing
        })));
      });
    }
  }, {
    key: "goto",
    value: function goto(pathname) {
      var location = this.props.location;
      var link = (0, _routing.createLink)({
        location: location,
        pathname: pathname
      });
      this.props.history.push(link);
    }
  }, {
    key: "goBackToAccountsPage",
    value: function goBackToAccountsPage() {
      this.budgetStore.cleanup();
      this["goto"]('/accounts');
    }
  }, {
    key: "convertDateToEpoch",
    value: function convertDateToEpoch(values) {
      // Divided by 1000 to convert from milliseconds to seconds
      values.startDate = new Date(values.startDate).getTime() / 1000;
      values.endDate = new Date(values.endDate).getTime() / 1000;
      return values;
    }
  }]);

  return UpdateBudget;
}(_react["default"].Component); // decorate is a new API introduced by Mobx4, that allows usage of decorators without the decorator annotations


(0, _mobx.decorate)(UpdateBudget, {
  handleCancel: _mobx.action,
  handleFormSubmission: _mobx.action
});

var _default = (0, _mobxReact.inject)('awsAccountsStore')((0, _mobxReact.observer)(UpdateBudget));

exports["default"] = _default;
//# sourceMappingURL=UpdateBudget.js.map