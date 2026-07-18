import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { SeoService } from '../../core/seo/seo.service';
import { SITE_ORIGIN } from '../../core/seo/site-origin';

export interface ServicePageContent {
  eyebrow: string;
  title: string;
  accent: string;
  introduction: string;
  deliverables: string[];
  benefits: { title: string; description: string }[];
}

@Component({
  selector: 'app-service-page',
  imports: [RouterLink],
  templateUrl: './service-page.html',
  styleUrl: './service-page.scss',
})
export class ServicePage {
  readonly i18n = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  readonly content = this.route.snapshot.data['service'] as ServicePageContent;

  constructor() {
    this.seo.set({
      title: this.route.snapshot.title ?? `${this.content.title} ${this.content.accent}`,
      description: this.content.introduction,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: this.content.eyebrow,
        name: `${this.content.title} ${this.content.accent}`,
        description: this.content.introduction,
        areaServed: 'Montreal, QC',
        provider: {
          '@type': 'Organization',
          name: 'WebInk Graphics',
          url: SITE_ORIGIN,
        },
      },
    });
  }
}
