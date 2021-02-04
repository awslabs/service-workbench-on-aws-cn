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
import { decorate, runInAction, action } from 'mobx';
import { withRouter } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { Header, Dropdown, Label } from 'semantic-ui-react';
import { displayError } from '@aws-ee/base-ui/dist/helpers/notification';
import getUIState from '../workflow-common/component-states/WorkflowCommonCardState';
import WorkflowTemplateCardTabs from './WorkflowTemplateCardTabs'; // expected props
// - template - a WorkflowTemplate model instance (via props)
// - v - the selected version number, will default to latest or existing state (via props)
// - userDisplayName (via injection)
// - location (from react router)

class WorkflowTemplateCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnVersionChange = ({
      value = 1
    }) => {
      this.getState().setVersionNumber(value);
    };

    runInAction(() => {
      const state = this.getState();
      const versionSpecified = !_.isNil(this.props.v);
      let v;

      if (versionSpecified) {
        v = this.props.v;
      } else if (state.versionNumber === -1) {
        v = this.props.template.latest.v;
      } else {
        v = state.versionNumber;
      }

      state.setVersionNumber(v);
    });
  }

  getState() {
    return getUIState(this.getTemplate().id);
  }

  selectedVersionNumber() {
    return this.getState().versionNumber;
  }

  getTemplate() {
    return this.props.template;
  }

  getTemplateVersion() {
    const template = this.getTemplate();
    const v = this.selectedVersionNumber();
    const version = template.getVersion(v);

    if (_.isEmpty(version)) {
      // This is an error
      displayError(`Version ${v} of this workflow template is not valid`);
      return {};
    }

    return version;
  }

  getUserDisplayName() {
    return this.props.userDisplayName;
  }

  render() {
    const templateVersion = this.getTemplateVersion();
    const {
      id,
      v,
      title,
      createdAt,
      createdBy
    } = templateVersion;
    const userDisplayName = this.getUserDisplayName();
    const isSystem = userDisplayName.isSystem({
      uid: createdBy
    });

    const by = () => isSystem ? '' : /*#__PURE__*/React.createElement("span", {
      className: "ml1"
    }, "by ", userDisplayName.getDisplayName({
      uid: createdBy
    }));

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, {
      attached: "top left"
    }, "Template"), /*#__PURE__*/React.createElement("div", {
      className: "flex mb1"
    }, /*#__PURE__*/React.createElement(Header, {
      as: "h3",
      color: "grey",
      className: "mt0 flex-auto ellipsis"
    }, title, /*#__PURE__*/React.createElement(Header.Subheader, {
      className: "fs-9"
    }, "created ", /*#__PURE__*/React.createElement(TimeAgo, {
      date: createdAt
    }), " ", by())), /*#__PURE__*/React.createElement("div", {
      className: "ml1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ellipsis pr1 fs-9 breakout color-grey"
    }, id), " ", this.renderVersionDropdown(v))), this.renderMainTabs(templateVersion));
  }

  renderVersionDropdown(currentVersion) {
    const template = this.getTemplate();
    const versions = template.versionNumbers;

    const options = _.map(versions, version => ({
      text: `v${version}`,
      value: version
    }));

    if (versions.length === 1) return /*#__PURE__*/React.createElement("span", {
      className: "bold color-grey pr2"
    }, "v", template.latest.v);
    return /*#__PURE__*/React.createElement(Dropdown, {
      className: "color-grey",
      inline: true,
      options: options,
      value: currentVersion,
      onChange: (e, data) => this.handleOnVersionChange(data)
    });
  }

  renderMainTabs(template) {
    const uiState = this.getState();
    return /*#__PURE__*/React.createElement(WorkflowTemplateCardTabs, {
      template: template,
      uiState: uiState
    });
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowTemplateCard, {
  handleOnVersionChange: action
});
export default inject('userDisplayName')(withRouter(observer(WorkflowTemplateCard)));
//# sourceMappingURL=WorkflowTemplateCard.js.map