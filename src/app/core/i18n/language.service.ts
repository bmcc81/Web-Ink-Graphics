import { DOCUMENT } from '@angular/common';
import { inject, Injectable, REQUEST, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export type SiteLanguage = 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly request = inject(REQUEST, { optional: true });
  readonly language = signal<SiteLanguage>(
    this.detect(this.request?.url || this.router.url),
  );

  constructor() {
    this.document.documentElement.lang = this.language();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => this.sync(event.urlAfterRedirects));
  }

  get french() {
    return this.language() === 'fr';
  }

  path(path: string) {
    const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
    return this.french ? `/fr${normalized}` : normalized || '/';
  }

  switchLanguage() {
    const current = this.router.url;
    const target = this.french
      ? current.replace(/^\/fr(?=\/|$)/, '') || '/'
      : `/fr${current === '/' ? '' : current}`;
    void this.router.navigateByUrl(target);
  }

  private sync(url: string) {
    const language = this.detect(url);
    this.language.set(language);
    this.document.documentElement.lang = language;
  }

  private detect(url: string): SiteLanguage {
    const path = /^https?:\/\//.test(url) ? new URL(url).pathname : url;
    return /^\/fr(?:\/|$)/.test(path) ? 'fr' : 'en';
  }
}
