export interface PortfolioTranslation {
  locale: 'EN' | 'FR';
  title: string;
  summary: string;
  challenge?: string;
  solution?: string;
  results?: string;
  seoTitle?: string;
  metaDescription?: string;
}

export interface PortfolioCategory {
  id: string;
  slug: string;
  nameEn: string;
  nameFr: string;
}

export interface PortfolioImage {
  id: string;
  url: string;
  altTextEn: string;
  altTextFr?: string;
  sortOrder: number;
  isCover: boolean;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  clientName?: string;
  projectUrl?: string;
  featured: boolean;
  completedAt?: string;
  translations: PortfolioTranslation[];
  categories: PortfolioCategory[];
  images: PortfolioImage[];
}

export function englishContent(project: PortfolioProject) {
  return project.translations.find((translation) => translation.locale === 'EN')
    ?? project.translations[0];
}

export function localizedContent(project: PortfolioProject, locale: 'en' | 'fr') {
  return project.translations.find(
    (translation) => translation.locale === (locale === 'fr' ? 'FR' : 'EN'),
  ) ?? englishContent(project);
}
