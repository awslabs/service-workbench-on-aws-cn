"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStoreError = exports.isStoreNew = exports.isStoreReloading = exports.isStoreLoading = exports.isStoreNotEmpty = exports.isStoreEmpty = exports.isStoreReady = exports.BaseStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _Err = require("./Err");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// A four-state model that has the following states:
//  +---------+                   +-----------+
//  | initial |            +----> |   ready   |
//  +---------+            |      +-----------+
//                         |
//      + ^                |         + ^
//      | |                |         | | success
// load | | error          |    load | | or error
//      v +                |         v +
//                         |
//  +---------+            |      +-----------+
//  | loading +------------+      | reloading |
//  +---------+   success         +-----------+
//
// state: <initial|loading|ready|reloading>
// error: <error object> if there is an error otherwise <undefined>
// empty: <true> if state is ready or reloading and the content is considered empty
var BaseStore = _mobxStateTree.types.model('BaseStore', {
  state: 'initial',
  error: _mobxStateTree.types.maybe(_Err.Err),
  tickPeriod: 7 * 1000,
  // 7 seconds
  heartbeatInterval: 0
}).actions(function () {
  return {
    // I had issues using runInAction from mobx
    // the issue is discussed here https://github.com/mobxjs/mobx-state-tree/issues/915
    runInAction: function runInAction(fn) {
      return fn();
    }
  };
}).actions(function (self) {
  var loadingPromise;
  return {
    load: function load() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (loadingPromise) return loadingPromise; // self.error = undefined; we don't want to clear the error here

      if (self.state === 'ready') self.state = 'reloading';else self.state = 'loading';
      loadingPromise = new Promise(function (resolve, reject) {
        // if ((self.state === 'loading') || (self.state === 'reloading')) return;
        try {
          self.doLoad.apply(self, args).then(function () {
            self.runInAction(function () {
              self.state = 'ready';
              self.error = undefined;
            });
            loadingPromise = undefined;
            resolve();
          })["catch"](function (err) {
            self.runInAction(function () {
              self.state = self.state === 'loading' ? 'initial' : 'ready';
              self.error = (0, _Err.toErr)(err);
            });
            loadingPromise = undefined;
            reject(err);
          });
        } catch (err) {
          self.runInAction(function () {
            self.state = self.state === 'loading' ? 'initial' : 'ready';
            self.error = (0, _Err.toErr)(err);
          });
          loadingPromise = undefined;
          reject(err);
        }
      });
      return loadingPromise;
    },
    startHeartbeat: function startHeartbeat() {
      if (self.heartbeatInterval !== 0) return; // there is one running

      if (!self.shouldHeartbeat()) return;
      var id = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (self.shouldHeartbeat()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return self.load();

              case 5:
                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 7]]);
      })), self.tickPeriod);
      self.heartbeatInterval = id;
    },
    shouldHeartbeat: function shouldHeartbeat() {
      return true; // extender can override this method
    },
    stopHeartbeat: function stopHeartbeat() {
      var id = self.heartbeatInterval;

      if (id !== 0) {
        clearInterval(id);
        self.heartbeatInterval = undefined;
      }
    },
    changeTickPeriod: function changeTickPeriod(period) {
      var beating = self.heartBeating;
      self.tickPeriod = period;

      if (beating) {
        self.stopHeartbeat();
        self.startHeartbeat();
      }
    },
    cleanup: function cleanup() {
      self.stopHeartbeat();
      self.state = 'initial';
      self.error = undefined;
    }
  };
}).views(function (self) {
  return {
    get heartBeating() {
      return self.heartbeatInterval > 0;
    },

    get initial() {
      return self.state === 'initial';
    },

    get ready() {
      return self.state === 'ready';
    },

    get loading() {
      return self.state === 'loading';
    },

    get reloading() {
      return self.state === 'reloading';
    },

    get errorMessage() {
      return self.error ? self.error.message || 'unknown error' : '';
    }

  };
});

exports.BaseStore = BaseStore;

var isStoreReady = function isStoreReady(obj) {
  return obj.ready || obj.reloading;
};

exports.isStoreReady = isStoreReady;

var isStoreEmpty = function isStoreEmpty(obj) {
  return (obj.ready || obj.reloading) && obj.empty;
};

exports.isStoreEmpty = isStoreEmpty;

var isStoreNotEmpty = function isStoreNotEmpty(obj) {
  return (obj.ready || obj.reloading) && !obj.empty;
};

exports.isStoreNotEmpty = isStoreNotEmpty;

var isStoreLoading = function isStoreLoading(obj) {
  return obj.loading;
};

exports.isStoreLoading = isStoreLoading;

var isStoreReloading = function isStoreReloading(obj) {
  return obj.reloading;
};

exports.isStoreReloading = isStoreReloading;

var isStoreNew = function isStoreNew(obj) {
  return obj.initial;
};

exports.isStoreNew = isStoreNew;

var isStoreError = function isStoreError(obj) {
  return !!obj.error;
};

exports.isStoreError = isStoreError;
//# sourceMappingURL=BaseStore.js.map