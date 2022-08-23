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

const CognitoAddAuthProvider = require('./built-in-providers/cogito-user-pool/add-auth-provider');
const CognitoCreateRootUserService = require('./built-in-providers/cogito-user-pool/create-root-user-service');
const CognitoUserPoolAuthenticationProviderService = require('./built-in-providers/cogito-user-pool/provider-service');
const CognitoUserPoolAuthenticationProvisionerService = require('./built-in-providers/cogito-user-pool/provisioner-service');
const CognitoUserPoolUserAttributesMapperService = require('./built-in-providers/cogito-user-pool/user-attributes-mapper-service');
const OidcAddAuthProvider = require('./built-in-providers/oidc/add-auth-provider');
const OidcCreateRootUserService = require('./built-in-providers/oidc/create-root-user-service');
const OidcAuthenticationProviderService = require('./built-in-providers/oidc/provider-service');
const OidcUserAttributesMapperService = require('./built-in-providers/oidc/user-attributes-mapper-service');
const OidcAuthenticationProvisionerService = require('./built-in-providers/oidc/provisioner-service');
const authProviderConstants = require('./constants').authenticationProviders;

const settingKeys = {
  defaultIdpType: 'defaultIdpType',
};

function registerBuiltInAuthProviders(container, settings) {
  const defaultIdpType = settings.get(settingKeys.defaultIdpType);

  switch (defaultIdpType) {
    case authProviderConstants.oidcAuthProviderTypeId: {
      container.register('addAuthProvider', new OidcAddAuthProvider());
      container.register('createRootUserService', new OidcCreateRootUserService());
      container.register('authenticationProviderService', new OidcAuthenticationProviderService());
      container.register('userAttributesMapperService', new OidcUserAttributesMapperService());
      container.register('authenticationProvisionerService', new OidcAuthenticationProvisionerService());
      break;
    }
    case authProviderConstants.cognitoAuthProviderTypeId: {
      container.register('addAuthProvider', new CognitoAddAuthProvider());
      container.register('createRootUserService', new CognitoCreateRootUserService());
      container.register('authenticationProviderService', new CognitoUserPoolAuthenticationProviderService());
      container.register('userAttributesMapperService', new CognitoUserPoolUserAttributesMapperService());
      container.register('authenticationProvisionerService', new CognitoUserPoolAuthenticationProvisionerService());
      break;
    }
    default:
      console.log(`Sorry, we are out of ${defaultIdpType}.`);
      throw new Error(
        `${defaultIdpType} is not correct defaultIdpType value, Please configure correct defaultIdpType value`,
      );
  }
}

module.exports = registerBuiltInAuthProviders;
