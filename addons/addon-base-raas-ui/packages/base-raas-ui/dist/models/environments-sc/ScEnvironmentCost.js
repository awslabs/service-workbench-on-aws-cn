"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScEnvironmentCost = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/prefer-default-export */
// ==================================================================
// ScEnvironmentCost
// ==================================================================
var ScEnvironmentCost = _mobxStateTree.types.model('ScEnvironmentCost', {
  id: _mobxStateTree.types.identifier,
  // this will be at the client side which is the same as the env id + 'cost' as suffix
  entries: _mobxStateTree.types.frozen([]),
  error: ''
}).actions(function (self) {
  return {
    setScEnvironmentCost: function setScEnvironmentCost(rawData) {
      (0, _mobxStateTree.applySnapshot)(self, rawData);
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    get previousDayCost() {
      // We are making this assumption:
      // - the last element in the entries is assumed to be the previousDay entry
      var entry = _lodash["default"].last(self.entries);

      if (_lodash["default"].isEmpty(entry)) {
        return 0;
      } // entry has this shape {
      //  startDate: '20xx-xx-xx':
      //  cost: {
      //    <service name1>: { amount, unit },
      //    <service name2>: { amount, unit },
      //    ...
      //  }
      // }


      return self.getAmount(entry);
    },

    getAmount: function getAmount(entry) {
      return _lodash["default"].sum(_lodash["default"].map(entry.cost, function (value) {
        return _lodash["default"].get(value, 'amount', 0);
      }));
    },

    // Returns an array of objects, with two props.
    // Example: [ { date: '2020-07-20', amount: 100.0, unit: 'USD' }, ... ]
    get list() {
      var result = _lodash["default"].map(self.entries, function (entry) {
        return {
          date: entry.startDate,
          amount: self.getAmount(entry),
          unit: entry.unit
        };
      });

      return result;
    }

  };
});

exports.ScEnvironmentCost = ScEnvironmentCost;
//# sourceMappingURL=ScEnvironmentCost.js.map