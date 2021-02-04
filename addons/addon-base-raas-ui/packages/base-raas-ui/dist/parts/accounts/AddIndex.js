"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _lodash = _interopRequireDefault(require("lodash"));

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _Validate = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/forms/Validate"));

var _AddIndexForm = require("../../models/forms/AddIndexForm");

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

var AddIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(AddIndex, _React$Component);

  var _super = _createSuper(AddIndex);

  function AddIndex(props) {
    var _this;

    _classCallCheck(this, AddIndex);

    _this = _super.call(this, props);

    _this.handleRoleChange = function (e, _ref) {
      var value = _ref.value;
      return _this.setState({
        role: value
      });
    };

    _this.handleStatusChange = function (e, _ref2) {
      var value = _ref2.value;
      return _this.setState({
        status: value
      });
    };

    _this.handleAwsAccountSelection = function (e, _ref3) {
      var value = _ref3.value;
      return _this.setState({
        awsAccountId: value
      });
    };

    _this.handleCancel = (0, _mobx.action)(function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.formProcessing = false;

      _this["goto"]('/accounts');
    });
    _this.handleSubmit = (0, _mobx.action)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var validationResult;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.formProcessing = true;
              _context.prev = 1;
              // Perform client side validations first
              _this.index.awsAccountId = _this.state.awsAccountId;
              _context.next = 5;
              return (0, _Validate["default"])(_this.index, _this.addIndexFormFields);

            case 5:
              validationResult = _context.sent;

              if (!validationResult.fails()) {
                _context.next = 10;
                break;
              }

              (0, _mobx.runInAction)(function () {
                _this.validationErrors = validationResult.errors;
                _this.formProcessing = false;
              });
              _context.next = 14;
              break;

            case 10:
              _context.next = 12;
              return _this.props.indexesStore.addIndex(_this.index);

            case 12:
              (0, _mobx.runInAction)(function () {
                _this.formProcessing = false;
              });

              _this["goto"]('/accounts');

            case 14:
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](1);
              (0, _mobx.runInAction)(function () {
                _this.formProcessing = false;
              });
              (0, _notification.displayError)(_context.t0);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 16]]);
    })));
    _this.state = {
      // eslint-disable-next-line react/no-unused-state
      role: 'guest',
      // eslint-disable-next-line react/no-unused-state
      status: 'active',
      awsAccountId: ''
    };
    (0, _mobx.runInAction)(function () {
      _this.formProcessing = false;
      _this.validationErrors = new Map();
      _this.index = {};
    });
    _this.form = (0, _AddIndexForm.getAddIndexForm)();
    _this.addIndexFormFields = (0, _AddIndexForm.getAddIndexFormFields)();
    return _this;
  }

  _createClass(AddIndex, [{
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h2",
        icon: true,
        textAlign: "center",
        className: "mt3",
        color: "grey"
      }, "Add Index"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3 ml3 mr3 animated fadeIn"
      }, this.renderAddIndexForm()));
    } // eslint-disable-next-line react/no-unused-state

  }, {
    key: "renderAddIndexForm",
    value: function renderAddIndexForm() {
      var _this2 = this;

      var processing = this.formProcessing;
      var fields = this.addIndexFormFields;

      var toEditableInput = function toEditableInput(attributeName) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
        var handleChange = (0, _mobx.action)(function (event) {
          event.preventDefault();
          _this2.index[attributeName] = event.target.value;
        });
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "ui focus input"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: type,
          defaultValue: _this2.index[attributeName],
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
        className: "mb4"
      }), this.renderField('awsAccountId'), this.renderAwsAccountSelection(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb4"
      }), this.renderField('description', toEditableInput('description', 'description')), this.renderButtons());
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var processing = this.formProcessing;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        color: "blue",
        icon: true,
        disabled: processing,
        className: "ml2",
        onClick: this.handleSubmit
      }, "Add Index"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        disabled: processing,
        onClick: this.handleCancel
      }, "Cancel"));
    }
  }, {
    key: "renderAwsAccountSelection",
    value: function renderAwsAccountSelection() {
      var awsAccountIdOption = this.props.awsAccountsStore.dropdownOptions;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dropdown, {
        options: awsAccountIdOption,
        placeholder: "Please select an AWS Account",
        fluid: true,
        selection: true,
        onChange: this.handleAwsAccountSelection
      });
    }
  }, {
    key: "renderField",
    value: function renderField(name, component) {
      var fields = this.addIndexFormFields;
      var explain = fields[name].explain;
      var label = fields[name].label;
      var hasExplain = !_lodash["default"].isEmpty(explain);
      var fieldErrors = this.validationErrors.get(name);
      var hasError = !_lodash["default"].isEmpty(fieldErrors);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        className: "mr3 mt0",
        as: "h2",
        color: "grey"
      }, label), hasExplain && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb2"
      }, explain), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ui big field input block m0 ".concat(hasError ? 'error' : '')
      }, component), hasError && /*#__PURE__*/_react["default"].createElement("div", {
        className: "ui pointing red basic label"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, null, _lodash["default"].map(fieldErrors, function (fieldError) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, {
          key: name
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Content, null, fieldError));
      }))));
    }
  }, {
    key: "getStore",
    value: function getStore() {
      return this.props.usersStore;
    }
  }]);

  return AddIndex;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(AddIndex, {
  formProcessing: _mobx.observable,
  user: _mobx.observable,
  validationErrors: _mobx.observable
});

var _default = (0, _mobxReact.inject)('usersStore', 'indexesStore', 'awsAccountsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(AddIndex)));

exports["default"] = _default;
//# sourceMappingURL=AddIndex.js.map