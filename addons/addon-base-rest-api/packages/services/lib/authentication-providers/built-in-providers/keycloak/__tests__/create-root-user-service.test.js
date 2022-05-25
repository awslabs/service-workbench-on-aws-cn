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
const AWSMock = require('aws-sdk-mock');
const Aws = require('@amzn/base-services/lib/aws/aws-service');
const Logger = require('@amzn/base-services/lib/logger/logger-service');

// Mocked dependencies

jest.mock('@amzn/base-services/lib/user/user-service');
const UserServiceMock = require('@amzn/base-services/lib/user/user-service');

jest.mock('@amzn/base-services/lib/settings/env-settings-service');
const SettingsServiceMock = require('@amzn/base-services/lib/settings/env-settings-service');

const CreateRootUserService = require('../create-root-user-service');

describe('CreateRootUserService', () => {
  let service;
  let settings;
  beforeAll(async () => {
    // Initialize services container and register dependencies
    const container = new ServicesContainer();
    container.register('aws', new Aws());
    container.register('log', new Logger());
    container.register('settings', new SettingsServiceMock());
    container.register('userService', new UserServiceMock());
    container.register('createRootUserService', new CreateRootUserService());

    await container.initServices();

    // Get instance of the service we are testing
    service = await container.find('createRootUserService');

    // Mock return for settings get
    settings = await container.find('settings');
  });

  beforeEach(async () => {
    const aws = await service.service('aws');
    AWSMock.setSDKInstance(aws.sdk);
  });

  afterEach(() => {
    AWSMock.restore();
  });

  describe('createRootUser', () => {
    it('should create root user if there is not', async () => {

      settings.get = jest.fn(key => {
        return key;
      });
      settings.getBoolean = jest.fn(key => {
        if (key === 'enableNativeUserPoolUsers') {
          return true;
        }
        return key;
      });

      // OPERATE
      await service.createRootUser();
    });

    it('should update if there is existed', async () => {

      settings.get = jest.fn(key => {
        return key;
      });
      settings.getBoolean = jest.fn(key => {
        if (key === 'enableNativeUserPoolUsers') {
          return true;
        }
        return key;
      });
      // user already exists in SWB DDB
      service.createUser = jest.fn(() => {
        // eslint-disable-next-line no-throw-literal
        throw { code: 'alreadyExists' };
      });      

      // OPERATE
      await service.createRootUser();
    });    

  });
});
