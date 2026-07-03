import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const portalAuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return (
    auth.authenticated ||
    inject(Router).createUrlTree(['/portal/login'])
  );
};
