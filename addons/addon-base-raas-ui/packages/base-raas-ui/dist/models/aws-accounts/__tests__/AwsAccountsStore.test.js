"use strict";

var _api = require("../../../helpers/api");

var _AwsAccountsStore = require("../AwsAccountsStore");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../../helpers/api');
describe('AwsAccountsStore', function () {
  var store = null;
  var appContext = {};
  var newAwsAccount = {
    id: 'mouserat',
    rev: 5000,
    name: 'candles-in-the-wind',
    description: 'up in horsey heaven, heres the thing',
    accountId: 'you_trade_your_legs_for_angels_wings',
    externalId: 'and-once-weve-all-said-goodbye',
    roleArn: 'YouTakeARunningLeapAndYouLearnToFly',
    vpcId: 'and_although_we_all_miss_you_every_day',
    subnetId: 'we-know-youre-up-there-eating-heavens-hay',
    encryptionKeyArn: 'AndHeresThePartThatHurtsTheMost',
    createdAt: 'humans cannot ride a ghost :(',
    updatedAt: 'Bye bye, Lil Sebastian'
  };
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _AwsAccountsStore.registerContextItems)(appContext);

          case 2:
            store = appContext.awsAccountsStore;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  describe('addAwsAccount', function () {
    it('should add a new Aws Account successfully', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // BUILD
              _api.getAwsAccounts.mockResolvedValue([]);

              _api.addAwsAccount.mockResolvedValue(newAwsAccount);

              _context2.next = 4;
              return store.load();

            case 4:
              _context2.next = 6;
              return store.addAwsAccount(newAwsAccount);

            case 6:
              // CHECK
              expect(newAwsAccount).toMatchObject(store.list[0]); // some properties are dropped when added, so this makes sure store.list[0]
              //      is a subset of newAwsAccount

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should not add an Aws Account', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // BUILD
              _api.getAwsAccounts.mockResolvedValue([newAwsAccount]);

              _api.addAwsAccount.mockResolvedValue(newAwsAccount);

              _context3.next = 4;
              return store.load();

            case 4:
              _context3.next = 6;
              return store.addAwsAccount(newAwsAccount);

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
});
//# sourceMappingURL=AwsAccountsStore.test.js.map