"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUserIds = toUserIds;
exports.toLongNames = toLongNames;
exports.toLongName = toLongName;
exports.registerContextItems = registerContextItems;
exports.UsersStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _api = require("../../helpers/api");

var _User = require("./User");

var _BaseStore = require("../BaseStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UsersStore = _BaseStore.BaseStore.named('UsersStore').props({
  users: _mobxStateTree.types.optional(_mobxStateTree.types.map(_User.User), {})
}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var users;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getUsers)();

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = [];

              case 5:
                users = _context.t0;
                self.runInAction(function () {
                  var map = {};
                  users.forEach(function (user) {
                    var uid = user.uid;
                    map[uid] = user;
                  });
                  self.users.replace(map);
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
      self.users.clear();
      superCleanup();
    },
    addUser: function () {
      var _addUser2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
        var addedUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _api.addUser)(user);

              case 2:
                addedUser = _context2.sent;
                self.runInAction(function () {
                  // Added newly created user to users map
                  var addedUserModel = _User.User.create(addedUser);

                  self.users.set(addedUserModel.id, addedUserModel);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addUser(_x) {
        return _addUser2.apply(this, arguments);
      }

      return addUser;
    }(),
    updateUser: function () {
      var _updateUser2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(user) {
        var updatedUser, userModel, previousUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api.updateUser)(user);

              case 2:
                updatedUser = _context3.sent;
                userModel = _User.User.create(updatedUser);
                previousUser = self.users.get(userModel.id);
                (0, _mobxStateTree.applySnapshot)(previousUser, updatedUser);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateUser(_x2) {
        return _updateUser2.apply(this, arguments);
      }

      return updateUser;
    }()
  };
}).views(function (self) {
  return {
    get empty() {
      return self.users.size === 0;
    },

    get hasNonRootAdmins() {
      var nonRootAdmins = _lodash["default"].filter(self.list, function (user) {
        return user.isAdmin && !user.isRootUser;
      });

      return !_lodash["default"].isEmpty(nonRootAdmins);
    },

    get hasNonRootUsers() {
      return !_lodash["default"].isEmpty(self.nonRootUsers);
    },

    get nonRootUsers() {
      return _lodash["default"].filter(self.list, function (user) {
        return !user.isRootUser;
      });
    },

    get list() {
      var result = []; // converting map self.users to result array

      self.users.forEach(function (user) {
        return result.push(user);
      });
      return result;
    },

    asSelectOptions: function asSelectOptions() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$nonClearables = _ref.nonClearables,
          nonClearables = _ref$nonClearables === void 0 ? [] : _ref$nonClearables;

      var result = [];
      self.users.forEach(function (user) {
        return result.push({
          value: user.id,
          label: user.longDisplayName,
          clearableValue: !nonClearables.includes(user.id)
        });
      });
      return result;
    },
    asDropDownOptions: function asDropDownOptions() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$status = _ref2.status,
          status = _ref2$status === void 0 ? 'active' : _ref2$status;

      var result = [];
      self.users.forEach(function (user) {
        if (user.status === status) {
          result.push({
            key: user.id,
            value: user.id,
            text: user.longDisplayName
          });
        }
      });
      return result;
    },
    asUserObject: function asUserObject(userIdentifier) {
      if (userIdentifier) {
        var uid = userIdentifier.uid,
            username = userIdentifier.username,
            ns = userIdentifier.ns;
        var user = self.users.get(uid);
        return user || _User.User.create({
          username: username,
          ns: ns
        });
      }

      return undefined;
    },
    asUserObjects: function asUserObjects() {
      var userIdentifiers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var result = [];
      userIdentifiers.forEach(function (userIdentifier) {
        if (userIdentifier) {
          var user = self.users.get(userIdentifier.uid);

          if (user) {
            result.push(user);
          } else {
            result.push(_User.User.create((0, _mobxStateTree.getSnapshot)(userIdentifier)));
          }
        }
      });
      return result;
    }
  };
});

exports.UsersStore = UsersStore;

function toUserIds(userObjects) {
  return _lodash["default"].map(userObjects, function (user) {
    return user.id;
  });
}

function toLongNames(userObjects) {
  return _lodash["default"].map(userObjects, function (user) {
    return user.longDisplayName;
  });
}

function toLongName(object) {
  if (object) {
    return object.longDisplayName;
  }

  return 'Unknown';
}

function registerContextItems(appContext) {
  appContext.usersStore = UsersStore.create({}, appContext);
}
//# sourceMappingURL=UsersStore.js.map