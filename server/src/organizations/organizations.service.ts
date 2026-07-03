import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrganizationRole, Role } from '@prisma/client';
import { createHash, randomBytes } from 'crypto';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async members(user: AuthUser, organizationId: string) {
    await this.assertCanView(user, organizationId);
    return this.prisma.organizationMembership.findMany({
      where: { organizationId },
      select: {
        id: true,
        role: true,
        createdAt: true,
        user: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { user: { name: 'asc' } },
    });
  }

  async invitations(user: AuthUser, organizationId: string) {
    await this.assertCanManage(user, organizationId);
    return this.prisma.organizationInvitation.findMany({
      where: { organizationId },
      select: {
        id: true,
        email: true,
        role: true,
        expiresAt: true,
        acceptedAt: true,
        revokedAt: true,
        createdAt: true,
        invitedBy: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createInvitation(
    user: AuthUser,
    organizationId: string,
    dto: CreateInvitationDto,
  ) {
    const managerRole = await this.assertCanManage(
      user,
      organizationId,
      dto.role,
    );
    const email = dto.email.trim().toLowerCase();
    const existingMember = await this.prisma.organizationMembership.findFirst({
      where: { organizationId, user: { email } },
      select: { id: true },
    });
    if (existingMember) {
      throw new ConflictException('This user is already a member');
    }

    await this.prisma.organizationInvitation.updateMany({
      where: {
        organizationId,
        email,
        acceptedAt: null,
        revokedAt: null,
      },
      data: { revokedAt: new Date() },
    });

    const token = randomBytes(32).toString('base64url');
    const invitation = await this.prisma.organizationInvitation.create({
      data: {
        email,
        role: dto.role,
        tokenHash: this.tokenHash(token),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        organizationId,
        invitedById: user.id,
      },
      select: {
        id: true,
        email: true,
        role: true,
        expiresAt: true,
        organization: { select: { name: true } },
      },
    });
    const siteUrl = this.config
      .getOrThrow<string>('SITE_URL')
      .replace(/\/+$/, '');

    return {
      ...invitation,
      inviteUrl: `${siteUrl}/accept-invitation?token=${encodeURIComponent(token)}`,
      delivery: 'MANUAL' as const,
      createdByRole: managerRole,
    };
  }

  async revokeInvitation(
    user: AuthUser,
    organizationId: string,
    invitationId: string,
  ) {
    await this.assertCanManage(user, organizationId);
    const result = await this.prisma.organizationInvitation.updateMany({
      where: {
        id: invitationId,
        organizationId,
        acceptedAt: null,
        revokedAt: null,
      },
      data: { revokedAt: new Date() },
    });
    if (!result.count) {
      throw new NotFoundException('Active invitation not found');
    }
    return { revoked: true };
  }

  private async assertCanView(user: AuthUser, organizationId: string) {
    if (this.isStaff(user)) return;
    const membership = await this.prisma.organizationMembership.findUnique({
      where: { userId_organizationId: { userId: user.id, organizationId } },
      select: { id: true },
    });
    if (!membership) throw new NotFoundException('Organization not found');
  }

  private async assertCanManage(
    user: AuthUser,
    organizationId: string,
    invitationRole?: OrganizationRole,
  ) {
    if (this.isStaff(user)) return user.role;
    const membership = await this.prisma.organizationMembership.findUnique({
      where: { userId_organizationId: { userId: user.id, organizationId } },
      select: { role: true },
    });
    if (
      !membership ||
      ![OrganizationRole.OWNER, OrganizationRole.MANAGER].includes(
        membership.role,
      )
    ) {
      throw new ForbiddenException(
        'Only organization owners and managers can manage invitations',
      );
    }
    if (
      membership.role === OrganizationRole.MANAGER &&
      invitationRole &&
      ![
        OrganizationRole.CONTRIBUTOR,
        OrganizationRole.VIEWER,
      ].includes(invitationRole)
    ) {
      throw new ForbiddenException(
        'Managers can only invite contributors and viewers',
      );
    }
    return membership.role;
  }

  private tokenHash(token: string) {
    return createHash('sha256').update(token).digest('hex');
  }

  private isStaff(user: AuthUser) {
    return user.role === Role.ADMIN || user.role === Role.EDITOR;
  }
}
