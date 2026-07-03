import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import {
  AuthenticatedUser,
  AuthService,
} from '../../../core/auth/auth.service';

@Component({
  selector: 'app-portal-dashboard',
  imports: [RouterLink],
  templateUrl: './portal-dashboard.html',
  styleUrl: './portal-dashboard.scss',
})
export class PortalDashboard {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly user = signal<AuthenticatedUser | null>(this.auth.user());
  readonly loading = signal(!this.user());
  readonly error = signal('');

  constructor() {
    if (!this.user()) {
      this.auth
        .profile()
        .pipe(finalize(() => this.loading.set(false)))
        .subscribe({
          next: (user) => this.user.set(user),
          error: () => {
            this.auth.logout();
            void this.router.navigate(['/portal/login']);
          },
        });
    }
  }

  logout() {
    this.auth.logout();
    void this.router.navigate(['/portal/login']);
  }
}
