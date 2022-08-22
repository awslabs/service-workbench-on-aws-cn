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

const authenticationProviders = require('../../constants').authenticationProviders;
const CreateRootUserAbstractService = require('../create-root-user-abstract-service');

const settingKeys = {
  rootUserEmail: 'rootUserEmail',
  rootUserFirstName: 'rootUserFirstName',
  rootUserLastName: 'rootUserLastName',
  oidcIssuer: 'oidcIssuer',
};

class CreateRootUserService extends CreateRootUserAbstractService {
  constructor() {
    super();
    this.dependency(['userService', 'aws']);
  }

  /**
   * Create root user into dynamodb
   */
  async createRootUser() {
    const adminUserEmail = this.settings.get(settingKeys.rootUserEmail);
    const adminUserFirstName = this.settings.get(settingKeys.rootUserFirstName);
    const adminUserLastName = this.settings.get(settingKeys.rootUserLastName);
    const oidcIssuer = this.settings.get(settingKeys.oidcIssuer);

    try {
      await this.createUser({
        username: adminUserEmail,
        authenticationProviderId: oidcIssuer,
        identityProviderName: authenticationProviders.oidcAuthProviderTypeId,
        firstName: adminUserFirstName,
        lastName: adminUserLastName,
        email: adminUserEmail,
        isAdmin: true,
        status: 'active',
        userRole: 'admin',
      });
    } catch (err) {
      if (err.code === 'alreadyExists') {
        // The native admin already exists. Nothing to do.
        this.log.info(
          `The user with user name = ${adminUserEmail} already exists. Did NOT overwrite that user's information.`,
        );
      } else {
        // In case of any other error let it bubble up
        throw this.boom.internalError(
          `There was a problem creating the default native user in DDB. Username: ${adminUserEmail}. Error code: ${err.code}`,
          true,
        );
      }
    }
  }
}

module.exports = CreateRootUserService;
