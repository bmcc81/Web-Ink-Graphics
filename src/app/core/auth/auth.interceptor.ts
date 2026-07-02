import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = inject(AuthService).token();
  return next(
    token && request.url.startsWith('/api/')
      ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      : request,
  );
};
