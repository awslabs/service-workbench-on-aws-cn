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
import { decorate, action, runInAction } from 'mobx';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { Header, Icon, Segment, Message, Table } from 'semantic-ui-react';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import { isStoreEmpty, isStoreNotEmpty } from '@aws-ee/base-ui/dist/models/BaseStore';
import Stores from '@aws-ee/base-ui/dist/models/Stores';
import ErrorBox from '@aws-ee/base-ui/dist/parts/helpers/ErrorBox'; // eslint-disable-next-line import/no-useless-path-segments

import whiteGradient from '../../../../src/images/white-gradient.png'; // We need this because we are getting the image from src and not dist

import ProgressPlaceHolder from '../../workflow-common/ProgressPlaceholder'; // expected props
// - workflowsStore (via injection)
// - userDisplayName (via injection)
// - location (from react router)

class WorkflowPublishedList extends React.Component {
  constructor(props) {
    super(props);

    this.handleWorkflowClick = event => {
      event.preventDefault();
      event.stopPropagation(); // see https://reactjs.org/docs/events.html and https://github.com/facebook/react/issues/5733

      const workflowId = event.currentTarget.dataset.workflow;
      const version = event.currentTarget.dataset.version;
      const goto = gotoFn(this);
      goto(`/workflows/published/id/${workflowId}/v/${version}`);
    };

    runInAction(() => {
      this.stores = new Stores([this.getStore()]);
    });
  }

  componentDidMount() {
    this.getStores().load({
      forceLoad: true
    });
    const store = this.getStore();
    store.startHeartbeat();
  }

  componentWillUnmount() {
    const store = this.getStore();
    store.stopHeartbeat();
  }

  getStores() {
    return this.stores;
  }

  getStore() {
    return this.props.workflowsStore;
  }

  getUserDisplayName() {
    return this.props.userDisplayName;
  }

  render() {
    const stores = this.getStores();
    const store = this.getStore();
    let content = null;

    if (stores.hasError) {
      content = /*#__PURE__*/React.createElement(ErrorBox, {
        error: stores.error,
        className: "p0"
      });
    } else if (stores.loading) {
      content = /*#__PURE__*/React.createElement(ProgressPlaceHolder, null);
    } else if (stores.ready && isStoreEmpty(store)) {
      content = this.renderEmpty();
    } else if (stores.ready && isStoreNotEmpty(store)) {
      content = this.renderTable();
    } else {
      content = null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "mb4"
    }, this.renderTitle(), content);
  }

  renderEmpty() {
    const show = this.showCreateDraftWizard;
    if (show) return null;
    return /*#__PURE__*/React.createElement(Segment, {
      placeholder: true
    }, /*#__PURE__*/React.createElement(Header, {
      icon: true,
      className: "color-grey"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "fork"
    }), "No workflows", /*#__PURE__*/React.createElement(Header.Subheader, null, "To create a workflow, start by creating a draft and then publish the draft.")));
  }

  renderTitle() {
    return /*#__PURE__*/React.createElement("div", {
      className: "mb3 flex"
    }, /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      className: "color-grey mt1 mb0 flex-auto"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "fork",
      className: "align-top"
    }), /*#__PURE__*/React.createElement(Header.Content, {
      className: "left-align"
    }, "Workflows")));
  }

  renderTable() {
    const store = this.getStore();
    const list = store.list;
    return /*#__PURE__*/React.createElement(Table, {
      selectable: true,
      padded: true
    }, /*#__PURE__*/React.createElement(Table.Header, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.HeaderCell, {
      singleLine: true
    }, "Workflow"), /*#__PURE__*/React.createElement(Table.HeaderCell, null, "Updated"))), /*#__PURE__*/React.createElement(Table.Body, null, _.map(list, workflow => this.renderWorkflowRow(workflow))));
  }

  renderWorkflowRow(workflow) {
    const latest = workflow.latest;
    if (!latest) return /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
      colSpan: "2"
    }, /*#__PURE__*/React.createElement(Message, {
      warning: true
    }, /*#__PURE__*/React.createElement("p", null, "Workflow \"", workflow.id, "\" does not have any version!"))));
    const {
      id,
      v,
      title,
      updatedAt,
      updatedBy
    } = latest;
    const userDisplayName = this.getUserDisplayName();
    const isSystem = userDisplayName.isSystem({
      uid: updatedBy
    });

    const by = () => isSystem ? '' : /*#__PURE__*/React.createElement("span", null, userDisplayName.getDisplayName({
      uid: updatedBy
    }));

    return /*#__PURE__*/React.createElement(Table.Row, {
      className: "cursor-pointer",
      key: workflow.id,
      "data-workflow": workflow.id,
      "data-version": workflow.latest.v,
      onClick: this.handleWorkflowClick
    }, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Header, {
      as: "h4",
      color: "grey"
    }, title, /*#__PURE__*/React.createElement(Header.Subheader, {
      className: "fs-9"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "ellipsis breakout color-grey"
    }, id, " v", v))))), /*#__PURE__*/React.createElement(Table.Cell, {
      collapsing: true
    }, /*#__PURE__*/React.createElement("div", null, by()), /*#__PURE__*/React.createElement(TimeAgo, {
      date: updatedAt
    })));
  }

  renderDescription(latest) {
    /* eslint-disable react/no-danger */
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "overflow-hidden height-60-px"
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: latest.descHtml
      }
    })), /*#__PURE__*/React.createElement("img", {
      src: whiteGradient,
      alt: "",
      className: "absolute height-50-px",
      style: {
        bottom: '0',
        maxWidth: '100%'
      }
    }));
    /* eslint-enable react/no-danger */
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowPublishedList, {
  handleWorkflowClick: action
});
export default inject('workflowsStore', 'userDisplayName')(withRouter(observer(WorkflowPublishedList)));
//# sourceMappingURL=WorkflowPublishedList.js.map