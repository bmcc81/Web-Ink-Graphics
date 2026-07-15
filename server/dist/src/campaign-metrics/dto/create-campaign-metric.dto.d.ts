import { MetricType } from '@prisma/client';
export declare class CreateCampaignMetricDto {
    metricType: MetricType;
    periodStart: string;
    periodEnd: string;
    actualValue: number;
    plannedValue?: number;
    notes?: string;
}
