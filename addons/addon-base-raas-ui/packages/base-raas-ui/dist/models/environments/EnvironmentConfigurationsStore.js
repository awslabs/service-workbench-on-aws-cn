"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.EnvironmentConfigurationsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _EnvironmentConfiguration = require("./EnvironmentConfiguration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var EnvironmentConfigurationsStore = _BaseStore.BaseStore.named('EnvironmentConfigurationsStore').props({
  configurations: _mobxStateTree.types.map(_EnvironmentConfiguration.EnvironmentConfiguration),
  heartbeatInterval: -1
}).actions(function (self) {
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var environmentConfigurations;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getEnvironmentConfigurations();

              case 2:
                environmentConfigurations = _context.sent;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.configurations, environmentConfigurations, function (exiting, newItem) {
                    exiting.setEnvironmentConfiguration(newItem);
                  });
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.configurations.size === 0;
    },

    get total() {
      return self.configurations.size;
    },

    get list() {
      var result = [];
      self.configurations.forEach(function (configuration) {
        return result.push(configuration);
      });
      return _lodash["default"].sortBy(result, ['id']);
    },

    getConfiguration: function getConfiguration(id) {
      return self.configurations.get(id);
    }
  };
});

exports.EnvironmentConfigurationsStore = EnvironmentConfigurationsStore;

function getEnvironmentConfigurations() {
  return _getEnvironmentConfigurations.apply(this, arguments);
}

function _getEnvironmentConfigurations() {
  _getEnvironmentConfigurations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", []);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getEnvironmentConfigurations.apply(this, arguments);
}

function registerContextItems(appContext) {
  appContext.environmentConfigurationsStore = EnvironmentConfigurationsStore.create({}, appContext);
}
//# sourceMappingURL=EnvironmentConfigurationsStore.js.map