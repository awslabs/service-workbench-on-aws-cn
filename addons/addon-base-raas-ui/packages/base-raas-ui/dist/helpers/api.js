"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addIndex = addIndex;
exports.addUsers = addUsers;
exports.removeAccountInfo = removeAccountInfo;
exports.deleteUser = deleteUser;
exports.getUserRoles = getUserRoles;
exports.getAwsAccounts = getAwsAccounts;
exports.getAwsAccount = getAwsAccount;
exports.getAwsAccountBudget = getAwsAccountBudget;
exports.createAwsAccountBudget = createAwsAccountBudget;
exports.updateAwsAccountBudget = updateAwsAccountBudget;
exports.getStudies = getStudies;
exports.getStudy = getStudy;
exports.createStudy = createStudy;
exports.listStudyFiles = listStudyFiles;
exports.getPresignedStudyUploadRequests = getPresignedStudyUploadRequests;
exports.getStudyPermissions = getStudyPermissions;
exports.updateStudyPermissions = updateStudyPermissions;
exports.addAwsAccount = addAwsAccount;
exports.createAwsAccount = createAwsAccount;
exports.getStepTemplates = getStepTemplates;
exports.getEnvironments = getEnvironments;
exports.getEnvironment = getEnvironment;
exports.getEnvironmentCost = getEnvironmentCost;
exports.deleteEnvironment = deleteEnvironment;
exports.createEnvironment = createEnvironment;
exports.updateEnvironment = updateEnvironment;
exports.stopEnvironment = stopEnvironment;
exports.startEnvironment = startEnvironment;
exports.getEnvironmentKeypair = getEnvironmentKeypair;
exports.getEnvironmentPasswordData = getEnvironmentPasswordData;
exports.getEnvironmentUrl = getEnvironmentUrl;
exports.getEnvironmentSpotPriceHistory = getEnvironmentSpotPriceHistory;
exports.getExternalTemplate = getExternalTemplate;
exports.getAllProjCostGroupByUser = getAllProjCostGroupByUser;
exports.getIndexes = getIndexes;
exports.getIndex = getIndex;
exports.getAllProjCostGroupByEnv = getAllProjCostGroupByEnv;
exports.updateUserApplication = updateUserApplication;
exports.getProjects = getProjects;
exports.getProject = getProject;
exports.addProject = addProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
exports.getAccounts = getAccounts;
exports.getAccount = getAccount;
exports.getComputePlatforms = getComputePlatforms;
exports.getComputeConfigurations = getComputeConfigurations;
exports.getClientIpAddress = getClientIpAddress;
exports.getScEnvironmentCost = getScEnvironmentCost;
exports.getScEnvironments = getScEnvironments;
exports.createScEnvironment = createScEnvironment;
exports.createScEnvironmentConnectionUrl = createScEnvironmentConnectionUrl;
exports.deleteScEnvironment = deleteScEnvironment;
exports.stopScEnvironment = stopScEnvironment;
exports.startScEnvironment = startScEnvironment;
exports.getScEnvironment = getScEnvironment;
exports.getScEnvironmentConnections = getScEnvironmentConnections;
exports.sendSshKey = sendSshKey;
exports.getWindowsRpInfo = getWindowsRpInfo;

var _lodash = _interopRequireDefault(require("lodash"));

var _api = require("@aws-ee/base-ui/dist/helpers/api");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getUserRoles() {
  return (0, _api.httpApiGet)('api/user-roles');
}

function getAwsAccounts() {
  return (0, _api.httpApiGet)('api/aws-accounts');
} // Note the accountUUID used here is the 'id' column in dbAwsAccounts table and 'id' attribute in AwsAccount.js, not AWS account id


function getAwsAccount(accountUUID) {
  return (0, _api.httpApiGet)("api/aws-accounts/".concat(accountUUID));
} // Note the accountUUID used here is the 'id' column in dbAwsAccounts table and 'id' attribute in AwsAccount.js, not AWS account id


function getAwsAccountBudget(accountUUID) {
  return (0, _api.httpApiGet)("api/budgets/aws-account/".concat(accountUUID));
}

function createAwsAccountBudget(budgetConfiguration) {
  return (0, _api.httpApiPut)("api/budgets/aws-account", {
    data: budgetConfiguration
  });
}

