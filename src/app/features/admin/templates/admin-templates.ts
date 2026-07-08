import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

type TemplateCategory = 'FLYER' | 'SOCIAL_GRAPHIC' | 'NEWSLETTER' | 'AD';
type TemplateFieldType = 'TEXT' | 'IMAGE' | 'COLOR' | 'CTA_TEXT' | 'CTA_URL';

interface TemplateField {
  id: string;
  key: string;
  label: string;
  fieldType: TemplateFieldType;
  required: boolean;
  maxLength: number | null;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  color: string | null;
}

interface DesignTemplate {
  id: string;
  name: string;
  description: string | null;
  category: TemplateCategory;
  previewImageUrl: string | null;
  isPublished: boolean;
  canvasWidth: number;
  canvasHeight: number;
  fields: TemplateField[];
  createdAt: string;
}

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  'FLYER',
  'SOCIAL_GRAPHIC',
  'NEWSLETTER',
  'AD',
];
export const TEMPLATE_FIELD_TYPES: TemplateFieldType[] = [
  'TEXT',
  'IMAGE',
  'COLOR',
  'CTA_TEXT',
  'CTA_URL',
];

@Component({
  selector: 'app-admin-templates',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin-templates.html',
  styleUrl: './admin-templates.scss',
})
export class AdminTemplates {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly categories = TEMPLATE_CATEGORIES;
  readonly fieldTypes = TEMPLATE_FIELD_TYPES;

  readonly templates = signal<DesignTemplate[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly creating = signal(false);
  readonly createError = signal('');
  readonly showForm = signal(false);

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    category: ['FLYER' as TemplateCategory, [Validators.required]],
    previewImageUrl: [''],
    canvasWidth: [1200, [Validators.required, Validators.min(100)]],
    canvasHeight: [1200, [Validators.required, Validators.min(100)]],
    fields: this.formBuilder.array([this.fieldGroup()]),
  });

  get fields() {
    return this.form.controls.fields as FormArray;
  }

  constructor() {
    this.load();
  }

  private fieldGroup() {
    return this.formBuilder.nonNullable.group({
      key: ['', [Validators.required, Validators.pattern(/^[a-z][a-z0-9_]*$/)]],
      label: ['', [Validators.required]],
      fieldType: ['TEXT' as TemplateFieldType, [Validators.required]],
      required: [false],
      maxLength: [''],
      x: [0, [Validators.required, Validators.min(0)]],
      y: [0, [Validators.required, Validators.min(0)]],
      width: [200, [Validators.required, Validators.min(1)]],
      height: [60, [Validators.required, Validators.min(1)]],
      fontSize: [24, [Validators.required, Validators.min(1)]],
      color: [''],
    });
  }

  addField() {
    this.fields.push(this.fieldGroup());
  }

  removeField(index: number) {
    if (this.fields.length > 1) this.fields.removeAt(index);
  }

  toggleForm() {
    this.showForm.update((value) => !value);
    this.createError.set('');
  }

  private load() {
    this.loading.set(true);
    this.error.set('');
    this.http
      .get<DesignTemplate[]>('/api/templates')
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (templates) => this.templates.set(templates),
        error: () => this.error.set('Templates could not be loaded.'),
      });
  }

  create() {
    if (this.form.invalid || this.creating()) {
      this.form.markAllAsTouched();
      return;
    }
    this.createError.set('');
    this.creating.set(true);
    const raw = this.form.getRawValue();
    this.http
      .post<DesignTemplate>('/api/templates', {
        name: raw.name,
        description: raw.description || undefined,
        category: raw.category,
        previewImageUrl: raw.previewImageUrl || undefined,
        canvasWidth: raw.canvasWidth,
        canvasHeight: raw.canvasHeight,
        fields: raw.fields.map((field) => ({
          key: field.key,
          label: field.label,
          fieldType: field.fieldType,
          required: field.required,
          maxLength: field.maxLength ? Number(field.maxLength) : undefined,
          x: field.x,
          y: field.y,
          width: field.width,
          height: field.height,
          fontSize: field.fontSize,
          color: field.color || undefined,
        })),
      })
      .pipe(finalize(() => this.creating.set(false)))
      .subscribe({
        next: (template) => {
          this.templates.update((list) => [template, ...list]);
          this.form.reset({
            name: '',
            description: '',
            category: 'FLYER',
            previewImageUrl: '',
            canvasWidth: 1200,
            canvasHeight: 1200,
          });
          this.fields.clear();
          this.fields.push(this.fieldGroup());
          this.showForm.set(false);
        },
        error: (response) =>
          this.createError.set(
            response.error?.message ?? 'The template could not be created.',
          ),
      });
  }

  logout() {
    this.auth.logout();
    void this.router.navigate(['/admin/login']);
  }

  togglePublish(template: DesignTemplate) {
    this.http
      .patch<DesignTemplate>(`/api/templates/${template.id}`, {
        isPublished: !template.isPublished,
      })
      .subscribe({
        next: (updated) =>
          this.templates.update((list) =>
            list.map((candidate) =>
              candidate.id === updated.id ? updated : candidate,
            ),
          ),
      });
  }
}
