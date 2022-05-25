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

const ServicesContainer = require('@amzn/base-services-container/lib/services-container');
const Aws = require('@amzn/base-services/lib/aws/aws-service');
const JsonSchemaValidationService = require('@amzn/base-services/lib/json-schema-validation-service');
const AWSMock = require('aws-sdk-mock');
const Logger = require('@amzn/base-services/lib/logger/logger-service');

// Mocked dependencies
jest.mock('@amzn/base-services/lib/s3-service');
const S3ServiceMock = require('@amzn/base-services/lib/s3-service');

jest.mock('@amzn/base-services/lib/settings/env-settings-service');
const SettingsServiceMock = require('@amzn/base-services/lib/settings/env-settings-service');

jest.mock('../../../authentication-provider-config-service');
const AuthenticationProviderConfigServiceMock = require('../../../authentication-provider-config-service');

const oidcAuthenticationProviderType = require('../type');

const authProviderConstants = require('../../../constants');

const ProvisionerService = require('../provisioner-service');

describe('ProvisionerService', () => {
  let service;
  let settings;
  let authenticationProviderConfigService;
  beforeAll(async () => {
    // Initialize services container and register dependencies
    const container = new ServicesContainer();
    container.register('aws', new Aws());
    container.register('log', new Logger());
    container.register('settings', new SettingsServiceMock());
    container.register('jsonSchemaValidationService', new JsonSchemaValidationService());
    container.register('authenticationProviderConfigService', new AuthenticationProviderConfigServiceMock());
    container.register('s3Service', new S3ServiceMock());
    container.register('provisionerService', new ProvisionerService());

    await container.initServices();

    // Get instance of the service we are testing
    service = await container.find('provisionerService');

    authenticationProviderConfigService = await container.find('authenticationProviderConfigService');

    // Mock return for settings get
    settings = await container.find('settings');
    settings.get = jest.fn(input => input);
  });

  beforeEach(async () => {
    const aws = await service.service('aws');
    AWSMock.setSDKInstance(aws.sdk);
  });

  afterEach(() => {
    AWSMock.restore();
  });

  describe('provision', () => {
    it('create auth provider config', async () => {
      const oidcAuthProviderConfig = {
        id: 'oidcProviderId',
        title: 'oidc',
        clientId: 'oidcClientId',
        enableNativeUserPoolUsers: true,
      };
      service.getIdPConfigurations = jest.fn(() => {
        return {
          jwksUri: 'https://example.com/auth/realms/Realm/protocol/openid-connect/certs',
          authorizationEndpoint: 'https://example.com/auth/realms/Realm/protocol/openid-connect/auth',
          endSessionEndpoint: 'https://example.com/auth/realms/Realm/protocol/openid-connect/logout',
          tokenEndpoint: 'https://example.com/auth/realms/Realm/protocol/openid-connect/token',
        };
      });
      const action = authProviderConstants.authenticationProviders.provisioningAction.create;
      // OPERATE
      await service.provision({
        providerTypeConfig: oidcAuthenticationProviderType,
        providerConfig: oidcAuthProviderConfig,
        action,
      });
    });
    it('update auth provider config', async () => {
      authenticationProviderConfigService.getAuthenticationProviderConfig = jest.fn(() => {
        return {
          id: 'oidcProviderId',
          title: 'oidc',
          clientId: 'oidcClientId',
          enableNativeUserPoolUsers: true,
        };
      });
      service.getIdPConfigurations = jest.fn(() => {
        return {
          jwksUri: 'https://example.com/auth/realms/Realm/protocol/openid-connect/certs',
          authorizationEndpoint: 'https://example.com/auth/realms/Realm/protocol/openid-connect/auth',
          endSessionEndpoint: 'https://example.com/auth/realms/Realm/protocol/openid-connect/logout',
          tokenEndpoint: 'https://example.com/auth/realms/Realm/protocol/openid-connect/token',
        };
      });
      const oidcAuthProviderConfig = {
        id: 'oidcProviderId',
        title: 'oidc',
        clientId: 'oidcClientId',
        enableNativeUserPoolUsers: true,
      };

      const action = authProviderConstants.authenticationProviders.provisioningAction.update;
      // OPERATE
      await service.provision({
        providerTypeConfig: oidcAuthenticationProviderType,
        providerConfig: oidcAuthProviderConfig,
        action,
      });
    });
  });
});
