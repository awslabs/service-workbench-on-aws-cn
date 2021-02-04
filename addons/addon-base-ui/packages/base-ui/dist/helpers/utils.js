"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToArray = mapToArray;
exports.parseError = parseError;
exports.swallowError = swallowError;
exports.delay = delay;
exports.niceNumber = niceNumber;
exports.plural = plural;
exports.getQueryParam = getQueryParam;
exports.removeQueryParams = removeQueryParams;
exports.addQueryParams = addQueryParams;
exports.getFragmentParam = getFragmentParam;
exports.removeFragmentParams = removeFragmentParams;
exports.nicePrice = nicePrice;
exports.removeNulls = removeNulls;
exports.chopRight = chopRight;
exports.childrenArrayToMap = childrenArrayToMap;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.generateId = generateId;
exports.consolidateToMap = consolidateToMap;
exports.flattenObject = flattenObject;
exports.unFlattenObject = unFlattenObject;
exports.toUTCDate = toUTCDate;
exports.getOptionsFromRules = getOptionsFromRules;
exports.validRegions = validRegions;
exports.formatBytes = formatBytes;
exports.processInBatches = processInBatches;
exports.processSequentially = processSequentially;
exports.isFloat = exports.storage = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _numeral = _interopRequireDefault(require("numeral"));

var _mobx = require("mobx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Converts the given Map object to an array of values from the map
 */
function mapToArray(map) {
  var result = []; // converting map to result array

  map.forEach(function (value) {
    return result.push(value);
  });
  return result;
}

function parseError(err) {
  var message = _lodash["default"].get(err, 'message', 'Something went wrong');

  var code = _lodash["default"].get(err, 'code');

  var status = _lodash["default"].get(err, 'status');

  var requestId = _lodash["default"].get(err, 'requestId');

  var error = new Error(message);
  error.code = code;
  error.requestId = requestId;
  error.root = err;
  error.status = status;
  return error;
}

function swallowError(promise) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return {};
  };

  try {
    return Promise.resolve().then(function () {
      return promise;
    })["catch"](function (err) {
      return fn(err);
    });
  } catch (err) {
    return fn(err);
  }
}

var storage = (0, _mobx.observable)({
  clear: function clear() {
    try {
      if (localStorage) return localStorage.clear();
      return window.localStorage.clear();
    } catch (err) {
      console.log(err);

      try {
        if (sessionStorage) return sessionStorage.clear();
        return window.sessionStorage.clear();
      } catch (error) {
        // if we get here, it means no support for localStorage nor sessionStorage, which is a problem
        return console.log(error);
      }
    }
  },
  getItem: function getItem(key) {
    try {
      if (localStorage) return localStorage.getItem(key);
      return window.localStorage.getItem(key);
    } catch (err) {
      console.log(err);

      try {
        if (sessionStorage) return sessionStorage.getItem(key);
        return window.sessionStorage.getItem(key);
      } catch (error) {
        // if we get here, it means no support for localStorage nor sessionStorage, which is a problem
        return console.log(error);
      }
    }
  },
  setItem: function setItem(key, value) {
    try {
      if (localStorage) return localStorage.setItem(key, value);
      return window.localStorage.setItem(key, value);
    } catch (err) {
      console.log(err);

      try {
        if (sessionStorage) return sessionStorage.setItem(key, value);
        return window.sessionStorage.setItem(key, value);
      } catch (error) {
        // if we get here, it means no support for localStorage nor sessionStorage, which is a problem
        return console.log(error);
      }
    }
  },
  removeItem: function removeItem(key) {
    try {
      if (localStorage) return localStorage.removeItem(key);
      return window.localStorage.removeItem(key);
    } catch (err) {
      console.log(err);

      try {
        if (sessionStorage) return sessionStorage.removeItem(key);
        return window.sessionStorage.removeItem(key);
      } catch (error) {
        // if we get here, it means no support for localStorage nor sessionStorage, which is a problem
        return console.log(error);
      }
    }
  }
}); // a promise friendly delay function

exports.storage = storage;

function delay(seconds) {
  return new Promise(function (resolve) {
    _lodash["default"].delay(resolve, seconds * 1000);
  });
}

function niceNumber(value) {
  if (_lodash["default"].isNil(value)) return 'N/A';
  if (_lodash["default"].isString(value) && _lodash["default"].isEmpty(value)) return 'N/A';
  return (0, _numeral["default"])(value).format('0,0');
}

function nicePrice(value) {
  if (_lodash["default"].isNil(value)) return 'N/A';
  if (_lodash["default"].isString(value) && _lodash["default"].isEmpty(value)) return 'N/A';
  return (0, _numeral["default"])(value).format('0,0.00');
} // super basic plural logic, laughable


function plural(singleStr, pluralStr, count) {
  if (count === 1) return singleStr;
  return pluralStr;
}

