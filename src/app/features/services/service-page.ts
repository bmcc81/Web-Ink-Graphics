import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

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
  readonly content = this.route.snapshot.data['service'] as ServicePageContent;
}
