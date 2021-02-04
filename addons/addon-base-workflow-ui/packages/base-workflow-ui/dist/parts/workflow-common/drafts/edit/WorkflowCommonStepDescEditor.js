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
import { decorate, action, computed } from 'mobx';
import { Icon, Divider, Header, Button } from 'semantic-ui-react';
import Form from '@aws-ee/base-ui/dist/parts/helpers/fields/Form';
import Input from '@aws-ee/base-ui/dist/parts/helpers/fields/Input';
import TextArea from '@aws-ee/base-ui/dist/parts/helpers/fields/TextArea'; // expected props
// - stepEditor - a WorkflowStepEditor or a WorkflowTemplateStepEditor model instance (via props)
// - onSave - called when the desc/title are saved (via props)
// - className (via props)

class WorkflowCommonStepDescEditor extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleEditOn = event => {
      event.preventDefault();
      event.stopPropagation();
      const stepEditorModel = this.getStepEditor();
      stepEditorModel.setDescEdit(true);
    };

    this.handleEditOff = () => {
      const stepEditorModel = this.getStepEditor();
      stepEditorModel.setDescEdit(false);
    };

    this.handleSave = async form => {
      const onSave = this.props.onSave || _.noop;
      const stepEditorModel = this.getStepEditor();
      const {
        stepTitle,
        stepDesc
      } = form.values();
      stepEditorModel.applyDescAndTitle(stepDesc, stepTitle);
      await onSave();
      stepEditorModel.setDescEdit(false);
    };
  }

  getStepEditor() {
    return this.props.stepEditor;
  }

  getStep() {
    return this.getStepEditor().step;
  }

  getDescForm() {
    return this.getStepEditor().descForm;
  }

  get editing() {
    return this.getStepEditor().descEdit;
  }

  render() {
    const editing = this.editing;
    const canEdit = !editing;
    return /*#__PURE__*/React.createElement("div", {
      className: this.props.className
    }, !editing && /*#__PURE__*/React.createElement("div", {
      className: "flex animated"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-auto"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file alternate outline",
      className: "mr1 color-grey"
    }), /*#__PURE__*/React.createElement("b", null, "Description")), canEdit && /*#__PURE__*/React.createElement("div", {
      className: "pl1 pr0",
      onClick: this.handleEditOn
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      color: "grey",
      className: "cursor-pointer"
    }))), /*#__PURE__*/React.createElement(Divider, {
      className: "mt1 mb2"
    }), editing && this.renderEditingContent(), !editing && this.renderReadOnlyContent());
  }

  renderReadOnlyContent() {
    const step = this.getStep();
    return /*#__PURE__*/React.createElement("div", {
      className: "animated",
      dangerouslySetInnerHTML: {
        __html: step.descHtml
      }
    }); // eslint-disable-line react/no-danger
  }

  renderEditingContent() {
    const form = this.getDescForm();
    const stepTitleField = form.$('stepTitle');
    const stepDescField = form.$('stepDesc');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
      textAlign: "center",
      as: "h2",
      color: "grey",
      className: "mt1 mb3"
    }, "Change Title & Description"), /*#__PURE__*/React.createElement(Form, {
      form: form,
      dimmer: false,
      onCancel: this.handleEditOff,
      onSuccess: this.handleSave
    }, ({
      processing,
      _onSubmit,
      onCancel
    }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
      field: stepTitleField,
      disabled: processing
    }), /*#__PURE__*/React.createElement(TextArea, {
      field: stepDescField,
      rows: 6,
      disabled: processing
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt3 clearfix"
    }, /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      color: "blue",
      icon: "save",
      labelPosition: "left",
      disabled: processing,
      className: "ml2",
      type: "submit",
      content: "Save"
    }), /*#__PURE__*/React.createElement(Button, {
      floated: "left",
      disabled: processing,
      onClick: onCancel
    }, "Cancel")))));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowCommonStepDescEditor, {
  editing: computed,
  handleEditOn: action,
  handleEditOff: action,
  handleSave: action
});
export default inject()(observer(WorkflowCommonStepDescEditor));
//# sourceMappingURL=WorkflowCommonStepDescEditor.js.map