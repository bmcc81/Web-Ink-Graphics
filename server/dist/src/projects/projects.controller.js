"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_milestone_dto_1 = require("./dto/create-milestone.dto");
const create_project_dto_1 = require("./dto/create-project.dto");
const create_task_comment_dto_1 = require("./dto/create-task-comment.dto");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_milestone_dto_1 = require("./dto/update-milestone.dto");
const update_project_dto_1 = require("./dto/update-project.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
const upsert_budget_dto_1 = require("./dto/upsert-budget.dto");
const projects_service_1 = require("./projects.service");
let ProjectsController = class ProjectsController {
    projects;
    constructor(projects) {
        this.projects = projects;
    }
    list(user, organizationId) {
        return this.projects.list(user, organizationId);
    }
    create(user, organizationId, dto) {
        return this.projects.create(user, organizationId, dto);
    }
    findOne(user, organizationId, projectId) {
        return this.projects.findOne(user, organizationId, projectId);
    }
    update(user, organizationId, projectId, dto) {
        return this.projects.update(user, organizationId, projectId, dto);
    }
    remove(user, organizationId, projectId) {
        return this.projects.remove(user, organizationId, projectId);
    }
    createMilestone(user, organizationId, projectId, dto) {
        return this.projects.createMilestone(user, organizationId, projectId, dto);
    }
    updateMilestone(user, organizationId, projectId, milestoneId, dto) {
        return this.projects.updateMilestone(user, organizationId, projectId, milestoneId, dto);
    }
    removeMilestone(user, organizationId, projectId, milestoneId) {
        return this.projects.removeMilestone(user, organizationId, projectId, milestoneId);
    }
    createTask(user, organizationId, projectId, dto) {
        return this.projects.createTask(user, organizationId, projectId, dto);
    }
    updateTask(user, organizationId, projectId, taskId, dto) {
        return this.projects.updateTask(user, organizationId, projectId, taskId, dto);
    }
    removeTask(user, organizationId, projectId, taskId) {
        return this.projects.removeTask(user, organizationId, projectId, taskId);
    }
    getBudget(user, organizationId, projectId) {
        return this.projects.getBudget(user, organizationId, projectId);
    }
    upsertBudget(user, organizationId, projectId, dto) {
        return this.projects.upsertBudget(user, organizationId, projectId, dto);
    }
    removeBudget(user, organizationId, projectId) {
        return this.projects.removeBudget(user, organizationId, projectId);
    }
    publishToPortfolio(user, organizationId, projectId) {
        return this.projects.publishToPortfolio(user, organizationId, projectId);
    }
    listComments(user, organizationId, projectId, taskId) {
        return this.projects.listComments(user, organizationId, projectId, taskId);
    }
    createComment(user, organizationId, projectId, taskId, dto) {
        return this.projects.createComment(user, organizationId, projectId, taskId, dto);
    }
    removeComment(user, organizationId, projectId, taskId, commentId) {
        return this.projects.removeComment(user, organizationId, projectId, taskId, commentId);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':projectId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':projectId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':projectId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':projectId/milestones'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, create_milestone_dto_1.CreateMilestoneDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "createMilestone", null);
__decorate([
    (0, common_1.Patch)(':projectId/milestones/:milestoneId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('milestoneId')),
    __param(4, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, update_milestone_dto_1.UpdateMilestoneDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "updateMilestone", null);
__decorate([
    (0, common_1.Delete)(':projectId/milestones/:milestoneId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('milestoneId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "removeMilestone", null);
__decorate([
    (0, common_1.Post)(':projectId/tasks'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "createTask", null);
__decorate([
    (0, common_1.Patch)(':projectId/tasks/:taskId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('taskId')),
    __param(4, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)(':projectId/tasks/:taskId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "removeTask", null);
__decorate([
    (0, common_1.Get)(':projectId/budget'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "getBudget", null);
__decorate([
    (0, common_1.Put)(':projectId/budget'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, upsert_budget_dto_1.UpsertBudgetDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "upsertBudget", null);
__decorate([
    (0, common_1.Delete)(':projectId/budget'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "removeBudget", null);
__decorate([
    (0, common_1.Post)(':projectId/publish-to-portfolio'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "publishToPortfolio", null);
__decorate([
    (0, common_1.Get)(':projectId/tasks/:taskId/comments'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "listComments", null);
__decorate([
    (0, common_1.Post)(':projectId/tasks/:taskId/comments'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('taskId')),
    __param(4, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, create_task_comment_dto_1.CreateTaskCommentDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "createComment", null);
__decorate([
    (0, common_1.Delete)(':projectId/tasks/:taskId/comments/:commentId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('taskId')),
    __param(4, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "removeComment", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, common_1.Controller)('organizations/:organizationId/projects'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map