function getQueryParam(location, key) {
  var queryParams = new URL(location).searchParams;
  return queryParams.get(key);
}

function addQueryParams(location, params) {
  var url = new URL(location);
  var queryParams = url.searchParams;

  var keys = _lodash["default"].keys(params);

  keys.forEach(function (key) {
    queryParams.append(key, params[key]);
  });
  var newUrl = url.origin + url.pathname;

  if (queryParams.toString()) {
    newUrl += "?".concat(queryParams.toString());
  }

  newUrl += url.hash;
  return newUrl;
}

function removeQueryParams(location, keys) {
  var url = new URL(location);
  var queryParams = url.searchParams;
  keys.forEach(function (key) {
    queryParams["delete"](key);
  });
  var newUrl = url.origin + url.pathname;

  if (queryParams.toString()) {
    newUrl += "?".concat(queryParams.toString());
  }

  newUrl += url.hash;
  return newUrl;
}

function getFragmentParam(location, key) {
  var fragmentParams = _lodash["default"].get(location, 'hash') || new URL(location).hash;
  var hashKeyValues = {};
  var params = fragmentParams.substring(1).split('&');

  if (params) {
    params.forEach(function (param) {
      var keyValueArr = param.split('=');
      var currentKey = keyValueArr[0];
      var value = keyValueArr[1];

      if (value) {
        hashKeyValues[currentKey] = value;
      }
    });
  }

  return hashKeyValues[key];
}

function removeFragmentParams(location, keyNamesToRemove) {
  var url = new URL(location);
  var fragmentParams = url.hash;
  var hashStr = '#';
  var params = fragmentParams.substring(1).split('&');

  if (params) {
    params.forEach(function (param) {
      var keyValueArr = param.split('=');
      var currentKey = keyValueArr[0];
      var value = keyValueArr[1]; // Do not include the currentKey if it is the one specified in the array of keyNamesToRemove

      if (value && _lodash["default"].indexOf(keyNamesToRemove, currentKey) < 0) {
        hashStr = "".concat(hashStr).concat(currentKey, "=").concat(value);
      }
    });
  }

  return "".concat(url.protocol, "//").concat(url.host).concat(url.search).concat(hashStr === '#' ? '' : hashStr);
}

function isAbsoluteUrl(url) {
  // return /^[a-z][a-z\d+.-]*:/.test(url);
  return /^https?:/.test(url);
}

function removeNulls() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!obj) {
    return obj;
  }

  Object.keys(obj).forEach(function (key) {
    if (obj[key] === null) delete obj[key];

    if (_lodash["default"].isPlainObject(obj[key])) {
      removeNulls(obj[key]);
    }
  });
  return obj;
} // remove the "end" string from "str" if it exists


function chopRight() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!_lodash["default"].endsWith(str, end)) return str;
  return str.substring(0, str.length - end.length);
}

var isFloat = function isFloat(n) {
  return n % 1 !== 0;
}; // input [ { <name>: { label, desc, ..} }, { <name2>: { label, desc } } ]
// output { <name>: { label, desc, ..}, <name2>: { label, desc } }


exports.isFloat = isFloat;

function childrenArrayToMap(arr) {
  var result = {};
  arr.forEach(function (item) {
    var key = _lodash["default"].keys(item)[0];

    result[key] = item[key];
  });
  return result;
}

var idGeneratorCount = 0;

function generateId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  idGeneratorCount += 1;
  return "".concat(prefix, "_").concat(idGeneratorCount, "_").concat(Date.now(), "_").concat(_lodash["default"].random(0, 1000));
} // Given a Map and an array of items (each item MUST have an "id" prop), consolidate
// the array in the following manner:
// - if an existing item in the map is no longer in the array of items, remove the item from the map
// - if an item in the array is not in the map, then add it to the map using the its "id" prop
// - if an item in the array is also in the map, then call 'mergeExistingFn' with the existing item
//   and the new item. It is expected that this 'mergeExistingFn', will know how to merge the
//   properties of the new item into the existing item.


