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
    if (!nodeProcess) {
      return apiPath;
    }
    const internalApiUrl = nodeProcess.env?.['API_INTERNAL_URL'];
    const origin = internalApiUrl || this.request?.url || 'http://localhost:3000';
    return new URL(apiPath, origin).toString();
  }
}
