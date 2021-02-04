"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddProjectFormFields = getAddProjectFormFields;
exports.getAddProjectForm = getAddProjectForm;

var _form = require("../../helpers/form");

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
var addProjectFormFields = {
  id: {
    label: 'Project Name',
    placeholder: 'Type name for this project',
    rules: 'required|string|between:1,300'
  },
  indexId: {
    label: 'Index ID',
    rules: 'required|string'
  },
  description: {
    label: 'Description',
    placeholder: 'Type description for this project',
    rules: 'string|between:1,3000'
  },
  projectAdmins: {
    label: 'Project Admins',
    placeholder: 'Users who automatically have full control of workspaces associated with this project',
    explain: ' ',
    rules: 'array'
  }
};

function getAddProjectFormFields() {
  return addProjectFormFields;
}

function getAddProjectForm() {
  return (0, _form.createForm)(addProjectFormFields);
}
//# sourceMappingURL=AddProjectForm.js.map