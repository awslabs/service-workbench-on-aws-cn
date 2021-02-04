"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.AppRunner = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

/* eslint-disable no-await-in-loop */
var AppRunner = /*#__PURE__*/function () {
  function AppRunner(appContext) {
    _classCallCheck(this, AppRunner);

    this.appContext = appContext;
  }

  _createClass(AppRunner, [{
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var appContext, registry, initPlugins, payload, _iterator, _step, plugin, postInitPlugins, _iterator2, _step2, _plugin, app;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                appContext = this.appContext;
                registry = appContext.pluginRegistry;
                initPlugins = registry.getPluginsWithMethod('initialization', 'init');
                payload = {}; // Ask each plugin to run init()
                // eslint-disable-next-line no-restricted-syntax

                _iterator = _createForOfIteratorHelper(initPlugins);
                _context.prev = 5;

                _iterator.s();

              case 7:
                if ((_step = _iterator.n()).done) {
                  _context.next = 13;
                  break;
                }

                plugin = _step.value;
                _context.next = 11;
                return plugin.init(payload, appContext);

              case 11:
                _context.next = 7;
                break;

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);

                _iterator.e(_context.t0);

              case 18:
                _context.prev = 18;

                _iterator.f();

                return _context.finish(18);

              case 21:
                if (!payload.externalRedirectUrl) {
                  _context.next = 24;
                  break;
                }

                window.location = payload.externalRedirectUrl;
                return _context.abrupt("return");

              case 24:
                postInitPlugins = registry.getPluginsWithMethod('initialization', 'postInit'); // Ask each plugin to run postInit()
                // eslint-disable-next-line no-restricted-syntax

                _iterator2 = _createForOfIteratorHelper(postInitPlugins);
                _context.prev = 26;

                _iterator2.s();

              case 28:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 34;
                  break;
                }

                _plugin = _step2.value;
                _context.next = 32;
                return _plugin.postInit(payload, appContext);

              case 32:
                _context.next = 28;
                break;

              case 34:
                _context.next = 39;
                break;

              case 36:
                _context.prev = 36;
                _context.t1 = _context["catch"](26);

                _iterator2.e(_context.t1);

              case 39:
                _context.prev = 39;

                _iterator2.f();

                return _context.finish(39);

              case 42:
                if (!payload.externalRedirectUrl) {
                  _context.next = 45;
                  break;
                }

                window.location = payload.externalRedirectUrl;
                return _context.abrupt("return");

              case 45:
                app = appContext.app;
                _context.next = 48;
                return app.init(payload);

              case 48:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 15, 18, 21], [26, 36, 39, 42]]);
      }));

      function run() {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }]);

  return AppRunner;
}();

exports.AppRunner = AppRunner;

function registerContextItems(appContext) {
  appContext.appRunner = new AppRunner(appContext);
}
//# sourceMappingURL=AppRunner.js.map