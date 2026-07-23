import { TestBed } from '@angular/core/testing';
import { provideRouter, UrlTree } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';

function runGuard(auth: { authenticated: boolean; role: () => string | null }) {
  TestBed.configureTestingModule({
    providers: [provideRouter([]), { provide: AuthService, useValue: auth }],
  });
  return TestBed.runInInjectionContext(() =>
    authGuard({} as never, { url: '/admin' } as never),
  );
}

describe('authGuard', () => {
  it('allows an authenticated ADMIN through', () => {
    const result = runGuard({ authenticated: true, role: () => 'ADMIN' });
    expect(result).toBe(true);
  });

  it('allows an authenticated EDITOR through', () => {
    const result = runGuard({ authenticated: true, role: () => 'EDITOR' });
    expect(result).toBe(true);
  });

  it('redirects an authenticated CUSTOMER to /admin/login', () => {
    const result = runGuard({ authenticated: true, role: () => 'CUSTOMER' });
    expect(result).toBeInstanceOf(UrlTree);
    expect((result as UrlTree).toString()).toBe('/admin/login');
  });

  it('redirects an unauthenticated visitor to /admin/login', () => {
    const result = runGuard({ authenticated: false, role: () => null });
    expect(result).toBeInstanceOf(UrlTree);
    expect((result as UrlTree).toString()).toBe('/admin/login');
  });
});
