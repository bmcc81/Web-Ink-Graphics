import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiUrlService } from '../../../core/api/api-url.service';
import { SeoService } from '../../../core/seo/seo.service';
import { SITE_ORIGIN } from '../../../core/seo/site-origin';
import {
  localizedContent,
  PortfolioProject,
  PortfolioTranslation,
} from '../portfolio.models';
import { LanguageService } from '../../../core/i18n/language.service';

@Component({
  selector: 'app-case-study',
  imports: [RouterLink],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudy {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(ApiUrlService);
  private readonly route = inject(ActivatedRoute);
  private readonly titleService = inject(Title);
  private readonly seo = inject(SeoService);
  readonly i18n = inject(LanguageService);
  readonly project = signal<PortfolioProject | null>(null);
  readonly content = signal<PortfolioTranslation | undefined>(undefined);
  readonly loading = signal(true);
  readonly notFound = signal(false);

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.http
      .get<PortfolioProject>(this.apiUrl.url(`portfolio/${encodeURIComponent(slug)}`))
      .subscribe({
        next: (project) => {
          const content = localizedContent(project, this.i18n.language());
          this.project.set(project);
          this.content.set(content);
          this.loading.set(false);
          this.updateMetadata(project, content);
        },
        error: () => {
          this.notFound.set(true);
          this.loading.set(false);
          this.titleService.setTitle(this.i18n.french ? 'Projet introuvable | WebInk Graphics' : 'Project Not Found | WebInk Graphics');
        },
      });
  }

  cover(project: PortfolioProject) {
    return project.images.find((image) => image.isCover) ?? project.images[0];
  }

  private updateMetadata(
    project: PortfolioProject,
    content: PortfolioTranslation | undefined,
  ) {
    const title = content?.seoTitle || `${content?.title ?? project.slug} | WebInk Graphics`;
    const description = content?.metaDescription || content?.summary || '';
    const cover = this.cover(project);

    this.seo.set({
      title,
      description,
      image: cover?.url,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: content?.title ?? project.slug,
        description,
        image: cover?.url,
        dateCreated: project.completedAt,
        url: `${SITE_ORIGIN}/portfolio/${project.slug}`,
        creator: {
          '@type': 'Organization',
          name: 'WebInk Graphics',
          url: SITE_ORIGIN,
        },
      },
    });
  }
}
