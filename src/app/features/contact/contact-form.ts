import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ApiUrlService } from '../../core/api/api-url.service';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(ApiUrlService);
  readonly i18n = inject(LanguageService);
  readonly submitting = signal(false);
  readonly submitted = signal(false);
  readonly error = signal('');
  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    company: ['', Validators.maxLength(120)],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(180)]],
    phone: ['', Validators.maxLength(40)],
    service: ['', Validators.required],
    budget: [''],
    launchDate: [''],
    website: [''],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(4000)]],
    fax: [''],
  });

  submit() {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.error.set('');
    this.submitting.set(true);
    const raw = this.form.getRawValue();
    const payload = Object.fromEntries(
      Object.entries({ ...raw, source: 'homepage-contact-form' }).filter(
        ([, value]) => value !== '',
      ),
    );

    this.http
      .post(this.apiUrl.url('contact'), payload)
      .pipe(finalize(() => this.submitting.set(false)))
      .subscribe({
        next: () => {
          this.submitted.set(true);
          this.form.reset();
        },
        error: (response) =>
          this.error.set(
            response.status === 429
              ? (this.i18n.french ? 'Trop de demandes ont été envoyées. Attendez une minute avant de réessayer.' : 'Too many requests were submitted. Please wait a minute and try again.')
              : (this.i18n.french ? 'Votre message n’a pas pu être envoyé. Réessayez ou écrivez-nous directement.' : 'Your message could not be sent. Please try again or email us directly.'),
          ),
      });
  }
}
