import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { isStaff } from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDesignTemplateDto } from './dto/create-design-template.dto';
import { UpdateDesignTemplateDto } from './dto/update-design-template.dto';

const templateInclude = {
  fields: { orderBy: { sortOrder: 'asc' as const } },
};

@Injectable()
export class TemplatesService {
  constructor(private readonly prisma: PrismaService) {}

  list(user: AuthUser) {
    return this.prisma.designTemplate.findMany({
      where: isStaff(user) ? {} : { isPublished: true },
      include: templateInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(user: AuthUser, id: string) {
    const template = await this.prisma.designTemplate.findFirst({
      where: { id, ...(isStaff(user) ? {} : { isPublished: true }) },
      include: templateInclude,
    });
    if (!template) throw new NotFoundException('Template not found');
    return template;
  }

  create(dto: CreateDesignTemplateDto) {
    const keys = new Set(dto.fields.map((field) => field.key));
    if (keys.size !== dto.fields.length) {
      throw new BadRequestException(
        'Field keys must be unique within a template',
      );
    }
    return this.prisma.designTemplate.create({
      data: {
        name: dto.name,
        description: dto.description,
        category: dto.category,
        previewImageUrl: dto.previewImageUrl,
        fields: {
          create: dto.fields.map((field, index) => ({
            key: field.key,
            label: field.label,
            fieldType: field.fieldType,
            required: field.required ?? false,
            maxLength: field.maxLength,
            sortOrder: index,
          })),
        },
      },
      include: templateInclude,
    });
  }

  async update(id: string, dto: UpdateDesignTemplateDto) {
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

  private async findTemplateOrThrow(id: string) {
    const template = await this.prisma.designTemplate.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!template) throw new NotFoundException('Template not found');
    return template;
  }
}
