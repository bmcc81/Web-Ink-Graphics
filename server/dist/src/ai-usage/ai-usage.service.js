"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiUsageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const HAIKU_INPUT_MICROS_PER_TOKEN = 1;
const HAIKU_OUTPUT_MICROS_PER_TOKEN = 5;
const DEFAULT_MONTHLY_CALL_CAP = 50;
let AiUsageService = class AiUsageService {
    prisma;
    config;
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    monthlyCap() {
        const configured = this.config.get('AI_MONTHLY_CALL_CAP');
        const parsed = configured ? Number(configured) : NaN;
        return Number.isFinite(parsed) && parsed > 0
            ? parsed
            : DEFAULT_MONTHLY_CALL_CAP;
    }
    startOfMonth() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    }
    async assertWithinCap(organizationId) {
        const cap = this.monthlyCap();
        const used = await this.prisma.aiUsageRecord.count({
            where: { organizationId, createdAt: { gte: this.startOfMonth() } },
        });
        if (used >= cap) {
            throw new common_1.ForbiddenException(`This organization has reached its monthly AI generation limit (${cap} calls). The limit resets next month.`);
        }
    }
    async record(organizationId, user, purpose, model, promptTokens, completionTokens) {
        const estimatedCostMicros = promptTokens * HAIKU_INPUT_MICROS_PER_TOKEN +
            completionTokens * HAIKU_OUTPUT_MICROS_PER_TOKEN;
        await this.prisma.aiUsageRecord.create({
            data: {
                organizationId,
                requestedById: user.id,
                purpose,
                model,
                promptTokens,
                completionTokens,
                estimatedCostMicros,
            },
        });
    }
    async summary(organizationId) {
        const cap = this.monthlyCap();
        const records = await this.prisma.aiUsageRecord.findMany({
            where: { organizationId, createdAt: { gte: this.startOfMonth() } },
            select: { estimatedCostMicros: true },
        });
        const estimatedCostMicros = records.reduce((sum, record) => sum + record.estimatedCostMicros, 0);
        return {
            callsUsed: records.length,
            callsCap: cap,
            estimatedCostUsd: estimatedCostMicros / 1_000_000,
        };
    }
};
exports.AiUsageService = AiUsageService;
exports.AiUsageService = AiUsageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], AiUsageService);
//# sourceMappingURL=ai-usage.service.js.map