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
import { Segment, Placeholder, Divider } from 'semantic-ui-react'; // expected props
// - segmentCount (via props)
// - className (via props)

const Component = ({
  segmentCount = 1
}) => {
  const segment = index => /*#__PURE__*/React.createElement(Segment, {
    key: index,
    className: "p3 mb2"
  }, /*#__PURE__*/React.createElement(Placeholder, {
    fluid: true
  }, /*#__PURE__*/React.createElement(Placeholder.Header, null, /*#__PURE__*/React.createElement(Placeholder.Line, {
    length: "full"
  })), /*#__PURE__*/React.createElement(Placeholder.Paragraph, null, /*#__PURE__*/React.createElement(Placeholder.Line, {
    length: "short"
  }))), /*#__PURE__*/React.createElement(Divider, {
    className: "mt3"
  }), /*#__PURE__*/React.createElement(Placeholder, {
    fluid: true
  }, /*#__PURE__*/React.createElement(Placeholder.Line, {
    length: "full"
  }), /*#__PURE__*/React.createElement(Placeholder.Line, {
    length: "full"
  }), /*#__PURE__*/React.createElement(Placeholder.Line, {
    length: "full"
  }), /*#__PURE__*/React.createElement(Placeholder.Line, {
    length: "full"
  })));

  return _.map(_.times(segmentCount, String), index => segment(index));
};

export default Component;
//# sourceMappingURL=ProgressPlaceholder.js.map