import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { ContactModule } from './contact/contact.module.js';
import { ClientsModule } from './clients/clients.module.js';
import { validateEnvironment } from './config/environment.validation.js';
import { HealthModule } from './health/health.module.js';
import { MediaModule } from './media/media.module.js';
import { PortfolioModule } from './portfolio/portfolio.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { PrismaExceptionFilter } from './prisma/prisma-exception.filter.js';
import { SeoModule } from './seo/seo.module.js';
import { OrganizationsModule } from './organizations/organizations.module.js';
import { ProjectsModule } from './projects/projects.module.js';
import { GoalsModule } from './goals/goals.module.js';
import { ActivityLogModule } from './activity/activity-log.module.js';
import { DesignsModule } from './designs/designs.module.js';
import { TemplatesModule } from './templates/templates.module.js';
import { ProjectAssetsModule } from './project-assets/project-assets.module.js';
import { ExportsModule } from './exports/exports.module.js';
import { CreativeBriefsModule } from './creative-briefs/creative-briefs.module.js';
import { AiUsageModule } from './ai-usage/ai-usage.module.js';
import { PlanDraftsModule } from './plan-drafts/plan-drafts.module.js';
import { CampaignMetricsModule } from './campaign-metrics/campaign-metrics.module.js';
import { PerformanceRecommendationsModule } from './performance-recommendations/performance-recommendations.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnvironment }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 20 }]),
    PrismaModule,
    AuthModule,
    MediaModule,
    SeoModule,
    ContactModule,
    ClientsModule,
    HealthModule,
    PortfolioModule,
    OrganizationsModule,
    ActivityLogModule,
    ProjectsModule,
    GoalsModule,
    DesignsModule,
    TemplatesModule,
    ProjectAssetsModule,
    ExportsModule,
    CreativeBriefsModule,
    AiUsageModule,
    PlanDraftsModule,
    CampaignMetricsModule,
    PerformanceRecommendationsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: PrismaExceptionFilter },
  ],
})
export class AppModule {}
