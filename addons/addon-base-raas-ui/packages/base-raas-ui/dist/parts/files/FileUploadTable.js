"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _prettyBytes = _interopRequireDefault(require("pretty-bytes"));

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
var FileUploadStatus = (0, _mobxReact.observer)(function (_ref) {
  var file = _ref.file;
  return file.status === 'PENDING' ? 'Pending' : file.status === 'UPLOADING' ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Progress, {
    size: "small",
    className: "mb0",
    indicating: true,
    autoSuccess: true,
    progress: true,
    percent: Math.floor(file.uploaded / file.size * 100)
  }) : file.status === 'FAILED' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
    name: "times",
    color: "red"
  }), " ", "".concat(file.error || 'Error')) : file.status === 'COMPLETE' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
    name: "check",
    color: "green"
  }), " Complete") : 'Unknown';
});
var FileUploadToolbar = (0, _mobxReact.observer)(function (_ref2) {
  var file = _ref2.file,
      state = _ref2.state,
      onClickRemove = _ref2.onClickRemove,
      onClickCancel = _ref2.onClickCancel;
  return file.status === 'PENDING' ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
    floated: "right",
    icon: "trash",
    size: "tiny",
    basic: true,
    color: "grey",
    onClick: onClickRemove,
    disabled: state !== 'PENDING'
  }) : file.status === 'UPLOADING' ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
    floated: "right",
    icon: "remove",
    size: "tiny",
    basic: true,
    color: "red",
    onClick: onClickCancel
  }) : null;
});
var FileUploadRow = (0, _mobxReact.observer)(function (_ref3) {
  var file = _ref3.file,
      state = _ref3.state,
      onClickRemove = _ref3.onClickRemove,
      onClickCancel = _ref3.onClickCancel;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, file.name), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, (0, _prettyBytes["default"])(file.size)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(FileUploadStatus, {
    file: file
  })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(FileUploadToolbar, {
    file: file,
    state: state,
    onClickRemove: onClickRemove,
    onClickCancel: onClickCancel
  })));
});
var FileUploadTable = (0, _mobxReact.observer)(function (_ref4) {
  var _ref4$files = _ref4.files,
      files = _ref4$files === void 0 ? [] : _ref4$files,
      state = _ref4.state,
      onClickRemoveFile = _ref4.onClickRemoveFile,
      onClickCancelFile = _ref4.onClickCancelFile;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
    basic: "very"
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Filename"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Size"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null, "Status"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, null))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, files.map(function (file) {
    return /*#__PURE__*/_react["default"].createElement(FileUploadRow, {
      key: file.id,
      file: file,
      state: state,
      onClickRemove: function onClickRemove() {
        return onClickRemoveFile(file.id);
      },
      onClickCancel: function onClickCancel() {
        return onClickCancelFile(file.id);
      }
    });
  })));
});
var _default = FileUploadTable;
exports["default"] = _default;
//# sourceMappingURL=FileUploadTable.js.map