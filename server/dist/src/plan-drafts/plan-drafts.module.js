"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDraftsModule = void 0;
const common_1 = require("@nestjs/common");
const activity_log_module_1 = require("../activity/activity-log.module");
const ai_usage_module_1 = require("../ai-usage/ai-usage.module");
const goals_module_1 = require("../goals/goals.module");
const projects_module_1 = require("../projects/projects.module");
const plan_drafts_controller_1 = require("./plan-drafts.controller");
const plan_drafts_service_1 = require("./plan-drafts.service");
let PlanDraftsModule = class PlanDraftsModule {
};
exports.PlanDraftsModule = PlanDraftsModule;
exports.PlanDraftsModule = PlanDraftsModule = __decorate([
    (0, common_1.Module)({
        imports: [activity_log_module_1.ActivityLogModule, ai_usage_module_1.AiUsageModule, goals_module_1.GoalsModule, projects_module_1.ProjectsModule],
        controllers: [plan_drafts_controller_1.PlanDraftsController],
        providers: [plan_drafts_service_1.PlanDraftsService],
    })
], PlanDraftsModule);
//# sourceMappingURL=plan-drafts.module.js.map