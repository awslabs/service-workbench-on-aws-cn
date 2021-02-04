"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpdateUserConfigFormFields = getUpdateUserConfigFormFields;
exports.getUpdateUserConfigForm = getUpdateUserConfigForm;

var _lodash = _interopRequireDefault(require("lodash"));

var _form = require("../../helpers/form");

var _UserFormUtils = require("./UserFormUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
function getUpdateUserConfigFormFields(existingUser) {
  return {
    username: {
      label: 'Username',
      value: _lodash["default"].get(existingUser, 'username', '')
    },
    firstName: {
      label: 'First Name',
      placeholder: 'First name of this user',
      value: _lodash["default"].get(existingUser, 'firstName', ''),
      rules: 'required|string'
    },
    lastName: {
      label: 'Last Name',
      placeholder: 'Last name of this user',
      value: _lodash["default"].get(existingUser, 'lastName', ''),
      rules: 'required|string'
    },
    email: {
      label: 'Email',
      placeholder: 'email address',
      value: _lodash["default"].get(existingUser, 'email', ''),
      rules: 'required|email|string'
    },
    identityProviderName: {
      label: 'Identity Provider Name',
      value: (0, _UserFormUtils.toValueFromIdp)({
        authenticationProviderId: _lodash["default"].get(existingUser, 'authenticationProviderId', ''),
        identityProviderName: _lodash["default"].get(existingUser, 'identityProviderName', '')
      })
    },
    projectId: {
      label: 'Project',
      value: _lodash["default"].get(existingUser, 'projectId', '')
    },
    userRole: {
      label: 'User Role',
      value: _lodash["default"].get(existingUser, 'userRole', '')
    },
    applyReason: {
      label: 'Reason for Applying',
      explain: ' ',
      value: _lodash["default"].get(existingUser, 'applyReason', '')
    },
    status: {
      label: 'User Status',
      extra: {
        explain: 'Active users can log into the Research Portal',
        yesLabel: 'Active',
        noLabel: 'Inactive',
        yesValue: 'active',
        noValue: 'inactive'
      },
      value: _lodash["default"].get(existingUser, 'status', '')
    }
  };
}

function getUpdateUserConfigForm(existingUser) {
  return (0, _form.createForm)(getUpdateUserConfigFormFields(existingUser));
}
//# sourceMappingURL=UpdateUserConfig.js.map