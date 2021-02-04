"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var counter = 0;
/**
 * A generic class that represents an operation. This class is not meant to be instantiated directly, instead you want
 * to extend this class and provide a method named 'doRun'
 */

var Operation = /*#__PURE__*/function () {
  function Operation() {
    _classCallCheck(this, Operation);

    this.status = 'notStarted';
    this.error = '';
    this.privateSkipped = false;
    counter += 1;
    this.id = "".concat(Date.now(), "-").concat(counter);
  }

  _createClass(Operation, [{
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.privateSkipped = false;
                this.clearError();
                this.clearMessage();
                this.markRunning();
                _context.next = 7;
                return this.doRun(payload);

              case 7:
                this.markFinished();
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                this.setError(_context.t0);
                this.markFinished();

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function run(_x) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "markRunning",
    value: function markRunning() {
      this.status = 'running';
    }
  }, {
    key: "markFinished",
    value: function markFinished() {
      this.status = 'finished';
    }
  }, {
    key: "markSkipped",
    value: function markSkipped() {
      this.markFinished();
      this.privateSkipped = true;
    }
  }, {
    key: "clearError",
    value: function clearError() {
      this.error = '';
    }
  }, {
    key: "setError",
    value: function setError(error) {
      if (_lodash["default"].isString(error)) this.error = error;else this.error = error.message;
    }
  }, {
    key: "setMessage",
    value: function setMessage() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.message = message;
    }
  }, {
    key: "clearMessage",
    value: function clearMessage() {
      this.message = '';
    }
  }, {
    key: "running",
    get: function get() {
      return this.status === 'running';
    }
  }, {
    key: "hasError",
    get: function get() {
      return this.error !== '';
    }
  }, {
    key: "skipped",
    get: function get() {
      return !this.failure && this.status === 'finished' && this.privateSkipped;
    }
  }, {
    key: "success",
    get: function get() {
      return this.status === 'finished' && !this.hasError && !this.privateSkipped;
    }
  }, {
    key: "failure",
    get: function get() {
      return this.status === 'finished' && this.hasError;
    }
  }]);

  return Operation;
}(); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(Operation, {
  id: _mobx.observable,
  status: _mobx.observable,
  message: _mobx.observable,
  error: _mobx.observable,
  running: _mobx.computed,
  hasError: _mobx.computed,
  success: _mobx.computed,
  failure: _mobx.computed,
  skipped: _mobx.computed,
  markRunning: _mobx.action,
  markFinished: _mobx.action,
  markSkipped: _mobx.action,
  clearError: _mobx.action,
  setError: _mobx.action,
  clearMessage: _mobx.action,
  setMessage: _mobx.action
});
var _default = Operation;
exports["default"] = _default;
//# sourceMappingURL=Operation.js.map