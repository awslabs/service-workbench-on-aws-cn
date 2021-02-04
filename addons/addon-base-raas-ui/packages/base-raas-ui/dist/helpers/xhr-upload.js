"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */

/**
 * @typedef {Object} UploadHandle
 * @property {Promise<void>} done a Promise that resolves if the upload completes, or rejects if there is an upload error.
 * @property {() => void} cancel cancels the upload by calling XMLHttpRequest.abort().
 * @property {(callback: (uploadedBytes: number) => void) => void} onProgress used to register event listeners for upload progress events
 */

/**
 * Uploads an HTML file object or a blob using XMLHttpRequest.
 *
 * @params {File|Blob} file
 * @params {sring} url
 * @params {Object<string, any>} fields
 * @returns {UploadHandle}
 */
var upload = function upload(file, url) {
  var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var req = new XMLHttpRequest();
  var uploadProgressListeners = [];

  var uploadProgressCallback = function uploadProgressCallback(uploadedBytes) {
    uploadProgressListeners.forEach(function (fn) {
      fn(uploadedBytes);
    });
  };

  var done = new Promise(function (resolve, reject) {
    req.upload.addEventListener('progress', function (event) {
      uploadProgressCallback(event.loaded || 0);
    });
    req.upload.addEventListener('error', function () {
      reject(new Error('Network Error'));
    });

    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        // Request is DONE
        if (req.status === 0) {
          // Request status is UNSENT
          reject(new Error('Cancelled'));
        } else if (req.status >= 400 && req.status <= 599) {
          // Request received 4xx or 5xx error
          reject(new Error("Error: ".concat(req.statusText)));
        } else {
          resolve();
        }
      }
    };
  });
  var formData = new FormData();
  Object.entries(fields).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    return formData.append(name, value);
  });
  formData.append('file', file, file.name);
  req.open('POST', url);
  req.send(formData);
  return {
    done: done,
    cancel: function cancel() {
      req.abort();
    },
    onProgress: function onProgress(cb) {
      uploadProgressListeners.push(cb);
    }
  };
};

var _default = upload;
exports["default"] = _default;
//# sourceMappingURL=xhr-upload.js.map