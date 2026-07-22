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
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateDesignCommentDto } from './dto/create-design-comment.dto.js';
import { CreateDesignDocumentDto } from './dto/create-design-document.dto.js';
import { CreateDesignReviewDto } from './dto/create-design-review.dto.js';
import { DecideDesignReviewDto } from './dto/decide-design-review.dto.js';
import { DesignsService } from './designs.service.js';
let DesignsController = class DesignsController {
    designs;
    constructor(designs) {
        this.designs = designs;
    }
    list(user, organizationId, projectId) {
        return this.designs.list(user, organizationId, projectId);
    }
    attach(user, organizationId, projectId, dto) {
        return this.designs.attach(user, organizationId, projectId, dto);
    }
    sync(user, organizationId, projectId, designId) {
        return this.designs.sync(user, organizationId, projectId, designId);
    }
    unlink(user, organizationId, projectId, designId) {
        return this.designs.unlink(user, organizationId, projectId, designId);
    }
    listReviews(user, organizationId, projectId, designId) {
        return this.designs.listReviews(user, organizationId, projectId, designId);
    }
    createReview(user, organizationId, projectId, designId, dto) {
        return this.designs.createReview(user, organizationId, projectId, designId, dto);
    }
    decideReview(user, organizationId, projectId, designId, reviewId, dto) {
        return this.designs.decideReview(user, organizationId, projectId, designId, reviewId, dto);
    }
    listComments(user, organizationId, projectId, designId) {
        return this.designs.listComments(user, organizationId, projectId, designId);
    }
    createComment(user, organizationId, projectId, designId, dto) {
        return this.designs.createComment(user, organizationId, projectId, designId, dto);
    }
    removeComment(user, organizationId, projectId, designId, commentId) {
        return this.designs.removeComment(user, organizationId, projectId, designId, commentId);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, CreateDesignDocumentDto]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "attach", null);
__decorate([
    Post(':designId/sync'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('designId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "sync", null);
__decorate([
    Delete(':designId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('designId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "unlink", null);
__decorate([
    Get(':designId/reviews'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('designId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "listReviews", null);
__decorate([
    Post(':designId/reviews'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('designId')),
    __param(4, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, CreateDesignReviewDto]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "createReview", null);
__decorate([
    Patch(':designId/reviews/:reviewId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('designId')),
    __param(4, Param('reviewId')),
    __param(5, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, DecideDesignReviewDto]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "decideReview", null);
__decorate([
    Get(':designId/comments'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('designId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "listComments", null);
__decorate([
    Post(':designId/comments'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('designId')),
    __param(4, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, CreateDesignCommentDto]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "createComment", null);
__decorate([
    Delete(':designId/comments/:commentId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('designId')),
    __param(4, Param('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "removeComment", null);
DesignsController = __decorate([
    Controller('organizations/:organizationId/projects/:projectId/designs'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [DesignsService])
], DesignsController);
export { DesignsController };
//# sourceMappingURL=designs.controller.js.map