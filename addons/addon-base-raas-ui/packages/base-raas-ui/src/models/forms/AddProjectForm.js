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

import { createForm } from '../../helpers/form';

const addProjectFormFields = {
  id: {
    label: 'formFields.addProject.id.label',
    placeholder: 'formFields.addProject.id.placeholder',
    rules: 'required|string|between:1,300',
  },
  indexId: {
    label: 'formFields.addProject.indexId.label',
    rules: 'required|string',
  },
  description: {
    label: 'formFields.addProject.description.label',
    placeholder: 'formFields.addProject.description.placeholder',
    rules: 'string|between:1,3000',
  },
  projectAdmins: {
    label: 'formFields.addProject.projectAdmins.label',
    placeholder: 'formFields.addProject.projectAdmins.placeholder',
    explain: ' ',
    rules: 'array',
  },
};

function getAddProjectFormFields() {
  return addProjectFormFields;
}

function getAddProjectForm() {
  return createForm(addProjectFormFields);
}

export { getAddProjectFormFields, getAddProjectForm };
