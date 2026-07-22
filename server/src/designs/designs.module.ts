import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { DesignsController } from './designs.controller.js';
import { DesignsService } from './designs.service.js';
import { FigmaService } from './figma.service.js';

@Module({
  imports: [ActivityLogModule],
  controllers: [DesignsController],
  providers: [DesignsService, FigmaService],
})
export class DesignsModule {}
