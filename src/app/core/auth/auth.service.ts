import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { tap } from 'rxjs';

interface AdminUser {
  sub: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'EDITOR';
}

interface LoginResponse {
  accessToken: string;
  user: AdminUser;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'webink_admin_token';
  readonly token = signal<string | null>(this.readToken());

  get authenticated() {
    return Boolean(this.token());
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>('/api/auth/login', { email, password })
      .pipe(
        tap(({ accessToken }) => {
          this.token.set(accessToken);
          if (isPlatformBrowser(this.platformId)) {
            sessionStorage.setItem(this.storageKey, accessToken);
          }
        }),
      );
  }

  logout() {
    this.token.set(null);
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem(this.storageKey);
    }
  }

  private readToken() {
    return isPlatformBrowser(this.platformId)
      ? sessionStorage.getItem(this.storageKey)
      : null;
  }
}
