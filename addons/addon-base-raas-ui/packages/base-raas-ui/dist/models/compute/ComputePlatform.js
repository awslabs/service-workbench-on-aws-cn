"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComputePlatform = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _mobxStateTree = require("mobx-state-tree");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _ComputeConfiguration = require("./ComputeConfiguration");

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

/* eslint-disable import/prefer-default-export */
// This represents a compute platform information such as an emr or an ec2
var ComputePlatform = _mobxStateTree.types.model('ComputePlatform', {
  id: _mobxStateTree.types.identifier,
  type: '',
  title: '',
  desc: '',
  displayOrder: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  configurations: _mobxStateTree.types.map(_ComputeConfiguration.ComputeConfiguration)
}).actions(function (self) {
  return {
    setComputePlatform: function setComputePlatform(rawComputePlatform) {
      // Note: if you have partial data vs full data, you need to replace the applySnapshot() with
      // the appropriate logic
      // Preserve configurations
      var configurations = self.configurations || {};
      (0, _mobxStateTree.applySnapshot)(self, rawComputePlatform);
      self.configurations = configurations;
    },
    setConfigurations: function setConfigurations(raw) {
      (0, _utils.consolidateToMap)(self.configurations, raw, function (exiting, newItem) {
        exiting.setComputeConfiguration(newItem);
      });
    }
  };
}).views(function (self) {
  return {
    get descHtml() {
      var showdown = (0, _mobxStateTree.getEnv)(self).showdown;
      return showdown.convert(self.desc);
    },

    get configurationsList() {
      return _lodash["default"].sortBy((0, _mobx.values)(self.configurations), 'displayOrder');
    },

    getConfiguration: function getConfiguration(configurationId) {
      return self.configurations.get(configurationId);
    }
  };
});

exports.ComputePlatform = ComputePlatform;
//# sourceMappingURL=ComputePlatform.js.map