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
import { decorate, action, runInAction, computed } from 'mobx';
import { withRouter } from 'react-router-dom';
import { Label, Segment, Button, Message } from 'semantic-ui-react';
import { isStoreEmpty } from '@aws-ee/base-ui/dist/models/BaseStore';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import { displayError } from '@aws-ee/base-ui/dist/helpers/notification';
import Stores from '@aws-ee/base-ui/dist/models/Stores';
import ErrorBox from '@aws-ee/base-ui/dist/parts/helpers/ErrorBox';
import Form from '@aws-ee/base-ui/dist/parts/helpers/fields/Form';
import DropDown from '@aws-ee/base-ui/dist/parts/helpers/fields/DropDown';
import Input from '@aws-ee/base-ui/dist/parts/helpers/fields/Input';
import getCreateDraftForm from '../../../models/forms/CreateWorkflowDraftForm';
import ProgressPlaceHolder from '../../workflow-common/ProgressPlaceholder'; // expected props
// - onCancel (via prop) called on cancel
// - workflowsStore (via injection)
// - workflowDraftsStore (via injection)
// - workflowTemplatesStore (via injection)
// - className (via props)
// - location (from react router)

class CreateWorkflowDraft extends React.Component {
  constructor(props) {
    super(props);

    this.handleDraftForSelectionChange = selection => {
      const form = this.form;
      const templateIdField = form.$('templateId');
      const workflowIdField = form.$('workflowId');

      const clear = () => {
        templateIdField.clear();
        workflowIdField.clear();
      };

      clear();

      if (selection === 'existingWorkflow') {
        templateIdField.set('__DO_NOT_USE__');
      }
    };

    this.handleCancel = () => {
      const onCancel = this.props.onCancel || _.noop;
      onCancel();
    };

    this.handleFormError = (_form, _errors) => {// We don't need to do anything here
    };

    this.handleFormSubmission = async form => {
      const values = form.values();
      const draftForValue = values.draftFor;
      const isNewWorkflow = draftForValue === 'newWorkflow';
      const templateId = isNewWorkflow ? values.templateId : undefined;
      const workflowId = values.workflowId;
      const draftsStore = this.getDraftsStore();
      const goto = gotoFn(this);

      try {
        const draft = await draftsStore.createDraft({
          isNewWorkflow,
          workflowId,
          templateId
        });
        form.clear();
        this.handleCancel();
        goto(`/workflows/drafts/edit/${encodeURIComponent(draft.id)}`);
      } catch (error) {
        displayError(error);
      }
    };

    this.form = getCreateDraftForm();
    runInAction(() => {
      this.stores = new Stores([this.getWorkflowsStore(), this.getDraftsStore(), this.getTemplatesStore()]);
    });
  }

  componentDidMount() {
    this.getStores().load();
  }

  get emptyWorkflows() {
    const store = this.getWorkflowsStore();
    return isStoreEmpty(store);
  }

  get emptyWorkflowTemplates() {
    const store = this.getTemplatesStore();
    return isStoreEmpty(store);
  }

  getStores() {
    return this.stores;
  }

  getWorkflowsStore() {
    return this.props.workflowsStore;
  }

  getDraftsStore() {
    return this.props.workflowDraftsStore;
  }

  getTemplatesStore() {
    return this.props.workflowTemplatesStore;
  }

