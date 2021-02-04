"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var UserPinModal = /*#__PURE__*/function (_React$Component) {
  _inherits(UserPinModal, _React$Component);

  var _super = _createSuper(UserPinModal);

  function UserPinModal(props) {
    var _this;

    _classCallCheck(this, UserPinModal);

    _this = _super.call(this, props);

    _this.handlePinSubmission = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                e.persist(); // Will throw error if PIN is incorrect

                _context.prev = 2;
                _context.next = 5;
                return _this.props.user.unencryptedCreds(e.target.pin.value);

              case 5:
                (0, _mobx.runInAction)(function () {
                  _this.errorMsg = undefined;
                });

                _this.props.hideModal();

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                (0, _mobx.runInAction)(function () {
                  _this.errorMsg = _context.t0.message;
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    (0, _mobx.runInAction)(function () {
      _this.errorMsg = undefined;
    });
    return _this;
  }

  _createClass(UserPinModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        as: _semanticUiReact.Form,
        onSubmit: this.handlePinSubmission,
        open: this.props.show,
        size: "tiny",
        onClose: this.props.hideModal,
        closeOnDimmerClick: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        content: "Enter PIN"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, this.props.message, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Input, {
        label: "PIN",
        name: "pin",
        required: true,
        type: "password",
        placeholder: "Your pin to access your AWS IAM user",
        error: this.errorMsg
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Actions, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        type: "button",
        content: "Close",
        onClick: this.props.hideModal
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        type: "submit",
        color: "blue",
        content: "Save"
      })));
    }
  }]);

  return UserPinModal;
}(_react["default"].Component);

UserPinModal.propTypes = {
  show: _propTypes["default"].bool.isRequired,
  hideModal: _propTypes["default"].func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: _propTypes["default"].object.isRequired,
  message: _propTypes["default"].string
};
UserPinModal.defaultProps = {
  message: ''
};
(0, _mobx.decorate)(UserPinModal, {
  errorMsg: _mobx.observable
});

var _default = (0, _mobxReact.observer)(UserPinModal);

exports["default"] = _default;
//# sourceMappingURL=UserPinModal.js.map