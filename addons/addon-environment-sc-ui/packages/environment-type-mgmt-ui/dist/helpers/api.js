"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllEnvTypeCandidatesNotImported = getAllEnvTypeCandidatesNotImported;
exports.getLatestEnvTypeCandidatesNotImported = getLatestEnvTypeCandidatesNotImported;
exports.getAllEnvTypes = getAllEnvTypes;
exports.getApprovedEnvTypes = getApprovedEnvTypes;
exports.getNotApprovedEnvTypes = getNotApprovedEnvTypes;
exports.getEnvType = getEnvType;
exports.createEnvType = createEnvType;
exports.updateEnvType = updateEnvType;
exports.deleteEnvType = deleteEnvType;
exports.approveEnvType = approveEnvType;
exports.revokeEnvType = revokeEnvType;
exports.getEnvTypeConfigs = getEnvTypeConfigs;
exports.getAllEnvTypeConfigs = getAllEnvTypeConfigs;
exports.createEnvTypeConfig = createEnvTypeConfig;
exports.updateEnvTypeConfig = updateEnvTypeConfig;
exports.deleteEnvTypeConfig = deleteEnvTypeConfig;
exports.getEnvTypeConfigVars = getEnvTypeConfigVars;

var _lodash = _interopRequireDefault(require("lodash"));

var _api = require("@aws-ee/base-ui/dist/helpers/api");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAllEnvTypeCandidatesNotImported() {
  return _getAllEnvTypeCandidatesNotImported.apply(this, arguments);
}

function _getAllEnvTypeCandidatesNotImported() {
  _getAllEnvTypeCandidatesNotImported = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _utils.removeNulls;
            _context.next = 3;
            return (0, _api.httpApiGet)('api/workspace-type-candidates', {
              params: {
                status: 'not-imported',
                version: '*'
              }
            });

          case 3:
            _context.t1 = _context.sent;
            return _context.abrupt("return", (0, _context.t0)(_context.t1));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllEnvTypeCandidatesNotImported.apply(this, arguments);
}

function getLatestEnvTypeCandidatesNotImported() {
  return _getLatestEnvTypeCandidatesNotImported.apply(this, arguments);
}

function _getLatestEnvTypeCandidatesNotImported() {
  _getLatestEnvTypeCandidatesNotImported = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = _utils.removeNulls;
            _context2.next = 3;
            return (0, _api.httpApiGet)('api/workspace-type-candidates', {
              params: {
                status: 'not-imported'
              }
            });

          case 3:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", (0, _context2.t0)(_context2.t1));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLatestEnvTypeCandidatesNotImported.apply(this, arguments);
}

function getEnvType(_x) {
  return _getEnvType.apply(this, arguments);
}

function _getEnvType() {
  _getEnvType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(envTypeId) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = _utils.removeNulls;
            _context3.next = 3;
            return (0, _api.httpApiGet)("api/workspace-types/".concat(envTypeId));

          case 3:
            _context3.t1 = _context3.sent;
            return _context3.abrupt("return", (0, _context3.t0)(_context3.t1));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getEnvType.apply(this, arguments);
}

function getAllEnvTypes() {
  return _getAllEnvTypes.apply(this, arguments);
}

function _getAllEnvTypes() {
  _getAllEnvTypes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = _utils.removeNulls;
            _context4.next = 3;
            return (0, _api.httpApiGet)('api/workspace-types', {
              params: {
                status: '*'
              }
            });

          case 3:
            _context4.t1 = _context4.sent;
            return _context4.abrupt("return", (0, _context4.t0)(_context4.t1));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getAllEnvTypes.apply(this, arguments);
}

function getApprovedEnvTypes() {
  return _getApprovedEnvTypes.apply(this, arguments);
}

function _getApprovedEnvTypes() {
  _getApprovedEnvTypes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.t0 = _utils.removeNulls;
            _context5.next = 3;
            return (0, _api.httpApiGet)('api/workspace-types', {
              params: {
                status: 'approved'
              }
            });

          case 3:
            _context5.t1 = _context5.sent;
            return _context5.abrupt("return", (0, _context5.t0)(_context5.t1));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getApprovedEnvTypes.apply(this, arguments);
}

