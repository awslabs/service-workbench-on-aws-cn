"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AwsAccount = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _Budget = _interopRequireDefault(require("./Budget"));

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
// ==================================================================
// AwsAccounts
// ==================================================================
var AwsAccount = _mobxStateTree.types.model('AwsAccounts', {
  id: _mobxStateTree.types.identifier,
  rev: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  name: '',
  description: '',
  accountId: '',
  externalId: '',
  roleArn: '',
  vpcId: '',
  subnetId: '',
  encryptionKeyArn: '',
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  budget: _mobxStateTree.types.optional(_Budget["default"], {})
}).actions(function (self) {
  return {
    setAwsAccounts: function setAwsAccounts(rawAwsAccounts) {
      self.id = rawAwsAccounts.id;
      self.rev = rawAwsAccounts.rev || self.rev || 0;
      self.name = rawAwsAccounts.name || self.name || '';
      self.description = rawAwsAccounts.description || self.description;
      self.accountId = rawAwsAccounts.accountId || rawAwsAccounts.accountId;
      self.externalId = rawAwsAccounts.externalId || self.externalId;
      self.roleArn = rawAwsAccounts.roleArn || self.roleArn;
      self.vpcId = rawAwsAccounts.vpcId || self.vpcId;
      self.subnetId = rawAwsAccounts.subnetId || self.subnetId;
      self.encryptionKeyArn = rawAwsAccounts.encryptionKeyArn || self.encryptionKeyArn;
      self.createdAt = rawAwsAccounts.createdAt || self.createdAt;
      self.updatedAt = rawAwsAccounts.updatedAt || self.updatedAt;
      self.createdBy = rawAwsAccounts.createdBy || self.createdBy;
      self.updatedBy = rawAwsAccounts.updatedBy || self.updatedBy; // we don't update the other fields because they are being populated by a separate store
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {// add view methods here
  };
}); // eslint-disable-next-line import/prefer-default-export


exports.AwsAccount = AwsAccount;
//# sourceMappingURL=AwsAccount.js.map