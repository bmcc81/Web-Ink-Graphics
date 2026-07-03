import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    login(credentials: LoginDto): Promise<{
        accessToken: string;
        user: {
            sub: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Role;
            organizations: {
                id: string;
                name: string;
                slug: string;
                role: import("@prisma/client").$Enums.OrganizationRole;
            }[];
        };
    }>;
    profile(userId: string): Promise<{
        sub: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        organizations: {
            id: string;
            name: string;
            slug: string;
            role: import("@prisma/client").$Enums.OrganizationRole;
        }[];
    }>;
    private userProfile;
}
