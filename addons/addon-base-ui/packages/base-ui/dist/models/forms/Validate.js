"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _validatorjs = _interopRequireDefault(require("validatorjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Transforms fields object from
 {
  fieldName1: {
    rules: string,
  },
  fieldName2: {
    rules: string,
  },
 }

 to

 {
  fieldName1: rulesString,
  fieldName2: rulesString,
 }
 *
 */
function fieldsToValidationRules(fieldsConfig) {
  return _lodash["default"].transform(fieldsConfig, function (rules, config, fieldName) {
    if (config.rules) {
      rules[fieldName] = config.rules;
    }

    return rules;
  }, {});
}
/**
 * Validates given input data using the form fields configuration
 *
 * @param input The object to validate
 * @param fieldsConfig The field configuration to use for validation. The config must be in the following format.
 {
  fieldName1: {
    rules: string,
  },
  fieldName2: {
    rules: string,
  },
 }
 * @returns {Promise<Validator>}
 */


function validate(_x, _x2) {
  return _validate.apply(this, arguments);
}

function _validate() {
  _validate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input, fieldsConfig) {
    var validationRules, validation;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            validationRules = fieldsToValidationRules(fieldsConfig);

            if (validationRules) {
              validation = new _validatorjs["default"](input, validationRules);
            }

            return _context.abrupt("return", validation);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validate.apply(this, arguments);
}

var _default = validate;
exports["default"] = _default;
//# sourceMappingURL=Validate.js.map