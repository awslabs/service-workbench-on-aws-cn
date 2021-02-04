"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

var _classnames = _interopRequireDefault(require("classnames"));

var _Header = _interopRequireDefault(require("./Header"));

var _Description = _interopRequireDefault(require("./Description"));

var _ErrorPointer = _interopRequireDefault(require("./ErrorPointer"));

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
// - form (via props)
// - field (via props), this is the mobx form field object
// - className (via props)
//
// The following props are to support existing React Semantic UI props:
// - disabled (via props), default to false
// - size (via props), default to small
var Component = (0, _mobxReact.observer)(function (_ref) {
  var field = _ref.field,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'mb4' : _ref$className,
      onClick = _ref.onClick;
  var id = field.id,
      value = field.value,
      sync = field.sync,
      _field$error = field.error,
      error = _field$error === void 0 ? '' : _field$error,
      _field$extra = field.extra,
      extra = _field$extra === void 0 ? {} : _field$extra;
  var _extra$yesLabel = extra.yesLabel,
      yesLabel = _extra$yesLabel === void 0 ? 'Yes' : _extra$yesLabel,
      _extra$noLabel = extra.noLabel,
      noLabel = _extra$noLabel === void 0 ? 'No' : _extra$noLabel,
      _extra$yesValue = extra.yesValue,
      yesValue = _extra$yesValue === void 0 ? true : _extra$yesValue,
      _extra$noValue = extra.noValue,
      noValue = _extra$noValue === void 0 ? false : _extra$noValue,
      _extra$showHeader = extra.showHeader,
      showHeader = _extra$showHeader === void 0 ? true : _extra$showHeader;
  var hasError = !_lodash["default"].isEmpty(error); // IMPORTANT do NOT use field.hasError

  var isDisabled = field.disabled || disabled;
  var disabledClass = isDisabled ? 'disabled' : '';
  var errorClass = hasError ? 'error' : '';
  var yesSelected = value === yesValue;
  var noSelected = value === noValue;

  var handleClick = function handleClick(toAssign) {
    return function (event) {
      event.preventDefault();
      event.stopPropagation();
      sync(toAssign);
      field.validate({
        showErrors: true
      });
      if (onClick) onClick(toAssign, field);
    };
  };

  var yesAttributes = {
    onClick: handleClick(yesValue),
    disabled: isDisabled
  };
  var noAttributes = {
    onClick: handleClick(noValue),
    disabled: isDisabled
  };
  if (yesSelected) yesAttributes.color = 'teal';
  if (noSelected) noAttributes.color = 'teal';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, errorClass, disabledClass)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap mb1"
  }, showHeader && /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    field: field,
    className: "mt1 mb0 mr2"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button.Group, {
    id: id,
    size: size
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, yesAttributes, yesLabel), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button.Or, null), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, noAttributes, noLabel)))), /*#__PURE__*/_react["default"].createElement(_Description["default"], {
    field: field
  }), /*#__PURE__*/_react["default"].createElement(_ErrorPointer["default"], {
    field: field
  }));
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=YesNo.js.map