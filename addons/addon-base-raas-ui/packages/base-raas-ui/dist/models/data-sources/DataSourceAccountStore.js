"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSourceAccountStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

var _DataSourceStudyStore = require("./DataSourceStudyStore");

var _DataSourceStackInfoStore = require("./DataSourceStackInfoStore");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// DataSourceAccountStore
// ==================================================================
var DataSourceAccountStore = _BaseStore.BaseStore.named('DataSourceAccountStore').props({
  accountId: '',
  studyStores: _mobxStateTree.types.map(_DataSourceStudyStore.DataSourceStudyStore),
  stackInfoStore: _mobxStateTree.types.maybe(_DataSourceStackInfoStore.DataSourceStackInfoStore),
  tickPeriod: 60 * 1000 // 1 minute

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var studies, account;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getDataSourceStudies)(self.accountId);

              case 2:
                studies = _context.sent;
                account = self.account;
                account.setStudies(studies);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getStudyStore: function getStudyStore(studyId) {
      var entry = self.studyStores.get(studyId);

      if (!entry) {
        // Lazily create the store
        self.studyStores.set(studyId, _DataSourceStudyStore.DataSourceStudyStore.create({
          accountId: self.accountId,
          studyId: studyId
        }));
        entry = self.studyStores.get(studyId);
      }

      return entry;
    },
    getStackInfoStore: function getStackInfoStore() {
      var entry = self.stackInfoStore;

      if (!entry) {
        // Lazily create the store
        self.stackInfoStore = _DataSourceStackInfoStore.DataSourceStackInfoStore.create({
          accountId: self.accountId
        });
        entry = self.stackInfoStore;
      }

      return entry;
    },
    cleanup: function cleanup() {
      self.accountId = '';
      self.studyStores.clear();
      self.stackInfoStore.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get account() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var a = parent.getAccount(self.accountId);
      return a;
    },

    get studiesTotal() {
      var account = self.account || {
        studies: {}
      };
      return account.studies.size;
    },

    getStudy: function getStudy(studyId) {
      return self.account.getStudy(studyId);
    }
  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use dataSourceAccountsStore.getDataSourceAccountStore()
// eslint-disable-next-line import/prefer-default-export


exports.DataSourceAccountStore = DataSourceAccountStore;
//# sourceMappingURL=DataSourceAccountStore.js.map