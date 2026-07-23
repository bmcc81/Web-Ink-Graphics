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
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards, } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateMilestoneDto } from './dto/create-milestone.dto.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateMilestoneDto } from './dto/update-milestone.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { UpsertBudgetDto } from './dto/upsert-budget.dto.js';
import { ProjectsService } from './projects.service.js';
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
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, CreateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "create", null);
__decorate([
    Get(':projectId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findOne", null);
__decorate([
    Patch(':projectId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, UpdateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "update", null);
__decorate([
    Delete(':projectId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "remove", null);
__decorate([
    Post(':projectId/milestones'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, CreateMilestoneDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "createMilestone", null);
__decorate([
    Patch(':projectId/milestones/:milestoneId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('milestoneId')),
    __param(4, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, UpdateMilestoneDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "updateMilestone", null);
__decorate([
    Delete(':projectId/milestones/:milestoneId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('milestoneId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "removeMilestone", null);
__decorate([
    Post(':projectId/tasks'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, CreateTaskDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "createTask", null);
__decorate([
    Patch(':projectId/tasks/:taskId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('taskId')),
    __param(4, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "updateTask", null);
__decorate([
    Delete(':projectId/tasks/:taskId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "removeTask", null);
__decorate([
    Get(':projectId/budget'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "getBudget", null);
__decorate([
    Put(':projectId/budget'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, UpsertBudgetDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "upsertBudget", null);
__decorate([
    Delete(':projectId/budget'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "removeBudget", null);
__decorate([
    Post(':projectId/publish-to-portfolio'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "publishToPortfolio", null);
__decorate([
    Get(':projectId/tasks/:taskId/comments'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "listComments", null);
__decorate([
    Post(':projectId/tasks/:taskId/comments'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('taskId')),
    __param(4, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, CreateTaskCommentDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "createComment", null);
__decorate([
    Delete(':projectId/tasks/:taskId/comments/:commentId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('taskId')),
    __param(4, Param('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "removeComment", null);
ProjectsController = __decorate([
    Controller('organizations/:organizationId/projects'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [ProjectsService])
], ProjectsController);
export { ProjectsController };
//# sourceMappingURL=projects.controller.js.map