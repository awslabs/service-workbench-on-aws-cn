"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toErr = exports.Err = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _utils = require("../helpers/utils");

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
var Err = _mobxStateTree.types.model('Err', {
  message: '',
  code: '',
  requestId: ''
});

exports.Err = Err;

var toErr = function toErr(error) {
  var parsed = (0, _utils.parseError)(error);
  return Err.create({
    message: parsed.message || '',
    code: parsed.code || '',
    requestId: parsed.toErr || ''
  });
};

exports.toErr = toErr;
//# sourceMappingURL=Err.js.map