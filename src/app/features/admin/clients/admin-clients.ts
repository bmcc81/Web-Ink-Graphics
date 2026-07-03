import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

interface ClientSummary {
  id: string;
  organizationId: string;
  companyName: string;
  industry?: string;
  status: string;
  contactName?: string;
  contactEmail?: string;
  _count: { discoveryBriefs: number };
  discoveryBriefs: {
    id: string;
    title: string;
    status: string;
    updatedAt: string;
    _count: { requirements: number };
    openQuestions: { dueDate?: string; priority: string }[];
  }[];
}

@Component({
  selector: 'app-admin-clients',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin-clients.html',
  styleUrl: './admin-clients.scss',
})
export class AdminClients {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);
  readonly clients = signal<ClientSummary[]>([]);
  readonly loading = signal(true);
  readonly creating = signal(false);
  readonly showForm = signal(false);
  readonly error = signal('');
  readonly inviteClient = signal<ClientSummary | null>(null);
  readonly inviting = signal(false);
  readonly inviteUrl = signal('');
  readonly search = signal('');
  readonly statusFilter = signal('ALL');
  readonly today = new Date().toISOString().slice(0, 10);
  readonly filteredClients = computed(() => {
    const query = this.search().trim().toLowerCase();
    return this.clients().filter((client) => {
      const matchesStatus =
        this.statusFilter() === 'ALL' || client.status === this.statusFilter();
      const matchesQuery =
        !query ||
        [client.companyName, client.industry, client.contactName, client.contactEmail]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(query));
      return matchesStatus && matchesQuery;
    });
  });
  readonly activeBriefs = computed(
    () =>
      this.clients().filter((client) =>
        ['INTERNAL_REVIEW', 'CLIENT_REVIEW', 'APPROVED', 'IN_PROGRESS'].includes(
          client.discoveryBriefs[0]?.status,
        ),
      ).length,
  );
  readonly awaitingApproval = computed(
    () =>
      this.clients().filter(
        (client) => client.discoveryBriefs[0]?.status === 'CLIENT_REVIEW',
      ).length,
  );
  readonly overdueFollowUps = computed(() =>
    this.clients().reduce(
      (total, client) =>
        total +
        (client.discoveryBriefs[0]?.openQuestions.filter(
          (question) => question.dueDate && question.dueDate.slice(0, 10) < this.today,
        ).length || 0),
      0,
    ),
  );
  readonly form = this.formBuilder.nonNullable.group({
    companyName: ['', [Validators.required, Validators.minLength(2)]],
    industry: [''],
    status: ['LEAD'],
    contactName: [''],
    contactEmail: ['', Validators.email],
    contactPhone: [''],
    website: [''],
    serviceArea: [''],
  });
  readonly invitationForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    role: ['VIEWER', Validators.required],
  });

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.http.get<ClientSummary[]>('/api/clients').subscribe({
      next: (clients) => {
        this.clients.set(clients);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Clients could not be loaded.');
        this.loading.set(false);
      },
    });
  }

  create() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.creating.set(true);
    const payload = Object.fromEntries(
      Object.entries(this.form.getRawValue()).filter(([, value]) => value !== ''),
    );
    this.http
      .post('/api/clients', payload)
      .pipe(finalize(() => this.creating.set(false)))
      .subscribe({
        next: () => {
          this.form.reset({ status: 'LEAD' });
          this.showForm.set(false);
          this.load();
        },
        error: () => this.error.set('The client could not be created.'),
      });
  }

  briefStatus(status: string) {
    return status.replaceAll('_', ' ').toLowerCase();
  }

  overdueCount(client: ClientSummary) {
    return (
      client.discoveryBriefs[0]?.openQuestions.filter(
        (question) => question.dueDate && question.dueDate.slice(0, 10) < this.today,
      ).length || 0
    );
  }

  openInvitation(client: ClientSummary) {
    this.inviteClient.set(client);
    this.inviteUrl.set('');
    this.invitationForm.reset({
      email: client.contactEmail ?? '',
      role: 'VIEWER',
    });
  }

  createInvitation() {
    const client = this.inviteClient();
    if (!client || this.invitationForm.invalid || this.inviting()) {
      this.invitationForm.markAllAsTouched();
      return;
    }
    this.inviting.set(true);
    this.http
      .post<{ inviteUrl: string }>(
        `/api/organizations/${client.organizationId}/invitations`,
        this.invitationForm.getRawValue(),
      )
      .pipe(finalize(() => this.inviting.set(false)))
      .subscribe({
        next: ({ inviteUrl }) => this.inviteUrl.set(inviteUrl),
        error: () =>
          this.error.set('The company invitation could not be created.'),
      });
  }

  copyInvitation() {
    const url = this.inviteUrl();
    if (url && globalThis.navigator?.clipboard) {
      void globalThis.navigator.clipboard.writeText(url);
    }
  }
}
