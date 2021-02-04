"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Operation = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _Err = require("@aws-ee/base-ui/dist/models/Err");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// Operation
// ==================================================================
var Operation = _mobxStateTree.types.model('Operation', {
  id: '',
  state: 'initial',
  // initial, processing, completed
  error: _mobxStateTree.types.maybe(_Err.Err)
}).actions(function () {
  return {
    // I had issues using runInAction from mobx
    // the issue is discussed here https://github.com/mobxjs/mobx-state-tree/issues/915
    runInAction: function runInAction(fn) {
      return fn();
    }
  };
}).actions(function (self) {
  return {
    run: function run(fn) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self.state = 'processing';
                _context.prev = 1;
                _context.next = 4;
                return fn();

              case 4:
                self.runInAction(function () {
                  self.error = undefined;
                });
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                self.runInAction(function () {
                  self.error = (0, _Err.toErr)(_context.t0);
                });
                throw _context.t0;

              case 11:
                _context.prev = 11;
                self.runInAction(function () {
                  self.state = 'completed';
                });
                return _context.finish(11);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7, 11, 14]]);
      }))();
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    get initial() {
      return self.state === 'initial';
    },

    get processing() {
      return self.state === 'processing';
    },

    get completed() {
      return self.state === 'completed';
    },

    get hasError() {
      return !!self.error;
    },

    get errorMessage() {
      return self.error ? self.error.message || 'unknown error' : '';
    }

  };
}); // eslint-disable-line import/prefer-default-export


exports.Operation = Operation;
//# sourceMappingURL=Operation.js.map