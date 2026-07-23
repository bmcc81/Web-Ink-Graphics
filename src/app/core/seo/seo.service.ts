import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SITE_ORIGIN } from './site-origin';

export interface SeoTagData {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  /** One or more schema.org objects to emit as JSON-LD. */
  jsonLd?: object | object[];
}

const JSON_LD_SCRIPT_ID = 'seo-json-ld';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);

  set(data: SeoTagData) {
    const title = data.title;
    const pageUrl = `${SITE_ORIGIN}${this.router.url}`;

    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: data.type ?? 'website' });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({
      name: 'twitter:card',
      content: data.image ? 'summary_large_image' : 'summary',
    });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    } else {
      this.meta.removeTag('property="og:image"');
      this.meta.removeTag('name="twitter:image"');
    }

    this.setLink('canonical', pageUrl);
    this.setAlternate('en', pageUrl.replace(/\/fr(?=\/|$)/, ''));
    this.setAlternate(
      'fr',
      pageUrl.includes('/fr/') || pageUrl.endsWith('/fr')
        ? pageUrl
        : pageUrl.replace(/^(https?:\/\/[^/]+)/, '$1/fr'),
    );

    this.setJsonLd(data.jsonLd);
  }

  private setLink(rel: string, href: string) {
    let link = this.document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      this.document.head.appendChild(link);
    }
    link.href = href;
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

  private setJsonLd(data: object | object[] | undefined) {
    const existing = this.document.getElementById(JSON_LD_SCRIPT_ID);
    if (!data) {
      existing?.remove();
      return;
    }
    const script = existing ?? this.document.createElement('script');
    script.id = JSON_LD_SCRIPT_ID;
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    if (!existing) {
      this.document.head.appendChild(script);
    }
  }
}
