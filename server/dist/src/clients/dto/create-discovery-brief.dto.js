var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BriefStatus } from '../../generated/prisma/client.js';
import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsEnum, IsOptional, IsString, Length, MaxLength, ValidateNested, } from 'class-validator';
import { BriefQuestionDto } from './brief-question.dto.js';
import { BriefRequirementDto } from './brief-requirement.dto.js';
export class CreateDiscoveryBriefDto {
    title;
    status;
    meetingAt;
    projectType;
    projectSummary;
    motivation;
    currentProblems;
    successDefinition;
    targetLaunch;
    budget;
    decisionMakers;
    primaryAudience;
    secondaryAudiences;
    audienceProblems;
    commonObjections;
    desiredAction;
    designDirection;
    likedSites;
    dislikedSites;
    brandAssets;
    seoTargets;
    targetLocations;
    currentPlatform;
    integrations;
    hostingProvider;
    domainRegistrar;
    compliance;
    assumptions;
    outOfScope;
    rawNotes;
    approvedBy;
    requirements;
    openQuestions;
}
__decorate([
    IsString(),
    Length(2, 180),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "title", void 0);
__decorate([
    IsOptional(),
    IsEnum(BriefStatus),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "meetingAt", void 0);
__decorate([
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "projectType", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "projectSummary", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "motivation", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "currentProblems", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "successDefinition", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "targetLaunch", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "budget", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "decisionMakers", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "primaryAudience", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "secondaryAudiences", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "audienceProblems", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "commonObjections", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "desiredAction", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "designDirection", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "likedSites", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "dislikedSites", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "brandAssets", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "seoTargets", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "targetLocations", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "currentPlatform", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "integrations", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "hostingProvider", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "domainRegistrar", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "compliance", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "assumptions", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "outOfScope", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "rawNotes", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(160),
    __metadata("design:type", String)
], CreateDiscoveryBriefDto.prototype, "approvedBy", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => BriefRequirementDto),
    __metadata("design:type", Array)
], CreateDiscoveryBriefDto.prototype, "requirements", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => BriefQuestionDto),
    __metadata("design:type", Array)
], CreateDiscoveryBriefDto.prototype, "openQuestions", void 0);
//# sourceMappingURL=create-discovery-brief.dto.js.map