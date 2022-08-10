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
import { decorate, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Header, Segment, List, Button } from 'semantic-ui-react';

import { gotoFn } from '@amzn/base-ui/dist/helpers/routing';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';

i18next.use(initReactI18next);

// expected props
// wizard (via props)
class StartStep extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  get wizard() {
    return this.props.wizard;
  }

  handleNext = () => {
    this.wizard.advanceToNextStep();
  };

  handleCancel = () => {
    const goto = gotoFn(this);
    this.wizard.reset();

    goto('/data-sources');
  };

  render() {
    return (
      <>
        <Header as="h3" icon textAlign="center" className="mt2" color="grey">
          {i18next.t('registerStudies', { ns: 'data' })}
        </Header>
        <Segment clearing className="pt4 pr4 pl4 pb3">
          {this.renderContent('beforeYouStart')}
          {this.renderContent('whatIsNext')}
          {this.renderContent('limitations')}

          <div className="mt4">
            <Button
              floated="right"
              className="ml2"
              primary
              icon="right arrow"
              labelPosition="right"
              content={i18next.t('next')}
              onClick={this.handleNext}
            />
            <Button floated="right" className="ml2" content={i18next.t('cancel')} onClick={this.handleCancel} />
          </div>
        </Segment>
      </>
    );
  }

  renderContent(key) {
    const startStep = i18next.t('startStep', { ns: 'data' });
    if (startStep[key] === undefined) {
      return <></>;
    }
    const content = startStep[key];
    const header = (
      <Header as="h3" className="mb0">
        {content.header}
      </Header>
    );
    const subheader =
      content.subheader === undefined ? <></> : <p className="ui large list mt2">{content.subheader}</p>;
    const list = (
      <List bulleted size="large">
        {content.p.map(text => (
          <List.Item>{text}</List.Item>
        ))}
      </List>
    );

    return (
      <>
        {header}
        {subheader}
        {list}
      </>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(StartStep, {
  wizard: computed,
  handleCancel: action,
  handleNext: action,
});

export default withTranslation()(inject()(withRouter(observer(StartStep))));