function consolidateToMap(map, itemsArray, mergeExistingFn) {
  var idFieldName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
  var unprocessedKeys = {};
  map.forEach(function (_value, key) {
    unprocessedKeys[key] = true;
  });
  itemsArray.forEach(function (item) {
    var id = item[idFieldName];
    var hasExisting = map.has(id);
    var exiting = map.get(id);

    if (!exiting) {
      map.set(item[idFieldName], item);
    } else {
      mergeExistingFn(exiting, item);
    }

    if (hasExisting) {
      delete unprocessedKeys[id];
    }
  });

  _lodash["default"].forEach(unprocessedKeys, function (_value, key) {
    map["delete"](key);
  });
}
/**
 * Converts an object graph into flat object with key/value pairs.
 * The rules of object graph to flat key value transformation are as follows.
 * 1. An already flat attribute with primitive will not be transformed.
 *    For example,
 *      input = { someKey: 'someValue' } => output = { someKey: 'someValue' }
 * 2. A nested object attribute will be flattened by adding full attribute path '<attributeName>.' (the paths are as per lodash's get and set functions)
 *    For example,
 *      input = { someKey: { someNestedKey: 'someValue' } } => output = { 'someKey.someNestedKey': 'someValue' }
 * 3. An array attribute will be flattened by adding correct path '<attributeName>[<elementIndex>]' prefix. (the paths are as per lodash's get and set functions)
 *    For example,
 *      input = { someKey: [ 'someValue1', 'someValue2' ] } => output = { 'someKey[0]': 'someValue1', 'someKey[1]': 'someValue2' }
 *      input = { someKey: [ 'someValue1', ['someValue2','someValue3'], 'someValue4' ] } => output = { 'someKey[0]': 'someValue1', 'someKey[1][0]': 'someValue2', 'someKey[1][1]': 'someValue3', 'someKey[2]': 'someValue4' }
 *      input = { someKey: [{ someNestedKey: 'someValue' }] } => output = { 'someKey[0].someNestedKey': 'someValue' }
 *
 * @param obj An object to flatten
 * @param filterFn An optional filter function that allows filtering out certain attributes from being included in the flattened result object. The filterFn is called with 3 arguments (result, value, key) and is expected to return true to include
 *   the key in the result or false to exclude the key from the result.
 * @param keyPrefix A optional key prefix to include in all keys in the resultant flattened object.
 * @param accum An optional accumulator to use when performing the transformation
 * @returns {*}
 */


function flattenObject(obj) {
  var filterFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return true;
  };
  var keyPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var accum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  function toFlattenedKey(key, idx) {
    var flattenedKey;

    if (_lodash["default"].isNil(idx)) {
      if (_lodash["default"].isNumber(key)) {
        flattenedKey = keyPrefix ? "".concat(keyPrefix, "[").concat(key, "]") : "[".concat(key, "]");
      } else {
        flattenedKey = keyPrefix ? "".concat(keyPrefix, ".").concat(key) : key;
      }
    } else {
      flattenedKey = keyPrefix ? "".concat(keyPrefix, ".").concat(key, "[").concat(idx, "]") : "".concat(key, "[").concat(idx, "]");
    }

    return flattenedKey;
  }

  return _lodash["default"].transform(obj, function (result, value, key) {
    if (filterFn(result, value, key)) {
      if (_lodash["default"].isArray(value)) {
        var idx = 0;

        _lodash["default"].forEach(value, function (element) {
          var flattenedKey = toFlattenedKey(key, idx);

          if (_lodash["default"].isObject(element)) {
            flattenObject(element, filterFn, flattenedKey, result);
          } else {
            result[flattenedKey] = element;
          }

          ++idx;
        });
      } else {
        var flattenedKey = toFlattenedKey(key);

        if (_lodash["default"].isObject(value)) {
          flattenObject(value, filterFn, flattenedKey, result);
        } else {
          result[flattenedKey] = value;
        }
      }
    }

    return result;
  }, accum);
}
/**
 * Converts an object with key/value pairs into object graph. This function is inverse of flattenObject.
 * i.e., unFlattenObject(flattenObject(obj)) = obj
 *
 * The rules of key/value pairs to object graph transformation are as follows.
 * 1. Key that does not contain delimiter will not be transformed.
 *    For example,
 *      input = { someKey: 'someValue' } => output = { someKey: 'someValue' }
 * 2. Key/Value containing delimiter will be transformed into object path
 *    For example,
 *      input = { someKey_someNestedKey: 'someValue' } => output = { someKey: { someNestedKey: 'someValue' } }
 * 3. Key/Value containing delimiter and integer index will be transformed into object containing array.
 *    For example,
 *      input = { someKey_0: 'someValue1', someKey_1: 'someValue2' } => output = { someKey: [ 'someValue1', 'someValue2' ] }
 *      input = { "someKey_0": "someValue1", "someKey_1_0": "someValue2", "someKey_1_1": "someValue3", "someKey_2": "someValue4" } => output = { someKey: [ 'someValue1', ['someValue2','someValue3'], 'someValue4' ] }
 *      input = { someKey_0_someNestedKey: 'someValue' } => output = { someKey: [{ someNestedKey: 'someValue' }] }
 *
 * @param obj An object to flatten
 * @param filterFn An optional filter function that allows filtering out certain attributes from being included in the flattened result object. The filterFn is called with 3 arguments (result, value, key) and is expected to return true to include
 *   the key in the result or false to exclude the key from the result.
 * @param keyPrefix A optional key prefix to include in all keys in the resultant flattened object.
 * @returns {*}
 */


