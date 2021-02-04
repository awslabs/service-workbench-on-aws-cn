"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvType = exports["default"] = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _EnvTypeCandidate = require("./EnvTypeCandidate");

var _EnvTypeStatusEnum = require("./EnvTypeStatusEnum");

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
// ====================================================================================================================================
// EnvType -- (is an EnvTypeCandidate that's already imported)
// ====================================================================================================================================
var EnvType = _EnvTypeCandidate.EnvTypeCandidate.named('EnvType').props({
  rev: 0,
  status: _mobxStateTree.types.enumeration('EnvTypeStatus', (0, _EnvTypeStatusEnum.getValidStatuses)()),
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: ''
}).actions(function (self) {
  return {
    setEnvType: function setEnvType(envType) {
      (0, _mobxStateTree.applySnapshot)(self, envType);
    }
  };
}).views(function (self) {
  return {
    get isApproved() {
      return (0, _EnvTypeStatusEnum.isApproved)(self.status);
    },

    get isNotApproved() {
      return (0, _EnvTypeStatusEnum.isNotApproved)(self.status);
    }

  };
});

exports.EnvType = EnvType;
var _default = EnvType;
exports["default"] = _default;
//# sourceMappingURL=EnvType.js.map