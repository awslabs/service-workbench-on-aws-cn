"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _classnames = _interopRequireDefault(require("classnames"));

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
// expected props
// - field (via props), this is the mobx form field object
var Component = (0, _mobxReact.observer)(function (_ref) {
  var field = _ref.field,
      className = _ref.className;
  var _field$error = field.error,
      error = _field$error === void 0 ? '' : _field$error;
  var hasError = !_lodash["default"].isEmpty(error); // IMPORTANT do NOT use field.hasError

  if (!hasError) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('ui pointing basic label', className)
  }, error);
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=ErrorPointer.js.map