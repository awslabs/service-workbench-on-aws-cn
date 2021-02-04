"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _AuthenticationProviderTypeConfig = _interopRequireDefault(require("./AuthenticationProviderTypeConfig"));

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
var AuthenticationProviderType = _mobxStateTree.types.model('AuthenticationProviderType', {
  type: _mobxStateTree.types.string,
  title: _mobxStateTree.types.string,
  description: _mobxStateTree.types.optional(_mobxStateTree.types.string, ''),
  config: _AuthenticationProviderTypeConfig["default"]
}).actions(function (_self) {
  return {
    cleanup: function cleanup() {// No-op for now
    }
  };
});

var _default = AuthenticationProviderType;
exports["default"] = _default;
//# sourceMappingURL=AuthenticationProviderType.js.map