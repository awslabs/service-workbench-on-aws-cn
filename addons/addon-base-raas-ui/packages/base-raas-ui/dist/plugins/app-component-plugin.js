"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserApplication = _interopRequireDefault(require("../parts/UserApplication"));

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
// eslint-disable-next-line consistent-return, no-unused-vars
function getAppComponent(_ref) {
  var location = _ref.location,
      appContext = _ref.appContext;
  var app = appContext.app || {}; // We are only going to return an App react component if the user is authenticated
  // and not registered, otherwise we return undefined which means that the base ui
  // plugin will provide its default App react component.

  if (app.userAuthenticated && !app.userRegistered) {
    return _UserApplication["default"];
  }
}

var plugin = {
  getAppComponent: getAppComponent
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=app-component-plugin.js.map