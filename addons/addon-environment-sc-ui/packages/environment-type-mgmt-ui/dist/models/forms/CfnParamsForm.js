"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCfnParamsForm = getCfnParamsForm;

var _lodash = _interopRequireDefault(require("lodash"));

var _form = require("@aws-ee/base-ui/dist/helpers/form");

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

/**
 * Creates a MobX React Form with field for each cfn param. The fields are pre-populated with existing values.
 * @param cfnParams Array of AWS CloudFormation Input Parameters. See below example for the shape of this object
 *    [{
            "DefaultValue": "ml.t3.xlarge",
            "IsNoEcho": false,
            "ParameterConstraints": {
                "AllowedValues": []
            },
            "ParameterType": "String",
            "Description": "EC2 instance type to launch",
            "ParameterKey": "InstanceType"
        }]
 *
 * @param existingParamValues Array containing key/value pairs for existing values for the params. Has the shape [{key,value}]
 */
function getCfnParamsForm(cfnParams, existingParamValues) {
  var fields = {};

  _lodash["default"].forEach(cfnParams, function (_ref) {
    var ParameterKey = _ref.ParameterKey,
        Description = _ref.Description,
        DefaultValue = _ref.DefaultValue;
    var existingValue = _lodash["default"].get(_lodash["default"].find(existingParamValues, {
      key: ParameterKey
    }), 'value') || DefaultValue;
    fields[ParameterKey] = {
      label: ParameterKey,
      extra: {
        explain: Description
      },
      value: existingValue,
      rules: 'required'
    };
  });

  return (0, _form.createForm)(fields);
} // eslint-disable-next-line import/prefer-default-export
//# sourceMappingURL=CfnParamsForm.js.map