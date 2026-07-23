import { REQUEST } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ApiUrlService } from './api-url.service';

type NodeGlobal = typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
};

const nodeGlobal = globalThis as NodeGlobal;

function setInternalApiUrl(value: string | undefined) {
  nodeGlobal.process!.env ??= {};
  if (value === undefined) {
    delete nodeGlobal.process!.env['API_INTERNAL_URL'];
  } else {
    nodeGlobal.process!.env['API_INTERNAL_URL'] = value;
  }
}

describe('ApiUrlService', () => {
  const originalInternalApiUrl = nodeGlobal.process?.env?.['API_INTERNAL_URL'];

  afterEach(() => {
    setInternalApiUrl(originalInternalApiUrl);
  });

  it('returns a relative path when there is no Node process (browser)', () => {
    const realProcess = nodeGlobal.process;
    delete nodeGlobal.process;
    try {
      TestBed.configureTestingModule({});
      const service = TestBed.inject(ApiUrlService);
      expect(service.url('portfolio')).toBe('/api/portfolio');
    } finally {
      nodeGlobal.process = realProcess;
    }
  });

  it('falls back to localhost:3000 when running in Node with no request and no API_INTERNAL_URL', () => {
    setInternalApiUrl(undefined);
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ApiUrlService);
    expect(service.url('portfolio')).toBe('http://localhost:3000/api/portfolio');
  });

  it('resolves against the incoming request origin when one is present', () => {
    setInternalApiUrl(undefined);
    TestBed.configureTestingModule({
      providers: [
        { provide: REQUEST, useValue: { url: 'https://webinkgraphics.com/some/page' } },
      ],
    });
    const service = TestBed.inject(ApiUrlService);
    expect(service.url('portfolio')).toBe('https://webinkgraphics.com/api/portfolio');
  });

  it('prefers API_INTERNAL_URL over the incoming request origin', () => {
    setInternalApiUrl('http://internal-api:4000');
    TestBed.configureTestingModule({
      providers: [
        { provide: REQUEST, useValue: { url: 'https://webinkgraphics.com/some/page' } },
      ],
    });
    const service = TestBed.inject(ApiUrlService);
    expect(service.url('portfolio')).toBe('http://internal-api:4000/api/portfolio');
  });

  it('strips leading slashes from the given path', () => {
    setInternalApiUrl(undefined);
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ApiUrlService);
    expect(service.url('///portfolio/featured')).toBe(
      'http://localhost:3000/api/portfolio/featured',
    );
  });
});
