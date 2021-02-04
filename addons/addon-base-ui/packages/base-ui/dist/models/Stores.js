"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _BaseStore = require("./BaseStore");

var _utils = require("../helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// A way to load multiple stores and get the errors, etc.
var Stores = /*#__PURE__*/function () {
  function Stores() {
    var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Stores);

    var result = [];

    _lodash["default"].forEach(stores, function (store) {
      if (_lodash["default"].isEmpty(store) || _lodash["default"].isNil(store)) return;
      result.push(store);
    });

    this.stores = result;
  } // only if they are not loaded already, you can force loading if you want


  _createClass(Stores, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref,
            _ref$forceLoad,
            forceLoad,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref$forceLoad = _ref.forceLoad, forceLoad = _ref$forceLoad === void 0 ? false : _ref$forceLoad;

                _lodash["default"].forEach(this.stores, function (store) {
                  if (!forceLoad && (0, _BaseStore.isStoreReady)(store)) return;
                  (0, _utils.swallowError)(store.load());
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "ready",
    get: function get() {
      var answer = true;

      _lodash["default"].forEach(this.stores, function (store) {
        answer = answer && (0, _BaseStore.isStoreReady)(store);
      });

      return answer;
    }
  }, {
    key: "loading",
    get: function get() {
      var answer = false;

      _lodash["default"].forEach(this.stores, function (store) {
        if ((0, _BaseStore.isStoreLoading)(store)) {
          answer = true;
          return false; // to stop the loop
        }

        return undefined;
      });

      return answer;
    }
  }, {
    key: "hasError",
    get: function get() {
      return !!this.error;
    }
  }, {
    key: "error",
    get: function get() {
      var error;

      _lodash["default"].forEach(this.stores, function (store) {
        if ((0, _BaseStore.isStoreError)(store)) {
          error = store.error;
          return false; // to stop the loop
        }

        return undefined;
      });

      return error;
    }
  }]);

  return Stores;
}(); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(Stores, {
  stores: _mobx.observable,
  ready: _mobx.computed,
  loading: _mobx.computed,
  hasError: _mobx.computed,
  error: _mobx.computed
});
var _default = Stores;
exports["default"] = _default;
//# sourceMappingURL=Stores.js.map