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
import { decorate, action, runInAction, observable } from 'mobx';
import { withRouter } from 'react-router-dom';
import { Header, Icon, Segment, Button } from 'semantic-ui-react';
import { gotoFn } from '@aws-ee/base-ui/dist/helpers/routing';
import { swallowError } from '@aws-ee/base-ui/dist/helpers/utils';
import ErrorBox from '@aws-ee/base-ui/dist/parts/helpers/ErrorBox';
import { isStoreLoading, isStoreReady, isStoreEmpty, isStoreNotEmpty, isStoreError } from '@aws-ee/base-ui/dist/models/BaseStore';
import WorkflowCommonDraftCard from '../../workflow-common/drafts/WorkflowCommonDraftCard';
import ProgressPlaceHolder from '../../workflow-common/ProgressPlaceholder';
import CreateDraftWizard from './CreateWorkflowTemplateDraft';
import WorkflowTemplateCardTabs from '../WorkflowTemplateCardTabs'; // expected props
// - workflowTemplateDraftsStore (via injection)
// - location (from react router)

class WorkflowTemplateDraftsList extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditDraft = async draft => {
      const goto = gotoFn(this);
      goto(`/workflow-templates/drafts/edit/${encodeURIComponent(draft.id)}`);
    };

    runInAction(() => {
      this.showCreateDraftWizard = false;
    });
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

  getStore() {
    return this.props.workflowTemplateDraftsStore;
  }

  handleCreateDraftClick() {
    this.showCreateDraftWizard = true;
  }

  handleCreateDraftCancel() {
    this.showCreateDraftWizard = false;
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
    } else if (isStoreReady(store) && isStoreEmpty(store)) {
      content = this.renderEmpty();
    } else if (isStoreReady(store) && isStoreNotEmpty(store)) {
      content = this.renderMain();
    } else {
      content = null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "mb4"
    }, this.renderTitle(), this.renderWizard(), content);
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
      name: "edit outline"
    }), "No workflow template drafts"));
  }

  renderTitle() {
    const disabled = this.showCreateDraftWizard;
    return /*#__PURE__*/React.createElement("div", {
      className: "mb3 flex"
    }, /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      className: "color-grey mt1 mb0 flex-auto"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit outline",
      className: "align-top"
    }), /*#__PURE__*/React.createElement(Header.Content, {
      className: "left-align"
    }, "Workflow Template Drafts")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      basic: true,
      color: "blue",
      disabled: disabled,
      onClick: () => this.handleCreateDraftClick()
    }, "Create Draft")));
  }

  renderWizard() {
    const show = this.showCreateDraftWizard;
    if (!show) return null;
    return /*#__PURE__*/React.createElement(CreateDraftWizard, {
      onCancel: () => this.handleCreateDraftCancel()
    });
  }

  renderMain() {
    const store = this.getStore();
    const list = store.list;
    return /*#__PURE__*/React.createElement("div", null, _.map(list, draft => /*#__PURE__*/React.createElement(Segment, {
      className: "mb2",
      clearing: true,
      key: draft.id
    }, /*#__PURE__*/React.createElement(WorkflowCommonDraftCard, {
      draft: draft,
      draftsStore: store,
      onEdit: this.handleEditDraft,
      className: "pt0 pl2 pr2 pb2"
    }, ({
      uiState,
      version
    }) => /*#__PURE__*/React.createElement(WorkflowTemplateCardTabs, {
      template: version,
      uiState: uiState
    })))));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowTemplateDraftsList, {
  handleCreateDraftClick: action,
  handleCreateDraftCancel: action,
  handleEditDraft: action,
  showCreateDraftWizard: observable
});
export default inject('workflowTemplateDraftsStore')(withRouter(observer(WorkflowTemplateDraftsList)));
//# sourceMappingURL=WorkflowTemplateDraftsList.js.map