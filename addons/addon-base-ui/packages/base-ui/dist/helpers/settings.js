"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoLogoutTimeoutInMinutes = exports.branding = exports.region = exports.stage = exports.websiteUrl = exports.isLocalDev = exports.apiPath = exports.awsRegion = void 0;

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
var isLocalDev = process.env.REACT_APP_LOCAL_DEV === 'true';
exports.isLocalDev = isLocalDev;
var awsRegion = process.env.REACT_APP_AWS_REGION;
exports.awsRegion = awsRegion;
var apiPath = process.env.REACT_APP_API_URL;
exports.apiPath = apiPath;
var websiteUrl = process.env.REACT_APP_WEBSITE_URL;
exports.websiteUrl = websiteUrl;
var stage = process.env.REACT_APP_STAGE;
exports.stage = stage;
var region = process.env.REACT_APP_REGION;
exports.region = region;
var autoLogoutTimeoutInMinutes = process.env.REACT_APP_AUTO_LOGOUT_TIMEOUT_IN_MINUTES || 30;
exports.autoLogoutTimeoutInMinutes = autoLogoutTimeoutInMinutes;
var branding = {
  login: {
    title: process.env.REACT_APP_BRAND_LOGIN_TITLE,
    subtitle: process.env.REACT_APP_BRAND_LOGIN_SUBTITLE
  },
  main: {
    title: process.env.REACT_APP_BRAND_MAIN_TITLE
  },
  page: {
    title: process.env.REACT_APP_BRAND_PAGE_TITLE
  }
};
exports.branding = branding;
//# sourceMappingURL=settings.js.map