"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

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
// expected props
// - segmentCount (via props)
// - className (via props)
var Component = function Component(_ref) {
  var _ref$segmentCount = _ref.segmentCount,
      segmentCount = _ref$segmentCount === void 0 ? 1 : _ref$segmentCount,
      className = _ref.className;

  var segment = function segment(index) {
    return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
      key: index,
      className: "p3 mb2"
    }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder, {
      fluid: true
    }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder.Line, {
      length: "full"
    })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder.Paragraph, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder.Line, {
      length: "short"
    }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, {
      className: "mt3"
    }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder, {
      fluid: true
    }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Placeholder.Line, {
      length: "full"
    })));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, _lodash["default"].map(_lodash["default"].times(segmentCount, String), function (index) {
    return segment(index);
  }));
};

var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=BasicProgressPlaceholder.js.map