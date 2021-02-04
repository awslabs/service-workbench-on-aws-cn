"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Adds workflow navigation menu items to the given itemsMap.
 *
 * @param itemsMap A Map containing navigation items. This object is a Map that has route paths (urls) as
 * keys and menu item object with the following shape
 *
 *   {
 *    title: STRING, // Title for the navigation menu item
 *    icon: STRING, // semantic ui icon name fot the navigation menu item
 *    shouldShow: BOOLEAN || FUNCTION, // A flag or a function that returns a flag indicating whether to show the item or not (useful when showing menu items conditionally)
 *    render: OPTIONAL FUNCTION, // Optional function that returns rendered menu item component. Use this ONLY if you want to control full rendering of the menu item.
 *   }
 *
 * @param context A context object containing all various stores
 *
 * @returns Map<*> Returns A Map containing navigation menu items with the same shape as "itemsMap"
 */
// eslint-disable-next-line no-unused-vars
function registerMenuItems(itemsMap, _ref) {
  var location = _ref.location,
      appContext = _ref.appContext;

  var isAdmin = _lodash["default"].get(appContext, 'userStore.user.isAdmin');

  var showEnvTypeManagement = _lodash["default"].get(appContext, 'showEnvTypeManagement', true);

  var items = new Map([].concat(_toConsumableArray(itemsMap), [['/workspace-types-management', {
    title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Workspace", /*#__PURE__*/_react["default"].createElement("br", null), "Types"),
    icon: 'computer',
    shouldShow: isAdmin && showEnvTypeManagement
  }]]));
  return items;
}

var plugin = {
  registerMenuItems: registerMenuItems
};
var _default = plugin;
exports["default"] = _default;
//# sourceMappingURL=menu-items-plugin.js.map