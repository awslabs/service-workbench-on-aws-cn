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

import React from 'react';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Segment } from 'semantic-ui-react';

import Input from '@amzn/base-ui/dist/parts/helpers/fields/Input';
import TextArea from '@amzn/base-ui/dist/parts/helpers/fields/TextArea';
import Form from '@amzn/base-ui/dist/parts/helpers/fields/Form';

import { displayError, displaySuccess } from '@amzn/base-ui/dist/helpers/notification';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import { createForm } from '@amzn/base-ui/dist/helpers/form';
import { getAddEnvTypeBasicInfoFormFields } from '../../../models/forms/EnvTypeBasicInfoForm';
import EnvTypeStatusEnum from '../../../models/environment-types/EnvTypeStatusEnum';

i18next.use(initReactI18next);
class BasicInfoStep extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      const fields = getAddEnvTypeBasicInfoFormFields(props.envType);
      this.fields = fields;
    });
  }

  render() {
    const fields = this.fields;
    fields.name.label = i18next.t('addEnvTypeBasicInfoForm.name.label', { ns: 'types' });
    fields.name.placeholder = i18next.t('addEnvTypeBasicInfoForm.name.placeholder', { ns: 'types' });
    fields.name.extra.explain = i18next.t('addEnvTypeBasicInfoForm.name.explain', { ns: 'types' });
    fields.desc.label = i18next.t('addEnvTypeBasicInfoForm.desc.label', { ns: 'types' });
    fields.desc.placeholder = i18next.t('addEnvTypeBasicInfoForm.desc.placeholder', { ns: 'types' });
    fields.desc.extra.explain = i18next.t('addEnvTypeBasicInfoForm.desc.explain', { ns: 'types' });

    const form = createForm(fields);
    return (
      <Segment clearing className="mt3 p3">
        <Form form={form} onCancel={this.props.onCancel} onSuccess={this.handleFormSubmission}>
          {({ processing, onCancel }) => (
            <>
              {this.renderFormFields({ form, processing, onCancel })}
              {this.renderActionButtons({ processing, onCancel })}
            </>
          )}
        </Form>
      </Segment>
    );
  }

  renderActionButtons({ processing, onCancel }) {
    const isEditing = this.isEditAction();
    return (
      <div className="right-align">
        <Button basic color="grey" disabled={processing} onClick={onCancel}>
          {i18next.t('cancel')}
        </Button>
        <Button
          className="ml2"
          primary
          content={
            isEditing
              ? i18next.t('workspaceType.save', { ns: 'types' })
              : i18next.t('workspaceType.import', { ns: 'types' })
          }
          disabled={processing}
          // Every wizard step page has has it's own form
          // The submit handler is responsible for saving the information and/or navigating to the next step (if there is next step)
          type="submit"
        />
      </div>
    );
  }

  isEditAction() {
    return this.props.workspaceTypeAction === 'edit';
  }

  isImportAction() {
    return this.props.workspaceTypeAction === 'import';
  }

  renderFormFields({ form, processing }) {
    const nameField = form.$('name');
    const descField = form.$('desc');
    return (
      <>
        <Input field={nameField} disabled={processing} />
        <TextArea field={descField} disabled={processing} />
      </>
    );
  }

  handleFormSubmission = async form => {
    const envType = this.props.envType;
    const envTypesStore = this.props.envTypesStore;

    const name = form.$('name').value;
    const desc = form.$('desc').value;

    let savedEnvType;
    try {
      if (this.isImportAction()) {
        // if importing new env type then call "create"
        savedEnvType = await envTypesStore.createEnvType({
          id: envType.id,
          name,
          desc,
          status: EnvTypeStatusEnum.notApproved,
          product: envType.product,
          provisioningArtifact: envType.provisioningArtifact,
          params: envType.params,
        });
        displaySuccess(i18next.t('workspaceType.imported', { ns: 'types', name: envType.name }), i18next.t('success'));

        // Navigate to next step (if there is) or call onEnvTypeSaveComplete to notify
        // that this was last step and we are done creating env type
        const wizardModel = this.props.wizardModel;
        if (wizardModel.hasNext) {
          wizardModel.next();
        } else {
          await this.props.onEnvTypeSaveComplete(savedEnvType);
        }
      } else {
        // if updating existing env type then call "update" and call onEnvTypeSaveComplete to notify that we are done
        // saving env type
        savedEnvType = await envTypesStore.updateEnvType({
          ...envType,
          name,
          desc,
        });
        displaySuccess(i18next.t('workspaceType.updated', { ns: 'types', name: envType.name }), i18next.t('success'));

        await this.props.onEnvTypeSaveComplete(savedEnvType);
      }
    } catch (error) {
      displayError(error);
    }
  };
}
export default withTranslation()(observer(BasicInfoStep));
