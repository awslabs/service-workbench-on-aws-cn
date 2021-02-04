"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNameValueForm = getNameValueForm;

var _lodash = _interopRequireDefault(require("lodash"));

var _form = require("../../helpers/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getNameValueForm(_ref) {
  var name = _ref.name,
      value = _ref.value,
      nameLabel = _ref.nameLabel,
      namePlaceholder = _ref.namePlaceholder,
      valueLabel = _ref.valueLabel,
      valuePlaceholder = _ref.valuePlaceholder;
  var fields = {
    name: {
      label: _lodash["default"].isNil(nameLabel) ? 'Name' : nameLabel,
      placeholder: _lodash["default"].isNil(namePlaceholder) ? 'Name' : namePlaceholder,
      rules: 'required',
      value: name
    },
    value: {
      label: _lodash["default"].isNil(valueLabel) ? 'Value' : valueLabel,
      placeholder: _lodash["default"].isNil(valuePlaceholder) ? 'Value' : valuePlaceholder,
      rules: 'required',
      value: value
    }
  };
  return (0, _form.createForm)(fields);
} // eslint-disable-next-line import/prefer-default-export
//# sourceMappingURL=NameValueForm.js.map