import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscoveryBriefDto } from './create-discovery-brief.dto.js';

export class UpdateDiscoveryBriefDto extends PartialType(
  CreateDiscoveryBriefDto,
) {}
