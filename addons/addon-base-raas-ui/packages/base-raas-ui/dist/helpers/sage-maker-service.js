"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var SageMaker = require('aws-sdk/clients/sagemaker');

var SageMakerService = /*#__PURE__*/function () {
  function SageMakerService(accessKeyId, secretAccessKey) {
    var region = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'us-east-1';

    _classCallCheck(this, SageMakerService);

    if (accessKeyId) {
      this.sm = new SageMaker({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: region,
        sslEnabled: true
      });
    } else {
      this.sm = new SageMaker({
        sslEnabled: true
      });
    }
  }

  _createClass(SageMakerService, [{
    key: "getPresignedNotebookInstanceUrl",
    value: function () {
      var _getPresignedNotebookInstanceUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(notebookInstanceName) {
        var params;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  NotebookInstanceName: notebookInstanceName
                };
                return _context.abrupt("return", this.sm.createPresignedNotebookInstanceUrl(params).promise());

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPresignedNotebookInstanceUrl(_x) {
        return _getPresignedNotebookInstanceUrl.apply(this, arguments);
      }

      return getPresignedNotebookInstanceUrl;
    }()
  }]);

  return SageMakerService;
}();

exports["default"] = SageMakerService;
//# sourceMappingURL=sage-maker-service.js.map