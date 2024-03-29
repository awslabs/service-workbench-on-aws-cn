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
import { Button, Container, Header, Icon, Label } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import ReactTable from 'react-table';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import { isStoreError, isStoreLoading } from '@amzn/base-ui/dist/models/BaseStore';
import ErrorBox from '@amzn/base-ui/dist/parts/helpers/ErrorBox';
import { createLink } from '@amzn/base-ui/dist/helpers/routing';
import BasicProgressPlaceholder from '@amzn/base-ui/dist/parts/helpers/BasicProgressPlaceholder';

i18next.use(initReactI18next);

class IndexesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getIndexesStore() {
    const store = this.props.indexesStore;
    store.load();
    return store;
  }

  getIndexes() {
    const store = this.getIndexesStore();
    return store.list;
  }

  renderMain() {
    const indexesData = this.getIndexes();
    const pageSize = indexesData.length;
    const pagination = indexesData.length > pageSize;
    return (
      <div>
        <ReactTable
          data={indexesData}
          showPagination={pagination}
          defaultPageSize={pageSize}
          className="-striped -highlight"
          filterable
          defaultFilterMethod={(filter, row) => {
            const columnValue = String(row[filter.id]).toLowerCase();
            const filterValue = filter.value.toLowerCase();
            return columnValue.indexOf(filterValue) >= 0;
          }}
          columns={[
            {
              Header: i18next.t('formFields.addIndex.id.label', { ns: 'accounts' }),
              accessor: 'id',
            },
            {
              Header: i18next.t('formFields.addIndex.awsAccountId.label', { ns: 'accounts' }),
              id: 'awsAccountId',
              accessor: row => this.props.awsAccountsStore.getNameForAccountId(row.awsAccountId),
            },
            {
              Header: i18next.t('formFields.addIndex.description.label', { ns: 'accounts' }),
              accessor: 'description',
            },
          ]}
        />
        <br />
      </div>
    );
  }

  goto(pathname) {
    const location = this.props.location;
    const link = createLink({ location, pathname });
    this.props.history.push(link);
  }

  handleAddIndex = () => {
    this.goto('/indexes/add');
  };

  renderHeader() {
    return (
      <div className="mb3 flex">
        <Header as="h3" className="color-grey mt1 mb0 flex-auto">
          <Icon name="briefcase" className="align-top" />
          <Header.Content className="left-align">
            {i18next.t('index.indexes', { ns: 'accounts' })}
            {this.renderTotal()}
          </Header.Content>
        </Header>
        <Button color="blue" size="medium" basic onClick={this.handleAddIndex}>
          {i18next.t('index.addIndex', { ns: 'accounts' })}
        </Button>
      </div>
    );
  }

  renderTotal() {
    return <Label circular>{this.getIndexes().length}</Label>;
  }

  render() {
    const store = this.getIndexesStore();
    let content;
    if (isStoreError(store)) {
      content = <ErrorBox error={store.error} />;
    } else if (isStoreLoading(store)) {
      content = <BasicProgressPlaceholder segmentCount={3} />;
    } else {
      content = this.renderMain();
    }
    return (
      <Container className="mt3 animated fadeIn">
        {this.renderHeader()}
        {content}
      </Container>
    );
  }
}

export default withTranslation()(inject('awsAccountsStore', 'indexesStore')(withRouter(observer(IndexesList))));
