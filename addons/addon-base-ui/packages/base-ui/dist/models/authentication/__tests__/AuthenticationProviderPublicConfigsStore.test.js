"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _AuthenticationProviderPublicConfigsStore = require("../AuthenticationProviderPublicConfigsStore");

var _Authentication = require("../Authentication");

var _api = require("../../../helpers/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api'); // This is an object containing the auth provider public configurations as test data for when enableNativeUserPoolUser = false

var publicConfigurationsNativeDisabled = [{
  id: 'internal',
  title: 'Default Login',
  type: 'internal',
  credentialHandlingType: 'submit',
  signInUri: 'api/authentication/id-tokens',
  signOutUri: 'api/authentication/logout'
}, {
  id: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_poolId1',
  title: 'Login using Active Directory',
  type: 'cognito_user_pool',
  credentialHandlingType: 'redirect',
  signOutUri: 'https://test-raas1.auth.us-east-1.amazoncognito.com/logout?client_id=199999999991&logout_uri=https://12345.cloudfront.net',
  userPoolId: 'us-east-1_poolId1',
  clientId: '199999999991',
  enableNativeUserPoolUsers: false
}, {
  id: 'datalake.example.com',
  title: 'Login using Active Directory',
  type: 'cognito_user_pool_federated_idp',
  credentialHandlingType: 'redirect',
  signInUri: 'https://test-raas1.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=token&client_id=199999999991&redirect_uri=https://12345.cloudfront.net&idp_identifier=datalake.example.com',
  signOutUri: 'https://test-raas1.auth.us-east-1.amazoncognito.com/logout?client_id=199999999991&logout_uri=https://12345.cloudfront.net'
}, {
  id: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_poolId2',
  title: 'Login using Active Directory 2',
  type: 'cognito_user_pool',
  credentialHandlingType: 'redirect',
  signOutUri: 'https://test-raas2.auth.us-east-1.amazoncognito.com/logout?client_id=28888888888882&logout_uri=https://12345.cloudfront.net',
  userPoolId: 'us-east-1_poolId2',
  clientId: '28888888888882',
  enableNativeUserPoolUsers: false
}, {
  id: 'datalake2.example.com',
  title: 'Login using Active Directory 2',
  type: 'cognito_user_pool_federated_idp',
  credentialHandlingType: 'redirect',
  signInUri: 'https://test-raas2.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=28888888888882&redirect_uri=https://12345.cloudfront.net&idp_identifier=datalake2.example.com',
  signOutUri: 'https://test-raas2.auth.us-east-1.amazoncognito.com/logout?client_id=28888888888882&logout_uri=https://12345.cloudfront.net'
}]; // This is an object containing the auth provider public configurations as test data for when enableNativeUserPoolUser = true

var publicConfigurationsNativeEnabled = [{
  id: 'internal',
  title: 'Default Login',
  type: 'internal',
  credentialHandlingType: 'submit',
  signInUri: 'api/authentication/id-tokens',
  signOutUri: 'api/authentication/logout'
}, {
  id: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_poolId1',
  title: 'Login using Active Directory',
  type: 'cognito_user_pool',
  credentialHandlingType: 'redirect',
  signOutUri: 'https://test-raas1.auth.us-east-1.amazoncognito.com/logout?client_id=199999999991&logout_uri=https://12345.cloudfront.net',
  userPoolId: 'us-east-1_poolId1',
  clientId: '199999999991',
  enableNativeUserPoolUsers: true,
  signInUri: 'https://test-raas1.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=token&client_id=199999999991&redirect_uri=https://12345.cloudfront.net&identity_provider=COGNITO'
}, {
  id: 'datalake.example.com',
  title: 'Login using Active Directory',
  type: 'cognito_user_pool_federated_idp',
  credentialHandlingType: 'redirect',
  signInUri: 'https://test-raas1.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=token&client_id=199999999991&redirect_uri=https://12345.cloudfront.net&idp_identifier=datalake.example.com',
  signOutUri: 'https://test-raas1.auth.us-east-1.amazoncognito.com/logout?client_id=199999999991&logout_uri=https://12345.cloudfront.net'
}, {
  id: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_poolId2',
  title: 'Login using Active Directory 2',
  type: 'cognito_user_pool',
  credentialHandlingType: 'redirect',
  signOutUri: 'https://test-raas2.auth.us-east-1.amazoncognito.com/logout?client_id=28888888888882&logout_uri=https://12345.cloudfront.net',
  userPoolId: 'us-east-1_poolId2',
  clientId: '28888888888882',
  enableNativeUserPoolUsers: true,
  signInUri: 'https://test-raas2.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=28888888888882&redirect_uri=https://12345.cloudfront.net&identity_provider=COGNITO'
}, {
  id: 'datalake2.example.com',
  title: 'Login using Active Directory 2',
  type: 'cognito_user_pool_federated_idp',
  credentialHandlingType: 'redirect',
  signInUri: 'https://test-raas2.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=28888888888882&redirect_uri=https://12345.cloudfront.net&idp_identifier=datalake2.example.com',
  signOutUri: 'https://test-raas2.auth.us-east-1.amazoncognito.com/logout?client_id=28888888888882&logout_uri=https://12345.cloudfront.net'
}];
describe('AuthenticationProviderPublicConfigsStore', function () {
  describe('authenticationProviderOptions', function () {
    it('should return config options without entries for cognito user pools if nativeUserPool is disabled', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var appContext, store, options;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              appContext = {}; // Lets register the authentication store because it is a dependency

              (0, _Authentication.registerContextItems)(appContext); // Make the api call return the test data

              _api.getAuthenticationProviderPublicConfigs.mockResolvedValue(_lodash["default"].cloneDeep(publicConfigurationsNativeDisabled)); // Create the store and trigger the loading


              store = _AuthenticationProviderPublicConfigsStore.AuthenticationProviderPublicConfigsStore.create({}, appContext);
              _context.next = 6;
              return store.load();

            case 6:
              // Get the provider options
              options = store.authenticationProviderOptions; // Lets see if the api is called

              expect(_api.getAuthenticationProviderPublicConfigs).toHaveBeenCalled(); // Check if the returned options are as expected

              expect(options).toEqual([{
                key: 'internal',
                text: 'Default Login',
                value: 'internal'
              }, {
                key: 'datalake.example.com',
                text: 'Login using Active Directory',
                value: 'datalake.example.com'
              }, {
                key: 'datalake2.example.com',
                text: 'Login using Active Directory 2',
                value: 'datalake2.example.com'
              }]);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('should return config options with entries for cognito user pools if nativeUserPool is enabled', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var appContext, store, options;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              appContext = {}; // Lets register the authentication store because it is a dependency

              (0, _Authentication.registerContextItems)(appContext); // Make the api call return the test data

              _api.getAuthenticationProviderPublicConfigs.mockResolvedValue(_lodash["default"].cloneDeep(publicConfigurationsNativeEnabled)); // Create the store and trigger the loading


              store = _AuthenticationProviderPublicConfigsStore.AuthenticationProviderPublicConfigsStore.create({}, appContext);
              _context2.next = 6;
              return store.load();

            case 6:
              // Get the provider options
              options = store.authenticationProviderOptions; // Lets see if the api is called

              expect(_api.getAuthenticationProviderPublicConfigs).toHaveBeenCalled(); // Check if the returned options are as expected

              expect(options).toEqual([{
                key: 'internal',
                text: 'Default Login',
                value: 'internal'
              }, {
                key: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_poolId1',
                text: 'Login using Active Directory',
                value: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_poolId1'
              }, {
                key: 'datalake.example.com',
                text: 'Login using Active Directory',
                value: 'datalake.example.com'
              }, {
                key: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_poolId2',
                text: 'Login using Active Directory 2',
                value: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_poolId2'
              }, {
                key: 'datalake2.example.com',
                text: 'Login using Active Directory 2',
                value: 'datalake2.example.com'
              }]); // NOTE: the current AuthenticationProviderPublicConfigsStore.authenticationProviderOptions is not ideal
              // when enableNativeUserPoolUsers = true. This is not because of the code in the UI, it is because the API
              // call does not yet handle enableNativeUserPoolUsers = true correctly. For example, the text option
              // is repeated when the type is cognito_user_pool and cognito_user_pool_federated_idp.

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
});
//# sourceMappingURL=AuthenticationProviderPublicConfigsStore.test.js.map