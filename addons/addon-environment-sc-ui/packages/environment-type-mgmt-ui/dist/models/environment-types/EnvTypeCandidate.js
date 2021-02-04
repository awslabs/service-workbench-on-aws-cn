"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvTypeCandidate = exports["default"] = void 0;

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
// ====================================================================================================================================
// Product -- Maps to AWS Service Catalog Product (only id and name)
// ====================================================================================================================================
var Product = _mobxStateTree.types.model('Product', {
  productId: '',
  name: ''
}); // ====================================================================================================================================
// ProvisioningArtifact -- Maps to AWS Service Catalog Provisioning Artifact (a.k.a., Version)
// ====================================================================================================================================


var ProvisioningArtifact = _mobxStateTree.types.model('ProvisioningArtifact', {
  id: '',
  name: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  description: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  type: '',
  createdTime: '',
  active: false,
  guidance: ''
}); // ====================================================================================================================================
// ParamConstraint -- Maps to AWS Service Catalog Provisioning Artifact Parameter Constraints
// ====================================================================================================================================


var ParamConstraint = _mobxStateTree.types.model('ParamConstraint', {
  AllowedValues: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')), [])
}); // ====================================================================================================================================
// CfnParam -- Maps to AWS Service Catalog Provisioning Artifact Parameters - in turn maps to AWS CloudFormation Stack Input Parameters
// ====================================================================================================================================


var CfnParam = _mobxStateTree.types.model('CfnParam', {
  ParameterKey: '',
  ParameterType: '',
  IsNoEcho: false,
  Description: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  ParameterConstraints: _mobxStateTree.types.optional(ParamConstraint, {})
}); // ====================================================================================================================================
// EnvTypeCandidate
// ====================================================================================================================================


var EnvTypeCandidate = _mobxStateTree.types.model('EnvTypeCandidate', {
  id: _mobxStateTree.types.identifier,
  name: '',
  desc: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  isLatest: false,
  product: _mobxStateTree.types.optional(Product, {}),
  provisioningArtifact: _mobxStateTree.types.optional(ProvisioningArtifact, {}),
  params: _mobxStateTree.types.optional(_mobxStateTree.types.array(CfnParam), [])
}).actions(function (self) {
  return {
    setEnvTypeCandidate: function setEnvTypeCandidate(envTypeCandidate) {
      (0, _mobxStateTree.applySnapshot)(self, envTypeCandidate);
    }
  };
}).views(function (self) {
  return {
    get descHtml() {
      var showdown = (0, _mobxStateTree.getEnv)(self).showdown;
      return showdown.convert(self.desc);
    }

  };
});

exports.EnvTypeCandidate = EnvTypeCandidate;
var _default = EnvTypeCandidate;
exports["default"] = _default;
//# sourceMappingURL=EnvTypeCandidate.js.map