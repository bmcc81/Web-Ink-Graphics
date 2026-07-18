import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

// Only WebInk staff (ADMIN/EDITOR) belong on admin routes - unlike the
// portal guard, there's no legitimate reason for a CUSTOMER-role token to
// render this UI. The backend re-checks this on every request regardless;
// this only prevents a misdirected customer login from landing on a broken
// admin shell whose API calls would all 403.
const staffRoles = new Set(['ADMIN', 'EDITOR']);

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const role = auth.role();
  return (
    (auth.authenticated && role !== null && staffRoles.has(role)) ||
    inject(Router).createUrlTree(['/admin/login'])
  );
};
