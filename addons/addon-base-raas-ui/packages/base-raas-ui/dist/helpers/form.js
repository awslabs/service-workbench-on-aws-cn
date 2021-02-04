"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForm = createForm;
exports.createSingleFieldForm = exports.formOptions = exports.formPlugins = void 0;

var _DVR = _interopRequireDefault(require("mobx-react-form/lib/validators/DVR"));

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _mobxReactForm = _interopRequireDefault(require("mobx-react-form"));

var _isCidr = _interopRequireDefault(require("is-cidr"));

var baseFormHelper = _interopRequireWildcard(require("@aws-ee/base-ui/dist/helpers/form"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dvrRules = {
  cidr: {
    validatorFn: function validatorFn(value) {
      var result = (0, _isCidr["default"])(value);
      return result === 4 || result === 6;
    },
    message: 'The :attribute is not in the CIDR format.'
  }
}; // Extend base formPlugins and add support for "cidr" validation rule

var formPlugins = _objectSpread({}, baseFormHelper.formPlugins, {
  dvr: (0, _DVR["default"])({
    "package": _validatorjs["default"],
    extend: function extend(_ref) {
      var validator = _ref.validator;
      Object.keys(dvrRules).forEach(function (key) {
        return validator.register(key, dvrRules[key].validatorFn, dvrRules[key].message);
      });
    }
  })
});

exports.formPlugins = formPlugins;
var formOptions = baseFormHelper.formOptions;
exports.formOptions = formOptions;

function createForm(fields, pluginsParam, optionsParam) {
  var plugins = pluginsParam || formPlugins;
  var options = optionsParam || formOptions;
  return new _mobxReactForm["default"]({
    fields: fields
  }, {
    plugins: plugins,
    options: options
  });
}

var createSingleFieldForm = baseFormHelper.createSingleFieldForm;
exports.createSingleFieldForm = createSingleFieldForm;
//# sourceMappingURL=form.js.map