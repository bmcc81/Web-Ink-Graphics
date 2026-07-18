import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { authInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

describe('authInterceptor', () => {
  function setup(token: string | null) {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
        { provide: AuthService, useValue: { token: signal(token) } },
      ],
    });
    return {
      http: TestBed.inject(HttpClient),
      controller: TestBed.inject(HttpTestingController),
    };
  }

  it('attaches a Bearer token to requests under /api/ when a token is present', () => {
    const { http, controller } = setup('the-token');
    http.get('/api/portfolio').subscribe();
    const req = controller.expectOne('/api/portfolio');
    expect(req.request.headers.get('Authorization')).toBe('Bearer the-token');
  });

  it('does not attach an Authorization header when there is no token', () => {
    const { http, controller } = setup(null);
    http.get('/api/portfolio').subscribe();
    const req = controller.expectOne('/api/portfolio');
    expect(req.request.headers.has('Authorization')).toBe(false);
  });

  it('does not attach the token to requests outside /api/, even when one is present', () => {
    const { http, controller } = setup('the-token');
    http.get('https://fonts.googleapis.com/css2').subscribe();
    const req = controller.expectOne('https://fonts.googleapis.com/css2');
    expect(req.request.headers.has('Authorization')).toBe(false);
  });
});
