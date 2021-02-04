"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

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
// expected props
// currentStep an instance of the CurrentStep model
var Component = (0, _mobxReact.observer)(function (_ref) {
  var _ref$currentStep = _ref.currentStep,
      currentStep = _ref$currentStep === void 0 ? {} : _ref$currentStep;
  var activeIndex;
  var step = currentStep.step;

  switch (step) {
    case 'selectComputePlatform':
      activeIndex = 0;
      break;

    case 'selectComputeConfiguration':
      activeIndex = 1;
      break;

    default:
      activeIndex = 0;
  }

  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Group, {
    widths: 2
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step, {
    active: activeIndex === 0,
    disabled: activeIndex < 0
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
    name: "server"
  }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Title, null, "Select Compute"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Description, null, "Select a compute platform"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step, {
    active: activeIndex === 1,
    disabled: activeIndex < 1
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
    name: "hdd outline"
  }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Title, null, "Create Workspace"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Step.Description, null, "Create the workspace"))));
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=SetupStepsProgress.js.map