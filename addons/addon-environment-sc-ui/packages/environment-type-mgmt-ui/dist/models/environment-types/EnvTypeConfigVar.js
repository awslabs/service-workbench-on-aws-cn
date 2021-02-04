"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvTypeConfigVar = exports["default"] = void 0;

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
// EnvTypeConfigVar
// ====================================================================================================================================
var EnvTypeConfigVar = _mobxStateTree.types.model('EnvTypeConfigVar', {
  name: '',
  desc: ''
}).actions(function (self) {
  return {
    setEnvTypeConfigVar: function setEnvTypeConfigVar(envTypeConfigVar) {
      (0, _mobxStateTree.applySnapshot)(self, envTypeConfigVar);
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

exports.EnvTypeConfigVar = EnvTypeConfigVar;
var _default = EnvTypeConfigVar;
exports["default"] = _default;
//# sourceMappingURL=EnvTypeConfigVar.js.map