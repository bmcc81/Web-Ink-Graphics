import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, finalize, forkJoin } from 'rxjs';

const discoverySteps = [
  'Meeting and project',
  'Audience and conversion',
  'Design, content and search',
  'Technical context',
  'Structured requirements',
  'Questions and follow-ups',
  'Boundaries and notes',
];

const completenessFields = [
  ['projectSummary', 'Project scope'],
  ['motivation', 'Reason for the project'],
  ['currentProblems', 'Current problems'],
  ['successDefinition', 'Definition of success'],
  ['targetLaunch', 'Target launch'],
  ['budget', 'Budget'],
  ['decisionMakers', 'Decision makers'],
  ['primaryAudience', 'Primary audience'],
  ['desiredAction', 'Visitor action'],
  ['brandAssets', 'Content and brand assets'],
] as const;

const discoveryTemplates = [
  {
    id: 'business-website',
    name: 'New business website',
    description: 'Core pages, lead generation, content ownership and launch planning.',
    projectType: 'new-website',
    requirements: [
      ['PAGE', 'MUST', 'Homepage', 'Explain the offer, audience and primary call to action.'],
      ['PAGE', 'MUST', 'Services or products', 'Describe priority services with clear next actions.'],
      ['PAGE', 'MUST', 'About and trust content', 'Establish credibility, experience and differentiators.'],
      ['FEATURE', 'MUST', 'Contact or inquiry flow', 'Capture qualified inquiries and confirm successful submission.'],
      ['SEO', 'SHOULD', 'Technical and on-page SEO', 'Provide indexable metadata, headings, sitemap and search-friendly content.'],
    ],
    questions: [
      'What are the top three services or products to promote?',
      'Who will supply and approve final copy, photography and brand assets?',
      'What information makes an inquiry qualified?',
      'Which competitors or alternatives do customers compare?',
      'Who controls the domain, hosting and existing business listings?',
    ],
  },
  {
    id: 'redesign',
    name: 'Website redesign',
    description: 'Current-site audit, migration, redirects and measurable improvements.',
    projectType: 'redesign',
    requirements: [
      ['TECHNICAL', 'MUST', 'Existing-site inventory', 'Inventory current pages, content, forms, integrations and tracking.'],
      ['DESIGN', 'MUST', 'Responsive design refresh', 'Improve visual hierarchy and usability across supported devices.'],
      ['SEO', 'MUST', 'URL and redirect plan', 'Preserve valuable URLs and redirect retired pages.'],
      ['CONTENT', 'SHOULD', 'Content migration and cleanup', 'Define content to retain, rewrite, combine or remove.'],
      ['TECHNICAL', 'SHOULD', 'Analytics baseline', 'Record current performance and conversion metrics before launch.'],
    ],
    questions: [
      'What specifically is not working on the current website?',
      'Which current pages receive meaningful traffic or generate leads?',
      'What must remain unchanged during the redesign?',
      'Are there existing analytics, search console or heatmap accounts?',
      'Who will approve redirects and migrated content?',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Catalog, checkout, fulfillment, tax, policies and operational ownership.',
    projectType: 'web-application',
    requirements: [
      ['FEATURE', 'MUST', 'Product catalog', 'Support agreed product types, variants, pricing and inventory behavior.'],
      ['FEATURE', 'MUST', 'Cart and checkout', 'Provide secure checkout with agreed payment methods.'],
      ['FEATURE', 'MUST', 'Order fulfillment workflow', 'Define shipping, pickup, notifications and order administration.'],
      ['CONTENT', 'MUST', 'Store policies', 'Publish shipping, returns, privacy and terms content.'],
      ['TECHNICAL', 'SHOULD', 'Commerce analytics', 'Track product views, cart activity, checkout and purchases.'],
    ],
    questions: [
      'How many products, variants and categories are required at launch?',
      'Which payment, tax, shipping and inventory systems must integrate?',
      'Who enters and maintains product data?',
      'What are the return, cancellation and fulfillment rules?',
      'Are customer accounts, subscriptions or wholesale pricing required?',
    ],
  },
  {
    id: 'landing-page',
    name: 'Campaign landing page',
    description: 'Single-purpose message, conversion flow, tracking and campaign launch.',
    projectType: 'new-website',
    requirements: [
      ['PAGE', 'MUST', 'Campaign landing page', 'Present one focused offer for the campaign audience.'],
      ['FEATURE', 'MUST', 'Conversion action', 'Implement the agreed form, booking, purchase or contact action.'],
      ['CONTENT', 'MUST', 'Proof and objection handling', 'Include evidence, reassurance and frequently raised concerns.'],
      ['TECHNICAL', 'MUST', 'Campaign tracking', 'Capture agreed analytics events and campaign parameters.'],
      ['DESIGN', 'SHOULD', 'Campaign variants', 'Define whether alternate headlines or creative variants are needed.'],
    ],
    questions: [
      'What is the single conversion goal?',
      'Where will campaign traffic come from?',
      'What promise or offer is being made?',
      'What proof supports the offer?',
      'How will leads be routed, followed up and measured?',
    ],
  },
  {
    id: 'maintenance',
    name: 'Website maintenance',
    description: 'Specific updates, access, backups, risk and acceptance checks.',
    projectType: 'maintenance',
    requirements: [
      ['TECHNICAL', 'MUST', 'Backup and rollback', 'Confirm a recoverable backup before production changes.'],
      ['FEATURE', 'MUST', 'Requested website updates', 'Document each requested change and its expected behavior.'],
      ['TECHNICAL', 'MUST', 'Access and environment review', 'Confirm platform, hosting, credentials and deployment process.'],
      ['TECHNICAL', 'SHOULD', 'Regression verification', 'Check affected pages, forms and supported devices after changes.'],
    ],
    questions: [
      'What exact changes are required and why?',
      'Who can provide administrative, hosting and domain access?',
      'Is there a staging environment and recent backup?',
      'What functionality must not be interrupted?',
      'Who will verify and approve the completed updates?',
    ],
  },
  {
    id: 'seo',
    name: 'SEO improvement',
    description: 'Baseline, search intent, technical findings, content and measurement.',
    projectType: 'maintenance',
    requirements: [
      ['SEO', 'MUST', 'SEO baseline and audit', 'Record current visibility, indexation and technical issues.'],
      ['SEO', 'MUST', 'Search intent and keyword map', 'Map priority audiences and queries to appropriate pages.'],
      ['CONTENT', 'MUST', 'Content improvement plan', 'Identify pages to create, expand, consolidate or retire.'],
      ['TECHNICAL', 'SHOULD', 'Technical SEO remediation', 'Address agreed crawl, performance, metadata and structured-data issues.'],
      ['SEO', 'SHOULD', 'Reporting and measurement', 'Define rankings, traffic, leads and reporting cadence.'],
    ],
    questions: [
      'Which services, products and locations are highest priority?',
      'What search performance data is currently available?',
      'Who are the main search competitors?',
      'Who can create and approve expert content?',
      'Which conversions should be attributed to organic search?',
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility remediation',
    description: 'Audit scope, target standard, prioritized fixes and verification.',
    projectType: 'maintenance',
    requirements: [
      ['TECHNICAL', 'MUST', 'Accessibility audit', 'Assess agreed templates and workflows against the target standard.'],
      ['DESIGN', 'MUST', 'Visual accessibility fixes', 'Address contrast, focus, text scaling and non-text content issues.'],
      ['FEATURE', 'MUST', 'Keyboard and assistive technology support', 'Correct navigation, controls, forms and announcements.'],
      ['CONTENT', 'MUST', 'Accessible content remediation', 'Improve headings, links, alternatives and document accessibility.'],
      ['TECHNICAL', 'SHOULD', 'Accessibility verification', 'Repeat automated and manual checks after remediation.'],
    ],
    questions: [
      'Which accessibility standard and conformance level are required?',
      'Which pages, workflows and documents are in scope?',
      'Have users reported specific barriers?',
      'Who owns ongoing accessible content practices?',
      'Is an accessibility statement or third-party review required?',
    ],
  },
] as const;

@Component({
  selector: 'app-discovery-editor',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './discovery-editor.html',
  styleUrl: './discovery-editor.scss',
})
export class DiscoveryEditor {
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private pendingAutosave = false;
  readonly clientId = this.route.snapshot.paramMap.get('clientId')!;
  readonly briefId = this.route.snapshot.paramMap.get('briefId')!;
  readonly editing = this.briefId !== 'new';
  readonly newDateToday = new Date().toISOString().slice(0, 10);
  readonly clientName = signal('');
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly generating = signal(false);
  readonly uploadingAttachment = signal(false);
  readonly attachmentError = signal('');
  readonly attachmentCategory = signal('REFERENCE');
  readonly attachments = signal<any[]>([]);
  readonly error = signal('');
  readonly prompt = signal('');
  readonly promptOutputType = signal('IMPLEMENTATION');
  readonly promptHistory = signal<any[]>([]);
  readonly approvalDate = signal('');
  readonly autosaveStatus = signal<'idle' | 'unsaved' | 'saving' | 'saved' | 'error'>('idle');
  readonly lastSaved = signal('');
  readonly guidedMode = signal(false);
  readonly guidedStep = signal(0);
  readonly scopeLocked = signal(false);
  readonly steps = discoverySteps;
  readonly templates = discoveryTemplates;
  readonly selectedTemplate = signal<string>(discoveryTemplates[0].id);
  readonly selectedTemplateDescription = computed(
    () =>
      this.templates.find((item) => item.id === this.selectedTemplate())
        ?.description || '',
  );
  private readonly formRevision = signal(0);
  readonly missingItems = computed(() => {
    this.formRevision();
    const missing: string[] = completenessFields
      .filter(([control]) => !String(this.form.controls[control].value).trim())
      .map(([, label]) => label);
    if (!this.requirements.controls.some((control) => String(control.value.title || '').trim())) {
      missing.push('At least one requirement');
    }
    return missing;
  });
  readonly completeness = computed(() => {
    const total = completenessFields.length + 1;
    return Math.round(((total - this.missingItems().length) / total) * 100);
  });
  readonly openFollowUps = computed(() => {
    this.formRevision();
    return this.questions.controls.filter(
      (control) =>
        control.value.question?.trim() && control.value.status !== 'ANSWERED',
    ).length;
  });
  readonly overdueFollowUps = computed(() => {
    this.formRevision();
    const today = new Date().toISOString().slice(0, 10);
    return this.questions.controls.filter(
      (control) =>
        control.value.question?.trim() &&
        control.value.status !== 'ANSWERED' &&
        control.value.dueDate &&
        control.value.dueDate < today,
    ).length;
  });

  readonly form = this.fb.nonNullable.group({
    title: ['Website discovery', Validators.required],
    status: ['DRAFT'],
    meetingAt: [''],
    projectType: ['new-website', Validators.required],
    projectSummary: [''],
    motivation: [''],
    currentProblems: [''],
    successDefinition: [''],
    targetLaunch: [''],
    budget: [''],
    decisionMakers: [''],
    primaryAudience: [''],
    secondaryAudiences: [''],
    audienceProblems: [''],
    commonObjections: [''],
    desiredAction: [''],
    designDirection: [''],
    likedSites: [''],
    dislikedSites: [''],
    brandAssets: [''],
    seoTargets: [''],
    targetLocations: [''],
    currentPlatform: [''],
    integrations: [''],
    hostingProvider: [''],
    domainRegistrar: [''],
    compliance: [''],
    assumptions: [''],
    outOfScope: [''],
    rawNotes: [''],
    approvedBy: [''],
    requirements: this.fb.array([this.requirementGroup()]),
    openQuestions: this.fb.array([this.questionGroup()]),
  });

  get requirements() { return this.form.controls.requirements as FormArray; }
  get questions() { return this.form.controls.openQuestions as FormArray; }

  constructor() {
    this.form.valueChanges
      .pipe(debounceTime(1200), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.formRevision.update((value) => value + 1);
        if (!this.loading() && this.editing && this.form.dirty) this.autosave();
      });
    const clientRequest = this.http.get<any>(`/api/clients/${this.clientId}`);
    if (this.editing) {
      forkJoin({ client: clientRequest, brief: this.http.get<any>(`/api/clients/briefs/${this.briefId}`) })
        .subscribe({
          next: ({ client, brief }) => { this.clientName.set(client.companyName); this.populate(brief); this.loading.set(false); },
          error: () => { this.error.set('The discovery brief could not be loaded.'); this.loading.set(false); },
        });
    } else {
      clientRequest.subscribe({
        next: (client) => { this.clientName.set(client.companyName); this.loading.set(false); },
        error: () => { this.error.set('The client could not be loaded.'); this.loading.set(false); },
      });
    }
  }

  addRequirement() { if (!this.scopeLocked()) this.requirements.push(this.requirementGroup()); }
  removeRequirement(index: number) { if (!this.scopeLocked()) this.requirements.removeAt(index); }
  addQuestion() { if (!this.scopeLocked()) this.questions.push(this.questionGroup()); }
  removeQuestion(index: number) { if (!this.scopeLocked()) this.questions.removeAt(index); }
  toggleGuidedMode() {
    this.guidedMode.update((value) => !value);
    this.guidedStep.set(0);
  }
  previousStep() { this.guidedStep.update((value) => Math.max(0, value - 1)); }
  nextStep() { this.guidedStep.update((value) => Math.min(this.steps.length - 1, value + 1)); }
  reopenScope() {
    if (!confirm('Reopen this approved scope for client review? Further changes will require approval again.')) return;
    this.form.enable({ emitEvent: false });
    this.scopeLocked.set(false);
    this.form.controls.status.setValue('CLIENT_REVIEW');
    this.form.markAsDirty();
    this.save();
  }
  startDevelopment() {
    this.form.enable({ emitEvent: false });
    this.scopeLocked.set(false);
    this.form.controls.status.setValue('IN_PROGRESS');
    this.form.markAsDirty();
    this.save();
  }
  applyTemplate() {
    if (this.scopeLocked()) return;
    const template = this.templates.find((item) => item.id === this.selectedTemplate());
    if (!template) return;
    const hasExisting =
      this.requirements.controls.some((item) => item.value.title?.trim()) ||
      this.questions.controls.some((item) => item.value.question?.trim());
    if (hasExisting && !confirm('Add this template to the existing brief? Existing entries will remain.')) return;

    this.form.controls.projectType.setValue(template.projectType);
    const requirementTitles = new Set(
      this.requirements.controls.map((item) => item.value.title?.trim().toLowerCase()),
    );
    if (!hasExisting) this.requirements.clear();
    template.requirements.forEach(([category, priority, title, details]) => {
      if (!requirementTitles.has(title.toLowerCase())) {
        this.requirements.push(this.requirementGroup({ category, priority, title, details }));
      }
    });
    const questionTitles = new Set(
      this.questions.controls.map((item) => item.value.question?.trim().toLowerCase()),
    );
    if (!hasExisting) this.questions.clear();
    template.questions.forEach((question) => {
      if (!questionTitles.has(question.toLowerCase())) {
        this.questions.push(this.questionGroup({ question }));
      }
    });
    this.form.markAsDirty();
    this.formRevision.update((value) => value + 1);
  }

  save(automatic = false) {
    if (this.form.invalid || this.saving()) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.error.set('');
    if (automatic) this.autosaveStatus.set('saving');
    const payload = this.payload();
    const savedVersion = JSON.stringify(payload);
    const request = this.editing
      ? this.http.patch(`/api/clients/briefs/${this.briefId}`, payload)
      : this.http.post<any>(`/api/clients/${this.clientId}/briefs`, payload);
    request.pipe(finalize(() => {
      this.saving.set(false);
      if (this.pendingAutosave) {
        this.pendingAutosave = false;
        queueMicrotask(() => this.autosave());
      }
    })).subscribe({
      next: (brief: any) => {
        this.syncSavedRecords(brief);
        this.applyScopeLock(brief.status);
        if (brief.approvedAt) {
          this.approvalDate.set(new Date(brief.approvedAt).toLocaleDateString());
        }
        if (JSON.stringify(this.payload()) === savedVersion) {
          this.form.markAsPristine();
          this.autosaveStatus.set('saved');
        } else {
          this.form.markAsDirty();
          this.autosaveStatus.set('unsaved');
          this.pendingAutosave = true;
        }
        this.lastSaved.set(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
        if (!this.editing) void this.router.navigate(['/admin/clients', this.clientId, 'discovery', brief.id]);
      },
      error: () => {
        this.autosaveStatus.set('error');
        this.error.set(automatic
          ? 'Autosave failed. Your changes remain in this browser; use Save brief to try again.'
          : 'The discovery brief could not be saved.');
      },
    });
  }

  generatePrompt() {
    if (!this.editing) { this.error.set('Save the brief before generating a prompt.'); return; }
    this.generating.set(true);
    this.http.post<any>(`/api/clients/briefs/${this.briefId}/generate-prompt`, {
      outputType: this.promptOutputType(),
    })
      .pipe(finalize(() => this.generating.set(false)))
      .subscribe({
        next: (result) => {
          this.prompt.set(result.content);
          this.promptHistory.update((items) => [result, ...items].slice(0, 5));
        },
        error: () => this.error.set('The Codex prompt could not be generated.'),
      });
  }

  copyPrompt() {
    void navigator.clipboard.writeText(this.prompt());
  }
  printBrief() { window.print(); }
  uploadAttachment(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file || !this.editing || this.scopeLocked()) return;
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/avif',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/plain',
    ];
    if (!allowedTypes.includes(file.type)) {
      this.attachmentError.set('Choose an image, PDF, Word, Excel or text file.');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      this.attachmentError.set('Attachments must be 20 MB or smaller.');
      return;
    }
    this.attachmentError.set('');
    this.uploadingAttachment.set(true);
    this.http.post<any>('/api/media/upload-url', {
      fileName: file.name,
      contentType: file.type,
      fileSize: file.size,
      purpose: 'DISCOVERY',
    }).subscribe({
      next: (upload) => {
        this.http.put(upload.uploadUrl, file, {
          headers: upload.headers,
          responseType: 'text',
        }).subscribe({
          next: () => {
            this.http.post<any>(`/api/clients/briefs/${this.briefId}/attachments`, {
              fileName: file.name,
              objectKey: upload.key,
              contentType: file.type,
              fileSize: file.size,
              category: this.attachmentCategory(),
            }).pipe(finalize(() => this.uploadingAttachment.set(false))).subscribe({
              next: (attachment) => this.attachments.update((items) => [attachment, ...items]),
              error: () => this.attachmentError.set('The uploaded file could not be attached to this brief.'),
            });
          },
          error: () => {
            this.uploadingAttachment.set(false);
            this.attachmentError.set('The private upload failed. Check the storage CORS configuration.');
          },
        });
      },
      error: () => {
        this.uploadingAttachment.set(false);
        this.attachmentError.set('A private upload URL could not be created. Check storage configuration.');
      },
    });
  }
  downloadAttachment(item: any) {
    this.http.get<any>(`/api/clients/attachments/${item.id}/download`).subscribe({
      next: (result) => window.open(result.downloadUrl, '_blank', 'noopener'),
      error: () => this.attachmentError.set('A secure download link could not be created.'),
    });
  }
  deleteAttachment(item: any) {
    if (this.scopeLocked()) return;
    if (!confirm(`Delete ${item.fileName}?`)) return;
    this.http.delete(`/api/clients/attachments/${item.id}`).subscribe({
      next: () => this.attachments.update((items) => items.filter((entry) => entry.id !== item.id)),
      error: () => this.attachmentError.set('The attachment could not be deleted.'),
    });
  }
  fileSize(bytes: number) {
    return bytes < 1024 * 1024
      ? `${Math.ceil(bytes / 1024)} KB`
      : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
  selectPrompt(item: any) { this.prompt.set(item.content); }
  promptLabel(content: string) {
    return content.split('\n')[0]?.replace(/^#\s*/, '') || 'Generated prompt';
  }
  promptDate(createdAt: string) {
    return new Date(createdAt).toLocaleString([], {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  private requirementGroup(value: any = {}) {
    return this.fb.nonNullable.group({
      id: [value.id || ''],
      referenceCode: [value.referenceCode || ''],
      category: [value.category || 'PAGE'],
      priority: [value.priority || 'MUST'],
      status: [value.status || 'PLANNED'],
      title: [value.title || ''],
      details: [value.details || ''],
      rationale: [value.rationale || ''],
      acceptanceCriteria: [value.acceptanceCriteria || ''],
    });
  }

  private questionGroup(value: any = {}) {
    return this.fb.nonNullable.group({
      id: [value.id || ''],
      question: [value.question || ''],
      answer: [value.answer || ''],
      status: [value.status || 'OPEN'],
      owner: [value.owner || ''],
      dueDate: [value.dueDate?.slice(0, 10) || ''],
      priority: [value.priority || 'NORMAL'],
    });
  }

  private populate(brief: any) {
    const { requirements, openQuestions, generatedPrompts, attachments, meetingAt, approvedAt, ...fields } = brief;
    this.form.patchValue({ ...fields, meetingAt: meetingAt?.slice(0, 16) || '' });
    this.requirements.clear();
    (requirements.length ? requirements : [{}]).forEach((item: any) => this.requirements.push(this.requirementGroup(item)));
    this.questions.clear();
    (openQuestions.length ? openQuestions : [{}]).forEach((item: any) => this.questions.push(this.questionGroup(item)));
    this.promptHistory.set(generatedPrompts || []);
    this.attachments.set(attachments || []);
    this.approvalDate.set(approvedAt ? new Date(approvedAt).toLocaleDateString() : '');
    if (generatedPrompts?.[0]) this.prompt.set(generatedPrompts[0].content);
    this.form.markAsPristine();
    this.formRevision.update((value) => value + 1);
    this.autosaveStatus.set('saved');
    this.lastSaved.set(new Date(brief.updatedAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    this.applyScopeLock(brief.status);
  }

  private autosave() {
    if (!this.editing || !this.form.dirty || this.form.invalid) {
      if (this.form.dirty) this.autosaveStatus.set('unsaved');
      return;
    }
    if (this.saving()) {
      this.pendingAutosave = true;
      return;
    }
    this.save(true);
  }

  private payload() {
    const value = this.form.getRawValue();
    return {
      ...value,
      meetingAt: value.meetingAt ? new Date(value.meetingAt).toISOString() : undefined,
      requirements: value.requirements.filter((item) => item.title.trim()),
      openQuestions: value.openQuestions
        .filter((item) => item.question.trim())
        .map((item) => ({
          ...item,
          owner: item.owner || undefined,
          dueDate: item.dueDate || undefined,
        })),
    };
  }

  private syncSavedRecords(brief: any) {
    brief.requirements?.forEach((item: any, index: number) => {
      this.requirements.at(index)?.patchValue(
        {
          id: item.id,
          referenceCode: item.referenceCode,
          status: item.status,
        },
        { emitEvent: false },
      );
    });
    brief.openQuestions?.forEach((item: any, index: number) => {
      this.questions.at(index)?.patchValue({ id: item.id }, { emitEvent: false });
    });
  }

  private applyScopeLock(status: string) {
    if (status === 'APPROVED') {
      this.form.disable({ emitEvent: false });
      this.form.controls.status.enable({ emitEvent: false });
      this.scopeLocked.set(true);
    } else if (this.scopeLocked()) {
      this.form.enable({ emitEvent: false });
      this.scopeLocked.set(false);
    }
  }
}
