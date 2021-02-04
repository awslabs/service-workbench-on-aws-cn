"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForm = createForm;
exports.createSingleFieldForm = createSingleFieldForm;
exports.formOptions = exports.formPlugins = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _DVR = _interopRequireDefault(require("mobx-react-form/lib/validators/DVR"));

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _mobxReactForm = _interopRequireDefault(require("mobx-react-form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formPlugins = Object.freeze({
  dvr: (0, _DVR["default"])(_validatorjs["default"])
});
exports.formPlugins = formPlugins;
var formOptions = Object.freeze({
  showErrorsOnReset: false
});
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
/**
 * Creates a MobxReactForm specific to the field identified by the specified fieldName from the given fields.
 * @param fieldName Name of the field to create MobxReactForm for
 * @param fields An array of MobxReactForm fields OR an object containing the form fields.
 * See MobxReactForm documentation about fields https://foxhound87.github.io/mobx-react-form/docs/fields/ for more details.
 *
 * @param value Optional value for the field
 * @param pluginsParam Optional plugin parameters for the MobxReactForm
 * @param optionsParam Optional options parameters for the MobxReactForm
 */


function createSingleFieldForm(fieldName, fields, value, pluginsParam, optionsParam) {
  // An array of MobxReactForm fields OR an object containing the form fields
  // Find field with the given fieldName from the fields
  // In case of Array: It has shape [ {fieldName1:field1}, {fieldName2:field2} ]
  // In case of Object: It has shape { fieldName1:field1, fieldName2:field2 }
  var fieldsObj = _lodash["default"].isArray(fields) ? _lodash["default"].find(fields, function (field) {
    return _lodash["default"].keys(field)[0] === fieldName;
  }) : fields;

  var fieldOfInterest = _lodash["default"].get(fieldsObj, fieldName);

  if (!fieldOfInterest) {
    throw new Error("Field not found. Can not create form for field ".concat(fieldName, "."));
  }

  var fieldWithValue = _lodash["default"].assign({}, {
    value: value
  }, fieldOfInterest);

  var fieldsToUse = _defineProperty({}, fieldName, fieldWithValue);

  return createForm(fieldsToUse, pluginsParam, optionsParam);
}
//# sourceMappingURL=form.js.map