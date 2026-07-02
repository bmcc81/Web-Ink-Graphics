import { inject, Injectable, REQUEST } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiUrlService {
  private readonly request = inject(REQUEST, { optional: true });

  url(path: string) {
    const apiPath = `/api/${path.replace(/^\/+/, '')}`;
    const nodeProcess = (
      globalThis as typeof globalThis & {
        process?: { env?: Record<string, string | undefined> };
      }
    ).process;
    const internalApiUrl = nodeProcess?.env?.['API_INTERNAL_URL'];
    return this.request
      ? new URL(apiPath, internalApiUrl || this.request.url).toString()
      : apiPath;
  }
}
