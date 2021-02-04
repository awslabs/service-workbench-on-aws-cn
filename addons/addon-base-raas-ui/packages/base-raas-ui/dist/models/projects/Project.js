"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Project = void 0;

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
// Project
// ==================================================================
var Project = _mobxStateTree.types.model('Project', {
  id: _mobxStateTree.types.identifier,
  rev: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  description: '',
  indexId: '',
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  projectAdmins: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.string), [])
}).actions(function (self) {
  return {
    setProject: function setProject(rawProject) {
      // Note: if you have partial data vs full data, you need to replace the applySnapshot() with
      // the appropriate logic
      (0, _mobxStateTree.applySnapshot)(self, rawProject);
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    // add view methods here
    get projectAdminUsers() {
      var usersStore = (0, _mobxStateTree.getEnv)(self).usersStore;
      return _lodash["default"].map(self.projectAdmins, function (uid) {
        return usersStore.asUserObject({
          uid: uid
        });
      });
    }

  };
}); // eslint-disable-next-line import/prefer-default-export


exports.Project = Project;
//# sourceMappingURL=Project.js.map