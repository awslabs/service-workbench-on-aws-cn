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

import _ from 'lodash';
import React from 'react';
import { observer } from 'mobx-react';
import { Button, Card, Container, Header, Icon, Modal, Segment } from 'semantic-ui-react';
import { action, computed, decorate, observable, runInAction } from 'mobx';
import { withRouter } from 'react-router-dom';

import ErrorBox from '@amzn/base-ui/dist/parts/helpers/ErrorBox';
import {
  isStoreEmpty,
  isStoreError,
  isStoreLoading,
  isStoreNotEmpty,
  isStoreReady,
} from '@amzn/base-ui/dist/models/BaseStore';
import BasicProgressPlaceholder from '@amzn/base-ui/dist/parts/helpers/BasicProgressPlaceholder';
import { swallowError } from '@amzn/base-ui/dist/helpers/utils';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import EnvTypeConfigCard from '../env-type-config/EnvTypeConfigCard';
import EnvTypeConfigEditor from '../env-type-config/EnvTypeConfigEditor';

i18next.use(initReactI18next);
class ConfigStep extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.processing = false;
      this.shouldShowEnvTypeConfigDialog = false;
    });
  }

  componentDidMount() {
    swallowError(this.envTypeConfigsStore.load());
  }

  render() {
    const store = this.envTypeConfigsStore;
    let content;
    if (isStoreError(store)) {
      content = <ErrorBox error={store.error} className="p0 mb3" />;
    } else if (isStoreLoading(store)) {
      content = <BasicProgressPlaceholder />;
    } else if (isStoreReady(store) && isStoreEmpty(store)) {
      content = this.renderEmpty();
    } else if (isStoreReady(store) && isStoreNotEmpty(store)) {
      content = this.renderMain();
    } else {
      content = null;
    }

    return <Container className="mt3 mb4">{content}</Container>;
  }

  renderEmpty() {
    return (
      <>
        {!this.shouldShowEnvTypeConfigDialog && (
          <Segment placeholder>
            <Header icon className="color-grey">
              <Icon name="settings" />
              {i18next.t('workspaceConf.empty.header', { ns: 'types' })}
              <Header.Subheader className="mt2">
                <p>{i18next.t('workspaceConf.empty.subheader', { ns: 'types' })}</p>
                <Button data-testid="add-config-button" basic color="blue" onClick={this.showEnvTypeConfigDialog}>
                  {i18next.t('workspaceConf.add', { ns: 'types' })}
                </Button>
              </Header.Subheader>
            </Header>
          </Segment>
        )}
        {this.shouldShowEnvTypeConfigDialog && this.renderConfigEditorDialog()}
        <div className="right-align">
          <Button basic color="grey" onClick={this.props.onCancel}>
            {i18next.t('cancel')}
          </Button>
        </div>
      </>
    );
  }

  renderMain() {
    return (
      <>
        <Segment basic>
          {!this.shouldShowEnvTypeConfigDialog && (
            <Button
              data-testid="add-config-button"
              className="ml3"
              basic
              color="blue"
              floated="right"
              onClick={this.showEnvTypeConfigDialog}
            >
              {i18next.t('workspaceConf.add', { ns: 'types' })}
            </Button>
          )}
          {this.renderEnvTypeConfigs()}
          {this.shouldShowEnvTypeConfigDialog && this.renderConfigEditorDialog()}
          {!this.shouldShowEnvTypeConfigDialog && this.renderActionButtons({ onCancel: this.props.onCancel })}
        </Segment>
      </>
    );
  }

  renderConfigEditorDialog() {
    // return (
    //   <EnvTypeConfigEditor onCancel={this.hideEnvTypeConfigDialog} envTypeConfigsStore={this.envTypeConfigsStore} onEnvTypeConfigSaveComplete={this.hideEnvTypeConfigDialog}/>
    // );
    const shouldShowEnvTypeConfigDialog = this.shouldShowEnvTypeConfigDialog;
    return (
      <Modal
        closeIcon
        open={shouldShowEnvTypeConfigDialog}
        onClose={this.hideEnvTypeConfigDialog}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size="large"
      >
        <EnvTypeConfigEditor
          onCancel={this.hideEnvTypeConfigDialog}
          envTypeConfigsStore={this.envTypeConfigsStore}
          envType={this.props.envType}
          onEnvTypeConfigSaveComplete={this.hideEnvTypeConfigDialog}
          action="create"
        />
      </Modal>
    );
  }

  showEnvTypeConfigDialog = () => {
    this.shouldShowEnvTypeConfigDialog = true;
    this.processing = false;
  };

  hideEnvTypeConfigDialog = () => {
    if (this.processing) return;
    this.shouldShowEnvTypeConfigDialog = false;
  };

  renderEnvTypeConfigs() {
    const list = this.envTypeConfigsStore.listAll;
    return (
      <Card.Group stackable itemsPerRow={3}>
        {_.map(list, envTypeConfig => {
          return (
            <EnvTypeConfigCard
              key={envTypeConfig.id}
              envTypeConfig={envTypeConfig}
              envType={this.props.envType}
              envTypeConfigsStore={this.envTypeConfigsStore}
            />
          );
        })}
      </Card.Group>
    );
  }

  renderActionButtons({ processing, onCancel }) {
    return (
      <div className="mt3">
        <div className="right-align">
          <Button data-testid="cancel-button" basic color="grey" onClick={onCancel}>
            {i18next.t('cancel')}
          </Button>
          <Button className="ml2" primary content={i18next.t('done')} disabled={processing} onClick={this.onNext} />
        </div>
      </div>
    );
  }

  isImportAction() {
    return this.props.workspaceTypeAction === 'import';
  }

  onNext = async () => {
    const wizardModel = this.props.wizardModel;
    const onEnvTypeSaveComplete = this.props.onEnvTypeSaveComplete;
    if (this.isImportAction() && wizardModel.hasNext) {
      wizardModel.next();
    } else if (_.isFunction(onEnvTypeSaveComplete)) {
      await onEnvTypeSaveComplete();
    }
  };

  get envTypeConfigsStore() {
    return this.props.envTypeConfigsStore;
  }
}
decorate(ConfigStep, {
  envTypeConfigsStore: computed,

  processing: observable,
  shouldShowEnvTypeConfigDialog: observable,

  showEnvTypeConfigDialog: action,
  hideEnvTypeConfigDialog: action,
});

export default withTranslation()(withRouter(observer(ConfigStep)));
