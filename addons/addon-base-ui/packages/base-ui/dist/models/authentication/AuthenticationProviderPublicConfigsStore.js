"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.AuthenticationProviderPublicConfigsStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _lodash = _interopRequireDefault(require("lodash"));

var _BaseStore = require("../BaseStore");

var _api = require("../../helpers/api");

var _AuthenticationProviderPublicConfig = _interopRequireDefault(require("./AuthenticationProviderPublicConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AuthenticationProviderPublicConfigsStore = _BaseStore.BaseStore.named('AuthenticationProviderPublicConfigsStore').props({
  authenticationProviderPublicConfigs: _mobxStateTree.types.optional(_mobxStateTree.types.array(_AuthenticationProviderPublicConfig["default"]), [])
}).actions(function (self) {
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var configs;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getAuthenticationProviderPublicConfigs)();

              case 2:
                configs = _context.sent;
                self.runInAction(function () {
                  self.authenticationProviderPublicConfigs = configs;
                  var authentication = (0, _mobxStateTree.getEnv)(self).authentication;

                  var selected = _lodash["default"].get(configs, '[0].id', '');

                  authentication.setSelectedAuthenticationProviderId(selected);
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
    get authenticationProviderOptions() {
      var size = _lodash["default"].size(self.authenticationProviderPublicConfigs); // We don't do any filtering if we only have one configuration


      if (size === 1) {
        var entry = self.authenticationProviderPublicConfigs[0];
        return [{
          key: entry.id,
          text: entry.title,
          value: entry.id
        }];
      } // We need to loop through all the configurations and remove any entry
      // that is of type cognito_user_pool but only if enableNativeUserPoolUsers = false


      var result = [];

      _lodash["default"].forEach(self.authenticationProviderPublicConfigs, function (config) {
        if (config.type === 'cognito_user_pool' && !config.enableNativeUserPoolUsers) return;
        result.push({
          key: config.id,
          text: config.title,
          value: config.id
        });
      });

      return result;
    },

    toAuthenticationProviderFromId: function toAuthenticationProviderFromId(authenticationProviderId) {
      return _lodash["default"].find(self.authenticationProviderPublicConfigs, {
        id: authenticationProviderId
      });
    }
  };
});

exports.AuthenticationProviderPublicConfigsStore = AuthenticationProviderPublicConfigsStore;

function registerContextItems(appContext) {
  appContext.authenticationProviderPublicConfigsStore = AuthenticationProviderPublicConfigsStore.create({}, appContext);
}
//# sourceMappingURL=AuthenticationProviderPublicConfigsStore.js.map