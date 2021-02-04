"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FileUpload = _mobxStateTree.types.model('FileUpload', {
  id: _mobxStateTree.types.identifier,
  status: _mobxStateTree.types.union(_mobxStateTree.types.literal('PENDING'), _mobxStateTree.types.literal('UPLOADING'), _mobxStateTree.types.literal('COMPLETE'), _mobxStateTree.types.literal('FAILED')),
  uploaded: _mobxStateTree.types.maybeNull(_mobxStateTree.types.number),
  error: _mobxStateTree.types.maybeNull(_mobxStateTree.types.string)
})["volatile"](function () {
  return {
    file: undefined,
    cancel: undefined
  };
}).views(function (self) {
  return {
    get size() {
      return self.file ? self.file.size : 0;
    },

    get name() {
      return self.file ? self.file.name : '';
    },

    getFile: function getFile() {
      return self.file;
    }
  };
}).actions(function (self) {
  return {
    updateProgress: function updateProgress(uploadedBytes) {
      self.uploaded = uploadedBytes;
    },
    updateStatusToUploading: function updateStatusToUploading() {
      self.status = 'UPLOADING';
    },
    updateStatusToComplete: function updateStatusToComplete() {
      self.status = 'COMPLETE';
    },
    updateStatusToFailed: function updateStatusToFailed(error) {
      self.status = 'FAILED';
      self.error = error;
    },
    setFile: function setFile(file) {
      self.file = file;
    },
    setCancel: function setCancel(cancel) {
      self.cancel = cancel;
    },
    doCancel: function doCancel() {
      if (self.cancel) {
        self.cancel();
        self.cancel = undefined;
      }
    }
  };
});

var FileUploadGroup = _mobxStateTree.types.model('FileUploadGroup', {
  resourceId: _mobxStateTree.types.identifier,
  fileUploads: _mobxStateTree.types.map(FileUpload),
  state: _mobxStateTree.types.union(_mobxStateTree.types.literal('PENDING'), _mobxStateTree.types.literal('UPLOADING'), _mobxStateTree.types.literal('COMPLETE'))
}).views(function (self) {
  return {
    get fileUploadObjects() {
      return Array.from(self.fileUploads.values());
    },

    getFileUpload: function getFileUpload(fileUploadId) {
      return self.fileUploads.get(fileUploadId);
    }
  };
}).actions(function (self) {
  return {
    start: function start(fileUploadHandler) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var fileUploads;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(self.state !== 'PENDING')) {
                  _context2.next = 2;
                  break;
                }

                throw new Error("Cannot transition state from ".concat(self.state, " -> UPLOADING"));

              case 2:
                self.setStateToUploading();
                fileUploads = Array.from(self.fileUploads.values()).filter(function (fileUpload) {
                  return fileUpload.status === 'PENDING';
                });
                _context2.next = 6;
                return Promise.all(fileUploads.map( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fileUpload) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            fileUpload.updateStatusToUploading();
                            _context.prev = 1;
                            _context.next = 4;
                            return fileUploadHandler(fileUpload);

                          case 4:
                            _context.next = 9;
                            break;

                          case 6:
                            _context.prev = 6;
                            _context.t0 = _context["catch"](1);
                            fileUpload.updateStatusToFailed(_context.t0.message);

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[1, 6]]);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 6:
                self.setStateToComplete();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    cancel: function cancel() {
      self.fileUploads.forEach(function (fileUpload) {
        fileUpload.doCancel();
      });
    },
    remove: function remove(id) {
      self.fileUploads["delete"](id);
    },
    add: function add(_ref2) {
      var file = _ref2.file;
      var model = FileUpload.create({
        id: (0, _v["default"])(),
        status: 'PENDING'
      });
      model.setFile(file);
      self.fileUploads.put(model);
    },
    setStateToComplete: function setStateToComplete() {
      self.state = 'COMPLETE';
    },
    setStateToUploading: function setStateToUploading() {
      self.state = 'UPLOADING';
    }
  };
});

var _default = FileUploadGroup;
exports["default"] = _default;
//# sourceMappingURL=FileUploadGroup.js.map