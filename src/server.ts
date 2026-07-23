import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { staticMarketingPaths } from './app/core/seo/public-marketing-paths';
import { SITE_ORIGIN } from './app/core/seo/site-origin';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine({
  allowedHosts: [
    'webinkgraphics.com',
    'www.webinkgraphics.com',
    'localhost',
    '127.0.0.1',
    'web',
  ],
  trustProxyHeaders: [
    'x-forwarded-for',
    'x-forwarded-host',
    'x-forwarded-proto',
  ],
});

/**
 * Sitemap, generated at request time so newly published portfolio case
 * studies show up without needing a rebuild.
 */
app.get('/sitemap.xml', async (_req, res) => {
  const apiBase = process.env['API_INTERNAL_URL'] || 'http://localhost:3000';
  let slugs: string[] = [];
  try {
    const response = await fetch(new URL('/api/portfolio', apiBase));
    if (response.ok) {
      const projects = (await response.json()) as { slug: string }[];
      slugs = projects.map((project) => project.slug);
    }
  } catch {
    // Portfolio API unreachable; sitemap still covers the static pages below.
  }

  const paths = [
    ...staticMarketingPaths,
    ...slugs.map((slug) => `portfolio/${slug}`),
    ...slugs.map((slug) => `fr/portfolio/${slug}`),
  ];
  const urls = paths.map((path) => (path ? `${SITE_ORIGIN}/${path}` : SITE_ORIGIN));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    '</urlset>',
  ].join('\n');

  res.type('application/xml').send(xml);
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
