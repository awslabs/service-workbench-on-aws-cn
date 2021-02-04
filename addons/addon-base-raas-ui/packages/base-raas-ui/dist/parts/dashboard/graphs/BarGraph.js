"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactChartjs = require("react-chartjs-2");

var _graphOptions = require("./graph-options");

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
var BarGraph = function BarGraph(_ref) {
  var className = _ref.className,
      data = _ref.data,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 250 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 120 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fs-9 center mt1 mb1"
  }, title), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactChartjs.Bar, {
    className: className,
    data: data,
    width: width,
    height: height,
    options: _graphOptions.barOptions
  })));
};

var _default = BarGraph;
exports["default"] = _default;
//# sourceMappingURL=BarGraph.js.map