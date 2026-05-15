export type Experience = {
  co: string;
  ro: string;
  dt: string;
  current?: boolean;
  ach: string;
  tags: string[];
};

export type Project = {
  n: string;
  title: string;
  type: string;
  tl: string;
  stack: string[];
  demo: string | null;
  github: string | null;
};

export const EXP: Experience[] = [
  {
    co: 'Walmart — Compass',
    ro: 'Frontend / Full-Stack Engineer',
    dt: 'Mar 2025–Present',
    current: true,
    ach: 'Built compass-validator end-to-end — automated map validation across 9,000+ stores in CI, replacing manual Chrome-based sampling. Published as an NPM package adopted by 3 teams; integrated into Kafka-orchestrated Map Refresh Pipeline as a pre-persist validation gate.',
    tags: ['Node.js', 'TypeScript', 'Playwright', 'Kafka', 'NPM'],
  },
  {
    co: "Sam's Club — Ad Center",
    ro: 'Frontend / Full-Stack Engineer',
    dt: 'Sep 2024–Jan 2025',
    ach: "Restored automation pass rate 40% → 90% by diagnosing systemic CI failures and building a centralized config system that decoupled Walmart and Sam's environments — eliminating 90% of environment-specific failures.",
    tags: ['React', 'GraphQL', 'CI/CD', 'Jest', 'TypeScript'],
  },
  {
    co: "Sam's Club — AdPal",
    ro: 'Frontend / Full-Stack Engineer',
    dt: 'Mar 2023–Sep 2024',
    ach: 'Led REST→GraphQL subscription migration that cut API traffic ~80% and eliminated stale-data duplicate bookings. Designed two-query Apollo architecture eliminating ~22,000 fields of over-fetching. Restored WebSocket reliability 60% → 99% by fixing 4 root causes.',
    tags: ['Apollo', 'Django', 'WebSocket', 'PostgreSQL', 'TanStack Query'],
  },
  {
    co: "Sam's Club — Opus CMS",
    ro: 'Frontend Engineer',
    dt: 'Mar 2022–Mar 2023',
    ach: 'Built Design Pages and Design Modules management for Opus, the CMS powering SamsClub.com. Delivered File Manager with RBAC, drag-and-drop composition, WYSIWYG preview, and draft→staging→publish workflow.',
    tags: ['React', 'CMS', 'RBAC', 'WYSIWYG', 'TypeScript'],
  },
  {
    co: 'Walmart — Global Experience',
    ro: 'Frontend Engineer',
    dt: 'Mar 2021–Mar 2022',
    ach: 'Delivered search and homepage micro-frontend modules for Walmart.ca, serving millions of Canadian shoppers within an orchestration + event bus architecture. WCAG 2.1 compliant. Full CI/CD with Jest, RTL, CodeceptJS, and Playwright.',
    tags: ['Micro-frontend', 'WCAG 2.1', 'Playwright', 'Jest', 'Dynatrace'],
  },
];

export const PROJECTS: Project[] = [
  {
    n: '01',
    title: 'AI Live Coach',
    type: 'AI · Full-stack',
    tl: 'Real-time AI coaching platform that analyzes your speech, pacing, and content quality as you present — delivering instant, personalized feedback so you improve in the moment, not after.',
    stack: ['React', 'Node.js', 'OpenAI API', 'WebSocket', 'PostgreSQL'],
    demo: '#',
    github: 'https://github.com/longgangsima',
  },
  {
    n: '02',
    title: 'System Management Dashboard',
    type: 'Full-stack · DevTools',
    tl: 'Unified real-time monitoring and control plane for distributed multi-service systems. Live GraphQL subscriptions across 20+ services, configurable alert rules, and an interactive dependency graph.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'Redis'],
    demo: '#',
    github: 'https://github.com/longgangsima',
  },
  {
    n: '03',
    title: 'Your Next Project',
    type: 'Coming soon',
    tl: 'Add your third project here — describe the problem it solves and what makes it technically interesting.',
    stack: ['Your', 'Stack', 'Here'],
    demo: null,
    github: null,
  },
];

export const FILES = [
  'api/client.ts',
  'cache/apollo.ts',
  'ws/socket.ts',
  'hooks/useQuery.ts',
  'store/index.ts',
  'graphql/schema.ts',
  'Table.tsx',
  'kafka/producer.ts',
  'db/queries.sql',
  'tests/e2e.spec.ts',
  'config/env.ts',
  'auth/middleware.ts',
];
