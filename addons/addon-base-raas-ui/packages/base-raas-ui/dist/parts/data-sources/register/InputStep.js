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

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _DropDown = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/DropDown"));

var _Input = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Input"));

var _TextArea = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/TextArea"));

var _SelectionButtons = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/SelectionButtons"));

var _YesNo = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/YesNo"));

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _awsRegions = require("../../../models/constants/aws-regions");

var _bucket = require("../../../models/constants/bucket");

var _RegisterStudyForm = require("../../../models/forms/RegisterStudyForm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var fieldRuleKey = function fieldRuleKey(container, name) {
  return "".concat(container.key, "-").concat(name);
}; // expected props
// - wizard (via prop)
// - userStore (via injection)
// - usersStore (via injection)


var InputStep = /*#__PURE__*/function (_React$Component) {
  _inherits(InputStep, _React$Component);

  var _super = _createSuper(InputStep);

  function InputStep(props) {
    var _this;

    _classCallCheck(this, InputStep);

    _this = _super.call(this, props);

    _this.handleSave = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(form) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = form.values();
                (0, _utils.swallowError)(_this.wizard.submit(data));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleCancel = function () {
      var _goto = (0, _routing.gotoFn)(_assertThisInitialized(_this));

      _this.wizard.reset();

      _goto('/data-sources');
    };

    _this.handleAccountChange = function (accountId) {
      var wizard = _this.wizard;
      var account = wizard.getAccount(accountId);
      var accountExists = !_lodash["default"].isEmpty(account);

      var _this$getFields = _this.getFields(['account']),
          _this$getFields2 = _slicedToArray(_this$getFields, 1),
          accountField = _this$getFields2[0];

      var _this$getFields3 = _this.getFields(['bucket']),
          _this$getFields4 = _slicedToArray(_this$getFields3, 1),
          bucketField = _this$getFields4[0];

      accountField.$('id').resetValidation();

      _this.resetFields(bucketField, ['name', 'region', 'sse']);

      _this.enableFields(bucketField, ['name', 'region', 'sse']);

      _this.syncKmsArnField();

      if (!accountExists) {
        _this.resetFields(accountField, ['name', 'mainRegion', 'contactInfo']);

        _this.enableFields(accountField, ['name', 'mainRegion', 'contactInfo']);

        return;
      }

      accountField.$('mainRegion').set(account.mainRegion);
      accountField.$('name').set(account.name);
      accountField.$('contactInfo').set(account.contactInfo || '');

      _this.disableFields(accountField, ['name', 'mainRegion', 'contactInfo']);
    };

    _this.handleBucketChange = function (bucketName) {
      var wizard = _this.wizard;

      var _this$getFields5 = _this.getFields(['account']),
          _this$getFields6 = _slicedToArray(_this$getFields5, 1),
          accountField = _this$getFields6[0];

      var accountId = accountField.$('id').value;
      var bucket = wizard.getBucket({
        accountId: accountId,
        bucketName: bucketName
      });
      var bucketExists = !_lodash["default"].isEmpty(bucket);

      var _this$getFields7 = _this.getFields(['bucket']),
          _this$getFields8 = _slicedToArray(_this$getFields7, 1),
          field = _this$getFields8[0];

      field.$('name').resetValidation();

      if (!bucketExists) {
        _this.resetFields(field, ['region', 'sse', 'kmsArn']);

        _this.enableFields(field, ['region', 'sse']);

        _this.syncKmsArnField();

        return;
      }

      field.$('region').set(bucket.region);
      field.$('sse').set(bucket.sse);
      field.$('kmsArn').set(bucket.kmsArn);

      _this.syncKmsArnField();

      _this.disableFields(field, ['region', 'sse', 'kmsArn']);
    };

    _this.handleEncryptionChange = function () {
      _this.syncKmsArnField();
    };

    _this.handleAddStudy = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var _this$getFields9 = _this.getFields(['studies']),
          _this$getFields10 = _slicedToArray(_this$getFields9, 1),
          studies = _this$getFields10[0];

      var newField = studies.add();
      newField.$('category').set('Organization'); // Set the default

      newField.$('accessType').set('readonly'); // Set the default

      newField.$('adminUsers').set([]);
    };

    _this.handleDeleteStudy = function (key) {
      return (0, _mobx.action)(function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.form.$('studies').del(key);
      });
    };

    _this.handleStudyTypeChange = function (studyField) {
      return (0, _mobx.action)(function (value) {
        if (value === 'My Studies') {
          studyField.$('adminUsers').set('');
        } else {
          studyField.$('adminUsers').set([]);
        }
      });
    };

    (0, _mobx.runInAction)(function () {
      _this.form = (0, _RegisterStudyForm.getRegisterStudyForm)(); // We keep the field 'rules' in this map to help when we disable and then enable them. For example, if we disable
      // a required a field, then even if the field has a value, the validation will fail. So, if we disable a required
      // field, we need to also remove its rules but we need to bring the rules back if we enable the field again

      _this.fieldRulesMap = {}; // lets add the existing field rules to the map

      var _this$getFields11 = _this.getFields(['account']),
          _this$getFields12 = _slicedToArray(_this$getFields11, 1),
          accountField = _this$getFields12[0];

      var _this$getFields13 = _this.getFields(['bucket']),
          _this$getFields14 = _slicedToArray(_this$getFields13, 1),
          bucketField = _this$getFields14[0];

      _this.rememberFieldsRules(accountField, ['name', 'mainRegion', 'contactInfo']);

      _this.rememberFieldsRules(bucketField, ['name', 'region', 'sse', 'kmsArn']);
    });
    return _this;
  }

  _createClass(InputStep, [{
    key: "getFields",
    value: function getFields(names, container) {
      var form = container || this.form;
      return _lodash["default"].map(names, function (name) {
        return form.$(name);
      });
    }
  }, {
    key: "disableFields",
    value: function disableFields(container, names) {
      _lodash["default"].forEach(names, function (name) {
        var field = container.$(name);
        field.set('rules', null);
        field.set('disabled', true);
        field.resetValidation();
      });
    }
  }, {
    key: "enableFields",
    value: function enableFields(container, names) {
      var _this2 = this;

      _lodash["default"].forEach(names, function (name) {
        var field = container.$(name);
        field.set('rules', _this2.fieldRulesMap[fieldRuleKey(container, name)]);
        field.set('disabled', false);
        field.resetValidation();
      });
    }
  }, {
    key: "resetFields",
    value: function resetFields(container, names) {
      _lodash["default"].forEach(names, function (name) {
        var field = container.$(name);
        field.reset();
      });
    }
  }, {
    key: "rememberFieldsRules",
    value: function rememberFieldsRules(container, names) {
      var _this3 = this;

      _lodash["default"].forEach(names, function (name) {
        var field = container.$(name);
        _this3.fieldRulesMap[fieldRuleKey(container, name)] = field.rules || {};
      });
    }
  }, {
    key: "syncKmsArnField",
    value: function syncKmsArnField() {
      var _this$getFields15 = this.getFields(['bucket']),
          _this$getFields16 = _slicedToArray(_this$getFields15, 1),
          field = _this$getFields16[0];

      var showKmsArn = field.$('sse').value === 'kms';
      var kmsArn = field.$('kmsArn').value;

      if (showKmsArn) {
        field.$('kmsArn').set(kmsArn);
        this.enableFields(field, ['kmsArn']);
      } else {
        this.resetFields(field, ['kmsArn']);
        this.disableFields(field, ['kmsArn']);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        icon: true,
        textAlign: "center",
        className: "mt2",
        color: "grey"
      }, "Register Studies"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        clearing: true,
        className: "p3"
      }, this.renderForm()));
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      var _this4 = this;

      var wizard = this.wizard;
      var form = this.form;

      var _this$getFields17 = this.getFields(['account', 'bucket', 'studies']),
          _this$getFields18 = _slicedToArray(_this$getFields17, 3),
          accountField = _this$getFields18[0],
          bucketField = _this$getFields18[1],
          studies = _this$getFields18[2];

      var accountOptions = wizard.dropdownAccountOptions;
      var accountId = accountField.$('id').value;
      var accountIdValid = accountField.$('id').isValid;
      var bucketOptions = wizard.getDropdownBucketOptions(accountId);
      var showKmsArn = bucketField.$('sse').value === 'kms';
      var studiesSize = studies.size;
      var addButtonLabel = studiesSize > 0 ? 'Add Another Study' : 'Add Study';
      return /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: form,
        onCancel: this.handleCancel,
        onSuccess: this.handleSave
      }, function (_ref2) {
        var processing = _ref2.processing,
            onCancel = _ref2.onCancel;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "clearfix"
        }, /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: accountField.$('id'),
          options: accountOptions,
          search: true,
          selection: true,
          fluid: true,
          allowAdditions: true,
          clearable: true,
          additionLabel: "",
          className: "mb3 mt0 col col-6 pr2",
          onChange: _this4.handleAccountChange
        }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: accountField.$('mainRegion'),
          options: _awsRegions.regionOptions,
          search: true,
          selection: true,
          fluid: true,
          className: "mb3 mt0 col col-6 pl2"
        })), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: accountField.$('name'),
          className: "mb3"
        }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
          field: accountField.$('contactInfo'),
          className: "mb3"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
          horizontal: true,
          className: "mt4 mb4"
        }, "Bucket Information"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "clearfix"
        }, /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: bucketField.$('name'),
          options: bucketOptions,
          search: true,
          selection: true,
          fluid: true,
          allowAdditions: true,
          clearable: true,
          additionLabel: "",
          className: "mb3 mt0 col col-6 pr2",
          onChange: _this4.handleBucketChange
        }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
          field: bucketField.$('region'),
          options: _awsRegions.regionOptions,
          search: true,
          selection: true,
          fluid: true,
          className: "mb3 mt0 col col-6 pl2"
        })), /*#__PURE__*/_react["default"].createElement(_SelectionButtons["default"], {
          field: bucketField.$('sse'),
          show: "headerOnly",
          className: "mb0"
        }), /*#__PURE__*/_react["default"].createElement(_SelectionButtons["default"], {
          field: bucketField.$('sse'),
          options: _bucket.encryptionOptions,
          show: "buttonsOnly",
          className: "mb3",
          onChange: _this4.handleEncryptionChange
        }), showKmsArn && /*#__PURE__*/_react["default"].createElement(_Input["default"], {
          field: bucketField.$('kmsArn'),
          className: "mb3"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
          horizontal: true,
          className: "mt4 mb4"
        }, "Studies"), studies.map(function (field) {
          return _this4.renderStudyField({
            field: field
          });
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          basic: true,
          primary: true,
          content: addButtonLabel,
          className: "mt3",
          fluid: true,
          onClick: _this4.handleAddStudy
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
          className: "mt3 mb3"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          className: "ml2",
          primary: true,
          icon: "right arrow",
          labelPosition: "right",
          content: "Save & Continue",
          disabled: processing || !accountIdValid,
          type: "submit"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
          floated: "right",
          className: "ml2",
          content: "Cancel",
          disabled: processing,
          onClick: onCancel
        }));
      });
    }
  }, {
    key: "renderStudyField",
    value: function renderStudyField(_ref3) {
      var field = _ref3.field;
      var myStudies = field.$('category').value === 'My Studies';
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        key: field.key,
        clearing: true,
        className: "mt3 p3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        floating: true,
        size: "tiny",
        className: "cursor-pointer",
        onClick: this.handleDeleteStudy(field.key)
      }, "X"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        field: field.$('id'),
        className: "mb3 mt0 col col-6 pr2"
      }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        field: field.$('name'),
        className: "mb3 mt0 col col-6 pl2"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        field: field.$('folder'),
        className: "mb3 mt0 col col-6 pr2"
      }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
        field: field.$('projectId'),
        options: this.projectIdOptions,
        search: true,
        fluid: true,
        selection: true,
        clearable: true,
        className: "mb3 mt0 col col-6 pl2"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 mt0 col col-6 pr2"
      }, /*#__PURE__*/_react["default"].createElement(_YesNo["default"], {
        field: field.$('category'),
        className: "mt3 mb3",
        onClick: this.handleStudyTypeChange(field)
      }), /*#__PURE__*/_react["default"].createElement(_YesNo["default"], {
        field: field.$('accessType'),
        className: "mt2 mb2"
      })), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
        field: field.$('description'),
        className: "mb3 mt0 col col-6 pl2"
      })), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        field: field.$('kmsArn'),
        className: "mb3"
      }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
        field: field.$('adminUsers'),
        selection: true,
        fluid: true,
        multiple: !myStudies,
        search: true,
        options: this.userIdOptions,
        className: "mb0"
      }));
    }
  }, {
    key: "wizard",
    get: function get() {
      return this.props.wizard;
    }
  }, {
    key: "projectIdOptions",
    get: function get() {
      return this.props.userStore.projectIdDropdown;
    }
  }, {
    key: "userIdOptions",
    get: function get() {
      // We want to filter out certain user types
      var list = this.props.usersStore.list;
      var result = [];

      _lodash["default"].forEach(list, function (user) {
        if (!user.isActive) return;
        if (user.isRootUser) return;

        if (user.isAdmin || user.isInternalResearcher || user.userRole === 'admin') {
          result.push({
            key: user.id,
            value: user.id,
            text: user.longDisplayName
          });
        }
      });

      return result;
    }
  }]);

  return InputStep;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(InputStep, {
  handleCancel: _mobx.action,
  handleSave: _mobx.action,
  handleAccountChange: _mobx.action,
  handleBucketChange: _mobx.action,
  handleEncryptionChange: _mobx.action,
  handleAddStudy: _mobx.action,
  handleDeleteStudy: _mobx.action,
  handleStudyTypeChange: _mobx.action,
  projectIdOptions: _mobx.computed,
  wizard: _mobx.computed,
  userIdOptions: _mobx.computed,
  form: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(InputStep)));

exports["default"] = _default;
//# sourceMappingURL=InputStep.js.map