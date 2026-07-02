import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

interface ProjectTranslation {
  locale: 'EN' | 'FR';
  title: string;
}

interface PortfolioProject {
  id: string;
  slug: string;
  clientName?: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  featured: boolean;
  updatedAt: string;
  translations: ProjectTranslation[];
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly projects = signal<PortfolioProject[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');

  constructor() {
    this.http
      .get<PortfolioProject[]>('/api/portfolio/admin/all')
      .subscribe({
        next: (projects) => {
          this.projects.set(projects);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Portfolio projects could not be loaded.');
          this.loading.set(false);
        },
      });
  }

  count(status: PortfolioProject['status']) {
    return this.projects().filter((project) => project.status === status).length;
  }

  title(project: PortfolioProject) {
    return project.translations.find((translation) => translation.locale === 'EN')?.title ?? project.slug;
  }

  logout() {
    this.auth.logout();
    void this.router.navigate(['/admin/login']);
  }
}
