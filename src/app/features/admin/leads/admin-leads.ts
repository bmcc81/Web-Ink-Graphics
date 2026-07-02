import { HttpClient, HttpParams } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

interface Lead {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  launchDate?: string;
  website?: string;
  message: string;
  source?: string;
  createdAt: string;
  contactedAt?: string;
}

type LeadStatus = 'all' | 'new' | 'contacted';

@Component({
  selector: 'app-admin-leads',
  imports: [RouterLink],
  templateUrl: './admin-leads.html',
  styleUrl: './admin-leads.scss',
})
export class AdminLeads {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  readonly leads = signal<Lead[]>([]);
  readonly status = signal<LeadStatus>('new');
  readonly search = signal('');
  readonly loading = signal(true);
  readonly exporting = signal(false);
  readonly error = signal('');

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.http
      .get<Lead[]>('/api/contact/admin', { params: this.params() })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (leads) => this.leads.set(leads),
        error: () => this.error.set('Inquiries could not be loaded.'),
      });
  }

  filter(status: LeadStatus) {
    this.status.set(status);
    this.load();
  }

  searchChanged(event: Event) {
    this.search.set((event.target as HTMLInputElement).value);
  }

  searchKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.load();
    }
  }

  setContacted(lead: Lead, contacted: boolean) {
    this.http
      .patch<Lead>(`/api/contact/admin/${lead.id}/status`, { contacted })
      .subscribe({
        next: () => this.load(),
        error: () => this.error.set('The inquiry status could not be updated.'),
      });
  }

  exportCsv() {
    this.exporting.set(true);
    this.http
      .get('/api/contact/admin/export', {
        params: this.params(),
        responseType: 'blob',
      })
      .pipe(finalize(() => this.exporting.set(false)))
      .subscribe({
        next: (blob) => {
          const url = URL.createObjectURL(blob);
          const anchor = this.document.createElement('a');
          anchor.href = url;
          anchor.download = `webink-leads-${new Date().toISOString().slice(0, 10)}.csv`;
          anchor.click();
          URL.revokeObjectURL(url);
        },
        error: () => this.error.set('The CSV export could not be created.'),
      });
  }

  logout() {
    this.auth.logout();
    void this.router.navigate(['/admin/login']);
  }

  private params() {
    let params = new HttpParams().set('status', this.status());
    if (this.search().trim()) {
      params = params.set('search', this.search().trim());
    }
    return params;
  }
}
