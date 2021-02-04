"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrincipalObjFromPrincipalStr = getPrincipalObjFromPrincipalStr;
exports.getPrincipalStrFromPrincipalObj = getPrincipalStrFromPrincipalObj;
exports.User = void 0;

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
var User = _mobxStateTree.types.model('User', {
  uid: '',
  firstName: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  lastName: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  isAdmin: _mobxStateTree.types.optional(_mobxStateTree.types["boolean"], false),
  username: '',
  ns: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  email: '',
  userType: '',
  authenticationProviderId: '',
  // Id of the authentication provider this user is authenticated against (such as internal, cognito auth provider id etc)
  identityProviderName: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  // Name of the identity provider this user belongs to (such as Identity Provider Id in cognito user pool in case of Federation etc)
  status: 'active',
  rev: 0
}).views(function (self) {
  return {
    get displayName() {
      return "".concat(self.firstName, " ").concat(self.lastName);
    },

    get longDisplayName() {
      if (self.unknown) {
        return "".concat(self.username, "??");
      }

      var fullName = "".concat(self.firstName, " ").concat(self.lastName);

      if (self.email) {
        return "".concat(fullName, " (").concat(self.email, ")");
      }

      return fullName;
    },

    get unknown() {
      return !self.firstName && !self.lastName;
    },

    get isRootUser() {
      return _lodash["default"].toLower(self.userType) === 'root';
    },

    get isActive() {
      return _lodash["default"].toLower(self.status) === 'active';
    },

    get isSystem() {
      return self.id === '_system_';
    },

    isSame: function isSame(uid) {
      return self.uid === uid;
    },
    isSamePrincipal: function isSamePrincipal(_ref) {
      var username = _ref.username,
          ns = _ref.ns;
      return self.username === username && self.ns === ns;
    },

    get id() {
      return self.uid;
    },

    get principal() {
      return {
        username: self.username,
        ns: self.ns
      };
    },

    get principalStr() {
      return JSON.stringify(self.principal);
    }

  };
});

exports.User = User;

function getPrincipalObjFromPrincipalStr(principalStr) {
  return JSON.parse(principalStr);
}

function getPrincipalStrFromPrincipalObj(_ref2) {
  var username = _ref2.username,
      ns = _ref2.ns;
  return JSON.stringify({
    username: username,
    ns: ns
  });
}
//# sourceMappingURL=User.js.map