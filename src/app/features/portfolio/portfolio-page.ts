import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiUrlService } from '../../core/api/api-url.service';
import { SeoService } from '../../core/seo/seo.service';
import { localizedContent, PortfolioProject } from './portfolio.models';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-portfolio-page',
  imports: [RouterLink],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss',
})
export class PortfolioPage {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(ApiUrlService);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  readonly i18n = inject(LanguageService);
  readonly activeCategory = signal('all');
  readonly projects = signal<PortfolioProject[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly categories = computed(() => {
    const categories = new Map<string, string>();
    this.projects()
      .flatMap((project) => project.categories)
      .forEach((category) => categories.set(category.slug, this.i18n.french ? category.nameFr : category.nameEn));
    return [{ slug: 'all', name: this.i18n.french ? 'Tous' : 'All' }].concat(
      [...categories].map(([slug, name]) => ({ slug, name })),
    );
  });
  readonly visibleProjects = computed(() => {
    const category = this.activeCategory();
    return category === 'all'
      ? this.projects()
      : this.projects().filter((project) =>
          project.categories.some((item) => item.slug === category),
        );
  });

  constructor() {
    this.seo.set({
      title: this.route.snapshot.title ?? 'Portfolio | WebInk Graphics',
      description: this.i18n.french
        ? 'Découvrez des projets de sites Web, SEO, infolettres et design graphique réalisés par WebInk Graphics pour des entreprises à Montréal.'
        : 'See website, SEO, newsletter and graphic design projects WebInk Graphics has built for businesses in Montreal.',
    });

    this.http.get<PortfolioProject[]>(this.apiUrl.url('portfolio')).subscribe({
      next: (projects) => {
        this.projects.set(projects);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(this.i18n.french
          ? 'Les projets du portfolio sont temporairement indisponibles.'
          : 'Portfolio projects are temporarily unavailable.');
        this.loading.set(false);
      },
    });
  }

  content(project: PortfolioProject) {
    return localizedContent(project, this.i18n.language());
  }

  cover(project: PortfolioProject) {
    return project.images.find((image) => image.isCover) ?? project.images[0];
  }

  monogram(project: PortfolioProject) {
    return this.content(project)?.title
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }

  color(index: number) {
    return ['#dfff4f', '#ff7557', '#9eb8ff', '#f3c0ff', '#ffc94a', '#66e0d0'][
      index % 6
    ];
  }
}
