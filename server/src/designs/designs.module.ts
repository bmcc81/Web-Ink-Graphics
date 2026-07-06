import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { DesignsController } from './designs.controller';
import { DesignsService } from './designs.service';
import { FigmaService } from './figma.service';

@Module({
  imports: [ActivityLogModule],
  controllers: [DesignsController],
  providers: [DesignsService, FigmaService],
})
export class DesignsModule {}
