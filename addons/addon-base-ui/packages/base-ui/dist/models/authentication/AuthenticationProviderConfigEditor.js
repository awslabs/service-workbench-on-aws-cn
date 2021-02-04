"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _ConfigurationEditor = _interopRequireDefault(require("../configuration/ConfigurationEditor"));

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
var AuthenticationProviderConfigEditor = _mobxStateTree.types.model('AuthenticationProviderPublicConfig', {
  id: _mobxStateTree.types.identifier,
  configEditor: _mobxStateTree.types.optional(_ConfigurationEditor["default"], {})
}).actions(function (self) {
  return {
    setConfigEditor: function setConfigEditor(configEditor) {
      self.configEditor = configEditor;
    }
  };
}).views(function (_self) {
  return {};
});

var _default = AuthenticationProviderConfigEditor;
exports["default"] = _default;
//# sourceMappingURL=AuthenticationProviderConfigEditor.js.map