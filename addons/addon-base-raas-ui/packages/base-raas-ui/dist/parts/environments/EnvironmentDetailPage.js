"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../helpers/settings");

var _EnvironmentDetailPage = _interopRequireDefault(require("../environments-builtin/EnvironmentDetailPage"));

var _ScEnvironmentDetailPage = _interopRequireDefault(require("../environments-sc/ScEnvironmentDetailPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return _settings.enableBuiltInWorkspaces ? /*#__PURE__*/_react["default"].createElement(_EnvironmentDetailPage["default"], null) : /*#__PURE__*/_react["default"].createElement(_ScEnvironmentDetailPage["default"], null);
};

exports["default"] = _default;
//# sourceMappingURL=EnvironmentDetailPage.js.map