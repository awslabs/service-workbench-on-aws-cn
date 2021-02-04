"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSourceStudy = void 0;

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
// DataSourceStudy
// ==================================================================

var DataSourceStudy = _mobxStateTree.types.model('DataSourceStudy', {
  id: '',
  rev: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  name: '',
  folder: '',
  accountId: '',
  awsPartition: 'aws',
  bucket: '',
  accessType: '',
  bucketAccess: '',
  qualifier: '',
  appRoleArn: '',
  category: '',
  region: '',
  kmsScope: '',
  kmsArn: '',
  status: '',
  statusMsg: '',
  statusAt: '',
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  permissions: _mobxStateTree.types.maybe(_mobxStateTree.types.frozen())
}).actions(function (self) {
  return {
    setStudy: function setStudy() {
      var raw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _lodash["default"].forEach(raw, function (value, key) {
        if (value === 'permissions') return; // we don't want to update the permissions

        if (_lodash["default"].isArray(value)) {
          self[key].replace(value);
        } else {
          self[key] = value;
        }
      }); // We want to take care of thee statusMsg because it might come as undefined


      if (_lodash["default"].isUndefined(raw.statusMsg)) self.statusMsg = '';
    },
    setPermissions: function setPermissions() {
      var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      self.permissions = permissions;
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    get friendlyAccessType() {
      if (self.accessType === 'readonly') return 'Read Only';
      if (self.accessType === 'writeonly') return 'Write Only';
      return 'Read & Write';
    },

    get myStudies() {
      return self.category === 'My Studies';
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
    }

  };
}); // eslint-disable-line import/prefer-default-export


exports.DataSourceStudy = DataSourceStudy;
//# sourceMappingURL=DataSourceStudy.js.map