import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

interface InvitationDetails {
  email: string;
  role: string;
  expiresAt: string;
  existingAccount: boolean;
  organization: {
    id: string;
    name: string;
    slug: string;
  };
}

@Component({
  selector: 'app-accept-invitation',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './accept-invitation.html',
  styleUrl: './accept-invitation.scss',
})
export class AcceptInvitation {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  readonly invitation = signal<InvitationDetails | null>(null);
  readonly loading = signal(true);
  readonly submitting = signal(false);
  readonly error = signal('');
  readonly token = this.route.snapshot.queryParamMap.get('token') ?? '';
  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.maxLength(120)]],
    password: ['', [Validators.required, Validators.minLength(12)]],
  });

  constructor() {
    if (!this.token) {
      this.error.set('This invitation link is incomplete.');
      this.loading.set(false);
      return;
    }
    this.http
      .get<InvitationDetails>(
        `/api/invitations/${encodeURIComponent(this.token)}`,
      )
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (invitation) => {
          this.invitation.set(invitation);
          if (!invitation.existingAccount) {
            this.form.controls.name.addValidators([
              Validators.required,
              Validators.minLength(2),
            ]);
            this.form.controls.name.updateValueAndValidity();
          }
        },
        error: () =>
          this.error.set('This invitation has expired or is no longer active.'),
      });
  }

  submit() {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }
    this.error.set('');
    this.submitting.set(true);
    this.http
      .post(`/api/invitations/${encodeURIComponent(this.token)}/accept`, {
        name: this.form.controls.name.value || undefined,
        password: this.form.controls.password.value,
      })
      .pipe(finalize(() => this.submitting.set(false)))
      .subscribe({
        next: () =>
          void this.router.navigate(['/portal/login'], {
            queryParams: {
              email: this.invitation()?.email,
              invited: 'true',
            },
          }),
        error: (response) =>
          this.error.set(
            response.status === 401
              ? 'That password does not match the existing account.'
              : 'We could not accept this invitation. Please try again.',
          ),
      });
  }
}
