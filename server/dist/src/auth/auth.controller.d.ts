import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    login(credentials: LoginDto): Promise<{
        accessToken: string;
        user: {
            sub: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
}
