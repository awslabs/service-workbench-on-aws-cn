"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.UserRolesStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _api = require("../../helpers/api");

var _UserRole = require("./UserRole");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// UserRolesStore
// ==================================================================
var UserRolesStore = _BaseStore.BaseStore.named('UserRolesStore').props({
  userRoles: _mobxStateTree.types.optional(_mobxStateTree.types.map(_UserRole.UserRole), {})
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userRoles;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getUserRoles)();

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = [];

              case 5:
                userRoles = _context.t0;
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.userRoles, userRoles, function (exiting, newItem) {
                    exiting.setUserRole(newItem);
                  });
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cleanup: function cleanup() {
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get list() {
      var result = []; // converting map self.users to result array

      self.userRoles.forEach(function (userRole) {
        return result.push(userRole);
      });
      return result;
    },

    get dropdownOptions() {
      var result = []; // converting map self.users to result array

      self.userRoles.forEach(function (userRole) {
        var role = {};
        role.key = userRole.id;
        role.value = userRole.id;
        role.text = userRole.id;
        result.push(role);
      });
      return result;
    },

    isInternalUser: function isInternalUser(userRoleId) {
      return _lodash["default"].toLower(self.getUserType(userRoleId)) === 'internal';
    },
    isInternalGuest: function isInternalGuest(userRoleId) {
      return _lodash["default"].toLower(userRoleId) === 'internal-guest';
    },
    getUserType: function getUserType(userRoleId) {
      var found = self.userRoles.get(userRoleId);
      return found ? found.userType : '';
    }
  };
});

exports.UserRolesStore = UserRolesStore;

function registerContextItems(appContext) {
  appContext.userRolesStore = UserRolesStore.create({}, appContext);
}
//# sourceMappingURL=UserRolesStore.js.map