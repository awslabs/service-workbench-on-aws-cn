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

class UserAttributesMapperService extends Service {
  mapAttributes(decodedToken) {
    const username = this.getUsername(decodedToken);
    const usernameInIdp = this.getUsernameInIdp(decodedToken);
    const identityProviderName = 'keycloak';
    const firstName = this.getFirstName(decodedToken);
    const lastName = this.getLastName(decodedToken);
    const email = this.getEmail(decodedToken);

    return {
      username,
      usernameInIdp,
      identityProviderName,
      firstName,
      lastName,
      email,
    };
  }

  getEmail(decodedToken) {
    return decodedToken.email;
  }

  getLastName(decodedToken) {
    return decodedToken.family_name;
  }

  getFirstName(decodedToken) {
    return decodedToken.given_name;
  }

  getUsername(decodedToken) {
    let username = '';
    username = decodedToken.email;

    return username;
  }

  getUsernameInIdp(decodedToken) {
    let usernameInIdp = '';
    usernameInIdp = decodedToken.preferred_username;

    return usernameInIdp;
  }
}

module.exports = UserAttributesMapperService;
