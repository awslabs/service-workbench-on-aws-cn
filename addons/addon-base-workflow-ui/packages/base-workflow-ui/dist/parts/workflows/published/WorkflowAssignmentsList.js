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
import { observer, inject } from 'mobx-react';
import { decorate } from 'mobx';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { Header, Segment, Icon, Table } from 'semantic-ui-react';
import { swallowError } from '@aws-ee/base-ui/dist/helpers/utils';
import { isStoreError, isStoreReady, isStoreLoading, isStoreEmpty } from '@aws-ee/base-ui/dist/models/BaseStore';
import ErrorBox from '@aws-ee/base-ui/dist/parts/helpers/ErrorBox';
import ProgressPlaceHolder from '../../workflow-common/ProgressPlaceholder'; // expected props
// - workflowVersion (via props)
// - workflowsStore (via injection)
// - userDisplayName (via injection)
// - location (from react router)

class WorkflowAssignmentsList extends React.Component {
  componentDidMount() {
    const store = this.getAssignmentsStore();
    swallowError(store.load());
    store.startHeartbeat();
  }

  componentWillUnmount() {
    const store = this.getAssignmentsStore();
    store.stopHeartbeat();
  }

  getWorkflowVersion() {
    return this.props.workflowVersion;
  }

  getWorkflowStore() {
    const version = this.getWorkflowVersion();
    return this.props.workflowsStore.getWorkflowStore(version.id);
  }

  getAssignmentsStore() {
    const workflowStore = this.getWorkflowStore();
    return workflowStore.getAssignmentsStore();
  }

  getUserDisplayName() {
    return this.props.userDisplayName;
  }

  render() {
    const store = this.getAssignmentsStore();
    let content = null;

    if (isStoreError(store)) {
      content = /*#__PURE__*/React.createElement(ErrorBox, {
        error: store.error,
        className: "p0"
      });
    } else if (isStoreLoading(store)) {
      content = /*#__PURE__*/React.createElement(ProgressPlaceHolder, null);
    } else if (isStoreReady(store) && isStoreEmpty(store)) {
      content = this.renderEmptyAssignments();
    } else if (isStoreReady(store) && !isStoreEmpty(store)) {
      content = this.renderMain();
    } else {
      // We get here if the store is in the initial state
      content = null;
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, content);
  }

  renderMain() {
    const store = this.getAssignmentsStore();
    const assignments = store.list;
    return /*#__PURE__*/React.createElement(Segment, {
      padded: true
    }, this.renderAssignmentsTable(assignments));
  }

  renderAssignmentsTable(assignments) {
    return /*#__PURE__*/React.createElement(Table, {
      basic: "very",
      className: "animated"
    }, /*#__PURE__*/React.createElement(Table.Header, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.HeaderCell, {
      width: 1
    }, "Id"), /*#__PURE__*/React.createElement(Table.HeaderCell, {
      width: 4
    }, "Trigger"), /*#__PURE__*/React.createElement(Table.HeaderCell, {
      width: 8
    }, "Configuration"), /*#__PURE__*/React.createElement(Table.HeaderCell, {
      width: 3
    }, "Updated"))), /*#__PURE__*/React.createElement(Table.Body, null, _.map(assignments, assignment => this.renderAssignmentRow(assignment))));
  }

  renderAssignmentRow(assignment) {
    const {
      id,
      updatedAt,
      updatedBy,
      triggerType,
      triggerTypeData: config
    } = assignment;
    const userDisplayName = this.getUserDisplayName();
    const isSystem = userDisplayName.isSystem({
      uid: updatedBy
    });

    const by = () => isSystem ? '' : /*#__PURE__*/React.createElement("span", null, "by ", userDisplayName.getDisplayName({
      uid: updatedBy
    }));

    return /*#__PURE__*/React.createElement(Table.Row, {
      key: id
    }, /*#__PURE__*/React.createElement(Table.Cell, null, id), /*#__PURE__*/React.createElement(Table.Cell, null, triggerType), /*#__PURE__*/React.createElement(Table.Cell, null, config), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(TimeAgo, {
      date: updatedAt
    }), /*#__PURE__*/React.createElement("div", null, by(), "\xA0")));
  }

  renderEmptyAssignments() {
    return /*#__PURE__*/React.createElement(Segment, {
      placeholder: true
    }, /*#__PURE__*/React.createElement(Header, {
      icon: true,
      className: "color-grey"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chain"
    }), "No assignments", /*#__PURE__*/React.createElement(Header.Subheader, null, "Assignments allow you to configure the workflow to be triggered based on different criteria, try it out!")));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowAssignmentsList, {});
export default inject('workflowsStore', 'userDisplayName')(withRouter(observer(WorkflowAssignmentsList)));
//# sourceMappingURL=WorkflowAssignmentsList.js.map