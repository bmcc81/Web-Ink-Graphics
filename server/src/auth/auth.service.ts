import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { compare } from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

type UserWithOrganizations = Prisma.UserGetPayload<{
  include: {
    organizationMemberships: {
      include: { organization: true };
    };
  };
}>;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login(credentials: LoginDto) {
    const email = credentials.email.trim().toLowerCase();
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        organizationMemberships: {
          include: { organization: true },
          orderBy: { organization: { name: 'asc' } },
        },
      },
    });

    if (!user || !(await compare(credentials.password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    return {
      accessToken: await this.jwt.signAsync(payload),
      user: this.userProfile(user),
    };
  }

  async profile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        organizationMemberships: {
          include: { organization: true },
          orderBy: { organization: { name: 'asc' } },
        },
      },
    });
    if (!user) {
      throw new UnauthorizedException('User no longer exists');
    }
    return this.userProfile(user);
  }

  private userProfile(user: UserWithOrganizations) {
    return {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      organizations: user.organizationMemberships.map((membership) => ({
        id: membership.organization.id,
        name: membership.organization.name,
        slug: membership.organization.slug,
        role: membership.role,
      })),
    };
  }
}
