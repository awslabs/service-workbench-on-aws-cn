"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWizard = createWizard;
exports.Wizard = exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ====================================================================================================================================
// Step
// ====================================================================================================================================
var Step = _mobxStateTree.types.model('Step', {
  key: _mobxStateTree.types.string,
  title: _mobxStateTree.types.string,
  desc: _mobxStateTree.types.optional(_mobxStateTree.types.string, ''),
  isComplete: false
}).actions(function (self) {
  return {
    setComplete: function setComplete(isComplete) {
      self.isComplete = isComplete;
    }
  };
}); // ====================================================================================================================================
// Wizard
// ====================================================================================================================================


var Wizard = _mobxStateTree.types.model('Wizard', {
  steps: _mobxStateTree.types.array(Step),
  currentIdx: 0
}).actions(function (self) {
  return {
    next: function next() {
      if (self.hasNext) {
        self.currentIdx += 1;
      }
    },
    previous: function previous() {
      if (self.hasPrevious) {
        self.currentIdx -= 1;
      }
    },
    goTo: function goTo(stepKey) {
      var stepIdx = _lodash["default"].findIndex(self.steps, {
        key: stepKey
      });

      if (stepIdx >= 0) {
        self.currentIdx = stepIdx;
      }
    }
  };
}).views(function (self) {
  return {
    get currentStep() {
      return self.steps[self.currentIdx];
    },

    get hasNext() {
      return self.currentIdx < self.steps.length - 1;
    },

    get hasPrevious() {
      return self.currentIdx > 0;
    },

    isStepActive: function isStepActive(stepKey) {
      return _lodash["default"].findIndex(self.steps, {
        key: stepKey
      }) === self.currentIdx;
    }
  };
});

exports.Wizard = Wizard;

function createWizard(steps) {
  var currentIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Wizard.create({
    steps: steps,
    currentIdx: currentIdx
  });
}

var _default = Wizard;
exports["default"] = _default;
//# sourceMappingURL=Wizard.js.map