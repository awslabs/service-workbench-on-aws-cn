"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StackInfo = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

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
// StackInfo
// ==================================================================
var StackInfo = _mobxStateTree.types.model('StackInfo', {
  id: '',
  name: '',
  region: '',
  accountId: '',
  stackId: '',
  template: _mobxStateTree.types.optional(_mobxStateTree.types.frozen(), {}),
  signedUrl: '',
  createStackUrl: '',
  updateStackUrl: '',
  cfnConsoleUrl: '',
  urlExpiry: 0
}).actions(function (self) {
  return {
    setStackInfo: function setStackInfo() {
      var raw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _lodash["default"].forEach(raw, function (value, key) {
        self[key] = value;
      });
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    get formattedTemplate() {
      return JSON.stringify(self.template, null, 2);
    },

    get hasUpdateStackUrl() {
      return !_lodash["default"].isEmpty(self.updateStackUrl);
    },

    get expired() {
      var now = Date.now();
      return self.urlExpiry < now + 1000 * 60; // lets buffer 1 minute
    }

  };
}); // eslint-disable-line import/prefer-default-export


exports.StackInfo = StackInfo;
//# sourceMappingURL=StackInfo.js.map