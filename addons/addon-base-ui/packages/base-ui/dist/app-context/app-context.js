"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeAppContext = exports.appContext = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _PluginRegistry = require("../models/PluginRegistry");

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
var appContext = (0, _mobx.observable)({});
/**
 * Initializes the given appContext (application context containing various MobX stores etc) by calling each plugin's
 * "registerAppContextItems" and "postRegisterAppContextItems" methods.
 *
 * @param {Object} pluginRegistry A registry that provides plugins registered by various addons for the specified extension point.
 * Each 'contextItems' plugin in the returned array is an object containing "registerAppContextItems" and "postRegisterAppContextItems" plugin methods.
 *
 * @returns {{intervalIds: {}, disposers: {}, pluginRegistry: {}}}
 */

exports.appContext = appContext;

var initializeAppContext = function initializeAppContext(pluginRegistry) {
  var registry = new _PluginRegistry.PluginRegistry(pluginRegistry);
  var appContextHolder = {
    disposers: {},
    intervalIds: {},
    pluginRegistry: registry,
    assets: {
      images: {}
    }
  };
  var registerAppContextItems = registry.getPluginsWithMethod('app-context-items', 'registerAppContextItems');

  _lodash["default"].forEach(registerAppContextItems, function (plugin) {
    plugin.registerAppContextItems(appContextHolder);
  });

  var postRegisterAppContextItems = registry.getPluginsWithMethod('app-context-items', 'postRegisterAppContextItems');

  _lodash["default"].forEach(postRegisterAppContextItems, function (plugin) {
    plugin.postRegisterAppContextItems(appContextHolder);
  });

  Object.assign(appContext, appContextHolder); // this is to ensure that it is the same appContext reference whether initializeAppContext is called or not

  return appContextHolder;
};

exports.initializeAppContext = initializeAppContext;
//# sourceMappingURL=app-context.js.map