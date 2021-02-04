"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var _reactSyntaxHighlighter = _interopRequireDefault(require("react-syntax-highlighter"));

var _hljs = require("react-syntax-highlighter/dist/esm/styles/hljs");

var _Form = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/fields/Form"));

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _settings = require("@aws-ee/base-ui/dist/helpers/settings");

var _ExternalUserPinForm = require("../../models/forms/ExternalUserPinForm");

var _cfnService = _interopRequireDefault(require("../../helpers/cfn-service"));

var _PinInput = _interopRequireDefault(require("../helpers/PinInput"));

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

var steps = {
  IAM_USER: 0,
  CREDENTIALS: 1,
  IAM_POLICY: 2,
  ENCRYPT: 3
};
var OnboardingSteps = [{
  key: 'user',
  icon: 'user',
  title: 'IAM User',
  description: 'Create a user',
  active: true
}, {
  key: 'credentials',
  icon: 'upload',
  title: 'Credentials',
  description: 'Attach credentials'
}, {
  key: 'policy',
  icon: 'file alternate outline',
  title: 'IAM Policy',
  description: 'Add permissions'
}, {
  key: 'encrypt',
  icon: 'user secret',
  title: 'Encrypt',
  description: 'Encrypt credentials'
}];

var generateDefaultIAMPolicy = function generateDefaultIAMPolicy(accountId) {
  return "\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"ec2\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"ec2:*\",\n      \"Resource\": \"*\"\n    },\n    {\n      \"Sid\": \"cloudformation\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"cloudformation:*\",\n      \"Resource\": \"*\"\n    },\n    {\n      \"Sid\": \"emr\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"elasticmapreduce:*\",\n      \"Resource\": \"*\"\n    },\n    {\n      \"Sid\": \"sagemaker\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"sagemaker:*\",\n      \"Resource\": \"*\"\n    },\n    {\n      \"Sid\": \"iamRoleAccess\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"iam:GetRole\",\n        \"iam:CreateRole\",\n        \"iam:TagRole\",\n        \"iam:GetRolePolicy\",\n        \"iam:PutRolePolicy\",\n        \"iam:DeleteRolePolicy\",\n        \"iam:DeleteRole\",\n        \"iam:PassRole\"\n      ],\n      \"Resource\": \"arn:aws:iam::".concat(accountId, ":role/analysis-*\"\n    },\n    {\n      \"Sid\": \"iamInstanceProfileAccess\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"iam:AddRoleToInstanceProfile\",\n        \"iam:CreateInstanceProfile\",\n        \"iam:GetInstanceProfile\",\n        \"iam:DeleteInstanceProfile\",\n        \"iam:RemoveRoleFromInstanceProfile\"\n      ],\n      \"Resource\": \"arn:aws:iam::").concat(accountId, ":instance-profile/analysis-*\"\n    },\n    {\n      \"Sid\": \"iamRoleServicePolicyAccess\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"iam:AttachRolePolicy\",\n        \"iam:DetachRolePolicy\"\n      ],\n      \"Resource\": \"arn:aws:iam::").concat(accountId, ":role/analysis-*\",\n      \"Condition\": {\n        \"ArnLike\": {\n          \"iam:PolicyARN\": \"arn:aws:iam::aws:policy/service-role/AmazonElasticMapReduceRole\"\n        }\n      }\n    },\n    {\n      \"Sid\": \"iamServiceLinkedRoleCreateAccess\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"iam:CreateServiceLinkedRole\",\n        \"iam:PutRolePolicy\"\n      ],\n      \"Resource\": \"arn:aws:iam::*:role/aws-service-role/elasticmapreduce.amazonaws.com*/AWSServiceRoleForEMRCleanup*\",\n      \"Condition\": {\n        \"StringLike\": {\n          \"iam:AWSServiceName\": [\n            \"elasticmapreduce.amazonaws.com\",\n            \"elasticmapreduce.amazonaws.com.cn\"\n          ]\n        }\n      }\n    },\n    {\n      \"Sid\": \"s3\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:*\",\n      \"Resource\": \"*\"\n    },\n    {\n      \"Sid\": \"ssm\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"ssm:*\",\n      \"Resource\": \"*\"\n    },\n    {\n      \"Sid\": \"kms\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"kms:*\",\n      \"Resource\": \"*\"\n    }\n  ]\n}\n").trim();
}; // Mapping from credentials.csv column names to preferred, short names


var mapCredentialsColumns = new Map([['User name', 'username'], ['Password', 'password'], ['Access key ID', 'accessKeyId'], ['Secret access key', 'secretAccessKey'], ['Console login link', 'console']]);

