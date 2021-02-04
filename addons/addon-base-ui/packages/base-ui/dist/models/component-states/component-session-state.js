"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SessionStore = require("../SessionStore");

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
 * A function that returns component's state (as MST model).
 * The function creates the component's state MST model if it doesn't exist in the SessionStore.
 *
 * @param uiStateModel The MST model containing the component's UI state
 * @param id The identifier string for the model
 * @param componentStateCreatorFn The function to create the component's state MST model if it doesn't exist in the SessionStore.
 * The default "componentStateCreatorFn" just uses the "create()" method of the given model to create initial state.
 *
 * @returns {*}
 */
function getComponentSessionState(uiStateModel, id) {
  var componentStateCreatorFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (model) {
    return model.create();
  };
  var stateId = "".concat(uiStateModel.name, "-").concat(id);
  var entry = _SessionStore.sessionStore.get(stateId) || componentStateCreatorFn(uiStateModel);

  _SessionStore.sessionStore.set(stateId, entry);

  return entry;
}

var _default = getComponentSessionState;
exports["default"] = _default;
//# sourceMappingURL=component-session-state.js.map