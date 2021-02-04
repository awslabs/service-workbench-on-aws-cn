"use strict";

var _UsersStore = require("../UsersStore");

var _api = require("../../../helpers/api");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('UsersStore', function () {
  var store = null;
  var appContext = {};
  var uid = 'u-exampleUserId';
  var newUser = {
    uid: uid,
    firstName: 'exampleFn',
    lastName: 'exampleLn',
    username: 'example',
    ns: 'example',
    email: 'example@example.com',
    userType: 'Researcher',
    isAdmin: true,
    authenticationProviderId: 'black_mesa',
    // Id of the authentication provider this user is authenticated against (such as internal, cognito auth provider id etc)
    identityProviderName: 'lambda_sector',
    // Name of the identity provider this user belongs to (such as Identity Provider Id in cognito user pool in case of Federation etc)
    status: 'active',
    projectId: ['grav-gun'],
    rev: 0
  };
  var updatedUser = {
    uid: uid,
    firstName: 'exampleFnUpdated',
    lastName: 'unknown',
    username: 'example',
    ns: 'example',
    email: 'example@example.com',
    userType: 'Administrator',
    isAdmin: true
  };
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _UsersStore.registerContextItems)(appContext);

          case 2:
            store = appContext.usersStore;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  describe('addUser', function () {
    it('should add a new user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              _api.getUsers.mockResolvedValueOnce([]);

              _api.addUser.mockResolvedValueOnce(newUser);

              _context2.next = 4;
              return store.load();

            case 4:
              _context2.next = 6;
              return store.addUser(newUser);

            case 6:
              // CHECK
              expect(newUser).toMatchObject(store.list[0]);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should not add user because it already exists', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // BUILD
              _api.getUsers.mockResolvedValueOnce([newUser]);

              _api.addUser.mockResolvedValueOnce(newUser);

              _context3.next = 4;
              return store.load();

            case 4:
              _context3.next = 6;
              return store.addUser(newUser);

            case 6:
              // CHECK
              expect(store.list.length).toBe(1);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('updateUser', function () {
    it('should update the user info', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // BUILD
              _api.getUsers.mockResolvedValueOnce([newUser]);

              _api.updateUser.mockResolvedValueOnce(updatedUser);

              _context4.next = 4;
              return store.load();

            case 4:
              _context4.next = 6;
              return store.updateUser(updatedUser);

            case 6:
              // CHECK
              expect(store.list[0]).toMatchObject(updatedUser);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
});
//# sourceMappingURL=UsersStore.test.js.map