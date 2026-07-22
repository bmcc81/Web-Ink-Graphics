import { Module } from '@nestjs/common';
import { AiUsageController } from './ai-usage.controller.js';
import { AiUsageService } from './ai-usage.service.js';

@Module({
  controllers: [AiUsageController],
  providers: [AiUsageService],
  exports: [AiUsageService],
})
export class AiUsageModule {}
