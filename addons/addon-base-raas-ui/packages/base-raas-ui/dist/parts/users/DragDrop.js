"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _reactRouterDom = require("react-router-dom");

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

var _mobx = require("mobx");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _routing = require("@aws-ee/base-ui/dist/helpers/routing");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _ErrorBox = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/ErrorBox"));

var _BasicProgressPlaceholder = _interopRequireDefault(require("@aws-ee/base-ui/dist/parts/helpers/BasicProgressPlaceholder"));

var _Stores = _interopRequireDefault(require("@aws-ee/base-ui/dist/models/Stores"));

var _UserTable = _interopRequireDefault(require("./UserTable"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var DragDrop = /*#__PURE__*/function (_Component) {
  _inherits(DragDrop, _Component);

  var _super = _createSuper(DragDrop);

  function DragDrop(props) {
    var _this;

    _classCallCheck(this, DragDrop);

    _this = _super.call(this, props);

    _this.onDrop = function (files) {
      var reader = new FileReader();

      reader.onabort = function () {
        return console.log('file reading was aborted');
      };

      reader.onerror = function () {
        return console.log('file reading has failed');
      };

      reader.onload = function () {
        var binaryStr = reader.result;

        var jsonArray = _this.csvJSON(binaryStr);

        _this.setState({
          jsonArrayContent: jsonArray
        });

        _this.setState({
          fileContent: binaryStr
        });
      };

      files.forEach(function (file) {
        return reader.readAsText(file);
      });

      _this.setState({
        files: files
      });
    };

    _this.handleSubmit = (0, _mobx.action)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var userArr;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.formProcessing = true;
              _context.prev = 1;
              _context.next = 4;
              return _this.addAuthProviderId(_this.state.jsonArrayContent);

            case 4:
              userArr = _context.sent;
              _context.next = 7;
              return _this.usersStore.addUsers(userArr);

            case 7:
              (0, _mobx.runInAction)(function () {
                _this.formProcessing = false;
              });
              _context.next = 10;
              return _this.usersStore.load();

            case 10:
              _this["goto"]('/users');

              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              (0, _mobx.runInAction)(function () {
                _this.formProcessing = false;
              });
              (0, _notification.displayError)(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    })));
    _this.handleCancel = (0, _mobx.action)(function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.formProcessing = false;

      _this["goto"]('/users');
    });
    _this.state = {
      files: [],
      fileContent: '',
      jsonArrayContent: []
    };
    (0, _mobx.runInAction)(function () {
      _this.formProcessing = false;
      _this.validationErrors = new Map();
      _this.user = {};
      _this.stores = new _Stores["default"]([_this.authenticationProviderConfigsStore, _this.userRolesStore, _this.usersStore, _this.userStore]);
    });
    return _this;
  }

  _createClass(DragDrop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.swallowError)(this.stores.load());
    }
  }, {
    key: "csvJSON",
    value: function csvJSON(csv) {
      var result = [];
      var lines = csv.split(/\r?\n/);
      var headers = lines[0].split(',');

      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(',');

        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }

        result.push(obj);
      }

      return result;
    }
  }, {
    key: "goto",
    value: function goto(pathname) {
      var location = this.props.location;
      var link = (0, _routing.createLink)({
        location: location,
        pathname: pathname
      });
      this.props.history.push(link);
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var processing = this.formProcessing;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt3"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        color: "blue",
        icon: true,
        disabled: processing,
        className: "ml2",
        onClick: this.handleSubmit
      }, "Submit"), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        disabled: processing,
        onClick: this.handleCancel
      }, "Cancel"));
    }
  }, {
    key: "addAuthProviderId",
    value: function () {
      var _addAuthProviderId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userArr) {
        var _this2 = this;

        var promises;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                promises = userArr.map( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
                    var provider, authenticationProviderId;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            provider = _this2.authenticationProviderConfigsStore.getAuthenticationProviderConfigByIdpName(user.identityProviderName);
                            authenticationProviderId = _lodash["default"].get(provider, 'id');
                            user.authenticationProviderId = authenticationProviderId;
                            return _context2.abrupt("return", user);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                _context3.next = 3;
                return Promise.all(promises);

              case 3:
                userArr = _context3.sent;
                return _context3.abrupt("return", userArr);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addAuthProviderId(_x) {
        return _addAuthProviderId.apply(this, arguments);
      }

      return addAuthProviderId;
    }()
  }, {
    key: "renderTable",
    value: function renderTable() {
      var content;

      if (this.state.fileContent) {
        content = /*#__PURE__*/_react["default"].createElement(_UserTable["default"], {
          userData: this.state.jsonArrayContent
        });
      } else {
        content = '';
      }

      return content;
    }
  }, {
    key: "render",
    value: function render() {
      var stores = this.stores;
      var content = null;

      if (stores.hasError) {
        content = /*#__PURE__*/_react["default"].createElement(_ErrorBox["default"], {
          error: stores.error,
          className: "p0 mb3"
        });
      } else if (stores.loading) {
        content = /*#__PURE__*/_react["default"].createElement(_BasicProgressPlaceholder["default"], null);
      } else if (stores.ready) {
        content = this.renderMain();
      } else {
        content = null;
      }

      return content;
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var files = this.state.files.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: file.name
        }, file.name, " - ", file.size, " bytes");
      });
      var maxSize = 512000;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Container, {
        text: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message, {
        info: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Message.Header, null, "CSV Example"), /*#__PURE__*/_react["default"].createElement("p", null, "email,userRole,identityProviderName"), /*#__PURE__*/_react["default"].createElement("p", null, "user1@datalake.amazonaws.com,researcher,DataLake"), /*#__PURE__*/_react["default"].createElement("p", null, "user2@organization.onmicrosoft.com,researcher,AzureAD")))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        className: "mt4 center"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h4",
        color: "grey"
      }, "Drag and drop files here"), /*#__PURE__*/_react["default"].createElement(_reactDropzone["default"], {
        onDrop: this.onDrop,
        minSize: 0,
        maxSize: maxSize,
        multiple: true
      }, function (_ref3) {
        var getRootProps = _ref3.getRootProps,
            getInputProps = _ref3.getInputProps,
            rejectedFiles = _ref3.rejectedFiles;
        var isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
        return /*#__PURE__*/_react["default"].createElement("div", getRootProps(), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "cloud upload",
          size: "massive",
          color: "grey"
        }), isFileTooLarge && /*#__PURE__*/_react["default"].createElement("div", {
          className: "text-danger mt-2"
        }, "File is too large."));
      })), /*#__PURE__*/_react["default"].createElement("aside", null, /*#__PURE__*/_react["default"].createElement("h4", null, "Files"), /*#__PURE__*/_react["default"].createElement("ul", null, files)), this.renderTable(), this.renderButtons());
    }
  }, {
    key: "userRolesStore",
    get: function get() {
      return this.props.userRolesStore;
    }
  }, {
    key: "usersStore",
    get: function get() {
      return this.props.usersStore;
    }
  }, {
    key: "userStore",
    get: function get() {
      return this.props.userStore;
    }
  }, {
    key: "authenticationProviderConfigsStore",
    get: function get() {
      return this.props.authenticationProviderConfigsStore;
    }
  }]);

  return DragDrop;
}(_react.Component);

(0, _mobx.decorate)(DragDrop, {
  authenticationProviderConfigsStore: _mobx.computed,
  userRolesStore: _mobx.computed,
  usersStore: _mobx.computed,
  userStore: _mobx.computed,
  formProcessing: _mobx.observable
});

var _default = (0, _mobxReact.inject)('userStore', 'usersStore', 'userRolesStore', 'authenticationProviderConfigsStore')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(DragDrop)));

exports["default"] = _default;
//# sourceMappingURL=DragDrop.js.map