"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _App = _interopRequireDefault(require("../App"));

var _AutoLogout = _interopRequireDefault(require("../parts/AutoLogout"));

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
// eslint-disable-next-line no-unused-vars
function getAppComponent(_ref) {
  var location = _ref.location,
      appContext = _ref.appContext;
  return _App["default"];
} // eslint-disable-next-line no-unused-vars


function getAutoLogoutComponent(_ref2) {
  var location = _ref2.location,
      appContext = _ref2.appContext;
  return _AutoLogout["default"];
}

var plugin = {
  getAppComponent: getAppComponent,
  getAutoLogoutComponent: getAutoLogoutComponent
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=app-component-plugin.js.map