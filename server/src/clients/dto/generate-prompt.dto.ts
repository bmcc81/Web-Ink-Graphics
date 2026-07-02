import { IsIn, IsOptional } from 'class-validator';

export const promptOutputTypes = [
  'IMPLEMENTATION',
  'TECHNICAL_PLAN',
  'PROPOSAL',
  'WEBSITE_AUDIT',
  'CONTENT_SEO',
  'FEATURE',
] as const;

export type PromptOutputType = (typeof promptOutputTypes)[number];

export class GeneratePromptDto {
  @IsOptional()
  @IsIn(promptOutputTypes)
  outputType: PromptOutputType = 'IMPLEMENTATION';
}
