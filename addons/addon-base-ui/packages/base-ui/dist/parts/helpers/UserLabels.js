"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

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
var UserLabels = function UserLabels(props) {
  var color = props.color,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      users = props.users;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, _lodash["default"].map(users, function (user) {
    return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
      key: user.username,
      color: color,
      image: true,
      className: "mt1"
    }, user.firstName, user.lastName, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label.Detail, null, user.unknown && "".concat(user.username, "??"), !user.unknown && (user.email || user.username)));
  }));
};

var _default = (0, _mobxReact.observer)(UserLabels);

exports["default"] = _default;
//# sourceMappingURL=UserLabels.js.map