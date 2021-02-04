"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.IndexesStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _api = require("../../helpers/api");

var _Index = require("./Index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// IndexesStore
// ==================================================================
var IndexesStore = _BaseStore.BaseStore.named('IndexesStore').props({
  indexes: _mobxStateTree.types.optional(_mobxStateTree.types.map(_Index.Index), {}),
  tickPeriod: 900 * 1000 // 15 minutes

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var indexes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getIndexes)();

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = [];

              case 5:
                indexes = _context.t0;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.indexes, indexes, function (exiting, newItem) {
                    exiting.setIndex(newItem);
                  });
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addIndex: function () {
      var _addIndex2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index) {
        var addedIndex;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.addIndex)(index);

              case 2:
                addedIndex = _context2.sent;
                self.runInAction(function () {
                  // Added newly created user to users map
                  var addedIndexModel = _Index.Index.create(addedIndex);

                  self.indexes.set(addedIndexModel.id, addedIndexModel);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addIndex(_x) {
        return _addIndex2.apply(this, arguments);
      }

      return addIndex;
    }(),
    getIndexesStore: function getIndexesStore(indexesId) {
      var entry = self.indexesStores.get(indexesId);

      if (!entry) {
        // Lazily create the store
        self.indexesStores.set(indexesId, IndexesStore.create({
          indexesId: indexesId
        }));
        entry = self.indexesStores.get(indexesId);
      }

      return entry;
    },
    getIndex: function getIndex(indexesId) {
      var res = {};
      self.indexes.forEach(function (index) {
        if (index.id === indexesId) res = _lodash["default"].clone(index);
      });
      return res;
    },
    cleanup: function cleanup() {
      self.indexes.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get dropdownOptions() {
      var result = []; // converting map self.users to result array

      self.indexes.forEach(function (index) {
        var proj = {};
        proj.key = index.id;
        proj.value = index.id;
        proj.text = index.id;
        result.push(proj);
      });
      return result;
    },

    get empty() {
      return self.indexes.size === 0;
    },

    get total() {
      return self.indexes.size;
    },

    get list() {
      var result = [];
      self.indexes.forEach(function (indexes) {
        return result.push(indexes);
      });
      return _lodash["default"].reverse(_lodash["default"].sortBy(result, ['createdAt', 'name']));
    },

    hasIndexes: function hasIndexes(id) {
      return self.indexes.has(id);
    },
    getIndexes: function getIndexes(id) {
      return self.indexes.get(id);
    }
  };
});

exports.IndexesStore = IndexesStore;

function registerContextItems(appContext) {
  appContext.indexesStore = IndexesStore.create({}, appContext);
}
//# sourceMappingURL=IndexesStore.js.map