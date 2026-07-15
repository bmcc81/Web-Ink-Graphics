"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const contact_module_1 = require("./contact/contact.module");
const clients_module_1 = require("./clients/clients.module");
const environment_validation_1 = require("./config/environment.validation");
const health_module_1 = require("./health/health.module");
const media_module_1 = require("./media/media.module");
const portfolio_module_1 = require("./portfolio/portfolio.module");
const prisma_module_1 = require("./prisma/prisma.module");
const prisma_exception_filter_1 = require("./prisma/prisma-exception.filter");
const seo_module_1 = require("./seo/seo.module");
const organizations_module_1 = require("./organizations/organizations.module");
const projects_module_1 = require("./projects/projects.module");
const goals_module_1 = require("./goals/goals.module");
const activity_log_module_1 = require("./activity/activity-log.module");
const designs_module_1 = require("./designs/designs.module");
const templates_module_1 = require("./templates/templates.module");
const project_assets_module_1 = require("./project-assets/project-assets.module");
const exports_module_1 = require("./exports/exports.module");
const creative_briefs_module_1 = require("./creative-briefs/creative-briefs.module");
const ai_usage_module_1 = require("./ai-usage/ai-usage.module");
const plan_drafts_module_1 = require("./plan-drafts/plan-drafts.module");
const campaign_metrics_module_1 = require("./campaign-metrics/campaign-metrics.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, validate: environment_validation_1.validateEnvironment }),
            throttler_1.ThrottlerModule.forRoot([{ ttl: 60_000, limit: 20 }]),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            media_module_1.MediaModule,
            seo_module_1.SeoModule,
            contact_module_1.ContactModule,
            clients_module_1.ClientsModule,
            health_module_1.HealthModule,
            portfolio_module_1.PortfolioModule,
            organizations_module_1.OrganizationsModule,
            activity_log_module_1.ActivityLogModule,
            projects_module_1.ProjectsModule,
            goals_module_1.GoalsModule,
            designs_module_1.DesignsModule,
            templates_module_1.TemplatesModule,
            project_assets_module_1.ProjectAssetsModule,
            exports_module_1.ExportsModule,
            creative_briefs_module_1.CreativeBriefsModule,
            ai_usage_module_1.AiUsageModule,
            plan_drafts_module_1.PlanDraftsModule,
            campaign_metrics_module_1.CampaignMetricsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_FILTER, useClass: prisma_exception_filter_1.PrismaExceptionFilter },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map