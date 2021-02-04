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
import { decorate, action } from 'mobx';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { Header, Label, Breadcrumb, Container, Dropdown } from 'semantic-ui-react';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import { swallowError } from '@aws-ee/base-ui/dist/helpers/utils';
import { isStoreError, isStoreReady, isStoreLoading } from '@aws-ee/base-ui/dist/models/BaseStore';
import ErrorBox from '@aws-ee/base-ui/dist/parts/helpers/ErrorBox';
import ProgressPlaceHolder from '../../workflow-common/ProgressPlaceholder';
import getUIState from '../../workflow-common/component-states/WorkflowCommonCardState';
import WorkflowDetailTabs from './WorkflowDetailTabs'; // expected props
// - workflowsStore (via injection)
// - userDisplayName (via injection)
// - location (from react router)

class WorkflowDetailPage extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleVersionChange = ({
      value = ''
    }) => {
      const goto = gotoFn(this);
      const workflowId = this.getWorkflowId();
      goto(`/workflows/published/id/${workflowId}/v/${value}`);
    };
  }

  componentDidMount() {
    const store = this.getStore();
    swallowError(store.load());
    store.startHeartbeat();
  }

  componentWillUnmount() {
    const store = this.getStore();
    store.stopHeartbeat();
  }

  getState() {
    return getUIState(`wf-${this.getWorkflowId()}`);
  }

  getStore() {
    const workflowId = this.getWorkflowId();
    return this.props.workflowsStore.getWorkflowStore(workflowId);
  }

  getUserDisplayName() {
    return this.props.userDisplayName;
  }

  getWorkflowId() {
    return (this.props.match.params || {}).workflowId;
  }

  getVersionNumber() {
    return parseInt((this.props.match.params || {}).version, 10);
  }

  getWorkflow() {
    const store = this.getStore();
    if (!isStoreReady(store)) return {};
    return store.workflow;
  }

  getVersion() {
    const workflow = this.getWorkflow();
    const num = this.getVersionNumber();
    return workflow.getVersion(num);
  }

  render() {
    const store = this.getStore();
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
    const goto = gotoFn(this);
    return /*#__PURE__*/React.createElement(Breadcrumb, {
      className: "block mb3"
    }, /*#__PURE__*/React.createElement(Breadcrumb.Section, {
      link: true,
      onClick: () => goto('/workflows/published')
    }, "Workflows"), /*#__PURE__*/React.createElement(Breadcrumb.Divider, {
      icon: "right angle"
    }), /*#__PURE__*/React.createElement(Breadcrumb.Section, {
      active: true
    }, workflowId));
  }

  renderMain() {
    const version = this.getVersion();
    const {
      id,
      title,
      updatedAt,
      updatedBy,
      descHtml
    } = version;
    const userDisplayName = this.getUserDisplayName();
    const isSystem = userDisplayName.isSystem({
      uid: updatedBy
    });

    const by = () => isSystem ? '' : /*#__PURE__*/React.createElement("span", {
      className: "ml1"
    }, "by ", userDisplayName.getDisplayName({
      uid: updatedBy
    }));

    const uiState = this.getState();
    /* eslint-disable react/no-danger */

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "flex mb2"
    }, /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      color: "grey",
      className: "mt0 flex-auto ellipsis"
    }, /*#__PURE__*/React.createElement(Label, {
      color: "teal",
      className: "ml0 mr1"
    }, "Workflow"), title, /*#__PURE__*/React.createElement(Header.Subheader, {
      className: "fs-9 color-grey mt1"
    }, /*#__PURE__*/React.createElement("div", null, "updated ", /*#__PURE__*/React.createElement(TimeAgo, {
      date: updatedAt
    }), " ", by()))), /*#__PURE__*/React.createElement("div", {
      className: "ml1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ellipsis pr1 fs-9 breakout color-grey"
    }, id), " ", this.renderVersionDropdown())), /*#__PURE__*/React.createElement("div", {
      className: "mb3"
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: descHtml
      }
    })), /*#__PURE__*/React.createElement(WorkflowDetailTabs, {
      uiState: uiState,
      workflow: version
    }));
    /* eslint-enable react/no-danger */
  }

  renderVersionDropdown() {
    const workflow = this.getWorkflow();
    const versions = workflow.versionNumbers;
    const currentVersion = this.getVersionNumber();

    const options = _.map(versions, version => ({
      text: `v${version}`,
      value: version
    }));

    if (versions.length === 1) return /*#__PURE__*/React.createElement("span", {
      className: "bold color-grey pr2"
    }, "v", currentVersion);
    return /*#__PURE__*/React.createElement(Dropdown, {
      className: "color-grey",
      inline: true,
      options: options,
      value: currentVersion,
      onChange: (_e, data) => this.handleVersionChange(data)
    });
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowDetailPage, {
  handleVersionChange: action
});
export default inject('workflowsStore', 'userDisplayName')(withRouter(observer(WorkflowDetailPage)));
//# sourceMappingURL=WorkflowDetailPage.js.map