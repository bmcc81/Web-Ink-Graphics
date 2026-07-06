import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Role, TemplateCategory, TemplateFieldType } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { TemplatesService } from './templates.service';

describe('TemplatesService', () => {
  const staff: AuthUser = {
    id: 'user-staff',
    email: 'staff@example.com',
    name: 'Staff',
    role: Role.ADMIN,
  };
  const customer: AuthUser = {
    id: 'user-customer',
    email: 'customer@example.com',
    name: 'Customer',
    role: Role.CUSTOMER,
  };

  const prisma = {
    designTemplate: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
  };
  let service: TemplatesService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new TemplatesService(prisma as never);
  });

  describe('list', () => {
    it('only shows published templates to a customer', async () => {
      prisma.designTemplate.findMany.mockResolvedValue([]);

      await service.list(customer);

      expect(prisma.designTemplate.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { isPublished: true } }),
      );
    });

    it('shows all templates to staff', async () => {
      prisma.designTemplate.findMany.mockResolvedValue([]);

      await service.list(staff);

      expect(prisma.designTemplate.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: {} }),
      );
    });
  });

  describe('findOne', () => {
    it('throws when a customer requests an unpublished template', async () => {
      prisma.designTemplate.findFirst.mockResolvedValue(null);

      await expect(
        service.findOne(customer, 'template-1'),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });

  describe('create', () => {
    it('rejects duplicate field keys', () => {
      expect(() =>
        service.create({
          name: 'Flyer',
          category: TemplateCategory.FLYER,
          fields: [
            {
              key: 'headline',
              label: 'Headline',
              fieldType: TemplateFieldType.TEXT,
            },
            {
              key: 'headline',
              label: 'Headline again',
              fieldType: TemplateFieldType.TEXT,
            },
          ],
        }),
      ).toThrow(BadRequestException);
      expect(prisma.designTemplate.create).not.toHaveBeenCalled();
    });

    it('creates a template with ordered fields', async () => {
      prisma.designTemplate.create.mockResolvedValue({
        id: 'template-1',
        name: 'Flyer',
      });

      await service.create({
        name: 'Flyer',
        category: TemplateCategory.FLYER,
        fields: [
          {
            key: 'headline',
            label: 'Headline',
            fieldType: TemplateFieldType.TEXT,
            required: true,
          },
          {
            key: 'logo',
            label: 'Logo',
            fieldType: TemplateFieldType.IMAGE,
          },
        ],
      });

      const calls = prisma.designTemplate.create.mock.calls as unknown as Array<
        [
          {
            data: {
              fields: { create: Array<{ key: string; sortOrder: number }> };
            };
          },
        ]
      >;
      expect(calls[0][0].data.fields.create).toEqual([
        expect.objectContaining({ key: 'headline', sortOrder: 0 }),
        expect.objectContaining({ key: 'logo', sortOrder: 1 }),
      ]);
    });
  });

  describe('update', () => {
    it('throws when the template does not exist', async () => {
      prisma.designTemplate.findUnique.mockResolvedValue(null);

      await expect(
        service.update('missing', { name: 'New name' }),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.designTemplate.update).not.toHaveBeenCalled();
    });
  });
});
