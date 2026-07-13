import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { ClientsModule } from './clients/clients.module';
import { validateEnvironment } from './config/environment.validation';
import { HealthModule } from './health/health.module';
import { MediaModule } from './media/media.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaExceptionFilter } from './prisma/prisma-exception.filter';
import { SeoModule } from './seo/seo.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { ProjectsModule } from './projects/projects.module';
import { GoalsModule } from './goals/goals.module';
import { ActivityLogModule } from './activity/activity-log.module';
import { DesignsModule } from './designs/designs.module';
import { TemplatesModule } from './templates/templates.module';
import { ProjectAssetsModule } from './project-assets/project-assets.module';
import { ExportsModule } from './exports/exports.module';
import { CreativeBriefsModule } from './creative-briefs/creative-briefs.module';
import { AiUsageModule } from './ai-usage/ai-usage.module';
import { PlanDraftsModule } from './plan-drafts/plan-drafts.module';

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
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: PrismaExceptionFilter },
  ],
})
export class AppModule {}
