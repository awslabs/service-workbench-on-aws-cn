"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLink = createLink;
exports.createLinkWithSearch = createLinkWithSearch;
exports.reload = reload;
exports.gotoFn = gotoFn;

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
function createLinkWithSearch(_ref) {
  var location = _ref.location,
      pathname = _ref.pathname,
      search = _ref.search;
  return {
    pathname: pathname,
    search: search || location.search,
    hash: location.hash,
    state: location.state
  };
}

function createLink(_ref2) {
  var location = _ref2.location,
      pathname = _ref2.pathname;
  return {
    pathname: pathname,
    hash: location.hash,
    state: location.state
  };
}

function reload() {
  setTimeout(function () {
    window.location.reload();
  }, 150);
}
/**
 * A generic goto function creator function that returns a go to function bound to the given react component.
 *
 * See below snippet as an example for using this function from within some react component
 * containing "location" and "history" props.
 *
 * const goto = gotoFn(this);
 * goto('/some-path');
 *
 * @param reactComponent A react component that has "location" and "history" props as injected via the "withRouter" function.
 * @returns {{new(...args: any[]): any} | ((...args: any[]) => any) | OmitThisParameter<goto> | goto | any | {new(...args: any[]): any} | ((...args: any[]) => any)}
 */


function gotoFn(reactComponent) {
  function _goto(pathname) {
    var location = reactComponent.props.location;
    var link = createLink({
      location: location,
      pathname: pathname
    });
    reactComponent.props.history.push(link);
  }

  return _goto.bind(reactComponent);
}
//# sourceMappingURL=routing.js.map