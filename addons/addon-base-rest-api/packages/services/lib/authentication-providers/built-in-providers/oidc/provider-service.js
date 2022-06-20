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

const { getOidcTokenVerifier } = require('./oidc-token-verifier');

class ProviderService extends Service {
  constructor() {
    super();
    this.dependency(['aws', 'userService', 'oidcUserAttributesMapperService', 'tokenRevocationService']);
    this.oidcTokenVerifiersCache = {}; // Cache object containing token verifier objects. Each token verifier is keyed by the userPoolUri
  }

  async validateToken({ token, issuer }, providerConfig) {
    if (_.isEmpty(token)) {
      throw this.boom.forbidden('no jwt token was provided', true);
    }
    // -- Check if this token is revoked
    const tokenRevocationService = await this.service('tokenRevocationService');
    const isRevoked = await tokenRevocationService.isRevoked({ token });
    if (isRevoked) {
      throw this.boom.invalidToken('The token is revoked', true);
    }
    // In case of cognito, the issuer is the cognito userPoolUri
    let oidcTokenVerifier = this.oidcTokenVerifiersCache[issuer];
    if (!oidcTokenVerifier) {
      // No cognitoTokenVerifier in the cache so create a new one
      oidcTokenVerifier = await getOidcTokenVerifier(providerConfig.config.jwks_uri);
      // Add newly created cognitoTokenVerifier to the cache
      this.oidcTokenVerifiersCache[issuer] = oidcTokenVerifier;
    }
    // User the cognitoTokenVerifier to validate cognito token
    const verifiedToken = await oidcTokenVerifier.verify(token);
    const { uid, username, identityProviderName } = await this.saveUser(verifiedToken, providerConfig.config.id);
    return { verifiedToken, username, uid, identityProviderName };
  }

  async saveUser(decodedToken, authenticationProviderId) {
    const userAttributesMapperService = await this.service('oidcUserAttributesMapperService');
    // Ask user attributes mapper service to read information from the decoded token and map them to user attributes
    const userAttributes = await userAttributesMapperService.mapAttributes(decodedToken);
    // If this user is authenticated via SAML or native user pool then we need to add it to our user table if it doesn't exist already
    const userService = await this.service('userService');

    const user = await userService.findUserByPrincipal({
      username: userAttributes.username,
      authenticationProviderId,
      identityProviderName: 'oidc',
    });
    if (user) {
      await this.updateUser(userAttributes, user);
      userAttributes.uid = user.uid;
    } else {
      const createdUser = await this.createUser(authenticationProviderId, userAttributes);
      userAttributes.uid = createdUser.uid;
    }
    return userAttributes;
  }

  /**
   * Creates a user in the system based on the user attributes provided by the Identity Provider (IdP)
   * @param authenticationProviderId ID of the authentication provider
   * @param userAttributes An object containing attributes mapped from IdP
   * @returns {Promise<void>}
   */
  async createUser(authenticationProviderId, userAttributes) {
    const userService = await this.service('userService');
    try {
      return userService.createUser(getSystemRequestContext(), {
        authenticationProviderId,
        ...userAttributes,
      });
    } catch (err) {
      this.log.error(err);
      throw this.boom.badRequest(`Error creating user: ${err.message}`, true);
    }
  }

  /**
   * Updates user in the system based on the user attributes provided by Identity Provider.
   * This base implementation updates only those user attributes in the system which are missing.
   *
   * @param userAttributes An object containing attributes mapped from IdP
   * @param existingUser The existing user in the system
   *
   * @returns {Promise<void>}
   */
  async updateUser(userAttributes, existingUser) {
    // Find all attributes present in the userAttributes but missing in existingUser
    const missingAttribs = {};
    const updatedAttribs = {};
    const keys = _.keys(userAttributes);
    if (!_.isEmpty(keys)) {
      _.forEach(keys, key => {
        const value = userAttributes[key];
        const existingValue = existingUser[key];

        if (_.isNil(existingValue) && !_.isNil(value)) {
          missingAttribs[key] = value;
        }
      });

      // When IdP users are created via SWB UI, by default we use the username part of provided email address as first and last names
      // To update these default names, we extract the mapped attribute values coming from the OIDC IDP
      // Some IdPs send email value in their firstName and lastName attribute fields, so splitting string to ignore domain
      const updateIfDifferent = attribName => {
        if (!_.isNil(userAttributes[attribName])) {
          updatedAttribs[attribName] = userAttributes[attribName];
        }
      };
      updateIfDifferent('firstName');
      updateIfDifferent('lastName');
    }

    // If there are any attributes that are present in the userAttributes but missing or outdated in existingUser
    // then update the user in the system to set the correct attribute values
    if (!_.isEmpty(missingAttribs) || !_.isEmpty(updatedAttribs)) {
      const userService = await this.service('userService');
      const { uid, rev } = existingUser;
      try {
        await userService.updateUser(getSystemRequestContext(), {
          uid,
          rev,
          ...missingAttribs,
          ...updatedAttribs,
        });
      } catch (err) {
        this.log.error(err);
        throw this.boom.badRequest(`Error updating user: ${err.message}`, true);
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  async revokeToken(requestContext, { token }, providerConfig) {
    const tokenRevocationService = await this.service('tokenRevocationService');
    await tokenRevocationService.revoke(requestContext, { token });
  }
}

module.exports = ProviderService;
