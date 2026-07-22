import { HealthService } from './health.service.js';
export declare class HealthController {
    private readonly health;
    constructor(health: HealthService);
    live(): {
        status: string;
        uptimeSeconds: number;
        timestamp: string;
    };
    ready(): Promise<{
        status: string;
        database: string;
        timestamp: string;
    }>;
}
