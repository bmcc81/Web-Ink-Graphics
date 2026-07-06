import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

interface BrandKit {
  logoUrl: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  accentColor: string | null;
  fontFamily: string | null;
}

interface UploadUrlResponse {
  uploadUrl: string;
  publicUrl?: string;
  headers: Record<string, string>;
}

@Component({
  selector: 'app-portal-brand-kit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './portal-brand-kit.html',
  styleUrl: './portal-brand-kit.scss',
})
export class PortalBrandKit {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);

  readonly organizationId = this.route.snapshot.paramMap.get('organizationId')!;
  readonly loading = signal(true);
  readonly error = signal('');
  readonly saving = signal(false);
  readonly saveError = signal('');
  readonly uploading = signal(false);
  readonly uploadError = signal('');
  readonly previewUrl = signal<string | null>(null);

  readonly canManage = computed(() => {
    const user = this.auth.user();
    if (!user) return false;
    if (user.role === 'ADMIN' || user.role === 'EDITOR') return true;
    const membership = user.organizations.find(
      (organization) => organization.id === this.organizationId,
    );
    return membership?.role === 'OWNER' || membership?.role === 'MANAGER';
  });

  readonly form = this.formBuilder.nonNullable.group({
    logoUrl: [''],
    primaryColor: ['#5b3df6'],
    secondaryColor: ['#111827'],
    accentColor: ['#f97316'],
    fontFamily: [''],
  });

  constructor() {
    if (!this.auth.user()) {
      this.auth.profile().subscribe({
        next: () => this.load(),
        error: () => this.load(),
      });
    } else {
      this.load();
    }
  }

  private load() {
    this.loading.set(true);
    this.error.set('');
    this.http
      .get<BrandKit | null>(
        `/api/organizations/${this.organizationId}/brand-kit`,
      )
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (brandKit) => {
          if (brandKit) {
            this.form.reset({
              logoUrl: brandKit.logoUrl ?? '',
              primaryColor: brandKit.primaryColor ?? '#5b3df6',
              secondaryColor: brandKit.secondaryColor ?? '#111827',
              accentColor: brandKit.accentColor ?? '#f97316',
              fontFamily: brandKit.fontFamily ?? '',
            });
            this.previewUrl.set(brandKit.logoUrl);
          }
        },
        error: () => this.error.set('The brand kit could not be loaded.'),
      });
  }

  uploadLogo(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
    if (!allowedTypes.includes(file.type)) {
      this.uploadError.set('Choose a JPEG, PNG, WebP or AVIF image.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      this.uploadError.set('Images must be 10 MB or smaller.');
      return;
    }

    this.uploadError.set('');
    this.uploading.set(true);
    this.http
      .post<UploadUrlResponse>('/api/media/upload-url', {
        fileName: file.name,
        contentType: file.type,
        fileSize: file.size,
        purpose: 'ASSET',
        organizationId: this.organizationId,
      })
      .subscribe({
        next: (upload) => {
          this.http
            .put(upload.uploadUrl, file, {
              headers: upload.headers,
              responseType: 'text',
            })
            .pipe(finalize(() => this.uploading.set(false)))
            .subscribe({
              next: () => {
                this.form.controls.logoUrl.setValue(upload.publicUrl ?? '');
                this.previewUrl.set(upload.publicUrl ?? null);
              },
              error: () =>
                this.uploadError.set('The logo upload failed.'),
            });
        },
        error: () => {
          this.uploading.set(false);
          this.uploadError.set('An upload URL could not be created.');
        },
      });
  }

  save() {
    this.saveError.set('');
    this.saving.set(true);
    const raw = this.form.getRawValue();
    this.http
      .put<BrandKit>(`/api/organizations/${this.organizationId}/brand-kit`, {
        logoUrl: raw.logoUrl || undefined,
        primaryColor: raw.primaryColor || undefined,
        secondaryColor: raw.secondaryColor || undefined,
        accentColor: raw.accentColor || undefined,
        fontFamily: raw.fontFamily || undefined,
      })
      .pipe(finalize(() => this.saving.set(false)))
      .subscribe({
        next: () => {},
        error: (response) =>
          this.saveError.set(
            response.error?.message ?? 'The brand kit could not be saved.',
          ),
      });
  }
}
