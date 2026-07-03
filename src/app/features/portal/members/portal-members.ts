import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService, OrganizationRole } from '../../../core/auth/auth.service';

interface Member {
  id: string;
  role: OrganizationRole;
  createdAt: string;
  user: { id: string; name: string; email: string };
}

interface Invitation {
  id: string;
  email: string;
  role: OrganizationRole;
  expiresAt: string;
  acceptedAt: string | null;
  revokedAt: string | null;
  createdAt: string;
  invitedBy: { name: string };
}

const ALL_ROLES: OrganizationRole[] = [
  'OWNER',
  'MANAGER',
  'CONTRIBUTOR',
  'VIEWER',
  'WEBINK_SPECIALIST',
];
const MANAGER_ASSIGNABLE_ROLES: OrganizationRole[] = ['CONTRIBUTOR', 'VIEWER'];

@Component({
  selector: 'app-portal-members',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './portal-members.html',
  styleUrl: './portal-members.scss',
})
export class PortalMembers {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);

  readonly organizationId = this.route.snapshot.paramMap.get('organizationId')!;
  readonly members = signal<Member[]>([]);
  readonly invitations = signal<Invitation[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly actionError = signal('');
  readonly inviting = signal(false);

  readonly canManage = computed(() => {
    const user = this.auth.user();
    if (!user) return false;
    if (user.role === 'ADMIN' || user.role === 'EDITOR') return true;
    const membership = user.organizations.find(
      (organization) => organization.id === this.organizationId,
    );
    return membership?.role === 'OWNER' || membership?.role === 'MANAGER';
  });

  private readonly isManagerOnly = computed(() => {
    const user = this.auth.user();
    if (!user || user.role === 'ADMIN' || user.role === 'EDITOR') return false;
    const membership = user.organizations.find(
      (organization) => organization.id === this.organizationId,
    );
    return membership?.role === 'MANAGER';
  });

  readonly assignableRoles = computed<OrganizationRole[]>(() =>
    this.isManagerOnly() ? MANAGER_ASSIGNABLE_ROLES : ALL_ROLES,
  );

  canModify(member: Member) {
    if (!this.canManage() || this.isLastOwner(member)) return false;
    return (
      !this.isManagerOnly() || MANAGER_ASSIGNABLE_ROLES.includes(member.role)
    );
  }

  readonly pendingInvitations = computed(() =>
    this.invitations().filter(
      (invitation) => !invitation.acceptedAt && !invitation.revokedAt,
    ),
  );

  readonly inviteForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    role: ['VIEWER' as OrganizationRole, [Validators.required]],
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
      .get<Member[]>(`/api/organizations/${this.organizationId}/members`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (members) => {
          this.members.set(members);
          if (this.canManage()) this.loadInvitations();
        },
        error: () => this.error.set('This workspace could not be loaded.'),
      });
  }

  private loadInvitations() {
    this.http
      .get<Invitation[]>(`/api/organizations/${this.organizationId}/invitations`)
      .subscribe({
        next: (invitations) => this.invitations.set(invitations),
      });
  }

  isLastOwner(member: Member) {
    return (
      member.role === 'OWNER' &&
      this.members().filter((candidate) => candidate.role === 'OWNER').length === 1
    );
  }

  changeRole(member: Member, role: OrganizationRole) {
    if (role === member.role) return;
    this.actionError.set('');
    this.http
      .patch<Member>(
        `/api/organizations/${this.organizationId}/members/${member.id}`,
        { role },
      )
      .subscribe({
        next: (updated) =>
          this.members.update((list) =>
            list.map((candidate) => (candidate.id === updated.id ? updated : candidate)),
          ),
        error: (response) =>
          this.actionError.set(
            response.error?.message ?? 'The role could not be updated.',
          ),
      });
  }

  removeMember(member: Member) {
    if (!confirm(`Remove ${member.user.name} from this organization?`)) return;
    this.actionError.set('');
    this.http
      .delete(`/api/organizations/${this.organizationId}/members/${member.id}`)
      .subscribe({
        next: () =>
          this.members.update((list) =>
            list.filter((candidate) => candidate.id !== member.id),
          ),
        error: (response) =>
          this.actionError.set(
            response.error?.message ?? 'This member could not be removed.',
          ),
      });
  }

  invite() {
    if (this.inviteForm.invalid || this.inviting()) {
      this.inviteForm.markAllAsTouched();
      return;
    }
    this.actionError.set('');
    this.inviting.set(true);
    this.http
      .post<Invitation>(
        `/api/organizations/${this.organizationId}/invitations`,
        this.inviteForm.getRawValue(),
      )
      .pipe(finalize(() => this.inviting.set(false)))
      .subscribe({
        next: () => {
          this.inviteForm.reset({ email: '', role: 'VIEWER' });
          this.loadInvitations();
        },
        error: (response) =>
          this.actionError.set(
            response.status === 409
              ? 'This person is already a member.'
              : 'The invitation could not be sent.',
          ),
      });
  }

  revokeInvitation(invitation: Invitation) {
    if (!confirm(`Revoke the invitation to ${invitation.email}?`)) return;
    this.http
      .delete(
        `/api/organizations/${this.organizationId}/invitations/${invitation.id}`,
      )
      .subscribe({
        next: () =>
          this.invitations.update((list) =>
            list.filter((candidate) => candidate.id !== invitation.id),
          ),
      });
  }
}
