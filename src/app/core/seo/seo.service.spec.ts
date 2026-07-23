import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SeoService } from './seo.service';
import { SITE_ORIGIN } from './site-origin';

function configure(url: string) {
  TestBed.configureTestingModule({
    providers: [{ provide: Router, useValue: { url } }],
  });
  return {
    service: TestBed.inject(SeoService),
    document: TestBed.inject(DOCUMENT),
  };
}

describe('SeoService', () => {
  afterEach(() => {
    document.head
      .querySelectorAll('meta, link[rel="canonical"], link[rel="alternate"], #seo-json-ld')
      .forEach((el) => el.remove());
  });

  it('sets title, description, and Open Graph/Twitter tags', () => {
    const { service, document } = configure('/services/seo');
    service.set({ title: 'SEO Services | WebInk', description: 'Practical SEO.' });

    expect(document.title).toBe('SEO Services | WebInk');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
      'Practical SEO.',
    );
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(
      'SEO Services | WebInk',
    );
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe(
      'website',
    );
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      `${SITE_ORIGIN}/services/seo`,
    );
    expect(document.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe(
      'summary',
    );
  });

  it('uses summary_large_image and sets og:image/twitter:image when an image is given', () => {
    const { service, document } = configure('/portfolio/case-study');
    service.set({
      title: 'Case Study',
      description: 'A project.',
      image: 'https://cdn.example.com/cover.jpg',
      type: 'article',
    });

    expect(document.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe(
      'summary_large_image',
    );
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(
      'https://cdn.example.com/cover.jpg',
    );
    expect(document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')).toBe(
      'https://cdn.example.com/cover.jpg',
    );
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe(
      'article',
    );
  });

  it('removes a previously-set image when a later call has none', () => {
    const { service, document } = configure('/portfolio/case-study');
    service.set({ title: 'One', description: 'One', image: 'https://cdn.example.com/a.jpg' });
    expect(document.querySelector('meta[property="og:image"]')).not.toBeNull();

    service.set({ title: 'Two', description: 'Two' });
    expect(document.querySelector('meta[property="og:image"]')).toBeNull();
    expect(document.querySelector('meta[name="twitter:image"]')).toBeNull();
  });

  it('builds the canonical link and hreflang alternates for an English path', () => {
    const { service, document } = configure('/portfolio/case-study');
    service.set({ title: 'Case Study', description: 'A project.' });

    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      `${SITE_ORIGIN}/portfolio/case-study`,
    );
    expect(
      document.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href'),
    ).toBe(`${SITE_ORIGIN}/portfolio/case-study`);
    expect(
      document.querySelector('link[rel="alternate"][hreflang="fr"]')?.getAttribute('href'),
    ).toBe(`${SITE_ORIGIN}/fr/portfolio/case-study`);
  });

  it('builds the canonical link and hreflang alternates for a French path', () => {
    const { service, document } = configure('/fr/portfolio/case-study');
    service.set({ title: 'Étude de cas', description: 'Un projet.' });

    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      `${SITE_ORIGIN}/fr/portfolio/case-study`,
    );
    expect(
      document.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute('href'),
    ).toBe(`${SITE_ORIGIN}/portfolio/case-study`);
    expect(
      document.querySelector('link[rel="alternate"][hreflang="fr"]')?.getAttribute('href'),
    ).toBe(`${SITE_ORIGIN}/fr/portfolio/case-study`);
  });

  it('reuses the same canonical link element across repeated calls instead of duplicating it', () => {
    const { service, document } = configure('/portfolio');
    service.set({ title: 'One', description: 'One' });
    service.set({ title: 'Two', description: 'Two' });

    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  });

  it('adds JSON-LD as a single script tag and removes it when omitted', () => {
    const { service, document } = configure('/');
    service.set({
      title: 'Home',
      description: 'Home',
      jsonLd: { '@context': 'https://schema.org', '@type': 'Organization', name: 'WebInk' },
    });

    const script = document.getElementById('seo-json-ld');
    expect(script).not.toBeNull();
    expect(JSON.parse(script!.textContent!)).toMatchObject({ name: 'WebInk' });

    service.set({ title: 'Home', description: 'Home' });
    expect(document.getElementById('seo-json-ld')).toBeNull();
  });
});
