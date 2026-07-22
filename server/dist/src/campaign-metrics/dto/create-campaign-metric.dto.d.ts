import { MetricType } from '../../generated/prisma/client.js';
export declare class CreateCampaignMetricDto {
    metricType: MetricType;
    periodStart: string;
    periodEnd: string;
    actualValue: number;
    plannedValue?: number;
    notes?: string;
}
