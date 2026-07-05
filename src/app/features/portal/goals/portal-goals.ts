import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

export type GoalPeriod = 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'ANNUAL';
export type GoalStatus = 'ON_TRACK' | 'AT_RISK' | 'OFF_TRACK' | 'ACHIEVED';

export interface Goal {
  id: string;
  title: string;
  description: string | null;
  period: GoalPeriod;
  year: number;
  status: GoalStatus;
  projects: { id: string; name: string; status: string }[];
}

const CONTRIBUTE_ROLES = ['OWNER', 'MANAGER', 'CONTRIBUTOR', 'WEBINK_SPECIALIST'];

export const GOAL_PERIODS: GoalPeriod[] = ['Q1', 'Q2', 'Q3', 'Q4', 'ANNUAL'];
export const GOAL_STATUSES: GoalStatus[] = [
  'ON_TRACK',
  'AT_RISK',
  'OFF_TRACK',
  'ACHIEVED',
];

@Component({
  selector: 'app-portal-goals',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './portal-goals.html',
  styleUrl: './portal-goals.scss',
})
export class PortalGoals {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);

  readonly organizationId = this.route.snapshot.paramMap.get('organizationId')!;
  readonly goals = signal<Goal[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly actionError = signal('');
  readonly creating = signal(false);

  readonly goalPeriods = GOAL_PERIODS;
  readonly goalStatuses = GOAL_STATUSES;

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
    title: ['', [Validators.required, Validators.minLength(2)]],
    period: ['Q1' as GoalPeriod, [Validators.required]],
    year: [new Date().getFullYear(), [Validators.required]],
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
      .get<Goal[]>(`/api/organizations/${this.organizationId}/goals`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (goals) => this.goals.set(goals),
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
    this.http
      .post<Goal>(
        `/api/organizations/${this.organizationId}/goals`,
        this.createForm.getRawValue(),
      )
      .pipe(finalize(() => this.creating.set(false)))
      .subscribe({
        next: (goal) => {
          this.goals.update((list) => [goal, ...list]);
          this.createForm.reset({
            title: '',
            period: 'Q1',
            year: new Date().getFullYear(),
          });
        },
        error: () => this.actionError.set('The goal could not be created.'),
      });
  }

  updateStatus(goal: Goal, status: GoalStatus) {
    this.actionError.set('');
    this.http
      .patch<Goal>(`/api/organizations/${this.organizationId}/goals/${goal.id}`, {
        status,
      })
      .subscribe({
        next: (updated) =>
          this.goals.update((list) =>
            list.map((candidate) =>
              candidate.id === updated.id
                ? { ...candidate, status: updated.status }
                : candidate,
            ),
          ),
        error: () => this.actionError.set('The status could not be updated.'),
      });
  }

  deleteGoal(goal: Goal) {
    if (
      !confirm(
        `Delete goal "${goal.title}"? Linked projects will be unlinked, not deleted.`,
      )
    ) {
      return;
    }
    this.http
      .delete(`/api/organizations/${this.organizationId}/goals/${goal.id}`)
      .subscribe({
        next: () =>
          this.goals.update((list) =>
            list.filter((candidate) => candidate.id !== goal.id),
          ),
        error: () => this.actionError.set('The goal could not be deleted.'),
      });
  }
}
