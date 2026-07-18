import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthenticatedUser, AuthService } from './auth.service';

const user: AuthenticatedUser = {
  sub: 'user-1',
  email: 'owner@example.com',
  name: 'Owner',
  role: 'CUSTOMER',
  organizations: [],
};

function fakeToken(payload: Record<string, unknown>): string {
  const base64url = (value: object) =>
    btoa(JSON.stringify(value)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return `${base64url({ alg: 'HS256' })}.${base64url(payload)}.fake-signature`;
}

describe('AuthService', () => {
  const storageKey = 'webink_admin_token';

  afterEach(() => {
    sessionStorage.removeItem(storageKey);
  });

  function setup() {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    return {
      service: TestBed.inject(AuthService),
      http: TestBed.inject(HttpTestingController),
    };
  }

  it('is not authenticated with no stored token', () => {
    const { service } = setup();
    expect(service.authenticated).toBe(false);
    expect(service.token()).toBeNull();
  });

  it('restores a token already present in sessionStorage', () => {
    sessionStorage.setItem(storageKey, 'existing-token');
    const { service } = setup();
    expect(service.authenticated).toBe(true);
    expect(service.token()).toBe('existing-token');
  });

  it('login() stores the token and user, and persists the token to sessionStorage', () => {
    const { service, http } = setup();

    service.login('owner@example.com', 'the correct password').subscribe();

    const req = http.expectOne('/api/auth/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      email: 'owner@example.com',
      password: 'the correct password',
    });
    req.flush({ accessToken: 'new-token', user });

    expect(service.authenticated).toBe(true);
    expect(service.token()).toBe('new-token');
    expect(service.user()).toEqual(user);
    expect(sessionStorage.getItem(storageKey)).toBe('new-token');
  });

  it('logout() clears the token, user, and sessionStorage', () => {
    const { service, http } = setup();
    service.login('owner@example.com', 'the correct password').subscribe();
    http.expectOne('/api/auth/login').flush({ accessToken: 'new-token', user });

    service.logout();

    expect(service.authenticated).toBe(false);
    expect(service.token()).toBeNull();
    expect(service.user()).toBeNull();
    expect(sessionStorage.getItem(storageKey)).toBeNull();
  });

  it('profile() fetches and stores the current user', () => {
    const { service, http } = setup();

    service.profile().subscribe();

    const req = http.expectOne('/api/auth/me');
    expect(req.request.method).toBe('GET');
    req.flush(user);

    expect(service.user()).toEqual(user);
  });

  it('role() decodes the role claim from the token without waiting on profile()', () => {
    sessionStorage.setItem(storageKey, fakeToken({ sub: 'user-1', role: 'ADMIN' }));
    const { service } = setup();
    expect(service.role()).toBe('ADMIN');
  });

  it('role() is null with no token', () => {
    const { service } = setup();
    expect(service.role()).toBeNull();
  });

  it('role() is null for a malformed token instead of throwing', () => {
    sessionStorage.setItem(storageKey, 'not-a-jwt');
    const { service } = setup();
    expect(service.role()).toBeNull();
  });

  it('role() is null when the payload role claim is not a recognized role', () => {
    sessionStorage.setItem(storageKey, fakeToken({ sub: 'user-1', role: 'SUPERUSER' }));
    const { service } = setup();
    expect(service.role()).toBeNull();
  });
});
