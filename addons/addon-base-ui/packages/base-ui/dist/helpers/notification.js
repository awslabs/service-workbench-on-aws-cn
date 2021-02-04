"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayError = displayError;
exports.displayWarning = displayWarning;
exports.displaySuccess = displaySuccess;
exports.displayFormErrors = displayFormErrors;

var _lodash = _interopRequireDefault(require("lodash"));

var _toastr = _interopRequireDefault(require("toastr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function displayError(msg, error) {
  var timeOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '20000';

  _toastr["default"].error(toMessage(msg, error), 'We have a problem!', _objectSpread({}, toasterErrorOptions, {
    timeOut: timeOut
  }));

  if (error) console.error(msg, error);
  if (_lodash["default"].isError(msg)) console.error(msg);
}

function displayWarning(msg, error) {
  var timeOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '20000';

  _toastr["default"].warning(toMessage(msg, error), 'Warning!', _objectSpread({}, toasterWarningOptions, {
    timeOut: timeOut
  }));

  if (error) console.error(msg, error);
  if (_lodash["default"].isError(msg)) console.error(msg);
}

function displaySuccess(msg) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Submitted!';

  _toastr["default"].success(toMessage(msg), title, toasterSuccessOptions);
}

function displayFormErrors(form) {
  var map = form.errors();
  var lines = [];
  Object.keys(map).forEach(function (key) {
    if (map[key]) lines.push(map[key]);
  });
  if (lines.length === 0) return displayError('The form submission has a problem.', undefined, 3000);
  var isPlural = lines.length > 1;
  var message = "There ".concat(isPlural ? 'are issues' : 'is an issue', " with the form:");
  return displayError([message].concat(lines), undefined, 3000);
}

function toMessage(msg, error) {
  if (_lodash["default"].isError(msg)) {
    return "".concat(msg.message || msg.friendly, " <br/>&nbsp;");
  }

  if (_lodash["default"].isError(error)) {
    return "".concat(msg, " - ").concat(error.message, " <br/>&nbsp;");
  }

  if (_lodash["default"].isArray(msg)) {
    var messages = msg;

    var size = _lodash["default"].size(messages);

    if (size === 0) {
      return 'Unknown error <br/>&nbsp;';
    }

    if (size === 1) {
      return "".concat(messages[0], "<br/>&nbsp;");
    }

    var result = [];
    result.push('<br/>');
    result.push('<ul>');

    _lodash["default"].forEach(messages, function (message) {
      result.push("<li style=\"margin-left: -20px;\">".concat(message, "</li>"));
    });

    result.push('</ul><br/>&nbsp;');
    return result.join('');
  }

  if (_lodash["default"].isEmpty(msg)) return 'Unknown error <br/>&nbsp;';
  return "".concat(msg, " <br/>&nbsp;");
} // For details of options, see https://github.com/CodeSeven/toastr
//
// closeButton:       Enable a close button
// debug:             Emit debug logs to the console
// newestOnTop:       Show newest toast at top or bottom (top is default)
// progressBar:       Visually indicate how long before a toast expires
// positionClass:     CSS position style e.g. toast-top-center, toast-bottom-left
// preventDuplicates: Prevent identical toasts appearing (based on content)
// timeOut:           How long the toast will display without user interaction (ms)
// extendedTimeOut:   How long the toast will display after a user hovers over it (ms)


var toasterErrorOptions = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  timeOut: '20000',
  // 1000000
  extendedTimeOut: '50000' // 1000000

};
var toasterWarningOptions = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  timeOut: '20000',
  // 1000000
  extendedTimeOut: '50000' // 1000000

};
var toasterSuccessOptions = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  timeOut: '3000',
  extendedTimeOut: '10000'
};
//# sourceMappingURL=notification.js.map