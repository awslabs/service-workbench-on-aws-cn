"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.Showdown = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _showdown = _interopRequireDefault(require("showdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var classMap = {
  h1: 'ui large header clearfix',
  h2: 'ui medium header clearfix',
  ul: 'ui list undo-line-height',
  li: 'ui item undo-line-height',
  p: 'ui undo-line-height clearfix',
  // img: 'ui fluid image'
  img: 'ui left floated image clearfix mb2 mr2'
};
var bindings = Object.keys(classMap).map(function (key) {
  return {
    type: 'output',
    regex: new RegExp("<".concat(key, "(.*)>"), 'g'),
    replace: "<".concat(key, " class=\"").concat(classMap[key], "\" $1>")
  };
}); // A wrapper around the showdown.js library https://github.com/showdownjs/showdown

var Showdown = /*#__PURE__*/function () {
  function Showdown(appContext) {
    _classCallCheck(this, Showdown);

    this.appContext = appContext; // see https://github.com/showdownjs/showdown/wiki/Add-default-classes-for-each-HTML-element

    this.converter = new _showdown["default"].Converter({
      extensions: _toConsumableArray(bindings)
    }); // this.converter.setFlavor('github');

    this.converter.setFlavor('vanilla'); // options are available here https://github.com/showdownjs/showdown/wiki/Showdown-options

    this.converter.setOption('parseImgDimensions', true);
  }

  _createClass(Showdown, [{
    key: "convert",
    value: function convert(markdown) {
      var assets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // example of markdown http://demo.showdownjs.com/
      // we will append all the assets as image references (this is not efficient at all), when we
      // have time we can the correct image src mapping in an extension
      var extended = "".concat(markdown, "\n\n");

      _lodash["default"].forEach(assets, function (url, name) {
        extended = "".concat(extended, "[").concat(name, "]: ").concat(url, "\n");
      });

      return this.converter.makeHtml(extended);
    }
  }]);

  return Showdown;
}();

exports.Showdown = Showdown;

function registerContextItems(appContext) {
  appContext.showdown = new Showdown(appContext);
}
//# sourceMappingURL=Showdown.js.map