"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobx = require("mobx");

require("mobx-react/batchingForReactDom");

var _appContext = require("./app-context/app-context");

var serviceWorker = _interopRequireWildcard(require("./service-worker"));

var _AppContainer = _interopRequireDefault(require("./AppContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function bootstrapApp(_ref) {
  var renderAppContainer = _ref.renderAppContainer,
      renderError = _ref.renderError,
      renderProgress = _ref.renderProgress,
      pluginRegistry = _ref.pluginRegistry;
  // Disabling service worker
  serviceWorker.unregister(); // Enable mobx strict mode, changes to state must be contained in actions

  (0, _mobx.configure)({
    enforceActions: 'always'
  }); // Initialize appContext object registering various Mobx stores etc

  var appContext = (0, _appContext.initializeAppContext)(pluginRegistry); // Render page loading message

  renderProgress(); // Trigger the app startup sequence

  _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return appContext.appRunner.run();

          case 3:
            renderAppContainer(_AppContainer["default"], appContext);
            _context.next = 11;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0); // TODO - check if the code = tokenExpired, then
            // - render a notification error
            // - call cleaner cleanup, this is IMPORTANT
            // - render the app and skip the rest of the renderError logic
            // - doing the above logic will help us have a smooth user experience
            //   when the token has expired. NOTE: this might not be applicable for the
            //   cases where the app requires midway before anything is displayed to the user

            renderError(_context.t0);

            try {
              appContext.cleaner.cleanup();
            } catch (error) {
              // ignore
              console.log(error);
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }))();
}

var _default = bootstrapApp;
exports["default"] = _default;
//# sourceMappingURL=bootstrap-app.js.map