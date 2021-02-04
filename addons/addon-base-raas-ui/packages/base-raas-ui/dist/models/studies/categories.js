"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategoryById = getCategoryById;
exports.categories = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var categories = {
  myStudies: {
    name: 'My Studies',
    id: 'my-studies'
  },
  organization: {
    name: 'Organization',
    id: 'organization'
  },
  openData: {
    name: 'Open Data',
    id: 'open-data'
  }
};
exports.categories = categories;

function getCategoryById(id) {
  return _lodash["default"].find(categories, ['id', id]);
} // eslint-disable-line import/prefer-default-export
//# sourceMappingURL=categories.js.map