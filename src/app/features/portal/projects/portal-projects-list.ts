import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

export type ProjectWorkflowStatus =
  | 'DRAFT'
  | 'REVIEW'
  | 'CHANGES_REQUESTED'
  | 'APPROVED'
  | 'PRODUCTION'
  | 'COMPLETED';

export interface ProjectSummary {
  id: string;
  name: string;
  status: ProjectWorkflowStatus;
  targetLaunch: string | null;
  updatedAt: string;
}

const CONTRIBUTE_ROLES = ['OWNER', 'MANAGER', 'CONTRIBUTOR', 'WEBINK_SPECIALIST'];

@Component({
  selector: 'app-portal-projects-list',
  imports: [ReactiveFormsModule, RouterLink, DatePipe],
  templateUrl: './portal-projects-list.html',
  styleUrl: './portal-projects-list.scss',
})
export class PortalProjectsList {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);

  readonly organizationId = this.route.snapshot.paramMap.get('organizationId')!;
  readonly projects = signal<ProjectSummary[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly actionError = signal('');
  readonly creating = signal(false);

  readonly canContribute = computed(() => {
    const user = this.auth.user();
    if (!user) return false;
    if (user.role === 'ADMIN' || user.role === 'EDITOR') return true;
    const membership = user.organizations.find(
      (organization) => organization.id === this.organizationId,
    );
    return !!membership && CONTRIBUTE_ROLES.includes(membership.role);
  });

  readonly createForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    targetLaunch: [''],
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
      .get<ProjectSummary[]>(`/api/organizations/${this.organizationId}/projects`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (projects) => this.projects.set(projects),
        error: () => this.error.set('This workspace could not be loaded.'),
      });
  }

  create() {
    if (this.createForm.invalid || this.creating()) {
      this.createForm.markAllAsTouched();
      return;
    }
    this.actionError.set('');
    this.creating.set(true);
    const { name, targetLaunch } = this.createForm.getRawValue();
    this.http
      .post<ProjectSummary>(`/api/organizations/${this.organizationId}/projects`, {
        name,
        targetLaunch: targetLaunch || undefined,
      })
      .pipe(finalize(() => this.creating.set(false)))
      .subscribe({
        next: (project) => {
          this.projects.update((list) => [project, ...list]);
          this.createForm.reset({ name: '', targetLaunch: '' });
        },
        error: () => this.actionError.set('The project could not be created.'),
      });
  }
}
