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
import WorkflowCommonStepEditorCard from '../../../workflow-common/drafts/edit/WorkflowCommonStepEditorCard';
import WorkflowCommonStepConfigEditor from '../../../workflow-common/drafts/edit/WorkflowCommonStepConfigEditor';
import WorkflowCommonStepDescEditor from '../../../workflow-common/drafts/edit/WorkflowCommonStepDescEditor';
import WorkflowCommonStepPropsEditor from '../../../workflow-common/drafts/edit/WorkflowCommonStepPropsEditor';
import WorkflowTemplateStepConfigOverrideEditor from './WorkflowTemplateStepConfigOverrideEditor';
import WorkflowTemplateStepPropsOverrideEditor from './WorkflowTemplateStepPropsOverrideEditor'; // expected props
// - stepEditor - a WorkflowTemplateStepEditor model instance (via props)
// - onSave - called when the configuration is saved (via props)
// - onDelete - called when the step is to be deleted, passed (step) (via props)
// - canDelete (via props) defaults to true
// - canMove (via props) defaults to true
// - className (via props)

class WorkflowTemplateStepEditor extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleDelete = step => {
      const onDelete = this.props.onDelete || _.noop;
      onDelete(step);
    };

    this.handleSave = async () => {
      const onSave = this.props.onSave || _.noop;
      return onSave();
    };

    this.handleConfigSave = async configs => {
      const onSave = this.props.onSave || _.noop;
      const stepEditorModel = this.getStepEditor();
      stepEditorModel.applyDefaults(configs);
      return onSave();
    };
  }

  getStepEditor() {
    return this.props.stepEditor;
  }

  getStep() {
    return this.getStepEditor().step;
  }

  get canDelete() {
    return this.props.canDelete === undefined ? true : this.props.canDelete;
  }

  get canMove() {
    return this.props.canMove === undefined ? true : this.props.canMove;
  }

  render() {
    const className = this.props.className;
    const stepEditor = this.getStepEditor();
    const canDelete = this.canDelete;
    const canMove = this.canMove;
    return /*#__PURE__*/React.createElement(WorkflowCommonStepEditorCard, {
      stepEditor: stepEditor,
      canDelete: canDelete,
      canMove: canMove,
      className: className,
      onDelete: this.handleDelete
    }, /*#__PURE__*/React.createElement(React.Fragment, null, this.renderDescription(), this.renderConfiguration(), this.renderConfigOverride(), this.renderProps(), this.renderPropsOverride()));
  }

  renderDescription() {
    const editorModel = this.getStepEditor();
    return /*#__PURE__*/React.createElement(WorkflowCommonStepDescEditor, {
      stepEditor: editorModel,
      onSave: this.handleSave,
      className: "mb4"
    });
  }

  renderConfiguration() {
    const editorModel = this.getStepEditor();
    return /*#__PURE__*/React.createElement(WorkflowCommonStepConfigEditor, {
      stepEditor: editorModel,
      onSave: this.handleConfigSave,
      className: "mb4"
    });
  }

  renderConfigOverride() {
    const editorModel = this.getStepEditor();
    return /*#__PURE__*/React.createElement(WorkflowTemplateStepConfigOverrideEditor, {
      stepEditor: editorModel,
      onSave: this.handleSave,
      className: "mb4"
    });
  }

  renderProps() {
    const editorModel = this.getStepEditor();
    return /*#__PURE__*/React.createElement(WorkflowCommonStepPropsEditor, {
      stepEditor: editorModel,
      onSave: this.handleSave,
      className: "mb4"
    });
  }

  renderPropsOverride() {
    const editorModel = this.getStepEditor();
    return /*#__PURE__*/React.createElement(WorkflowTemplateStepPropsOverrideEditor, {
      stepEditor: editorModel,
      onSave: this.handleSave
    });
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowTemplateStepEditor, {
  canDelete: computed,
  canMove: computed,
  handleDelete: action,
  handleSave: action,
  handleConfigSave: action
});
export default inject()(observer(WorkflowTemplateStepEditor));
//# sourceMappingURL=WorkflowTemplateStepEditor.js.map