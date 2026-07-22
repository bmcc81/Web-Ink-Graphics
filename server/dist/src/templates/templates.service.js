var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { isStaff } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
const templateInclude = {
    fields: { orderBy: { sortOrder: 'asc' } },
};
let TemplatesService = class TemplatesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(user) {
        return this.prisma.designTemplate.findMany({
            where: isStaff(user) ? {} : { isPublished: true },
            include: templateInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(user, id) {
        const template = await this.prisma.designTemplate.findFirst({
            where: { id, ...(isStaff(user) ? {} : { isPublished: true }) },
            include: templateInclude,
        });
        if (!template)
            throw new NotFoundException('Template not found');
        return template;
    }
    create(dto) {
        const keys = new Set(dto.fields.map((field) => field.key));
        if (keys.size !== dto.fields.length) {
            throw new BadRequestException('Field keys must be unique within a template');
        }
        return this.prisma.designTemplate.create({
            data: {
                name: dto.name,
                description: dto.description,
                category: dto.category,
                previewImageUrl: dto.previewImageUrl,
                canvasWidth: dto.canvasWidth,
                canvasHeight: dto.canvasHeight,
                fields: {
                    create: dto.fields.map((field, index) => ({
                        key: field.key,
                        label: field.label,
                        fieldType: field.fieldType,
                        required: field.required ?? false,
                        maxLength: field.maxLength,
                        sortOrder: index,
                        x: field.x,
                        y: field.y,
                        width: field.width,
                        height: field.height,
                        fontSize: field.fontSize,
                        color: field.color,
                    })),
                },
            },
            include: templateInclude,
        });
    }
    async update(id, dto) {
        await this.findTemplateOrThrow(id);
        return this.prisma.designTemplate.update({
            where: { id },
            data: {
                name: dto.name,
                description: dto.description,
                previewImageUrl: dto.previewImageUrl,
                isPublished: dto.isPublished,
            },
            include: templateInclude,
        });
    }
    async findTemplateOrThrow(id) {
        const template = await this.prisma.designTemplate.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!template)
            throw new NotFoundException('Template not found');
        return template;
    }
};
TemplatesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], TemplatesService);
export { TemplatesService };
//# sourceMappingURL=templates.service.js.map