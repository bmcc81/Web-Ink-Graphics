import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize, forkJoin } from 'rxjs';

interface Category {
  id: string;
  slug: string;
  nameEn: string;
  nameFr: string;
}

interface Translation {
  locale: 'EN' | 'FR';
  title: string;
  summary: string;
  challenge?: string;
  solution?: string;
  results?: string;
  seoTitle?: string;
  metaDescription?: string;
}

interface ProjectImage {
  url: string;
  altTextEn: string;
  altTextFr?: string;
  isCover: boolean;
  sortOrder: number;
}

interface PortfolioProject {
  slug: string;
  clientName?: string;
  projectUrl?: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  featured: boolean;
  displayOrder: number;
  completedAt?: string;
  translations: Translation[];
  images: ProjectImage[];
  categories: Category[];
}

interface UploadUrlResponse {
  uploadUrl: string;
  publicUrl: string;
  headers: Record<string, string>;
}

@Component({
  selector: 'app-project-editor',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './project-editor.html',
  styleUrl: './project-editor.scss',
})
export class ProjectEditor {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly originalSlug = this.route.snapshot.paramMap.get('slug');
  readonly editing = Boolean(this.originalSlug);
  readonly loading = signal(this.editing);
  readonly saving = signal(false);
  readonly archiving = signal(false);
  readonly uploading = signal(false);
  readonly uploadError = signal('');
  readonly previewUrl = signal('');
  readonly error = signal('');
  readonly categories = signal<Category[]>([]);

  readonly form = this.formBuilder.nonNullable.group({
    slug: [
      '',
      [
        Validators.required,
        Validators.maxLength(120),
        Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      ],
    ],
    clientName: ['', Validators.maxLength(120)],
    projectUrl: [''],
    status: ['DRAFT' as PortfolioProject['status'], Validators.required],
    featured: [false],
    displayOrder: [0, [Validators.required, Validators.min(0)]],
    completedAt: [''],
    categoryIds: [[] as string[]],
    coverUrl: [''],
    coverAltEn: [''],
    coverAltFr: [''],
    en: this.translationGroup(true),
    fr: this.translationGroup(false),
  });

  constructor() {
    const categoriesRequest = this.http.get<Category[]>('/api/portfolio/admin/categories');

    if (this.originalSlug) {
      forkJoin({
        categories: categoriesRequest,
        project: this.http.get<PortfolioProject>(
          `/api/portfolio/admin/${encodeURIComponent(this.originalSlug)}`,
        ),
      }).subscribe({
        next: ({ categories, project }) => {
          this.categories.set(categories);
          this.populate(project);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('The project could not be loaded.');
          this.loading.set(false);
        },
      });
    } else {
      categoriesRequest.subscribe({
        next: (categories) => this.categories.set(categories),
        error: () => this.error.set('Project categories could not be loaded.'),
      });
    }
  }

  save() {
    const publishingIssues = this.publishingIssues();
    if (
      this.form.controls.status.value === 'PUBLISHED' &&
      publishingIssues.length
    ) {
      this.form.markAllAsTouched();
      this.error.set(`Cannot publish: ${publishingIssues.join(' ')}`);
      return;
    }

    if (this.hasPartialFrenchCore()) {
      this.form.markAllAsTouched();
      this.error.set('French title and summary must be completed together.');
      return;
    }

    if (this.form.invalid || this.saving()) {
      this.form.markAllAsTouched();
      this.error.set('Review the highlighted required fields.');
      return;
    }

    this.error.set('');
    this.saving.set(true);
    const payload = this.toPayload();
    const request = this.originalSlug
      ? this.http.patch(
          `/api/portfolio/${encodeURIComponent(this.originalSlug)}`,
          payload,
        )
      : this.http.post('/api/portfolio', payload);

    request.pipe(finalize(() => this.saving.set(false))).subscribe({
      next: () => void this.router.navigate(['/admin']),
      error: (response) =>
        this.error.set(
          response.status === 409
            ? 'That project slug is already in use.'
            : 'The project could not be saved. Check the fields and try again.',
        ),
    });
  }

  archive() {
    if (!this.originalSlug || this.archiving()) {
      return;
    }

    this.archiving.set(true);
    this.http
      .delete(`/api/portfolio/${encodeURIComponent(this.originalSlug)}`)
      .pipe(finalize(() => this.archiving.set(false)))
      .subscribe({
        next: () => void this.router.navigate(['/admin']),
        error: () => this.error.set('The project could not be archived.'),
      });
  }

  uploadImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';

    if (!file) {
      return;
    }

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
                this.form.controls.coverUrl.setValue(upload.publicUrl);
                this.previewUrl.set(upload.publicUrl);
              },
              error: () =>
                this.uploadError.set(
                  'The image upload failed. Check the storage CORS configuration.',
                ),
            });
        },
        error: () => {
          this.uploading.set(false);
          this.uploadError.set('An upload URL could not be created.');
        },
      });
  }

  publishingIssues(): string[] {
    const value = this.form.getRawValue();
    const issues: string[] = [];

    if (value.en.title.trim().length < 2 || value.en.summary.trim().length < 10) {
      issues.push('Complete the English title and summary.');
    }
    if (value.fr.title.trim().length < 2 || value.fr.summary.trim().length < 10) {
      issues.push('Complete the French title and summary.');
    }
    if (value.coverUrl && !value.coverAltEn.trim()) {
      issues.push('Add English cover alt text.');
    }
    if (value.coverUrl && !value.coverAltFr.trim()) {
      issues.push('Add French cover alt text.');
    }

    return issues;
  }

  translationCoreComplete(language: 'en' | 'fr') {
    const translation = this.form.controls[language].getRawValue();
    return (
      translation.title.trim().length >= 2 &&
      translation.summary.trim().length >= 10
    );
  }

  seoComplete(language: 'en' | 'fr') {
    const translation = this.form.controls[language].getRawValue();
    return Boolean(
      translation.seoTitle.trim() && translation.metaDescription.trim(),
    );
  }

  altTextComplete(language: 'en' | 'fr') {
    const value = this.form.getRawValue();
    if (!value.coverUrl) {
      return true;
    }
    return Boolean(
      (language === 'en' ? value.coverAltEn : value.coverAltFr).trim(),
    );
  }

  private hasPartialFrenchCore() {
    const translation = this.form.controls.fr.getRawValue();
    return Boolean(translation.title.trim()) !== Boolean(translation.summary.trim());
  }

  private translationGroup(required: boolean) {
    const titleValidators = [
      Validators.minLength(2),
      Validators.maxLength(120),
    ];
    const summaryValidators = [
      Validators.minLength(10),
      Validators.maxLength(320),
    ];
    if (required) {
      titleValidators.unshift(Validators.required);
      summaryValidators.unshift(Validators.required);
    }

    return this.formBuilder.nonNullable.group({
      title: ['', titleValidators],
      summary: ['', summaryValidators],
      challenge: [''],
      solution: [''],
      results: [''],
      seoTitle: ['', Validators.maxLength(70)],
      metaDescription: ['', Validators.maxLength(170)],
    });
  }

  private populate(project: PortfolioProject) {
    const en = project.translations.find((item) => item.locale === 'EN');
    const fr = project.translations.find((item) => item.locale === 'FR');
    const cover = project.images.find((image) => image.isCover) ?? project.images[0];

    this.form.patchValue({
      slug: project.slug,
      clientName: project.clientName ?? '',
      projectUrl: project.projectUrl ?? '',
      status: project.status,
      featured: project.featured,
      displayOrder: project.displayOrder,
      completedAt: project.completedAt?.slice(0, 10) ?? '',
      categoryIds: project.categories.map((category) => category.id),
      coverUrl: cover?.url ?? '',
      coverAltEn: cover?.altTextEn ?? '',
      coverAltFr: cover?.altTextFr ?? '',
      en,
      fr,
    });
    this.previewUrl.set(cover?.url ?? '');
  }

  private toPayload() {
    const value = this.form.getRawValue();
    const translations = [
      { locale: 'EN', ...value.en },
      ...(value.fr.title && value.fr.summary ? [{ locale: 'FR', ...value.fr }] : []),
    ];

    return {
      slug: value.slug,
      clientName: value.clientName || undefined,
      projectUrl: value.projectUrl || undefined,
      status: value.status,
      featured: value.featured,
      displayOrder: value.displayOrder,
      completedAt: value.completedAt
        ? new Date(`${value.completedAt}T12:00:00Z`).toISOString()
        : undefined,
      categoryIds: value.categoryIds,
      translations,
      images: value.coverUrl
        ? [
            {
              url: value.coverUrl,
              altTextEn: value.coverAltEn,
              altTextFr: value.coverAltFr || undefined,
              isCover: true,
              sortOrder: 0,
            },
          ]
        : [],
    };
  }
}
