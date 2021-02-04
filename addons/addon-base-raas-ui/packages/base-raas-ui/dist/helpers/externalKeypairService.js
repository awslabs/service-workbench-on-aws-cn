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
var EC2 = require('aws-sdk/clients/ec2');

var SSM = require('aws-sdk/clients/ssm');

var paramStoreRoot = 'raas';

var EnvironmentKeypairService = /*#__PURE__*/function () {
  function EnvironmentKeypairService(_ref) {
    var accessKeyId = _ref.accessKeyId,
        secretAccessKey = _ref.secretAccessKey,
        _ref$region = _ref.region,
        region = _ref$region === void 0 ? 'us-east-1' : _ref$region;

    _classCallCheck(this, EnvironmentKeypairService);

    if (accessKeyId) {
      this.ec2 = new EC2({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: region,
        sslEnabled: true
      });
      this.ssm = new SSM({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: region,
        sslEnabled: true
      });
    } else {
      this.ec2 = new EC2({
        sslEnabled: true
      });
      this.ssm = new SSM({
        sslEnabled: true
      });
    }
  }

  _createClass(EnvironmentKeypairService, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var keyPair, parameterName;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ec2.createKeyPair({
                  KeyName: id
                }).promise();

              case 2:
                keyPair = _context.sent;
                parameterName = "/".concat(paramStoreRoot, "/environments/").concat(id);
                _context.next = 6;
                return this.ssm.putParameter({
                  Name: parameterName,
                  Type: 'SecureString',
                  Value: keyPair.KeyMaterial,
                  Description: "ssh key for environment ".concat(id),
                  Overwrite: true
                }).promise();

              case 6:
                return _context.abrupt("return", keyPair.KeyName);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "mustFind",
    value: function () {
      var _mustFind = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var parameterName, privateKey;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                parameterName = "/".concat(paramStoreRoot, "/environments/").concat(id);
                _context2.next = 3;
                return this.ssm.getParameter({
                  Name: parameterName,
                  WithDecryption: true
                }).promise();

              case 3:
                privateKey = _context2.sent;
                return _context2.abrupt("return", {
                  privateKey: privateKey.Parameter.Value
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function mustFind(_x2) {
        return _mustFind.apply(this, arguments);
      }

      return mustFind;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var parameterName;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                parameterName = "/".concat(paramStoreRoot, "/environments/").concat(id);
                _context3.next = 3;
                return this.ec2.deleteKeyPair({
                  KeyName: id
                }).promise();

              case 3:
                _context3.next = 5;
                return this.ssm.deleteParameter({
                  Name: parameterName
                }).promise();

              case 5:
                return _context3.abrupt("return", true);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _delete(_x3) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return EnvironmentKeypairService;
}();

exports["default"] = EnvironmentKeypairService;
//# sourceMappingURL=externalKeypairService.js.map