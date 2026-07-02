export declare const promptOutputTypes: readonly ["IMPLEMENTATION", "TECHNICAL_PLAN", "PROPOSAL", "WEBSITE_AUDIT", "CONTENT_SEO", "FEATURE"];
export type PromptOutputType = (typeof promptOutputTypes)[number];
export declare class GeneratePromptDto {
    outputType: PromptOutputType;
}
