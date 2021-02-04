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
import React from 'react';
import { observer, inject } from 'mobx-react';
import { decorate, runInAction, action, observable } from 'mobx';
import { withRouter } from 'react-router-dom';
import { Accordion, Icon, Divider } from 'semantic-ui-react';
import PropertySection from './PropertySection';
import ConfigSection from './ConfigSection'; // expected props
// - step - an instance of WorkflowTemplateStep model (via props)
// - location (from react router)

class WorkflowTemplateStep extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnExpand = () => {
      this.expanded = !this.expanded;
    };

    runInAction(() => {
      this.expanded = false;
    });
  }

  getWorkflowTemplateStep() {
    return this.props.step;
  }

  getStepTemplate() {
    return this.getWorkflowTemplateStep().stepTemplate;
  }

  render() {
    const step = this.getWorkflowTemplateStep();
    const expanded = this.expanded;
    return /*#__PURE__*/React.createElement(Accordion, {
      className: "flex-auto overflow-hidden pr1"
    }, /*#__PURE__*/React.createElement(Accordion.Title, {
      active: expanded,
      index: 0,
      onClick: this.handleOnExpand
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex mt1 mb1"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dropdown",
      className: "inline-block",
      style: {
        marginTop: '3px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "ellipsis flex-auto"
    }, step.derivedTitle || step.title), /*#__PURE__*/React.createElement("div", {
      className: "ellipsis pl1 pr1 breakout fs-9 color-grey"
    }, step.templateId, " v", step.templateVer))), /*#__PURE__*/React.createElement(Accordion.Content, {
      active: expanded,
      className: "animated pt3 pl2 pr2 pb2 mb2"
    }, this.renderDescriptionSection(step), this.renderConfigurationSection(step), this.renderPropertiesSection(step)));
  }

  renderDescriptionSection(step) {
    /* eslint-disable react/no-danger */
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "file alternate outline",
      className: "mr1 color-grey"
    }), /*#__PURE__*/React.createElement("b", null, "Description"), /*#__PURE__*/React.createElement(Divider, {
      className: "mt1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mb4",
      dangerouslySetInnerHTML: {
        __html: step.descHtml
      }
    }));
    /* eslint-enable react/no-danger */
  }

  renderConfigurationSection(step) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mb4"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cog",
      className: "mr1 color-grey"
    }), /*#__PURE__*/React.createElement("b", null, "Configuration"), /*#__PURE__*/React.createElement(Divider, {
      className: "mt1 mb3"
    }), /*#__PURE__*/React.createElement(ConfigSection, {
      model: step
    }));
  }

  renderPropertiesSection(step) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "list alternate outline",
      className: "mr1 color-grey"
    }), /*#__PURE__*/React.createElement("b", null, "Properties"), /*#__PURE__*/React.createElement(Divider, {
      className: "mt1 mb3"
    }), /*#__PURE__*/React.createElement(PropertySection, {
      model: step
    }));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowTemplateStep, {
  expanded: observable,
  handleOnExpand: action
});
export default inject()(withRouter(observer(WorkflowTemplateStep)));
//# sourceMappingURL=WorkflowTemplateStep.js.map