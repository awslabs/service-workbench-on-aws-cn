"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _Dashboard = _interopRequireDefault(require("../parts/dashboard/Dashboard"));

var _AddAuthenticationProvider = _interopRequireDefault(require("../parts/authentication-providers/AddAuthenticationProvider"));

var _EditAuthenticationProvider = _interopRequireDefault(require("../parts/authentication-providers/EditAuthenticationProvider"));

var _AuthenticationProvidersList = _interopRequireDefault(require("../parts/authentication-providers/AuthenticationProvidersList"));

var _AddUser = _interopRequireDefault(require("../parts/users/AddUser"));

var _UsersList = _interopRequireDefault(require("../parts/users/UsersList"));

var _withAuth = _interopRequireDefault(require("../withAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Adds base routes to the given routesMap.
 * @param routesMap A Map containing routes. This object is a Map that has route paths as
 * keys and React Component as value.
 * @param appContext An application context object containing various Mobx Stores, Models etc.
 *
 * @returns {Promise<*>} Returns a Map with the mapping of base routes vs React Component
 */
// eslint-disable-next-line no-unused-vars
function registerRoutes(routesMap, _ref) {
  var location = _ref.location,
      appContext = _ref.appContext;
  var routes = new Map([].concat(_toConsumableArray(routesMap), [['/authentication-providers/add', (0, _withAuth["default"])(_AddAuthenticationProvider["default"])], ['/authentication-providers/:authenticationProviderConfigId/edit', (0, _withAuth["default"])(_EditAuthenticationProvider["default"])], ['/authentication-providers', (0, _withAuth["default"])(_AuthenticationProvidersList["default"])], ['/users/add', (0, _withAuth["default"])(_AddUser["default"])], ['/users', (0, _withAuth["default"])(_UsersList["default"])], ['/dashboard', (0, _withAuth["default"])(_Dashboard["default"])]]));
  return routes;
}
/**
 * Returns default route. By default this method returns the
 * '/dashboard' route as the default route for all non-root users and returns
 * '/users' route for root user.
 * @returns {{search: *, state: *, hash: *, pathname: string}}
 */


function getDefaultRouteLocation(_ref2) {
  var location = _ref2.location,
      appContext = _ref2.appContext;
  var userStore = appContext.userStore; // See https://reacttraining.com/react-router/web/api/withRouter

  var isRootUser = _lodash["default"].get(userStore, 'user.isRootUser');

  var defaultLocation = {
    pathname: isRootUser ? '/users' : '/dashboard',
    search: location.search,
    // we want to keep any query parameters
    hash: location.hash,
    state: location.state
  };
  return defaultLocation;
}

var plugin = {
  registerRoutes: registerRoutes,
  getDefaultRouteLocation: getDefaultRouteLocation
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=routes-plugin.js.map