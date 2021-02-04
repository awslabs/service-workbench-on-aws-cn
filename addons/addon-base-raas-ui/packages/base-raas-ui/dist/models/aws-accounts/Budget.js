"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
// ==================================================================
// Budget
// ==================================================================
var Budget = _mobxStateTree.types.model('Budget', {
  budgetLimit: '',
  startDate: '',
  endDate: '',
  thresholds: _mobxStateTree.types.array(_mobxStateTree.types.number),
  notificationEmail: ''
}).actions(function (self) {
  return {
    setBudget: function setBudget(rawBudget) {
      self.budgetLimit = rawBudget.budgetLimit;
      self.startDate = rawBudget.startDate;
      self.endDate = rawBudget.endDate;
      self.thresholds = rawBudget.thresholds;
      self.notificationEmail = rawBudget.notificationEmail;
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {// add view methods here
  };
}); // eslint-disable-next-line import/prefer-default-export


var _default = Budget;
exports["default"] = _default;
//# sourceMappingURL=Budget.js.map