"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateInternalEnvForm = getCreateInternalEnvForm;

var _lodash = _interopRequireDefault(require("lodash"));

var _form = require("../../helpers/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getFields = function getFields(_ref) {
  var projectIdOptions = _ref.projectIdOptions,
      cidr = _ref.cidr;
  var fields = {
    name: {
      label: 'Name',
      placeholder: 'Type a name for this research workspace',
      extra: {
        explain: 'Name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters'
      },
      rules: 'required|string|between:3,128|regex:/^[A-Za-z][A-Za-z0-9-]+$/'
    },
    description: {
      label: 'Description',
      placeholder: 'The description of this research workspace',
      rules: 'required|string|between:3,2048'
    },
    projectId: {
      label: 'Project ID',
      placeholder: 'The project ID associated with this study',
      rules: ['required', 'string', 'min:1', 'max:100'],
      extra: {
        options: projectIdOptions
      }
    },
    envTypeConfigId: {
      label: 'Configuration',
      placeholder: 'The configuration for the research workspace',
      rules: 'required'
    }
  };

  if (!_lodash["default"].isUndefined(cidr)) {
    fields.cidr = {
      label: 'Restricted CIDR',
      extra: {
        explain: "This research workspace will only be reachable from this CIDR. You can get your organization's CIDR range from your IT department. The provided default is the CIDR that restricts to your IP address."
      },
      placeholder: 'The CIDR range to restrict research workspace access to',
      rules: 'required|cidr',
      value: cidr
    };
  }

  return fields;
};

function getCreateInternalEnvForm() {
  return (0, _form.createForm)(getFields.apply(void 0, arguments));
} // eslint-disable-next-line import/prefer-default-export
//# sourceMappingURL=CreateInternalEnvForm.js.map