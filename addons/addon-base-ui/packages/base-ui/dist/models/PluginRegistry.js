"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginRegistry = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("../helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PluginRegistry = /*#__PURE__*/function () {
  function PluginRegistry(registry) {
    _classCallCheck(this, PluginRegistry);

    this.registry = registry;
  }

  _createClass(PluginRegistry, [{
    key: "getPlugins",
    value: function getPlugins(extensionPoint) {
      return this.registry.getPlugins(extensionPoint);
    }
  }, {
    key: "getPluginsWithMethod",
    value: function getPluginsWithMethod(extensionPoint, methodName) {
      var registry = this.registry;
      var plugins = registry.getPlugins(extensionPoint);
      return _lodash["default"].filter(plugins, function (plugin) {
        return _lodash["default"].isFunction(plugin[methodName]);
      });
    }
  }, {
    key: "runPlugins",
    value: function () {
      var _runPlugins = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(extensionPoint, methodName) {
        var _len,
            args,
            _key,
            plugins,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _args.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                  args[_key - 2] = _args[_key];
                }

                plugins = this.getPluginsWithMethod(extensionPoint, methodName); // Each plugin needs to be executed in order. The plugin method may be return a promise we need to await
                // it in sequence.

                return _context.abrupt("return", (0, _utils.processSequentially)(plugins, function (plugin) {
                  return plugin[methodName].apply(plugin, args);
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function runPlugins(_x, _x2) {
        return _runPlugins.apply(this, arguments);
      }

      return runPlugins;
    }()
    /**
     * A method to visit plugins that implement the specified method for the specified extension point.
     * The method calls each plugin in the same order as registered in the plugin registry.
     * It invokes the specified method on each plugin and passes a result returned by the previous plugin call.
     * This gives each plugin a chance to contribute to the payload. Each plugin can inspect the given payload and return
     * it "as is" or return a modified payload. The payload returned by the last plugin is considered the resultant payload
     * and returned to the caller.
     *
     * @param extensionPoint Name of the extension point in the plugin registry mapped to corresponding plugins
     *
     * @param methodName Name of the plugin method to call. The plugin method will be invoked with the payload as the
     * first argument followed by any other arguments specified by the "args".
     *
     * @param options Various options for this call
     * @param options.payload Value of the initial payload to pass to the first plugin
     * @param options.continueOnError Optional flag indicating if the method should continue (i.e., continue calling the
     * next plugin) when a plugin throws error. Defaults to false.
     * @param options.pluginInvokerFn An optional plugin invoker function that invokes plugin. Default plugin invoker
     * calls the plugin method with the following arguments (payloadSoFar, ...args). The "payloadSoFar" is the payload
     * collected so far from previous plugins. The "...args" are any other arguments passed to this method. The
     * "pluginInvokerFn" can be used in cases where the plugin method signature does not match the "(payloadSoFar, ...args)"
     * signature. A custom implementation of "pluginInvokerFn" can be passed in such cases to customize the way the
     * plugin is called. The "pluginInvokerFn" is called with the following arguments "(pluginPayload, plugin, method, ...args)"
     *
     * @param args Any other arguments to pass to the plugins
     *
     * @returns {*}
     */

  }, {
    key: "visitPlugins",
    value: function visitPlugins(extensionPoint, methodName) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref$payload = _ref.payload,
          payload = _ref$payload === void 0 ? {} : _ref$payload,
          _ref$continueOnError = _ref.continueOnError,
          continueOnError = _ref$continueOnError === void 0 ? false : _ref$continueOnError,
          _ref$pluginInvokerFn = _ref.pluginInvokerFn,
          pluginInvokerFn = _ref$pluginInvokerFn === void 0 ? function (pluginPayload, plugin, method) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          args[_key3 - 3] = arguments[_key3];
        }

        return plugin[method].apply(plugin, [pluginPayload].concat(args));
      } : _ref$pluginInvokerFn;

      var plugins = this.getPluginsWithMethod(extensionPoint, methodName);
      var payloadSoFar = payload; // eslint-disable-next-line no-restricted-syntax

      for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        args[_key2 - 3] = arguments[_key2];
      }

      var _iterator = _createForOfIteratorHelper(plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var plugin = _step.value;

          try {
            payloadSoFar = pluginInvokerFn.apply(void 0, [payloadSoFar, plugin, methodName].concat(args));
          } catch (err) {
            if (!continueOnError) {
              throw err;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return payloadSoFar;
    }
  }]);

  return PluginRegistry;
}();

exports.PluginRegistry = PluginRegistry;
//# sourceMappingURL=PluginRegistry.js.map