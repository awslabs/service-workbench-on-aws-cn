"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoutes = getRoutes;
exports.getMenuItems = getMenuItems;
exports.getDefaultRouteLocation = getDefaultRouteLocation;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Configures the given React Router by collecting routes contributed by all route plugins.
 *
 * @returns {*} A React.Router or Switch Component
 */
// eslint-disable-next-line no-unused-vars
function getRoutes(_ref) {
  var location = _ref.location,
      appContext = _ref.appContext;
  var plugins = appContext.pluginRegistry.getPluginsWithMethod('routes', 'registerRoutes');
  var initial = new Map(); // Ask each plugin to return their routes. Each plugin is passed a Map containing the routes collected so
  // far from other plugins. The plugins are called in the same order as returned by the registry.
  // Each plugin gets a chance to add, remove, update, or delete routes by mutating the provided routesMap object.
  // This routesMap is a Map that has route paths as keys and React Component as value.

  var routesMap = _lodash["default"].reduce(plugins, function (routesFar, plugin) {
    return plugin.registerRoutes(routesFar, appContext);
  }, initial);

  var entries = Array.from(routesMap || new Map());
  var routeIdx = 0;
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, _lodash["default"].map(entries, function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        routePath = _ref3[0],
        reactComponent = _ref3[1];

    routeIdx += 1;
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      key: routeIdx,
      path: routePath,
      component: reactComponent
    });
  }));
}
/**
 * Returns menu items for navigation by collecting items contributed by all menu item plugins.
 *
 * @param {*} appContext An application context object containing all MobX store objects
 *
 * @returns {*}
 */


function getMenuItems(_ref4) {
  var location = _ref4.location,
      appContext = _ref4.appContext;
  var plugins = appContext.pluginRegistry.getPluginsWithMethod('menu-items', 'registerMenuItems');
  var initial = new Map(); // Ask each plugin to return their nav items. Each plugin is passed a Map containing the nav items collected so
  // far from other plugins. The plugins are called in the same order as returned by the registry.
  // Each plugin gets a chance to add, remove, update, or delete items by mutating the provided itemsMap object.
  // This itemsMap is a Map that has route paths (urls) as keys and menu item object as values.

  var itemsMap = _lodash["default"].reduce(plugins, function (itemsSoFar, plugin) {
    return plugin.registerMenuItems(itemsSoFar, {
      location: location,
      appContext: appContext
    });
  }, initial);

  var entries = Array.from(itemsMap || new Map());
  return _lodash["default"].map(entries, function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        url = _ref6[0],
        menuItem = _ref6[1];

    return _objectSpread({
      url: url
    }, menuItem);
  });
}

function getDefaultRouteLocation(_ref7) {
  var location = _ref7.location,
      appContext = _ref7.appContext;

  var plugins = _lodash["default"].reverse(appContext.pluginRegistry.getPluginsWithMethod('routes', 'getDefaultRouteLocation') || []); // We ask each plugin in reverse order if they have a default route


  var defaultRoute;

  _lodash["default"].forEach(plugins, function (plugin) {
    var result = plugin.getDefaultRouteLocation({
      location: location,
      appContext: appContext
    });
    if (_lodash["default"].isUndefined(result)) return;
    defaultRoute = result; // eslint-disable-next-line consistent-return

    return false; // This will stop lodash from continuing the forEach loop
  });

  return defaultRoute;
}
//# sourceMappingURL=plugins-util.js.map