import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiUrlService } from '../../../core/api/api-url.service';
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
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
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
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    if (cover) {
      this.meta.updateTag({ property: 'og:image', content: cover.url });
    }
    const pageUrl = this.document.location?.href;
    if (pageUrl) {
      this.meta.updateTag({ property: 'og:url', content: pageUrl });
      let canonical = this.document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );
      if (!canonical) {
        canonical = this.document.createElement('link');
        canonical.rel = 'canonical';
        this.document.head.appendChild(canonical);
      }
      canonical.href = pageUrl;
      this.setAlternate('en', pageUrl.replace(/\/fr(?=\/|$)/, ''));
      this.setAlternate('fr', pageUrl.includes('/fr/') ? pageUrl : pageUrl.replace(/^(https?:\/\/[^/]+)/, '$1/fr'));
    }
  }

  private setAlternate(language: 'en' | 'fr', href: string) {
    let alternate = this.document.head.querySelector<HTMLLinkElement>(
      `link[rel="alternate"][hreflang="${language}"]`,
    );
    if (!alternate) {
      alternate = this.document.createElement('link');
      alternate.rel = 'alternate';
      alternate.hreflang = language;
      this.document.head.appendChild(alternate);
    }
    alternate.href = href;
  }
}
