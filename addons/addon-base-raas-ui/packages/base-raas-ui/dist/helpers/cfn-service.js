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
var _ = require('lodash');

var aws = require('aws-sdk');

var STACK_FAIL = ['CREATE_FAILED', 'ROLLBACK_FAILED', 'DELETE_FAILED', 'UPDATE_ROLLBACK_FAILED', 'ROLLBACK_COMPLETE', 'UPDATE_ROLLBACK_COMPLETE'];
var STACK_SUCCESS = ['CREATE_COMPLETE', 'DELETE_COMPLETE', 'UPDATE_COMPLETE'];

var CfnService = /*#__PURE__*/function () {
  function CfnService(accessKeyId, secretAccessKey) {
    var region = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'us-east-1';

    _classCallCheck(this, CfnService);

    if (accessKeyId) {
      this.cfn = new aws.CloudFormation({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: region,
        sslEnabled: true
      });
    } else {
      this.cfn = new aws.CloudFormation({
        sslEnabled: true
      });
    }
  }

  _createClass(CfnService, [{
    key: "isDone",
    value: function isDone(status) {
      return STACK_FAIL.includes(status) || STACK_SUCCESS.includes(status);
    }
  }, {
    key: "describeStack",
    value: function () {
      var _describeStack = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(stackName) {
        var params, response, stack, status, statusReason, outputs, outputsNormalized;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  StackName: stackName
                };
                _context.prev = 1;
                _context.next = 4;
                return this.cfn.describeStacks(params).promise();

              case 4:
                response = _context.sent;
                stack = _.get(response, 'Stacks[0]');
                status = _.get(stack, 'StackStatus', 'Unknown');
                statusReason = _.get(stack, 'StackStatusReason', 'Unknown');
                outputs = _.get(stack, 'Outputs', []);
                outputsNormalized = _.map(outputs, function (item) {
                  return {
                    key: item.OutputKey,
                    value: item.OutputValue,
                    description: item.Description,
                    exportName: item.ExportName
                  };
                });
                return _context.abrupt("return", {
                  status: status,
                  statusReason: statusReason,
                  isDone: this.isDone(status),
                  isFailed: STACK_FAIL.includes(status),
                  outputs: outputsNormalized
                });

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                throw new Error("".concat(_context.t0.code, ": ").concat(_context.t0.message));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13]]);
      }));

      function describeStack(_x) {
        return _describeStack.apply(this, arguments);
      }

      return describeStack;
    }()
  }, {
    key: "createStack",
    value: function () {
      var _createStack = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(stackName, cfnParams, templateUrl) {
        var description,
            input,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                description = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : '';
                input = {
                  StackName: stackName,
                  Parameters: cfnParams,
                  Capabilities: ['CAPABILITY_IAM', 'CAPABILITY_NAMED_IAM'],
                  TemplateURL: templateUrl,
                  Tags: [{
                    Key: 'Description',
                    Value: description
                  }]
                };
                return _context2.abrupt("return", this.cfn.createStack(input).promise());

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createStack(_x2, _x3, _x4) {
        return _createStack.apply(this, arguments);
      }

      return createStack;
    }()
  }, {
    key: "deleteStack",
    value: function () {
      var _deleteStack = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(stackName) {
        var input, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                input = {
                  StackName: stackName
                };
                _context3.next = 3;
                return this.cfn.deleteStack(input).promise();

              case 3:
                response = _context3.sent;
                return _context3.abrupt("return", response);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteStack(_x5) {
        return _deleteStack.apply(this, arguments);
      }

      return deleteStack;
    }()
  }], [{
    key: "validateCredentials",
    value: function () {
      var _validateCredentials = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(accessKeyId, secretAccessKey) {
        var sts;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                sts = new aws.STS({
                  accessKeyId: accessKeyId,
                  secretAccessKey: secretAccessKey,
                  sslEnabled: true
                });
                return _context4.abrupt("return", sts.getCallerIdentity().promise());

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function validateCredentials(_x6, _x7) {
        return _validateCredentials.apply(this, arguments);
      }

      return validateCredentials;
    }()
  }]);

  return CfnService;
}();

exports["default"] = CfnService;
//# sourceMappingURL=cfn-service.js.map