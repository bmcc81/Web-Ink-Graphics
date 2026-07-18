import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { staticMarketingPaths } from './core/seo/public-marketing-paths';

async function getPublishedPortfolioSlugs(): Promise<Record<string, string>[]> {
  const apiBase = process.env['API_INTERNAL_URL'] || 'http://localhost:3000';
  try {
    const response = await fetch(new URL('/api/portfolio', apiBase));
    if (!response.ok) {
      throw new Error(`Unexpected status ${response.status}`);
    }
    const projects = (await response.json()) as { slug: string }[];
    return projects.map((project) => ({ slug: project.slug }));
  } catch (error) {
    console.warn(
      '[prerender] Could not fetch published portfolio slugs; portfolio case studies will fall back to on-demand rendering.',
      error,
    );
    return [];
  }
}

export const serverRoutes: ServerRoute[] = [
  {
    path: 'admin/**',
    renderMode: RenderMode.Client,
  },
  {
    path: 'accept-invitation',
    renderMode: RenderMode.Client,
  },
  {
    path: 'portal/**',
    renderMode: RenderMode.Client,
  },
  ...staticMarketingPaths.map(
    (path): ServerRoute => ({
      path,
      renderMode: RenderMode.Prerender,
    }),
  ),
  {
    path: 'portfolio/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    getPrerenderParams: getPublishedPortfolioSlugs,
  },
  {
    path: 'fr/portfolio/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    getPrerenderParams: getPublishedPortfolioSlugs,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
