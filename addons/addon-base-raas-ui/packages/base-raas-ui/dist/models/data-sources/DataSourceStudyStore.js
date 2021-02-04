"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSourceStudyStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// DataSourceStudyStore
// ==================================================================
var DataSourceStudyStore = _BaseStore.BaseStore.named('DataSourceStudyStore').props({
  accountId: '',
  studyId: '',
  tickPeriod: 1 * 60 * 1000 // 1 minute

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var study, permissions;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                study = self.study;
                _context.next = 3;
                return (0, _api.getStudyPermissions)(self.studyId);

              case 3:
                permissions = _context.sent;

                if (!_lodash["default"].isUndefined(study)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                study.setPermissions(permissions);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cleanup: function cleanup() {
      self.accountId = '';
      self.studyId = '';
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get account() {
      var parent = (0, _mobxStateTree.getParent)(self, 2);
      var a = parent.account;
      return a;
    },

    get study() {
      return self.account.getStudy(self.studyId);
    }

  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use dataSourceAccountsStore.getDataSourceStudyStore()
// eslint-disable-next-line import/prefer-default-export


exports.DataSourceStudyStore = DataSourceStudyStore;
//# sourceMappingURL=DataSourceStudyStore.js.map