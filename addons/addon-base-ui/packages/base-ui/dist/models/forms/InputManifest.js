"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInteractive = isInteractive;
exports.toMobxFormFieldProps = toMobxFormFieldProps;
exports.isConditionTrue = isConditionTrue;
exports.toMobxFormFields = toMobxFormFields;
exports.applyMarkdown = applyMarkdown;
exports.visit = visit;
exports.InputManifest = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ==================================================================
// InputManifest
// ==================================================================
var InputManifest = _mobxStateTree.types.model('InputManifest', {
  sections: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.frozen()), [])
}).actions(function (_self) {
  return {};
}).views(function (self) {
  return {
    // An array of all the input entries (excluding non-interactive ones). This is a convenient method that
    // traverses the whole input manifest tree.
    // [ { name, title, ... }, { name, title, ...} ]
    get flattened() {
      return _lodash["default"].flatten(_lodash["default"].map(self.sections, function (section) {
        return findEntries(section.children);
      }));
    },

    get names() {
      return _lodash["default"].map(self.flattened, function (entry) {
        return entry.name;
      });
    },

    get empty() {
      return self.flattened.length === 0;
    },

    getSectionFlattened: function getSectionFlattened() {
      var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _lodash["default"].flatten(findEntries(section.children));
    }
  };
}); // ==================================================================
// Helpers
// ==================================================================
// Does the entry represent an input that will interact with the user


exports.InputManifest = InputManifest;

function isInteractive(entry) {
  if (_lodash["default"].isUndefined(entry)) return false;
  return _lodash["default"].isNil(entry.nonInteractive) || entry.nonInteractive === false;
} // Condition is true if it is empty/undefined or if the lodash expression evaluates to the string "true"


function isConditionTrue(condition, config) {
  if (_lodash["default"].isEmpty(condition)) return true;
  return _lodash["default"].template(condition)(config) === 'true';
} // Given an inputManifestEntry returns a object that contains all the supported mobx form field props
// For a list of all mobx form field props see https://foxhound87.github.io/mobx-react-form/docs/fields/defining-flat-fields/unified-properties.html


function toMobxFormFieldProps(entry, value) {
  if (!isInteractive(entry)) return {};
  var map = {};

  var add = function add(key, val) {
    if (!_lodash["default"].isUndefined(val)) map[key] = val;
  };

  var name = entry.name,
      title = entry.title,
      placeholder = entry.placeholder,
      rules = entry.rules,
      _entry$extra = entry.extra,
      extra = _entry$extra === void 0 ? {} : _entry$extra,
      desc = entry.desc,
      disabled = entry.disabled,
      options = entry.options,
      yesLabel = entry.yesLabel,
      noLabel = entry.noLabel;
  add('name', name);
  add('value', _lodash["default"].isUndefined(value) ? entry["default"] : value);
  add('label', title);
  add('placeholder', placeholder);
  add('rules', rules);
  add('default', _lodash["default"].isUndefined(entry["default"]) ? value : entry["default"]);
  add('extra', _objectSpread({}, _lodash["default"].cloneDeep(extra), {
    explain: desc,
    options: options,
    yesLabel: yesLabel,
    noLabel: noLabel
  }));
  add('disabled', disabled);
  return map;
} // Recursive function
// input = an array of the input manifest section children or input manifest entry children
// config = all names in inputManifest and their values (if they exist)


function toMobxFormFields() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var config = arguments.length > 1 ? arguments[1] : undefined;
  var result = [];
  if (input.length === 0) return result;
  var queue = input.slice();

  while (queue.length > 0) {
    var entry = queue.shift();
    var name = entry.name;

    if (isInteractive(entry) && isConditionTrue(entry.condition, config)) {
      var value = config[name];
      var field = toMobxFormFieldProps(entry, value);
      result.push(field);
      var children = entry.children;

      if (_lodash["default"].isObject(children)) {
        var fields = toMobxFormFields(children, config); // recursive call

        if (fields.length > 0) {
          result.push.apply(result, _toConsumableArray(fields));
        }
      }
    }
  }

  return result;
} // Given an instance of inputManifest, apply markdown on all 'desc' props and return
// a new json object (NOT an instance of inputManifest)


function applyMarkdown(_ref) {
  var inputManifest = _ref.inputManifest,
      showdown = _ref.showdown,
      _ref$assets = _ref.assets,
      assets = _ref$assets === void 0 ? {} : _ref$assets;

  var copy = _lodash["default"].cloneDeep((0, _mobxStateTree.getSnapshot)(inputManifest));

  function transform(obj) {
    if (_lodash["default"].isNil(obj)) return obj;
    if (_lodash["default"].isArray(obj)) return _lodash["default"].map(obj, function (item) {
      return transform(item);
    });
    if (!_lodash["default"].isObject(obj)) return obj;
    var keys = Object.keys(obj);
    keys.forEach(function (key) {
      if (key !== 'desc') {
        obj[key] = transform(obj[key]);
        return;
      }

      var desc = obj[key];
      if (_lodash["default"].isNil(desc)) return;
      obj.desc = showdown.convert(desc, assets);
    });
    return obj;
  }

  copy.sections = transform(copy.sections);
  return copy;
} // Given an array of input entries, visit each one of them by passing the item
// to the visitFn


function visit() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var visitFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (obj) {
    return obj;
  };
  var result = [];
  if (input.length === 0) return result;
  var queue = input.slice();

  while (queue.length > 0) {
    var entry = queue.shift();
    result.push(visitFn(entry));
    var children = entry.children;

    if (_lodash["default"].isObject(children)) {
      var entries = visit(children, visitFn); // recursive call

      if (entries.length > 0) {
        entries.forEach(function (field) {
          result.push(visitFn(field));
        });
      }
    }
  }

  return result;
} // ==================================================================
// Internal Helpers
// ==================================================================
// Find all names with their entries (such as titles). This is a recursive function.
// Returns an array,  [ { name, title, ... }, { name, title, ...} ]


function findEntries() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var result = [];
  if (input.length === 0) return result;
  var queue = input.slice();

  while (queue.length > 0) {
    var entry = queue.shift();

    if (isInteractive(entry)) {
      result.push(entry);
    }

    var children = entry.children;

    if (_lodash["default"].isObject(children)) {
      var entries = findEntries(children); // recursive call

      if (entries.length > 0) {
        entries.forEach(function (field) {
          result.push(field);
        });
      }
    }
  }

  return result;
}
//# sourceMappingURL=InputManifest.js.map