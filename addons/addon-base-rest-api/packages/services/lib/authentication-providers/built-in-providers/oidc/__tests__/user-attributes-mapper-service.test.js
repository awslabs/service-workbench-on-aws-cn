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
const UserAttributesMapperService = require('../user-attributes-mapper-service');

describe('UserAttributeMapperService', () => {
  let service = null;
  beforeEach(() => {
    service = new UserAttributesMapperService();
  });

  describe('getUsername', () => {
    it('should map a Oidc username', () => {
      const decodedToken = {
        email: 'johndoe@example.com',
        preferred_username: `johndoe@example.com`,
      };

      const userName = service.getUsername(decodedToken);
      expect(userName).toEqual('johndoe@example.com');
      const userNameInIdp = service.getUsernameInIdp(decodedToken);
      expect(userNameInIdp).toEqual('johndoe@example.com');
    });

    it('should map firstname from OIDC users correctly', () => {
      const decodedToken = {
        given_name: 'sampleUserFirstName',
      };

      const result = service.getFirstName(decodedToken);
      expect(result).toEqual('sampleUserFirstName');
    });

    it('should map lastName from OIDC users correctly', () => {
      const decodedToken = {
        family_name: 'sampleUserFirstName',
      };

      const result = service.getLastName(decodedToken);
      expect(result).toEqual('sampleUserFirstName');
    });

    it('should map email from OIDC users correctly', () => {
      const decodedToken = {
        email: 'johndoe@example.com',
      };

      const result = service.getEmail(decodedToken);
      expect(result).toEqual('johndoe@example.com');
    });
  });
});
