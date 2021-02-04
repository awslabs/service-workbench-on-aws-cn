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

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _DropDown = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/DropDown"));

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _TextArea = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/TextArea"));

var _YesNo = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/YesNo"));

var _CreateStudy = require("../../models/forms/CreateStudy");

var _categories = require("../../models/studies/categories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// - userStore (via injection)
// - studiesStoresMap (via injection)
var CreateStudy = /*#__PURE__*/function (_React$Component) {
  _inherits(CreateStudy, _React$Component);

  var _super = _createSuper(CreateStudy);

  function CreateStudy(props) {
    var _this;

    _classCallCheck(this, CreateStudy);

    _this = _super.call(this, props);

    _this.cleanModal = function () {
      (0, _mobx.runInAction)(function () {
        _this.modalOpen = false;
      });
    };

    _this.handleFormCancel = function (form) {
      form.clear();

      _this.cleanModal();
    };

    _this.handleFormError = function (_form, _errors) {};

    _this.handleFormSubmission = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var studyValues, categoryId, categoryName, studiesStore;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                studyValues = form.values();
                categoryId = studyValues.categoryId; // Type here is the category id

                categoryName = ((0, _categories.getCategoryById)(categoryId) || {}).name;
                studiesStore = _this.getStudiesStore(categoryId);
                delete studyValues.categoryId; // Create study, clear form, and close modal

                _context.next = 8;
                return studiesStore.createStudy(_objectSpread({}, studyValues, {
                  category: categoryName
                }));

              case 8:
                // TODO the backend should really accept category id not the category name
                form.clear();

                _this.cleanModal();

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                (0, _notification.displayError)(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.cleanModal();

      _this.form = (0, _CreateStudy.getCreateStudyForm)();
    });
    return _this;
  }

  _createClass(CreateStudy, [{
    key: "getStudiesStore",
    value: function getStudiesStore(categoryId) {
      return this.props.studiesStoresMap[categoryId];
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        closeIcon: true,
        trigger: this.renderTrigger(),
        open: this.modalOpen,
        onClose: this.cleanModal
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        icon: true,
        textAlign: "center",
        className: "mt3",
        color: "grey"
      }, "Create Study"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mx3"
      }, this.renderCreateStudyForm())));
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        color: "blue",
        onClick: (0, _mobx.action)(function () {
          _this2.modalOpen = true;
        })
      }, "Create Study");
    }
  }, {
    key: "renderCreateStudyForm",
    value: function renderCreateStudyForm() {
      var form = this.form;
      var projectIds = this.props.userStore.projectIdDropdown;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "p3 mb3"
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.handleFormCancel,
        onSuccess: this.handleFormSubmission
      }, function (_ref2) {
        var processing = _ref2.processing,
            onCancel = _ref2.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('id')
        }), /*#__PURE__*/_react["default"].createElement(_YesNo["default"], {
          field: form.$('categoryId')
        }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: form.$('name')
        }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
          field: form.$('description')
        }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: form.$('projectId'),
          options: projectIds,
          fluid: true,
          selection: true
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          className: "ml2",
          floated: "right",
          color: "blue",
          icon: true,
          disabled: processing,
          type: "submit"
        }, "Create Study"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          disabled: processing,
          onClick: onCancel
        }, "Cancel"));
      }));
    }
  }]);

  return CreateStudy;
}(_react["default"].Component);

(0, _mobx.decorate)(CreateStudy, {
  form: _mobx.observable,
  modalOpen: _mobx.observable,
  getStudiesStore: _mobx.observable,
  cleanModal: _mobx.action,
  handleFormSubmission: _mobx.action
});

var _default = (0, _mobxReact.inject)('userStore', 'studiesStoresMap')((0, _mobxReact.observer)(CreateStudy));

exports["default"] = _default;
//# sourceMappingURL=CreateStudy.js.map