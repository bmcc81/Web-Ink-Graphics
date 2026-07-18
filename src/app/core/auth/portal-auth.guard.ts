import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

// Intentionally role-agnostic: WebInk staff (ADMIN/EDITOR) legitimately
// access any organization's portal to help/manage on a customer's behalf,
// mirroring the backend's isStaff() bypass on every org-scoped endpoint.
// Per-organization membership for CUSTOMER-role users is enforced by the
// backend, not here - this guard only gates "is logged in at all".
export const portalAuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return (
    auth.authenticated ||
    inject(Router).createUrlTree(['/portal/login'])
  );
};
