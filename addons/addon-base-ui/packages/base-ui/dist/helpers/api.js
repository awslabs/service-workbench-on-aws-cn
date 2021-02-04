"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
exports.setIdToken = setIdToken;
exports.getDecodedIdToken = getDecodedIdToken;
exports.fetchJson = fetchJson;
exports.httpApiGet = httpApiGet;
exports.httpApiPost = httpApiPost;
exports.httpApiPut = httpApiPut;
exports.httpApiDelete = httpApiDelete;
exports.getAuthenticationProviderPublicConfigs = getAuthenticationProviderPublicConfigs;
exports.getAuthenticationProviderConfigs = getAuthenticationProviderConfigs;
exports.updateAuthenticationProviderConfig = updateAuthenticationProviderConfig;
exports.forgetIdToken = forgetIdToken;
exports.getApiKeys = getApiKeys;
exports.createNewApiKey = createNewApiKey;
exports.revokeApiKey = revokeApiKey;
exports.getUser = getUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.getUsers = getUsers;
exports.authenticate = authenticate;
exports.logout = logout;
exports.config = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("./utils");

var _settings = require("./settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/no-mutable-exports */
var config = {
  apiPath: _settings.apiPath,
  fetchMode: 'cors',
  maxRetryCount: 4
};
exports.config = config;
var token;
var decodedIdToken;

var authHeader = function authHeader(tok) {
  return {
    Authorization: "".concat(tok)
  };
};

function setIdToken(idToken, decodedToken) {
  token = idToken;
  decodedIdToken = decodedToken;
}

function getDecodedIdToken() {
  return decodedIdToken;
}

function isTokenExpired() {
  // Date.now() returns epoch time in MILLISECONDS
  var expiresAt = _lodash["default"].get(decodedIdToken, 'exp', 0) * 1000;
  return Date.now() >= expiresAt;
}

function forgetIdToken() {
  token = undefined;
  decodedIdToken = undefined;
}

function configure(obj) {
  exports.config = config = _objectSpread({}, config, {}, obj);
}

function fetchJson(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var retryCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  var isOk = false;
  var httpStatus;
  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  var body = '';

  var merged = _objectSpread({
    method: 'GET',
    cache: 'no-cache',
    mode: config.fetchMode,
    redirect: 'follow',
    body: body
  }, options, {
    headers: _objectSpread({}, headers, {}, options.headers)
  });

  if (merged.method === 'GET') delete merged.body; // otherwise fetch will throw an error

  var retryOptions = options;

  if (merged.params) {
    // if query string parameters are specified then add them to the URL
    // The merged.params here is just a plain JavaScript object with key and value
    // For example {key1: value1, key2: value2}
    // Get keys from the params object such as [key1, key2] etc
    var paramKeys = _lodash["default"].keys(merged.params); // Filter out params with undefined or null values


    var paramKeysToPass = _lodash["default"].filter(paramKeys, function (key) {
      return !_lodash["default"].isNil(_lodash["default"].get(merged.params, key));
    });

    var query = _lodash["default"].map(paramKeysToPass, function (key) {
      return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(_lodash["default"].get(merged.params, key)));
    }).join('&');

    url = query ? "".concat(url, "?").concat(query) : url; // Omit options.params after they are added to the url as query string params
    // This is required otherwise, if the call fails for some reason (e.g., time out) the same query string params
    // will be added once again to the URL causing duplicate params being passed in.
    // For example, if the options.params = { param1: 'value1', param2: 'value2' }
    // The url will become something like `https://some-host/some-path?param1=value1&param2=value2`
    // If we do not omit "options.params" here and if the call is retried (with a recursive call to "fetchJson") due
    // to timeout or any other issue, the url will then become
    // `https://some-host/some-path?param1=value1&param2=value2?param1=value1&param2=value2`

    retryOptions = _lodash["default"].omit(options, 'params');
  }

  return Promise.resolve().then(function () {
    return fetch(url, merged);
  })["catch"](function (err) {
    // this will capture network/timeout errors, because fetch does not consider http Status 5xx or 4xx as errors
    if (retryCount < config.maxRetryCount) {
      var backoff = retryCount * retryCount;
      if (backoff < 1) backoff = 1;
      return Promise.resolve().then(function () {
        return console.log("Retrying count = ".concat(retryCount, ", Backoff = ").concat(backoff));
      }).then(function () {
        return (0, _utils.delay)(backoff);
      }).then(function () {
        return fetchJson(url, retryOptions, retryCount + 1);
      });
    }

    throw (0, _utils.parseError)(err);
  }).then(function (response) {
    isOk = response.ok;
    httpStatus = response.status;
    return response;
  }).then(function (response) {
    if (_lodash["default"].isFunction(response.text)) return response.text();
    return response;
  }).then(function (text) {
    var json;

    try {
      if (_lodash["default"].isObject(text)) {
        json = text;
      } else {
        json = JSON.parse(text);
      }
    } catch (err) {
      if (httpStatus >= 400) {
        if (httpStatus >= 501 && retryCount < config.maxRetryCount) {
          var backoff = retryCount * retryCount;
          if (backoff < 1) backoff = 1;
          return Promise.resolve().then(function () {
            return console.log("Retrying count = ".concat(retryCount, ", Backoff = ").concat(backoff));
          }).then(function () {
            return (0, _utils.delay)(backoff);
          }).then(function () {
            return fetchJson(url, retryOptions, retryCount + 1);
          });
        }

        throw (0, _utils.parseError)({
          message: text,
          status: httpStatus
        });
      } else {
        throw (0, _utils.parseError)(new Error('The server did not return a json response.'));
      }
    }

    return json;
  }).then(function (json) {
    if (_lodash["default"].isBoolean(isOk) && !isOk) {
      throw (0, _utils.parseError)(_objectSpread({}, json, {
        status: httpStatus
      }));
    } else {
      return json;
    }
  });
} // ---------- helper functions ---------------


