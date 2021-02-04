"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.UserDisplayName = void 0;

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
// A convenient model that returns the display name or long display name given a user identifier
var UserDisplayName = _mobxStateTree.types.model('UserDisplayName', {}).views(function (self) {
  return {
    getDisplayName: function getDisplayName(_ref) {
      var uid = _ref.uid;
      var userStore;

      if (_lodash["default"].isUndefined(uid)) {
        userStore = (0, _mobxStateTree.getEnv)(self).userStore;
        if (userStore.user) return userStore.displayName;
        return 'Unknown';
      }

      if (uid === '_system_') return 'System';
      var usersStore = (0, _mobxStateTree.getEnv)(self).usersStore;
      var user = usersStore.asUserObject({
        uid: uid
      });
      if (_lodash["default"].isUndefined(user)) return 'unknown';
      return user.displayName || 'unknown';
    },
    // identifier: can be an instance of '_system_', other string or undefined
    getLongDisplayName: function getLongDisplayName(identifier) {
      var userStore;

      if (_lodash["default"].isUndefined(identifier)) {
        userStore = (0, _mobxStateTree.getEnv)(self).userStore;
        if (userStore.user) return userStore.longDisplayName;
        return 'Unknown';
      }

      if (identifier === '_system_') return 'System';
      var usersStore = (0, _mobxStateTree.getEnv)(self).usersStore;
      var user = usersStore.asUserObject(identifier);
      if (_lodash["default"].isUndefined(user)) return 'unknown';
      return user.longDisplayName || 'unknown';
    },
    // identifier: can be an instance of '_system_', other string or undefined
    isSystem: function isSystem(identifier) {
      var userStore;

      if (_lodash["default"].isUndefined(identifier)) {
        userStore = (0, _mobxStateTree.getEnv)(self).userStore;
        if (userStore.user) return userStore.user.isSystem;
        return false;
      }

      if (identifier === '_system_') return true;
      var usersStore = (0, _mobxStateTree.getEnv)(self).usersStore;
      var user = usersStore.asUserObject(identifier);
      if (_lodash["default"].isUndefined(user)) return false;
      return user.isSystem;
    }
  };
});

exports.UserDisplayName = UserDisplayName;

function registerContextItems(appContext) {
  appContext.userDisplayName = UserDisplayName.create({}, appContext);
}
//# sourceMappingURL=UserDisplayName.js.map