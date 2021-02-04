"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _semanticUiReact = require("semantic-ui-react");

var _FileUpload = _interopRequireDefault(require("../files/FileUpload"));

var _api = require("../../helpers/api");

var _xhrUpload = _interopRequireDefault(require("../../helpers/xhr-upload"));

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

// expected props
// - studyId
var UploadStudyFiles = /*#__PURE__*/function (_React$Component) {
  _inherits(UploadStudyFiles, _React$Component);

  var _super = _createSuper(UploadStudyFiles);

  function UploadStudyFiles(props) {
    var _this;

    _classCallCheck(this, UploadStudyFiles);

    _this = _super.call(this, props);
    (0, _mobx.runInAction)(function () {
      _this.modalOpen = false;
    });
    _this.fileUploadHandler = _this.fileUploadHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UploadStudyFiles, [{
    key: "fileUploadHandler",
    value: function () {
      var _fileUploadHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileUpload) {
        var file, uploadRequest, presignResult, errMessage, uploadHandle, _errMessage;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = fileUpload.getFile();

                if (file) {
                  _context.next = 3;
                  break;
                }

                throw new Error('No file');

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return (0, _api.getPresignedStudyUploadRequests)(this.props.studyId, fileUpload.name);

              case 6:
                presignResult = _context.sent;
                uploadRequest = presignResult[fileUpload.name];
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                errMessage = 'Error occurred obtaining presigned request';
                console.error("".concat(errMessage, ":"), _context.t0);
                throw new Error(errMessage);

              case 15:
                if (uploadRequest) {
                  _context.next = 17;
                  break;
                }

                throw new Error('Failed to obtain presigned request');

              case 17:
                // Upload file
                uploadHandle = (0, _xhrUpload["default"])(file, uploadRequest.url, uploadRequest.fields);
                fileUpload.setCancel(uploadHandle.cancel);
                uploadHandle.onProgress(fileUpload.updateProgress);
                _context.prev = 20;
                _context.next = 23;
                return uploadHandle.done;

              case 23:
                _context.next = 30;
                break;

              case 25:
                _context.prev = 25;
                _context.t1 = _context["catch"](20);
                _errMessage = 'Error encountered while uploading file';
                console.error("".concat(_errMessage, ":"), _context.t1);
                throw new Error(_errMessage);

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 10], [20, 25]]);
      }));

      function fileUploadHandler(_x) {
        return _fileUploadHandler.apply(this, arguments);
      }

      return fileUploadHandler;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
        closeIcon: true,
        trigger: this.renderTrigger(),
        open: this.modalOpen,
        onClose: (0, _mobx.action)(function () {
          _this2.modalOpen = false;
        })
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt2 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
        as: "h3",
        icon: true,
        textAlign: "center",
        className: "mt3",
        color: "grey"
      }, "Upload Study Files"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mx3 animated fadeIn"
      }, /*#__PURE__*/_react["default"].createElement(_FileUpload["default"], {
        resourceId: this.props.studyId,
        fileUploadHandler: this.fileUploadHandler
      }))));
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger() {
      var _this3 = this;

      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
        floated: "right",
        color: "blue",
        basic: true,
        onClick: (0, _mobx.action)(function () {
          _this3.modalOpen = true;
        })
      }, "Upload Files");
    }
  }]);

  return UploadStudyFiles;
}(_react["default"].Component);

(0, _mobx.decorate)(UploadStudyFiles, {
  modalOpen: _mobx.observable
});

var _default = (0, _mobxReact.observer)(UploadStudyFiles);

exports["default"] = _default;
//# sourceMappingURL=UploadStudyFiles.js.map