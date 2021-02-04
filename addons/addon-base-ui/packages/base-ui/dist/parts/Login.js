"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("../helpers/notification");

var _settings = require("../helpers/settings");

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

// From https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/app/Layouts/LoginLayout.js
// expected props
// - authentication (via injection)
// - authenticationProviderPublicConfigsStore (via injection)
// - assets (via injection)
var Login = /*#__PURE__*/function (_React$Component) {
  _inherits(Login, _React$Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, props);

    _this.handleChange = function (name) {
      return (0, _mobx.action)(function (event) {
        _this[name] = event.target.value;
        if (name === 'username') _this.usernameError = '';
        if (name === 'password') _this.passwordError = '';
      });
    };

    _this.handleAuthenticationProviderChange = (0, _mobx.action)(function (_event, _ref) {
      var value = _ref.value;

      _this.props.authentication.setSelectedAuthenticationProviderId(value);
    });
    _this.handleLogin = (0, _mobx.action)(function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.authenticationProviderError = '';
      _this.usernameError = '';
      _this.passwordError = '';
      var username = _lodash["default"].trim(_this.username) || '';
      var password = _this.password || '';
      var selectedAuthenticationProviderId = _this.props.authentication.selectedAuthenticationProviderId || '';
      var error = false;

      if (_lodash["default"].isEmpty(selectedAuthenticationProviderId)) {
        _this.authenticationProviderError = 'please select authentication provider';
        error = true;
      }

      var collectUserNamePassword = _this.props.authentication.shouldCollectUserNamePassword; // Validate username and password fields only if the selected authentication provider requires
      // username and password to be submitted.
      // For example, in case of SAML we do not collect username/password and in that case,
      // we won't validate username/password. It will be the responsibility of the Identity Provider
      // Do we need to collect username/password or not is specified by the authentication provider configuration
      // via "credentialHandlingType" field.

      if (collectUserNamePassword) {
        if (_lodash["default"].isEmpty(username)) {
          _this.usernameError = 'username is required';
          error = true;
        }

        if (!_lodash["default"].isEmpty(username) && username.length < 3) {
          _this.usernameError = 'username must be at least 3 characters long';
          error = true;
        }

        if (_lodash["default"].isEmpty(password)) {
          _this.passwordError = 'password is required';
          error = true;
        }

        if (!_lodash["default"].isEmpty(password) && password.length < 4) {
          _this.passwordError = 'password must be at least 4 characters long';
          error = true;
        }
      }

      if (error) return;
      var authentication = _this.props.authentication;
      _this.loading = true;
      Promise.resolve().then(function () {
        return authentication.login({
          username: username,
          password: password
        });
      })["catch"](function (err) {
        return (0, _notification.displayError)(err);
      })["finally"]((0, _mobx.action)(function () {
        _this.loading = false;
      }));
    });
    (0, _mobx.runInAction)(function () {
      _this.username = '';
      _this.password = '';
      _this.loading = false;
      _this.authenticationProviderError = '';
      _this.usernameError = '';
      _this.passwordError = ''; // When the login page is shown, we default to the auth provider id of the first provider
      // in the this.authProviderOptions list

      var authentication = _this.props.authentication;
      authentication.setSelectedAuthenticationProviderId(_lodash["default"].get(_this.authProviderOptions, '[0].key', ''));
    });
    return _this;
  }

  _createClass(Login, [{
    key: "getStore",
    value: function getStore() {
      return this.props.authenticationProviderPublicConfigsStore;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var error = !!(this.usernameError || this.passwordError || this.authenticationProviderError);
      var authenticationProviderOptions = this.authProviderOptions;
      var selectedAuthenticationProviderId = this.props.authentication.selectedAuthenticationProviderId;

      var renderAuthenticationProviders = function renderAuthenticationProviders() {
        // Display authenticationProviderOptions only if there are more than one to choose from
        // if there is only one authentication provider available then use that
        if (authenticationProviderOptions && authenticationProviderOptions.length > 1) {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
            error: !!_this2.usernameError,
            required: true
          }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Select, {
            placeholder: "Select Authentication Provider",
            options: authenticationProviderOptions,
            defaultValue: selectedAuthenticationProviderId,
            onChange: _this2.handleAuthenticationProviderChange
          }), _this2.authenticationProviderError && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
            basic: true,
            color: "red",
            pointing: true,
            className: "float-left mb2"
          }, _this2.authenticationProviderError));
        }

        return '';
      };

      var collectUserNamePassword = this.props.authentication.shouldCollectUserNamePassword;

      var renderBrandingLogo = /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Image, {
        centered: true,
        src: this.props.assets.images.loginImage
      });

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "login-form animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement("style", null, "\n        body > div#root,\n        body > div#root > div,\n        body > div#root > div > div.login-form {\n          height: 100%;\n        }\n      "), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        textAlign: "center",
        style: {
          height: '100%'
        },
        verticalAlign: "middle"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        style: {
          maxWidth: 450
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form, {
        error: error,
        size: "large",
        loading: this.loading,
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
        stacked: true
      }, renderBrandingLogo, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        textAlign: "center"
      }, _settings.branding.login.title, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header.Subheader, null, _settings.branding.login.subtitle)), renderAuthenticationProviders(), collectUserNamePassword && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
        error: !!this.usernameError,
        required: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
        fluid: true,
        icon: "user",
        iconPosition: "left",
        placeholder: "Username",
        "data-testid": "username",
        value: this.username,
        onChange: this.handleChange('username')
      }), this.usernameError && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        basic: true,
        color: "red",
        pointing: true,
        className: "float-left mb2"
      }, this.usernameError)), collectUserNamePassword && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
        error: !!this.passwordError,
        required: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, {
        fluid: true,
        icon: "lock",
        iconPosition: "left",
        placeholder: "Password",
        "data-testid": "password",
        value: this.password,
        type: "password",
        onChange: this.handleChange('password')
      }), this.passwordError && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Label, {
        basic: true,
        color: "red",
        pointing: true,
        className: "float-left mb2"
      }, this.passwordError)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        "data-testid": "login",
        type: "submit",
        color: "blue",
        fluid: true,
        basic: true,
        size: "large",
        className: "mb2",
        onClick: this.handleLogin
      }, "Login"))))));
    }
  }, {
    key: "authProviderOptions",
    get: function get() {
      var params = new URL(document.location).searchParams;

      var showInternal = _lodash["default"].isString(params.get('internal'));

      var store = this.getStore();
      var options = store.authenticationProviderOptions;

      var size = _lodash["default"].size(options); // If we have one or zero options, we don't want to filter them, otherwise
      // we might be filtering the only option available.


      if (size <= 1) return options;
      return _lodash["default"].filter(store.authenticationProviderOptions, function (config) {
        if (config.key === 'internal' && showInternal) return true;
        return config.key !== 'internal';
      });
    }
  }]);

  return Login;
}(_react["default"].Component); // see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da


(0, _mobx.decorate)(Login, {
  username: _mobx.observable,
  password: _mobx.observable,
  loading: _mobx.observable,
  authenticationProviderError: _mobx.observable,
  usernameError: _mobx.observable,
  passwordError: _mobx.observable,
  authProviderOptions: _mobx.computed
});

var _default = (0, _mobxReact.inject)('authentication', 'authenticationProviderPublicConfigsStore', 'assets')((0, _reactRouterDom.withRouter)((0, _mobxReact.observer)(Login)));

exports["default"] = _default;
//# sourceMappingURL=Login.js.map