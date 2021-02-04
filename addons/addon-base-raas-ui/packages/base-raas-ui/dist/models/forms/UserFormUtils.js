"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toIdpOptions = toIdpOptions;
exports.toIdpFromValue = toIdpFromValue;
exports.toValueFromIdp = toValueFromIdp;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */

/**
 * Returns identity provider options that can be used for displaying idp selection options
 * @param providerConfigs An array of authentication provider configuration objects. For details about the shape of
 * the object see "authenticationProviderConfigs" property of
 * "addons/addon-base-ui/packages/base-ui/src/models/authentication/AuthenticationProviderConfigsStore.js"
 *
 * @returns {[]}
 */
function toIdpOptions(providerConfigs) {
  var options = [];

  _lodash["default"].forEach(providerConfigs, function (providerConfig) {
    var config = providerConfig.config; // Each providerConfig (authentication provider) can have zero or more identity providers.

    if (!_lodash["default"].isEmpty(config.federatedIdentityProviders)) {
      _lodash["default"].forEach(config.federatedIdentityProviders, function (idp) {
        options.push({
          key: idp.id,
          text: idp.name,
          // Make sure the authentication provider's information is embedded in the value
          // along with the idp name. This is required so disambiguate two idps with the same idp name based on which
          // authentication provider they belong to
          value: JSON.stringify({
            authNProviderId: providerConfig.id,
            idpName: idp.name
          })
        });
      });
    }
  });

  return options;
} // From string to object


function toIdpFromValue(value) {
  return JSON.parse(value);
} // From object to string


function toValueFromIdp(_ref) {
  var authenticationProviderId = _ref.authenticationProviderId,
      identityProviderName = _ref.identityProviderName;
  return JSON.stringify({
    authNProviderId: authenticationProviderId,
    idpName: identityProviderName
  });
} // eslint-disable-next-line import/prefer-default-export
//# sourceMappingURL=UserFormUtils.js.map