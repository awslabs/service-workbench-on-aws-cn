"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.RegisterStudyWizard = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _Operations = _interopRequireDefault(require("../../operations/Operations"));

var _RegisterAccount = _interopRequireDefault(require("./operations/RegisterAccount"));

var _RegisterBucket = _interopRequireDefault(require("./operations/RegisterBucket"));

var _RegisterStudy = _interopRequireDefault(require("./operations/RegisterStudy"));

var _PrepareCfn = _interopRequireDefault(require("./operations/PrepareCfn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// RegisterStudyWizard
// ==================================================================
var RegisterStudyWizard = _mobxStateTree.types.model('RegisterStudyWizard', {
  step: '',
  accountId: ''
})["volatile"](function (_self) {
  return {
    operations: undefined
  };
}).actions(function () {
  return {
    // I had issues using runInAction from mobx
    // the issue is discussed here https://github.com/mobxjs/mobx-state-tree/issues/915
    runInAction: function runInAction(fn) {
      return fn();
    }
  };
}).actions(function (self) {
  return {
    afterCreate: function afterCreate() {
      self.step = 'start';
      self.operations = new _Operations["default"]();
    },
    submit: function () {
      var _submit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var formData,
            providedAccount,
            providedBucket,
            studies,
            ops,
            accountsStore,
            existingAccount,
            existingBucket,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                providedAccount = formData.account || {};
                providedBucket = formData.bucket || {};
                studies = formData.studies || [];
                ops = self.operations;
                accountsStore = self.accountsStore;
                existingAccount = self.getAccount(providedAccount.id);
                existingBucket = existingAccount ? existingAccount.getBucket(providedBucket.name) : undefined;
                self.accountId = providedAccount.id;
                ops.clear();

                if (_lodash["default"].isEmpty(existingAccount)) {
                  ops.add(new _RegisterAccount["default"]({
                    account: providedAccount,
                    accountsStore: accountsStore
                  }));
                }

                if (_lodash["default"].isEmpty(existingBucket)) {
                  ops.add(new _RegisterBucket["default"]({
                    accountId: providedAccount.id,
                    bucket: providedBucket,
                    accountsStore: accountsStore
                  }));
                }

                _lodash["default"].forEach(studies, function (providedStudy) {
                  var study = _objectSpread({}, providedStudy); // lets determine the kmsScope


                  var sse = providedBucket.sse;
                  var kmsArn = study.kmsArn;
                  if (!_lodash["default"].isEmpty(kmsArn)) study.kmsScope = 'study';else if (sse === 'kms') study.kmsScope = 'bucket';else study.kmsScope = 'none'; // make sure adminUsers is an array, this is because in the form drop down if the study is my studies, then
                  // we ask for a single value, which will not return an array

                  if (!_lodash["default"].isArray(study.adminUsers)) {
                    study.adminUsers = [study.adminUsers];
                  }

                  ops.add(new _RegisterStudy["default"]({
                    accountId: providedAccount.id,
                    bucket: providedBucket,
                    study: removeEmpty(study),
                    accountsStore: accountsStore
                  }));
                });

                ops.add(new _PrepareCfn["default"]({
                  accountId: providedAccount.id,
                  accountsStore: accountsStore
                }));
                self.step = 'submit';
                _context.next = 17;
                return ops.run();

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }(),
    retry: function () {
      var _retry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self.step = 'submit';
                _context2.next = 3;
                return self.operations.rerun();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function retry() {
        return _retry.apply(this, arguments);
      }

      return retry;
    }(),
    reset: function reset() {
      self.cleanup();
    },
    advanceToNextStep: function advanceToNextStep() {
      if (self.step === 'start') {
        self.step = 'input';
      } else if (self.step === 'submit') {
        self.step = 'cfn';
      }
    },
    cleanup: function cleanup() {
      self.step = 'start';
      if (self.operations) self.operations.clear();
      self.accountId = '';
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    get isStartStep() {
      return self.step === 'start';
    },

    get isInputStep() {
      return self.step === 'input';
    },

    get isSubmitStep() {
      return self.step === 'submit';
    },

    get isCfnStep() {
      return self.step === 'cfn';
    },

    get dropdownAccountOptions() {
      var accountsStore = (0, _mobxStateTree.getEnv)(self).dataSourceAccountsStore;
      return accountsStore.dropdownOptions;
    },

    get processedAccount() {
      if (_lodash["default"].isEmpty(self.accountId)) return {};
      return self.getAccount(self.accountId);
    },

    get accountsStore() {
      return (0, _mobxStateTree.getEnv)(self).dataSourceAccountsStore;
    },

    getAccount: function getAccount(id) {
      return self.accountsStore.getAccount(id);
    },
    getBucket: function getBucket(_ref) {
      var accountId = _ref.accountId,
          bucketName = _ref.bucketName;
      var account = self.getAccount(accountId);
      if (_lodash["default"].isEmpty(account)) return undefined;
      return _lodash["default"].find(account.buckets, function (bucket) {
        return bucket.name === bucketName;
      });
    },
    getBucketRegion: function getBucketRegion(_ref2) {
      var accountId = _ref2.accountId,
          bucketName = _ref2.bucketName;
      var bucket = self.getBucket({
        accountId: accountId,
        bucketName: bucketName
      });
      if (_lodash["default"].isEmpty(bucket)) return undefined;
      return bucket.region;
    },
    getDropdownBucketOptions: function getDropdownBucketOptions(accountId) {
      var account = self.getAccount(accountId);
      if (_lodash["default"].isEmpty(account)) return [];
      return _lodash["default"].map(account.buckets, function (bucket) {
        return {
          key: bucket.name,
          value: bucket.name,
          text: bucket.name
        };
      });
    }
  };
}); // Given an object returns a new object where all empty/undefined properties are removed


exports.RegisterStudyWizard = RegisterStudyWizard;

function removeEmpty(obj) {
  var result = {};

  _lodash["default"].forEach(_lodash["default"].keys(obj), function (key) {
    if (!_lodash["default"].isEmpty(obj[key])) {
      result[key] = obj[key];
    }
  });

  return result;
}

function registerContextItems(appContext) {
  appContext.registerStudyWizard = RegisterStudyWizard.create({}, appContext);
}
//# sourceMappingURL=RegisterStudyWizard.js.map