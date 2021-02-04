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

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _TextArea = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/TextArea"));

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _EnvTypeBasicInfoForm = require("../../../models/forms/EnvTypeBasicInfoForm");

var _EnvTypeStatusEnum = _interopRequireDefault(require("../../../models/environment-types/EnvTypeStatusEnum"));

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

var BasicInfoStep = /*#__PURE__*/function (_React$Component) {
  _inherits(BasicInfoStep, _React$Component);

  var _super = _createSuper(BasicInfoStep);

  function BasicInfoStep(props) {
    var _this;

    _classCallCheck(this, BasicInfoStep);

    _this = _super.call(this, props);

    _this.handleFormSubmission = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var envType, envTypesStore, name, desc, savedEnvType, wizardModel;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                envType = _this.props.envType;
                envTypesStore = _this.props.envTypesStore;
                name = form.$('name').value;
                desc = form.$('desc').value;
                _context.prev = 4;

                if (!_this.isImportAction()) {
                  _context.next = 19;
                  break;
                }

                _context.next = 8;
                return envTypesStore.createEnvType({
                  id: envType.id,
                  name: name,
                  desc: desc,
                  status: _EnvTypeStatusEnum["default"].notApproved,
                  product: envType.product,
                  provisioningArtifact: envType.provisioningArtifact,
                  params: envType.params
                });

              case 8:
                savedEnvType = _context.sent;
                (0, _notification.displaySuccess)("Imported Workspace Type ".concat(envType.name, " successfully")); // Navigate to next step (if there is) or call onEnvTypeSaveComplete to notify
                // that this was last step and we are done creating env type

                wizardModel = _this.props.wizardModel;

                if (!wizardModel.hasNext) {
                  _context.next = 15;
                  break;
                }

                wizardModel.next();
                _context.next = 17;
                break;

              case 15:
                _context.next = 17;
                return _this.props.onEnvTypeSaveComplete(savedEnvType);

              case 17:
                _context.next = 25;
                break;

              case 19:
                _context.next = 21;
                return envTypesStore.updateEnvType(_objectSpread({}, envType, {
                  name: name,
                  desc: desc
                }));

              case 21:
                savedEnvType = _context.sent;
                (0, _notification.displaySuccess)("Updated Workspace Type ".concat(envType.name, " successfully"));
                _context.next = 25;
                return _this.props.onEnvTypeSaveComplete(savedEnvType);

              case 25:
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context["catch"](4);
                (0, _notification.displayError)(_context.t0);

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 27]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.form = (0, _EnvTypeBasicInfoForm.getAddEnvTypeBasicInfoForm)(props.envType);
    });
    return _this;
  }

  _createClass(BasicInfoStep, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.form;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "mt3 p3"
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.props.onCancel,
        onSuccess: this.handleFormSubmission
      }, function (_ref2) {
        var processing = _ref2.processing,
            onCancel = _ref2.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this2.renderFormFields({
          form: form,
          processing: processing,
          onCancel: onCancel
        }), _this2.renderActionButtons({
          processing: processing,
          onCancel: onCancel
        }));
      }));
    }
  }, {
    key: "renderActionButtons",
    value: function renderActionButtons(_ref3) {
      var processing = _ref3.processing,
          onCancel = _ref3.onCancel;
      var isEditing = this.isEditAction();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "right-align"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        color: "grey",
        disabled: processing,
        onClick: onCancel
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        className: "ml2",
        primary: true,
        content: isEditing ? 'Save Workspace Type' : 'Import Workspace Type',
        disabled: processing // Every wizard step page has has it's own form
        // The submit handler is responsible for saving the information and/or navigating to the next step (if there is next step)
        ,
        type: "submit"
      }));
    }
  }, {
    key: "isEditAction",
    value: function isEditAction() {
      return this.props.workspaceTypeAction === 'edit';
    }
  }, {
    key: "isImportAction",
    value: function isImportAction() {
      return this.props.workspaceTypeAction === 'import';
    }
  }, {
    key: "renderFormFields",
    value: function renderFormFields(_ref4) {
      var form = _ref4.form,
          processing = _ref4.processing;
      var nameField = form.$('name');
      var descField = form.$('desc');
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        field: nameField,
        disabled: processing
      }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
        field: descField,
        disabled: processing
      }));
    }
  }]);

  return BasicInfoStep;
}(_react["default"].Component);

var _default = (0, _mobxReact.observer)(BasicInfoStep);

exports["default"] = _default;
//# sourceMappingURL=BasicInfoStep.js.map