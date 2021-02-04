"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _notification = require("@aws-ee/base-ui/dist/helpers/notification");

var _FileDropZone = _interopRequireDefault(require("./FileDropZone"));

var _FileUploadTable = _interopRequireDefault(require("./FileUploadTable"));

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

var FileUpload = (0, _mobxReact.observer)(function (_ref) {
  var _ref$files = _ref.files,
      files = _ref$files === void 0 ? [] : _ref$files,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'PENDING' : _ref$state,
      onCancelSelectFiles = _ref.onCancelSelectFiles,
      onCancelUpload = _ref.onCancelUpload,
      onClickStartUpload = _ref.onClickStartUpload,
      onClickUploadMore = _ref.onClickUploadMore,
      onSelectFiles = _ref.onSelectFiles,
      onClickRemoveFile = _ref.onClickRemoveFile,
      onClickCancelFile = _ref.onClickCancelFile;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, {
    vertical: true
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Header, {
    as: "h3"
  }, "Upload Files"), /*#__PURE__*/_react["default"].createElement(_FileDropZone["default"], {
    state: state,
    onSelectFiles: onSelectFiles
  }), files.length > 0 && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Segment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_FileUploadTable["default"], {
    files: files,
    state: state,
    onClickRemoveFile: onClickRemoveFile,
    onClickCancelFile: onClickCancelFile
  }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, null, state === 'PENDING' ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
    floated: "right",
    basic: true,
    color: "blue",
    onClick: onClickStartUpload
  }, "Upload Files") : state === 'UPLOADING' ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
    floated: "right",
    basic: true,
    color: "blue",
    loading: true,
    disabled: true
  }, "Uploading") : state === 'COMPLETE' ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
    floated: "right",
    basic: true,
    color: "blue",
    onClick: onClickUploadMore
  }, "Upload More Files") : null, state === 'PENDING' ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
    floated: "right",
    basic: true,
    onClick: onCancelSelectFiles
  }, "Cancel") : state === 'UPLOADING' ? /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Button, {
    floated: "right",
    basic: true,
    onClick: onCancelUpload
  }, "Cancel") : null)))));
});
FileUpload.propTypes = {
  files: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    size: _propTypes["default"].number.isRequired,
    status: _propTypes["default"].oneOf(['PENDING', 'UPLOADING', 'COMPLETE', 'FAILED']).isRequired,
    uploaded: _propTypes["default"].number,
    error: _propTypes["default"].string
  })),
  state: _propTypes["default"].oneOf(['PENDING', 'UPLOADING', 'COMPLETE']).isRequired,
  onCancelSelectFiles: _propTypes["default"].func,
  onCancelUpload: _propTypes["default"].func,
  onClickStartUpload: _propTypes["default"].func,
  onClickUploadMore: _propTypes["default"].func,
  onSelectFiles: _propTypes["default"].func,
  onClickRemoveFile: _propTypes["default"].func,
  onClickCancelFile: _propTypes["default"].func
};

var ConnectedFileUpload = /*#__PURE__*/function (_React$Component) {
  _inherits(ConnectedFileUpload, _React$Component);

  var _super = _createSuper(ConnectedFileUpload);

  function ConnectedFileUpload(props) {
    var _this;

    _classCallCheck(this, ConnectedFileUpload);

    _this = _super.call(this, props);

    _this.handleResetFileUploadGroup = function () {
      (0, _mobx.runInAction)(function () {
        _this.props.fileUploadsStore.resetFileUploadGroup(_this.props.resourceId);

        _this.fileUploadGroup = _this.props.fileUploadsStore.getFileUploadGroup(_this.props.resourceId);
      });
    };

    _this.handleCancel = function () {
      _this.fileUploadGroup.cancel();
    };

    _this.handleStart = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var group, success, errors;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              group = _this.fileUploadGroup;
              _context.prev = 1;
              _context.next = 4;
              return group.start(_this.props.fileUploadHandler);

            case 4:
              success = 0;
              errors = 0;
              group.fileUploadObjects.forEach(function (fileUpload) {
                // eslint-disable-next-line default-case
                switch (fileUpload.status) {
                  case 'COMPLETE':
                    success++;
                    break;

                  case 'FAILED':
                    if (fileUpload.error !== 'Cancelled') {
                      errors++;
                    }

                    break;
                }
              });

              if (errors > 0 && success > 0) {
                (0, _notification.displayWarning)("File uploads completed with ".concat(errors, " errors"));
              } else if (errors > 0) {
                (0, _notification.displayError)("File uploads failed");
              } else if (success > 0) {
                (0, _notification.displaySuccess)("File uploads completed successfully!");
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              (0, _notification.displayError)("File uploads failed: ".concat(_context.t0));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    _this.handleCancelFileUpload = function (id) {
      var fileUpload = _this.fileUploadGroup.getFileUpload(id);

      if (fileUpload) {
        fileUpload.doCancel();
      }
    };

    _this.handleRemoveFileUpload = function (id) {
      _this.fileUploadGroup.remove(id);
    };

    _this.handleSelectFiles = function (files) {
      var group = _this.fileUploadGroup;
      files.forEach(function (file) {
        group.add({
          file: file
        });
      });
    };

    (0, _mobx.runInAction)(function () {
      _this.fileUploadGroup = props.fileUploadsStore.getFileUploadGroup(_this.props.resourceId);
    });
    return _this;
  }

  _createClass(ConnectedFileUpload, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.resourceId !== this.props.resourceId) {
        (0, _mobx.runInAction)(function () {
          _this2.fileUploadGroup = _this2.props.fileUploadsStore.getFileUploadGroup(_this2.props.resourceId);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(FileUpload, {
        files: this.fileUploadGroup.fileUploadObjects,
        state: this.fileUploadGroup.state,
        onCancelSelectFiles: this.handleResetFileUploadGroup,
        onCancelUpload: this.handleCancel,
        onClickStartUpload: this.handleStart,
        onClickUploadMore: this.handleResetFileUploadGroup,
        onSelectFiles: this.handleSelectFiles,
        onClickRemoveFile: this.handleRemoveFileUpload,
        onClickCancelFile: this.handleCancelFileUpload
      });
    }
  }]);

  return ConnectedFileUpload;
}(_react["default"].Component);

ConnectedFileUpload.propTypes = {
  resourceId: _propTypes["default"].string.isRequired,
  fileUploadHandler: _propTypes["default"].func.isRequired,
  fileUploadsStore: _mobxReact.PropTypes.observableObject.isRequired
};
(0, _mobx.decorate)(ConnectedFileUpload, {
  fileUploadGroup: _mobx.observable
});

var _default = (0, _mobxReact.inject)('fileUploadsStore')((0, _mobxReact.observer)(ConnectedFileUpload));

exports["default"] = _default;
//# sourceMappingURL=FileUpload.js.map