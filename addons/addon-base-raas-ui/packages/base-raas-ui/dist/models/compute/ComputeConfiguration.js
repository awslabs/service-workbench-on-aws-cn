"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComputeConfiguration = void 0;

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

/* eslint-disable import/prefer-default-export */
// This represents a specific configuration of a compute platform, such as a specific size of an ec2 setup
var ComputeConfiguration = _mobxStateTree.types.model('ComputeConfiguration', {
  id: _mobxStateTree.types.identifier,
  type: '',
  title: '',
  displayOrder: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  priceInfo: _mobxStateTree.types.frozen(),
  desc: '',
  displayProps: _mobxStateTree.types.frozen(),
  // an array of objects, each object has a key and a value that are purely used for displaying purposes
  params: _mobxStateTree.types.frozen()
}).actions(function (self) {
  return {
    setComputeConfiguration: function setComputeConfiguration(raw) {
      // Note: if you have partial data vs full data, you need to replace the applySnapshot() with
      // the appropriate logic
      (0, _mobxStateTree.applySnapshot)(self, raw);
    }
  };
}).views(function (self) {
  return {
    get descHtml() {
      var showdown = (0, _mobxStateTree.getEnv)(self).showdown;
      return showdown.convert(self.desc);
    },

    // Returns true if the configuration supports changing the value of a given param
    isMutable: function isMutable(param) {
      return _lodash["default"].has(self.params, ['mutable', param]);
    },

    // Returns all mutable parameters that this configuration allow
    get mutableParams() {
      return _lodash["default"].get(self.params, 'mutable', {});
    },

    // If undefined is returned, it means that changing the cidr value is not supported
    get defaultCidr() {
      if (!self.isMutable('cidr')) return undefined;
      return _lodash["default"].get(self.mutableParams, 'cidr', '');
    },

    get pricePerDay() {
      var info = self.priceInfo || {};
      if (info.timeUnit === 'hour') return info.value * 24;
      if (info.timeUnit === 'day') return info.value;
      return undefined;
    },

    // Use this method to get a value of a parameter, regardless whether it is immutable or not
    // We first see if the parameter exists in the immutable params if so, it is returned,
    // otherwise the one in the mutable params is returned if any
    getParam: function getParam(name) {
      var value = _lodash["default"].get(self.params, ['immutable', name]);

      if (!_lodash["default"].isUndefined(value)) return value;
      return _lodash["default"].get(self.mutableParams, name);
    }
  };
});

exports.ComputeConfiguration = ComputeConfiguration;
//# sourceMappingURL=ComputeConfiguration.js.map