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
/* eslint-disable max-classes-per-file */
import React from 'react';
import { decorate, computed } from 'mobx';
import { observer, inject, Observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Header, Label, Popup, TextArea, Tab, Form, Icon, Segment } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import By from '@amzn/base-ui/dist/parts/helpers/By';
import { displaySuccess } from '@amzn/base-ui/dist/helpers/notification';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import KeyPairButtons from './parts/KeyPairButtons';

i18next.use(initReactI18next);

// This component is used with the TabPane to replace the default Segment wrapper since
// we don't want to display the border.
// eslint-disable-next-line react/prefer-stateless-function
class TabPaneWrapper extends React.Component {
  render() {
    return <>{this.props.children}</>;
  }
}

// expected props
// - keyPair (via prop)
class KeyPairCard extends React.Component {
  get keyPair() {
    return this.props.keyPair;
  }

  render() {
    const keyPair = this.keyPair;

    return (
      <>
        {this.renderStatus(keyPair)}
        {this.renderTitle(keyPair)}
        {keyPair.desc || i18next.t('noDescription', { ns: 'ssh' })}
        {this.renderTabs(keyPair)}
      </>
    );
  }

  renderButtons(keyPair) {
    return <KeyPairButtons keyPair={keyPair} />;
  }

  renderTabs(keyPair) {
    const panes = [
      {
        menuItem: i18next.t('public', { ns: 'ssh' }),
        render: () => (
          <Tab.Pane attached={false} key="public-key" as={TabPaneWrapper}>
            <Observer>{() => this.renderPublicKey(keyPair)}</Observer>
          </Tab.Pane>
        ),
      },
      {
        menuItem: i18next.t('private', { ns: 'ssh' }),
        render: () => (
          <Tab.Pane attached={false} key="private-key" as={TabPaneWrapper}>
            <Observer>{() => this.renderPrivateKey()}</Observer>
          </Tab.Pane>
        ),
      },
    ];

    return <Tab className="mt2" menu={{ secondary: true, pointing: true }} renderActiveOnly panes={panes} />;
  }

  renderDesc(keyPair) {
    return <p>{keyPair.desc || i18next.t('noDescription', { ns: 'ssh' })}</p>;
  }

  renderPublicKey(keyPair) {
    return (
      <div className="mt2">
        <Form className="flex">
          <TextArea className="flex-auto" rows={10} value={keyPair.publicKey} />
          <Popup
            content={i18next.t('copy')}
            trigger={
              <CopyToClipboard
                className="ml2 mr0 mt2"
                text={keyPair.publicKey}
                style={{ cursor: 'pointer' }}
                onCopy={() => displaySuccess(i18next.t('copied'), i18next.t('done'))}
              >
                <Icon name="copy outline" size="large" />
              </CopyToClipboard>
            }
          />
        </Form>
      </div>
    );
  }

  renderPrivateKey() {
    return (
      <Segment placeholder>
        <Header icon className="color-grey">
          <Icon name="key" />
          {i18next.t('notAvailable.header', { ns: 'ssh' })}
          <Header.Subheader>{i18next.t('notAvailable.subheader', { ns: 'ssh' })}</Header.Subheader>
        </Header>
      </Segment>
    );
  }

  renderStatus(keyPair) {
    const status = keyPair.status;
    const color = keyPair.statusInfo.color;

    return (
      <div style={{ cursor: 'default' }}>
        <Popup
          trigger={
            <Label attached="top left" size="mini" color={color}>
              {i18next.t(`status.${status}.display`, { ns: 'ssh' })}
            </Label>
          }
        >
          {i18next.t(`status.${status}.tip`, { ns: 'ssh' })}
        </Popup>
      </div>
    );
  }

  renderTitle(keyPair) {
    return (
      <div className="clearfix flex">
        <Header as="h3" className="mt1 flex-auto">
          {keyPair.name}
          <Header.Subheader>
            <span className="fs-8 color-grey">
              {i18next.t('created')} <TimeAgo date={keyPair.createdAt} className="mr2" />{' '}
              <By uid={keyPair.createdBy} className="mr2" />
            </span>
            <span className="fs-8 color-grey mr2"> {keyPair.id}</span>
          </Header.Subheader>
        </Header>
        <KeyPairButtons keyPair={keyPair} />
      </div>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(KeyPairCard, {
  keyPair: computed,
});

export default withTranslation()(inject()(withRouter(observer(KeyPairCard))));
