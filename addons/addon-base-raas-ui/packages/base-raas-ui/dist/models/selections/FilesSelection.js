"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.FilesSelection = void 0;

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
// TODO: Improve file model
// const File2 = types.model('File2', {
//   name: '',
//   size: types.optional(types.number, 0),
// });
// TODO this should have been named 'Run'
var File = _mobxStateTree.types.model('File', {
  id: _mobxStateTree.types.identifier,
  name: '',
  description: _mobxStateTree.types.maybeNull(_mobxStateTree.types.string),
  accessStatus: ''
}); // TODO this should have been named 'RunsSelection'


var FilesSelection = _mobxStateTree.types.model('FilesSelection', {
  files: _mobxStateTree.types.optional(_mobxStateTree.types.map(File), {})
}).actions(function (self) {
  return {
    setFile: function setFile(file) {
      self.files.set(file.id, file);
    },
    deleteFile: function deleteFile(id) {
      self.files["delete"](id);
    },
    cleanup: function cleanup() {
      self.files.clear();
    },
    setFiles: function setFiles(filesMapSnapshot) {
      (0, _mobxStateTree.applySnapshot)(self.files, filesMapSnapshot);
    }
  };
}).views(function (self) {
  return {
    hasFile: function hasFile(id) {
      return self.files.has(id);
    },

    get empty() {
      return self.files.size === 0;
    },

    get count() {
      return self.files.size;
    },

    get studiesCount() {
      var studyIdMap = {};
      self.files.forEach(function (entry) {
        studyIdMap[entry.studyId] = true;
      });
      return _lodash["default"].size(studyIdMap);
    },

    studiesCountByStatus: function studiesCountByStatus(state) {
      var studyIdMap = {};
      self.files.forEach(function (entry) {
        if (entry.accessStatus === state) studyIdMap[entry.studyId] = true;
      });
      return _lodash["default"].size(studyIdMap);
    },
    studiesCountByNotStatus: function studiesCountByNotStatus(state) {
      var studyIdMap = {};
      self.files.forEach(function (entry) {
        if (entry.accessStatus !== state) studyIdMap[entry.studyId] = true;
      });
      return _lodash["default"].size(studyIdMap);
    },

    get fileNames() {
      var names = [];
      self.files.forEach(function (entry) {
        names.push(entry.id);
      });
      return names;
    },

    groupByStudy: function groupByStudy() {
      var studyIdMap = {};
      self.files.forEach(function (entry) {
        var values = studyIdMap[entry.studyId];

        if (_lodash["default"].isArray(values)) {
          values.push(entry);
        } else {
          studyIdMap[entry.studyId] = [entry];
        }
      });
      return studyIdMap;
    },
    groupNotApprovedByStudy: function groupNotApprovedByStudy() {
      var studyIdMap = {};
      self.files.forEach(function (entry) {
        if (entry.accessStatus === 'approved') return;
        var values = studyIdMap[entry.studyId];

        if (_lodash["default"].isArray(values)) {
          values.push(entry);
        } else {
          studyIdMap[entry.studyId] = [entry];
        }
      });
      return studyIdMap;
    },
    countByStatus: function countByStatus(state) {
      var counter = 0;
      self.files.forEach(function (file) {
        if (file.accessStatus === state) counter += 1;
      });
      return counter;
    }
  };
});

exports.FilesSelection = FilesSelection;

function registerContextItems(appContext) {
  appContext.filesSelection = FilesSelection.create({}, appContext);
}
//# sourceMappingURL=FilesSelection.js.map