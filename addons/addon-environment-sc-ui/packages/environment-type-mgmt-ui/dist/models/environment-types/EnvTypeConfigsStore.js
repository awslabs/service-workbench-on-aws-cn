"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvTypeConfigsStore = exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

var _EnvTypeConfig = require("./EnvTypeConfig");

var _EnvTypeConfigVar = require("./EnvTypeConfigVar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// EnvTypeConfigsStore
// ==================================================================
var EnvTypeConfigsStore = _BaseStore.BaseStore.named('EnvTypeConfigsStore').props({
  // Id of the EnvType
  id: _mobxStateTree.types.identifier,
  // map of EnvTypeConfig with key = EnvTypeConfig.id, value = EnvTypeConfig MST model instance
  envTypeConfigs: _mobxStateTree.types.optional(_mobxStateTree.types.map(_EnvTypeConfig.EnvTypeConfig), {}),
  // map of EnvTypeConfigVar with key = EnvTypeConfigVar.name, value = EnvTypeConfigVar MST model instance
  envTypeConfigVars: _mobxStateTree.types.optional(_mobxStateTree.types.map(_EnvTypeConfigVar.EnvTypeConfigVar), {}),
  tickPeriod: 60 * 1000 // 1 minute

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, envTypeConfigs, envTypeConfigVars;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all([(0, _api.getAllEnvTypeConfigs)(self.id), (0, _api.getEnvTypeConfigVars)(self.id)]);

              case 2:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                envTypeConfigs = _yield$Promise$all2[0];
                envTypeConfigVars = _yield$Promise$all2[1];
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.envTypeConfigs, envTypeConfigs || [], function (exiting, newItem) {
                    exiting.setEnvTypeConfig(newItem);
                  });
                  (0, _utils.consolidateToMap)(self.envTypeConfigVars, envTypeConfigVars || [], function (exiting, newItem) {
                    exiting.setEnvTypeConfigVar(newItem);
                  }, 'name');
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
      self.envTypes.clear();
      superCleanup();
    },
    createEnvTypeConfig: function createEnvTypeConfig(envTypeConfig) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var createdEnvTypeConfig;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.createEnvTypeConfig)(self.id, envTypeConfig);

              case 2:
                createdEnvTypeConfig = _context2.sent;
                self.runInAction(function () {
                  // Add newly created env type to env types map
                  var createdEnvTypeConfigModel = _EnvTypeConfig.EnvTypeConfig.create(createdEnvTypeConfig);

                  self.envTypeConfigs.set(createdEnvTypeConfigModel.id, createdEnvTypeConfigModel);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    updateEnvTypeConfig: function updateEnvTypeConfig(envTypeConfig) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var updatedEnvTypeConfig;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api.updateEnvTypeConfig)(self.id, envTypeConfig);

              case 2:
                updatedEnvTypeConfig = _context3.sent;
                self.runInAction(function () {
                  var previous = self.envTypeConfigs.get(updatedEnvTypeConfig.id);
                  previous.setEnvTypeConfig(updatedEnvTypeConfig);
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    deleteEnvTypeConfig: function deleteEnvTypeConfig(envTypeConfigId) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _api.deleteEnvTypeConfig)(self.id, envTypeConfigId);

              case 2:
                self.runInAction(function () {
                  self.envTypeConfigs["delete"](envTypeConfigId);
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  };
}).views(function (self) {
  return {
    get list() {
      var arr = _lodash["default"].filter((0, _utils.mapToArray)(self.envTypeConfigs), function (c) {
        return c.allowedToUse;
      });

      return _lodash["default"].orderBy(arr, ['createdAt', 'name'], ['asc', 'asc']);
    },

    get listAll() {
      var arr = (0, _utils.mapToArray)(self.envTypeConfigs);
      return _lodash["default"].orderBy(arr, ['createdAt', 'name'], ['asc', 'asc']);
    },

    get empty() {
      return _lodash["default"].isEmpty(self.listAll);
    },

    getEnvTypeConfig: function getEnvTypeConfig(id) {
      return self.envTypeConfigs.get(id);
    }
  };
}); // Note: Do NOT register this in the appContext, if you want to gain access to an instance
//       use EnvTypesStore.getEnvTypeConfigsStore()


exports.EnvTypeConfigsStore = EnvTypeConfigsStore;
var _default = EnvTypeConfigsStore;
exports["default"] = _default;
//# sourceMappingURL=EnvTypeConfigsStore.js.map