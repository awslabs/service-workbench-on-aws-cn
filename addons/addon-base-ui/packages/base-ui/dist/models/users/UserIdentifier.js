"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
// A user may be authenticated by different authentication providers due to this there is a
// chance of collision of usernames across different authentication/identity providers.
// Due to this, each user is uniquely identified by not just the username but "username" plus "ns" (i.e., namespace).
// The MST model below represents this user identifier containing username and the namespace.
var UserIdentifier = _mobxStateTree.types.model('UserIdentifier', {
  username: '',
  ns: ''
}).views(function (self) {
  return {
    isSame: function isSame(_ref) {
      var username = _ref.username,
          ns = _ref.ns;
      return self.username === username && self.ns === ns;
    },

    get id() {
      return self.identifierStr;
    },

    get identifier() {
      return self;
    },

    get identifierStr() {
      return JSON.stringify((0, _mobxStateTree.getSnapshot)(self));
    }

  };
});

var _default = UserIdentifier;
exports["default"] = _default;
//# sourceMappingURL=UserIdentifier.js.map