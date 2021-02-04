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
import ConfigOverrideTable from '../../ConfigOverrideTable'; // expected props
// - stepEditor - a WorkflowTemplateStepEditor model instance (via props)
// - onSave - called when the props are saved (via props)
// - className (via props)

class WorkflowTemplateStepConfigOverrideEditor extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleEditOn = event => {
      event.preventDefault();
      event.stopPropagation();
      const stepEditorModel = this.getStepEditor();
      stepEditorModel.setConfigOverrideEdit(true);
    };

    this.handleEditOff = () => {
      const stepEditorModel = this.getStepEditor();
      stepEditorModel.setConfigOverrideEdit(false);
    };

    this.handleSave = async form => {
      const onSave = this.props.onSave || _.noop;
      const stepEditorModel = this.getStepEditor();
      const values = form.values();

      const allowed = _.filter(_.keys(values), key => values[key] === true);

      stepEditorModel.applyConfigOverrides(allowed);
      await onSave();
      stepEditorModel.setConfigOverrideEdit(false);
    };
  }

  getStepEditor() {
    return this.props.stepEditor;
  }

  getStep() {
    return this.getStepEditor().step;
  }

  getConfigOverrideForm() {
    return this.getStepEditor().configOverrideForm;
  }

  get editing() {
    return this.getStepEditor().configOverrideEdit;
  }

  render() {
    const editing = this.editing;
    const step = this.getStep();
    const rows = step.configOverrideSummaryRows || [];
    const hasRows = rows.length > 0;
    const canEdit = !editing && hasRows;
    return /*#__PURE__*/React.createElement("div", {
      className: this.props.className
    }, !editing && /*#__PURE__*/React.createElement("div", {
      className: "flex"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-auto"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cog",
      className: "mr1 color-grey"
    }), /*#__PURE__*/React.createElement("b", null, "Configuration Override")), canEdit && /*#__PURE__*/React.createElement("div", {
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
    const configOverrideRows = step.configOverrideSummaryRows || [];
    const hasRows = configOverrideRows.length > 0;
    return /*#__PURE__*/React.createElement(React.Fragment, null, hasRows && /*#__PURE__*/React.createElement(Segment, {
      padded: true
    }, /*#__PURE__*/React.createElement(ConfigOverrideTable, {
      rows: configOverrideRows
    })), !hasRows && /*#__PURE__*/React.createElement("div", null, "No configuration entries are available"));
  }

  renderEditingContent() {
    const form = this.getConfigOverrideForm();
    const step = this.getStep();
    const configOverrideRows = step.configOverrideSummaryRows || [];

    const fields = _.map(configOverrideRows, item => form.$(item.name));

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
      textAlign: "center",
      as: "h2",
      color: "grey",
      className: "mt1 mb3"
    }, "Change Configuration Override"), /*#__PURE__*/React.createElement(Form, {
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
    }, /*#__PURE__*/React.createElement(Segment, {
      padded: true
    }, /*#__PURE__*/React.createElement(ConfigOverrideTable, {
      rows: fields,
      editable: true,
      processing: processing
    })), /*#__PURE__*/React.createElement("div", {
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


decorate(WorkflowTemplateStepConfigOverrideEditor, {
  editing: computed,
  handleEditOn: action,
  handleEditOff: action,
  handleSave: action
});
export default inject()(observer(WorkflowTemplateStepConfigOverrideEditor));
//# sourceMappingURL=WorkflowTemplateStepConfigOverrideEditor.js.map