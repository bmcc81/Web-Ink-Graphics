declare const services: readonly ["website", "redesign", "seo", "newsletter", "graphic-design", "maintenance", "web-application", "not-sure"];
export declare class CreateContactDto {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    service: (typeof services)[number];
    budget?: string;
    launchDate?: string;
    website?: string;
    message: string;
    source?: string;
    fax?: string;
}
export {};
