"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../helpers/settings");

var _EnvironmentsList = _interopRequireDefault(require("../environments-builtin/EnvironmentsList"));

var _ScEnvironmentsList = _interopRequireDefault(require("../environments-sc/ScEnvironmentsList"));

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
var _default = function _default() {
  return _settings.enableBuiltInWorkspaces ? /*#__PURE__*/_react["default"].createElement(_EnvironmentsList["default"], null) : /*#__PURE__*/_react["default"].createElement(_ScEnvironmentsList["default"], null);
};

exports["default"] = _default;
//# sourceMappingURL=EnvironmentsList.js.map