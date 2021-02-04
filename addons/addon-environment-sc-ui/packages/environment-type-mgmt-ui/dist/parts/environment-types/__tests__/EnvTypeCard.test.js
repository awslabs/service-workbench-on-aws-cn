"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _EnvTypeCard = _interopRequireDefault(require("../EnvTypeCard"));

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
var mockPluginRegistry = {
  visitPlugins: function visitPlugins(extensionPoint, methodName) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$payload = _ref.payload,
        payload = _ref$payload === void 0 ? {} : _ref$payload;

    return payload;
  }
};
describe('EnvTypeCard', function () {
  it('should be true', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_EnvTypeCard["default"].WrappedComponent, {
      envType: "Workspace",
      pluginRegistry: mockPluginRegistry
    }));
    expect(wrapper).toBeDefined();
  });
});
//# sourceMappingURL=EnvTypeCard.test.js.map