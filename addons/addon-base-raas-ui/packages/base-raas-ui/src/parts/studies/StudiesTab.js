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
import _ from 'lodash';
import { computed, decorate } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { swallowError } from '@amzn/base-ui/dist/helpers/utils';
import {
  isStoreLoading,
  isStoreError,
  isStoreReady,
  isStoreEmpty,
  stopHeartbeat,
} from '@amzn/base-ui/dist/models/BaseStore';
import BasicProgressPlaceholder from '@amzn/base-ui/dist/parts/helpers/BasicProgressPlaceholder';
import ErrorBox from '@amzn/base-ui/dist/parts/helpers/ErrorBox';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import StudyRow from './StudyRow';
import { categories } from '../../models/studies/categories';

i18next.use(initReactI18next);

// expected props
// - category (an object with the shape { name, id})
// - studiesStoresMap (via injection)
// - userStore (via injection)
class StudiesTab extends React.Component {
  get studiesStore() {
    return this.props.studiesStoresMap[this.props.category.id];
  }

  componentDidMount() {
    const store = this.studiesStore;
    if (!store) return;
    if (!isStoreReady(store)) swallowError(store.load());
    store.startHeartbeat();
  }

  componentWillUnmount() {
    stopHeartbeat(this.studiesStore);
  }

  get canCreateStudy() {
    return _.get(this.props.userStore, 'user.capabilities.canCreateStudy', true) && this.hasProjects;
  }

  get getUserRole() {
    return _.get(this.props.userStore, 'user.userRole', true);
  }

  get canSelectStudy() {
    const can = _.get(this.props.userStore, 'user.capabilities.canSelectStudy', true);
    if (!can) return can; // If can't select study, then return early, no need to examine if the user is internal and does not have projects
    if (!this.isExternalUser) return this.hasProjects;

    return can;
  }

  get isExternalUser() {
    // Both external guests and external researchers are considered external users
    return _.get(this.props.userStore, 'user.isExternalUser', true);
  }

  get hasProjects() {
    return _.get(this.props.userStore, 'user.hasProjects', true);
  }

  render() {
    const studiesStore = this.studiesStore;
    if (!studiesStore) return null;

    // Render loading, error, or tab content
    let content;
    if (isStoreError(studiesStore)) {
      content = <ErrorBox error={studiesStore.error} className="mt3 mr0 ml0" />;
    } else if (isStoreLoading(studiesStore)) {
      content = <BasicProgressPlaceholder segmentCount={3} className="mt3 mr0 ml0" />;
    } else if (isStoreEmpty(studiesStore)) {
      content = this.renderEmpty();
    } else {
      content = this.renderContent();
    }

    return content;
  }

  renderContent() {
    const studiesStore = this.studiesStore;
    const isSelectable = this.canSelectStudy;
    const getUserRole = this.getUserRole;
    return (
      <div className="mt3 mr0 ml0">
        {studiesStore.list.map(study => (
          <StudyRow key={study.id} study={study} userRole={getUserRole} isSelectable={isSelectable} />
        ))}
      </div>
    );
  }

  renderEmpty() {
    const categoryId = this.props.category.id;
    const isOpenData = categoryId === categories.openData.id;
    const isOrgData = categoryId === categories.organization.id;
    const canCreateStudy = this.canCreateStudy;

    let header = i18next.t('study.empty.my.header', { ns: 'studies' });
    let subheader = canCreateStudy ? i18next.t('study.empty.my.subheader', { ns: 'studies' }) : '';

    if (isOpenData) {
      header = i18next.t('study.empty.open.header', { ns: 'studies' });
      subheader = i18next.t('study.empty.open.subheader', { ns: 'studies' });
    }

    if (isOrgData) {
      header = i18next.t('study.empty.org.header', { ns: 'studies' });
      subheader = (
        <>
          <div>{i18next.t('study.empty.org.subheader', { ns: 'studies' })}</div>
          {canCreateStudy && <div>{i18next.t('study.empty.org.canCreate', { ns: 'studies' })}</div>}
          {!canCreateStudy && <div>{i18next.t('study.empty.org.cantCreate', { ns: 'studies' })}</div>}
        </>
      );
    }

    return (
      <Segment placeholder className="mt3">
        <Header icon className="color-grey">
          <Icon name="clipboard outline" />
          {header}
          <Header.Subheader>{subheader}</Header.Subheader>
        </Header>
      </Segment>
    );
  }
}

decorate(StudiesTab, {
  studiesStore: computed,
  canCreateStudy: computed,
  canSelectStudy: computed,
  hasProjects: computed,
  isExternalUser: computed,
});

export default withTranslation()(inject('studiesStoresMap', 'userStore')(observer(StudiesTab)));
