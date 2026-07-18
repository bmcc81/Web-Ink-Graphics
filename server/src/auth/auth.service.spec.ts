import { UnauthorizedException } from '@nestjs/common';
import { Role } from '@prisma/client';
import { hash } from 'bcryptjs';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  const prisma = {
    user: { findUnique: jest.fn() },
  };
  const jwt = { signAsync: jest.fn() };
  let service: AuthService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new AuthService(prisma as never, jwt as never);
  });

  it('logs in with the correct email and password', async () => {
    const passwordHash = await hash('the correct password', 4);
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-1',
      email: 'owner@example.com',
      name: 'Owner',
      role: Role.CUSTOMER,
      passwordHash,
      organizationMemberships: [],
    });
    jwt.signAsync.mockResolvedValue('signed-token');

    const result = await service.login({
      email: 'Owner@Example.com',
      password: 'the correct password',
    });

    expect(result.accessToken).toBe('signed-token');
    expect(result.user).toMatchObject({
      sub: 'user-1',
      email: 'owner@example.com',
    });
    expect(jwt.signAsync).toHaveBeenCalledWith(
      expect.objectContaining({ sub: 'user-1', role: Role.CUSTOMER }),
    );
  });

  it('rejects the wrong password for a known email', async () => {
    const passwordHash = await hash('the correct password', 4);
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-1',
      email: 'owner@example.com',
      name: 'Owner',
      role: Role.CUSTOMER,
      passwordHash,
      organizationMemberships: [],
    });

    await expect(
      service.login({ email: 'owner@example.com', password: 'wrong password' }),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('rejects an email with no account, with the same error as a wrong password', async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    await expect(
      service.login({
        email: 'nobody@example.com',
        password: 'whatever password',
      }),
    ).rejects.toThrow(UnauthorizedException);
  });
});
