"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTimeago = _interopRequireDefault(require("react-timeago"));

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
// - date (via props)
// - emptyMessage (via props) (a message to display when the date is empty)
// - className (via props)
var Component = (0, _mobxReact.observer)(function (_ref) {
  var date = _ref.date,
      className = _ref.className,
      _ref$emptyMessage = _ref.emptyMessage,
      emptyMessage = _ref$emptyMessage === void 0 ? 'Not Provided' : _ref$emptyMessage;
  if (_lodash["default"].isEmpty(date)) return /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])(className)
  }, emptyMessage);

  var formatter = function formatter(_value, _unit, _suffix, _epochSeconds, nextFormatter) {
    return (nextFormatter() || '').replace(/ago$/, 'old');
  };

  return /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])(className)
  }, /*#__PURE__*/_react["default"].createElement(_reactTimeago["default"], {
    date: date,
    formatter: formatter
  }));
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=Age.js.map