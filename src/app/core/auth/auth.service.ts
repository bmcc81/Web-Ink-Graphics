import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { tap } from 'rxjs';

export interface OrganizationMembershipSummary {
  id: string;
  name: string;
  slug: string;
  role: 'OWNER' | 'MANAGER' | 'CONTRIBUTOR' | 'VIEWER' | 'WEBINK_SPECIALIST';
}

export type OrganizationRole = OrganizationMembershipSummary['role'];

export interface AuthenticatedUser {
  sub: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'EDITOR' | 'CUSTOMER';
  organizations: OrganizationMembershipSummary[];
}

interface LoginResponse {
  accessToken: string;
  user: AuthenticatedUser;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'webink_admin_token';
  readonly token = signal<string | null>(this.readToken());
  readonly user = signal<AuthenticatedUser | null>(null);
  /**
   * Decoded (not signature-verified) from the token itself, since `user()`
   * is only populated lazily per-page via profile() and isn't reliably set
   * yet when route guards run (e.g. right after a page refresh). This is
   * only ever used for client-side routing/UI decisions - every real
   * request still carries the token for the backend to verify properly.
   */
  readonly role = computed(() => this.decodeRole(this.token()));

  get authenticated() {
    return Boolean(this.token());
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>('/api/auth/login', { email, password })
      .pipe(
        tap(({ accessToken, user }) => {
          this.token.set(accessToken);
          this.user.set(user);
          if (isPlatformBrowser(this.platformId)) {
            sessionStorage.setItem(this.storageKey, accessToken);
          }
        }),
      );
  }

  profile() {
    return this.http
      .get<AuthenticatedUser>('/api/auth/me')
      .pipe(tap((user) => this.user.set(user)));
  }

  logout() {
    this.token.set(null);
    this.user.set(null);
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem(this.storageKey);
    }
  }

  private readToken() {
    return isPlatformBrowser(this.platformId)
      ? sessionStorage.getItem(this.storageKey)
      : null;
  }

  private decodeRole(token: string | null): AuthenticatedUser['role'] | null {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      const role = (JSON.parse(json) as { role?: unknown }).role;
      return role === 'ADMIN' || role === 'EDITOR' || role === 'CUSTOMER' ? role : null;
    } catch {
      return null;
    }
  }
}
