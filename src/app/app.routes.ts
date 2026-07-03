import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { portalAuthGuard } from './core/auth/portal-auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'WebInk Graphics | Web Design & Digital Marketing Montreal',
    loadComponent: () => import('./features/home/home-page').then((module) => module.HomePage),
  },
  {
    path: 'services/web-design',
    title: 'Web Design & Development Montreal | WebInk Graphics',
    loadComponent: () => import('./features/services/service-page').then((module) => module.ServicePage),
    data: {
      service: {
        eyebrow: 'Web design & development',
        title: 'Websites that turn',
        accent: 'attention into action.',
        introduction: 'Strategic, responsive websites shaped around your customers, your goals and the way your business actually works.',
        deliverables: ['Discovery and content strategy', 'Custom responsive interface design', 'Angular development and CMS integration', 'Technical SEO and performance setup', 'Launch support and team training'],
        benefits: [
          { title: 'Make the value clear', description: 'Give visitors a fast, convincing answer to why they should choose your business.' },
          { title: 'Convert more visits', description: 'Shape every page around useful next steps instead of leaving people at a dead end.' },
          { title: 'Build for growth', description: 'Start with a maintainable foundation that can evolve as your services and audience do.' },
        ],
      },
    },
  },
  {
    path: 'services/seo',
    title: 'SEO Services Montreal | WebInk Graphics',
    loadComponent: () => import('./features/services/service-page').then((module) => module.ServicePage),
    data: {
      service: {
        eyebrow: 'Search engine optimization',
        title: 'Be found by people',
        accent: 'already looking.',
        introduction: 'Practical technical, local and content-focused SEO that earns useful visibility—not vanity rankings.',
        deliverables: ['Technical and content audit', 'Keyword and competitor research', 'On-page optimization', 'Google Business Profile and local SEO', 'Measurement, reporting and improvements'],
        benefits: [
          { title: 'Reach qualified buyers', description: 'Focus visibility on the searches most closely connected to your services.' },
          { title: 'Fix hidden barriers', description: 'Resolve technical and structural issues that make strong content difficult to discover.' },
          { title: 'Compound over time', description: 'Create useful pages and authority that continue working beyond a single campaign.' },
        ],
      },
    },
  },
  {
    path: 'services/newsletters',
    title: 'Email Newsletter Design Montreal | WebInk Graphics',
    loadComponent: () => import('./features/services/service-page').then((module) => module.ServicePage),
    data: {
      service: {
        eyebrow: 'Email newsletters',
        title: 'Stay useful. Stay',
        accent: 'top of mind.',
        introduction: 'Branded email campaigns that respect the inbox, reward attention and give customers a reason to return.',
        deliverables: ['Campaign and audience planning', 'Branded responsive email templates', 'Copywriting and content design', 'List segmentation and automation', 'Testing and performance reporting'],
        benefits: [
          { title: 'Own the relationship', description: 'Build an audience you can reach directly without depending entirely on social platforms.' },
          { title: 'Create consistency', description: 'Show up with a recognizable voice and cadence your customers learn to trust.' },
          { title: 'Learn what resonates', description: 'Use real engagement data to sharpen future content, offers and campaigns.' },
        ],
      },
    },
  },
  {
    path: 'services/graphic-design',
    title: 'Graphic Design & Branding Montreal | WebInk Graphics',
    loadComponent: () => import('./features/services/service-page').then((module) => module.ServicePage),
    data: {
      service: {
        eyebrow: 'Graphic design & branding',
        title: 'Look as good as',
        accent: 'your work deserves.',
        introduction: 'Clear, distinctive visual systems that make every part of your business feel intentional and recognizably yours.',
        deliverables: ['Brand strategy and creative direction', 'Logo and visual identity systems', 'Print and promotional materials', 'Social and campaign graphics', 'Practical brand guidelines'],
        benefits: [
          { title: 'Be recognizable', description: 'Create a visual language people can identify quickly across every channel.' },
          { title: 'Build confidence', description: 'Present your business with the consistency and care customers expect from a professional.' },
          { title: 'Work more efficiently', description: 'Give your team useful templates and rules instead of reinventing every new asset.' },
        ],
      },
    },
  },
  {
    path: 'portfolio',
    title: 'Portfolio | WebInk Graphics Montreal',
    loadComponent: () => import('./features/portfolio/portfolio-page').then((module) => module.PortfolioPage),
  },
  {
    path: 'portfolio/:slug',
    loadComponent: () =>
      import('./features/portfolio/case-study/case-study').then(
        (module) => module.CaseStudy,
      ),
  },
  {
    path: 'fr',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'WebInk Graphics | Conception Web et Marketing Numérique Montréal',
        loadComponent: () => import('./features/home/home-page').then((module) => module.HomePage),
      },
      {
        path: 'services/web-design',
        title: 'Conception et développement Web Montréal | WebInk Graphics',
        loadComponent: () => import('./features/services/service-page').then((module) => module.ServicePage),
        data: {
          service: {
            eyebrow: 'Conception et développement Web',
            title: 'Des sites qui transforment',
            accent: "l'attention en action.",
            introduction: 'Des sites stratégiques et adaptatifs conçus autour de vos clients, de vos objectifs et du fonctionnement réel de votre entreprise.',
            deliverables: ['Découverte et stratégie de contenu', "Conception d'interfaces adaptatives sur mesure", 'Développement Angular et intégration CMS', 'Référencement technique et optimisation de la performance', "Soutien au lancement et formation de l'équipe"],
            benefits: [
              { title: 'Clarifier votre valeur', description: 'Donnez rapidement aux visiteurs une raison convaincante de choisir votre entreprise.' },
              { title: 'Convertir davantage', description: 'Orientez chaque page vers une prochaine étape utile et évidente.' },
              { title: 'Préparer la croissance', description: 'Bâtissez une fondation maintenable qui évolue avec vos services et votre clientèle.' },
            ],
          },
        },
      },
      {
        path: 'services/seo',
        title: 'Services SEO Montréal | WebInk Graphics',
        loadComponent: () => import('./features/services/service-page').then((module) => module.ServicePage),
        data: {
          service: {
            eyebrow: 'Optimisation pour les moteurs de recherche',
            title: 'Soyez trouvé par ceux',
            accent: 'qui vous cherchent déjà.',
            introduction: 'Un référencement technique, local et axé sur le contenu qui génère une visibilité réellement utile.',
            deliverables: ['Audit technique et de contenu', 'Recherche de mots-clés et de concurrents', 'Optimisation des pages', 'Profil Google et référencement local', 'Mesure, rapports et améliorations'],
            benefits: [
              { title: 'Joindre les bons clients', description: 'Concentrez votre visibilité sur les recherches liées à vos services.' },
              { title: 'Éliminer les obstacles', description: 'Corrigez les problèmes techniques qui empêchent votre contenu d’être découvert.' },
              { title: 'Progresser dans le temps', description: 'Créez des pages utiles dont la valeur dépasse une campagne ponctuelle.' },
            ],
          },
        },
      },
      {
        path: 'services/newsletters',
        title: 'Conception d’infolettres Montréal | WebInk Graphics',
        loadComponent: () => import('./features/services/service-page').then((module) => module.ServicePage),
        data: {
          service: {
            eyebrow: 'Infolettres',
            title: 'Restez utile. Restez',
            accent: "présent à l'esprit.",
            introduction: 'Des campagnes courriel de marque qui respectent la boîte de réception et donnent envie aux clients de revenir.',
            deliverables: ['Planification des campagnes et audiences', 'Modèles courriel adaptatifs', 'Rédaction et conception du contenu', 'Segmentation et automatisation', 'Tests et rapports de performance'],
            benefits: [
              { title: 'Posséder la relation', description: 'Joignez directement votre audience sans dépendre entièrement des réseaux sociaux.' },
              { title: 'Créer une constance', description: 'Développez une voix et un rythme reconnaissables auxquels vos clients font confiance.' },
              { title: 'Comprendre ce qui fonctionne', description: 'Utilisez les données d’engagement pour améliorer vos prochaines campagnes.' },
            ],
          },
        },
      },
      {
        path: 'services/graphic-design',
        title: 'Design graphique et image de marque Montréal | WebInk Graphics',
        loadComponent: () => import('./features/services/service-page').then((module) => module.ServicePage),
        data: {
          service: {
            eyebrow: 'Design graphique et image de marque',
            title: 'Une image à la hauteur',
            accent: 'de votre savoir-faire.',
            introduction: 'Des systèmes visuels clairs et distinctifs qui rendent votre entreprise cohérente et reconnaissable.',
            deliverables: ['Stratégie de marque et direction créative', 'Logo et identité visuelle', 'Matériel imprimé et promotionnel', 'Visuels sociaux et publicitaires', 'Guide de marque pratique'],
            benefits: [
              { title: 'Être reconnaissable', description: 'Créez un langage visuel identifiable rapidement sur tous les canaux.' },
              { title: 'Inspirer confiance', description: 'Présentez votre entreprise avec la cohérence attendue d’un professionnel.' },
              { title: 'Travailler efficacement', description: 'Donnez à votre équipe des modèles et règles faciles à appliquer.' },
            ],
          },
        },
      },
      {
        path: 'portfolio',
        title: 'Portfolio | WebInk Graphics Montréal',
        loadComponent: () => import('./features/portfolio/portfolio-page').then((module) => module.PortfolioPage),
      },
      {
        path: 'portfolio/:slug',
        loadComponent: () => import('./features/portfolio/case-study/case-study').then((module) => module.CaseStudy),
      },
    ],
  },
  {
    path: 'accept-invitation',
    title: 'Accept Company Invitation | WebInk Graphics',
    loadComponent: () =>
      import('./features/portal/accept-invitation/accept-invitation').then(
        (module) => module.AcceptInvitation,
      ),
  },
  {
    path: 'portal/login',
    title: 'Customer Login | WebInk Graphics',
    loadComponent: () =>
      import('./features/portal/login/portal-login').then(
        (module) => module.PortalLogin,
      ),
  },
  {
    path: 'portal',
    title: 'Customer Workspace | WebInk Graphics',
    canActivate: [portalAuthGuard],
    loadComponent: () =>
      import('./features/portal/dashboard/portal-dashboard').then(
        (module) => module.PortalDashboard,
      ),
  },
  {
    path: 'portal/:organizationId/members',
    title: 'Team Members | WebInk Graphics',
    canActivate: [portalAuthGuard],
    loadComponent: () =>
      import('./features/portal/members/portal-members').then(
        (module) => module.PortalMembers,
      ),
  },
  {
    path: 'portal/:organizationId/projects',
    title: 'Projects | WebInk Graphics',
    canActivate: [portalAuthGuard],
    loadComponent: () =>
      import('./features/portal/projects/portal-projects-list').then(
        (module) => module.PortalProjectsList,
      ),
  },
  {
    path: 'portal/:organizationId/projects/:projectId',
    title: 'Project | WebInk Graphics',
    canActivate: [portalAuthGuard],
    loadComponent: () =>
      import('./features/portal/projects/portal-project-detail').then(
        (module) => module.PortalProjectDetail,
      ),
  },
  {
    path: 'admin/login',
    title: 'Admin Login | WebInk Graphics',
    loadComponent: () =>
      import('./features/admin/login/admin-login').then((module) => module.AdminLogin),
  },
  {
    path: 'admin',
    title: 'Portfolio Administration | WebInk Graphics',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/admin/dashboard/admin-dashboard').then(
        (module) => module.AdminDashboard,
      ),
  },
  {
    path: 'admin/projects/new',
    title: 'New Portfolio Project | WebInk Graphics',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/admin/project-editor/project-editor').then(
        (module) => module.ProjectEditor,
      ),
  },
  {
    path: 'admin/projects/:slug',
    title: 'Edit Portfolio Project | WebInk Graphics',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/admin/project-editor/project-editor').then(
        (module) => module.ProjectEditor,
      ),
  },
  {
    path: 'admin/leads',
    title: 'Lead Management | WebInk Graphics',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/admin/leads/admin-leads').then(
        (module) => module.AdminLeads,
      ),
  },
  {
    path: 'admin/clients',
    title: 'Clients & Discovery | WebInk Graphics',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/clients/admin-clients').then((module) => module.AdminClients),
  },
  {
    path: 'admin/clients/:clientId/discovery/:briefId',
    title: 'Client Discovery Brief | WebInk Graphics',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/discovery/discovery-editor').then((module) => module.DiscoveryEditor),
  },
  { path: '**', redirectTo: '' },
];