function httpApiGet(urlPath) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      params = _ref.params;

  return fetchJson("".concat(config.apiPath, "/").concat(urlPath), {
    method: 'GET',
    headers: authHeader(token),
    params: params
  });
}

function httpApiPost(urlPath) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      data = _ref2.data,
      params = _ref2.params;

  return fetchJson("".concat(config.apiPath, "/").concat(urlPath), {
    method: 'POST',
    headers: authHeader(token),
    params: params,
    body: JSON.stringify(data)
  });
}

function httpApiPut(urlPath) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      data = _ref3.data,
      params = _ref3.params;

  return fetchJson("".concat(config.apiPath, "/").concat(urlPath), {
    method: 'PUT',
    headers: authHeader(token),
    params: params,
    body: JSON.stringify(data)
  });
} // eslint-disable-next-line no-unused-vars


function httpApiDelete(urlPath) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      data = _ref4.data,
      params = _ref4.params;

  return fetchJson("".concat(config.apiPath, "/").concat(urlPath), {
    method: 'DELETE',
    headers: authHeader(token),
    params: params,
    body: JSON.stringify(data)
  });
} // ---------- api calls ---------------


function authenticate(authenticationUrl, username, password, authenticationProviderId) {
  return fetchJson(authenticationUrl, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
      authenticationProviderId: authenticationProviderId
    })
  });
}

function logout() {
  if (isTokenExpired()) {
    // if token is already expired then no need to call logout API to revoke token just return
    return {
      expired: true,
      revoked: false
    };
  }

  return httpApiPost('api/authentication/logout');
}

function getApiKeys() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      username = _ref5.username,
      ns = _ref5.ns;

  return httpApiGet('api/api-keys', {
    params: {
      username: username,
      ns: ns
    }
  });
}

function createNewApiKey() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      username = _ref6.username,
      ns = _ref6.ns;

  return httpApiPost('api/api-keys', {
    params: {
      username: username,
      ns: ns
    }
  });
}

function revokeApiKey(apiKeyId) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      username = _ref7.username,
      ns = _ref7.ns;

  return httpApiPut("api/api-keys/".concat(apiKeyId, "/revoke"), {
    params: {
      username: username,
      ns: ns
    }
  });
}

function getUser() {
  return httpApiGet('api/user');
}

function addUser(user) {
  var params = {};

  if (user.authenticationProviderId) {
    params.authenticationProviderId = user.authenticationProviderId;
  }

  if (user.identityProviderName) {
    params.identityProviderName = user.identityProviderName;
  }

  var data = (0, _utils.removeNulls)(_lodash["default"].clone(user));
  delete data.ns; // Server derives ns based on "authenticationProviderId" and "identityProviderName"
  // on server side so remove it from request body

  delete data.createdBy; // Similarly, createdBy and updatedBy are derived on server side

  delete data.updatedBy;

  if (!data.userType) {
    // if userType is specified as empty string then make sure to delete it
    // the api requires this to be only one of the supported values (currently only supported value is 'root')
    delete data.userType;
  }

  return httpApiPost('api/users', {
    data: data,
    params: params
  });
}

function updateUser(user) {
  var params = {}; // Remove nulls and omit extra fields from the payload before calling the API
  // The user is identified by the uid in the url

  var data = (0, _utils.removeNulls)(_lodash["default"].omit(_lodash["default"].clone(user), 'uid', 'authenticationProviderId', 'identityProviderName', 'username', 'ns', 'createdBy', 'updatedBy'));

  if (!data.userType) {
    // if userType is specified as empty string then make sure to delete it
    // the api requires this to be only one of the supported values (currently only supported value is 'root')
    delete data.userType;
  }

  return httpApiPut("api/users/".concat(user.uid), {
    data: data,
    params: params
  });
}

function getUsers() {
  return httpApiGet('api/users');
}

function getAuthenticationProviderPublicConfigs() {
  return httpApiGet('api/authentication/public/provider/configs');
}

function getAuthenticationProviderConfigs() {
  return httpApiGet('api/authentication/provider/configs');
}

function updateAuthenticationProviderConfig(authenticationProvider) {
  return httpApiPut('api/authentication/provider/configs', {
    data: authenticationProvider
  });
}
//# sourceMappingURL=api.js.map