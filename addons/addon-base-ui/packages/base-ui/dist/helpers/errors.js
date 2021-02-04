"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isForbidden = exports.isTokenExpired = exports.isNotFound = exports.boom = void 0;

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
var codes = ['apiError', 'notFound', 'badRequest', 'tokenExpired', 'incorrectImplementation', 'timeout'];
var boom = {
  error: function error(friendlyOrErr, code) {
    var friendly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if (_lodash["default"].isString(friendlyOrErr)) {
      var e = new Error(friendlyOrErr);
      e.isBoom = true;
      e.code = code;
      e.friendly = friendlyOrErr; // the friendly argument is ignored and friendlyOrErr is used instead

      return e;
    }

    if (_lodash["default"].isError(friendlyOrErr)) {
      friendlyOrErr.code = code; // eslint-disable-line no-param-reassign

      friendlyOrErr.isBoom = true; // eslint-disable-line no-param-reassign

      friendlyOrErr.friendly = friendly || _lodash["default"].startCase(code);
      return friendlyOrErr;
    } // if we are here, it means that the msgOrErr is an object


    var err = new Error(JSON.stringify(friendlyOrErr));
    err.isBoom = true;
    err.code = code;
    err.friendly = friendly || _lodash["default"].startCase(code);
    return err;
  }
}; // inject all the codes array elements as properties for the boom
// example 'apiError' injected => produces boom.apiError(errOrFriendlyMsg, friendlyMsg)
// then you can call boom.apiError(err, 'Error fetching user info')

exports.boom = boom;
codes.forEach(function (code) {
  boom[code] = function (errOrFriendlyMsg, friendlyMsg) {
    return boom.error(errOrFriendlyMsg, code, friendlyMsg);
  };
});

var isNotFound = function isNotFound(error) {
  return _lodash["default"].get(error, 'code') === 'notFound';
};

exports.isNotFound = isNotFound;

var isTokenExpired = function isTokenExpired(error) {
  return _lodash["default"].get(error, 'code') === 'tokenExpired';
};

exports.isTokenExpired = isTokenExpired;

var isForbidden = function isForbidden(error) {
  return _lodash["default"].get(error, 'code') === 'forbidden';
};

exports.isForbidden = isForbidden;
//# sourceMappingURL=errors.js.map