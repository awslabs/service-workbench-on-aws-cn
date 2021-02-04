"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.ComputePlatformsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _api = require("../../helpers/api");

var _ComputePlatform = require("./ComputePlatform");

var _ComputePlatformStore = require("./ComputePlatformStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// ComputePlatformsStore
// ==================================================================
var ComputePlatformsStore = _BaseStore.BaseStore.named('ComputePlatformsStore').props({
  platforms: _mobxStateTree.types.map(_ComputePlatform.ComputePlatform),
  platformsStores: _mobxStateTree.types.map(_ComputePlatformStore.ComputePlatformStore)
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var computePlatforms;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getComputePlatforms)();

              case 2:
                computePlatforms = _context.sent;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.platforms, computePlatforms, function (exiting, newItem) {
                    exiting.setComputePlatform(newItem);
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
    getComputePlatformStore: function getComputePlatformStore(platformId) {
      var entry = self.platformsStores.get(platformId);

      if (!entry) {
        // Lazily create the store
        self.platformsStores.set(platformId, _ComputePlatformStore.ComputePlatformStore.create({
          platformId: platformId
        }));
        entry = self.platformsStores.get(platformId);
      }

      return entry;
    },
    cleanup: function cleanup() {
      self.platforms.clear();
      self.platformsStores.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.platforms.size === 0;
    },

    get total() {
      return self.platforms.size;
    },

    get list() {
      return _lodash["default"].sortBy((0, _mobx.values)(self.platforms), 'displayOrder');
    },

    getComputePlatform: function getComputePlatform(id) {
      return self.platforms.get(id);
    }
  };
});

exports.ComputePlatformsStore = ComputePlatformsStore;

function registerContextItems(appContext) {
  appContext.computePlatformsStore = ComputePlatformsStore.create({}, appContext);
}
//# sourceMappingURL=ComputePlatformsStore.js.map