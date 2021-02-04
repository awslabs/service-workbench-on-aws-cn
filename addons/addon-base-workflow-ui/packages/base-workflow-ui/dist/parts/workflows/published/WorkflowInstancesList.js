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
import { decorate, action, autorun, runInAction, observable } from 'mobx';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { Header, Segment, Icon, Statistic, Grid, Label, Button } from 'semantic-ui-react';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import { displayError } from '@aws-ee/base-ui/dist/helpers/notification';
import { swallowError, niceNumber } from '@aws-ee/base-ui/dist/helpers/utils';
import { isStoreError, isStoreReady, isStoreLoading, isStoreEmpty } from '@aws-ee/base-ui/dist/models/BaseStore';
import Form from '@aws-ee/base-ui/dist/parts/helpers/fields/Form';
import TextArea from '@aws-ee/base-ui/dist/parts/helpers/fields/TextArea';
import ErrorBox from '@aws-ee/base-ui/dist/parts/helpers/ErrorBox';
import getTriggerWorkflowForm from '../../../models/forms/TriggerWorkflowForm';
import ProgressPlaceHolder from '../../workflow-common/ProgressPlaceholder'; // expected props
// - workflowVersion (via props)
// - workflowsStore (via injection)
// - userDisplayName (via injection)
// - location (from react router)

class WorkflowInstancesList extends React.Component {
  constructor(props) {
    super(props);

    this.cancelTriggerDialog = () => {
      this.triggerDialogShown = false;
    };

    this.showTriggerDialog = () => {
      this.triggerDialogShown = true;
    };

    this.handleFormSubmission = async form => {
      const values = form.values();
      const workflowInputStr = values.workflowInput;

      try {
        const store = this.getInstancesStore(); // Convert input JSON string to an input object

        const input = JSON.parse(workflowInputStr);
        await store.triggerWorkflow({
          input
        });
        form.clear();
        this.cancelTriggerDialog();
      } catch (error) {
        if (error instanceof SyntaxError) {
          displayError('Incorrect workflow input. Make sure the workflow input is a well-formed JSON.');
        } else {
          displayError(error);
        }
      }
    };

    this.handleInstanceClick = event => {
      event.preventDefault();
      event.stopPropagation(); // see https://reactjs.org/docs/events.html and https://github.com/facebook/react/issues/5733

      const instanceId = event.currentTarget.dataset.instance;
      const goto = gotoFn(this);
      const {
        id,
        v
      } = this.getWorkflowVersion();
      goto(`/workflows/published/id/${id}/v/${v}/instances/id/${instanceId}`);
    };

    this.form = getTriggerWorkflowForm();
    runInAction(() => {
      this.triggerDialogShown = false;
    });
  }

  componentDidMount() {
    if (this.disposer) this.disposer();
    this.disposer = autorun(() => {
      const store = this.getInstancesStore();
      if (!isStoreReady(store)) swallowError(store.load());
    });
    const store = this.getInstancesStore();
    store.startHeartbeat();
  }

  componentWillUnmount() {
    const store = this.getInstancesStore();
    store.stopHeartbeat();
    if (this.disposer) this.disposer();
  }

  getWorkflowVersion() {
    return this.props.workflowVersion;
  }

  getWorkflowStore() {
    const workflowVersion = this.getWorkflowVersion();
    return this.props.workflowsStore.getWorkflowStore(workflowVersion.id);
  }

  getInstancesStore() {
    const workflowStore = this.getWorkflowStore();
    const workflowVersion = this.getWorkflowVersion();
    return workflowStore.getInstancesStore(workflowVersion.id, workflowVersion.v);
  }

  getUserDisplayName() {
    return this.props.userDisplayName;
  }

  render() {
    const store = this.getInstancesStore();
    let content = null;

    if (isStoreError(store)) {
      content = /*#__PURE__*/React.createElement(ErrorBox, {
        error: store.error,
        className: "p0"
      });
    } else if (isStoreLoading(store)) {
      content = /*#__PURE__*/React.createElement(ProgressPlaceHolder, null);
    } else if (isStoreReady(store) && isStoreEmpty(store)) {
      content = this.renderEmptyInstances();
    } else if (isStoreReady(store) && !isStoreEmpty(store)) {
      content = this.renderMain();
    } else {
      // We get here if the store is in the initial state
      content = null;
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderTriggerDialog(), content);
  }

