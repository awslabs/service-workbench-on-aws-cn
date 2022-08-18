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
import { decorate, computed, runInAction, observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Header, Divider, List, Form, TextArea, Message, Button } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';

import YesNo from '@amzn/base-ui/dist/parts/helpers/fields/YesNo';
import SelectionButtons from '@amzn/base-ui/dist/parts/helpers/fields/SelectionButtons';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import CopyToClipboard from '../../helpers/CopyToClipboard';
import { createForm } from '../../../helpers/form';

i18next.use(initReactI18next);

// expected props
// - account (via prop)
// - largeText (via prop) default to false
class AccountCfnPanel extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      // We want to create a simple one button form
      const account = props.account || {};
      const { hasUpdateStackUrl } = account.stackInfo || {};
      const fields = {
        managed: {
          value: 'admin',
        },
        createOrUpdate: {
          extra: {
            yesLabel: i18next.t('accountCard.accountCfnPanel.stack.create', { ns: 'data' }),
            noLabel: i18next.t('accountCard.accountCfnPanel.stack.update', { ns: 'data' }),
            yesValue: 'create',
            noValue: 'update',
            showHeader: false,
          },
          value: hasUpdateStackUrl ? 'update' : 'create',
        },
      };
      this.form = createForm(fields);
    });
  }

  get account() {
    return this.props.account || {};
  }

  get stackInfo() {
    return this.account.stackInfo || {};
  }

  get largeText() {
    return this.props.largeText;
  }

  get textSize() {
    return this.largeText ? 'large' : 'medium';
  }

  render() {
    const adminOptions = [
      {
        text: i18next.t('accountCard.accountCfnPanel.adminOptions.admin', { ns: 'data' }),
        value: 'admin',
      },
      {
        text: i18next.t('accountCard.accountCfnPanel.adminOptions.notAdmin', { ns: 'data' }),
        value: 'notAdmin',
      },
    ];

    const { id } = this.account;
    const form = this.form;
    const field = form.$('managed');

    return (
      <>
        {this.renderCfnTemplate()}
        <div className="pr3">
          <Divider />
          <div className="flex justify-between">
            <Header as="h4" className="mb0 mt1 flex-auto">
              {i18next.t('accountCard.accountCfnPanel.account', { ns: 'data' })} # {id}
            </Header>
            <SelectionButtons field={field} options={adminOptions} show="buttonsOnly" className="mb0" />
          </div>
          <Divider />
        </div>
        {this.renderSteps()}
      </>
    );
  }

  renderCfnTemplate() {
    const stackInfo = this.stackInfo;
    const { name, formattedTemplate } = stackInfo;

    return (
      <Form className="mb3">
        <Header as="h4" className="mb2 mt3">
          {i18next.t('accountCard.accountCfnPanel.stack.name', { ns: 'data' })}
        </Header>
        <div className="mb2 flex">
          <div className="flex-auto">
            <Form.Input fluid value={name} size="large" />
          </div>
          <div className="mt1 p0">
            <CopyToClipboard text={name} />
          </div>
        </div>
        <div className="mb2 flex">
          <div className="flex-auto">
            <TextArea value={formattedTemplate} rows={10} />
          </div>
          <div className="mt1 p0">
            <CopyToClipboard text={formattedTemplate} />
          </div>
        </div>
      </Form>
    );
  }

  renderSteps() {
    // We need to determine if this is for creating the stack or updating the stack
    const form = this.form;
    const stackInfo = this.stackInfo;
    const { hasUpdateStackUrl } = stackInfo;
    const field = form.$('createOrUpdate');
    const update = field.value === 'update';
    const hasAdminAccess = form.$('managed').value === 'admin';

    return (
      <>
        <div className="flex justify-between pt3 pb0 pr3 pl1">
          <Header size="medium" className="mb2">
            {i18next.t('accountCard.accountCfnPanel.steps.header', { ns: 'data' })}
          </Header>
          {hasUpdateStackUrl && <YesNo field={field} className="mb0 mt0" />}
        </div>
        {!update && hasAdminAccess && this.renderCreateSteps()}
        {update && hasAdminAccess && this.renderUpdateSteps()}
        {!hasAdminAccess && this.renderEmailTemplate(update)}
      </>
    );
  }

  renderCreateSteps() {
    const account = this.account;
    const textSize = this.textSize;
    const stackInfo = this.stackInfo;
    const { id, mainRegion } = account;
    const { createStackUrl } = stackInfo;

    return (
      <div className="animated fadeIn">
        <List ordered size={textSize}>
          <List.Item>
            {i18next.t('accountCard.accountCfnPanel.steps.create.0', { ns: 'data' })}
            <Message className="mr3 mt2 mb2">
              <Message.Header>{i18next.t('accountCard.accountCfnPanel.steps.create.1', { ns: 'data' })}</Message.Header>
              <p>
                {i18next.t('accountCard.accountCfnPanel.steps.create.2', {
                  ns: 'data',
                  account: id,
                  region: mainRegion,
                })}
              </p>
            </Message>
          </List.Item>
          <List.Item>
            {i18next.t('accountCard.accountCfnPanel.steps.create.3', { ns: 'data' })}
            <div className="mb0 flex mt2">
              <div className="flex-auto">
                <Button fluid as="a" target="_blank" href={createStackUrl} color="blue" rel="noopener noreferrer">
                  {i18next.t('accountCard.accountCfnPanel.steps.create.4', { ns: 'data' })}
                </Button>
                {this.renderExpires(stackInfo)}
              </div>
              <div className="mt1 p0">
                <CopyToClipboard text={createStackUrl} />
              </div>
            </div>
          </List.Item>
          <List.Item>{i18next.t('accountCard.accountCfnPanel.steps.create.5', { ns: 'data' })}</List.Item>
        </List>
      </div>
    );
  }

  renderUpdateSteps() {
    const account = this.account;
    const stackInfo = this.stackInfo;
    const textSize = this.textSize;
    const { id, mainRegion } = account;
    const { updateStackUrl, cfnConsoleUrl } = stackInfo;

    return (
      <div className="animated fadeIn">
        <List ordered size={textSize}>
          <List.Item>
            {i18next.t('accountCard.accountCfnPanel.steps.update.0', { ns: 'data' })}
            <Message className="mr3 mt2 mb2">
              <Message.Header>{i18next.t('accountCard.accountCfnPanel.steps.update.1', { ns: 'data' })}</Message.Header>
              <p>
                {i18next.t('accountCard.accountCfnPanel.steps.update.2', {
                  ns: 'data',
                  account: id,
                  region: mainRegion,
                })}
              </p>
            </Message>
          </List.Item>
          <List.Item>
            {i18next.t('accountCard.accountCfnPanel.steps.update.3', { ns: 'data' })}
            <a target="_blank" rel="noopener noreferrer" href={cfnConsoleUrl}>
              {i18next.t('accountCard.accountCfnPanel.steps.update.4', { ns: 'data' })}
            </a>
            <Message className="mr3 mt2 mb2">
              <p>{i18next.t('accountCard.accountCfnPanel.steps.update.5', { ns: 'data' })}</p>
            </Message>
          </List.Item>
          <List.Item>
            {i18next.t('accountCard.accountCfnPanel.steps.update.6', { ns: 'data' })}
            <div className="mb0 flex mt2">
              <div className="flex-auto">
                <Button fluid as="a" target="_blank" href={updateStackUrl} color="blue" rel="noopener noreferrer">
                  {i18next.t('accountCard.accountCfnPanel.steps.update.7', { ns: 'data' })}
                </Button>
                {this.renderExpires(stackInfo)}
              </div>
              <div className="mt1 p0">
                <CopyToClipboard text={updateStackUrl} />
              </div>
            </div>
          </List.Item>
          <List.Item>{i18next.t('accountCard.accountCfnPanel.steps.update.8', { ns: 'data' })}</List.Item>
        </List>
      </div>
    );
  }

  renderEmailTemplate(update = false) {
    const account = this.account;
    const stackInfo = this.stackInfo;
    const textSize = this.textSize;
    const emailTemplate = update ? account.updateStackEmailTemplate : account.createStackEmailTemplate;

    return (
      <div className="animated fadeIn">
        <List ordered size={textSize}>
          <List.Item>{i18next.t('accountCard.accountCfnPanel.steps.email.0', { ns: 'data' })}</List.Item>
          <Form className="mb3">
            <div className="flex justify-between">
              <Header as="h4" className="mb2 mt2">
                {i18next.t('accountCard.accountCfnPanel.steps.email.1', { ns: 'data' })}
              </Header>
              <div className="mt2 mr4">{this.renderExpires(stackInfo)}</div>
            </div>
            <div className="mb2 flex">
              <div className="flex-auto">
                <TextArea value={emailTemplate} rows={20} />
              </div>
              <div className="mt1 p0">
                <CopyToClipboard text={emailTemplate} />
              </div>
            </div>
          </Form>
        </List>
      </div>
    );
  }

  renderExpires(stackInfo) {
    const { urlExpiry, expired } = stackInfo;

    if (expired) {
      return (
        <div className="fs-9 center color-red mt1">
          {i18next.t('expired')} <TimeAgo date={urlExpiry} />
        </div>
      );
    }

    return (
      <div className="fs-9 center mt1">
        {i18next.t('expires')} <TimeAgo date={urlExpiry} />
      </div>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(AccountCfnPanel, {
  account: computed,
  stackInfo: computed,
  largeText: computed,
  textSize: computed,
  form: observable,
});

export default withTranslation()(inject()(withRouter(observer(AccountCfnPanel))));
