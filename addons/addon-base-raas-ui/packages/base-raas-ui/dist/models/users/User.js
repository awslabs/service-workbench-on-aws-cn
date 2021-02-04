"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrincipalObjFromPrincipalStr = getPrincipalObjFromPrincipalStr;
exports.getPrincipalStrFromPrincipalObj = getPrincipalStrFromPrincipalObj;
exports.User = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _crypto = require("../../helpers/crypto");

var _localStorageKeys = _interopRequireDefault(require("../constants/local-storage-keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = _mobxStateTree.types.model('User', {
  uid: '',
  firstName: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  lastName: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  isAdmin: _mobxStateTree.types.optional(_mobxStateTree.types["boolean"], false),
  username: '',
  ns: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  email: '',
  userType: '',
  authenticationProviderId: '',
  // Id of the authentication provider this user is authenticated against (such as internal, cognito auth provider id etc)
  identityProviderName: _mobxStateTree.types.maybeNull(_mobxStateTree.types.optional(_mobxStateTree.types.string, '')),
  // Name of the identity provider this user belongs to (such as Identity Provider Id in cognito user pool in case of Federation etc)
  status: 'active',
  rev: 0,
  userRole: '',
  projectId: _mobxStateTree.types.array(_mobxStateTree.types.string, []),
  // TODO this property should be named projectIds
  isExternalUser: _mobxStateTree.types.optional(_mobxStateTree.types["boolean"], false),
  // TODO we need to consider have this a derived property
  encryptedCreds: _mobxStateTree.types.maybeNull(_mobxStateTree.types.string),
  applyReason: ''
}).actions(function (self) {
  return {
    runInAction: function runInAction(fn) {
      return fn();
    },
    setEncryptedCreds: function setEncryptedCreds(unencryptedCreds, pin) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var encryptedCreds;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                unencryptedCreds.region = unencryptedCreds.region || 'us-east-1';
                _context.next = 3;
                return (0, _crypto.aesGcmEncrypt)(JSON.stringify(unencryptedCreds), pin);

              case 3:
                encryptedCreds = _context.sent;

                // TODO Should we store the pin in the session?
                _utils.storage.setItem(_localStorageKeys["default"].pinToken, pin);

                self.runInAction(function () {
                  self.encryptedCreds = encryptedCreds;
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    clearEncryptedCreds: function clearEncryptedCreds() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self.runInAction(function () {
                  self.encryptedCreds = undefined;
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setUser: function setUser(rawUser) {
      (0, _utils.removeNulls)(rawUser);
      self.firstName = rawUser.firstName || self.firstName || '';
      self.lastName = rawUser.lastName || self.lastName || '';
      self.isAdmin = rawUser.isAdmin || self.isAdmin;
      self.isExternalUser = rawUser.isExternalUser || self.isExternalUser;
      self.username = rawUser.username || self.username;
      self.ns = rawUser.ns || self.ns;
      self.email = rawUser.email || self.email;
      self.authenticationProviderId = rawUser.authenticationProviderId || self.authenticationProviderId;
      self.identityProviderName = rawUser.identityProviderName || self.identityProviderName;
      self.status = rawUser.status || self.status || 'active';
      self.createdBy = rawUser.createdBy || self.createdBy;
      self.rev = rawUser.rev || self.rev || 0;
      self.userRole = rawUser.userRole || self.userRole;
      self.projectId = rawUser.projectId || self.projectId || [];
      self.encryptedCreds = rawUser.encryptedCreds || self.encryptedCreds;
      self.applyReason = rawUser.applyReason || self.applyReason || ''; // we don't update the other fields because they are being populated by a separate store
    }
  };
}).views(function (self) {
  return {
    get displayName() {
      return "".concat(self.firstName, " ").concat(self.lastName);
    },

    get longDisplayName() {
      if (self.unknown) {
        return "".concat(self.username, "??");
      }

      var fullName = "".concat(self.firstName, " ").concat(self.lastName);

      if (self.email) {
        return "".concat(fullName, " (").concat(self.email, ")");
      }

      return fullName;
    },

    get unknown() {
      return !self.firstName && !self.lastName;
    },

    get isRootUser() {
      return _lodash["default"].toLower(self.userType) === 'root';
    },

    get isActive() {
      return _lodash["default"].toLower(self.status) === 'active';
    },

    get isInternalGuest() {
      return self.userRole === 'internal-guest';
    },

    get isExternalGuest() {
      return self.userRole === 'guest';
    },

    get isInternalResearcher() {
      return self.userRole === 'researcher';
    },

    get isExternalResearcher() {
      return self.userRole === 'external-researcher';
    },

    get isSystem() {
      return self.id === '_system_';
    },

    isSame: function isSame(uid) {
      return self.uid === uid;
    },
    isSamePrincipal: function isSamePrincipal(_ref) {
      var username = _ref.username,
          ns = _ref.ns;
      return self.username === username && self.ns === ns;
    },

    get id() {
      return self.uid;
    },

    get principal() {
      return {
        username: self.username,
        ns: self.ns
      };
    },

    get principalStr() {
      return JSON.stringify(self.principal);
    },

    get hasProjects() {
      return !_lodash["default"].isEmpty(self.projectId);
    },

    get hasCredentials() {
      return self.isExternalResearcher && !_lodash["default"].isEmpty(self.encryptedCreds) && self.encryptedCreds !== 'N/A';
    },

    // TODO - this should not be a view, it should be moved to the actions section
    //      - a better approach is to do unencryptedCreds as a view but then
    //      have the call to store the pin in a separate method that is in the action
    unencryptedCreds: function unencryptedCreds(pin) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var creds;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.t0 = JSON;
                _context3.next = 4;
                return (0, _crypto.aesGcmDecrypt)(self.encryptedCreds, pin);

              case 4:
                _context3.t1 = _context3.sent;
                creds = _context3.t0.parse.call(_context3.t0, _context3.t1);

                // TODO Should we store the pin in the session?
                _utils.storage.setItem(_localStorageKeys["default"].pinToken, pin);

                return _context3.abrupt("return", creds);

              case 10:
                _context3.prev = 10;
                _context3.t2 = _context3["catch"](0);
                throw new Error('Invalid PIN. Please try again');

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },

    // A map of high level actions that the user is allowed to perform.
    // Example:  { 'canCreateStudy': true/false, 'canCreateWorkspace': true/false }
    //
    // Note: actions that require a resource before the permission is determined, are NOT captured in this capability matrix.
    get capabilities() {
      var active = self.isActive;
      var external = self.isExternalUser; // Either external guest or external user

      var externalGuest = self.isExternalGuest;
      var internalGuest = self.isInternalGuest;
      var canCreateStudy = active && !external && !internalGuest;
      var canCreateWorkspace = active && !externalGuest && !internalGuest;
      var canSelectStudy = active && !externalGuest && !internalGuest;
      var canViewDashboard = active && !external && !internalGuest;
      return {
        canCreateStudy: canCreateStudy,
        canCreateWorkspace: canCreateWorkspace,
        canSelectStudy: canSelectStudy,
        canViewDashboard: canViewDashboard
      };
    }

  };
});

exports.User = User;

function getPrincipalObjFromPrincipalStr(principalStr) {
  return JSON.parse(principalStr);
}

function getPrincipalStrFromPrincipalObj(_ref2) {
  var username = _ref2.username,
      ns = _ref2.ns;
  return JSON.stringify({
    username: username,
    ns: ns
  });
}
//# sourceMappingURL=User.js.map