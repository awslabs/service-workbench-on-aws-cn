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
import { Icon, Divider, Button, Segment, Header } from 'semantic-ui-react';
import Form from '@aws-ee/base-ui/dist/parts/helpers/fields/Form';
import Toggle from '@aws-ee/base-ui/dist/parts/helpers/fields/Toggle';
import PropertyTable from '../../../workflow-templates/PropertyTable'; // expected props
// - stepEditor - a WorkflowStepEditor or aWorkflowTemplateStepEditor model instance (via props)
// - onSave - called when the props are saved (via props)
// - className (via props)

class WorkflowCommonStepPropsEditor extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleEditOn = event => {
      event.preventDefault();
      event.stopPropagation();
      const stepEditorModel = this.getStepEditor();
      stepEditorModel.setPropsEdit(true);
    };

    this.handleEditOff = () => {
      const stepEditorModel = this.getStepEditor();
      stepEditorModel.setPropsEdit(false);
    };

    this.handleSave = async form => {
      const onSave = this.props.onSave || _.noop;
      const stepEditorModel = this.getStepEditor();
      const {
        skippable
      } = form.values();
      stepEditorModel.applySkippable(skippable);
      await onSave();
      stepEditorModel.setPropsEdit(false);
    };
  }

  getStepEditor() {
    return this.props.stepEditor;
  }

  getStep() {
    return this.getStepEditor().step;
  }

  getPropsForm() {
    return this.getStepEditor().propsForm;
  }

  get editing() {
    return this.getStepEditor().propsEdit;
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
    }), /*#__PURE__*/React.createElement("b", null, "Properties")), canEdit && /*#__PURE__*/React.createElement("div", {
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
    const propertyRows = step.propertySummaryRows || [];
    return /*#__PURE__*/React.createElement(Segment, {
      padded: true,
      className: "animated"
    }, /*#__PURE__*/React.createElement(PropertyTable, {
      rows: propertyRows
    }));
  }

  renderEditingContent() {
    const form = this.getPropsForm();
    const skippableField = form.$('skippable');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
      textAlign: "center",
      as: "h2",
      color: "grey",
      className: "mt1 mb3"
    }, "Change Properties"), /*#__PURE__*/React.createElement(Form, {
      form: form,
      dimmer: false,
      onCancel: this.handleEditOff,
      onSuccess: this.handleSave
    }, ({
      processing,
      _onSubmit,
      onCancel
    }) => /*#__PURE__*/React.createElement("div", {
      className: "mt3"
    }, /*#__PURE__*/React.createElement(Toggle, {
      field: skippableField,
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


decorate(WorkflowCommonStepPropsEditor, {
  editing: computed,
  handleEditOn: action,
  handleEditOff: action,
  handleSave: action
});
export default inject()(observer(WorkflowCommonStepPropsEditor));
//# sourceMappingURL=WorkflowCommonStepPropsEditor.js.map