"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderAppContainer = renderAppContainer;
exports.renderProgress = renderProgress;
exports.renderError = renderError;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

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
// Render the AppContainer component which will then ask plugins to provide the App component
function renderAppContainer(AppContainer, appContext) {
  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_mobxReact.Provider, appContext, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(AppContainer, null))), document.getElementById('root'));
} // Render a progress message


function renderProgress() {
  var progressContent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "Just one second"), "Great things are now happening, please wait!");

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
    text: true,
    className: "pt4"
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
    icon: true
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
    name: "circle notched",
    loading: true
  }), progressContent)), document.getElementById('root'));
} // Render an error message


function renderError(err) {
  var error = _lodash["default"].get(err, 'message', 'Unknown error');

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
    text: true,
    className: "pt4"
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
    negative: true
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "We have a problem"), /*#__PURE__*/_react["default"].createElement("p", null, error), /*#__PURE__*/_react["default"].createElement("p", null, "See if refreshing the browser will resolve your issue"))), document.getElementById('root'));
}
//# sourceMappingURL=render-utils.js.map