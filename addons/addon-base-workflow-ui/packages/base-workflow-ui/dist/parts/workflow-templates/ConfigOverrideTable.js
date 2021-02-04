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
import { observer } from 'mobx-react';
import { Table, Icon } from 'semantic-ui-react';
import c from 'classnames';
import Toggle from '@aws-ee/base-ui/dist/parts/helpers/fields/Toggle'; // expected props
// - rows (via props), an array of objects, [ { name, title, allowed }, { name, title, allowed }, ... ], if editable = false
//                     otherwise the array is expected to be an array of mobx form fields instances
// - editable (via props), is this a toggle table?
// - className (via props)

const Component = observer(({
  rows = [],
  className = '',
  editable = false,
  processing = false
}) => {
  if (rows.length === 0) return null;

  const getTitle = item => editable ? item.label : item.title;

  return /*#__PURE__*/React.createElement(Table, {
    basic: "very",
    className: c('animated', className)
  }, /*#__PURE__*/React.createElement(Table.Header, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.HeaderCell, {
    width: 10
  }, "Key"), /*#__PURE__*/React.createElement(Table.HeaderCell, {
    width: 6
  }, "Can be changed?"))), /*#__PURE__*/React.createElement(Table.Body, null, _.map(rows, (item, index) => /*#__PURE__*/React.createElement(Table.Row, {
    key: `${index}-${getTitle(item)}`
  }, /*#__PURE__*/React.createElement(Table.Cell, null, renderKey({
    name: item.name,
    title: getTitle(item)
  })), /*#__PURE__*/React.createElement(Table.Cell, null, !editable && renderValue(item), editable && /*#__PURE__*/React.createElement(Toggle, {
    field: item,
    disabled: processing,
    show: "toggleOnly",
    className: "mb0"
  }))))));
});

function renderValue({
  allowed
}) {
  if (allowed) return /*#__PURE__*/React.createElement("span", {
    className: "op-3"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "toggle on",
    color: "blue",
    size: "large",
    className: "mr1"
  }), "Yes");
  return /*#__PURE__*/React.createElement("span", {
    className: "op-3"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "toggle off",
    size: "large",
    color: "grey",
    className: "mr1"
  }), "No");
}

function renderKey({
  title = '',
  name
}) {
  const hasTitle = !_.isEmpty(title);

  if (hasTitle) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, title), /*#__PURE__*/React.createElement("div", {
      className: "fs-7 color-grey"
    }, name));
  }

  return /*#__PURE__*/React.createElement("div", null, name);
}

export default Component;
//# sourceMappingURL=ConfigOverrideTable.js.map