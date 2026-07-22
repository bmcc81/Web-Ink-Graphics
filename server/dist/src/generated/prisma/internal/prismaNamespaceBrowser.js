import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Organization: 'Organization',
    ActivityLogEntry: 'ActivityLogEntry',
    OrganizationInvitation: 'OrganizationInvitation',
    OrganizationMembership: 'OrganizationMembership',
    Client: 'Client',
    DiscoveryBrief: 'DiscoveryBrief',
    BriefAttachment: 'BriefAttachment',
    BriefRequirement: 'BriefRequirement',
    BriefQuestion: 'BriefQuestion',
    GeneratedPrompt: 'GeneratedPrompt',
    PortfolioProject: 'PortfolioProject',
    ProjectTranslation: 'ProjectTranslation',
    PortfolioImage: 'PortfolioImage',
    PortfolioCategory: 'PortfolioCategory',
    ContactSubmission: 'ContactSubmission',
    Project: 'Project',
    Budget: 'Budget',
    CampaignMetricEntry: 'CampaignMetricEntry',
    Goal: 'Goal',
    Milestone: 'Milestone',
    Task: 'Task',
    TaskComment: 'TaskComment',
    DesignDocument: 'DesignDocument',
    DesignVersion: 'DesignVersion',
    DesignReview: 'DesignReview',
    DesignComment: 'DesignComment',
    BrandKit: 'BrandKit',
    DesignTemplate: 'DesignTemplate',
    TemplateField: 'TemplateField',
    ProjectAsset: 'ProjectAsset',
    AssetRevision: 'AssetRevision',
    AssetFieldValue: 'AssetFieldValue',
    AssetExport: 'AssetExport',
    CreativeBrief: 'CreativeBrief',
    CreativeBriefVariant: 'CreativeBriefVariant',
    AiUsageRecord: 'AiUsageRecord',
    PlanDraft: 'PlanDraft',
    PlanDraftProject: 'PlanDraftProject',
    PlanDraftMilestone: 'PlanDraftMilestone',
    PlanDraftChannelRecommendation: 'PlanDraftChannelRecommendation',
    PerformanceRecommendation: 'PerformanceRecommendation',
    PerformanceRecommendationItem: 'PerformanceRecommendationItem'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ActivityLogEntryScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    summary: 'summary',
    actorId: 'actorId',
    createdAt: 'createdAt'
};
export const OrganizationInvitationScalarFieldEnum = {
    id: 'id',
    email: 'email',
    role: 'role',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    acceptedAt: 'acceptedAt',
    revokedAt: 'revokedAt',
    organizationId: 'organizationId',
    invitedById: 'invitedById',
    createdAt: 'createdAt'
};
export const OrganizationMembershipScalarFieldEnum = {
    id: 'id',
    role: 'role',
    userId: 'userId',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ClientScalarFieldEnum = {
    id: 'id',
    companyName: 'companyName',
    industry: 'industry',
    website: 'website',
    serviceArea: 'serviceArea',
    status: 'status',
    contactName: 'contactName',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    generalNotes: 'generalNotes',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DiscoveryBriefScalarFieldEnum = {
    id: 'id',
    title: 'title',
    status: 'status',
    meetingAt: 'meetingAt',
    projectType: 'projectType',
    projectSummary: 'projectSummary',
    motivation: 'motivation',
    currentProblems: 'currentProblems',
    successDefinition: 'successDefinition',
    targetLaunch: 'targetLaunch',
    budget: 'budget',
    decisionMakers: 'decisionMakers',
    primaryAudience: 'primaryAudience',
    secondaryAudiences: 'secondaryAudiences',
    audienceProblems: 'audienceProblems',
    commonObjections: 'commonObjections',
    desiredAction: 'desiredAction',
    designDirection: 'designDirection',
    likedSites: 'likedSites',
    dislikedSites: 'dislikedSites',
    brandAssets: 'brandAssets',
    seoTargets: 'seoTargets',
    targetLocations: 'targetLocations',
    currentPlatform: 'currentPlatform',
    integrations: 'integrations',
    hostingProvider: 'hostingProvider',
    domainRegistrar: 'domainRegistrar',
    compliance: 'compliance',
    assumptions: 'assumptions',
    outOfScope: 'outOfScope',
    rawNotes: 'rawNotes',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BriefAttachmentScalarFieldEnum = {
    id: 'id',
    fileName: 'fileName',
    objectKey: 'objectKey',
    contentType: 'contentType',
    fileSize: 'fileSize',
    category: 'category',
    createdAt: 'createdAt',
    briefId: 'briefId'
};
export const BriefRequirementScalarFieldEnum = {
    id: 'id',
    referenceCode: 'referenceCode',
    category: 'category',
    priority: 'priority',
    status: 'status',
    title: 'title',
    details: 'details',
    rationale: 'rationale',
    acceptanceCriteria: 'acceptanceCriteria',
    briefId: 'briefId',
    sortOrder: 'sortOrder'
};
export const BriefQuestionScalarFieldEnum = {
    id: 'id',
    question: 'question',
    answer: 'answer',
    status: 'status',
    owner: 'owner',
    dueDate: 'dueDate',
    priority: 'priority',
    briefId: 'briefId',
    sortOrder: 'sortOrder'
};
export const GeneratedPromptScalarFieldEnum = {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    briefId: 'briefId'
};
export const PortfolioProjectScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    clientName: 'clientName',
    projectUrl: 'projectUrl',
    status: 'status',
    featured: 'featured',
    displayOrder: 'displayOrder',
    completedAt: 'completedAt',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ProjectTranslationScalarFieldEnum = {
    id: 'id',
    locale: 'locale',
    title: 'title',
    summary: 'summary',
    challenge: 'challenge',
    solution: 'solution',
    results: 'results',
    seoTitle: 'seoTitle',
    metaDescription: 'metaDescription',
    projectId: 'projectId'
};
export const PortfolioImageScalarFieldEnum = {
    id: 'id',
    url: 'url',
    altTextEn: 'altTextEn',
    altTextFr: 'altTextFr',
    width: 'width',
    height: 'height',
    sortOrder: 'sortOrder',
    isCover: 'isCover',
    projectId: 'projectId'
};
export const PortfolioCategoryScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    nameEn: 'nameEn',
    nameFr: 'nameFr'
};
export const ContactSubmissionScalarFieldEnum = {
    id: 'id',
    name: 'name',
    company: 'company',
    email: 'email',
    phone: 'phone',
    service: 'service',
    budget: 'budget',
    launchDate: 'launchDate',
    website: 'website',
    message: 'message',
    source: 'source',
    createdAt: 'createdAt',
    contactedAt: 'contactedAt'
};
export const ProjectScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    startDate: 'startDate',
    targetLaunch: 'targetLaunch',
    organizationId: 'organizationId',
    goalId: 'goalId',
    portfolioProjectId: 'portfolioProjectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BudgetScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    currency: 'currency',
    plannedAmount: 'plannedAmount',
    approvedAmount: 'approvedAmount',
    committedAmount: 'committedAmount',
    actualAmount: 'actualAmount',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CampaignMetricEntryScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    metricType: 'metricType',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    actualValue: 'actualValue',
    plannedValue: 'plannedValue',
    notes: 'notes',
    recordedById: 'recordedById',
    createdAt: 'createdAt'
};
export const GoalScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    period: 'period',
    year: 'year',
    status: 'status',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MilestoneScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    dueDate: 'dueDate',
    sortOrder: 'sortOrder',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const TaskScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    dueDate: 'dueDate',
    sortOrder: 'sortOrder',
    projectId: 'projectId',
    milestoneId: 'milestoneId',
    assigneeId: 'assigneeId',
    recurrenceRule: 'recurrenceRule',
    recurrenceParentId: 'recurrenceParentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const TaskCommentScalarFieldEnum = {
    id: 'id',
    body: 'body',
    taskId: 'taskId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DesignDocumentScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    figmaFileKey: 'figmaFileKey',
    figmaNodeId: 'figmaNodeId',
    figmaUrl: 'figmaUrl',
    linkedById: 'linkedById',
    unlinkedAt: 'unlinkedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DesignVersionScalarFieldEnum = {
    id: 'id',
    designDocumentId: 'designDocumentId',
    thumbnailUrl: 'thumbnailUrl',
    figmaLastModified: 'figmaLastModified',
    syncedAt: 'syncedAt'
};
export const DesignReviewScalarFieldEnum = {
    id: 'id',
    designDocumentId: 'designDocumentId',
    reviewerId: 'reviewerId',
    assignedById: 'assignedById',
    dueDate: 'dueDate',
    status: 'status',
    decidedVersionId: 'decidedVersionId',
    decisionNote: 'decisionNote',
    decidedAt: 'decidedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DesignCommentScalarFieldEnum = {
    id: 'id',
    designDocumentId: 'designDocumentId',
    authorId: 'authorId',
    body: 'body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BrandKitScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    logoUrl: 'logoUrl',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    accentColor: 'accentColor',
    fontFamily: 'fontFamily',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DesignTemplateScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    previewImageUrl: 'previewImageUrl',
    isPublished: 'isPublished',
    canvasWidth: 'canvasWidth',
    canvasHeight: 'canvasHeight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const TemplateFieldScalarFieldEnum = {
    id: 'id',
    templateId: 'templateId',
    key: 'key',
    label: 'label',
    fieldType: 'fieldType',
    required: 'required',
    maxLength: 'maxLength',
    sortOrder: 'sortOrder',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height',
    fontSize: 'fontSize',
    color: 'color'
};
export const ProjectAssetScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    templateId: 'templateId',
    name: 'name',
    createdById: 'createdById',
    unlinkedAt: 'unlinkedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AssetRevisionScalarFieldEnum = {
    id: 'id',
    projectAssetId: 'projectAssetId',
    status: 'status',
    createdById: 'createdById',
    approvedById: 'approvedById',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt'
};
export const AssetFieldValueScalarFieldEnum = {
    id: 'id',
    revisionId: 'revisionId',
    templateFieldId: 'templateFieldId',
    value: 'value'
};
export const AssetExportScalarFieldEnum = {
    id: 'id',
    assetRevisionId: 'assetRevisionId',
    format: 'format',
    status: 'status',
    objectKey: 'objectKey',
    errorMessage: 'errorMessage',
    requestedById: 'requestedById',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
};
export const CreativeBriefScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    summary: 'summary',
    audienceNotes: 'audienceNotes',
    copyAngles: 'copyAngles',
    layoutDirection: 'layoutDirection',
    readinessScore: 'readinessScore',
    readinessNotes: 'readinessNotes',
    status: 'status',
    createdById: 'createdById',
    approvedById: 'approvedById',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CreativeBriefVariantScalarFieldEnum = {
    id: 'id',
    creativeBriefId: 'creativeBriefId',
    label: 'label',
    copyAngle: 'copyAngle',
    imageConcept: 'imageConcept',
    sortOrder: 'sortOrder'
};
export const AiUsageRecordScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    requestedById: 'requestedById',
    purpose: 'purpose',
    model: 'model',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    estimatedCostMicros: 'estimatedCostMicros',
    createdAt: 'createdAt'
};
export const PlanDraftScalarFieldEnum = {
    id: 'id',
    discoveryBriefId: 'discoveryBriefId',
    goalTitle: 'goalTitle',
    goalDescription: 'goalDescription',
    goalPeriod: 'goalPeriod',
    goalYear: 'goalYear',
    summary: 'summary',
    risks: 'risks',
    contentIdeas: 'contentIdeas',
    readinessScore: 'readinessScore',
    readinessNotes: 'readinessNotes',
    status: 'status',
    createdById: 'createdById',
    appliedById: 'appliedById',
    appliedAt: 'appliedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PlanDraftProjectScalarFieldEnum = {
    id: 'id',
    planDraftId: 'planDraftId',
    name: 'name',
    description: 'description',
    sortOrder: 'sortOrder'
};
export const PlanDraftMilestoneScalarFieldEnum = {
    id: 'id',
    planDraftProjectId: 'planDraftProjectId',
    name: 'name',
    tasks: 'tasks',
    sortOrder: 'sortOrder'
};
export const PlanDraftChannelRecommendationScalarFieldEnum = {
    id: 'id',
    planDraftId: 'planDraftId',
    channel: 'channel',
    rationale: 'rationale',
    sortOrder: 'sortOrder'
};
export const PerformanceRecommendationScalarFieldEnum = {
    id: 'id',
    projectId: 'projectId',
    summary: 'summary',
    confidenceScore: 'confidenceScore',
    confidenceNotes: 'confidenceNotes',
    dataSummary: 'dataSummary',
    createdById: 'createdById',
    createdAt: 'createdAt'
};
export const PerformanceRecommendationItemScalarFieldEnum = {
    id: 'id',
    performanceRecommendationId: 'performanceRecommendationId',
    title: 'title',
    rationale: 'rationale',
    priority: 'priority',
    sortOrder: 'sortOrder'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map