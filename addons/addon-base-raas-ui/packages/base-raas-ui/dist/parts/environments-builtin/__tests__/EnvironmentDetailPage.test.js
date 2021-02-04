"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _EnvironmentDetailPage = _interopRequireDefault(require("../EnvironmentDetailPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('crypto'),
    generateKeyPairSync = _require.generateKeyPairSync,
    publicEncrypt = _require.publicEncrypt,
    constants = _require.constants;

jest.mock('@aws-ee/base-ui/dist/helpers/notification');

var displayErrorMock = require('@aws-ee/base-ui/dist/helpers/notification');

jest.mock('@aws-ee/base-ui/dist/helpers/routing');

var gotoMock = require('@aws-ee/base-ui/dist/helpers/routing');

var environmentInstance = {
  name: 'name',
  id: 'id',
  createdAt: '01-01-1900',
  createdBy: 'anonymous',
  status: 'active',
  projectId: 'projId',
  isExternal: false,
  getWindowsPassword: jest.fn()
};
var environmentStore = {
  load: jest.fn(),
  startHeartbeat: jest.fn(),
  ready: true,
  loading: true,
  environment: environmentInstance
};
var environmentsStore = {
  getEnvironmentStore: jest.fn(function () {
    return environmentStore;
  }),
  updateEnvironment: jest.fn()
};
var userStore = {};
var match = {
  params: {
    instanceId: 'placeholder'
  }
};
var event = {
  preventDefault: jest.fn(),
  stopPropagation: jest.fn()
};
describe('EnvironmentDetailPage', function () {
  var wrapper = null;
  var container = null;
  beforeEach(function () {
    // Render component
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_EnvironmentDetailPage["default"].WrappedComponent, {
      environmentsStore: environmentsStore,
      userStore: userStore,
      match: match
    })); // get instance of component

    container = wrapper.instance(); // mock display error function

    displayErrorMock.displayError = jest.fn(function (x) {
      return x;
    }); // Mock goto function

    gotoMock.gotoFn = jest.fn(function () {
      return jest.fn();
    });
  });
  it('should accept and decrypt the user password', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _generateKeyPairSync, privateKey, publicKey, realPassword, passData;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // BUILD
            _generateKeyPairSync = generateKeyPairSync('rsa', {
              modulusLength: 2048,
              publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
              },
              privateKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
              }
            }), privateKey = _generateKeyPairSync.privateKey, publicKey = _generateKeyPairSync.publicKey;
            realPassword = 'APASSWORD';
            passData = [{
              privateKey: privateKey
            }, {
              passwordData: publicEncrypt({
                key: publicKey,
                padding: constants.RSA_PKCS1_PADDING
              }, Buffer.from(realPassword, 'utf8'))
            }];
            environmentInstance.getWindowsPassword.mockImplementationOnce(function () {
              return passData;
            }); // OPERATE

            _context.next = 6;
            return container.handleWindowsPasswordRequest(event);

          case 6:
            // CHECK
            expect(container.windowsPassword).not.toEqual(passData.passwordData);
            expect(container.windowsPassword).toEqual(realPassword);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should update the sharedWithUsers field of the environment', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return container.handleSubmitSharedWithUsersClick(event);

          case 2:
            // CHECK
            expect(environmentsStore.updateEnvironment).toHaveBeenCalledWith(expect.objectContaining({
              id: environmentInstance.id
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=EnvironmentDetailPage.test.js.map