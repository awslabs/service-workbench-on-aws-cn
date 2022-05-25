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

const _ = require('lodash');
const Service = require('@amzn/base-services-container/lib/service');
const authProviderConstants = require('../../constants').authenticationProviders;

const settingKeys = {
  websiteUrl: 'websiteUrl',
  keyCloakUrl: 'keyCloakUrl',
  keyCloakRealm: 'keyCloakRealm',
  keyCloakClientId: 'keyCloakClientId',
};

class ProvisionerService extends Service {
  constructor() {
    super();
    this.dependency(['aws', 'authenticationProviderConfigService']);
    this.boom.extend(['authProviderAlreadyExists', 400]);
    this.boom.extend(['noAuthProviderFound', 400]);
  }

  // eslint-disable-next-line no-unused-vars
  async provision({ providerTypeConfig, providerConfig, action }) {
    if (!action) {
      throw this.boom.badRequest('Can not provision Keycloak. Missing required parameter "action"', false);
    }

    this.log.info('Provisioning Keycloak Authentication Provider');

    const authenticationProviderConfigService = await this.service('authenticationProviderConfigService');
    let existingProviderConfig;
    if (providerConfig.id) {
      existingProviderConfig = await authenticationProviderConfigService.getAuthenticationProviderConfig(
        providerConfig.id,
      );
    }
    if (action === authProviderConstants.provisioningAction.create && !_.isNil(existingProviderConfig)) {
      // The authentication provider with same config id already exists.
      throw this.boom.authProviderAlreadyExists(
        'Can not create the specified authentication provider. An authentication provider with the same id already exists',
        true,
      );
    }
    if (action === authProviderConstants.provisioningAction.update && _.isNil(existingProviderConfig)) {
      // The authentication provider with the specified config id does not exist.
      throw this.boom.noAuthProviderFound(
        'Can not update the specified authentication provider. No authentication provider with the specified id found',
        true,
      );
    }

    const websiteUrl = this.settings.get(settingKeys.websiteUrl);
    const keyCloakUrl = this.settings.get(settingKeys.keyCloakUrl);
    const keyCloakRealm = this.settings.get(settingKeys.keyCloakRealm);
    const keyCloakClientId = this.settings.get(settingKeys.keyCloakClientId);

    providerConfig.baseAuthUri = keyCloakUrl;
    providerConfig.signInUri = `${keyCloakUrl}/auth/realms/${keyCloakRealm}/protocol/openid-connect/auth?client_id=${keyCloakClientId}&redirect_uri=${websiteUrl}/&code_challenge_method=S256&code_challenge=TEMP_PKCE_VERIFIER&state=TEMP_STATE_VERIFIER&response_type=code`;
    providerConfig.signOutUri = `${keyCloakUrl}/auth/realms/${keyCloakRealm}/protocol/openid-connect/logout?client_id=${keyCloakClientId}&response_type=code&redirect_uri=${websiteUrl}`;
    providerConfig.authCodeTokenExchangeUri = `${keyCloakUrl}/auth/realms/${keyCloakRealm}/protocol/openid-connect/token`;

    this.log.info('Saving Keycloak Authentication Provider Configuration.');

    // Save auth provider configuration and make it active
    const result = await authenticationProviderConfigService.saveAuthenticationProviderConfig({
      providerTypeConfig,
      providerConfig: providerConfig,
      status: authProviderConstants.status.active,
    });
    return result;
  }
}

module.exports = ProvisionerService;
