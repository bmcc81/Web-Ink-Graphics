import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrganizationRole, Role } from '@prisma/client';
import { compare, hash } from 'bcryptjs';
import { createHash, randomBytes } from 'crypto';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { AcceptInvitationDto } from './dto/accept-invitation.dto';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto';

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

  async inspectInvitation(token: string) {
    const invitation = await this.activeInvitation(token);
    const existingUser = await this.prisma.user.findUnique({
      where: { email: invitation.email },
      select: { id: true },
    });
    return {
      email: invitation.email,
      role: invitation.role,
      expiresAt: invitation.expiresAt,
      organization: invitation.organization,
      existingAccount: Boolean(existingUser),
    };
  }

  async acceptInvitation(token: string, dto: AcceptInvitationDto) {
    const invitation = await this.activeInvitation(token);
    const existingUser = await this.prisma.user.findUnique({
      where: { email: invitation.email },
      select: {
        id: true,
        passwordHash: true,
      },
    });

    if (
      existingUser &&
      !(await compare(dto.password, existingUser.passwordHash))
    ) {
      throw new UnauthorizedException(
        'Use the password for the existing account associated with this email',
      );
    }
    const name = dto.name?.trim();
    if (!existingUser && (!name || name.length < 2)) {
      throw new BadRequestException(
        'A name is required when creating a new account',
      );
    }

    const passwordHash = existingUser
      ? undefined
      : await hash(dto.password, 12);
    const result = await this.prisma.$transaction(async (transaction) => {
      const accepted = await transaction.organizationInvitation.updateMany({
        where: {
          id: invitation.id,
          acceptedAt: null,
          revokedAt: null,
          expiresAt: { gt: new Date() },
        },
        data: { acceptedAt: new Date() },
      });
      if (!accepted.count) {
        throw new ConflictException('This invitation is no longer active');
      }

      const account =
        existingUser ??
        (await transaction.user.create({
          data: {
            email: invitation.email,
            name: name!,
            passwordHash: passwordHash!,
            role: Role.CUSTOMER,
          },
          select: { id: true },
        }));

      await transaction.organizationMembership.upsert({
        where: {
          userId_organizationId: {
            userId: account.id,
            organizationId: invitation.organizationId,
          },
        },
        update: { role: invitation.role },
        create: {
          userId: account.id,
          organizationId: invitation.organizationId,
          role: invitation.role,
        },
      });
      return account;
    });

    return {
      accepted: true,
      email: invitation.email,
      organization: invitation.organization,
      userId: result.id,
    };
  }

  async updateMemberRole(
    user: AuthUser,
    organizationId: string,
    membershipId: string,
    dto: UpdateMemberRoleDto,
  ) {
    const actingRole = await this.assertCanManage(user, organizationId);
    return this.prisma.$transaction(async (transaction) => {
      const target = await transaction.organizationMembership.findFirst({
        where: { id: membershipId, organizationId },
        select: { id: true, role: true },
      });
      if (!target) throw new NotFoundException('Membership not found');

      this.assertManagerScope(actingRole, target.role, dto.role);
      await this.assertRemainingOwner(
        transaction,
        organizationId,
        membershipId,
        target.role,
        dto.role,
      );

      return transaction.organizationMembership.update({
        where: { id: membershipId },
        data: { role: dto.role },
        select: {
          id: true,
          role: true,
          user: { select: { id: true, name: true, email: true } },
        },
      });
    });
  }

  async removeMember(
    user: AuthUser,
    organizationId: string,
    membershipId: string,
  ) {
    const actingRole = await this.assertCanManage(user, organizationId);
    return this.prisma.$transaction(async (transaction) => {
      const target = await transaction.organizationMembership.findFirst({
        where: { id: membershipId, organizationId },
        select: { id: true, role: true },
      });
      if (!target) throw new NotFoundException('Membership not found');

      this.assertManagerScope(actingRole, target.role);
      await this.assertRemainingOwner(
        transaction,
        organizationId,
        membershipId,
        target.role,
        undefined,
      );

      await transaction.organizationMembership.delete({
        where: { id: membershipId },
      });
      return { removed: true };
    });
  }

  private assertManagerScope(
    actingRole: OrganizationRole | Role,
    ...rolesInvolved: OrganizationRole[]
  ) {
    if (actingRole !== OrganizationRole.MANAGER) return;
    const restricted = new Set<OrganizationRole>([
      OrganizationRole.OWNER,
      OrganizationRole.MANAGER,
      OrganizationRole.WEBINK_SPECIALIST,
    ]);
    if (rolesInvolved.some((role) => restricted.has(role))) {
      throw new ForbiddenException(
        'Managers can only manage contributor and viewer memberships',
      );
    }
  }

  private async assertRemainingOwner(
    transaction: Pick<PrismaService, 'organizationMembership'>,
    organizationId: string,
    membershipId: string,
    currentRole: OrganizationRole,
    nextRole: OrganizationRole | undefined,
  ) {
    if (
      currentRole !== OrganizationRole.OWNER ||
      nextRole === OrganizationRole.OWNER
    ) {
      return;
    }
    const remainingOwners = await transaction.organizationMembership.count({
      where: {
        organizationId,
        role: OrganizationRole.OWNER,
        id: { not: membershipId },
      },
    });
    if (remainingOwners === 0) {
      throw new BadRequestException(
        'Organizations must keep at least one owner',
      );
    }
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
      !new Set<OrganizationRole>([
        OrganizationRole.OWNER,
        OrganizationRole.MANAGER,
      ]).has(membership.role)
    ) {
      throw new ForbiddenException(
        'Only organization owners and managers can manage invitations',
      );
    }
    if (
      membership.role === OrganizationRole.MANAGER &&
      invitationRole &&
      !new Set<OrganizationRole>([
        OrganizationRole.CONTRIBUTOR,
        OrganizationRole.VIEWER,
      ]).has(invitationRole)
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

  private async activeInvitation(token: string) {
    if (!token || token.length < 32 || token.length > 256) {
      throw new NotFoundException('Invitation not found');
    }
    const invitation = await this.prisma.organizationInvitation.findUnique({
      where: { tokenHash: this.tokenHash(token) },
      select: {
        id: true,
        email: true,
        role: true,
        expiresAt: true,
        acceptedAt: true,
        revokedAt: true,
        organizationId: true,
        organization: { select: { id: true, name: true, slug: true } },
      },
    });
    if (
      !invitation ||
      invitation.acceptedAt ||
      invitation.revokedAt ||
      invitation.expiresAt <= new Date()
    ) {
      throw new NotFoundException('Invitation not found or no longer active');
    }
    return invitation;
  }

  private isStaff(user: AuthUser) {
    return user.role === Role.ADMIN || user.role === Role.EDITOR;
  }
}
