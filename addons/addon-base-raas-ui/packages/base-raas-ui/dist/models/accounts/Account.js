"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = void 0;

var _mobxStateTree = require("mobx-state-tree");

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
var CfnInfo = _mobxStateTree.types.model({
  crossAccountExecutionRoleArn: '',
  crossAccountEnvMgmtRoleArn: '',
  subnetId: '',
  vpcId: '',
  stackId: ''
}); // ==================================================================
// Account
// ==================================================================


var Account = _mobxStateTree.types.model('Account', {
  id: _mobxStateTree.types.identifier,
  accountName: '',
  status: '',
  accountArn: '',
  email: '',
  cfnInfo: _mobxStateTree.types.optional(CfnInfo, {}),
  rev: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  name: '',
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: ''
}).actions(function (self) {
  return {
    setAccount: function setAccount(rawAccount) {
      // Note: if you have partial data vs full data, you need to replace the applySnapshot() with
      // the appropriate logic
      (0, _mobxStateTree.applySnapshot)(self, rawAccount);
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {// add view methods here
  };
}); // eslint-disable-next-line import/prefer-default-export


exports.Account = Account;
//# sourceMappingURL=Account.js.map