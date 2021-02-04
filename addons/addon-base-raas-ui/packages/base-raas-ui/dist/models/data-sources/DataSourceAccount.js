"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSourceAccount = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _mobxStateTree = require("mobx-state-tree");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _DataSourceStudy = require("./DataSourceStudy");

var _StackInfo = require("./StackInfo");

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
var states = {
  pending: {
    id: 'pending',
    display: 'Pending',
    color: 'orange'
  },
  error: {
    id: 'error',
    display: 'Unavailable',
    color: 'red'
  },
  reachable: {
    id: 'reachable',
    display: 'Available',
    color: 'green'
  }
}; // ==================================================================
// DataSourceAccount
// ==================================================================

var DataSourceAccount = _mobxStateTree.types.model('DataSourceAccount', {
  id: '',
  rev: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  name: '',
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  stackCreated: false,
  mainRegion: '',
  qualifier: '',
  contactInfo: _mobxStateTree.types.optional(_mobxStateTree.types.maybeNull(_mobxStateTree.types.string), ''),
  stack: '',
  status: '',
  statusMsg: '',
  statusAt: '',
  description: _mobxStateTree.types.optional(_mobxStateTree.types.maybeNull(_mobxStateTree.types.string), ''),
  type: '',
  // managed vs unmanaged
  templateIdExpected: '',
  templateIdFound: '',
  stackId: '',
  buckets: _mobxStateTree.types.array(_mobxStateTree.types.frozen()),
  studies: _mobxStateTree.types.map(_DataSourceStudy.DataSourceStudy),
  stackInfo: _mobxStateTree.types.optional(_StackInfo.StackInfo, {})
}).actions(function (self) {
  return {
    setDataSourceAccount: function setDataSourceAccount() {
      var raw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _lodash["default"].forEach(raw, function (value, key) {
        if (value === 'studies') return; // we don't want to update the studies

        if (value === 'stackInfo') return; // we don't want to update the stack info

        self[key] = value;
      }); // We want to take care of thee statusMsg because it might come as undefined


      if (_lodash["default"].isUndefined(raw.statusMsg)) self.statusMsg = '';
    },
    setStudies: function setStudies(studies) {
      (0, _utils.consolidateToMap)(self.studies, studies, function (existing, newItem) {
        existing.setStudy(newItem);
      });
    },
    setStudy: function setStudy(study) {
      self.studies.set(study.id, study);
      return self.studies.get(study.id);
    },
    setBucket: function setBucket(bucket) {
      // Because buckets are frozen, we need to deep clone first
      var buckets = _lodash["default"].cloneDeep(self.buckets);

      buckets.push(bucket);
      self.buckets = buckets;
      return bucket;
    },
    setStackInfo: function setStackInfo(stackInfo) {
      self.stackInfo.setStackInfo(stackInfo);
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    get studiesList() {
      return _lodash["default"].orderBy((0, _mobx.values)(self.studies), ['id'], ['asc']);
    },

    getStudy: function getStudy(studyId) {
      return self.studies.get(studyId);
    },

    get state() {
      return states[self.status] || states.reachable;
    },

    get pendingState() {
      return self.status === 'pending';
    },

    get errorState() {
      return self.status === 'error';
    },

    get reachableState() {
      return self.status === 'reachable';
    },

    get statusMessageInfo() {
      var msg = self.statusMsg;
      var info = {
        prefix: '',
        color: 'grey',
        message: msg
      };
      if (_lodash["default"].isEmpty(msg)) return info;

      if (_lodash["default"].startsWith(msg, 'WARN|||')) {
        info.prefix = 'WARN';
        info.message = _lodash["default"].nth(_lodash["default"].split(msg, '|||'), 1);
        info.color = 'orange';
      } else if (_lodash["default"].startsWith(msg, 'ERR|||')) {
        info.prefix = 'ERR';
        info.message = _lodash["default"].nth(_lodash["default"].split(msg, '|||'), 1);
        info.color = 'red';
      }

      return info;
    },

    get stackOutDated() {
      return !_lodash["default"].isEmpty(self.stackId) && self.stackCreated && self.templateIdExpected !== self.templateIdFound;
    },

    get incorrectStackNameProvisioned() {
      return _lodash["default"].isEmpty(self.stackId) && self.stackCreated;
    },

    getBucket: function getBucket(name) {
      return _lodash["default"].find(self.buckets, function (bucket) {
        return bucket.name === name;
      });
    },

    get bucketNames() {
      return _lodash["default"].map(self.buckets, function (bucket) {
        return bucket.name;
      });
    },

    getStudiesForBucket: function getStudiesForBucket(name) {
      return _lodash["default"].filter((0, _mobx.values)(self.studies), function (study) {
        return study.bucket === name;
      });
    },

    get emailCommonSection() {
      var names = self.bucketNames;
      var lines = ['Dear Admin,', '', 'We are requesting access to the following bucket(s) and studies:'];

      _lodash["default"].forEach(names, function (name) {
        lines.push("\nBucket name: ".concat(name));
        var studies = self.getStudiesForBucket(name);

        _lodash["default"].forEach(studies, function (study) {
          lines.push(" - folder: ".concat(study.folder));
          lines.push("   access: ".concat(study.friendlyAccessType));
        });
      });

      lines.push('');
      lines.push('For your convenience, you can follow these steps to configure the account for the requested access:\n');
      return lines;
    },

    get updateStackEmailTemplate() {
      var id = self.id,
          mainRegion = self.mainRegion,
          _self$stackInfo = self.stackInfo,
          stackInfo = _self$stackInfo === void 0 ? {} : _self$stackInfo;
      var cfnConsoleUrl = stackInfo.cfnConsoleUrl,
          updateStackUrl = stackInfo.updateStackUrl,
          urlExpiry = stackInfo.urlExpiry;

      var lines = _lodash["default"].slice(self.emailCommonSection);

      lines.push("1 - Log in to the aws console using the correct account. Please ensure that you are using the correct account # ".concat(id, " and region ").concat(mainRegion, "\n"));
      lines.push("2 - Go to the AWS CloudFormation console ".concat(cfnConsoleUrl, "\n"));
      lines.push("    You need to visit the AWS CloudFormation console page before you can follow the next link\n");
      lines.push("3 - Click on the following link\n");
      lines.push("    ".concat(updateStackUrl, "\n"));
      lines.push('    The link takes you to the CloudFormation console where you can review the stack information and provision it.\n');
      lines.push("    Note: the link expires at ".concat(new Date(urlExpiry).toISOString()));
      lines.push("\n\nRegards,\nService Workbench admin");
      return lines.join('\n');
    },

    get createStackEmailTemplate() {
      var id = self.id,
          mainRegion = self.mainRegion,
          _self$stackInfo2 = self.stackInfo,
          stackInfo = _self$stackInfo2 === void 0 ? {} : _self$stackInfo2;
      var createStackUrl = stackInfo.createStackUrl,
          urlExpiry = stackInfo.urlExpiry;

      var lines = _lodash["default"].slice(self.emailCommonSection);

      lines.push("1 - Log in to the aws console using the correct account. Please ensure that you are using the correct account # ".concat(id, " and region ").concat(mainRegion, "\n"));
      lines.push("2 - Click on the following link\n");
      lines.push("    ".concat(createStackUrl, "\n"));
      lines.push('    The link takes you to the CloudFormation console where you can review the stack information and provision it.\n');
      lines.push("    Note: the link expires at ".concat(new Date(urlExpiry).toISOString()));
      lines.push("\n\nRegards,\nService Workbench admin");
      return lines.join('\n');
    }

  };
}); // eslint-disable-line import/prefer-default-export


exports.DataSourceAccount = DataSourceAccount;
//# sourceMappingURL=DataSourceAccount.js.map