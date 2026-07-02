import { BriefStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { BriefQuestionDto } from './brief-question.dto';
import { BriefRequirementDto } from './brief-requirement.dto';

export class CreateDiscoveryBriefDto {
  @IsString()
  @Length(2, 180)
  title: string;

  @IsOptional()
  @IsEnum(BriefStatus)
  status?: BriefStatus;

  @IsOptional()
  @IsDateString()
  meetingAt?: string;

  @IsString()
  @MaxLength(80)
  projectType: string;

  @IsOptional() @IsString() projectSummary?: string;
  @IsOptional() @IsString() motivation?: string;
  @IsOptional() @IsString() currentProblems?: string;
  @IsOptional() @IsString() successDefinition?: string;
  @IsOptional() @IsString() targetLaunch?: string;
  @IsOptional() @IsString() budget?: string;
  @IsOptional() @IsString() decisionMakers?: string;
  @IsOptional() @IsString() primaryAudience?: string;
  @IsOptional() @IsString() secondaryAudiences?: string;
  @IsOptional() @IsString() audienceProblems?: string;
  @IsOptional() @IsString() commonObjections?: string;
  @IsOptional() @IsString() desiredAction?: string;
  @IsOptional() @IsString() designDirection?: string;
  @IsOptional() @IsString() likedSites?: string;
  @IsOptional() @IsString() dislikedSites?: string;
  @IsOptional() @IsString() brandAssets?: string;
  @IsOptional() @IsString() seoTargets?: string;
  @IsOptional() @IsString() targetLocations?: string;
  @IsOptional() @IsString() currentPlatform?: string;
  @IsOptional() @IsString() integrations?: string;
  @IsOptional() @IsString() hostingProvider?: string;
  @IsOptional() @IsString() domainRegistrar?: string;
  @IsOptional() @IsString() compliance?: string;
  @IsOptional() @IsString() assumptions?: string;
  @IsOptional() @IsString() outOfScope?: string;
  @IsOptional() @IsString() rawNotes?: string;
  @IsOptional() @IsString() @MaxLength(160) approvedBy?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BriefRequirementDto)
  requirements?: BriefRequirementDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BriefQuestionDto)
  openQuestions?: BriefQuestionDto[];
}
