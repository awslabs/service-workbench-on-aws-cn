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

const Service = require('@amzn/base-services-container/lib/service');
const authProviderConstants = require('@amzn/base-api-services/lib/authentication-providers/constants')
  .authenticationProviders;

const settingKeys = {
  defaultIdpType: 'defaultIdpType',
};

class CreateRootUserService extends Service {
  constructor() {
    super();
    this.dependency(['oidcCreateRootUserService', 'cognitoCreateRootUserService']);
  }

  async execute() {
    const defaultIdpType = this.settings.get(settingKeys.defaultIdpType);
    switch (defaultIdpType) {
      case authProviderConstants.oidcAuthProviderTypeId: {
        const oidcCreateRootUserService = await this.service('oidcCreateRootUserService');
        await oidcCreateRootUserService.createRootUser();
        break;
      }
      case authProviderConstants.cognitoAuthProviderTypeId: {
        const cognitoCreateRootUserService = await this.service('cognitoCreateRootUserService');
        await cognitoCreateRootUserService.createRootUser();
        break;
      }
      default:
        console.log(`Sorry, we are out of ${defaultIdpType}.`);
    }
  }
}

module.exports = CreateRootUserService;
