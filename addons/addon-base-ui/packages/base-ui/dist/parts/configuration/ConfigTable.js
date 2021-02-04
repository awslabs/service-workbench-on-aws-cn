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
// expected props
// - rows (via props), an array of objects, [ { name, title, value }, { name, title, value }, ... ]
// - className (via props)
var Component = (0, _mobxReact.observer)(function (_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  if (rows.length === 0) return null;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
    basic: "very",
    className: "animated fadeIn ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
    width: 10
  }, "Key"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
    width: 6
  }, "Value"))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, _lodash["default"].map(rows, function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
      width: 10
    }, renderKey(item)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
      width: 6
    }, renderValue(item)));
  })));
});

function renderValue(_ref2) {
  var value = _ref2.value;

  var isNil = _lodash["default"].isNil(value);

  var isEmpty = _lodash["default"].isString(value) && _lodash["default"].isEmpty(value);

  return isNil || isEmpty ? 'Not Provided' : value.toString();
}

function renderKey(_ref3) {
  var _ref3$title = _ref3.title,
      title = _ref3$title === void 0 ? '' : _ref3$title,
      name = _ref3.name;
  var hasTitle = !_lodash["default"].isEmpty(title);

  if (hasTitle) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, title), /*#__PURE__*/_react["default"].createElement("div", {
      className: "fs-7 color-grey"
    }, name));
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, name);
}

var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=ConfigTable.js.map