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
module.exports = {
  type: 'keycloak',
  title: 'Keycloak',
  description: 'Authentication provider for Keycloak',
  config: {
    // 'redirect' -- The credentials should be NOT be collected and the user should be redirected directly to the identity provider
    credentialHandlingType: 'redirect',

    impl: {

      // The token validation locator is used to validate token upon each request.
      tokenValidatorLocator: 'locator:service:keycloakAuthenticationProviderService/validateToken',

      // The token revocation locator is used to revoke a token upon logout.
      tokenRevokerLocator: 'locator:service:keycloakAuthenticationProviderService/revokeToken',

      // Similar to above locators. The provisionerLocator identifies an implementation that takes care of provisioning the authentication provider.
      provisionerLocator: 'locator:service:keycloakAuthenticationProvisionerService/provision',
    },
  },
};
