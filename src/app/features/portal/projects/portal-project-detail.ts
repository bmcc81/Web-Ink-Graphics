import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';
import type { ProjectWorkflowStatus } from './portal-projects-list';

export type MilestoneStatus = 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

interface Assignee {
  id: string;
  name: string;
}

interface Milestone {
  id: string;
  name: string;
  description: string | null;
  status: MilestoneStatus;
  dueDate: string | null;
}

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  dueDate: string | null;
  milestoneId: string | null;
  assignee: Assignee | null;
  _count: { comments: number };
}

interface ProjectDetail {
  id: string;
  name: string;
  description: string | null;
  status: ProjectWorkflowStatus;
  startDate: string | null;
  targetLaunch: string | null;
  goal: { id: string; title: string; period: string; year: number } | null;
  milestones: Milestone[];
  tasks: Task[];
}

interface Member {
  id: string;
  user: { id: string; name: string };
}

interface TaskComment {
  id: string;
  body: string;
  createdAt: string;
  author: { id: string; name: string };
}

interface Budget {
  id: string;
  currency: string;
  plannedAmount: string | null;
  approvedAmount: string | null;
  committedAmount: string | null;
  actualAmount: string | null;
  notes: string | null;
}

interface DesignVersion {
  id: string;
  thumbnailUrl: string | null;
  figmaLastModified: string | null;
  syncedAt: string;
}

interface Design {
  id: string;
  name: string;
  figmaUrl: string;
  linkedBy: { id: string; name: string };
  versions: DesignVersion[];
  createdAt: string;
}

type DesignReviewStatus = 'PENDING' | 'CHANGES_REQUESTED' | 'APPROVED';

interface DesignReview {
  id: string;
  reviewer: { id: string; name: string };
  assignedBy: { id: string; name: string };
  dueDate: string | null;
  status: DesignReviewStatus;
  decisionNote: string | null;
  decidedAt: string | null;
  decidedVersion: { id: string; syncedAt: string } | null;
  createdAt: string;
}

interface DesignComment {
  id: string;
  body: string;
  createdAt: string;
  author: { id: string; name: string };
}

const CONTRIBUTE_ROLES = ['OWNER', 'MANAGER', 'CONTRIBUTOR', 'WEBINK_SPECIALIST'];
const MANAGE_ROLES = ['OWNER', 'MANAGER'];

export const PROJECT_STATUSES: ProjectWorkflowStatus[] = [
  'DRAFT',
  'REVIEW',
  'CHANGES_REQUESTED',
  'APPROVED',
  'PRODUCTION',
  'COMPLETED',
];
export const MILESTONE_STATUSES: MilestoneStatus[] = [
  'PLANNED',
  'IN_PROGRESS',
  'COMPLETED',
];
export const TASK_STATUSES: TaskStatus[] = ['TODO', 'IN_PROGRESS', 'DONE'];

