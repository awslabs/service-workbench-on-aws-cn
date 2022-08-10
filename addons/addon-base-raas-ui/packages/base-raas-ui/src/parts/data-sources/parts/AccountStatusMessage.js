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
import { decorate, computed, runInAction, observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';

i18next.use(initReactI18next);
// expected props
// - account (via props)
// - onCancel (via props) a call back function when the user clicks on Done
class AccountStatusMessage extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.expanded = false;
    });
  }

  get account() {
    return this.props.account;
  }

  handleExpand = () => {
    this.expanded = !this.expanded;
  };

  handleCancel = () => {
    if (!_.isFunction(this.props.onCancel)) return;
    this.props.onCancel();
  };

  render() {
    return (
      <div className="mt2 mb2 animated fadeIn">
        {this.renderAvailable()}
        {this.renderPending()}
        {this.renderError()}
      </div>
    );
  }

  renderAvailable() {
    const account = this.account;

    if (!account.reachableState) return null;
    const expanded = this.expanded;
    const expandText = expanded
      ? i18next.t('accountCard.accountStatusMsg.less', { ns: 'data' })
      : i18next.t('accountCard.accountStatusMsg.more', { ns: 'data' });
    const msg = account.statusMessageInfo.message;
    const hasMsg = !_.isEmpty(msg);

    if (!hasMsg) {
      return (
        <Message positive onDismiss={this.handleCancel}>
          <Message.Header>{i18next.t('accountCard.accountStatusMsg.available.header', { ns: 'data' })}</Message.Header>
          <p>{i18next.t('accountCard.accountStatusMsg.available.subheader1', { ns: 'data' })}</p>
        </Message>
      );
    }

    return (
      <Message warning>
        <Message.Header>{i18next.t('accountCard.accountStatusMsg.available.header', { ns: 'data' })}</Message.Header>
        <p>
          {i18next.t('accountCard.accountStatusMsg.available.subheader2', { ns: 'data' })}
          <span className="underline ml1 cursor-pointer" onClick={this.handleExpand}>
            {expandText}
          </span>
        </p>
        {expanded && (
          <>
            <p>{i18next.t('accountCard.accountStatusMsg.available.subheader3', { ns: 'data', account: account.id })}</p>
            <p>{msg}</p>
          </>
        )}
      </Message>
    );
  }

  renderPending() {
    const account = this.account;
    const expanded = this.expanded;
    const expandText = expanded
      ? i18next.t('accountCard.accountStatusMsg.less', { ns: 'data' })
      : i18next.t('accountCard.accountStatusMsg.more', { ns: 'data' });
    const msg = account.statusMessageInfo.message;

    if (!account.pendingState) return null;

    return (
      <Message warning>
        <Message.Header>{i18next.t('accountCard.accountStatusMsg.pending.header', { ns: 'data' })}</Message.Header>
        <p>
          {i18next.t('accountCard.accountStatusMsg.pending.subheader1', { ns: 'data' })}
          <span className="underline ml1 cursor-pointer" onClick={this.handleExpand}>
            {expandText}
          </span>
        </p>
        {expanded && (
          <div className="mt2 animated fadeIn">
            <Message.Header>
              {i18next.t('accountCard.accountStatusMsg.pending.subheader2', { ns: 'data' })}
            </Message.Header>
            {this.renderTips()}
          </div>
        )}
        {expanded && !_.isEmpty(msg) && (
          <div className="mt2">
            <Message.Header>
              {i18next.t('accountCard.accountStatusMsg.pending.subheader3', { ns: 'data' })}
            </Message.Header>
            <p>{msg}</p>
          </div>
        )}
      </Message>
    );
  }

  renderError() {
    const account = this.account;
    const expanded = this.expanded;
    const expandText = expanded
      ? i18next.t('accountCard.accountStatusMsg.less', { ns: 'data' })
      : i18next.t('accountCard.accountStatusMsg.more', { ns: 'data' });
    const msg = account.statusMessageInfo.message;

    if (!account.errorState) return null;

    return (
      <Message negative>
        <Message.Header>{i18next.t('accountCard.accountStatusMsg.error.header', { ns: 'data' })}</Message.Header>
        <p>
          {i18next.t('accountCard.accountStatusMsg.error.subheader1', { ns: 'data' })}
          <span className="underline ml1 cursor-pointer" onClick={this.handleExpand}>
            {expandText}
          </span>
        </p>
        {expanded && this.renderTips()}
        {expanded && !_.isEmpty(msg) && (
          <div className="mt2">
            <Message.Header>
              {i18next.t('accountCard.accountStatusMsg.error.subheader2', { ns: 'data' })}
            </Message.Header>
            <p>{msg}</p>
          </div>
        )}
      </Message>
    );
  }

  renderTips() {
    const account = this.account;
    return (
      <Message.List>
        {i18next
          .t('accountCard.accountStatusMsg.tips', { ns: 'data', account: account.id, region: account.mainRegion })
          .map(text => (
            <Message.Item>{text}</Message.Item>
          ))}
      </Message.List>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(AccountStatusMessage, {
  account: computed,
  expanded: observable,
  handleExpand: action,
  handleCancel: action,
});

export default withTranslation()(inject()(withRouter(observer(AccountStatusMessage))));
