"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudyFilesStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// StudyFile
// ==================================================================
var StudyFile = _mobxStateTree.types.model('StudyFile', {
  filename: _mobxStateTree.types.string,
  size: _mobxStateTree.types.integer,
  lastModified: _mobxStateTree.types.Date
}); // ==================================================================
// StudyFiles
// ==================================================================


var StudyFilesStore = _BaseStore.BaseStore.named('StudyFilesStore').props({
  studyId: '',
  files: _mobxStateTree.types.array(StudyFile),
  tickPeriod: 5 * 1000 // 5 seconds

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var files, comparator, removed, added;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.listStudyFiles)(self.studyId);

              case 2:
                files = _context.sent;

                // Determine which files were added or removed
                comparator = function comparator(fileA, fileB) {
                  return fileA.filename === fileB.filename;
                };

                removed = _lodash["default"].differenceWith(self.files, files, comparator);
                added = _lodash["default"].differenceWith(files, self.files, comparator); // Only update store when needed to avoid unnecessary re-rendering

                if (removed.length !== 0 || added.length !== 0) {
                  // Sort files by name and cast lastModified as Date()
                  files = files.sort(function (fileA, fileB) {
                    return fileA.filename.localeCompare(fileB.filename);
                  }).map(function (file) {
                    return _objectSpread({}, file, {
                      lastModified: new Date(file.lastModified)
                    });
                  }); // Update store

                  self.runInAction(function () {
                    self.files.replace(files);
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cleanup: function cleanup() {
      self.files.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.files.length === 0;
    }

  };
}); // Note: Do NOT register this in the global context, if you want to gain access to an instance
//       use study.getFilesStore()
// eslint-disable-line import/prefer-default-export


exports.StudyFilesStore = StudyFilesStore;
//# sourceMappingURL=StudyFilesStore.js.map