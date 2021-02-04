"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _withAuth = _interopRequireDefault(require("@aws-ee/base-ui/dist/withAuth"));

var _lodash = _interopRequireDefault(require("lodash"));

var _EnvTypesManagement = _interopRequireDefault(require("../parts/environment-types/EnvTypesManagement"));

var _EnvTypeEditor = _interopRequireDefault(require("../parts/environment-types/EnvTypeEditor"));

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

  var showEnvTypeManagement = _lodash["default"].get(appContext, 'showEnvTypeManagement', true);

  if (showEnvTypeManagement) {
    var routes = new Map([].concat(_toConsumableArray(routesMap), [['/workspace-types-management/:action/:id', (0, _withAuth["default"])(_EnvTypeEditor["default"])], ['/workspace-types-management', (0, _withAuth["default"])(_EnvTypesManagement["default"])]]));
    return routes;
  }

  return routesMap;
}

var plugin = {
  registerRoutes: registerRoutes
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=routes-plugin.js.map