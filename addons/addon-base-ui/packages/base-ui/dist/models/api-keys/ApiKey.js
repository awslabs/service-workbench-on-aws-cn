"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _lodash = _interopRequireDefault(require("lodash"));

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
var ApiKey = _mobxStateTree.types.model('ApiKey', {
  id: _mobxStateTree.types.identifier,
  uid: '',
  updatedAt: '',
  status: '',
  createdAt: '',
  expiryTime: 0,
  key: _mobxStateTree.types.optional(_mobxStateTree.types.string, '')
}).views(function (self) {
  return {
    get effectiveStatus() {
      if (self.status !== 'active') {
        // if status it not active then the effective status is same as status (such as "revoked")
        return self.status;
      } // if status is active then make sure it is not expired


      if (self.expiryTime > 0 && _lodash["default"].now() > self.expiryTime) {
        return 'expired';
      }

      return self.status;
    },

    get isActive() {
      return self.effectiveStatus === 'active';
    },

    get isRevoked() {
      return self.effectiveStatus === 'revoked';
    }

  };
});

var _default = ApiKey;
exports["default"] = _default;
//# sourceMappingURL=ApiKey.js.map