import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

type ActivityAction = 'CREATED' | 'UPDATED' | 'STATUS_CHANGED' | 'DELETED';
type ActivityEntityType = 'PROJECT' | 'MILESTONE' | 'TASK' | 'GOAL';

interface ActivityEntry {
  id: string;
  entityType: ActivityEntityType;
  entityId: string;
  action: ActivityAction;
  summary: string;
  createdAt: string;
  actor: { id: string; name: string } | null;
}

@Component({
  selector: 'app-portal-activity',
  imports: [RouterLink, DatePipe],
  templateUrl: './portal-activity.html',
  styleUrl: './portal-activity.scss',
})
export class PortalActivity {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);

  readonly organizationId = this.route.snapshot.paramMap.get('organizationId')!;
  readonly entries = signal<ActivityEntry[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');

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
      .get<ActivityEntry[]>(`/api/organizations/${this.organizationId}/activity`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (entries) => this.entries.set(entries),
        error: () => this.error.set('This workspace could not be loaded.'),
      });
  }

  entityLink(entry: ActivityEntry): unknown[] | null {
    if (entry.action === 'DELETED') return null;
    if (entry.entityType === 'PROJECT') {
      return ['/portal', this.organizationId, 'projects', entry.entityId];
    }
    if (entry.entityType === 'GOAL') {
      return ['/portal', this.organizationId, 'goals'];
    }
    return null;
  }
}
