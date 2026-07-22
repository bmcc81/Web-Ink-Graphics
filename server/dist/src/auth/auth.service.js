var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hashSync } from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service.js';
const DUMMY_PASSWORD_HASH = hashSync('not-a-real-password', 12);
let AuthService = class AuthService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async login(credentials) {
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
        const passwordMatches = await compare(credentials.password, user?.passwordHash ?? DUMMY_PASSWORD_HASH);
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
    async profile(userId) {
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
    userProfile(user) {
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
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map