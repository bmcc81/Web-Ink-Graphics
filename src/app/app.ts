import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from './core/i18n/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly i18n = inject(LanguageService);
  readonly menuOpen = signal(false);
  readonly applicationArea = signal(false);
  readonly currentYear = new Date().getFullYear();

  constructor(router: Router) {
    this.applicationArea.set(this.isApplicationArea(router.url));
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.menuOpen.set(false);
      this.applicationArea.set(this.isApplicationArea(event.urlAfterRedirects));
    });
  }

  private isApplicationArea(url: string) {
    return (
      url.startsWith('/admin') ||
      url.startsWith('/portal') ||
      url.startsWith('/accept-invitation')
    );
  }
}