@Component({
  selector: 'app-portal-project-detail',
  imports: [ReactiveFormsModule, RouterLink, DatePipe, NgTemplateOutlet],
  templateUrl: './portal-project-detail.html',
  styleUrl: './portal-project-detail.scss',
})
export class PortalProjectDetail {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);

  readonly organizationId = this.route.snapshot.paramMap.get('organizationId')!;
  readonly projectId = this.route.snapshot.paramMap.get('projectId')!;
  readonly project = signal<ProjectDetail | null>(null);
  readonly members = signal<Member[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly actionError = signal('');

  readonly projectStatuses = PROJECT_STATUSES;
  readonly milestoneStatuses = MILESTONE_STATUSES;
  readonly taskStatuses = TASK_STATUSES;

  readonly canContribute = computed(() => this.hasRole(CONTRIBUTE_ROLES));
  readonly canManage = computed(() => this.hasRole(MANAGE_ROLES));

  readonly unassignedTasks = computed(() =>
    (this.project()?.tasks ?? []).filter((task) => !task.milestoneId),
  );

  readonly expandedTaskId = signal<string | null>(null);
  readonly taskComments = signal<Record<string, TaskComment[]>>({});
  readonly commentDraft = signal('');
  readonly commentError = signal('');

  readonly budget = signal<Budget | null>(null);
  readonly budgetError = signal('');
  readonly editingBudget = signal(false);

  readonly budgetForm = this.formBuilder.nonNullable.group({
    currency: ['USD'],
    plannedAmount: [''],
    approvedAmount: [''],
    committedAmount: [''],
    actualAmount: [''],
    notes: [''],
  });

  readonly designs = signal<Design[]>([]);
  readonly designError = signal('');
  readonly attachingDesign = signal(false);
  readonly syncingDesignId = signal<string | null>(null);

  readonly designForm = this.formBuilder.nonNullable.group({
    figmaUrl: ['', [Validators.required]],
    name: [''],
  });

  readonly expandedDesignId = signal<string | null>(null);
  readonly designReviews = signal<Record<string, DesignReview[]>>({});
  readonly designComments = signal<Record<string, DesignComment[]>>({});
  readonly designDetailError = signal('');
  readonly designCommentDraft = signal('');
  readonly reviewNoteDraft = signal('');
  readonly assigningReviewer = signal(false);
  readonly decidingReviewId = signal<string | null>(null);

  readonly reviewerForm = this.formBuilder.nonNullable.group({
    reviewerId: ['', [Validators.required]],
    dueDate: [''],
  });

  readonly milestoneForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    dueDate: [''],
  });

  readonly taskForm = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    milestoneId: [''],
    assigneeId: [''],
    dueDate: [''],
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

  private hasRole(roles: string[]) {
    const user = this.auth.user();
    if (!user) return false;
    if (user.role === 'ADMIN' || user.role === 'EDITOR') return true;
    const membership = user.organizations.find(
      (organization) => organization.id === this.organizationId,
    );
    return !!membership && roles.includes(membership.role);
  }

  tasksForMilestone(milestoneId: string) {
    return (this.project()?.tasks ?? []).filter(
      (task) => task.milestoneId === milestoneId,
    );
  }

  private load() {
    this.loading.set(true);
    this.error.set('');
    this.http
      .get<ProjectDetail>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}`,
      )
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (project) => {
          this.project.set(project);
          if (this.canContribute()) this.loadMembers();
          this.loadBudget();
          this.loadDesigns();
        },
        error: () => this.error.set('This project could not be loaded.'),
      });
  }

  private loadMembers() {
    this.http
      .get<Member[]>(`/api/organizations/${this.organizationId}/members`)
      .subscribe({ next: (members) => this.members.set(members) });
  }

  private loadBudget() {
    this.http
      .get<Budget | null>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/budget`,
      )
      .subscribe({
        next: (budget) => {
          this.budget.set(budget);
          if (budget) {
            this.budgetForm.reset({
              currency: budget.currency,
              plannedAmount: budget.plannedAmount ?? '',
              approvedAmount: budget.approvedAmount ?? '',
              committedAmount: budget.committedAmount ?? '',
              actualAmount: budget.actualAmount ?? '',
              notes: budget.notes ?? '',
            });
          }
        },
        error: () => this.budgetError.set('The budget could not be loaded.'),
      });
  }

  startEditingBudget() {
    this.budgetError.set('');
    this.editingBudget.set(true);
  }

  cancelEditingBudget() {
    const budget = this.budget();
    if (budget) {
      this.budgetForm.reset({
        currency: budget.currency,
        plannedAmount: budget.plannedAmount ?? '',
        approvedAmount: budget.approvedAmount ?? '',
        committedAmount: budget.committedAmount ?? '',
        actualAmount: budget.actualAmount ?? '',
        notes: budget.notes ?? '',
      });
    } else {
      this.budgetForm.reset({ currency: 'USD' });
    }
    this.editingBudget.set(false);
  }

  saveBudget() {
    this.budgetError.set('');
    const raw = this.budgetForm.getRawValue();
    const toNumber = (value: string) =>
      value === '' ? undefined : Number(value);
    this.http
      .put<Budget>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/budget`,
        {
          currency: raw.currency || undefined,
          plannedAmount: toNumber(raw.plannedAmount),
          approvedAmount: toNumber(raw.approvedAmount),
          committedAmount: toNumber(raw.committedAmount),
          actualAmount: toNumber(raw.actualAmount),
          notes: raw.notes || undefined,
        },
      )
      .subscribe({
        next: (budget) => {
          this.budget.set(budget);
          this.editingBudget.set(false);
        },
        error: () => this.budgetError.set('The budget could not be saved.'),
      });
  }

  deleteBudget() {
    if (!confirm('Delete this budget?')) return;
    this.budgetError.set('');
    this.http
      .delete(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/budget`,
      )
      .subscribe({
        next: () => {
          this.budget.set(null);
          this.budgetForm.reset({ currency: 'USD' });
        },
        error: () => this.budgetError.set('The budget could not be deleted.'),
      });
  }

  private loadDesigns() {
    this.http
      .get<Design[]>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs`,
      )
      .subscribe({
        next: (designs) => this.designs.set(designs),
        error: () => this.designError.set('Designs could not be loaded.'),
      });
  }

  attachDesign() {
    if (this.designForm.invalid || this.attachingDesign()) {
      this.designForm.markAllAsTouched();
      return;
    }
    this.designError.set('');
    this.attachingDesign.set(true);
    const { figmaUrl, name } = this.designForm.getRawValue();
    this.http
      .post<Design>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs`,
        { figmaUrl, name: name || undefined },
      )
      .pipe(finalize(() => this.attachingDesign.set(false)))
      .subscribe({
        next: (design) => {
          this.designs.update((list) => [design, ...list]);
          this.designForm.reset({ figmaUrl: '', name: '' });
        },
        error: (response) =>
          this.designError.set(
            response.error?.message ?? 'That design could not be attached.',
          ),
      });
  }

  syncDesign(design: Design) {
    this.designError.set('');
    this.syncingDesignId.set(design.id);
    this.http
      .post<Design & { synced: boolean }>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs/${design.id}/sync`,
        {},
      )
      .pipe(finalize(() => this.syncingDesignId.set(null)))
      .subscribe({
        next: (updated) => {
          this.designs.update((list) =>
            list.map((candidate) =>
              candidate.id === updated.id ? updated : candidate,
            ),
          );
          if (!updated.synced) {
            this.designError.set(
              'Figma could not be reached, so no new preview was pulled. The link is still saved.',
            );
          }
        },
        error: () => this.designError.set('The design could not be synced.'),
      });
  }

  unlinkDesign(design: Design) {
    if (!confirm(`Unlink "${design.name}" from this project?`)) return;
    this.designError.set('');
    this.http
      .delete(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs/${design.id}`,
      )
      .subscribe({
        next: () =>
          this.designs.update((list) =>
            list.filter((candidate) => candidate.id !== design.id),
          ),
        error: () => this.designError.set('The design could not be unlinked.'),
      });
  }

  reviewsFor(design: Design) {
    return this.designReviews()[design.id] ?? [];
  }

  commentsForDesign(design: Design) {
    return this.designComments()[design.id] ?? [];
  }

  isDesignDetailOpen(design: Design) {
    return this.expandedDesignId() === design.id;
  }

  canDecideReview(review: DesignReview) {
    return review.reviewer.id === this.auth.user()?.sub || this.canManage();
  }

  canDeleteDesignComment(comment: DesignComment) {
    return comment.author.id === this.auth.user()?.sub || this.canManage();
  }

  toggleDesignDetail(design: Design) {
    if (this.expandedDesignId() === design.id) {
      this.expandedDesignId.set(null);
      return;
    }
    this.expandedDesignId.set(design.id);
    this.designDetailError.set('');
    this.designCommentDraft.set('');
    this.reviewNoteDraft.set('');
    this.reviewerForm.reset({ reviewerId: '', dueDate: '' });
    if (!this.designReviews()[design.id]) {
      this.http
        .get<DesignReview[]>(
          `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs/${design.id}/reviews`,
        )
        .subscribe({
          next: (reviews) =>
            this.designReviews.update((current) => ({
              ...current,
              [design.id]: reviews,
            })),
          error: () => this.designDetailError.set('Reviews could not be loaded.'),
        });
    }
    if (!this.designComments()[design.id]) {
      this.http
        .get<DesignComment[]>(
          `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs/${design.id}/comments`,
        )
        .subscribe({
          next: (comments) =>
            this.designComments.update((current) => ({
              ...current,
              [design.id]: comments,
            })),
          error: () => this.designDetailError.set('Comments could not be loaded.'),
        });
    }
  }

  assignReviewer(design: Design) {
    if (this.reviewerForm.invalid || this.assigningReviewer()) {
      this.reviewerForm.markAllAsTouched();
      return;
    }
    this.designDetailError.set('');
    this.assigningReviewer.set(true);
    const { reviewerId, dueDate } = this.reviewerForm.getRawValue();
    this.http
      .post<DesignReview>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs/${design.id}/reviews`,
        { reviewerId, dueDate: dueDate || undefined },
      )
      .pipe(finalize(() => this.assigningReviewer.set(false)))
      .subscribe({
        next: (review) => {
          this.designReviews.update((current) => ({
            ...current,
            [design.id]: [review, ...(current[design.id] ?? [])],
          }));
          this.reviewerForm.reset({ reviewerId: '', dueDate: '' });
        },
        error: (response) =>
          this.designDetailError.set(
            response.error?.message ?? 'The reviewer could not be assigned.',
          ),
      });
  }

  decideDesignReview(
    design: Design,
    review: DesignReview,
    decision: 'APPROVED' | 'CHANGES_REQUESTED',
  ) {
    this.designDetailError.set('');
    this.decidingReviewId.set(review.id);
    const note = this.reviewNoteDraft().trim();
    this.http
      .patch<DesignReview>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs/${design.id}/reviews/${review.id}`,
        { decision, note: note || undefined },
      )
      .pipe(finalize(() => this.decidingReviewId.set(null)))
      .subscribe({
        next: (updated) => {
          this.designReviews.update((current) => ({
            ...current,
            [design.id]: (current[design.id] ?? []).map((candidate) =>
              candidate.id === updated.id ? updated : candidate,
            ),
          }));
          this.reviewNoteDraft.set('');
        },
        error: (response) =>
          this.designDetailError.set(
            response.error?.message ?? 'The review could not be updated.',
          ),
      });
  }

  postDesignComment(design: Design) {
    const body = this.designCommentDraft().trim();
    if (!body) return;
    this.designDetailError.set('');
    this.http
      .post<DesignComment>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs/${design.id}/comments`,
        { body },
      )
      .subscribe({
        next: (comment) => {
          this.designComments.update((current) => ({
            ...current,
            [design.id]: [...(current[design.id] ?? []), comment],
          }));
          this.designCommentDraft.set('');
        },
        error: () =>
          this.designDetailError.set('The comment could not be posted.'),
      });
  }

  deleteDesignComment(design: Design, comment: DesignComment) {
    if (!confirm('Delete this comment?')) return;
    this.http
      .delete(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/designs/${design.id}/comments/${comment.id}`,
      )
      .subscribe({
        next: () =>
          this.designComments.update((current) => ({
            ...current,
            [design.id]: (current[design.id] ?? []).filter(
              (candidate) => candidate.id !== comment.id,
            ),
          })),
        error: () =>
          this.designDetailError.set('The comment could not be deleted.'),
      });
  }

  updateProjectStatus(status: ProjectWorkflowStatus) {
    this.actionError.set('');
    this.http
      .patch<ProjectDetail>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}`,
        { status },
      )
      .subscribe({
        next: (updated) =>
          this.project.update((current) =>
            current ? { ...current, status: updated.status } : current,
          ),
        error: () => this.actionError.set('The status could not be updated.'),
      });
  }

  deleteProject() {
    const project = this.project();
    if (!project) return;
    if (!confirm(`Delete "${project.name}"? This removes all milestones and tasks.`)) {
      return;
    }
    this.http
      .delete(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}`,
      )
      .subscribe({
        next: () =>
          void this.router.navigate(['/portal', this.organizationId, 'projects']),
        error: () => this.actionError.set('The project could not be deleted.'),
      });
  }

  createMilestone() {
    if (this.milestoneForm.invalid) {
      this.milestoneForm.markAllAsTouched();
      return;
    }
    this.actionError.set('');
    const { name, dueDate } = this.milestoneForm.getRawValue();
    this.http
      .post<Milestone>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/milestones`,
        { name, dueDate: dueDate || undefined },
      )
      .subscribe({
        next: (milestone) => {
          this.project.update((current) =>
            current
              ? { ...current, milestones: [...current.milestones, milestone] }
              : current,
          );
          this.milestoneForm.reset({ name: '', dueDate: '' });
        },
        error: () => this.actionError.set('The milestone could not be created.'),
      });
  }

  updateMilestoneStatus(milestone: Milestone, status: MilestoneStatus) {
    this.actionError.set('');
    this.http
      .patch<Milestone>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/milestones/${milestone.id}`,
        { status },
      )
      .subscribe({
        next: (updated) =>
          this.project.update((current) =>
            current
              ? {
                  ...current,
                  milestones: current.milestones.map((candidate) =>
                    candidate.id === updated.id ? updated : candidate,
                  ),
                }
              : current,
          ),
        error: () => this.actionError.set('The milestone could not be updated.'),
      });
  }

  deleteMilestone(milestone: Milestone) {
    if (!confirm(`Delete milestone "${milestone.name}"?`)) return;
    this.http
      .delete(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/milestones/${milestone.id}`,
      )
      .subscribe({
        next: () =>
          this.project.update((current) =>
            current
              ? {
                  ...current,
                  milestones: current.milestones.filter(
                    (candidate) => candidate.id !== milestone.id,
                  ),
                  tasks: current.tasks.map((task) =>
                    task.milestoneId === milestone.id
                      ? { ...task, milestoneId: null }
                      : task,
                  ),
                }
              : current,
          ),
        error: () => this.actionError.set('The milestone could not be deleted.'),
      });
  }

  createTask() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    this.actionError.set('');
    const { title, milestoneId, assigneeId, dueDate } = this.taskForm.getRawValue();
    this.http
      .post<Task>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/tasks`,
        {
          title,
          milestoneId: milestoneId || undefined,
          assigneeId: assigneeId || undefined,
          dueDate: dueDate || undefined,
        },
      )
      .subscribe({
        next: (task) => {
          this.project.update((current) =>
            current ? { ...current, tasks: [...current.tasks, task] } : current,
          );
          this.taskForm.reset({
            title: '',
            milestoneId: '',
            assigneeId: '',
            dueDate: '',
          });
        },
        error: () => this.actionError.set('The task could not be created.'),
      });
  }

  updateTaskStatus(task: Task, status: TaskStatus) {
    this.updateTask(task, { status });
  }

  reassignTask(task: Task, assigneeId: string) {
    this.updateTask(task, { assigneeId: assigneeId || null });
  }

  private updateTask(task: Task, data: Partial<{ status: TaskStatus; assigneeId: string | null }>) {
    this.actionError.set('');
    this.http
      .patch<Task>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/tasks/${task.id}`,
        data,
      )
      .subscribe({
        next: (updated) =>
          this.project.update((current) =>
            current
              ? {
                  ...current,
                  tasks: current.tasks.map((candidate) =>
                    candidate.id === updated.id ? updated : candidate,
                  ),
                }
              : current,
          ),
        error: () => this.actionError.set('The task could not be updated.'),
      });
  }

  deleteTask(task: Task) {
    if (!confirm(`Delete task "${task.title}"?`)) return;
    this.http
      .delete(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/tasks/${task.id}`,
      )
      .subscribe({
        next: () =>
          this.project.update((current) =>
            current
              ? {
                  ...current,
                  tasks: current.tasks.filter(
                    (candidate) => candidate.id !== task.id,
                  ),
                }
              : current,
          ),
        error: () => this.actionError.set('The task could not be deleted.'),
      });
  }

  commentsFor(task: Task) {
    return this.taskComments()[task.id] ?? [];
  }

  commentCount(task: Task) {
    return this.taskComments()[task.id]?.length ?? task._count.comments;
  }

  isCommentsOpen(task: Task) {
    return this.expandedTaskId() === task.id;
  }

  canDeleteComment(comment: TaskComment) {
    return comment.author.id === this.auth.user()?.sub || this.canManage();
  }

  toggleComments(task: Task) {
    if (this.expandedTaskId() === task.id) {
      this.expandedTaskId.set(null);
      return;
    }
    this.expandedTaskId.set(task.id);
    this.commentDraft.set('');
    this.commentError.set('');
    if (!this.taskComments()[task.id]) {
      this.http
        .get<TaskComment[]>(
          `/api/organizations/${this.organizationId}/projects/${this.projectId}/tasks/${task.id}/comments`,
        )
        .subscribe({
          next: (comments) =>
            this.taskComments.update((current) => ({
              ...current,
              [task.id]: comments,
            })),
          error: () => this.commentError.set('Comments could not be loaded.'),
        });
    }
  }

  postComment(task: Task) {
    const body = this.commentDraft().trim();
    if (!body) return;
    this.commentError.set('');
    this.http
      .post<TaskComment>(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/tasks/${task.id}/comments`,
        { body },
      )
      .subscribe({
        next: (comment) => {
          this.taskComments.update((current) => ({
            ...current,
            [task.id]: [...(current[task.id] ?? []), comment],
          }));
          this.commentDraft.set('');
        },
        error: () => this.commentError.set('The comment could not be posted.'),
      });
  }

  deleteComment(task: Task, comment: TaskComment) {
    if (!confirm('Delete this comment?')) return;
    this.http
      .delete(
        `/api/organizations/${this.organizationId}/projects/${this.projectId}/tasks/${task.id}/comments/${comment.id}`,
      )
      .subscribe({
        next: () =>
          this.taskComments.update((current) => ({
            ...current,
            [task.id]: (current[task.id] ?? []).filter(
              (candidate) => candidate.id !== comment.id,
            ),
          })),
        error: () => this.commentError.set('The comment could not be deleted.'),
      });
  }
}
