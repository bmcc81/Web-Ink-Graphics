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
exports.CampaignMetricsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const campaign_metrics_service_1 = require("./campaign-metrics.service");
const create_campaign_metric_dto_1 = require("./dto/create-campaign-metric.dto");
let CampaignMetricsController = class CampaignMetricsController {
    metrics;
    constructor(metrics) {
        this.metrics = metrics;
    }
    list(user, organizationId, projectId) {
        return this.metrics.list(user, organizationId, projectId);
    }
    summary(user, organizationId, projectId) {
        return this.metrics.summary(user, organizationId, projectId);
    }
    create(user, organizationId, projectId, dto) {
        return this.metrics.create(user, organizationId, projectId, dto);
    }
    remove(user, organizationId, projectId, metricId) {
        return this.metrics.remove(user, organizationId, projectId, metricId);
    }
};
exports.CampaignMetricsController = CampaignMetricsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], CampaignMetricsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('summary'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], CampaignMetricsController.prototype, "summary", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, create_campaign_metric_dto_1.CreateCampaignMetricDto]),
    __metadata("design:returntype", void 0)
], CampaignMetricsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':metricId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('metricId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], CampaignMetricsController.prototype, "remove", null);
exports.CampaignMetricsController = CampaignMetricsController = __decorate([
    (0, common_1.Controller)('organizations/:organizationId/projects/:projectId/metrics'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [campaign_metrics_service_1.CampaignMetricsService])
], CampaignMetricsController);
//# sourceMappingURL=campaign-metrics.controller.js.map