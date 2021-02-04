"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var appRunner = _interopRequireWildcard(require("../models/AppRunner"));

var appStore = _interopRequireWildcard(require("../models/App"));

var cleaner = _interopRequireWildcard(require("../models/Cleaner"));

var sessionStore = _interopRequireWildcard(require("../models/SessionStore"));

var showdown = _interopRequireWildcard(require("../models/Showdown"));

var userApiKeysStore = _interopRequireWildcard(require("../models/api-keys/UserApiKeysStore"));

var authentication = _interopRequireWildcard(require("../models/authentication/Authentication"));

var authenticationProviderConfigsStore = _interopRequireWildcard(require("../models/authentication/AuthenticationProviderConfigsStore"));

var authenticationProviderPublicConfigsStore = _interopRequireWildcard(require("../models/authentication/AuthenticationProviderPublicConfigsStore"));

var userDisplayName = _interopRequireWildcard(require("../models/users/UserDisplayName"));

var usersStore = _interopRequireWildcard(require("../models/users/UsersStore"));

var userStore = _interopRequireWildcard(require("../models/users/UserStore"));

var _favicon = _interopRequireDefault(require("../../images/favicon.ico"));

var _favicon32x = _interopRequireDefault(require("../../images/favicon-32x32.png"));

var _loginImage = _interopRequireDefault(require("../../images/login-image.gif"));

var _logoImage = _interopRequireDefault(require("../../images/logo-image.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

/**
 * Registers base stores to the appContext object
 *
 * @param appContext An application context object
 */
// eslint-disable-next-line no-unused-vars
function registerAppContextItems(appContext) {
  appRunner.registerContextItems(appContext);
  appStore.registerContextItems(appContext);
  cleaner.registerContextItems(appContext);
  sessionStore.registerContextItems(appContext);
  showdown.registerContextItems(appContext);
  userApiKeysStore.registerContextItems(appContext);
  authentication.registerContextItems(appContext);
  authenticationProviderConfigsStore.registerContextItems(appContext);
  authenticationProviderPublicConfigsStore.registerContextItems(appContext);
  userDisplayName.registerContextItems(appContext);
  usersStore.registerContextItems(appContext);
  userStore.registerContextItems(appContext);
  appContext.assets.images.faviconIcon = _favicon["default"];
  appContext.assets.images.faviconImage = _favicon32x["default"];
  appContext.assets.images.loginImage = _loginImage["default"];
  appContext.assets.images.logoImage = _logoImage["default"];
} // eslint-disable-next-line no-unused-vars


function postRegisterAppContextItems(appContext) {// No impl at this level
}

var plugin = {
  registerAppContextItems: registerAppContextItems,
  postRegisterAppContextItems: postRegisterAppContextItems
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=app-context-items-plugin.js.map