function updateAwsAccountBudget(budgetConfiguration) {
  return (0, _api.httpApiPost)("api/budgets/aws-account", {
    data: budgetConfiguration
  });
}

function addUsers(users) {
  return (0, _api.httpApiPost)('api/users/bulk', {
    data: users
  });
}

function addAwsAccount(awsAccount) {
  return (0, _api.httpApiPost)('api/aws-accounts', {
    data: awsAccount
  });
}

function createAwsAccount(awsAccount) {
  return (0, _api.httpApiPost)('api/aws-accounts/provision', {
    data: awsAccount
  });
}

function addIndex(index) {
  return (0, _api.httpApiPost)('api/indexes', {
    data: index
  });
}

function updateUserApplication(user) {
  // Remove nulls and omit extra fields from the payload before calling the API
  // The user is identified by the uid in the url
  var data = (0, _utils.removeNulls)(_lodash["default"].omit(_lodash["default"].clone(user), 'uid', 'authenticationProviderId', 'identityProviderName', 'username', 'ns', 'createdBy', 'updatedBy'));

  if (!data.userType) {
    // if userType is specified as empty string then make sure to delete it
    // the api requires this to be only one of the supported values (currently only supported value is 'root')
    delete data.userType;
  }

  return (0, _api.httpApiPut)("api/user", {
    data: data
  });
}

function deleteUser(_x) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _api.httpApiDelete)("api/users/".concat(user.uid)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _deleteUser.apply(this, arguments);
}

function getStudies(category) {
  return (0, _api.httpApiGet)('api/studies', {
    params: {
      category: category
    }
  });
}

function getStudy(id) {
  return (0, _api.httpApiGet)("api/studies/".concat(id));
}

function createStudy(body) {
  return (0, _api.httpApiPost)('api/studies', {
    data: body
  });
}

function listStudyFiles(studyId) {
  return (0, _api.httpApiGet)("api/studies/".concat(studyId, "/files"));
}

function getPresignedStudyUploadRequests(studyId, filenames) {
  if (Array.isArray(filenames)) {
    filenames = filenames.join(',');
  }

  return (0, _api.httpApiGet)("api/studies/".concat(studyId, "/upload-requests"), {
    params: {
      filenames: filenames
    }
  });
}

function getStudyPermissions(studyId) {
  return (0, _api.httpApiGet)("api/studies/".concat(studyId, "/permissions"));
}

function updateStudyPermissions(studyId, updateRequest) {
  return (0, _api.httpApiPut)("api/studies/".concat(studyId, "/permissions"), {
    data: updateRequest
  });
}

function getStepTemplates() {
  return _getStepTemplates.apply(this, arguments);
}

function _getStepTemplates() {
  _getStepTemplates = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _api.httpApiGet)('api/step-templates'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getStepTemplates.apply(this, arguments);
}

function getEnvironments() {
  return (0, _api.httpApiGet)('api/workspaces/built-in');
}

function getEnvironmentCost(id, numberDaysInPast) {
  var groupByService = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var groupByUser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return (0, _api.httpApiGet)("api/costs?env=".concat(id, "&numberOfDaysInPast=").concat(numberDaysInPast, "&groupByService=").concat(groupByService, "&groupByUser=").concat(groupByUser));
}

function getAllProjCostGroupByUser(numberDaysInPast) {
  return (0, _api.httpApiGet)("api/costs?proj=ALL&groupByUser=true&numberOfDaysInPast=".concat(numberDaysInPast));
}

function getAllProjCostGroupByEnv(numberDaysInPast) {
  return (0, _api.httpApiGet)("api/costs?proj=ALL&groupByEnv=true&numberOfDaysInPast=".concat(numberDaysInPast));
}

function getEnvironment(id) {
  return (0, _api.httpApiGet)("api/workspaces/built-in/".concat(id));
}

function deleteEnvironment(id) {
  return (0, _api.httpApiDelete)("api/workspaces/built-in/".concat(id));
}

function createEnvironment(body) {
  return (0, _api.httpApiPost)('api/workspaces/built-in', {
    data: body
  });
}

function updateEnvironment(body) {
  return (0, _api.httpApiPut)('api/workspaces/built-in', {
    data: body
  });
}

function stopEnvironment(id) {
  return (0, _api.httpApiPut)("api/workspaces/built-in/".concat(id, "/stop"));
}

