import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiUrlService } from '../../core/api/api-url.service';
import { ContactForm } from '../contact/contact-form';
import { localizedContent, PortfolioProject } from '../portfolio/portfolio.models';
import { LanguageService } from '../../core/i18n/language.service';

interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, ContactForm],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(ApiUrlService);
  readonly i18n = inject(LanguageService);
  readonly featuredProjects = signal<PortfolioProject[]>([]);
  readonly projectsLoaded = signal(false);
  private readonly englishServices: Service[] = [
    {
      number: '01',
      icon: '⌘',
      title: 'Websites',
      description: 'Fast, thoughtful websites that make your value clear and turn visits into inquiries.',
      link: '/services/web-design',
    },
    {
      number: '02',
      icon: '↗',
      title: 'SEO',
      description: 'Practical search strategies that help the right customers discover your business.',
      link: '/services/seo',
    },
    {
      number: '03',
      icon: '✉',
      title: 'Newsletters',
      description: 'Branded email campaigns that stay useful, memorable and welcome in the inbox.',
      link: '/services/newsletters',
    },
    {
      number: '04',
      icon: '✦',
      title: 'Graphic design',
      description: 'Distinctive branding and marketing materials designed to keep your business consistent.',
      link: '/services/graphic-design',
    },
  ];
  private readonly frenchServices: Service[] = [
    { number: '01', icon: '⌘', title: 'Sites Web', description: 'Des sites rapides et réfléchis qui clarifient votre valeur et transforment les visites en demandes.', link: '/services/web-design' },
    { number: '02', icon: '↗', title: 'SEO', description: 'Des stratégies de recherche pratiques qui aident les bons clients à découvrir votre entreprise.', link: '/services/seo' },
    { number: '03', icon: '✉', title: 'Infolettres', description: 'Des campagnes courriel de marque utiles, mémorables et bienvenues dans la boîte de réception.', link: '/services/newsletters' },
    { number: '04', icon: '✦', title: 'Design graphique', description: 'Une image de marque et du matériel marketing distinctifs pour assurer votre cohérence.', link: '/services/graphic-design' },
  ];
  readonly services = computed(() => this.i18n.french ? this.frenchServices : this.englishServices);

  private readonly englishProcess = [
    { number: '01', title: 'Discover', description: 'We define the audience, goals and real problem to solve.' },
    { number: '02', title: 'Shape', description: 'We map the content, experience and visual direction.' },
    { number: '03', title: 'Create', description: 'Design and development move together through clear reviews.' },
    { number: '04', title: 'Grow', description: 'We launch, learn from real results and keep improving.' },
  ];
  private readonly frenchProcess = [
    { number: '01', title: 'Découvrir', description: 'Nous définissons l’audience, les objectifs et le vrai problème à résoudre.' },
    { number: '02', title: 'Structurer', description: 'Nous planifions le contenu, l’expérience et la direction visuelle.' },
    { number: '03', title: 'Créer', description: 'Design et développement avancent ensemble grâce à des validations claires.' },
    { number: '04', title: 'Faire croître', description: 'Nous lançons, apprenons des résultats et continuons d’améliorer.' },
  ];
  readonly process = computed(() => this.i18n.french ? this.frenchProcess : this.englishProcess);

  constructor() {
    this.http
      .get<PortfolioProject[]>(this.apiUrl.url('portfolio/featured'))
      .subscribe({
        next: (projects) => {
          this.featuredProjects.set(projects);
          this.projectsLoaded.set(true);
        },
        error: () => this.projectsLoaded.set(true),
      });
  }

  content(project: PortfolioProject) {
    return localizedContent(project, this.i18n.language());
  }

  cover(project: PortfolioProject) {
    return project.images.find((image) => image.isCover) ?? project.images[0];
  }

  monogram(project: PortfolioProject) {
    return this.content(project).title
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }

  color(index: number) {
    return ['#edff57', '#ff7557', '#9eb8ff', '#f3c0ff'][index % 4];
  }
}
