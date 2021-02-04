"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _withAuth = _interopRequireDefault(require("@aws-ee/base-ui/dist/withAuth"));

var _User = _interopRequireDefault(require("../parts/users/User"));

var _Accounts = _interopRequireDefault(require("../parts/accounts/Accounts"));

var _AddUser = _interopRequireDefault(require("../parts/users/AddUser"));

var _AddIndex = _interopRequireDefault(require("../parts/accounts/AddIndex"));

var _Dashboard = _interopRequireDefault(require("../parts/dashboard/Dashboard"));

var _StudiesPage = _interopRequireDefault(require("../parts/studies/StudiesPage"));

var _StudyEnvironmentSetup = _interopRequireDefault(require("../parts/studies/StudyEnvironmentSetup"));

var _EnvironmentsList = _interopRequireDefault(require("../parts/environments/EnvironmentsList"));

var _EnvironmentDetailPage = _interopRequireDefault(require("../parts/environments/EnvironmentDetailPage"));

var _AddAwsAccount = _interopRequireDefault(require("../parts/accounts/AddAwsAccount"));

var _CreateAwsAccount = _interopRequireDefault(require("../parts/accounts/CreateAwsAccount"));

var _UpdateBudget = _interopRequireDefault(require("../parts/accounts/UpdateBudget"));

var _EnvironmentSetup = _interopRequireDefault(require("../parts/environments/EnvironmentSetup"));

var _AddProject = _interopRequireDefault(require("../parts/projects/AddProject"));

var _AddSingleLocalUser = _interopRequireDefault(require("../parts/users/AddSingleLocalUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Adds routes to the given routesMap.
 * @param routesMap A Map containing routes. This object is a Map that has route paths as
 * keys and React Component as value.
 *
 * @returns {Promise<*>} Returns a Map with the mapping of base routes vs React Component
 */
// eslint-disable-next-line no-unused-vars
function registerRoutes(routesMap, _ref) {
  var location = _ref.location,
      appContext = _ref.appContext;
  // Temporary solution for the routes ordering issue
  routesMap["delete"]('/users/add');
  routesMap["delete"]('/users');
  var routes = new Map([].concat(_toConsumableArray(routesMap), [['/users/add/local', (0, _withAuth["default"])(_AddSingleLocalUser["default"])], ['/users/add', (0, _withAuth["default"])(_AddUser["default"])], ['/users', (0, _withAuth["default"])(_User["default"])], ['/indexes/add', (0, _withAuth["default"])(_AddIndex["default"])], ['/aws-accounts/add', (0, _withAuth["default"])(_AddAwsAccount["default"])], ['/aws-accounts/create', (0, _withAuth["default"])(_CreateAwsAccount["default"])], ['/aws-accounts/budget/:id', (0, _withAuth["default"])(_UpdateBudget["default"])], ['/accounts', (0, _withAuth["default"])(_Accounts["default"])], ['/dashboard', (0, _withAuth["default"])(_Dashboard["default"])], ['/studies/setup-workspace/type/:envTypeId', (0, _withAuth["default"])(_StudyEnvironmentSetup["default"])], ['/studies/setup-workspace', (0, _withAuth["default"])(_StudyEnvironmentSetup["default"])], ['/studies/workspace-type/:envTypeId', (0, _withAuth["default"])(_StudiesPage["default"])], ['/studies', (0, _withAuth["default"])(_StudiesPage["default"])], ['/workspaces/create/type/:envTypeId', (0, _withAuth["default"])(_EnvironmentSetup["default"])], ['/workspaces/create', (0, _withAuth["default"])(_EnvironmentSetup["default"])], ['/workspaces/id/:instanceId', (0, _withAuth["default"])(_EnvironmentDetailPage["default"])], ['/workspaces', (0, _withAuth["default"])(_EnvironmentsList["default"])], ['/projects/add', (0, _withAuth["default"])(_AddProject["default"])]]));
  return routes;
}

function getDefaultRouteLocation(_ref2) {
  var location = _ref2.location,
      appContext = _ref2.appContext;
  var userStore = appContext.userStore;
  var defaultRoute = '/dashboard';

  var isRootUser = _lodash["default"].get(userStore, 'user.isRootUser');

  var isExternalResearcher = _lodash["default"].get(userStore, 'user.isExternalResearcher');

  var isInternalGuest = _lodash["default"].get(userStore, 'user.isInternalGuest');

  var isExternalGuest = _lodash["default"].get(userStore, 'user.isExternalGuest');

  if (isRootUser) {
    defaultRoute = '/users';
  } else if (isExternalResearcher) {
    defaultRoute = '/workspaces';
  } else if (isInternalGuest || isExternalGuest) {
    defaultRoute = '/studies';
  } // See https://reacttraining.com/react-router/web/api/withRouter


  var defaultLocation = {
    pathname: defaultRoute,
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