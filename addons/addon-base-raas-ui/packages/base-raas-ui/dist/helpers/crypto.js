"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aesGcmEncrypt = aesGcmEncrypt;
exports.aesGcmDecrypt = aesGcmDecrypt;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
 * Encrypts plaintext using AES-GCM with supplied password, for decryption with aesGcmDecrypt().
 * https://gist.github.com/chrisveness/43bcda93af9f646d083fad678071b90a
 * MIT lisence
 *
 * @param   {String} plaintext - Plaintext to be encrypted.
 * @param   {String} password - Password to use to encrypt plaintext.
 * @returns {String} Encrypted ciphertext.
 *
 * @example
 *   const ciphertext = await aesGcmEncrypt('my secret text', 'pw');
 *   aesGcmEncrypt('my secret text', 'pw').then(function(ciphertext) { console.log(ciphertext); });
 */
function aesGcmEncrypt(_x, _x2) {
  return _aesGcmEncrypt.apply(this, arguments);
}
/**
 * Decrypts ciphertext encrypted with aesGcmEncrypt() using supplied password.
 * https://gist.github.com/chrisveness/43bcda93af9f646d083fad678071b90a
 * MIT lisence
 *
 * @param   {String} ciphertext - Ciphertext to be decrypted.
 * @param   {String} password - Password to use to decrypt ciphertext.
 * @returns {String} Decrypted plaintext.
 *
 * @example
 *   const plaintext = await aesGcmDecrypt(ciphertext, 'pw');
 *   aesGcmDecrypt(ciphertext, 'pw').then(function(plaintext) { console.log(plaintext); });
 */


function _aesGcmEncrypt() {
  _aesGcmEncrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(plaintext, password) {
    var pwUtf8, pwHash, iv, alg, key, ptUtf8, ctBuffer, ctArray, ctStr, ctBase64, ivHex;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8

            _context.next = 3;
            return crypto.subtle.digest('SHA-256', pwUtf8);

          case 3:
            pwHash = _context.sent;
            // hash the password
            iv = crypto.getRandomValues(new Uint8Array(12)); // get 96-bit random iv

            alg = {
              name: 'AES-GCM',
              iv: iv
            }; // specify algorithm to use

            _context.next = 8;
            return crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);

          case 8:
            key = _context.sent;
            // generate key from pw
            ptUtf8 = new TextEncoder().encode(plaintext); // encode plaintext as UTF-8

            _context.next = 12;
            return crypto.subtle.encrypt(alg, key, ptUtf8);

          case 12:
            ctBuffer = _context.sent;
            // encrypt plaintext using key
            ctArray = Array.from(new Uint8Array(ctBuffer)); // ciphertext as byte array

            ctStr = ctArray.map(function (_byte) {
              return String.fromCharCode(_byte);
            }).join(''); // ciphertext as string

            ctBase64 = btoa(ctStr); // encode ciphertext as base64

            ivHex = Array.from(iv).map(function (b) {
              return "00".concat(b.toString(16)).slice(-2);
            }).join(''); // iv as hex string

            return _context.abrupt("return", ivHex + ctBase64);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _aesGcmEncrypt.apply(this, arguments);
}

function aesGcmDecrypt(_x3, _x4) {
  return _aesGcmDecrypt.apply(this, arguments);
}

function _aesGcmDecrypt() {
  _aesGcmDecrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ciphertext, password) {
    var pwUtf8, pwHash, iv, alg, key, ctStr, ctUint8, plainBuffer, plaintext;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8

            _context2.next = 3;
            return crypto.subtle.digest('SHA-256', pwUtf8);

          case 3:
            pwHash = _context2.sent;
            // hash the password
            iv = ciphertext.slice(0, 24).match(/.{2}/g).map(function (_byte2) {
              return parseInt(_byte2, 16);
            }); // get iv from ciphertext

            alg = {
              name: 'AES-GCM',
              iv: new Uint8Array(iv)
            }; // specify algorithm to use

            _context2.next = 8;
            return crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);

          case 8:
            key = _context2.sent;
            // use pw to generate key
            ctStr = atob(ciphertext.slice(24)); // decode base64 ciphertext

            ctUint8 = new Uint8Array(ctStr.match(/[\s\S]/g).map(function (ch) {
              return ch.charCodeAt(0);
            })); // ciphertext as Uint8Array

            _context2.next = 13;
            return crypto.subtle.decrypt(alg, key, ctUint8);

          case 13:
            plainBuffer = _context2.sent;
            // decrypt ciphertext using key
            plaintext = new TextDecoder().decode(plainBuffer); // decode password from UTF-8

            return _context2.abrupt("return", plaintext);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _aesGcmDecrypt.apply(this, arguments);
}
//# sourceMappingURL=crypto.js.map