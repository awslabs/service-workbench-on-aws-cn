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
import { decorate, action, observable, runInAction } from 'mobx';
import TimeAgo from 'react-timeago';
import { Header, Label, Button, Icon, Modal } from 'semantic-ui-react';
import c from 'classnames';
import { displayError, displaySuccess } from '@aws-ee/base-ui/dist/helpers/notification';
import getUIState from '../component-states/WorkflowCommonCardState'; // expected props
// - draft - a WorkflowTemplateDraft or WorkflowDraft model instance (via props)
// - draftsStore (via props) (either workflowTemplateDraftsStore or workflowDraftsStore)
// - onEdit (via props) called with (draft)
// - userDisplayName (via injection)
// - className (via props)

class WorkflowCommonDraftCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnTabChange = (_event, data) => {
      this.getState().setMainTabIndex(data.activeIndex);
    };

    this.handleEditDraft = async event => {
      event.preventDefault();
      event.stopPropagation();
      const draft = this.getDraft();
      if (this.props.onEdit) return this.props.onEdit(draft);
      return undefined;
    };

    this.showDeleteDialog = () => {
      this.shouldShowDeleteDialog = true;
      this.deletingInProgress = false;
    };

    this.hideDeleteDialog = () => {
      if (this.deletingInProgress) return;
      this.shouldShowDeleteDialog = false;
    };

    this.handleDeleteDraft = async () => {
      const clean = () => {
        runInAction(() => {
          this.shouldShowDeleteDialog = false;
          this.deletingInProgress = false;
        });
      };

      const draft = this.getDraft();
      const draftsStore = this.getDraftsStore();

      try {
        this.deletingInProgress = true;
        await draftsStore.deleteDraft(draft);
        clean();
        displaySuccess('Draft deleted successfully');
      } catch (error) {
        clean();
        displayError(error);
      }
    };

    runInAction(() => {
      this.shouldShowDeleteDialog = false;
      this.deletingInProgress = false;
    });
  }

  getDraftsStore() {
    return this.props.draftsStore;
  }

  getState() {
    return getUIState(this.getDraft().id);
  }

  selectedMainTabIndex() {
    return this.getState().mainTabIndex;
  }

  getDraft() {
    return this.props.draft;
  }

  getVersion() {
    const draft = this.getDraft();
    return draft.template || draft.workflow;
  }

  getUserDisplayName() {
    return this.props.userDisplayName;
  }

  render() {
    const className = this.props.className;
    const draft = this.getDraft();
    const version = this.getVersion();
    const isTemplate = draft.template !== undefined;
    const {
      id,
      title
    } = version;
    const {
      createdAt,
      createdBy
    } = draft;
    const userDisplayName = this.getUserDisplayName();

    const by = () => /*#__PURE__*/React.createElement("span", {
      className: "ml1"
    }, "by ", userDisplayName.getDisplayName({
      uid: createdBy
    }));

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, {
      attached: "top left"
    }, isTemplate && 'Template ', " Draft"), /*#__PURE__*/React.createElement("div", {
      className: c(className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex"
    }, /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      color: "grey",
      className: "mt0 flex-auto ellipsis"
    }, title, /*#__PURE__*/React.createElement(Header.Subheader, {
      className: "fs-9 color-grey"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "ellipsis breakout"
    }, id)), /*#__PURE__*/React.createElement("div", null, "created ", /*#__PURE__*/React.createElement(TimeAgo, {
      date: createdAt
    }), " ", by()))), /*#__PURE__*/React.createElement("div", null, this.renderActionButtons())), this.renderMainTabs(version)), this.renderDeleteDialog(version));
  }

  renderDeleteDialog(version) {
    const shouldShowDeleteDialog = this.shouldShowDeleteDialog;
    const {
      id
    } = version;
    const progress = this.deletingInProgress;
    return /*#__PURE__*/React.createElement(Modal, {
      open: shouldShowDeleteDialog,
      size: "tiny",
      onClose: this.hideDeleteDialog,
      closeOnDimmerClick: !progress
    }, /*#__PURE__*/React.createElement(Header, {
      content: "Delete Draft"
    }), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement("p", null, "Are you sure you want to delete draft \"", id, "\" ?")), /*#__PURE__*/React.createElement(Modal.Actions, null, /*#__PURE__*/React.createElement(Button, {
      disabled: progress,
      onClick: this.hideDeleteDialog
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      loading: progress,
      disabled: progress,
      color: "red",
      onClick: this.handleDeleteDraft
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "remove"
    }), " Delete")));
  }

  renderActionButtons() {
    return /*#__PURE__*/React.createElement(Button.Group, {
      basic: true,
      size: "mini"
    }, /*#__PURE__*/React.createElement(Button, {
      icon: "edit",
      onClick: this.handleEditDraft
    }), /*#__PURE__*/React.createElement(Button, {
      icon: "trash",
      onClick: this.showDeleteDialog
    }));
  }

  renderMainTabs(version) {
    const renderer = _.isFunction(this.props.children) ? this.props.children : _.noop;
    const uiState = this.getState();
    return renderer({
      uiState,
      version
    });
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowCommonDraftCard, {
  showDeleteDialog: action,
  hideDeleteDialog: action,
  handleDeleteDraft: action,
  handleEditDraft: action,
  shouldShowDeleteDialog: observable,
  deletingInProgress: observable
});
export default inject('userDisplayName')(observer(WorkflowCommonDraftCard));
//# sourceMappingURL=WorkflowCommonDraftCard.js.map