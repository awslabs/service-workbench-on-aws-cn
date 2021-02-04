"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

var _EnvTypeCandidatesList = _interopRequireDefault(require("./EnvTypeCandidatesList"));

var _EnvTypesList = _interopRequireDefault(require("./EnvTypesList"));

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
function EnvTypesManagement() {
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
    className: "mt3"
  }, /*#__PURE__*/_react["default"].createElement(_EnvTypeCandidatesList["default"], null), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null), /*#__PURE__*/_react["default"].createElement(_EnvTypesList["default"], null));
}

var _default = (0, _mobxReact.observer)(EnvTypesManagement);

exports["default"] = _default;
//# sourceMappingURL=EnvTypesManagement.js.map