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
import { decorate, computed, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Segment, Button, Header, List } from 'semantic-ui-react';

import { gotoFn } from '@amzn/base-ui/dist/helpers/routing';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import AccountCfnPanel from '../parts/AccountCfnPanel';

i18next.use(initReactI18next);

// expected props
// - wizard (via prop)
class CfnStep extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  get wizard() {
    return this.props.wizard;
  }

  get account() {
    return this.wizard.processedAccount;
  }

  handleNext = () => {
    const goto = gotoFn(this);
    this.wizard.reset();

    goto('/data-sources');
  };

  render() {
    const account = this.account;
    return (
      <>
        <Header as="h3" icon textAlign="center" className="mt2" color="grey">
          {i18next.t('registerStudies', { ns: 'data' })}
        </Header>
        <Segment clearing className="p3">
          {this.renderWhatIsNext()}
          <AccountCfnPanel account={account} largeText />
          {this.renderButtons()}
        </Segment>
      </>
    );
  }

  renderWhatIsNext() {
    const content = i18next.t('cfnStep.whatIsNext', { ns: 'data' });
    return (
      <>
        <Header as="h3" className="mb0">
          {content.header}
        </Header>
        <List bulleted size="large">
          {content.p.map(text => (
            <List.Item>{text}</List.Item>
          ))}
        </List>
      </>
    );
  }

  renderButtons() {
    return (
      <div className="mt4">
        <Button floated="right" className="ml2" primary content={i18next.t('done')} onClick={this.handleNext} />
      </div>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(CfnStep, {
  wizard: computed,
  account: computed,
  handleNext: action,
});

export default withTranslation()(inject()(withRouter(observer(CfnStep))));
