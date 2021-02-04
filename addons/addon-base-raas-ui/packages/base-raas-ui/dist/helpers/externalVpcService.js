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

var SageMakerService = /*#__PURE__*/function () {
  function SageMakerService(_ref) {
    var accessKeyId = _ref.accessKeyId,
        secretAccessKey = _ref.secretAccessKey,
        _ref$region = _ref.region,
        region = _ref$region === void 0 ? 'us-east-1' : _ref$region;

    _classCallCheck(this, SageMakerService);

    if (accessKeyId) {
      this.ec2 = new EC2({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: region,
        sslEnabled: true
      });
    } else {
      this.ec2 = new EC2({
        sslEnabled: true
      });
    }
  }

  _createClass(SageMakerService, [{
    key: "defaultVPCInfo",
    value: function () {
      var _defaultVPCInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$this$ec2$descr, vpcs, _vpcs$find, vpcId, _yield$this$ec2$descr2, subnets, publicSubnets, _publicSubnets$reduce, subnetId;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ec2.describeVpcs({
                  Filters: [{
                    Name: 'isDefault',
                    Values: ['true']
                  }]
                }).promise();

              case 2:
                _yield$this$ec2$descr = _context.sent;
                vpcs = _yield$this$ec2$descr.Vpcs;
                _vpcs$find = vpcs.find(function (_ref2) {
                  var IsDefault = _ref2.IsDefault;
                  return IsDefault;
                }), vpcId = _vpcs$find.VpcId;
                _context.next = 7;
                return this.ec2.describeSubnets({
                  Filters: [{
                    Name: 'vpc-id',
                    Values: [vpcId]
                  }]
                }).promise();

              case 7:
                _yield$this$ec2$descr2 = _context.sent;
                subnets = _yield$this$ec2$descr2.Subnets;
                // Default subnets should be public, but just make sure
                publicSubnets = subnets.filter(function (_ref3) {
                  var MapPublicIpOnLaunch = _ref3.MapPublicIpOnLaunch;
                  return MapPublicIpOnLaunch;
                });
                _publicSubnets$reduce = publicSubnets.reduce(function (result, subnet) {
                  return subnet.AvailableIpAddressCount > result.AvailableIpAddressCount ? subnet : result;
                }), subnetId = _publicSubnets$reduce.SubnetId;
                return _context.abrupt("return", {
                  vpcId: vpcId,
                  subnetId: subnetId
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function defaultVPCInfo() {
        return _defaultVPCInfo.apply(this, arguments);
      }

      return defaultVPCInfo;
    }()
  }]);

  return SageMakerService;
}();

exports["default"] = SageMakerService;
//# sourceMappingURL=externalVpcService.js.map