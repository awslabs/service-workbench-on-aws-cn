"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.Environment = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _SessionStore = require("@aws-ee/base-ui/dist/models/SessionStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _InstanceInfo = require("./InstanceInfo");

var _api = require("../../helpers/api");

var _sageMakerService = _interopRequireDefault(require("../../helpers/sage-maker-service"));

var _localStorageKeys = _interopRequireDefault(require("../constants/local-storage-keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// Environment
// ==================================================================
var serviceCost = _mobxStateTree.types.model({
  amount: _mobxStateTree.types.number,
  unit: _mobxStateTree.types.string
});

var environmentCost = _mobxStateTree.types.model({
  startDate: _mobxStateTree.types.string,
  cost: _mobxStateTree.types.map(serviceCost)
});

var Environment = _mobxStateTree.types.model('Environment', {
  id: _mobxStateTree.types.identifier,
  rev: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  description: '',
  instanceInfo: _mobxStateTree.types.optional(_InstanceInfo.InstanceInfo, {}),
  name: '',
  status: '',
  indexId: '',
  projectId: '',
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  costs: _mobxStateTree.types.optional(_mobxStateTree.types.array(environmentCost), []),
  fetchingUrl: _mobxStateTree.types.optional(_mobxStateTree.types["boolean"], false),
  error: _mobxStateTree.types.maybeNull(_mobxStateTree.types.string),
  isExternal: _mobxStateTree.types.optional(_mobxStateTree.types["boolean"], false),
  stackId: _mobxStateTree.types.maybeNull(_mobxStateTree.types.string),
  sharedWithUsers: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.string), [])
}).actions(function (self) {
  return {
    setEnvironment: function setEnvironment(rawEnvironment) {
      // Note: if you have partial data vs full data, you need to replace the applySnapshot() with
      // the appropriate logic
      // Preserve the value of the fetchingUrl
      var fetchingUrl = self.fetchingUrl;
      (0, _mobxStateTree.applySnapshot)(self, rawEnvironment);
      self.fetchingUrl = fetchingUrl;
    },
    getEnvironmentUrl: function getEnvironmentUrl(user) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var creds, sm;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!self.isExternal) {
                  _context.next = 10;
                  break;
                }

                if (_lodash["default"].isEmpty(_utils.storage.getItem(_localStorageKeys["default"].pinToken))) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return user.unencryptedCreds(_utils.storage.getItem(_localStorageKeys["default"].pinToken));

              case 4:
                creds = _context.sent;
                sm = new _sageMakerService["default"](creds.accessKeyId, creds.secretAccessKey, creds.region);
                return _context.abrupt("return", sm.getPresignedNotebookInstanceUrl(self.instanceInfo.NotebookInstanceName));

              case 7:
                throw new Error('No PIN to decrypt User credientials');

              case 10:
                self.setFetchingUrl(true);
                return _context.abrupt("return", (0, _api.getEnvironmentUrl)(self.id));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setFetchingUrl: function setFetchingUrl(value) {
      self.fetchingUrl = value;
    },
    markAsTerminating: function markAsTerminating() {
      self.status = 'TERMINATING';
    },
    markAsStopping: function markAsStopping() {
      self.status = 'STOPPING';
    },
    markAsStarting: function markAsStarting() {
      self.status = 'STARTING';
    },
    getKeyPair: function getKeyPair() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (0, _api.getEnvironmentKeypair)(self.id, "".concat(self.id, ".pem")));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getWindowsPassword: function getWindowsPassword() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", Promise.all([self.getKeyPair(), (0, _api.getEnvironmentPasswordData)(self.id)]));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    // add view methods here
    get isTerminated() {
      return _lodash["default"].includes(['TERMINATING', 'TERMINATED', 'TERMINATING_FAILED'], this.status);
    },

    get isCompleted() {
      return _lodash["default"].includes(['COMPLETED'], this.status);
    },

    get isStopped() {
      return _lodash["default"].includes(['STOPPED'], this.status);
    },

    get isPending() {
      return _lodash["default"].includes(['PENDING'], this.status);
    },

    get isError() {
      return _lodash["default"].includes(['FAILED'], this.status);
    }

  };
}); // eslint-disable-next-line no-unused-vars


exports.Environment = Environment;

function registerContextItems(appContext) {
  _SessionStore.uiEventBus.listenTo('environmentDeleted', {
    id: 'Environment',
    listener: function () {
      var _listener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // event will be the environment object
                event.markAsTerminating();

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function listener(_x) {
        return _listener.apply(this, arguments);
      }

      return listener;
    }()
  });

  _SessionStore.uiEventBus.listenTo('environmentStopping', {
    id: 'Environment',
    listener: function () {
      var _listener2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(event) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // event will be the environment object
                event.markAsStopping();

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function listener(_x2) {
        return _listener2.apply(this, arguments);
      }

      return listener;
    }()
  });

  _SessionStore.uiEventBus.listenTo('environmentStarting', {
    id: 'Environment',
    listener: function () {
      var _listener3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(event) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // event will be the environment object
                event.markAsStarting();

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function listener(_x3) {
        return _listener3.apply(this, arguments);
      }

      return listener;
    }()
  });
}
//# sourceMappingURL=Environment.js.map