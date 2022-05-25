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

const OidcAddAuthProvider = require('./built-in-providers/oidc/add-auth-provider');
const CognitoAddAuthProvider = require('./built-in-providers/cogito-user-pool/add-auth-provider');

function registerBuiltInAddAuthProviders(container) {
  container.register('oidcAddAuthProvider', new OidcAddAuthProvider());

  container.register('cognitoAddAuthProvider', new CognitoAddAuthProvider());
}

module.exports = registerBuiltInAddAuthProviders;
