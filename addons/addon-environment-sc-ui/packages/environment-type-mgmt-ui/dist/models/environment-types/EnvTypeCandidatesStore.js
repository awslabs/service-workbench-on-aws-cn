"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.EnvTypeCandidatesStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _api = require("../../helpers/api");

var _EnvTypeCandidate = require("./EnvTypeCandidate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// EnvTypeCandidatesStore
// ==================================================================
var EnvTypeCandidatesStore = _BaseStore.BaseStore.named('EnvTypeCandidatesStore').props({
  envTypeCandidates: _mobxStateTree.types.optional(_mobxStateTree.types.map(_EnvTypeCandidate.EnvTypeCandidate), {}),
  tickPeriod: 60 * 1000 // 1 minute

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var envTypeCandidates;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getAllEnvTypeCandidatesNotImported)();

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = [];

              case 5:
                envTypeCandidates = _context.t0;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.envTypeCandidates, envTypeCandidates, function (exiting, newItem) {
                    exiting.setEnvTypeCandidate(newItem);
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
    cleanup: function cleanup() {
      self.envTypeCandidates.clear();
      superCleanup();
    },
    onEnvTypeCandidateImport: function onEnvTypeCandidateImport(id) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var envTypeCandidateImported;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Addition or deletion of env type impacts env type candidates store
                // because imported env types are no longer candidates for import
                // reload env type candidates store as well
                envTypeCandidateImported = self.envTypeCandidates.get(id); // The self.envTypeCandidatesStore.load() will result in envTypeCandidateImported being deleted from the map (i.e., deleted from the tree)
                // at this point if we are on any view that is referencing envTypeCandidateImported we will get
                // "You are trying to read or write to an object that is no longer part of a state tree" mobx-state-tree error
                // to avoid this, detach the node first

                (0, _mobxStateTree.detach)(envTypeCandidateImported);
                _context2.next = 4;
                return self.load();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  };
}).views(function (self) {
  return {
    get list() {
      return _lodash["default"].sortBy((0, _utils.mapToArray)(self.envTypeCandidates), function (c) {
        return -1 * _lodash["default"].get(c, 'provisioningArtifact.createdTime');
      }); // return [];
    },

    get listLatestVersions() {
      return _lodash["default"].filter(self.list, 'isLatest');
    },

    get listAllVersions() {
      return self.list;
    },

    get empty() {
      return _lodash["default"].isEmpty(self.list);
    },

    getEnvTypeCandidate: function getEnvTypeCandidate(id) {
      return self.envTypeCandidates.get(id);
    }
  };
});

exports.EnvTypeCandidatesStore = EnvTypeCandidatesStore;

function registerContextItems(appContext) {
  appContext.envTypeCandidatesStore = EnvTypeCandidatesStore.create({}, appContext);
}
//# sourceMappingURL=EnvTypeCandidatesStore.js.map