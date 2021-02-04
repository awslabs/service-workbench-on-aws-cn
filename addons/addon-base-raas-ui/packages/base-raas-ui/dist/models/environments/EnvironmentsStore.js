"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.EnvironmentsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils2 = require("@aws-ee/base-services/lib/helpers/utils");

var _externalCostUtil = require("../../helpers/externalCostUtil");

var _localStorageKeys = _interopRequireDefault(require("../constants/local-storage-keys"));

var _api = require("../../helpers/api");

var _Environment = require("./Environment");

var _EnvironmentStore = require("./EnvironmentStore");

var _cfnService = _interopRequireDefault(require("../../helpers/cfn-service"));

var _externalKeypairService = _interopRequireDefault(require("../../helpers/externalKeypairService"));

var _externalVpcService = _interopRequireDefault(require("../../helpers/externalVpcService"));

var _externalAccountDetails = _interopRequireDefault(require("../../helpers/externalAccountDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// EnvironmentsStore
// ==================================================================
var EnvironmentsStore = _BaseStore.BaseStore.named('EnvironmentsStore').props({
  environments: _mobxStateTree.types.optional(_mobxStateTree.types.map(_Environment.Environment), {}),
  environmentStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_EnvironmentStore.EnvironmentStore), {}),
  tickPeriod: 30 * 1000 // 30 seconds

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var environments, costPromises, costInfo, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getEnvironments)();

              case 2:
                environments = _context.sent;
                _context.prev = 3;
                costPromises = environments.map(function (env) {
                  if (env.isExternal) {
                    return (0, _externalCostUtil.getEstimatedCost)(env, 1);
                  }

                  return (0, _api.getEnvironmentCost)(env.id, 1);
                });
                _context.next = 7;
                return Promise.all(costPromises);

              case 7:
                costInfo = _context.sent;

                for (i = 0; i < environments.length; i++) {
                  environments[i].costs = costInfo[i];
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                (0, _notification.displayWarning)('Error encountered retrieving cost data', _context.t0);

              case 14:
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.environments, environments, function (exiting, newItem) {
                    exiting.setEnvironment(newItem);
                  });
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }))();
    },
    addEnvironment: function addEnvironment(rawEnvironment) {
      var id = rawEnvironment.id;
      var previous = self.environments.get(id);

      if (!previous) {
        self.environments.put(rawEnvironment);
      } else {
        previous.setEnvironment(rawEnvironment);
      }
    },
    getEnvironmentStore: function getEnvironmentStore(environmentId) {
      var entry = self.environmentStores.get(environmentId);

      if (!entry) {
        // Lazily create the store
        self.environmentStores.set(environmentId, _EnvironmentStore.EnvironmentStore.create({
          environmentId: environmentId
        }));
        entry = self.environmentStores.get(environmentId);
      }

      return entry;
    },
    stopEnvironment: function stopEnvironment(environment) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var uiEventBus;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                uiEventBus = (0, _mobxStateTree.getEnv)(self).uiEventBus;
                _context2.next = 3;
                return uiEventBus.fireEvent('environmentStopping', environment);

              case 3:
                _context2.next = 5;
                return (0, _api.stopEnvironment)(environment.id);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    startEnvironment: function startEnvironment(environment) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var uiEventBus;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                uiEventBus = (0, _mobxStateTree.getEnv)(self).uiEventBus;
                _context3.next = 3;
                return uiEventBus.fireEvent('environmentStarting', environment);

              case 3:
                _context3.next = 5;
                return (0, _api.startEnvironment)(environment.id);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    markAsTerminating: function markAsTerminating(id) {
      var previous = self.environments.get(id);

      if (previous) {
        previous.markAsTerminating();
      }
    },
    updateExternalEnvironment: function updateExternalEnvironment(environment, user, pin) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var creds, cfn, request, response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!environment.isExternal || !user.isExternalUser || _lodash["default"].isEmpty(_utils.storage.getItem(_localStorageKeys["default"].pinToken)))) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return user.unencryptedCreds(pin);

              case 4:
                creds = _context4.sent;
                cfn = new _cfnService["default"](creds.accessKeyId, creds.secretAccessKey, creds.region);
                request = {
                  id: environment.id
                };
                _context4.prev = 7;
                _context4.next = 10;
                return cfn.describeStack(environment.stackId);

              case 10:
                response = _context4.sent;

                _lodash["default"].assign(request, _this.convertCfnResponse(response, environment.instanceInfo));

                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](7);

                _lodash["default"].assign(request, {
                  status: 'FAILED',
                  error: _context4.t0.message
                });

              case 17:
                _context4.prev = 17;

                if (environment.status !== request.status) {
                  (0, _api.updateEnvironment)(request);
                }

                return _context4.finish(17);

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[7, 14, 17, 20]]);
      }))();
    },
    convertCfnResponse: function convertCfnResponse(response, instanceInfo) {
      if (!response.isDone) {
        return {
          status: 'PENDING'
        };
      }

      response.outputs.forEach(function (output) {
        _lodash["default"].assign(instanceInfo, _defineProperty({}, output.key, output.value));
      });
      instanceInfo = _lodash["default"].omitBy(instanceInfo, _lodash["default"].isEmpty);
      return response.isFailed ? {
        status: 'FAILED',
        error: response.statusReason,
        instanceInfo: instanceInfo
      } : response.status === 'DELETE_COMPLETE' ? {
        status: 'TERMINATED',
        instanceInfo: instanceInfo
      } : {
        status: 'COMPLETED',
        instanceInfo: instanceInfo
      };
    },
    deleteEnvironment: function deleteEnvironment(environment, user, pin) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var uiEventBus;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!environment.isExternal) {
                  _context5.next = 8;
                  break;
                }

                _context5.t0 = _this2;
                _context5.next = 4;
                return user.unencryptedCreds(pin);

              case 4:
                _context5.t1 = _context5.sent;
                _context5.t2 = environment;
                _context5.next = 8;
                return _context5.t0.deleteExternalEnvironment.call(_context5.t0, _context5.t1, _context5.t2);

              case 8:
                uiEventBus = (0, _mobxStateTree.getEnv)(self).uiEventBus;
                _context5.next = 11;
                return (0, _api.deleteEnvironment)(environment.id);

              case 11:
                _context5.next = 13;
                return uiEventBus.fireEvent('environmentDeleted', environment);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    deleteExternalEnvironment: function deleteExternalEnvironment(creds, environment) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var cfn, externalKeypairService;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cfn = new _cfnService["default"](creds.accessKeyId, creds.secretAccessKey, creds.region);
                _context6.next = 3;
                return cfn.deleteStack(environment.stackId);

              case 3:
                if (!(environment.instanceInfo.type !== 'sagemaker')) {
                  _context6.next = 7;
                  break;
                }

                externalKeypairService = new _externalKeypairService["default"](creds);
                _context6.next = 7;
                return externalKeypairService["delete"](environment.id);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    createEnvironment: function createEnvironment(environment) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var user, result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // environment = { platformId, configurationId, name, description, projectId, studyIds, params, pin }
                // - projectId is only available if the user is not external
                // - pin is only available if creation of the environment is done by an external researcher user role.
                //   and should never be sent to the server
                user = self.user;

                if (!user.isExternalResearcher) {
                  _context7.next = 13;
                  break;
                }

                _context7.t1 = _this3;
                _context7.next = 5;
                return user.unencryptedCreds(environment.pin);

              case 5:
                _context7.t2 = _context7.sent;
                _context7.t3 = user.username;
                _context7.t4 = _lodash["default"].omit(environment, ['pin']) // remove the pin, we don't want to send it to the server
                ;
                _context7.next = 10;
                return _context7.t1.createExternalEnvironment.call(_context7.t1, _context7.t2, _context7.t3, _context7.t4);

              case 10:
                _context7.t0 = _context7.sent;
                _context7.next = 16;
                break;

              case 13:
                _context7.next = 15;
                return (0, _api.createEnvironment)(environment);

              case 15:
                _context7.t0 = _context7.sent;

              case 16:
                result = _context7.t0;
                self.addEnvironment(result);
                return _context7.abrupt("return", self.getEnvironment(result.id));

              case 19:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    createExternalEnvironment: function createExternalEnvironment(creds, username, rawEnvironment) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var platformId, configurationId, configuration, type, title, size, _yield$getExternalAcc, accountId, environment, cfn, name, params, url, response;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                platformId = rawEnvironment.platformId, configurationId = rawEnvironment.configurationId;
                configuration = self.getComputeConfiguration(platformId, configurationId);
                type = configuration.type, title = configuration.title;
                size = configuration.getParam('size'); // We need to get the external account details to pass the account Id to the api to allow ami access

                _context8.next = 6;
                return (0, _externalAccountDetails["default"])(creds);

              case 6:
                _yield$getExternalAcc = _context8.sent;
                accountId = _yield$getExternalAcc.Account;
                _context8.next = 10;
                return (0, _api.createEnvironment)(_objectSpread({}, rawEnvironment, {
                  accountId: accountId
                }));

              case 10:
                environment = _context8.sent;
                cfn = new _cfnService["default"](creds.accessKeyId, creds.secretAccessKey, creds.region); // Stack naming combines datetime & randomString to avoid collisions when two workspaces are created at the same time

                name = "analysis-".concat(new Date().getTime(), "-").concat((0, _utils2.randomString)(10));
                _context8.next = 15;
                return _this4.getExternalParams({
                  environment: environment,
                  name: name,
                  creds: creds
                });

              case 15:
                params = _context8.sent;
                _context8.next = 18;
                return (0, _api.getExternalTemplate)("".concat(type, ".cfn.yml"));

              case 18:
                url = _context8.sent;
                _context8.next = 21;
                return cfn.createStack(name, params, url, username, "Created By ".concat(username, " - ").concat(title, " - ").concat(type, " - ").concat(size));

              case 21:
                response = _context8.sent;
                return _context8.abrupt("return", (0, _api.updateEnvironment)({
                  id: environment.id,
                  stackId: response.StackId
                }));

              case 23:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getExternalParams: function getExternalParams(_ref) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var _ref$environment, id, _ref$environment$inst, type, size, config, cidr, s3Mounts, iamPolicyDocument, environmentInstanceFiles, amiImage, name, creds, cfnParams, addParam, externalVpcService, _yield$externalVpcSer, vpcId, subnetId, isOnDemand, spotBidPrice, externalKeypairService, keyName;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _ref$environment = _ref.environment, id = _ref$environment.id, _ref$environment$inst = _ref$environment.instanceInfo, type = _ref$environment$inst.type, size = _ref$environment$inst.size, config = _ref$environment$inst.config, cidr = _ref$environment$inst.cidr, s3Mounts = _ref$environment$inst.s3Mounts, iamPolicyDocument = _ref$environment$inst.iamPolicyDocument, environmentInstanceFiles = _ref$environment$inst.environmentInstanceFiles, amiImage = _ref$environment.amiImage, name = _ref.name, creds = _ref.creds;
                cfnParams = [];

                addParam = function addParam(key, v) {
                  return cfnParams.push({
                    ParameterKey: key,
                    ParameterValue: "".concat(v)
                  });
                };

                addParam('Namespace', name);
                addParam('S3Mounts', s3Mounts);
                addParam('IamPolicyDocument', iamPolicyDocument);
                addParam('EnvironmentInstanceFiles', environmentInstanceFiles);
                externalVpcService = new _externalVpcService["default"](creds);
                _context9.next = 10;
                return externalVpcService.defaultVPCInfo();

              case 10:
                _yield$externalVpcSer = _context9.sent;
                vpcId = _yield$externalVpcSer.vpcId;
                subnetId = _yield$externalVpcSer.subnetId;
                addParam('VPC', vpcId);
                addParam('Subnet', subnetId);

                if (type === 'sagemaker') {
                  addParam('InstanceType', size); // Yes, size here is actually the instance type we want to send to cfn
                }

                if (!(type === 'emr')) {
                  _context9.next = 32;
                  break;
                }

                addParam('DiskSizeGB', config.diskSizeGb.toString());
                addParam('MasterInstanceType', size);
                addParam('WorkerInstanceType', config.workerInstanceSize);
                addParam('CoreNodeCount', config.workerInstanceCount.toString()); // Add parameters to support spot instance pricing if specified
                // TODO this needs to be parameterized

                isOnDemand = !config.spotBidPrice; // The spot bid price can only have 3 decimal places maximum

                spotBidPrice = isOnDemand ? '0' : config.spotBidPrice.toFixed(3);
                addParam('Market', isOnDemand ? 'ON_DEMAND' : 'SPOT');
                addParam('WorkerBidPrice', spotBidPrice); // These paramaters apply for types apart from sagemaker, but keep the logic simple for now

                externalKeypairService = new _externalKeypairService["default"](creds);
                _context9.next = 28;
                return externalKeypairService.create(id);

              case 28:
                keyName = _context9.sent;
                addParam('AmiId', amiImage);
                addParam('AccessFromCIDRBlock', cidr);
                addParam('KeyName', keyName);

              case 32:
                return _context9.abrupt("return", cfnParams);

              case 33:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    updateEnvironment: function updateEnvironment(environment) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _api.updateEnvironment)(environment);

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    cleanup: function cleanup() {
      _utils.storage.removeItem(_localStorageKeys["default"].pinToken);

      self.environments.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.environments.size === 0;
    },

    get total() {
      return self.environments.size;
    },

    get list() {
      var result = [];
      self.environments.forEach(function (environment) {
        return result.push(environment);
      });
      return _lodash["default"].reverse(_lodash["default"].sortBy(result, ['createdAt', 'name']));
    },

    getEnvironment: function getEnvironment(id) {
      return self.environments.get(id);
    },

    get user() {
      return (0, _mobxStateTree.getEnv)(self).userStore.user;
    },

    getComputeConfiguration: function getComputeConfiguration(platformId, configurationId) {
      var store = (0, _mobxStateTree.getEnv)(self).computePlatformsStore;
      var platform = store.getComputePlatform(platformId);
      if (!platform) return undefined;
      return platform.getConfiguration(configurationId);
    }
  };
});

exports.EnvironmentsStore = EnvironmentsStore;

function registerContextItems(appContext) {
  appContext.environmentsStore = EnvironmentsStore.create({}, appContext);
}
//# sourceMappingURL=EnvironmentsStore.js.map