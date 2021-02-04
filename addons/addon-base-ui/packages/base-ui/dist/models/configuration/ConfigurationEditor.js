"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _form2 = require("../../helpers/form");

var _InputManifest = require("../forms/InputManifest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ==================================================================
// ConfigurationEditor
// ==================================================================
var ConfigurationEditor = _mobxStateTree.types.model('ConfigurationEditor', {
  currentSectionIndex: 0,
  // IMPORTANT section index start from 0 not 1
  review: false,
  inputManifest: _mobxStateTree.types.maybe(_InputManifest.InputManifest),
  configuration: _mobxStateTree.types.optional(_mobxStateTree.types.map(_mobxStateTree.types.union(_mobxStateTree.types["null"], _mobxStateTree.types.undefined, _mobxStateTree.types.integer, _mobxStateTree.types.number, _mobxStateTree.types["boolean"], _mobxStateTree.types.string)), {}),
  mode: _mobxStateTree.types.optional(_mobxStateTree.types.enumeration('Mode', ['create', 'edit']), 'create') // mode - either "create" or "edit"

})["volatile"](function (_self) {
  return {
    originalConfig: undefined,
    originalSectionConfig: undefined // the key/value object for the original section config after next()

  };
}).actions(function () {
  return {
    // I had issues using runInAction from mobx
    // the issue is discussed here https://github.com/mobxjs/mobx-state-tree/issues/915
    runInAction: function runInAction(fn) {
      return fn();
    }
  };
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup; // If the value of a form field is an object, then make the value a json string instead

  var normalizeForm = function normalizeForm(obj) {
    return _lodash["default"].transform(obj, function (result, value, key) {
      result[key] = _lodash["default"].isObject(value) ? JSON.stringify(value) : value;
    }, {});
  }; // Returns a key/value object for configuration keys that are part of the given input manifest section


  var getSectionConfig = function getSectionConfig(inputManifestSection) {
    var config = {};
    var section = inputManifestSection;
    if (section === undefined) return config;
    var flattened = self.inputManifest.getSectionFlattened(section) || [];
    flattened.forEach(function (item) {
      var key = item.name;
      if (self.configuration.has(key)) config[key] = _lodash["default"].cloneDeep(self.configuration.get(key));
    });
    return config;
  };

  var resetOriginalSectionConfig = function resetOriginalSectionConfig() {
    self.originalSectionConfig = getSectionConfig(self.inputManifestSection);
  }; // Returns all config keys (if any) that belong to input manifest sections after the given index


  var configKeysAfter = function configKeysAfter(index) {
    var sections = _lodash["default"].slice(_lodash["default"].get(self.inputManifest, 'sections', []), Math.max(index + 1, 0));

    var keys = [];

    _lodash["default"].forEach(sections, function (section) {
      var config = getSectionConfig(section);
      var configKeys = _lodash["default"].keys(config) || [];
      if (!_lodash["default"].isEmpty(configKeys)) keys.push.apply(keys, _toConsumableArray(configKeys));
    });

    return keys;
  };

  return {
    afterCreate: function afterCreate() {
      // We keep the original values of the configuration object so that when we do cancel, we simply restore the original copy
      self.originalConfig = (0, _mobxStateTree.getSnapshot)(self.configuration);
      resetOriginalSectionConfig();
    },
    cleanup: function cleanup() {
      superCleanup();
    },
    next: function next(form) {
      var configuration = self.configuration;
      configuration.merge(normalizeForm(form.values()));
      var changed = !_lodash["default"].isEqual(self.originalSectionConfig, getSectionConfig(self.inputManifestSection));
      var keysAfter = configKeysAfter(self.currentSectionIndex);
      var nextSectionIndex = self.nextSectionIndex;
      var before = self.currentSectionIndex;
      if (nextSectionIndex !== -1) self.currentSectionIndex = nextSectionIndex;
      var after = self.currentSectionIndex;
      resetOriginalSectionConfig(); // If the configuration keys changed, then it is time to clear all configuration keys (if any) after the current section
      // In case of edit mode, do not clear any section (we need to pre-populate all sections with existing values)

      if (!self.isEditMode && changed) {
        _lodash["default"].forEach(keysAfter, function (key) {
          self.configuration["delete"](key);
        });
      } // If the section index didn't move forward, it means that we don't have any more sections
      // for input and it is time to show the review content


      self.review = before === after;
    },
    previous: function previous(_form) {
      if (self.review) {
        self.review = false;
        return;
      } // const configuration = self.configuration;
      // configuration.merge(normalizeForm(form.values()));


      var previousSectionIndex = self.previousSectionIndex;
      if (previousSectionIndex !== -1) self.currentSectionIndex = previousSectionIndex;
      resetOriginalSectionConfig();
    },
    clearConfigs: function clearConfigs() {
      self.configuration.clear();
    },
    clearSectionConfigs: function clearSectionConfigs() {
      // We only clear configuration keys that belong to the current section
      if (self.empty) {
        self.configuration.clear();
        return;
      }

      var section = self.inputManifestSection;
      if (section === undefined) return;
      var flattened = self.inputManifest.getSectionFlattened(section) || [];
      flattened.forEach(function (item) {
        self.configuration["delete"](item.name);
      });
    },
    applyChanges: function applyChanges() {
      self.originalConfig = (0, _mobxStateTree.getSnapshot)(self.configuration);
    },
    cancel: function cancel() {
      self.review = false;
      self.currentSectionIndex = 0;

      if (self.originalConfig) {
        (0, _mobxStateTree.applySnapshot)(self.configuration, self.originalConfig);
      }

      resetOriginalSectionConfig();
    },
    restart: function restart() {
      self.cancel();
    }
  };
}).views(function (self) {
  return {
    get isEditMode() {
      return self.mode === 'edit';
    },

    get inputManifestSection() {
      if (self.inputManifest === undefined) return undefined;
      var sections = self.inputManifest.sections;
      var index = self.currentSectionIndex;
      if (index > self.totalSections) return undefined;
      if (index >= sections.length) return undefined;
      return sections[index];
    },

    // A list of objects, where each object represents a configuration name/entry that is not undefined
    // [ {name: 'xyz', title: '...', value: 'true', etc}, {name: 'abc', title: '...', value: 'something', etc}, ... ]
    get definedConfigList() {
      if (self.inputManifest === undefined) return [];
      var inputEntries = self.inputManifest.flattened;
      var configMap = self.configuration;
      var list = [];

      _lodash["default"].forEach(inputEntries, function (entry) {
        var value = configMap.get(entry.name);
        if (_lodash["default"].isUndefined(value)) value = entry.value;
        if (!_lodash["default"].isUndefined(value)) list.push(_objectSpread({}, entry, {
          value: value
        }));
      });

      return list;
    },

    // A map of all names in inputManifest with their values from the configuration object if they exist
    // or from the inputManifest if they exist, otherwise undefined is given as the value for the key
    // An example of returned object shape: { 'configName': 'demo', 'doYouWantThis': undefined }
    get merged() {
      var inputEntries = self.inputManifest.flattened;
      var map = {};

      _lodash["default"].forEach(inputEntries, function (entry) {
        map[entry.name] = entry.value;
      });
      /* eslint-disable no-restricted-syntax */


      var _iterator = _createForOfIteratorHelper(self.configuration.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          map[key] = value;
        }
        /* eslint-enable no-restricted-syntax */

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return map;
    },

    get formFields() {
      var index = self.currentSectionIndex;
      if (self.totalSections < index) return [];
      var input = self.inputManifestSection;
      if (_lodash["default"].isUndefined(input)) return [];
      return (0, _InputManifest.toMobxFormFields)(input.children, self.merged);
    },

    get form() {
      return (0, _form2.createForm)(self.formFields);
    },

    get totalSections() {
      if (self.inputManifest === undefined) return 0;
      return self.inputManifest.sections.length;
    },

    get hasNext() {
      return self.nextSectionIndex !== -1 && !self.review;
    },

    get hasPrevious() {
      return self.previousSectionIndex !== -1 || self.review;
    },

    // Returns the next section index
    // if the current section is the last section, return -1
    // walk through the remaining sections and return the index of the first one
    // that has condition === true, otherwise return -1
    get nextSectionIndex() {
      if (self.totalSections < self.currentSectionIndex) return -1;
      if (self.inputManifest === undefined) return -1;
      var sections = self.inputManifest.sections;
      var merged = self.merged;
      var found = false;
      var index = self.currentSectionIndex + 1;

      while (!found && index < self.totalSections) {
        var entry = sections[index];
        found = (0, _InputManifest.isConditionTrue)(entry.condition, merged);
        if (!found) index += 1;
      }

      return found ? index : -1;
    },

    // Returns the previous section index
    // if the current section is 0, return -1
    // walk through the previous sections and return the index of the first one
    // that has condition === true, otherwise return -1
    get previousSectionIndex() {
      if (self.currentSectionIndex === 0) return -1;
      var sections = self.inputManifest.sections;
      var merged = self.merged;
      var found = false;
      var index = self.currentSectionIndex - 1;

      while (!found && index >= 0) {
        var entry = sections[index];
        found = (0, _InputManifest.isConditionTrue)(entry.condition, merged);
        if (!found) index -= 1;
      }

      return found ? index : -1;
    },

    get sectionsTitles() {
      var sections = self.inputManifest.sections;
      return _lodash["default"].map(sections, function (index) {
        return index.title;
      });
    },

    get empty() {
      if (self.inputManifest === undefined) return true;
      return self.inputManifest.empty;
    }

  };
}); // Note: Do NOT register ConfigurationEditor in the global context


var _default = ConfigurationEditor;
exports["default"] = _default;
//# sourceMappingURL=ConfigurationEditor.js.map