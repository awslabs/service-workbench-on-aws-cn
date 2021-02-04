"use strict";

var _api = require("@aws-ee/base-ui/dist/helpers/api");

var _api2 = require("../../../helpers/api");

var _UsersStore = require("../UsersStore");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('@aws-ee/base-ui/dist/helpers/api');
jest.mock('../../../helpers/api');
describe('UsersStore', function () {
  var store = null;
  var appContext = {};
  var uid = 'u-exampleUserId';
  var exampleUser = {
    uid: uid,
    firstName: 'ExampleFn',
    lastName: 'ExampleLn',
    username: 'example',
    ns: 'example.025'
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
  describe('adding users', function () {
    it('should add a user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              _api.getUsers.mockResolvedValueOnce([]);

              _api.addUser.mockResolvedValueOnce(exampleUser); // store = UsersStore.create({}, {});


              _context2.next = 4;
              return store.load();

            case 4:
              _context2.next = 6;
              return store.addUser(exampleUser);

            case 6:
              // CHECK
              // note we can't match the object because store.list[0] is just get/set methods
              expect(store.list[0].firstName).toEqual(exampleUser.firstName);
              expect(store.list[0].lastName).toEqual(exampleUser.lastName);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should add two users', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var otherUser;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // BUILD
              _api.getUsers.mockResolvedValueOnce([]);

              otherUser = {
                uid: 'u-exampleUserId2',
                firstName: 'ExampleFn2',
                lastName: 'ExampleLn2',
                username: 'example2',
                ns: 'example2.025'
              };

              _api.addUser.mockResolvedValueOnce(exampleUser).mockResolvedValueOnce(otherUser);

              _api2.addUsers.mockImplementation( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return store.addUser(exampleUser);

                      case 2:
                        _context3.next = 4;
                        return store.addUser(otherUser);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }))); // store = UsersStore.create({}, {});


              _context4.next = 6;
              return store.load();

            case 6:
              _context4.next = 8;
              return store.addUsers([exampleUser, otherUser]);

            case 8:
              // CHECK
              expect(store.list[0].firstName).toEqual(exampleUser.firstName);
              expect(store.list[0].lastName).toEqual(exampleUser.lastName);
              expect(store.list[1].firstName).toEqual(otherUser.firstName);
              expect(store.list[1].lastName).toEqual(otherUser.lastName);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('updating users', function () {
    it('should update the user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var updatedExampleUser;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // BUILD
              updatedExampleUser = {
                uid: uid,
                firstName: 'ExampleFnUpdated',
                lastName: 'ExampleLnUpdated',
                username: 'example',
                ns: 'example.025'
              };

              _api.getUsers.mockResolvedValueOnce([exampleUser]);

              _api.updateUser.mockResolvedValueOnce(updatedExampleUser); // store = UsersStore.create({}, {});


              _context5.next = 5;
              return store.load();

            case 5:
              _context5.next = 7;
              return store.updateUser(exampleUser);

            case 7:
              // CHECK
              expect(store.list[0].firstName).toEqual(updatedExampleUser.firstName);
              expect(store.list[0].lastName).toEqual(updatedExampleUser.lastName);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
  describe('deleting users', function () {
    it('should delete the user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // BUILD
              _api.getUsers.mockResolvedValue([exampleUser]);

              _context6.next = 3;
              return store.load();

            case 3:
              _context6.next = 5;
              return store.deleteUser(exampleUser);

            case 5:
              // CHECK
              expect(store.list.length).toEqual(0);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
});
//# sourceMappingURL=UsersStore.test.js.map