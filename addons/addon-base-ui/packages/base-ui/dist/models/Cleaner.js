"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.Cleaner = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _api = require("../helpers/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// An object that captures all the clean up logic when the app is done or no jwt token
// is found.
var Cleaner = /*#__PURE__*/function () {
  function Cleaner(appContext) {
    _classCallCheck(this, Cleaner);

    this.appContext = appContext;
  }

  _createClass(Cleaner, [{
    key: "cleanup",
    value: function cleanup() {
      var _this = this;

      var _this$appContext = this.appContext,
          disposers = _this$appContext.disposers,
          intervalIds = _this$appContext.intervalIds; // it is important that we start with cleaning the disposers, otherwise snapshots events will be fired
      // for cleaned stores

      var keys = _lodash["default"].keys(disposers);

      _lodash["default"].forEach(keys, function (key) {
        var fn = disposers[key];

        if (_lodash["default"].isFunction(fn)) {
          fn();
        }

        delete disposers[key];
      });

      keys = _lodash["default"].keys(intervalIds);

      _lodash["default"].forEach(keys, function (key) {
        var id = intervalIds[key];

        if (!_lodash["default"].isNil(id)) {
          clearInterval(id);
        }

        delete intervalIds[key];
      });

      (0, _mobx.runInAction)(function () {
        (0, _api.forgetIdToken)();

        _lodash["default"].forEach(_this.appContext, function (obj) {
          if (obj === _this) return; // we don't want to end up in an infinite loop

          if (_lodash["default"].isFunction(obj.cleanup)) {
            obj.cleanup();
          }
        });
      });
    }
  }]);

  return Cleaner;
}();

exports.Cleaner = Cleaner;

function registerContextItems(appContext) {
  appContext.cleaner = new Cleaner(appContext);
}
//# sourceMappingURL=Cleaner.js.map