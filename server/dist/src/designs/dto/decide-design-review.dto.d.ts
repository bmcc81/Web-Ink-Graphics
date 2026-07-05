export declare enum DesignReviewDecision {
    CHANGES_REQUESTED = "CHANGES_REQUESTED",
    APPROVED = "APPROVED"
}
export declare class DecideDesignReviewDto {
    decision: DesignReviewDecision;
    note?: string;
}
