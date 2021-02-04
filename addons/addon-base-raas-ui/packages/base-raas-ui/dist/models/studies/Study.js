"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Study = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _StudyFilesStore = require("./StudyFilesStore");

var _StudyPermissionsStore = require("./StudyPermissionsStore");

var _categories = require("./categories");

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
// Study
// ==================================================================
var Study = _mobxStateTree.types.model('Study', {
  id: _mobxStateTree.types.identifier,
  rev: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  name: '',
  category: '',
  projectId: '',
  access: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.string), []),
  resources: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.model({
    arn: _mobxStateTree.types.string
  })), []),
  description: _mobxStateTree.types.maybeNull(_mobxStateTree.types.string),
  uploadLocationEnabled: false,
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  filesStore: _mobxStateTree.types.maybe(_StudyFilesStore.StudyFilesStore),
  permissionsStore: _mobxStateTree.types.maybe(_StudyPermissionsStore.StudyPermissionsStore)
}).actions(function (self) {
  return {
    setStudy: function setStudy(rawStudy) {
      // Note: if you have partial data vs full data, you need to replace the applySnapshot() with
      // the appropriate logic
      (0, _mobxStateTree.applySnapshot)(self, rawStudy);
    },
    getFilesStore: function getFilesStore() {
      if (!self.filesStore) {
        self.filesStore = _StudyFilesStore.StudyFilesStore.create({
          studyId: self.id
        });
      }

      return self.filesStore;
    },
    getPermissionsStore: function getPermissionsStore() {
      if (!self.permissionsStore) {
        self.permissionsStore = _StudyPermissionsStore.StudyPermissionsStore.create({
          studyId: self.id
        });
      }

      return self.permissionsStore;
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    // add view methods here
    get isOpenDataStudy() {
      return self.category === _categories.categories.openData.name; // TODO the backend should really send an id and not a name
    },

    get isOrganizationStudy() {
      return self.category === _categories.categories.organization.name; // TODO the backend should really send an id and not a name
    },

    get canUpload() {
      return self.access.includes('admin') || self.access.includes('readwrite');
    }

  };
}); // eslint-disable-line import/prefer-default-export


exports.Study = Study;
//# sourceMappingURL=Study.js.map