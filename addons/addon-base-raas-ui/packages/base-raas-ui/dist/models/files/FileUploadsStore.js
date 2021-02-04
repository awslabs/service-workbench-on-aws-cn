"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.FileUploadsStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _FileUploadGroup = _interopRequireDefault(require("./FileUploadGroup"));

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
var FileUploadsStore = _mobxStateTree.types.model('FileUploadsStore', {
  fileUploadGroups: _mobxStateTree.types.map(_FileUploadGroup["default"])
}).actions(function (self) {
  return {
    getFileUploadGroup: function getFileUploadGroup(resourceId) {
      var group = self.fileUploadGroups.get(resourceId);

      if (!group) {
        group = _FileUploadGroup["default"].create({
          resourceId: resourceId,
          state: 'PENDING'
        });
        self.fileUploadGroups.put(group);
      }

      return group;
    },
    resetFileUploadGroup: function resetFileUploadGroup(resourceId) {
      var group = _FileUploadGroup["default"].create({
        resourceId: resourceId,
        state: 'PENDING'
      });

      self.fileUploadGroups.put(group);
    }
  };
});

exports.FileUploadsStore = FileUploadsStore;

function registerContextItems(appContext) {
  appContext.fileUploadsStore = FileUploadsStore.create({}, appContext);
}
//# sourceMappingURL=FileUploadsStore.js.map