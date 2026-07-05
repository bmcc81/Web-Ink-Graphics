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
exports.GoalsService = void 0;
const common_1 = require("@nestjs/common");
const organization_access_1 = require("../organizations/organization-access");
const prisma_service_1 = require("../prisma/prisma.service");
let GoalsService = class GoalsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(user, organizationId) {
        await this.assertCanView(user, organizationId);
        return this.prisma.goal.findMany({
            where: { organizationId },
            include: {
                projects: { select: { id: true, name: true, status: true } },
            },
            orderBy: [{ year: 'desc' }, { period: 'asc' }],
        });
    }
    async findOne(user, organizationId, goalId) {
        await this.assertCanView(user, organizationId);
        return this.findGoalOrThrow(organizationId, goalId, {
            projects: { select: { id: true, name: true, status: true } },
        });
    }
    async create(user, organizationId, dto) {
        await this.assertCanContribute(user, organizationId);
        return this.prisma.goal.create({
            data: {
                title: dto.title,
                description: dto.description,
                period: dto.period,
                year: dto.year,
                status: dto.status,
                organizationId,
            },
        });
    }
    async update(user, organizationId, goalId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findGoalOrThrow(organizationId, goalId);
        return this.prisma.goal.update({
            where: { id: goalId },
            data: {
                title: dto.title,
                description: dto.description,
                period: dto.period,
                year: dto.year,
                status: dto.status,
            },
        });
    }
    async remove(user, organizationId, goalId) {
        await this.assertCanContribute(user, organizationId);
        await this.findGoalOrThrow(organizationId, goalId);
        await this.prisma.goal.delete({ where: { id: goalId } });
        return { removed: true };
    }
    async assertCanView(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
    }
    async assertCanContribute(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
        if (role !== 'STAFF' && !organization_access_1.CONTRIBUTE_ROLES.includes(role)) {
            throw new common_1.ForbiddenException('Only contributors, managers, and owners can manage goals');
        }
        return role;
    }
    async findGoalOrThrow(organizationId, goalId, include) {
        const goal = await this.prisma.goal.findFirst({
            where: { id: goalId, organizationId },
            include,
        });
        if (!goal)
            throw new common_1.NotFoundException('Goal not found');
        return goal;
    }
};
exports.GoalsService = GoalsService;
exports.GoalsService = GoalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GoalsService);
//# sourceMappingURL=goals.service.js.map