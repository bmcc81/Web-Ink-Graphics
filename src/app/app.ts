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
  readonly adminArea = signal(false);
  readonly currentYear = new Date().getFullYear();

  constructor(router: Router) {
    this.adminArea.set(router.url.startsWith('/admin'));
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.menuOpen.set(false);
      this.adminArea.set(event.urlAfterRedirects.startsWith('/admin'));
    });
  }
}