var ListOnboardingIAMUser = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
  ordered: true
}, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Log into the", ' ', /*#__PURE__*/_react["default"].createElement("a", {
  href: "https://console.aws.amazon.com/console/home?region=us-east-1#",
  target: "_blank",
  rel: "noopener noreferrer"
}, "AWS Console"), ' ', "and navigate to", ' ', /*#__PURE__*/_react["default"].createElement("a", {
  href: "https://console.aws.amazon.com/iam/home?region=us-east-1#/users",
  target: "_blank",
  rel: "noopener noreferrer"
}, "IAM Users")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Click 'Add User' and type a new, unique user name"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Under 'Select AWS access type', check 'Programmatic access'"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Click 'Next: Permissions', then 'Next: Tags', then 'Next: Review'"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Click 'Create User'"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "On the 'Add User' success page, click 'Download .csv'"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Click 'Close'"));

var ListOnboardingEncrypt = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
  ordered: true
}, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Enter a PIN which will be used to encrypt your AWS credentials"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Remember this PIN because you will need it in future to launch workspaces")); // expected props
// - environmentsStore (via injection)
// - location (from react router)


var UserOnboarding = /*#__PURE__*/function (_React$Component) {
  _inherits(UserOnboarding, _React$Component);

  var _super = _createSuper(UserOnboarding);

  function UserOnboarding(props) {
    var _this;

    _classCallCheck(this, UserOnboarding);

    _this = _super.call(this, props);

    _this.onboardingNext = function () {
      OnboardingSteps[_this.onboardingStep].active = false;
      OnboardingSteps[_this.onboardingStep + 1].active = true;
      _this.onboardingStep += 1;
    };

    _this.onboardingPrev = function () {
      OnboardingSteps[_this.onboardingStep].active = false;
      OnboardingSteps[_this.onboardingStep - 1].active = true;
      _this.onboardingStep -= 1;
    };

    _this.onboardingCredentialsPut = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(creds, pin) {
        var usersStore;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                usersStore = _this.getUsersStore;
                _context.next = 3;
                return _this.user.setEncryptedCreds(creds, pin);

              case 3:
                _context.next = 5;
                return usersStore.updateUser(_this.user);

              case 5:
                _context.next = 7;
                return usersStore.load();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onboardingSave = function () {
      var pin = _this.form.$('pin').value;

      _this.onboardingCredentialsPut(_this.credentials, pin);

      _this.onboardingClose();
    };

    _this.onboardingClose = function () {
      _this.resetOnboarding();

      _this.props.onclose();
    };

    _this.shouldRenderOnboarding = function () {
      return _this.user.isExternalUser;
    };

    _this.resetOnboarding = function () {
      OnboardingSteps.forEach(function (step) {
        step.active = false;
      });
      OnboardingSteps[0].active = true;
      _this.credentials = undefined;
      _this.credentialsValid = false;
      _this.copiedPolicy = '';
      _this.onboardingStep = 0;
    };

    _this.togglePolicy = function () {
      _this.activePolicy = !_this.activePolicy;
    };

    _this.testClipboardWrite = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve, _reject) {
                navigator.permissions.query({
                  name: 'clipboard-write'
                }).then(function (result) {
                  resolve(result.state === 'granted' || result.state === 'prompt');
                });
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    _this.handleCopyPolicy = function () {
      navigator.clipboard.writeText(generateDefaultIAMPolicy(_this.accountId)).then(function () {
        /* clipboard successfully set */
        (0, _mobx.runInAction)(function () {
          _this.copiedPolicy = 'copied!';
        });
      }, function () {
        /* clipboard write failed */
        (0, _mobx.runInAction)(function () {
          _this.copiedPolicy = 'copy error!';
        });
      });
    };

    _this.handleCredentialsReset = function () {
      _this.credentials = undefined;
      _this.credentialsValid = false;
    };

    _this.onCredentialsDrop = function (files) {
      var reader = new FileReader();

      reader.onabort = function () {
        console.log('file reading was aborted');
        (0, _notification.displayError)('File reading was aborted.');
      };

      reader.onerror = function () {
        console.log('file reading has failed');
        (0, _notification.displayError)('File reading has failed.');
      };

      reader.onload = function () {
        var result = reader.result;

        var credentials = _this.credentialsCSVtoJSON(result);

        (0, _mobx.runInAction)(function () {
          _this.credentials = credentials;
          _this.credentials.region = _settings.awsRegion;
        }); // Async IIFE

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var rc;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return _cfnService["default"].validateCredentials(credentials.accessKeyId, credentials.secretAccessKey);

                case 3:
                  rc = _context3.sent;
                  (0, _mobx.runInAction)(function () {
                    _this.credentialsValid = true;
                    _this.accountId = rc.Account;
                  });
                  _context3.next = 11;
                  break;

                case 7:
                  _context3.prev = 7;
                  _context3.t0 = _context3["catch"](0);
                  (0, _notification.displayError)("Credential test failed: ".concat(_context3.t0));
                  (0, _mobx.runInAction)(function () {
                    _this.credentialsValid = false;
                  });

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[0, 7]]);
        }))();
      };

      files.forEach(function (file) {
        return reader.readAsText(file);
      });
    };

    var user = _this.getUserStore.user;
    _this.form = (0, _ExternalUserPinForm.getExternalUserPinForm)();
    (0, _mobx.runInAction)(function () {
      _this.user = user;
      _this.credentials = undefined;
      _this.credentialsValid = false;
      _this.accountId = '';
      _this.activePolicy = false;
      _this.copiedPolicy = '';
      _this.onboardingStep = 0;
      _this.onboardingSteps = OnboardingSteps.length;
    });
    return _this;
  }

  _createClass(UserOnboarding, [{
    key: "renderOnboardingButtons",
    value: function renderOnboardingButtons() {
      var nextDisabled = this.onboardingStep === steps.CREDENTIALS && !this.credentialsValid;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        content: "Cancel",
        className: "mr2",
        onClick: this.onboardingClose
      }), this.onboardingStep > 0 && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        content: "Prev",
        icon: "left arrow",
        labelPosition: "left",
        color: "blue",
        onClick: this.onboardingPrev
      }), this.onboardingStep < this.onboardingSteps - 1 && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        content: "Next",
        icon: "right arrow",
        labelPosition: "right",
        color: "blue",
        disabled: nextDisabled,
        onClick: this.onboardingNext
      }), this.onboardingStep === this.onboardingSteps - 1 && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        content: "Save",
        color: "blue",
        onClick: this.onboardingSave
      }));
    }
  }, {
    key: "ListOnboardingIAMPolicy",
    value: function ListOnboardingIAMPolicy() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List, {
        ordered: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "From the", ' ', /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://console.aws.amazon.com/iam/home?region=us-east-1#/users",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "IAM user list"), ' ', "page, click the name of the new IAM user that you just created"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "In the 'Get started with permissions' block, click the 'Add inline policy' button"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "On the 'Create Policy' page, click the 'JSON' tab"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Delete the default policy text"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Click to copy a standard IAM policy", ' ', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "copy outline",
        link: true,
        onClick: this.handleCopyPolicy,
        title: "Copy IAM policy to the clipboard"
      }), this.copiedPolicy), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Paste the copied IAM policy into the IAM console"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Click the 'Review Policy' button"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.List.Item, null, "Supply a name, for example 'compute-launch', and click 'Create Policy'"));
    }
  }, {
    key: "renderOnboardingIAMPolicyText",
    value: function renderOnboardingIAMPolicyText() {
      var showHide = this.activePolicy ? 'hide' : 'show';
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion.Title, {
        active: this.activePolicy,
        index: 0,
        onClick: this.togglePolicy
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "dropdown"
      }), "Click to ", showHide, " the standard IAM policy"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Accordion.Content, {
        active: this.activePolicy
      }, /*#__PURE__*/_react["default"].createElement(_reactSyntaxHighlighter["default"], {
        language: "json",
        style: _hljs.docco
      }, generateDefaultIAMPolicy(this.accountId))));
    }
  }, {
    key: "renderOnboardingIAMCredentials",
    value: function renderOnboardingIAMCredentials() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        compact: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Valid"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "IAM User Name"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Access Key ID"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Secret Key ID"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Reset"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, this.credentialsValid ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "check",
        color: "green"
      }) : /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "delete",
        color: "red"
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, this.credentials.username), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, this.credentials.accessKeyId), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, "********************"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        basic: true,
        size: "mini",
        icon: "trash alternate outline",
        color: "red",
        content: "Reset",
        title: "Reset attached credentials",
        onClick: this.handleCredentialsReset
      })))));
    }
  }, {
    key: "credentialsCSVtoJSON",
    value: function credentialsCSVtoJSON(csv) {
      var obj = {};
      var lines = csv.split(/\r?\n/);
      var headers = lines[0].split(','); // We only care about the first line of data following the header

      for (var ii = 1; ii < lines.length; ii++) {
        var currentline = lines[ii].split(',');

        for (var jj = 0; jj < headers.length; jj++) {
          var colname = mapCredentialsColumns.get(headers[jj]) || headers[jj];
          obj[colname] = currentline[jj];
        }

        break;
      }

      return obj;
    }
  }, {
    key: "renderCredentialsDropzone",
    value: function renderCredentialsDropzone() {
      var maxSize = 1000;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "mt4 center"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h4",
        color: "grey"
      }, "Drag and drop credentials file here"), /*#__PURE__*/_react["default"].createElement(_reactDropzone["default"], {
        onDrop: this.onCredentialsDrop,
        minSize: 0,
        maxSize: maxSize,
        multiple: false
      }, function (_ref4) {
        var getRootProps = _ref4.getRootProps,
            getInputProps = _ref4.getInputProps,
            rejectedFiles = _ref4.rejectedFiles,
            isDragActive = _ref4.isDragActive;
        var isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
        return /*#__PURE__*/_react["default"].createElement("div", getRootProps(), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), isDragActive ? /*#__PURE__*/_react["default"].createElement("p", null, "Drop the CSV file here ...") : /*#__PURE__*/_react["default"].createElement("p", null, "Drag and drop a credentials.csv files here, or click to select a file"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "cloud upload",
          size: "huge",
          color: "grey"
        }), isFileTooLarge && /*#__PURE__*/_react["default"].createElement("div", {
          className: "text-danger mt-2"
        }, "File is too large."));
      }));
    }
  }, {
    key: "renderOnboardingIAMUser",
    value: function renderOnboardingIAMUser() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, {
        image: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "user",
        size: "massive"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Description, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, null, "IAM User"), /*#__PURE__*/_react["default"].createElement("p", null, "Please execute the following steps to create a new IAM User that you will use to supply credentials to the Research Portal so that we can launch workspaces in your AWS account:"), ListOnboardingIAMUser));
    }
  }, {
    key: "renderOnboardingIAMPolicy",
    value: function renderOnboardingIAMPolicy() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, {
        image: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "file alternate outline",
        size: "massive"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Description, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, null, "IAM Policy"), /*#__PURE__*/_react["default"].createElement("p", null, "Please execute the following steps to create a new IAM Policy that will provide permissions to the Research Portal so that we can launch workspaces in your AWS account:"), this.ListOnboardingIAMPolicy(), this.renderOnboardingIAMPolicyText()));
    }
  }, {
    key: "renderOnboardingCredentials",
    value: function renderOnboardingCredentials() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, {
        image: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "upload",
        size: "massive"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Description, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, null, "Credentials"), /*#__PURE__*/_react["default"].createElement("p", null, "Please attach the credentials file that you downloaded earlier. This contains your new IAM User credentials. The default name for this file is credentials.csv but your browser may have saved it under a different name."), this.credentials && this.renderOnboardingIAMCredentials(), !this.credentials && this.renderCredentialsDropzone()));
    }
  }, {
    key: "renderOnboardingEncrypt",
    value: function renderOnboardingEncrypt() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, {
        image: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "user secret",
        size: "massive"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Description, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, null, "Encrypt"), /*#__PURE__*/_react["default"].createElement("p", null, "Finally, we will locally encrypt your AWS credentials with a PIN and then store the encrypted credentials in the Research Portal. This will allow you to launch research workspaces using just a PIN."), ListOnboardingEncrypt, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        form: this.form
      }, function (_ref5) {
        var _processing = _ref5._processing,
            _onSubmit = _ref5._onSubmit,
            _onCancel = _ref5._onCancel;
        return /*#__PURE__*/_react["default"].createElement(_PinInput["default"], {
          form: _this2.form
        });
      })));
    }
  }, {
    key: "renderOnboardingStep",
    value: function renderOnboardingStep(step) {
      switch (step) {
        case steps.IAM_USER:
          return this.renderOnboardingIAMUser();

        case steps.CREDENTIALS:
          return this.renderOnboardingCredentials();

        case steps.IAM_POLICY:
          return this.renderOnboardingIAMPolicy();

        case steps.ENCRYPT:
          return this.renderOnboardingEncrypt();

        default:
          return "Unexpected step: ".concat(step);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        open: true,
        onClose: this.onboardingClose,
        closeIcon: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Header, null, "Configure AWS Credentials"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Group, {
        size: "tiny",
        fluid: true,
        items: OnboardingSteps
      })), this.renderOnboardingStep(this.onboardingStep), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, null, this.renderOnboardingButtons())));
    }
  }, {
    key: "getUserStore",
    get: function get() {
      return this.props.userStore;
    }
  }, {
    key: "getUsersStore",
    get: function get() {
      return this.props.usersStore;
    }
  }]);

  return UserOnboarding;
}(_react["default"].Component);

(0, _mobx.decorate)(UserOnboarding, {
  onboardingNext: _mobx.action,
  onboardingPrev: _mobx.action,
  resetOnboarding: _mobx.action,
  togglePolicy: _mobx.action,
  handleCopyPolicy: _mobx.action,
  handleCredentialsReset: _mobx.action,
  onCredentialsDrop: _mobx.action,
  onRegionChange: _mobx.action,
  user: _mobx.observable,
  credentials: _mobx.observable,
  credentialsValid: _mobx.observable,
  activePolicy: _mobx.observable,
  copiedPolicy: _mobx.observable,
  onboardingStep: _mobx.observable,
  onboardingSteps: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(UserOnboarding)));

exports["default"] = _default;
//# sourceMappingURL=UserOnboarding.js.map