  getDraftForDropDownOptions() {
    const hasWorkflows = !this.emptyWorkflows;
    const hasTemplates = !this.emptyWorkflowTemplates;
    const options = [];

    if (hasWorkflows) {
      options.push({
        value: 'existingWorkflow',
        text: 'An existing workflow',
        content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
          color: "teal",
          horizontal: true,
          size: "mini"
        }, "Existing"), ' ', "An existing workflow")
      });
    }

    if (hasTemplates) {
      options.push({
        value: 'newWorkflow',
        text: 'A new workflow',
        content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
          color: "blue",
          horizontal: true,
          size: "mini"
        }, "New"), ' ', "An new workflow")
      });
    }

    return options;
  }

  getWorkflowDropDownOptions() {
    const workflowsStore = this.getWorkflowsStore();
    const draftsStore = this.getDraftsStore();
    const workflows = workflowsStore.list;
    const options = []; // TODO the approach of looping through all the entries in the workflowsStore is not going to scale beyond 5000 workflows, we need an autocomplete approach
    // for this

    _.forEach(workflows, workflow => {
      if (!draftsStore.hasWorkflow(workflow.id)) {
        options.push({
          text: workflow.latest.title || '',
          value: workflow.id,
          content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
            color: "teal",
            horizontal: true,
            size: "mini"
          }, "Existing"), ' ', workflow.latest.title, " ", /*#__PURE__*/React.createElement("span", {
            className: "ml1 fs-7 color-grey"
          }, workflow.id))
        });
      }
    });

    return options;
  }

  getWorkflowTemplatesDropDownOptions() {
    const templatesStore = this.getTemplatesStore();
    const templates = templatesStore.list;
    const options = [];

    _.forEach(templates, template => {
      options.push({
        text: template.latest.title || '',
        value: template.id,
        content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
          color: "teal",
          horizontal: true,
          size: "mini"
        }, "Template"), ' ', template.latest.title, " ", /*#__PURE__*/React.createElement("span", {
          className: "ml1 fs-7 color-grey"
        }, template.id))
      });
    });

    return options;
  }

  render() {
    const stores = this.getStores();
    let content = null;

    if (stores.hasError) {
      content = /*#__PURE__*/React.createElement(ErrorBox, {
        error: stores.error,
        className: "p0 mb3"
      });
    } else if (stores.loading) {
      content = /*#__PURE__*/React.createElement(ProgressPlaceHolder, null);
    } else if (stores.ready) {
      content = this.renderMain();
    } else {
      content = null;
    }

    return content;
  }

  renderMain() {
    const form = this.form;
    const draftForDropDownOptions = this.getDraftForDropDownOptions();
    const workflowDropDownOptions = this.getWorkflowDropDownOptions();
    const templatesDropDownOptions = this.getWorkflowTemplatesDropDownOptions();
    const dropDownField = form.$('draftFor');
    const templateIdField = form.$('templateId');
    const workflowIdField = form.$('workflowId');
    const draftForValue = dropDownField.value;
    const isNewWorkflow = draftForValue === 'newWorkflow';
    const isExistingWorkflow = draftForValue === 'existingWorkflow';
    const empty = this.emptyWorkflowTemplates && this.emptyWorkflows;
    return /*#__PURE__*/React.createElement(Segment, {
      clearing: true,
      className: "p3"
    }, /*#__PURE__*/React.createElement(Form, {
      form: form,
      onCancel: this.handleCancel,
      onSuccess: this.handleFormSubmission,
      onError: this.handleFormError
    }, ({
      processing,
      _onSubmit,
      onCancel
    }) => /*#__PURE__*/React.createElement(React.Fragment, null, empty && this.renderEmptyMessage(), /*#__PURE__*/React.createElement(DropDown, {
      field: dropDownField,
      options: draftForDropDownOptions,
      selection: true,
      fluid: true,
      disabled: processing,
      onChange: this.handleDraftForSelectionChange
    }), !empty && isNewWorkflow && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DropDown, {
      field: templateIdField,
      options: templatesDropDownOptions,
      selection: true,
      fluid: true,
      disabled: processing
    }), /*#__PURE__*/React.createElement(Input, {
      field: workflowIdField,
      disabled: processing
    })), !empty && isExistingWorkflow && /*#__PURE__*/React.createElement(DropDown, {
      field: workflowIdField,
      options: workflowDropDownOptions,
      selection: true,
      fluid: true,
      disabled: processing
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt3"
    }, /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      color: "blue",
      icon: true,
      disabled: processing || empty,
      className: "ml2",
      type: "submit"
    }, "Create Draft"), /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      disabled: processing,
      onClick: onCancel
    }, "Cancel")))));
  }

  renderEmptyMessage() {
    return /*#__PURE__*/React.createElement(Message, {
      warning: true,
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement(Message.Header, null, "Brand new system"), /*#__PURE__*/React.createElement("p", null, "This is a brand new installation of the data lake. There are no workflow templates or workflows to create a draft from. At least one workflow template needs to be created before you can create a workflow draft."));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(CreateWorkflowDraft, {
  emptyWorkflows: computed,
  emptyWorkflowTemplates: computed,
  handleDraftForSelectionChange: action,
  handleCancel: action,
  handleFormSubmission: action,
  handleFormError: action
});
export default inject('workflowsStore', 'workflowDraftsStore', 'workflowTemplatesStore')(withRouter(observer(CreateWorkflowDraft)));
//# sourceMappingURL=CreateWorkflowDraft.js.map