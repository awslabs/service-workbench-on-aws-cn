"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScEnvironment = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 'COMPLETED', 'PENDING', 'TAINTED', 'FAILED', 'TERMINATING', 'TERMINATED', 'TERMINATING_FAILED', 'UNKNOWN'
// Note: 'UNKNOWN' is not something that is returned from the server, it is here to catch any other status
// that we don't know about.
var states = [{
  key: 'COMPLETED',
  display: 'AVAILABLE',
  color: 'green',
  tip: 'The workspace is ready to be used.',
  spinner: false,
  canTerminate: true,
  canConnect: true,
  canStop: true,
  canStart: false
}, {
  key: 'PENDING',
  display: 'PENDING',
  color: 'orange',
  tip: 'The workspace is being prepared, this could take sometime.',
  spinner: true,
  canTerminate: false,
  canConnect: false,
  canStop: false,
  canStart: false
}, {
  key: 'STOPPED',
  display: 'STOPPED',
  color: 'orange',
  tip: 'The workspace is stopped.',
  spinner: false,
  canTerminate: true,
  canConnect: false,
  canStop: false,
  canStart: true
}, {
  key: 'STOPPING',
  display: 'STOPPING',
  color: 'orange',
  tip: 'The workspace is stopping.',
  spinner: true,
  canTerminate: true,
  canConnect: false,
  canStop: false,
  canStart: false
}, {
  key: 'STARTING',
  display: 'STARTING',
  color: 'orange',
  tip: 'The workspace is starting.',
  spinner: true,
  canTerminate: true,
  canConnect: false,
  canStop: false,
  canStart: false
}, {
  key: 'TAINTED',
  display: 'TAINTED',
  color: 'orange',
  tip: 'The workspace is ready but the latest configuration updates might not have been successful.',
  spinner: false,
  canTerminate: true,
  canConnect: true,
  canStop: false,
  canStart: false
}, {
  key: 'FAILED',
  display: 'FAILED',
  color: 'red',
  tip: 'Something went wrong.',
  spinner: false,
  canTerminate: true,
  canConnect: false,
  canStop: false,
  canStart: false
}, {
  key: 'TERMINATING',
  display: 'TERMINATING',
  color: 'red',
  tip: 'The workspace is being terminated. This could take sometime.',
  spinner: true,
  canTerminate: false,
  canConnect: false,
  canStop: false,
  canStart: false
}, {
  key: 'TERMINATED',
  display: 'TERMINATED',
  color: 'grey',
  tip: 'The workspace is terminated successfully and no longer available.',
  spinner: false,
  canTerminate: false,
  canConnect: false,
  canStop: false,
  canStart: false
}, {
  key: 'TERMINATING_FAILED',
  display: 'TERMINATION FAILED',
  color: 'red',
  tip: 'The workspace was not terminated correctly, it is possible that some compute and storage resources are still in place.',
  spinner: false,
  canTerminate: true,
  canConnect: true,
  canStop: false,
  canStart: false
}, {
  key: 'UNKNOWN',
  display: 'UNKNOWN',
  color: 'grey',
  tip: 'Something not right. This requires further investigation by the administrator.',
  spinner: false,
  canTerminate: true,
  canConnect: true,
  canStop: false,
  canStart: false
}]; // ==================================================================
// ScEnvironment
// ==================================================================

var ScEnvironment = _mobxStateTree.types.model('ScEnvironment', {
  id: _mobxStateTree.types.identifier,
  rev: _mobxStateTree.types.maybe(_mobxStateTree.types.number),
  status: '',
  description: '',
  name: '',
  projectId: '',
  envTypeId: '',
  createdAt: '',
  createdBy: '',
  updatedAt: '',
  updatedBy: '',
  error: _mobxStateTree.types.maybeNull(_mobxStateTree.types.string),
  connections: _mobxStateTree.types.frozen([]),
  hasConnections: false,
  studyIds: _mobxStateTree.types.frozen([]),
  cidr: '',
  outputs: _mobxStateTree.types.frozen([])
}).actions(function (self) {
  return {
    setScEnvironment: function setScEnvironment(rawEnvironment) {
      // Note: if you have partial data vs full data, you need to replace the applySnapshot() with
      // the appropriate logic
      var raw = _objectSpread({}, rawEnvironment, {
        connections: self.connections || []
      });

      (0, _mobxStateTree.applySnapshot)(self, raw);
    },
    setStatus: function setStatus(status) {
      self.status = status;
    },
    setConnections: function setConnections(connections) {
      self.connections = connections;
    }
  };
}) // eslint-disable-next-line no-unused-vars
.views(function (self) {
  return {
    // State is a generalization of the status name. With the state object, we can provide more
    // information about the state and what can be done/displayed
    get state() {
      // We need to clone the entry so that we don't impact the existing states object
      var entry = _lodash["default"].cloneDeep(_lodash["default"].find(states, ['key', self.status]) || _lodash["default"].find(states, ['key', 'UNKNOWN'])); // The canConnect value is also determined by looking at the existing state requirement and
      // if we have any connections


      entry.canConnect = entry.canConnect && self.hasConnections;
      return entry;
    },

    getConnections: function getConnections() {
      var filterFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return true;
      };
      return _lodash["default"].filter(self.connections, filterFn);
    }
  };
});

exports.ScEnvironment = ScEnvironment;
//# sourceMappingURL=ScEnvironment.js.map