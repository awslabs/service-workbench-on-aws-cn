"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudyPermissionsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

var _StudyPermissions = require("./StudyPermissions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// StudyStore
// ==================================================================
var StudyPermissionsStore = _BaseStore.BaseStore.named('StudyPermissionsStore').props({
  studyId: _mobxStateTree.types.identifier,
  studyPermissions: _mobxStateTree.types.maybe(_StudyPermissions.StudyPermissions),
  tickPeriod: 300 * 1000 // 5 minutes

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function () {
      var _doLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var newPermissions;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getStudyPermissions)(self.studyId);

              case 2:
                newPermissions = _context.sent;

                if (!self.studyPermissions || !_lodash["default"].isEqual(self.studyPermissions, newPermissions)) {
                  self.runInAction(function () {
                    self.studyPermissions = newPermissions;
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function doLoad() {
        return _doLoad.apply(this, arguments);
      }

      return doLoad;
    }(),
    cleanup: function cleanup() {
      superCleanup();
    },
    update: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(selectedUserIds) {
        var updateRequest;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                updateRequest = {
                  usersToAdd: [],
                  usersToRemove: []
                };
                self.studyPermissions.userTypes.forEach(function (type) {
                  var _updateRequest$usersT, _updateRequest$usersT2;

                  var userToRequestFormat = function userToRequestFormat(uid) {
                    return {
                      uid: uid,
                      permissionLevel: type
                    };
                  }; // Set selected users as "usersToAdd" (API is idempotent)


                  (_updateRequest$usersT = updateRequest.usersToAdd).push.apply(_updateRequest$usersT, _toConsumableArray(_lodash["default"].map(selectedUserIds[type], userToRequestFormat))); // Set removed users as "usersToRemove"


                  (_updateRequest$usersT2 = updateRequest.usersToRemove).push.apply(_updateRequest$usersT2, _toConsumableArray(_lodash["default"].differenceWith(self.studyPermissions["".concat(type, "Users")], selectedUserIds[type], _lodash["default"].isEqual).map(userToRequestFormat)));
                }); // Perform update and reload store

                _context2.next = 4;
                return (0, _api.updateStudyPermissions)(self.studyId, updateRequest);

              case 4:
                _context2.next = 6;
                return self.load();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update(_x) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  };
});

exports.StudyPermissionsStore = StudyPermissionsStore;
//# sourceMappingURL=StudyPermissionsStore.js.map