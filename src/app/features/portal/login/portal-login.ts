import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-portal-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './portal-login.html',
  styleUrl: './portal-login.scss',
})
export class PortalLogin {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);
  readonly submitting = signal(false);
  readonly error = signal('');
  readonly invitationAccepted =
    this.route.snapshot.queryParamMap.get('invited') === 'true';
  readonly form = this.formBuilder.nonNullable.group({
    email: [
      this.route.snapshot.queryParamMap.get('email') ?? '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required, Validators.minLength(12)]],
  });

  submit() {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }
    this.error.set('');
    this.submitting.set(true);
    const { email, password } = this.form.getRawValue();
    this.auth
      .login(email, password)
      .pipe(finalize(() => this.submitting.set(false)))
      .subscribe({
        next: ({ user }) =>
          void this.router.navigate([
            user.role === 'CUSTOMER' ? '/portal' : '/admin',
          ]),
        error: () => this.error.set('The email or password is incorrect.'),
      });
  }
}
