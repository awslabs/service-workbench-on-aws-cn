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

/* eslint-disable react/no-danger */
import _ from 'lodash';
import React from 'react';
import { observer, inject } from 'mobx-react';
import { decorate } from 'mobx';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { Header, Label, Breadcrumb, Container, Progress, Message, Table } from 'semantic-ui-react';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import { swallowError } from '@aws-ee/base-ui/dist/helpers/utils';
import { isStoreError, isStoreReady, isStoreLoading } from '@aws-ee/base-ui/dist/models/BaseStore';
import ErrorBox from '@aws-ee/base-ui/dist/parts/helpers/ErrorBox';
import ProgressPlaceHolder from '../../workflow-common/ProgressPlaceholder'; // expected props
// - workflowsStore (via injection)
// - userDisplayName (via injection)
// - location (from react router)

class WorkflowInstanceDetailPage extends React.Component {
  componentDidMount() {
    const store = this.getInstanceStore();
    swallowError(store.load());
    store.startHeartbeat();
  }

  componentWillUnmount() {
    const store = this.getInstanceStore();
    store.stopHeartbeat();
  }

  getInstanceStore() {
    const workflowStore = this.getWorkflowStore();
    const version = this.getVersionNumber();
    const instanceId = this.getInstanceId();
    return workflowStore.getInstanceStore(version, instanceId);
  }

  getWorkflowStore() {
    const workflowId = this.getWorkflowId();
    return this.props.workflowsStore.getWorkflowStore(workflowId);
  }

  getUserDisplayName() {
    return this.props.userDisplayName;
  }

  getInstanceId() {
    return (this.props.match.params || {}).instanceId;
  }

  getWorkflowId() {
    return (this.props.match.params || {}).workflowId;
  }

  getVersionNumber() {
    return parseInt((this.props.match.params || {}).version, 10);
  }

  getWorkflow() {
    const store = this.getWorkflowStore();
    if (!isStoreReady(store)) return {};
    return store.workflow;
  }

  getVersion() {
    const workflow = this.getWorkflow();
    const num = this.getVersionNumber();
    return workflow.getVersion(num);
  }

  getInstance() {
    const instanceId = this.getInstanceId();
    const workflowVersion = this.getVersion();
    return workflowVersion.getInstance(instanceId);
  }

  render() {
    const store = this.getInstanceStore();
    let content = null;

    if (isStoreError(store)) {
      content = /*#__PURE__*/React.createElement(ErrorBox, {
        error: store.error,
        className: "p0"
      });
    } else if (isStoreLoading(store)) {
      content = /*#__PURE__*/React.createElement(ProgressPlaceHolder, null);
    } else if (isStoreReady(store)) {
      content = this.renderMain();
    } else {
      content = null;
    }

    return /*#__PURE__*/React.createElement(Container, {
      className: "mt3"
    }, this.renderBreadcrumb(), content);
  }

  renderBreadcrumb() {
    const workflowId = this.getWorkflowId();
    const versionNumber = this.getVersionNumber();
    const instanceId = this.getInstanceId();
    const goto = gotoFn(this);
    return /*#__PURE__*/React.createElement(Breadcrumb, {
      className: "block mb3"
    }, /*#__PURE__*/React.createElement(Breadcrumb.Section, {
      link: true,
      onClick: () => goto('/workflows/published')
    }, "Workflows"), /*#__PURE__*/React.createElement(Breadcrumb.Divider, {
      icon: "right angle"
    }), /*#__PURE__*/React.createElement(Breadcrumb.Section, {
      link: true,
      onClick: () => goto(`/workflows/published/id/${workflowId}/v/${versionNumber}`)
    }, workflowId), /*#__PURE__*/React.createElement(Breadcrumb.Divider, {
      icon: "right angle"
    }), /*#__PURE__*/React.createElement(Breadcrumb.Section, {
      active: true
    }, instanceId));
  }

  renderMain() {
    const version = this.getVersion();
    const instance = this.getInstance();
    const {
      id,
      title,
      descHtml
    } = version;
    const {
      updatedAt,
      updatedBy
    } = instance;
    const {
      statusMsg,
      statusLabel,
      statusColor,
      msgSpread
    } = instance.statusSummary;
    const userDisplayName = this.getUserDisplayName();
    const isSystem = userDisplayName.isSystem({
      uid: updatedBy
    });

    const by = () => isSystem ? '' : /*#__PURE__*/React.createElement("span", {
      className: "ml1"
    }, "by ", userDisplayName.getDisplayName({
      uid: updatedBy
    }));

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "flex mb2"
    }, /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      color: "grey",
      className: "mt0 flex-auto ellipsis"
    }, /*#__PURE__*/React.createElement(Label, {
      color: statusColor,
      className: "ml0 mr1"
    }, statusLabel), /*#__PURE__*/React.createElement(Label, {
      color: "blue",
      className: "ml0 mr1"
    }, "Workflow Instance"), title, " - ", instance.id, /*#__PURE__*/React.createElement(Header.Subheader, {
      className: "fs-9 color-grey mt1"
    }, /*#__PURE__*/React.createElement("div", null, "updated ", /*#__PURE__*/React.createElement(TimeAgo, {
      date: updatedAt
    }), " ", by()))), /*#__PURE__*/React.createElement("div", {
      className: "ml1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ellipsis pr1 fs-9 breakout color-grey"
    }, id), /*#__PURE__*/React.createElement("span", {
      className: "fs-9 color-grey"
    }, version.v))), /*#__PURE__*/React.createElement("div", {
      className: "mb3"
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: descHtml
      }
    })), this.displayInstanceStatusMsg(statusMsg, msgSpread), /*#__PURE__*/React.createElement(Progress, {
      percent: 100,
      size: "tiny",
      color: statusColor
    }), this.renderSteps(instance.steps));
  }

  displayInstanceStatusMsg(msg, msgSpread) {
    if (!msg) return null;
    return /*#__PURE__*/React.createElement(Message, msgSpread, msg);
  }

  renderSteps(steps) {
    if (_.isEmpty(steps)) return 'This workflow instance does not have any steps';
    return /*#__PURE__*/React.createElement(Table, {
      basic: "very",
      celled: true,
      striped: true,
      stackable: true
    }, /*#__PURE__*/React.createElement(Table.Header, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.HeaderCell, null, "Step"), /*#__PURE__*/React.createElement(Table.HeaderCell, null, "Status"))), /*#__PURE__*/React.createElement(Table.Body, null, _.map(steps, (step, index) => /*#__PURE__*/React.createElement(Table.Row, {
      key: index
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      textAlign: "left",
      className: "fs-9"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "mr2 bold"
    }, index + 1), " ", step.title), step.statusMsg && /*#__PURE__*/React.createElement("div", {
      className: `color-${step.statusColor || 'grey'} breakout ml3 mt2`
    }, step.statusMsg)), /*#__PURE__*/React.createElement(Table.Cell, {
      collapsing: true,
      textAlign: "center",
      className: "fs-9"
    }, /*#__PURE__*/React.createElement(Label, {
      size: "tiny",
      color: step.statusColor
    }, step.statusLabel))))));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowInstanceDetailPage, {});
export default inject('workflowsStore', 'userDisplayName')(withRouter(observer(WorkflowInstanceDetailPage)));
//# sourceMappingURL=WorkflowInstanceDetailPage.js.map