function startEnvironment(id) {
  return (0, _api.httpApiPut)("api/workspaces/built-in/".concat(id, "/start"));
}

function getEnvironmentKeypair(id) {
  return (0, _api.httpApiGet)("api/workspaces/built-in/".concat(id, "/keypair"));
}

function getEnvironmentPasswordData(id) {
  return (0, _api.httpApiGet)("api/workspaces/built-in/".concat(id, "/password"));
}

function getEnvironmentUrl(id) {
  return (0, _api.httpApiGet)("api/workspaces/built-in/".concat(id, "/url"));
}

function getEnvironmentSpotPriceHistory(type) {
  return (0, _api.httpApiGet)("api/workspaces/built-in/pricing/".concat(type));
}

function getExternalTemplate(key) {
  return (0, _api.httpApiGet)("api/template/".concat(key));
}

function getIndexes() {
  return (0, _api.httpApiGet)('api/indexes');
}

function getIndex(indexId) {
  return (0, _api.httpApiGet)("api/indexes/".concat(indexId));
}

function getProjects() {
  return (0, _api.httpApiGet)('api/projects');
}

function getProject(id) {
  return (0, _api.httpApiGet)("api/projects/".concat(id));
}

function deleteProject(id) {
  return (0, _api.httpApiDelete)("api/projects/".concat(id));
}

function addProject(project) {
  return (0, _api.httpApiPost)('api/projects', {
    data: project
  });
}

function updateProject(project) {
  return (0, _api.httpApiPut)("api/projects/".concat(project.id), {
    data: project
  });
}

function getAccounts() {
  return (0, _api.httpApiGet)('api/accounts');
}

function getAccount(id) {
  return (0, _api.httpApiGet)("api/accounts/".concat(id));
}

function removeAccountInfo(id) {
  return (0, _api.httpApiDelete)("api/accounts/".concat(id));
}

function getComputePlatforms() {
  return (0, _api.httpApiGet)("api/compute/platforms");
}

function getComputeConfigurations(platformId) {
  return (0, _api.httpApiGet)("api/compute/platforms/".concat(platformId, "/configurations"));
}

function getClientIpAddress() {
  return (0, _api.httpApiGet)("api/ip");
}

function getScEnvironmentCost(id, numberDaysInPast) {
  var groupByService = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var groupByUser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return (0, _api.httpApiGet)("api/costs?scEnv=".concat(id, "&numberOfDaysInPast=").concat(numberDaysInPast, "&groupByService=").concat(groupByService, "&groupByUser=").concat(groupByUser));
}

function getScEnvironments() {
  return (0, _api.httpApiGet)("api/workspaces/service-catalog/");
}

function getScEnvironment(id) {
  return (0, _api.httpApiGet)("api/workspaces/service-catalog/".concat(id));
}

function createScEnvironment(scEnvironment) {
  return (0, _api.httpApiPost)('api/workspaces/service-catalog/', {
    data: scEnvironment
  });
}

function createScEnvironmentConnectionUrl(envId, connectionId) {
  return (0, _api.httpApiPost)("api/workspaces/service-catalog/".concat(envId, "/connections/").concat(connectionId, "/url"));
}

function deleteScEnvironment(id) {
  return (0, _api.httpApiDelete)("api/workspaces/service-catalog/".concat(id));
}

function stopScEnvironment(id) {
  return (0, _api.httpApiPut)("api/workspaces/service-catalog/".concat(id, "/stop"));
}

function startScEnvironment(id) {
  return (0, _api.httpApiPut)("api/workspaces/service-catalog/".concat(id, "/start"));
}

function getScEnvironmentConnections(envId) {
  return (0, _api.httpApiGet)("api/workspaces/service-catalog/".concat(envId, "/connections/"));
}

function sendSshKey(envId, connectionId, keyPairId) {
  return (0, _api.httpApiPost)("api/workspaces/service-catalog/".concat(envId, "/connections/").concat(connectionId, "/send-ssh-public-key"), {
    data: {
      keyPairId: keyPairId
    }
  });
}

function getWindowsRpInfo(envId, connectionId) {
  return (0, _api.httpApiGet)("api/workspaces/service-catalog/".concat(envId, "/connections/").concat(connectionId, "/windows-rdp-info"));
} // API Functions Insertion Point (do not change this text, it is being used by hygen cli)
//# sourceMappingURL=api.js.map