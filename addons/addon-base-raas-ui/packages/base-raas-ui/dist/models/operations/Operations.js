"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Operations = /*#__PURE__*/function () {
  function Operations() {
    _classCallCheck(this, Operations);

    this.ops = [];
    this.status = 'notStarted'; // this is the overall status for all operations

    this.payload = {};
  }

  _createClass(Operations, [{
    key: "add",
    value: function add(op) {
      this.ops.push(op);
    }
  }, {
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload) {
        var _iterator, _step, op;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.status === 'running')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                this.payload = payload;
                this.markRunning();
                _iterator = _createForOfIteratorHelper(this.ops);
                _context.prev = 5;

                _iterator.s();

              case 7:
                if ((_step = _iterator.n()).done) {
                  _context.next = 19;
                  break;
                }

                op = _step.value;

                if (!op.success) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("continue", 17);

              case 11:
                if (!op.running) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("continue", 17);

              case 13:
                if (!op.skipped) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("continue", 17);

              case 15:
                _context.next = 17;
                return op.run(this.payload);

              case 17:
                _context.next = 7;
                break;

              case 19:
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](5);

                _iterator.e(_context.t0);

              case 24:
                _context.prev = 24;

                _iterator.f();

                return _context.finish(24);

              case 27:
                this.markFinished();

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 21, 24, 27]]);
      }));

      function run(_x) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "rerun",
    value: function () {
      var _rerun = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.status === 'running')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                this.markNotStarted();
                this.run(this.payload);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function rerun() {
        return _rerun.apply(this, arguments);
      }

      return rerun;
    }()
  }, {
    key: "markNotStarted",
    value: function markNotStarted() {
      this.status = 'notStarted';
    }
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
    key: "clear",
    value: function clear() {
      this.ops.clear();
      this.status = 'notStarted';
      this.payload = {};
    }
  }, {
    key: "running",
    get: function get() {
      return this.status === 'running';
    }
  }, {
    key: "notStarted",
    get: function get() {
      return this.status === 'notStarted';
    }
  }, {
    key: "started",
    get: function get() {
      return !this.notStarted;
    }
  }, {
    key: "success",
    get: function get() {
      if (this.status !== 'finished') return false;
      if (this.empty) return true;
      var result = true; // eslint-disable-next-line consistent-return

      _lodash["default"].forEach(this.ops, function (op) {
        if (op.failure) {
          result = false;
          return false; // to stop the forEach loop since we got the answer we want
        }
      });

      return result;
    } // If we have one or more operations that failed

  }, {
    key: "failure",
    get: function get() {
      if (this.status !== 'finished') return false;
      return !this.success;
    } // True if all operations failed (not even skipped)

  }, {
    key: "allFailed",
    get: function get() {
      if (this.status !== 'finished') return false;
      if (this.empty) return false;
      var result = true; // eslint-disable-next-line consistent-return

      _lodash["default"].forEach(this.ops, function (op) {
        if (op.success || op.skipped) {
          result = false;
          return false; // to stop the forEach loop since we got the answer we want
        }
      });

      return result;
    }
  }, {
    key: "empty",
    get: function get() {
      return this.ops.length === 0;
    }
  }]);

  return Operations;
}(); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(Operations, {
  ops: _mobx.observable,
  status: _mobx.observable,
  running: _mobx.computed,
  success: _mobx.computed,
  failure: _mobx.computed,
  allFailed: _mobx.computed,
  notStarted: _mobx.computed,
  markRunning: _mobx.action,
  markFinished: _mobx.action,
  markNotStarted: _mobx.action,
  clear: _mobx.action
});
var _default = Operations;
exports["default"] = _default;
//# sourceMappingURL=Operations.js.map