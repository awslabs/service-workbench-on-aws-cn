"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentStep = void 0;

var _mobxStateTree = require("mobx-state-tree");

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
// ==================================================================
// CurrentStep
// ==================================================================
var CurrentStep = _mobxStateTree.types.model('CurrentStep', {
  step: ''
}).actions(function (self) {
  return {
    setStep: function setStep(step) {
      self.step = step;
    }
  };
});

exports.CurrentStep = CurrentStep;
//# sourceMappingURL=CurrentStep.js.map