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
import { decorate, action } from 'mobx';
import { Tab, Grid, Label, Segment } from 'semantic-ui-react';
import PropertySection from './PropertySection';
import WorkflowTemplateStep from './WorkflowTemplateStep'; // expected props
// - template - either a WorkflowTemplateVersion model instance (via props)
// - uiState - to keep track of the active tab (via props)
// - className (via props)

class WorkflowTemplateCardTabs extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleOnTabChange = (_event, data) => {
      this.getState().setMainTabIndex(data.activeIndex);
    };
  }

  getState() {
    return this.props.uiState;
  }

  selectedMainTabIndex() {
    return this.getState().mainTabIndex;
  }

  getTemplate() {
    return this.props.template;
  }

  render() {
    const className = this.props.className || 'mt0';
    const template = this.getTemplate();
    const activeIndex = this.selectedMainTabIndex();
    /* eslint-disable react/no-danger */

    const panes = [{
      menuItem: 'Description',
      render: () => /*#__PURE__*/React.createElement(Tab.Pane, {
        basic: true,
        attached: false
      }, /*#__PURE__*/React.createElement(Observer, null, () => /*#__PURE__*/React.createElement("div", {
        className: "animated",
        dangerouslySetInnerHTML: {
          __html: template.descHtml
        }
      })))
    }, {
      menuItem: 'Steps',
      render: () => /*#__PURE__*/React.createElement(Tab.Pane, {
        basic: true,
        attached: false
      }, /*#__PURE__*/React.createElement(Observer, null, () => this.renderSteps(template)))
    }, {
      menuItem: 'Properties',
      render: () => /*#__PURE__*/React.createElement(Tab.Pane, {
        basic: true,
        attached: false
      }, /*#__PURE__*/React.createElement(PropertySection, {
        model: template
      }))
    }];
    /* eslint-enable react/no-danger */

    return /*#__PURE__*/React.createElement(Tab, {
      className: className,
      activeIndex: activeIndex,
      menu: {
        secondary: true,
        pointing: true
      },
      panes: panes,
      onTabChange: this.handleOnTabChange
    });
  }

  renderSteps(template) {
    const steps = template.selectedSteps || [];

    if (steps.length === 0) {
      return /*#__PURE__*/React.createElement("span", null, "No steps are provided");
    }

    return /*#__PURE__*/React.createElement(Grid, {
      padded: false,
      className: "animated"
    }, _.map(steps, (step, index) => /*#__PURE__*/React.createElement(Grid.Row, {
      key: index,
      className: "pb0"
    }, /*#__PURE__*/React.createElement(Grid.Column, {
      width: 1
    }, /*#__PURE__*/React.createElement(Label, {
      circular: true,
      className: "mt1 mb1"
    }, index + 1)), /*#__PURE__*/React.createElement(Grid.Column, {
      width: 15
    }, /*#__PURE__*/React.createElement(Segment, {
      className: "p0 pl1 flex"
    }, /*#__PURE__*/React.createElement(WorkflowTemplateStep, {
      step: step
    }))))));
  }

} // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


decorate(WorkflowTemplateCardTabs, {
  handleOnTabChange: action
});
export default inject()(observer(WorkflowTemplateCardTabs));
//# sourceMappingURL=WorkflowTemplateCardTabs.js.map