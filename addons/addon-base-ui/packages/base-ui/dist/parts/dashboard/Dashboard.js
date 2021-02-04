"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _semanticUiReact = require("semantic-ui-react");

var _graphOptions = require("./graphs/graph-options");

var _BarGraph = _interopRequireDefault(require("./graphs/BarGraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// expected props
// - location (from react router)
var Dashboard = /*#__PURE__*/function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _super.apply(this, arguments);
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        className: "mt3 mb4"
      }, this.renderTitle(), this.renderContent());
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mb3 flex"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        className: "color-grey mt1 mb0 flex-auto"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "dashboard",
        className: "align-top"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Content, {
        className: "left-align"
      }, "Dashboard")));
    }
  }, {
    key: "stat",
    value: function stat(title, label, value, color, className) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('center', className)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "fs-9"
      }, title), /*#__PURE__*/_react["default"].createElement("div", {
        className: color,
        style: {
          fontSize: '4rem',
          lineHeight: '1em'
        }
      }, value), /*#__PURE__*/_react["default"].createElement("div", {
        className: "bold",
        style: {
          fontSize: '1rem',
          lineHeight: '1em'
        }
      }, label));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        color: "blue",
        padded: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex flex-wrap"
      }, this.stat('You have to complete', 'TASKS', '550', 'color-blue', 'mr4'), this.renderTaskCountGraph(), this.renderTaskDueGraph()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Divider, null), "There are", ' ', /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        circular: true,
        color: "orange",
        className: "mt2"
      }, "100"), ' ', "tasks due today. \xA0\xA0You have been assigned an additional ", /*#__PURE__*/_react["default"].createElement("b", null, "300"), " tasks since last month. There are a total of", /*#__PURE__*/_react["default"].createElement("b", null, "10,000"), "tasks to complete."));
    }
  }, {
    key: "renderTaskCountGraph",
    value: function renderTaskCountGraph() {
      var title = 'Tasks';
      var data = {
        labels: ['Eat', 'Run', 'Walk', 'Sleep', 'Work'],
        datasets: (0, _graphOptions.blueDatasets)(title, [1, 8, 5, 6, 3])
      };
      return /*#__PURE__*/_react["default"].createElement(_BarGraph["default"], {
        className: "mr4",
        data: data,
        title: title
      });
    }
  }, {
    key: "renderTaskDueGraph",
    value: function renderTaskDueGraph() {
      var title = 'Due Date';
      var data = {
        labels: ['Today', 'Tomorrow', 'Yesterday', 'Last Year', 'No'],
        datasets: (0, _graphOptions.blueDatasets)(title, [1, 8, 5, 6, 3])
      };
      return /*#__PURE__*/_react["default"].createElement(_BarGraph["default"], {
        className: "mr4",
        data: data,
        title: title
      });
    }
  }]);

  return Dashboard;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(Dashboard, {});

var _default = (0, _mobxReact.inject)()((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(Dashboard)));

exports["default"] = _default;
//# sourceMappingURL=Dashboard.js.map