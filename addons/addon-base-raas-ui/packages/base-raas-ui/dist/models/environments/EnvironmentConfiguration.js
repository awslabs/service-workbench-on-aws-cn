"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnvironmentConfiguration = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _api = require("../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SpotPriceHistoryItem = _mobxStateTree.types.model('SpotPriceHistoryItem', {
  availabilityZone: '',
  spotPrice: _mobxStateTree.types.number
});

var EnvironmentConfiguration = _mobxStateTree.types.model('EnvironmentConfiguration', {
  id: _mobxStateTree.types.identifier,
  type: '',
  size: '',
  label: '',
  price: _mobxStateTree.types.number,
  description: '',
  defaultCidr: '',
  properties: _mobxStateTree.types.frozen(),
  spotBidMultiplier: _mobxStateTree.types.optional(_mobxStateTree.types.number, 0),
  spotPriceHistory: _mobxStateTree.types.optional(_mobxStateTree.types.array(SpotPriceHistoryItem), []),
  emrConfiguration: _mobxStateTree.types.frozen()
}).actions(function (self) {
  return {
    setEnvironmentConfiguration: function setEnvironmentConfiguration(configuration) {
      // Note: if you have partial data vs full data, you need to replace the applySnapshot() with
      // the appropriate logic
      var fetchingSpotPriceHistory = self.fetchingSpotPriceHistory;
      (0, _mobxStateTree.applySnapshot)(self, configuration);
      self.fetchingSpotPriceHistory = fetchingSpotPriceHistory;
    },
    getSpotPriceHistory: function getSpotPriceHistory() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var spotInstance, prices;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                spotInstance = self.isEmrCluster ? self.emrConfiguration.workerInstanceSize : self.size;
                _context.next = 3;
                return (0, _api.getEnvironmentSpotPriceHistory)(spotInstance);

              case 3:
                prices = _context.sent;
                self.setSpotPriceHistory(prices);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setSpotPriceHistory: function setSpotPriceHistory(prices) {
      self.spotPriceHistory = prices;
    }
  };
}).views(function (self) {
  return {
    get isOnDemandPricing() {
      return !self.spotBidMultiplier;
    },

    get isEmrCluster() {
      return !!self.emrConfiguration;
    },

    get hasSpotPriceHistory() {
      return self.spotPriceHistory.length > 0;
    },

    get averageSpotPriceHistory() {
      if (self.hasSpotPriceHistory) {
        return self.spotPriceHistory.reduce(function (result, _ref) {
          var spotPrice = _ref.spotPrice;
          return result + spotPrice / self.spotPriceHistory.length;
        }, 0);
      }

      self.getSpotPriceHistory();
      return 0;
    },

    get spotBidPrice() {
      return self.averageSpotPriceHistory * self.spotBidMultiplier;
    },

    get isLoadingPrice() {
      return this.isOnDemandPricing ? false : self.averageSpotPriceHistory === 0;
    },

    get totalPrice() {
      if (self.isOnDemandPricing && !self.isEmrCluster) {
        return self.price * 24;
      }

      if (self.isOnDemandPricing && self.isEmrCluster) {
        var _self$emrConfiguratio = self.emrConfiguration,
            workerInstanceOnDemandPrice = _self$emrConfiguratio.workerInstanceOnDemandPrice,
            workerInstanceCount = _self$emrConfiguratio.workerInstanceCount;
        return (self.price + workerInstanceOnDemandPrice * workerInstanceCount) * 24;
      } // this is now a spot bid below the onDemand cost


      if (self.isEmrCluster) {
        var _workerInstanceCount = self.emrConfiguration.workerInstanceCount;
        return (self.price + self.spotBidPrice * _workerInstanceCount) * 24;
      } // last option is spot single node


      return self.spotBidPrice * 24;
    }

  };
}); // eslint-disable-next-line import/prefer-default-export


exports.EnvironmentConfiguration = EnvironmentConfiguration;
//# sourceMappingURL=EnvironmentConfiguration.js.map