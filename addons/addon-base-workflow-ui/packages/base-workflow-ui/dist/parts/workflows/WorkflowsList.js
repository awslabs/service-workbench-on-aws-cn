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
import { withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import WorkflowPublishedList from './published/WorkflowPublishedList';
import WorkflowDraftsList from './drafts/WorkflowDraftsList'; // expected props
// - location (from react router)

class WorkflowsList extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return /*#__PURE__*/React.createElement(Container, {
      className: "mt3"
    }, /*#__PURE__*/React.createElement(WorkflowPublishedList, null), /*#__PURE__*/React.createElement(WorkflowDraftsList, null));
  }

}

export default inject()(withRouter(observer(WorkflowsList)));
//# sourceMappingURL=WorkflowsList.js.map