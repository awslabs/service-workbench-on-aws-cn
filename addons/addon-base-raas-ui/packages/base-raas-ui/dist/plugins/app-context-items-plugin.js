"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var app = _interopRequireWildcard(require("../models/App"));

var userStore = _interopRequireWildcard(require("../models/users/UserStore"));

var usersStore = _interopRequireWildcard(require("../models/users/UsersStore"));

var accountsStore = _interopRequireWildcard(require("../models/accounts/AccountsStore"));

var awsAccountsStore = _interopRequireWildcard(require("../models/aws-accounts/AwsAccountsStore"));

var clientInformationStore = _interopRequireWildcard(require("../models/client-info/ClientInformationStore"));

var environment = _interopRequireWildcard(require("../models/environments/Environment"));

var environmentConfigurationsStore = _interopRequireWildcard(require("../models/environments/EnvironmentConfigurationsStore"));

var environmentsStore = _interopRequireWildcard(require("../models/environments/EnvironmentsStore"));

var fileUploadsStore = _interopRequireWildcard(require("../models/files/FileUploadsStore"));

var indexesStore = _interopRequireWildcard(require("../models/indexes/IndexesStore"));

var projectsStore = _interopRequireWildcard(require("../models/projects/ProjectsStore"));

var filesSelection = _interopRequireWildcard(require("../models/selections/FilesSelection"));

var studiesStore = _interopRequireWildcard(require("../models/studies/StudiesStore"));

var userRolesStore = _interopRequireWildcard(require("../models/user-roles/UserRolesStore"));

var computePlatformsStore = _interopRequireWildcard(require("../models/compute/ComputePlatformsStore"));

var scEnvironmentsStore = _interopRequireWildcard(require("../models/environments-sc/ScEnvironmentsStore"));

var scEnvironmentCostsStore = _interopRequireWildcard(require("../models/environments-sc/ScEnvironmentCostsStore"));

var _settings = require("../helpers/settings");

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
// eslint-disable-next-line no-unused-vars
function registerAppContextItems(appContext) {
  app.registerContextItems(appContext);
  userStore.registerContextItems(appContext);
  usersStore.registerContextItems(appContext);
  accountsStore.registerContextItems(appContext);
  awsAccountsStore.registerContextItems(appContext);
  clientInformationStore.registerContextItems(appContext);
  environment.registerContextItems(appContext);
  environmentConfigurationsStore.registerContextItems(appContext);
  environmentsStore.registerContextItems(appContext);
  fileUploadsStore.registerContextItems(appContext);
  indexesStore.registerContextItems(appContext);
  projectsStore.registerContextItems(appContext);
  filesSelection.registerContextItems(appContext);
  studiesStore.registerContextItems(appContext);
  userRolesStore.registerContextItems(appContext);
  computePlatformsStore.registerContextItems(appContext);
  scEnvironmentsStore.registerContextItems(appContext);
  scEnvironmentCostsStore.registerContextItems(appContext);
  console.log('enableBuiltInWorkspaces', _settings.enableBuiltInWorkspaces); // If built in workspaces are enabled then do not show environment type management
  // using AWS Service Catalog

  appContext.showEnvTypeManagement = !_settings.enableBuiltInWorkspaces;
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