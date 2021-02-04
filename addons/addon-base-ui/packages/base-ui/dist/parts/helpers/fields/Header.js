"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

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
// - className (via props)
var Component = (0, _mobxReact.observer)(function (_ref) {
  var field = _ref.field,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'mt0 mb1' : _ref$className;
  var id = field.id,
      label = field.label;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
    className: (0, _classnames["default"])('field', className),
    as: "h3"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "color-grey",
    htmlFor: id
  }, label));
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map