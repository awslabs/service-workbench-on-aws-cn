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
import { observable, runInAction, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { Table, Segment, Header, Icon } from 'semantic-ui-react';

import { formatBytes, swallowError } from '@amzn/base-ui/dist/helpers/utils';
import { isStoreError, isStoreLoading, isStoreEmpty, stopHeartbeat } from '@amzn/base-ui/dist/models/BaseStore';
import BasicProgressPlaceholder from '@amzn/base-ui/dist/parts/helpers/BasicProgressPlaceholder';
import ErrorBox from '@amzn/base-ui/dist/parts/helpers/ErrorBox';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';

i18next.use(initReactI18next);

// expected props
// - study
class StudyFilesTable extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.filesStore = props.study.getFilesStore();
    });
  }

  componentDidMount() {
    swallowError(this.filesStore.load());
    this.filesStore.startHeartbeat();
  }

  componentWillUnmount() {
    stopHeartbeat(this.filesStore);
  }

  render() {
    const store = this.filesStore;
    // Render loading, error, or tab content
    let content;
    if (isStoreError(store)) {
      content = <ErrorBox error={store.error} className="m0" />;
    } else if (isStoreLoading(store)) {
      content = <BasicProgressPlaceholder segmentCount={1} />;
    } else if (isStoreEmpty(store)) {
      content = this.renderEmpty();
    } else {
      content = this.renderTable();
    }

    return content;
  }

  renderTable() {
    return (
      <>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{i18next.t('fileTable.filename', { ns: 'studies' })}</Table.HeaderCell>
              <Table.HeaderCell>{i18next.t('fileTable.size', { ns: 'studies' })}</Table.HeaderCell>
              <Table.HeaderCell>{i18next.t('fileTable.lastModified', { ns: 'studies' })}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.filesStore.files.map(file => (
              <Table.Row key={file.filename}>
                <Table.Cell>{file.filename}</Table.Cell>
                <Table.Cell>{formatBytes(file.size)}</Table.Cell>
                <Table.Cell>{file.lastModified.toISOString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    );
  }

  renderEmpty() {
    return (
      <Segment placeholder className="mt0">
        <Header icon className="color-grey">
          <Icon name="file outline" />
          {i18next.t('fileTable.empty.header', { ns: 'studies' })}
          <Header.Subheader>{i18next.t('fileTable.empty.subheader', { ns: 'studies' })}</Header.Subheader>
        </Header>
      </Segment>
    );
  }
}

decorate(StudyFilesTable, {
  filesStore: observable,
});

export default withTranslation()(observer(StudyFilesTable));
