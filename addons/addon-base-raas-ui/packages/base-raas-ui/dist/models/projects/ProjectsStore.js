"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContextItems = registerContextItems;
exports.ProjectsStore = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _mobxStateTree = require("mobx-state-tree");

var _BaseStore = require("@aws-ee/base-ui/dist/models/BaseStore");

var _utils = require("@aws-ee/base-ui/dist/helpers/utils");

var _api = require("../../helpers/api");

var _Project = require("./Project");

var _ProjectStore = require("./ProjectStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==================================================================
// ProjectsStore
// ==================================================================
var ProjectsStore = _BaseStore.BaseStore.named('ProjectsStore').props({
  projects: _mobxStateTree.types.optional(_mobxStateTree.types.map(_Project.Project), {}),
  projectStores: _mobxStateTree.types.optional(_mobxStateTree.types.map(_ProjectStore.ProjectStore), {}),
  tickPeriod: 900 * 1000 // 15 minutes

}).actions(function (self) {
  // save the base implementation of cleanup
  var superCleanup = self.cleanup;
  return {
    doLoad: function doLoad() {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var projects;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getProjects)();

              case 2:
                projects = _context.sent;
                // We try to preserve existing projects data and merge the new data instead
                // We could have used self.projects.replace(), but it will do clear() then merge()
                self.runInAction(function () {
                  (0, _utils.consolidateToMap)(self.projects, projects, function (exiting, newItem) {
                    exiting.setProject(newItem);
                  });
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addProject: function addProject(rawProject) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var id, previous;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = rawProject.id;
                previous = self.projects.get(id);

                if (previous) {
                  _context2.next = 8;
                  break;
                }

                self.projects.put(rawProject);
                _context2.next = 6;
                return (0, _api.addProject)(rawProject);

              case 6:
                _context2.next = 9;
                break;

              case 8:
                previous.setProject(rawProject);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getProjectStore: function getProjectStore(projectId) {
      var entry = self.projectStores.get(projectId);

      if (!entry) {
        // Lazily create the store
        self.projectStores.set(projectId, _ProjectStore.ProjectStore.create({
          projectId: projectId
        }));
        entry = self.projectStores.get(projectId);
      }

      return entry;
    },
    deleteProject: function () {
      var _deleteProject2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(project) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _api.deleteProject)(project);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteProject(_x) {
        return _deleteProject2.apply(this, arguments);
      }

      return deleteProject;
    }(),
    updateProject: function () {
      var _updateProject2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(project) {
        var updatedProject;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _api.updateProject)(project);

              case 2:
                updatedProject = _context4.sent;
                self.addProject(updatedProject);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateProject(_x2) {
        return _updateProject2.apply(this, arguments);
      }

      return updateProject;
    }(),
    cleanup: function cleanup() {
      self.projects.clear();
      superCleanup();
    }
  };
}).views(function (self) {
  return {
    get empty() {
      return self.projects.size === 0;
    },

    get total() {
      return self.projects.size;
    },

    get list() {
      var result = [];
      self.projects.forEach(function (project) {
        return result.push(project);
      });
      return _lodash["default"].reverse(_lodash["default"].sortBy(result, ['createdAt', 'id']));
    },

    get dropdownOptions() {
      var result = []; // converting map self.users to result array

      self.projects.forEach(function (project) {
        var res = {};
        res.key = project.id;
        res.value = project.id;
        res.text = project.id;
        result.push(res);
      });
      return result;
    },

    hasProject: function hasProject(id) {
      return self.projects.has(id);
    },
    getProject: function getProject(id) {
      return self.projects.get(id);
    }
  };
});

exports.ProjectsStore = ProjectsStore;

function registerContextItems(appContext) {
  appContext.projectsStore = ProjectsStore.create({}, appContext);
}
//# sourceMappingURL=ProjectsStore.js.map