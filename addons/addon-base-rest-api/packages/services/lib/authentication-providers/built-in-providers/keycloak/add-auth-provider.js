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
const { getSystemRequestContext } = require('@amzn/base-services/lib/helpers/system-context');
const authProviderConstants = require('../../constants').authenticationProviders;

const settingKeys = {
  keyCloakRealm: 'keyCloakRealm',
  keyCloakClientId: 'keyCloakClientId',
  keyCloakUrl: 'keyCloakUrl',
};

class AddAuthProvider extends Service {
  constructor() {
    super();
    this.dependency([
      'authenticationProviderConfigService',
      'authenticationProviderTypeService',
      'keycloakAuthenticationProvisionerService',
    ]);
  }

  /**
   * Configure Keycloak Authentication Provider. The step method below invokes the keycloak auth provider "Provisioner" service.
   * The service will create and store keycloak auth provider config into ddb
   */
  async addAuthenticationProvider() {
    const keyCloakRealm = this.settings.get(settingKeys.keyCloakRealm);
    const keyCloakClientId = this.settings.get(settingKeys.keyCloakClientId);
    const keyCloakUrl = this.settings.get(settingKeys.keyCloakUrl);

    const keycloakAuthProviderConfig = {
      id: `${keyCloakUrl}/auth/realms/${keyCloakRealm}`,
      title: 'Keycloak',
      clientId: keyCloakClientId,
      enableNativeUserPoolUsers: true,
    };

    const authenticationProviderTypeService = await this.service('authenticationProviderTypeService');
    const authenticationProviderTypes = await authenticationProviderTypeService.getAuthenticationProviderTypes(
      getSystemRequestContext(),
    );
    const keycloakAuthProviderTypeConfig = _.find(authenticationProviderTypes, {
      type: authProviderConstants.keycloakAuthProviderTypeId,
    });

    let authProviderExists = false;
    const authenticationProviderConfigService = await this.service('authenticationProviderConfigService');
    authProviderExists = !!(await authenticationProviderConfigService.getAuthenticationProviderConfig(
      keycloakAuthProviderConfig.id,
    ));

    // Create or update user pool
    const action = authProviderExists
      ? authProviderConstants.provisioningAction.update
      : authProviderConstants.provisioningAction.create;

    const keycloakAuthenticationProvisionerService = await this.service('keycloakAuthenticationProvisionerService');
    await keycloakAuthenticationProvisionerService.provision({
      providerTypeConfig: keycloakAuthProviderTypeConfig,
      providerConfig: keycloakAuthProviderConfig,
      action,
    });
  }
}

module.exports = AddAuthProvider;
