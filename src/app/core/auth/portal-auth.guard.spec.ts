import { TestBed } from '@angular/core/testing';
import { provideRouter, UrlTree } from '@angular/router';
import { portalAuthGuard } from './portal-auth.guard';
import { AuthService } from './auth.service';

function runGuard(authenticated: boolean) {
  TestBed.configureTestingModule({
    providers: [provideRouter([]), { provide: AuthService, useValue: { authenticated } }],
  });
  return TestBed.runInInjectionContext(() =>
    portalAuthGuard({} as never, { url: '/portal/some-org' } as never),
  );
}

describe('portalAuthGuard', () => {
  it('allows any authenticated user through regardless of role, since staff need cross-org access', () => {
    expect(runGuard(true)).toBe(true);
  });

  it('redirects an unauthenticated visitor to /portal/login', () => {
    const result = runGuard(false);
    expect(result).toBeInstanceOf(UrlTree);
    expect((result as UrlTree).toString()).toBe('/portal/login');
  });
});
