"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
var _default = function _default(_ref) {
  var _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Loading...' : _ref$message,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'p3' : _ref$className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(className)
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Progress, {
    percent: 100,
    active: true,
    color: "blue"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "color-grey"
  }, message)));
};

exports["default"] = _default;
//# sourceMappingURL=Progress.js.map