function getNotApprovedEnvTypes() {
  return _getNotApprovedEnvTypes.apply(this, arguments);
}

function _getNotApprovedEnvTypes() {
  _getNotApprovedEnvTypes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.t0 = _utils.removeNulls;
            _context6.next = 3;
            return (0, _api.httpApiGet)('api/workspace-types', {
              params: {
                status: 'not-approved'
              }
            });

          case 3:
            _context6.t1 = _context6.sent;
            return _context6.abrupt("return", (0, _context6.t0)(_context6.t1));

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getNotApprovedEnvTypes.apply(this, arguments);
}

function createEnvType(_x2) {
  return _createEnvType.apply(this, arguments);
}

function _createEnvType() {
  _createEnvType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(envType) {
    var data;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            // Create request body for the given envType that needs to be created
            data = {
              id: envType.id,
              name: envType.name,
              desc: envType.desc,
              status: envType.status,
              product: {
                productId: envType.product.productId
              },
              provisioningArtifact: {
                id: envType.provisioningArtifact.id
              }
            };
            _context7.t0 = _utils.removeNulls;
            _context7.next = 4;
            return (0, _api.httpApiPost)("api/workspace-types", {
              data: data
            });

          case 4:
            _context7.t1 = _context7.sent;
            return _context7.abrupt("return", (0, _context7.t0)(_context7.t1));

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _createEnvType.apply(this, arguments);
}

function updateEnvType(_x3) {
  return _updateEnvType.apply(this, arguments);
}

function _updateEnvType() {
  _updateEnvType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(envType) {
    var data;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            // Create request body for the given envType that needs to be updated
            data = {
              rev: envType.rev,
              name: envType.name,
              desc: envType.desc,
              status: envType.status
            };
            _context8.t0 = _utils.removeNulls;
            _context8.next = 4;
            return (0, _api.httpApiPut)("api/workspace-types/".concat(encodeURIComponent(envType.id)), {
              data: data
            });

          case 4:
            _context8.t1 = _context8.sent;
            return _context8.abrupt("return", (0, _context8.t0)(_context8.t1));

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _updateEnvType.apply(this, arguments);
}

function deleteEnvType(_x4) {
  return _deleteEnvType.apply(this, arguments);
}

function _deleteEnvType() {
  _deleteEnvType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(id) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.t0 = _utils.removeNulls;
            _context9.next = 3;
            return (0, _api.httpApiDelete)("api/workspace-types/".concat(encodeURIComponent(id)));

          case 3:
            _context9.t1 = _context9.sent;
            return _context9.abrupt("return", (0, _context9.t0)(_context9.t1));

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _deleteEnvType.apply(this, arguments);
}

function approveEnvType(_x5, _x6) {
  return _approveEnvType.apply(this, arguments);
}

function _approveEnvType() {
  _approveEnvType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(id, rev) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.t0 = _utils.removeNulls;
            _context10.next = 3;
            return (0, _api.httpApiPut)("api/workspace-types/".concat(encodeURIComponent(id), "/approve"), {
              data: {
                rev: rev
              }
            });

          case 3:
            _context10.t1 = _context10.sent;
            return _context10.abrupt("return", (0, _context10.t0)(_context10.t1));

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _approveEnvType.apply(this, arguments);
}

function revokeEnvType(_x7, _x8) {
  return _revokeEnvType.apply(this, arguments);
}

function _revokeEnvType() {
  _revokeEnvType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(id, rev) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.t0 = _utils.removeNulls;
            _context11.next = 3;
            return (0, _api.httpApiPut)("api/workspace-types/".concat(encodeURIComponent(id), "/revoke"), {
              data: {
                rev: rev
              }
            });

          case 3:
            _context11.t1 = _context11.sent;
            return _context11.abrupt("return", (0, _context11.t0)(_context11.t1));

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _revokeEnvType.apply(this, arguments);
}

function getEnvTypeConfigs(_x9) {
  return _getEnvTypeConfigs.apply(this, arguments);
}

function _getEnvTypeConfigs() {
  _getEnvTypeConfigs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(envTypeId) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.t0 = _utils.removeNulls;
            _context12.next = 3;
            return (0, _api.httpApiGet)("api/workspace-types/".concat(encodeURIComponent(envTypeId), "/configurations"));

          case 3:
            _context12.t1 = _context12.sent;
            return _context12.abrupt("return", (0, _context12.t0)(_context12.t1));

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _getEnvTypeConfigs.apply(this, arguments);
}

function getAllEnvTypeConfigs(_x10) {
  return _getAllEnvTypeConfigs.apply(this, arguments);
}

function _getAllEnvTypeConfigs() {
  _getAllEnvTypeConfigs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(envTypeId) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.t0 = _utils.removeNulls;
            _context13.next = 3;
            return (0, _api.httpApiGet)("api/workspace-types/".concat(encodeURIComponent(envTypeId), "/configurations?include=all"));

          case 3:
            _context13.t1 = _context13.sent;
            return _context13.abrupt("return", (0, _context13.t0)(_context13.t1));

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _getAllEnvTypeConfigs.apply(this, arguments);
}

function createEnvTypeConfig(_x11, _x12) {
  return _createEnvTypeConfig.apply(this, arguments);
}

function _createEnvTypeConfig() {
  _createEnvTypeConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(envTypeId, envTypeConfig) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.t0 = _utils.removeNulls;
            _context14.next = 3;
            return (0, _api.httpApiPost)("api/workspace-types/".concat(encodeURIComponent(envTypeId), "/configurations"), {
              data: _lodash["default"].omit(envTypeConfig, ['createdAt', 'createdBy', 'updatedAt', 'updatedBy', 'allowedToUse'])
            });

          case 3:
            _context14.t1 = _context14.sent;
            return _context14.abrupt("return", (0, _context14.t0)(_context14.t1));

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _createEnvTypeConfig.apply(this, arguments);
}

function updateEnvTypeConfig(_x13, _x14) {
  return _updateEnvTypeConfig.apply(this, arguments);
}

function _updateEnvTypeConfig() {
  _updateEnvTypeConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(envTypeId, envTypeConfig) {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.t0 = _utils.removeNulls;
            _context15.next = 3;
            return (0, _api.httpApiPut)("api/workspace-types/".concat(encodeURIComponent(envTypeId), "/configurations/").concat(decodeURIComponent(envTypeConfig.id)), {
              data: _lodash["default"].omit(envTypeConfig, ['createdAt', 'createdBy', 'updatedAt', 'updatedBy', 'allowedToUse'])
            });

          case 3:
            _context15.t1 = _context15.sent;
            return _context15.abrupt("return", (0, _context15.t0)(_context15.t1));

          case 5:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _updateEnvTypeConfig.apply(this, arguments);
}

function deleteEnvTypeConfig(_x15, _x16) {
  return _deleteEnvTypeConfig.apply(this, arguments);
}

function _deleteEnvTypeConfig() {
  _deleteEnvTypeConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(envTypeId, envTypeConfigId) {
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.t0 = _utils.removeNulls;
            _context16.next = 3;
            return (0, _api.httpApiDelete)("api/workspace-types/".concat(encodeURIComponent(envTypeId), "/configurations/").concat(encodeURIComponent(envTypeConfigId)));

          case 3:
            _context16.t1 = _context16.sent;
            return _context16.abrupt("return", (0, _context16.t0)(_context16.t1));

          case 5:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _deleteEnvTypeConfig.apply(this, arguments);
}

function getEnvTypeConfigVars(_x17) {
  return _getEnvTypeConfigVars.apply(this, arguments);
}

function _getEnvTypeConfigVars() {
  _getEnvTypeConfigVars = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(envTypeId) {
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.t0 = _utils.removeNulls;
            _context17.next = 3;
            return (0, _api.httpApiGet)("api/workspace-types/".concat(encodeURIComponent(envTypeId), "/config-vars"));

          case 3:
            _context17.t1 = _context17.sent;
            return _context17.abrupt("return", (0, _context17.t0)(_context17.t1));

          case 5:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _getEnvTypeConfigVars.apply(this, arguments);
}
//# sourceMappingURL=api.js.map