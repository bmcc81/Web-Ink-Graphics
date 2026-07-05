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
}

interface ProjectDetail {
  id: string;
  name: string;
  description: string | null;
  status: ProjectWorkflowStatus;
  startDate: string | null;
  targetLaunch: string | null;
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
        },
        error: () => this.error.set('This project could not be loaded.'),
      });
  }

  private loadMembers() {
    this.http
      .get<Member[]>(`/api/organizations/${this.organizationId}/members`)
      .subscribe({ next: (members) => this.members.set(members) });
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
