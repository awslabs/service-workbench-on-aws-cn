"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.ClientInformationStore = void 0;

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _api = require("../../helpers/api");

var _ClientInformation = require("./ClientInformation");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// There are situations in which it is useful for the UI to be able to
// determine the IP address that it has, for example so that it can use that
// IP address in a Security Group rule that later restricts access for a given
// compute environment to the user that launched it. So, this store implements
// a "what is my IP address?" feature.
var ClientInformationStore = _BaseStore.BaseStore.named('ClientInformationStore').props({
  clientInformation: _mobxStateTree.types.optional(_ClientInformation.ClientInformation, {})
}).actions(function (self) {
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var info, ipAddress, answer;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getClientIpAddress)();

              case 2:
                info = _context.sent;
                ipAddress = info.ipAddress;

                if (!(ipAddress === '127.0.0.1')) {
                  _context.next = 10;
                  break;
                }

                _context.next = 7;
                return fetch('http://httpbin.org/get').then(function (res) {
                  return res.json();
                });

              case 7:
                answer = _context.sent;
                self.runInAction(function () {
                  self.clientInformation = _ClientInformation.ClientInformation.create({
                    ipAddress: answer && answer.origin
                  });
                });
                return _context.abrupt("return");

              case 10:
                self.runInAction(function () {
                  self.clientInformation = _ClientInformation.ClientInformation.create({
                    ipAddress: ipAddress
                  });
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  };
}).views(function (self) {
  return {
    get ipAddress() {
      return self.clientInformation.ipAddress;
    }

  };
});

exports.ClientInformationStore = ClientInformationStore;

function registerContextItems(appContext) {
  appContext.clientInformationStore = ClientInformationStore.create({}, appContext);
}
//# sourceMappingURL=ClientInformationStore.js.map