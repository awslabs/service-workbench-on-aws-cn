"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewSession = createNewSession;
exports.Session = void 0;

var _mobxStateTree = require("mobx-state-tree");

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
// import { createSession } from '../../helpers/api';
var File = _mobxStateTree.types.model('File', {
  name: '',
  // the extension of the file determines its type such as cram or crai
  size: _mobxStateTree.types.optional(_mobxStateTree.types.number, 0)
});

var Run = _mobxStateTree.types.model('Run', {
  id: '',
  sample: '',
  alignment: '',
  sex: '',
  center: '',
  release: '',
  files: _mobxStateTree.types.optional(_mobxStateTree.types.array(File), [])
});

var Consent = _mobxStateTree.types.model('Consent', {
  id: '',
  // such as 'phs00001.v1.p1.c1
  name: '',
  // 'code --- qualifier'
  runs: _mobxStateTree.types.optional(_mobxStateTree.types.array(Run), [])
});

var Token = _mobxStateTree.types.model('Token', {
  id: '',
  expireAt: '',
  sessionId: '',
  username: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, ''))
});

var Study = _mobxStateTree.types.model('Study', {
  id: '',
  name: '',
  consents: _mobxStateTree.types.optional(_mobxStateTree.types.array(Consent), [])
});

var Session = _mobxStateTree.types.model('Session', {
  id: _mobxStateTree.types.identifier,
  title: '',
  studies: _mobxStateTree.types.optional(_mobxStateTree.types.array(Study), []),
  tokens: _mobxStateTree.types.optional(_mobxStateTree.types.array(Token), [])
}); // eslint-disable-next-line no-unused-vars


exports.Session = Session;

function createNewSession(raw) {
  return Promise.resolve() // .then(() => createSession(raw))
  .then(function (result) {
    return Session.create(result);
  });
}
//# sourceMappingURL=Session.js.map