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
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Container, Header, Icon, Tab, Grid } from 'semantic-ui-react';

import BasicProgressPlaceholder from '@amzn/base-ui/dist/parts/helpers/BasicProgressPlaceholder';
import { swallowError } from '@amzn/base-ui/dist/helpers/utils';
import ErrorBox from '@amzn/base-ui/dist/parts/helpers/ErrorBox';
import { isStoreError, isStoreLoading, isStoreReady } from '@amzn/base-ui/dist/models/BaseStore';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import { toIdpOptions } from '../../models/forms/UserFormUtils';
import DragDrop from './DragDrop';
import AddSingleUser from './AddSingleUser';

i18next.use(initReactI18next);

// expected props
// - authenticationProviderConfigsStore (via injection)
class AddUser extends React.Component {
  componentDidMount() {
    swallowError(this.getStore().load());
  }

  render() {
    const store = this.getStore();
    let content = null;
    if (isStoreError(store)) {
      content = <ErrorBox error={store.error} className="p0 mb3" />;
    } else if (isStoreLoading(store)) {
      content = <BasicProgressPlaceholder />;
    } else if (isStoreReady(store)) {
      content = this.renderMain();
    }

    return (
      <Container className="mt3 mb4">
        {this.renderTitle()}
        {content}
      </Container>
    );
  }

  renderTitle() {
    return (
      <div className="mb3 flex">
        <Header as="h3" className="color-grey mt1 mb0 flex-auto">
          <Icon name="user" className="align-top" />
          <Header.Content className="left-align">
            {i18next.t('add')}
            {i18next.t(' ')}
            {i18next.t('user', { ns: 'users' })}
          </Header.Content>
        </Header>
      </div>
    );
  }

  renderMain() {
    const identityProviderOptions = this.getIdentityProviderOptions();
    const panes = [
      {
        menuItem: `${i18next.t('add')}${i18next.t(' ')}${i18next.t('single', { ns: 'users' })}${i18next.t(
          ' ',
        )}${i18next.t('user', { ns: 'users' })}`,
        render: () => (
          <Tab.Pane basic attached={false}>
            <div className="mt3 animated fadeIn">
              <AddSingleUser />
            </div>
          </Tab.Pane>
        ),
      },
      {
        menuItem: `${i18next.t('add')}${i18next.t(' ')}${i18next.t('multiple', { ns: 'users' })}${i18next.t(
          ' ',
        )}${i18next.t('user', { ns: 'users' })}`,
        render: () => (
          <Tab.Pane basic attached={false}>
            <DragDrop identityProviderOptions={identityProviderOptions} />
          </Tab.Pane>
        ),
      },
    ];
    return (
      <Grid>
        <Grid.Column>
          <Tab defaultActiveIndex={0} className="mt2" menu={{ secondary: true, pointing: true }} panes={panes} />
        </Grid.Column>
      </Grid>
    );
  }

  getIdentityProviderOptions() {
    return toIdpOptions(this.getStore().list);
  }

  getStore() {
    return this.props.authenticationProviderConfigsStore;
  }
}

export default withTranslation()(inject('authenticationProviderConfigsStore')(withRouter(observer(AddUser))));
