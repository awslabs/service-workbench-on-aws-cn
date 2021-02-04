"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.uiEventBus = exports.sessionStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventBus = /*#__PURE__*/function () {
  function EventBus() {
    _classCallCheck(this, EventBus);

    this.listenersMap = {};
  }

  _createClass(EventBus, [{
    key: "listenTo",
    value: function listenTo(channel, _ref) {
      var id = _ref.id,
          listener = _ref.listener;
      var entries = this.listenersMap[channel] || [];
      entries.push({
        id: id,
        listener: listener
      });
      this.listenersMap[channel] = entries;
    }
  }, {
    key: "fireEvent",
    value: function () {
      var _fireEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(channel, event) {
        var keys, _iterator, _step, key, entries, _iterator2, _step2, entry;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                keys = _lodash["default"].keys(this.listenersMap);
                /* eslint-disable no-restricted-syntax, no-await-in-loop */

                _iterator = _createForOfIteratorHelper(keys);
                _context.prev = 2;

                _iterator.s();

              case 4:
                if ((_step = _iterator.n()).done) {
                  _context.next = 27;
                  break;
                }

                key = _step.value;

                if (!_lodash["default"].startsWith(key, channel)) {
                  _context.next = 25;
                  break;
                }

                entries = this.listenersMap[key];
                _iterator2 = _createForOfIteratorHelper(entries);
                _context.prev = 9;

                _iterator2.s();

              case 11:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 17;
                  break;
                }

                entry = _step2.value;
                _context.next = 15;
                return entry.listener(event, {
                  entry: entry,
                  channel: channel
                });

              case 15:
                _context.next = 11;
                break;

              case 17:
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](9);

                _iterator2.e(_context.t0);

              case 22:
                _context.prev = 22;

                _iterator2.f();

                return _context.finish(22);

              case 25:
                _context.next = 4;
                break;

              case 27:
                _context.next = 32;
                break;

              case 29:
                _context.prev = 29;
                _context.t1 = _context["catch"](2);

                _iterator.e(_context.t1);

              case 32:
                _context.prev = 32;

                _iterator.f();

                return _context.finish(32);

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 29, 32, 35], [9, 19, 22, 25]]);
      }));

      function fireEvent(_x, _x2) {
        return _fireEvent.apply(this, arguments);
      }

      return fireEvent;
    }()
    /* eslint-enable no-restricted-syntax, no-await-in-loop */
    // TODO stopListening(id, channel) { }

  }]);

  return EventBus;
}();

var uiEventBus = new EventBus(); // A simple key/value store that only exists while the browser tab is open.
// You can choose to store your component ui states in here when applicable.

exports.uiEventBus = uiEventBus;

var SessionStore = /*#__PURE__*/function () {
  function SessionStore() {
    _classCallCheck(this, SessionStore);

    this.map = new Map();
  }

  _createClass(SessionStore, [{
    key: "cleanup",
    value: function cleanup() {
      this.map.clear();
    } // remove all keys that start with the prefix

  }, {
    key: "removeStartsWith",
    value: function removeStartsWith(prefix) {
      // map api https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
      // for of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
      var keys = this.map.keys();
      /* eslint-disable no-restricted-syntax */

      var _iterator3 = _createForOfIteratorHelper(keys),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var key = _step3.value;

          if (_lodash["default"].startsWith(key, prefix)) {
            this.map["delete"](key);
          }
        }
        /* eslint-enable no-restricted-syntax */

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.map.get(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.map.set(key, value);
    }
  }]);

  return SessionStore;
}();

var sessionStore = new SessionStore();
exports.sessionStore = sessionStore;

function registerContextItems(appContext) {
  appContext.sessionStore = sessionStore;
  appContext.uiEventBus = uiEventBus;
}
//# sourceMappingURL=SessionStore.js.map