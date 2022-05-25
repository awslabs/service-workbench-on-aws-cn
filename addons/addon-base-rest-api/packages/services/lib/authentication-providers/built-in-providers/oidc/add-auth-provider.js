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
  oidcClientId: 'oidcClientId',
  oidcIssuer: 'oidcIssuer',
};

class AddAuthProvider extends Service {
  constructor() {
    super();
    this.dependency([
      'authenticationProviderConfigService',
      'authenticationProviderTypeService',
      'oidcAuthenticationProvisionerService',
    ]);
    this.boom.extend(['oidcConfigurationFailed', 400]);    
  }

  /**
   * Configure oidc Authentication Provider. The step method below invokes the oidc auth provider "Provisioner" service.
   * The service will create and store oidc auth provider config into ddb
   */
  async addAuthenticationProvider() {
    const oidcClientId = this.settings.get(settingKeys.oidcClientId);
    const oidcIssuer = this.settings.get(settingKeys.oidcIssuer);

    const oidcAuthProviderConfig = {
      id: oidcIssuer,
      title: 'oidc',
      clientId: oidcClientId,
      enableNativeUserPoolUsers: true,
    };

    const authenticationProviderTypeService = await this.service('authenticationProviderTypeService');
    const authenticationProviderTypes = await authenticationProviderTypeService.getAuthenticationProviderTypes(
      getSystemRequestContext(),
    );
    const oidcAuthProviderTypeConfig = _.find(authenticationProviderTypes, {
      type: authProviderConstants.oidcAuthProviderTypeId,
    });

    const authenticationProviderConfigService = await this.service('authenticationProviderConfigService');
    await authenticationProviderConfigService.clearAllAuthenticationProviderConfigs();

    const oidcAuthenticationProvisionerService = await this.service('oidcAuthenticationProvisionerService');
    await oidcAuthenticationProvisionerService.provision({
      providerTypeConfig: oidcAuthProviderTypeConfig,
      providerConfig: oidcAuthProviderConfig
    });
  }
}

module.exports = AddAuthProvider;
