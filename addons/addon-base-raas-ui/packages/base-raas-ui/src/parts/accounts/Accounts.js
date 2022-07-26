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
import { Tab, Segment, Container } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import AwsAccountsList from './AwsAccountsList';
import IndexesList from './IndexesList';
import ProjectsList from '../projects/ProjectsList';

i18next.use(initReactI18next);

// eslint-disable-next-line react/prefer-stateless-function
class Accounts extends React.Component {
  render() {
    const panes = [
      { menuItem: i18next.t('project.projects', { ns: 'accounts' }), render: () => <ProjectsList /> },
      { menuItem: i18next.t('index.indexes', { ns: 'accounts' }), render: () => <IndexesList /> },
      { menuItem: i18next.t('accounts', { ns: 'accounts' }), render: () => <AwsAccountsList /> },
    ];
    return (
      <Container className="mt3 animated fadeIn">
        <Segment basic className="p0">
          <Tab panes={panes} />
        </Segment>
      </Container>
    );
  }
}

export default withTranslation()(
  inject('userRolesStore', 'indexesStore', 'awsAccountsStore')(withRouter(observer(Accounts))),
);
