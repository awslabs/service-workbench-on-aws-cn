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
// - show (via props), can be 'headerOnly', 'toggleOnly', 'both' (default to 'both')
// - className (via props)
//
// The following props are to support existing React Semantic UI props:
// - disabled (via props), default to false
// - size (via props), default to large
var Component = (0, _mobxReact.observer)(function (_ref) {
  var field = _ref.field,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? 'both' : _ref$show,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'mb4' : _ref$className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size;
  var id = field.id,
      value = field.value,
      sync = field.sync,
      _field$error = field.error,
      error = _field$error === void 0 ? '' : _field$error,
      _field$extra = field.extra,
      extra = _field$extra === void 0 ? {} : _field$extra;

  var _ref2 = extra || {},
      _ref2$yesLabel = _ref2.yesLabel,
      yesLabel = _ref2$yesLabel === void 0 ? 'Yes' : _ref2$yesLabel,
      _ref2$noLabel = _ref2.noLabel,
      noLabel = _ref2$noLabel === void 0 ? 'No' : _ref2$noLabel;

  var hasError = !_lodash["default"].isEmpty(error); // IMPORTANT do NOT use field.hasError

  var isDisabled = field.disabled || disabled;
  var disabledClass = isDisabled ? 'disabled' : '';
  var errorClass = hasError ? 'error' : '';
  var yesSelected = _lodash["default"].isBoolean(value) && value === true || value === 'true';
  var cursor = isDisabled ? 'op-3' : 'cursor-pointer';

  var handleClick = function handleClick(toAssign) {
    return function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (isDisabled) return;
      sync(toAssign);
      field.validate({
        showErrors: true
      });
    };
  };

  var yesAttributes = {
    name: 'toggle on',
    color: hasError ? 'red' : 'blue',
    size: size,
    className: 'mr1',
    disabled: isDisabled
  };
  var noAttributes = {
    name: 'toggle off',
    color: hasError ? 'red' : 'grey',
    size: size,
    className: 'mr1',
    disabled: isDisabled
  };
  var headerOrHeaderAndToggle = show === 'both' || show === 'headerOnly';
  var headerOnly = show === 'headerOnly';
  var toggleOnly = show === 'toggleOnly';

  var toggleButton = /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(hasError ? 'color-red' : '')
  }, yesSelected && /*#__PURE__*/_react["default"].createElement("span", {
    id: id,
    className: (0, _classnames["default"])(cursor),
    onClick: handleClick(false)
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, yesAttributes), yesLabel), !yesSelected && /*#__PURE__*/_react["default"].createElement("span", {
    id: id,
    className: (0, _classnames["default"])('op-65', cursor),
    onClick: handleClick(true)
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, noAttributes), noLabel));

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, errorClass, disabledClass)
  }, headerOrHeaderAndToggle && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap mb1"
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    field: field,
    className: "mt0 mb0 mr2"
  }), !headerOnly && toggleButton), /*#__PURE__*/_react["default"].createElement(_Description["default"], {
    field: field
  }), /*#__PURE__*/_react["default"].createElement(_ErrorPointer["default"], {
    field: field
  })), toggleOnly && toggleButton);
});
var _default = Component;
exports["default"] = _default;
//# sourceMappingURL=Toggle.js.map