  renderMain() {
    const store = this.getInstancesStore();
    const list = store.list;
    return _.map(list, instance => this.renderRow(instance));
  }

  renderRow(instance) {
    const {
      id,
      createdAt,
      createdBy,
      statusSummary
    } = instance;
    const userDisplayName = this.getUserDisplayName();

    const by = () => /*#__PURE__*/React.createElement("span", null, userDisplayName.getDisplayName({
      uid: createdBy
    }));

    const {
      statusLabel,
      statusColor,
      stepsSummary
    } = statusSummary;
    return /*#__PURE__*/React.createElement(Segment, {
      clearing: true,
      padded: true,
      key: id,
      className: "mb3 cursor-pointer",
      "data-instance": id,
      onClick: this.handleInstanceClick
    }, /*#__PURE__*/React.createElement(Grid, {
      celled: "internally",
      stackable: true
    }, /*#__PURE__*/React.createElement(Grid.Row, {
      stretched: true
    }, /*#__PURE__*/React.createElement(Grid.Column, {
      width: 3,
      className: "center pr3"
    }, /*#__PURE__*/React.createElement(Label, {
      color: statusColor,
      className: "fluid center mb1"
    }, statusLabel), /*#__PURE__*/React.createElement("div", {
      className: "mb1"
    }, "id ", /*#__PURE__*/React.createElement("b", null, id)), /*#__PURE__*/React.createElement(TimeAgo, {
      date: createdAt
    }), by()), /*#__PURE__*/React.createElement(Grid.Column, {
      width: 13
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb2 center"
    }, "Steps"), /*#__PURE__*/React.createElement(Statistic.Group, {
      widths: "five",
      size: "tiny"
    }, _.map(stepsSummary, item => /*#__PURE__*/React.createElement(Statistic, {
      key: item.statusLabel,
      color: item.statusColor
    }, /*#__PURE__*/React.createElement(Statistic.Value, null, niceNumber(item.count)), /*#__PURE__*/React.createElement(Statistic.Label, null, item.statusLabel))))))));
  }

  renderEmptyInstances() {
    return /*#__PURE__*/React.createElement(Segment, {
      placeholder: true
    }, /*#__PURE__*/React.createElement(Header, {
      icon: true,
      className: "color-grey"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "copy outline"
    }), "No instances", /*#__PURE__*/React.createElement(Header.Subheader, null, "Once the workflow is triggered at least once, you will start seeing information about the instances in this area.")));
  }

  renderTriggerDialog() {
    const show = this.triggerDialogShown;
    return /*#__PURE__*/React.createElement(React.Fragment, null, !show && /*#__PURE__*/React.createElement("div", {
      className: "clearfix mb2"
    }, /*#__PURE__*/React.createElement(Button, {
      basic: true,
      color: "blue",
      floated: "right",
      onClick: this.showTriggerDialog
    }, "Trigger")), show && this.renderTriggerDialogContent());
  }

  renderTriggerDialogContent() {
    const form = this.form;
    const workflowInputField = form.$('workflowInput');
    return /*#__PURE__*/React.createElement(Segment, {
      clearing: true,
      className: "p3 mb3 mt3"
    }, /*#__PURE__*/React.createElement(Form, {
      form: form,
      onCancel: this.cancelTriggerDialog,
      onSuccess: this.handleFormSubmission,
      onError: this.handleFormError
    }, ({
      processing,
      _onSubmit,
      onCancel
    }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextArea, {
      field: workflowInputField,
      disabled: processing
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt0"
    }, /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      color: "blue",
      icon: true,
      disabled: processing,
      className: "ml2",
      type: "submit"
    }, "Trigger"), /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      disabled: processing,
      onClick: onCancel
    }, "Cancel")))));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowInstancesList, {
  triggerDialogShown: observable,
  handleInstanceClick: action,
  showTriggerDialog: action,
  cancelTriggerDialog: action,
  handleFormSubmission: action
});
export default inject('workflowsStore', 'userDisplayName')(withRouter(observer(WorkflowInstancesList)));
//# sourceMappingURL=WorkflowInstancesList.js.map