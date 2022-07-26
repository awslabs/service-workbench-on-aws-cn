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

const addIndexFormFields = {
  id: {
    label: 'formFields.addIndex.id.label',
    placeholder: 'formFields.addIndex.id.placeholder',
    rules: 'required|string|between:1,300',
  },
  awsAccountId: {
    label: 'formFields.addIndex.awsAccountId.label',
    rules: 'required|string',
  },
  description: {
    label: 'formFields.addIndex.description.label',
    placeholder: 'formFields.addIndex.description.placeholder',
    rules: 'string|between:1,3000',
  },
};

function getAddIndexFormFields() {
  return addIndexFormFields;
}

function getAddIndexForm() {
  return createForm(addIndexFormFields);
}

export { getAddIndexFormFields, getAddIndexForm };
