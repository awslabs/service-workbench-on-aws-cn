"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _classnames = _interopRequireDefault(require("classnames"));

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

/* eslint-disable react/no-danger */
// expected props
// - field (via props), this is the mobx form field object
var Component = (0, _mobxReact.observer)(function (_ref) {
  var field = _ref.field;
  var _field$extra = field.extra,
      extra = _field$extra === void 0 ? {} : _field$extra;
  var explain = (extra || {}).explain;
  var warn = (extra || {}).warn;
  var hasExplain = !!explain;
  var hasWarn = !!warn;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, hasExplain && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('field', 'mb2'),
    dangerouslySetInnerHTML: {
      __html: explain
    }
  }), hasWarn && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
    className: "field",
    color: "brown"
  }, /*#__PURE__*/_react["default"].createElement("b", {
    className: "mr1"
  }, "Warning"), warn));
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=Description.js.map