function unFlattenObject(keyValuePairs) {
  var filterFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return true;
  };
  return _lodash["default"].transform(keyValuePairs, function (result, value, key) {
    if (filterFn(result, value, key)) {
      _lodash["default"].set(result, key, value);
    }

    return result;
  }, {});
}

function toUTCDate(str) {
  if (_lodash["default"].isEmpty(str)) return str;
  if (!_lodash["default"].isString(str)) return str;
  if (_lodash["default"].endsWith(str, 'Z')) return str;
  return "".concat(str, "Z");
}
/**
 * Given a list of validatorjs rules for a form element, returns valid options
 * by returning elements defined by the "in" rule as valid Semantic UI options objects.
 *
 * @param {Array} formRules Rules for the validatorjs library
 * @returns {Array<Object>} Options formatted for a Semantic UI Dropdown
 */


function getOptionsFromRules(formRules) {
  var options = [];
  formRules.forEach(function (rule) {
    if (_typeof(rule) === 'object' && 'in' in rule) {
      options = rule["in"].map(function (option) {
        return {
          key: option,
          text: option,
          value: option
        };
      });
    }
  });
  return options;
}

function validRegions() {
  return ['us-east-2', 'us-east-1', 'us-west-1', 'us-west-2', 'ap-east-1', 'ap-south-1', 'ap-northeast-3', 'ap-northeast-2', 'ap-southeast-1', 'ap-southeast-2', 'ap-northeast-1', 'ca-central-1', 'cn-north-1', 'cn-northwest-1', 'eu-central-1', 'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-north-1', 'me-south-1', 'sa-east-1', 'us-gov-east-1', 'us-gov-west-1'].sort();
}
/**
 * Converts bytes to a human-friendly string by representing them as KB, MB, GB,
 * etc., depending on how large the size is.
 * Adapted from https://stackoverflow.com/a/18650828
 *
 * @param {number} bytes The number of bytes to be converted
 * @param {number} decimals How many decimal places should be maintained
 * @returns {string} The human-friendly string form of the passed bytes
 */


function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (bytes === 0) return '0 Bytes';
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), " ").concat(sizes[i]);
}
/**
 * A utility function to process given items in sequence of batches. Items in one batch are processed in-parallel but
 * all batches are processed sequentially i..e, processing of the next batch is not started until the previous batch is
 * complete.
 *
 * @param items Array of items to process
 * @param batchSize Number of items in a batch
 * @param processorFn A function to process the batch. The function is called with the item argument.
 * The function is expected to return a Promise with some result of processing the item.
 *
 * @returns {Promise<Array>}
 */


function processInBatches(_x, _x2, _x3) {
  return _processInBatches.apply(this, arguments);
}
/**
 * A utility function that processes items sequentially. The function uses the specified processorFn to process
 * items in the given order i.e., it does not process next item in the given array until the promise returned for
 * the processing of the previous item is resolved. If the processorFn throws error (or returns a promise rejection)
 * this functions stops processing next item and the error is bubbled up to the caller (via a promise rejection).
 *
 * @param items Array of items to process
 * @param processorFn A function to process the item. The function is called with the item argument.
 * The function is expected to return a Promise with some result of processing the item.
 *
 * @returns {Promise<Array>}
 */


function _processInBatches() {
  _processInBatches = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(items, batchSize, processorFn) {
    var itemBatches, results, i, itemsInThisBatch, resultsFromThisBatch;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            itemBatches = _lodash["default"].chunk(items, batchSize);
            results = []; // Process all items in one batch in parallel and wait for the batch to
            // complete before moving on to the next batch

            i = 0;

          case 3:
            if (!(i <= itemBatches.length)) {
              _context.next = 12;
              break;
            }

            itemsInThisBatch = itemBatches[i]; // We need to await for each batch in loop to make sure they are awaited in sequence instead of
            // firing them in parallel disabling eslint for "no-await-in-loop" due to this
            // eslint-disable-next-line no-await-in-loop

            _context.next = 7;
            return Promise.all( //  Fire promise for each item in this batch and let it be processed in parallel
            _lodash["default"].map(itemsInThisBatch, processorFn));

          case 7:
            resultsFromThisBatch = _context.sent;
            // push all results from this batch into the main results array
            results = _lodash["default"].concat(results, resultsFromThisBatch);

          case 9:
            i += 1;
            _context.next = 3;
            break;

          case 12:
            return _context.abrupt("return", results);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _processInBatches.apply(this, arguments);
}

function processSequentially(_x4, _x5) {
  return _processSequentially.apply(this, arguments);
}

function _processSequentially() {
  _processSequentially = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(items, processorFn) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", processInBatches(items, 1, processorFn));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _processSequentially.apply(this, arguments);
}
//# sourceMappingURL=utils.js.map