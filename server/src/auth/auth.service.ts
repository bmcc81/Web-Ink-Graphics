import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '../generated/prisma/client.js';
import { compare, hashSync } from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoginDto } from './dto/login.dto.js';

type UserWithOrganizations = Prisma.UserGetPayload<{
  include: {
    organizationMemberships: {
      include: { organization: true };
    };
  };
}>;

// Compared against when no account matches the submitted email, so a login
// attempt for an unknown address takes the same bcrypt-compare time as one
// for a known address with the wrong password - otherwise response timing
// would let an attacker enumerate which emails have an account.
const DUMMY_PASSWORD_HASH = hashSync('not-a-real-password', 12);

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

    const passwordMatches = await compare(
      credentials.password,
      user?.passwordHash ?? DUMMY_PASSWORD_HASH,
    );
    if (!user || !passwordMatches) {
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
