"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _api = require("../../helpers/api");

var _categories = require("./categories");

var _Study = require("./Study");

var _StudyStore = require("./StudyStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// StudiesStore
// ==================================================================
var StudiesStore = _BaseStore.BaseStore.named('StudiesStore').props({
  category: '',
  studies: _mobxStateTree.types.optional(_mobxStateTree.types.map(_Study.Study), {}),
  studyStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_StudyStore.StudyStore), {}),
  tickPeriod: 300 * 1000 // 5 minutes

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var studies;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getStudies)(self.category);

              case 2:
                studies = _context.sent;
                // We try to preserve existing studies data and merge the new data instead
                // We could have used self.studies.replace(), but it will do clear() then merge()
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.studies, studies, function (exiting, newItem) {
                    exiting.setStudy(newItem);
                  });
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addStudy: function addStudy(rawStudy) {
      var id = rawStudy.id;
      var previous = self.studies.get(id);

      if (!previous) {
        self.studies.put(rawStudy);
      } else {
        previous.setStudy(rawStudy);
      }
    },
    getStudyStore: function getStudyStore(studyId) {
      var entry = self.studyStores.get(studyId);

      if (!entry) {
        // Lazily create the store
        self.studyStores.set(studyId, _StudyStore.StudyStore.create({
          studyId: studyId
        }));
        entry = self.studyStores.get(studyId);
      }

      return entry;
    },
    createStudy: function createStudy(study) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result, resultStudy;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.createStudy)(_objectSpread({}, study, {
                  uploadLocationEnabled: true
                }));

              case 2:
                result = _context2.sent;
                self.runInAction(function () {
                  self.addStudy(result);
                });
                resultStudy = self.getStudy(result.id);
                return _context2.abrupt("return", resultStudy);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    cleanup: function cleanup() {
      self.studies.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.studies.size === 0;
    },

    get total() {
      return self.studies.size;
    },

    get list() {
      var result = [];
      self.studies.forEach(function (study) {
        return result.push(study);
      });
      return _lodash["default"].reverse(_lodash["default"].sortBy(result, ['createdAt', 'name']));
    },

    hasStudy: function hasStudy(id) {
      return self.studies.has(id);
    },
    getStudy: function getStudy(id) {
      return self.studies.get(id);
    }
  };
});

function registerContextItems(appContext) {
  var _appContext$studiesSt;

  appContext.studiesStoresMap = (_appContext$studiesSt = {}, _defineProperty(_appContext$studiesSt, _categories.categories.myStudies.id, StudiesStore.create({
    category: _categories.categories.myStudies.name
  })), _defineProperty(_appContext$studiesSt, _categories.categories.organization.id, StudiesStore.create({
    category: _categories.categories.organization.name
  })), _defineProperty(_appContext$studiesSt, _categories.categories.openData.id, StudiesStore.create({
    category: _categories.categories.openData.name
  })), _appContext$studiesSt);
}
//# sourceMappingURL=StudiesStore.js.map