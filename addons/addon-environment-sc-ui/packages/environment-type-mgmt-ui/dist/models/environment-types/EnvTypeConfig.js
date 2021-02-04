"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvTypeConfig = exports["default"] = void 0;

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
var KeyValuePair = _mobxStateTree.types.model('KeyValuePair', {
  key: '',
  value: ''
}); // ====================================================================================================================================
// EnvTypeConfig
// ====================================================================================================================================


var EnvTypeConfig = _mobxStateTree.types.model('EnvTypeConfig', {
  id: _mobxStateTree.types.identifier,
  name: '',
  desc: '',
  estimatedCostInfo: '',
  allowRoleIds: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.string), []),
  denyRoleIds: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.string), []),
  params: _mobxStateTree.types.optional(_mobxStateTree.types.array(KeyValuePair), []),
  tags: _mobxStateTree.types.optional(_mobxStateTree.types.array(KeyValuePair), []),
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  // flag indicating if the env type config is allowed to be used
  // defaulting this to true as the API only returns those env type configs that are usable
  // except for admins when include=all is passed in the query param, it returns all env type configs
  // including the ones the user is not allowed to use when launching an environment
  allowedToUse: _mobxStateTree.types.optional(_mobxStateTree.types["boolean"], true)
}).actions(function (self) {
  return {
    setEnvTypeConfig: function setEnvTypeConfig(envTypeConfig) {
      (0, _mobxStateTree.applySnapshot)(self, envTypeConfig);
    }
  };
}).views(function (self) {
  return {
    get descHtml() {
      var showdown = (0, _mobxStateTree.getEnv)(self).showdown;
      return showdown.convert(self.desc);
    },

    get estimatedCostInfoHtml() {
      var showdown = (0, _mobxStateTree.getEnv)(self).showdown;
      return showdown.convert(self.estimatedCostInfo);
    }

  };
});

exports.EnvTypeConfig = EnvTypeConfig;
var _default = EnvTypeConfig;
exports["default"] = _default;
//# sourceMappingURL=EnvTypeConfig.js.map