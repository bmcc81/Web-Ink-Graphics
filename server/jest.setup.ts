import { jest } from '@jest/globals';

(globalThis as unknown as { jest: typeof jest }).jest = jest;
