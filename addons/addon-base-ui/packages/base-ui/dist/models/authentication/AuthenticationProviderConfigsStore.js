"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.fromConfiguration = fromConfiguration;
exports.AuthenticationProviderConfigsStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _lodash = _interopRequireDefault(require("lodash"));

var _api = require("../../helpers/api");

var _BaseStore = require("../BaseStore");

var _utils = require("../../helpers/utils");

var _ConfigurationEditor = _interopRequireDefault(require("../configuration/ConfigurationEditor"));

var _AuthenticationProviderConfigEditor = _interopRequireDefault(require("./AuthenticationProviderConfigEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AuthenticationProviderConfigsStore = _BaseStore.BaseStore.named('AuthenticationProviderConfigsStore').props({
  // authenticationProviderConfigs: A map of authentication provider configurations. Key = id, Value = authn provider config
  // Each config in the array has the following shape

  /*
  {
    id: STRING // id of the authentication provider
    title: STRING // title of the authentication provider
    ..... // The rest of the fields which differ depending on the type of the authentication provider
    type: { // An object containing information about the authentication provider type
      type: STRING // authentication provider type
      title: STRING // title of the authentication provider type
      description: STRING // description about the authentication provider type
      config: { // An object authentication provider type configuration
        credentialHandlingType: STRING // credentialHandlingType indicating credential handling for the authentication provider
                                       // Possible values:
                                       // 'submit' -- The credentials should be submitted to the URL provided by the authentication provider
                                       // 'redirect' -- The credentials should be NOT be collected and the user should be redirected directly to the
                                       // URL provided by the authentication provider. For example, in case of SAML auth, the username/password
                                       // should not be collected by the service provider but the user should be redirected to the identity provider
         inputSchema: OBJECT // An object containing JSON schema that describes all properties of the authentication provider configuration that must be provided as
                            // input when creating this authentication provider.
                            // This schema will defer based on authentication provider type.
        inputManifestForCreate: OBJECT // An object similar to inputSchema containing a manifest that describes all properties of the authentication provider configuration that must be provided as
                            // input when creating this authentication provider. In addition, the object also has information that can be used by the UI to display inputs
                            // forms such as which inputs to ask from user in which section of the wizard, which sections to show based on which conditions etc.
                            // This manifest will defer based on authentication provider type.
        inputManifestForUpdate: OBJECT // Similar to inputManifestForCreate that describes inputs to be accepted from user when updating an existing authentication provider
      }
    }
  }
  */
  authenticationProviderConfigs: _mobxStateTree.types.optional(_mobxStateTree.types.map(_mobxStateTree.types.frozen()), {}),

  /*
    Key = authenticationProviderConfigId, Value = AuthenticationProviderConfigEditor
   */
  authenticationProviderConfigEditors: _mobxStateTree.types.optional(_mobxStateTree.types.map(_AuthenticationProviderConfigEditor["default"]), {})
}).actions(function (self) {
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var authenticationProviderConfigs;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getAuthenticationProviderConfigs)();

              case 2:
                authenticationProviderConfigs = _context.sent;
                self.runInAction(function () {
                  var map = {};
                  authenticationProviderConfigs.forEach(function (authenticationProviderConfig) {
                    map[authenticationProviderConfig.id] = authenticationProviderConfig;
                  });
                  self.authenticationProviderConfigs.replace(map);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getUpdateAuthenticationProviderConfigEditor: function getUpdateAuthenticationProviderConfigEditor(authenticationProviderConfigId) {
      var authenticationProviderConfigEditor = self.authenticationProviderConfigEditors.get(authenticationProviderConfigId);

      if (!authenticationProviderConfigEditor) {
        authenticationProviderConfigEditor = _AuthenticationProviderConfigEditor["default"].create({
          id: authenticationProviderConfigId
        });
        var authenticationProviderConfig = self.getAuthenticationProviderConfig(authenticationProviderConfigId);
        authenticationProviderConfigEditor.setConfigEditor(self.getConfigEditorForUpdate(authenticationProviderConfig));
        self.authenticationProviderConfigEditors.put(authenticationProviderConfigEditor);
      }

      return authenticationProviderConfigEditor;
    },
    getConfigEditorForUpdate: function getConfigEditorForUpdate(authenticationProviderConfig) {
      var inputManifestForUpdate = authenticationProviderConfig.config.type.config.inputManifestForUpdate;

      if (inputManifestForUpdate) {
        var inputManifest = _lodash["default"].cloneDeep(inputManifestForUpdate); // "id" is read-only and should not be part of the inputManifestForUpdate when updating an existing provider so remove it


        var filteredSections = _lodash["default"].map(inputManifest.sections, function (section) {
          var filteredChildren = _lodash["default"].filter(section.children, function (child) {
            return child.name !== 'id';
          });

          section.children = filteredChildren;
          return section;
        });

        inputManifest.sections = filteredSections;
        var configuration = toConfiguration(authenticationProviderConfig.config);
        return _ConfigurationEditor["default"].create({
          currentSectionIndex: 0,
          review: false,
          inputManifest: inputManifest,
          configuration: configuration,
          mode: 'edit'
        });
      }

      return undefined;
    },
    updateAuthenticationProvider: function updateAuthenticationProvider(authenticationProviderConfig) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var updated;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.updateAuthenticationProviderConfig)(authenticationProviderConfig);

              case 2:
                updated = _context2.sent;
                self.runInAction(function () {
                  self.authenticationProviderConfigs.set(updated.id, updated);
                  var authenticationProviderConfigEditor = self.authenticationProviderConfigEditors.get(updated.id);
                  authenticationProviderConfigEditor.setConfigEditor(self.getConfigEditorForUpdate(updated));
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCreateAuthenticationProviderConfigEditor: function getCreateAuthenticationProviderConfigEditor(_authenticationProviderTypeConfig) {}
  };
}).views(function (self) {
  return {
    get empty() {
      return self.authenticationProviderConfigs.size === 0;
    },

    get list() {
      return (0, _utils.mapToArray)(self.authenticationProviderConfigs);
    },

    getAuthenticationProviderConfig: function getAuthenticationProviderConfig(authenticationProviderConfigId) {
      return self.authenticationProviderConfigs.get(authenticationProviderConfigId);
    },

    /**
     * Method that finds first authentication provider that has an idp with the given idp name
     * @param idpName Name of the identity provider
     * @returns {*}
     */
    getAuthenticationProviderConfigByIdpName: function getAuthenticationProviderConfigByIdpName(idpName) {
      var providerConfig = _lodash["default"].find(self.list, function (authNProvider) {
        var idps = _lodash["default"].get(authNProvider, 'config.federatedIdentityProviders');

        var foundIdp = _lodash["default"].find(idps, {
          name: idpName
        }); // return true if idp is found under this authentication provider


        return !!foundIdp;
      });

      return providerConfig;
    }
  };
});
/**
 * Translates given authenticationProviderConfig into ConfigurationEditor compatible flat "configuration" object with key/value pairs.
 * The authenticationProviderConfig may be an object graph but the returned "configuration" will be flat object with key/value pairs.
 * @param authenticationProviderConfig
 * @return configuration
 */


exports.AuthenticationProviderConfigsStore = AuthenticationProviderConfigsStore;

function toConfiguration(authenticationProviderConfig) {
  // Authentication provider "type" information is not part of inputs and can be skipped from the configuration
  var flatObj = (0, _utils.flattenObject)(authenticationProviderConfig, function (_result, _value, key) {
    return key !== 'type';
  }); // MobX form tries to handle nested object notations using dots and and array notations using
  // [] and expects nested field structure
  // Here, we want the keys like 'a.b[0].c[1]' etc to be treated as opaque keys in MobX
  // So replace . and [] to make sure mobx does not treat them as nested keys

  var toOpaqueKey = function toOpaqueKey(key) {
    var opaqueKey = _lodash["default"].replace(key, /\./g, '/');

    opaqueKey = _lodash["default"].replace(opaqueKey, /\[/g, '|-');
    opaqueKey = _lodash["default"].replace(opaqueKey, /]/g, '-|');
    return opaqueKey;
  };

  return _lodash["default"].transform(flatObj, function (result, value, key) {
    result[toOpaqueKey(key)] = value;
  }, {});
}
/**
 * Translates given configuration object containing key/value pairs into authenticationProviderConfig.
 * This function is inverse of toConfiguration function above.
 * @param configuration
 * @return authenticationProviderConfig
 */


function fromConfiguration(configuration) {
  // MobX form tries to handle nested object notations using dots and and array notations using
  // [] and expects nested field structure
  // Here, the configuration may have been translated to use opaque keys with dots replaced by / and
  // [ replaced by |- and ] replaced with -|
  // Convert those keys back to use dot and [] notations
  var fromOpaqueKey = function fromOpaqueKey(key) {
    var opaqueKey = _lodash["default"].replace(key, /\//g, '.');

    opaqueKey = _lodash["default"].replace(opaqueKey, /(\|-)/g, '[');
    opaqueKey = _lodash["default"].replace(opaqueKey, /(-\|)/g, ']');
    return opaqueKey;
  };

  var flatObj = _lodash["default"].transform(configuration, function (result, value, key) {
    result[fromOpaqueKey(key)] = value;
  }, {}); // Authentication provider "type" information is not part of inputs and can be skipped from the configuration


  return (0, _utils.unFlattenObject)(flatObj, function (_result, _value, key) {
    return key !== 'type';
  });
}

function registerContextItems(appContext) {
  appContext.authenticationProviderConfigsStore = AuthenticationProviderConfigsStore.create({}, appContext);
}
//# sourceMappingURL=AuthenticationProviderConfigsStore.js.map