"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEstimatedCost = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _EnvironmentConfigurationsStore = require("../models/environments/EnvironmentConfigurationsStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getEstimatedCost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(env, numberOfDaysToGetCostInfo) {
    var envConfig, allEnvConfigs, config, cost, allCost, i, day, costForDay;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            envConfig = _EnvironmentConfigurationsStore.EnvironmentConfigurationsStore.create();
            _context.next = 3;
            return envConfig.load();

          case 3:
            allEnvConfigs = envConfig.list;
            config = _lodash["default"].find(allEnvConfigs, function (conf) {
              // Hail EMR has spot pricing and on demand price. o we need to pick the correct EMR env config
              if (env.instanceInfo.type === 'emr') {
                if (env.instanceInfo.config.spotBidPrice) {
                  return conf.type === env.instanceInfo.type && conf.size === env.instanceInfo.size && conf.label.includes('Spot');
                }

                return conf.type === env.instanceInfo.type && conf.size === env.instanceInfo.size && conf.label.includes('On Demand');
              }

              return conf.type === env.instanceInfo.type && conf.size === env.instanceInfo.size;
            });
            cost = {};
            cost[config.type] = {
              amount: config.totalPrice,
              unit: 'USD'
            };
            allCost = [];

            for (i = numberOfDaysToGetCostInfo; i > 0; i--) {
              day = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
              costForDay = {
                startDate: day,
                cost: cost
              };
              allCost.push(costForDay);
            }

            return _context.abrupt("return", allCost);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEstimatedCost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // eslint-disable-next-line import/prefer-default-export


exports.getEstimatedCost = getEstimatedCost;
//# sourceMappingURL=externalCostUtil.js.map