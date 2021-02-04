"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _reactRouterDom = require("react-router-dom");

var _reactChartjs = require("react-chartjs-2");

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _api = require("../../helpers/api");

var _settings = require("../../helpers/settings");

var _graphOptions = require("./graphs/graph-options");

var _BarGraph = _interopRequireDefault(require("./graphs/BarGraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var Dashboard = /*#__PURE__*/function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.call(this, props);
    _this.state = {
      totalCost: 0,
      projNameToTotalCost: {},
      projNameToUserTotalCost: {},
      envNameToCostInfo: {},
      isLoading: true
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$this$getCosts, totalCost, projNameToTotalCost, projNameToUserTotalCost, envNameToCostInfo, store;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.scrollTo(0, 0);
                _context.prev = 1;
                _context.next = 4;
                return this.getCosts();

              case 4:
                _yield$this$getCosts = _context.sent;
                totalCost = _yield$this$getCosts.totalCost;
                projNameToTotalCost = _yield$this$getCosts.projNameToTotalCost;
                projNameToUserTotalCost = _yield$this$getCosts.projNameToUserTotalCost;
                envNameToCostInfo = _yield$this$getCosts.envNameToCostInfo;
                this.setState({
                  totalCost: totalCost,
                  projNameToTotalCost: projNameToTotalCost,
                  projNameToUserTotalCost: projNameToUserTotalCost,
                  envNameToCostInfo: envNameToCostInfo,
                  isLoading: false
                });
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                store = this.getStore(); // "AccessDeniedException" error code is thrown when Cost Explorer hasn't been configured

                if (_context.t0.code === 'AccessDeniedException') {
                  if (store.user.isAdmin) {
                    // Cost Explorer related errors are only to be shown to admins, not researchers (GALI-266)
                    (0, _notification.displayWarning)('Error encountered accessing cost data. Please enable Cost Explorer in the AWS Management Console and wait for 24 hours.');
                  }
                } else {
                  (0, _notification.displayError)(_context.t0.message);
                }

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "getStore",
    value: function getStore() {
      return this.props.userStore;
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
        "data-testid": "page-title",
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
    key: "renderContent",
    value: function renderContent() {
      return /*#__PURE__*/_react["default"].createElement("div", null, this.state.isLoading === false && this.state.totalCost === 0 ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "bold"
      }, "No cost data to show") : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, this.renderCostPerProj()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, this.renderPastMonthCostPerEnv()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, this.renderYesterdayCostPerEnv()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "clearfix"
      }, this.renderPastMonthCostPerProjPerUser()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "bold"
      }, "Total cost of all research workspaces for the past 30 days: $", Math.round(this.state.totalCost * 100) / 100)));
    }
  }, {
    key: "getCosts",
    value: function () {
      var _getCosts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _yield$this$getAccumu, envNameToCostInfo, envNameToIndex, projNameToUserTotalCost, projNameToTotalCost, totalCost;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAccumulatedEnvCost();

              case 2:
                _yield$this$getAccumu = _context2.sent;
                envNameToCostInfo = _yield$this$getAccumu.envNameToCostInfo;
                envNameToIndex = _yield$this$getAccumu.envNameToIndex;
                projNameToUserTotalCost = {};
                Object.keys(envNameToCostInfo).forEach(function (envName) {
                  var projName = envNameToIndex[envName];

                  if (projNameToUserTotalCost[projName] === undefined) {
                    projNameToUserTotalCost[projName] = {};
                  }

                  Object.keys(envNameToCostInfo[envName].pastMonthCostByUser).forEach(function (user) {
                    var currentUserCost = _lodash["default"].get(projNameToUserTotalCost, "".concat(projName, ".").concat(user), 0);

                    projNameToUserTotalCost[projName][user] = currentUserCost + envNameToCostInfo[envName].pastMonthCostByUser[user];
                  });
                });
                projNameToTotalCost = {};
                totalCost = 0;
                Object.keys(projNameToUserTotalCost).forEach(function (projName) {
                  var indexCost = 0;
                  Object.keys(projNameToUserTotalCost[projName]).forEach(function (user) {
                    indexCost += projNameToUserTotalCost[projName][user];
                  });
                  totalCost += indexCost;
                  projNameToTotalCost[projName] = indexCost;
                });
                return _context2.abrupt("return", {
                  totalCost: totalCost,
                  projNameToTotalCost: projNameToTotalCost,
                  projNameToUserTotalCost: projNameToUserTotalCost,
                  envNameToCostInfo: envNameToCostInfo
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCosts() {
        return _getCosts.apply(this, arguments);
      }

      return getCosts;
    }()
  }, {
    key: "getAccumulatedEnvCost",
    value: function () {
      var _getAccumulatedEnvCost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var environments, envIdToName, envNameToIndex, envIds, envCostPromises, envCostResults, pastMonthCostByUserArray, yesterdayCostArray, envNameToCostInfo, i, key;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_settings.enableBuiltInWorkspaces) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 3;
                return (0, _api.getEnvironments)();

              case 3:
                _context3.t0 = _context3.sent;
                _context3.next = 9;
                break;

              case 6:
                _context3.next = 8;
                return (0, _api.getScEnvironments)();

              case 8:
                _context3.t0 = _context3.sent;

              case 9:
                environments = _context3.t0;
                envIdToName = {};
                envNameToIndex = {};
                environments.forEach(function (env) {
                  if (env.isExternal) return;
                  envIdToName[env.id] = env.name;
                  envNameToIndex[env.name] = env.indexId;
                });
                envIds = Object.keys(envIdToName);
                envCostPromises = envIds.map(function (envId) {
                  return _settings.enableBuiltInWorkspaces ? (0, _api.getEnvironmentCost)(envId, 30, false, true) : (0, _api.getScEnvironmentCost)(envId, 30, false, true);
                });
                _context3.next = 17;
                return Promise.all(envCostPromises);

              case 17:
                envCostResults = _context3.sent;
                pastMonthCostByUserArray = envCostResults.map(function (costResult) {
                  var createdByToCost = {};

                  _lodash["default"].forEach(costResult, function (costDate) {
                    var cost = costDate.cost;
                    Object.keys(cost).forEach(function (group) {
                      var createdBy = group.split('$')[1];
                      createdBy = createdBy || 'None';

                      var currentUserCost = _lodash["default"].get(createdByToCost, createdBy, 0);

                      createdByToCost[createdBy] = currentUserCost + cost[group].amount;
                    });
                  });

                  return createdByToCost;
                });
                yesterdayCostArray = envCostResults.map(function (costResult) {
                  var yesterdayCost = costResult.length > 0 ? costResult[costResult.length - 1] : {};
                  var totalCost = 0;

                  if (yesterdayCost) {
                    var arrayOfCosts = _lodash["default"].flatMapDeep(yesterdayCost.cost);

                    arrayOfCosts.forEach(function (cost) {
                      totalCost += cost.amount;
                    });
                  }

                  return totalCost;
                });
                envNameToCostInfo = {};

                for (i = 0; i < envIds.length; i++) {
                  key = envIdToName[envIds[i]];
                  envNameToCostInfo[key] = {
                    pastMonthCostByUser: pastMonthCostByUserArray[i],
                    yesterdayCost: yesterdayCostArray[i]
                  };
                }

                return _context3.abrupt("return", {
                  envNameToCostInfo: envNameToCostInfo,
                  envNameToIndex: envNameToIndex
                });

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAccumulatedEnvCost() {
        return _getAccumulatedEnvCost.apply(this, arguments);
      }

      return getAccumulatedEnvCost;
    }()
  }, {
    key: "renderCostPerProj",
    value: function renderCostPerProj() {
      var _this2 = this;

      if (_lodash["default"].isEmpty(this.state.projNameToTotalCost)) {
        return /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      }

      var title = 'Index Costs for Past 30 Days';
      var labels = Object.keys(this.state.projNameToTotalCost);
      var dataPoints = Object.keys(this.state.projNameToTotalCost).map(function (projName) {
        return _this2.state.projNameToTotalCost[projName];
      });
      var data = {
        labels: labels,
        datasets: (0, _graphOptions.blueDatasets)(title, dataPoints)
      };
      return /*#__PURE__*/_react["default"].createElement(_BarGraph["default"], {
        className: "mr4",
        data: data,
        title: title
      });
    }
  }, {
    key: "renderPastMonthCostPerEnv",
    value: function renderPastMonthCostPerEnv() {
      var _this3 = this;

      if (_lodash["default"].isEmpty(this.state.envNameToCostInfo)) {
        return /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      }

      var pastMonthCostTotalArray = [];
      Object.keys(this.state.envNameToCostInfo).forEach(function (envName) {
        var total = 0;
        Object.keys(_this3.state.envNameToCostInfo[envName].pastMonthCostByUser).forEach(function (user) {
          total += _this3.state.envNameToCostInfo[envName].pastMonthCostByUser[user];
        });
        pastMonthCostTotalArray.push(total);
      });
      var title = 'Env Cost for Past 30 Days';
      var labels = Object.keys(this.state.envNameToCostInfo);
      var dataPoints = pastMonthCostTotalArray;
      var data = {
        labels: labels,
        datasets: (0, _graphOptions.blueDatasets)(title, dataPoints)
      };
      return /*#__PURE__*/_react["default"].createElement(_BarGraph["default"], {
        className: "mr4",
        data: data,
        title: title
      });
    }
  }, {
    key: "renderYesterdayCostPerEnv",
    value: function renderYesterdayCostPerEnv() {
      var _this4 = this;

      if (_lodash["default"].isEmpty(this.state.envNameToCostInfo)) {
        return /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      }

      var title = "Yesterday's Env Cost";
      var labels = Object.keys(this.state.envNameToCostInfo);
      var dataPoints = Object.keys(this.state.envNameToCostInfo).map(function (envName) {
        return _this4.state.envNameToCostInfo[envName].yesterdayCost;
      });
      var data = {
        labels: labels,
        datasets: (0, _graphOptions.blueDatasets)(title, dataPoints)
      };
      return /*#__PURE__*/_react["default"].createElement(_BarGraph["default"], {
        className: "mr4",
        data: data,
        title: title
      });
    }
  }, {
    key: "renderPastMonthCostPerProjPerUser",
    value: function renderPastMonthCostPerProjPerUser() {
      var _this5 = this;

      if (_lodash["default"].isEmpty(this.state.projNameToUserTotalCost)) {
        return /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      }

      var results = [];
      Object.keys(this.state.projNameToUserTotalCost).forEach(function (projName) {
        var projCostData = _this5.state.projNameToUserTotalCost[projName];
        var labels = Object.keys(projCostData); // NOTE: We need a color for each user

        var colors = ['#FF6384', '#36A2EB', '#FFCE56', '#CDDC39', '#4527a0', '#f4511e'];
        var datasets = [{
          data: Object.keys(projCostData).map(function (user) {
            return projCostData[user];
          }),
          backgroundColor: colors,
          hoverBackgroundColor: colors
        }];
        var data = {
          labels: labels,
          datasets: datasets
        };
        results.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: projName,
          className: "col col-6"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "center"
        }, projName), /*#__PURE__*/_react["default"].createElement(_reactChartjs.Pie, {
          data: data
        })));
      });
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "center bold"
      }, "Index Cost Breakdowns for Past 30 Days"), results);
    }
  }]);

  return Dashboard;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(Dashboard, {});

var _default = (0, _mobxReact.inject)('userStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(Dashboard)));

exports["default"] = _default;
//# sourceMappingURL=Dashboard.js.map