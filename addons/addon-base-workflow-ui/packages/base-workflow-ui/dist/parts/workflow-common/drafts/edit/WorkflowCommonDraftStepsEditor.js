function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { observer, inject, Observer } from 'mobx-react';
import { decorate, action, runInAction, observable } from 'mobx';
import { Button, Header, Dimmer, Loader, Message } from 'semantic-ui-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import c from 'classnames';
import { displayError, displaySuccess } from '@aws-ee/base-ui/dist/helpers/notification';
import AddStepDropDown from '../../../workflow-step-templates/AddStepDropDown'; // expected props
// - editor (via prop) an instance of the WorkflowTemplateDraftEditor model or WorkflowDraftEditor model
// - stepEditor (vai props) an instance of the WorkflowTemplateStepEditor react component or WorkflowStepEditor reactComponent

class WorkflowCommonDraftStepsEditor extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddStep = step => {
      if (!step) return;
      this.getEditor().addStep(step);
    };

    this.handleCancel = event => {
      event.preventDefault();
      event.stopPropagation();
      this.clickedOnNext = false;
      this.processing = false;
      const onCancel = this.props.onCancel || _.noop;
      onCancel();
    };

    this.handleDelete = step => {
      const editor = this.getEditor();
      const version = this.getVersion();
      const id = step.id;
      version.removeStep(step);
      setTimeout(() => {
        editor.removeStepEditor(id);
      }, 150);
    };

    this.handleNext = async event => {
      this.clickedOnNext = true;
      return this.handleSave(event);
    };

    this.handlePrevious = event => {
      // we don't save the form in this case
      event.preventDefault();
      event.stopPropagation();
      this.clickedOnNext = false;
      this.getEditor().previousPage();
    };

    this.handleSave = async event => {
      event.preventDefault();
      event.stopPropagation();
      const editor = this.getEditor();
      const {
        draft
      } = editor;
      this.processing = true;

      try {
        await editor.update(draft);
        runInAction(() => {
          this.processing = false;
        });

        if (this.clickedOnNext) {
          this.getEditor().nextPage();
          return;
        }

        displaySuccess('Saved successfully');
      } catch (error) {
        runInAction(() => {
          this.processing = false;
          this.clickedOnNext = false;
        });
        displayError(error);
      }
    };

    this.handleStepSave = async () => {
      const editor = this.getEditor();
      const {
        draft
      } = editor;
      this.processing = true;

      try {
        await editor.update(draft);
        runInAction(() => {
          this.processing = false;
        });
        displaySuccess('Saved successfully');
      } catch (error) {
        runInAction(() => {
          this.processing = false;
        });
        displayError(error);
      }
    };

    this.onDragEnd = result => {
      const version = this.getVersion();
      if (!version.canRearrangeSteps) return; // see https://egghead.io/lessons/react-persist-list-reordering-with-react-beautiful-dnd-using-the-ondragend-callback

      const {
        draggableId,
        destination,
        source
      } = result;
      const isSource = source.droppableId === 'selected-steps';
      const isDestination = destination && destination.droppableId === 'selected-steps';
      const isStep = !!version.getStep(draggableId);

      if (!destination) {
        // we don't support removal of a step by dragging it out of its container
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        // we don't need to do anything here
        return;
      }

      if (isSource && isDestination && isStep) {
        // we are dealing with reordering of the steps
        version.reinsertStep(source.index, destination.index);
      }
    };

    runInAction(() => {
      this.processing = false;
      this.clickedOnNext = false;
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getEditor() {
    return this.props.editor;
  }

  getStepEditorComponent() {
    return this.props.stepEditor;
  }

  getVersion() {
    return this.getEditor().version;
  }

  getSelectedSteps() {
    return this.getVersion().selectedSteps;
  }

  render() {
    const processing = this.processing;
    const editor = this.getEditor();
    const editing = editor.stepEditorsEditing;
    const hasPrevious = editor.hasPreviousPage;
    const version = this.getVersion();
    const canRearrange = version.canRearrangeSteps;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dimmer.Dimmable, {
      dimmed: processing
    }, /*#__PURE__*/React.createElement(Dimmer, {
      active: processing,
      inverted: true
    }, /*#__PURE__*/React.createElement(Loader, {
      inverted: true
    }, "Processing")), /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      color: "grey",
      className: "mt0"
    }, "Steps"), !canRearrange && /*#__PURE__*/React.createElement(Message, {
      warning: true
    }, /*#__PURE__*/React.createElement("b", {
      className: "mr1"
    }, "Warning"), " The workflow template used by this workflow does ", /*#__PURE__*/React.createElement("b", null, "not"), " allow for steps to be deleted, added or rearranged"), canRearrange && /*#__PURE__*/React.createElement(DragDropContext, {
      onDragEnd: this.onDragEnd
    }, /*#__PURE__*/React.createElement(Droppable, {
      droppableId: "selected-steps"
    }, (provided, snapshot) => /*#__PURE__*/React.createElement(Observer, null, () => /*#__PURE__*/React.createElement("div", _extends({}, provided.droppableProps, {
      ref: provided.innerRef,
      className: c('mb3', snapshot.isDraggingOver ? 'bg-lightgreen' : '')
    }), this.renderSelectedSteps(), provided.placeholder)))), !canRearrange && /*#__PURE__*/React.createElement("div", {
      className: "mb3"
    }, this.renderSelectedSteps()), /*#__PURE__*/React.createElement(AddStepDropDown, {
      className: "mb3",
      onSelected: this.handleAddStep,
      disabled: !canRearrange
    })), !editing && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      color: "teal",
      icon: "right arrow",
      labelPosition: "right",
      disabled: processing,
      className: "ml2",
      content: "Next",
      onClick: this.handleNext
    }), hasPrevious && /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      icon: "left arrow",
      labelPosition: "left",
      disabled: processing,
      className: "ml3",
      content: "previous",
      onClick: this.handlePrevious
    }), /*#__PURE__*/React.createElement(Button, {
      floated: "right",
      color: "blue",
      icon: "save",
      labelPosition: "left",
      disabled: processing,
      className: "ml2",
      content: "Save",
      onClick: this.handleSave
    }), /*#__PURE__*/React.createElement(Button, {
      floated: "left",
      disabled: processing,
      onClick: this.handleCancel
    }, "Cancel")));
  }

  renderSelectedSteps() {
    const selectedSteps = this.getSelectedSteps();
    const size = selectedSteps.length;

    if (size === 0) {
      return null;
    }

    const version = this.getVersion();
    const canRearrange = version.canRearrangeSteps;
    const editor = this.getEditor();

    const getStepEditor = step => editor.getStepEditor(step);

    const StepEditorComponent = this.getStepEditorComponent();
    if (!canRearrange) return _.map(selectedSteps, step => /*#__PURE__*/React.createElement("div", {
      key: step.id,
      className: "mb3"
    }, /*#__PURE__*/React.createElement(Observer, null, () => /*#__PURE__*/React.createElement(StepEditorComponent, {
      stepEditor: getStepEditor(step),
      onDelete: this.handleDelete,
      onSave: this.handleStepSave,
      canMove: canRearrange,
      canDelete: canRearrange
    }))));
    return _.map(selectedSteps, (step, index) => /*#__PURE__*/React.createElement(Draggable, {
      key: step.id,
      draggableId: step.id,
      index: index
    }, (provided, _snapshot) => /*#__PURE__*/React.createElement("div", _extends({}, provided.dragHandleProps, {
      ref: provided.innerRef
    }, provided.draggableProps, {
      className: "mb3"
    }), /*#__PURE__*/React.createElement(StepEditorComponent, {
      stepEditor: getStepEditor(step),
      onDelete: this.handleDelete,
      onSave: this.handleStepSave,
      canMove: canRearrange,
      canDelete: canRearrange
    }))));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowCommonDraftStepsEditor, {
  onDragEnd: action,
  handleAddStep: action,
  handleCancel: action,
  handleDelete: action,
  handleSave: action,
  handleStepSave: action,
  handleNext: action,
  handlePrevious: action,
  clickedOnNext: observable,
  processing: observable
});
export default inject()(observer(WorkflowCommonDraftStepsEditor));
//# sourceMappingURL=WorkflowCommonDraftStepsEditor.js.map