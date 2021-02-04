"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.UsersStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _api = require("@aws-ee/base-ui/dist/helpers/api");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api2 = require("../../helpers/api");

var _User = require("./User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UsersStore = _BaseStore.BaseStore.named('UsersStore').props({
  users: _mobxStateTree.types.optional(_mobxStateTree.types.map(_User.User), {}),
  tickPeriod: 60 * 1000 // 1 minute

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
                  users.forEach(function (user) {
                    var userModel = _User.User.create(user);

                    var previous = self.users.get(userModel.id);

                    if (!previous) {
                      self.users.set(userModel.id, userModel);
                    } else {
                      (0, _mobxStateTree.applySnapshot)(previous, user);
                    }
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
      self.users.clear();
      superCleanup();
    },
    addUser: function () {
      var _addUser2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
        var username, addedUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // if username is not specified then pass email as username
                username = user.username || user.email;
                _context2.next = 3;
                return (0, _api.addUser)(_objectSpread({}, user, {
                  username: username
                }));

              case 3:
                addedUser = _context2.sent;
                self.runInAction(function () {
                  // Added newly created user to users map
                  var addedUserModel = _User.User.create(addedUser);

                  self.users.set(addedUserModel.id, addedUserModel);
                });

              case 5:
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
    addUsers: function () {
      var _addUsers2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(users) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api2.addUsers)(users);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addUsers(_x2) {
        return _addUsers2.apply(this, arguments);
      }

      return addUsers;
    }(),
    updateUser: function () {
      var _updateUser2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(user) {
        var updatedUser, userModel, previousUser;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _api.updateUser)(user);

              case 2:
                updatedUser = _context4.sent;
                userModel = _User.User.create(updatedUser);
                previousUser = self.users.get(userModel.id);
                (0, _mobxStateTree.applySnapshot)(previousUser, updatedUser);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateUser(_x3) {
        return _updateUser2.apply(this, arguments);
      }

      return updateUser;
    }(),
    updateUserApplication: function () {
      var _updateUserApplication2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(user) {
        var res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _api2.updateUserApplication)(user);

              case 2:
                res = _context5.sent;
                return _context5.abrupt("return", res);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateUserApplication(_x4) {
        return _updateUserApplication2.apply(this, arguments);
      }

      return updateUserApplication;
    }(),
    deleteUser: function () {
      var _deleteUser2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(user) {
        var id, deletedUser;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = user && user.id ? user.id : _User.User.create(user).id;
                _context6.next = 3;
                return (0, _api2.deleteUser)(user);

              case 3:
                deletedUser = self.users.get(id);
                self.runInAction(function () {
                  // Detaching here instead of deleting because the ReactTable component in UsersList somehow still fires
                  // "Cell" component rendering after the user is deleted from the map
                  // That results in the following error
                  // "You are trying to read or write to an object that is no longer part of a state tree. (Object type: 'User', Path upon death: "
                  (0, _mobxStateTree.detach)(deletedUser); // self.users.delete(id);
                }); // return deletedUser;

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteUser(_x5) {
        return _deleteUser2.apply(this, arguments);
      }

      return deleteUser;
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
        var user = self.users.get(userIdentifier.uid);
        return user || _User.User.create({
          username: userIdentifier.username,
          ns: userIdentifier.ns
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
          } // this could happen in the employee is no longer active or with the company

        }
      });
      return result;
    }
  };
});

exports.UsersStore = UsersStore;

function registerContextItems(appContext) {
  appContext.usersStore = UsersStore.create({}, appContext);
}
//# sourceMappingURL=UsersStore.js.map