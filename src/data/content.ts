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
    ach: 'Built compass-validator end-to-end: automated map validation for 9,000+ stores in CI (replacing manual Chrome sampling). Shipped as an NPM package adopted by three teams; wired into the Kafka-backed Map Refresh Pipeline as a pre-persist validation gate.',
    tags: ['Node.js', 'TypeScript', 'Playwright', 'Kafka', 'NPM'],
  },
  {
    co: "Sam's Club — Ad Center",
    ro: 'Frontend / Full-Stack Engineer',
    dt: 'Sep 2024–Jan 2025',
    ach: "Raised automation pass rate from 40% to 90% by tracing systemic CI failures and shipping a centralized config layer that decoupled Walmart vs Sam's environments — removing most environment-specific flakes.",
    tags: ['React', 'GraphQL', 'CI/CD', 'Jest', 'TypeScript'],
  },
  {
    co: "Sam's Club — AdPal",
    ro: 'Frontend / Full-Stack Engineer',
    dt: 'Mar 2023–Sep 2024',
    ach: 'Led REST→GraphQL subscriptions: cut API traffic ~80%, removed stale-data duplicate bookings, and restored WebSocket reliability from 60% to 99% (four root-cause fixes). Introduced a two-query Apollo shape that dropped ~22,000 over-fetched fields.',
    tags: ['Apollo', 'Django', 'WebSocket', 'PostgreSQL', 'TanStack Query'],
  },
  {
    co: "Sam's Club — Opus CMS",
    ro: 'Frontend Engineer',
    dt: 'Mar 2022–Mar 2023',
    ach: 'Shipped Design Pages and Design Modules for Opus (CMS behind SamsClub.com): file manager with RBAC, drag-and-drop page composition, WYSIWYG preview, and draft→staging→publish.',
    tags: ['React', 'CMS', 'RBAC', 'WYSIWYG', 'TypeScript'],
  },
  {
    co: 'Walmart — Global Experience',
    ro: 'Frontend Engineer',
    dt: 'Mar 2021–Mar 2022',
    ach: 'Built search and homepage micro-frontends for Walmart.ca (orchestration + event bus), WCAG 2.1–aligned. CI/CD with Jest, RTL, CodeceptJS, and Playwright.',
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
    demo: null,
    github: 'https://github.com/longgangsima',
  },
  {
    n: '02',
    title: 'System Management Dashboard',
    type: 'Full-stack · DevTools',
    tl: 'Unified real-time monitoring and control plane for distributed multi-service systems. Live GraphQL subscriptions across 20+ services, configurable alert rules, and an interactive dependency graph.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'Redis'],
    demo: null,
    github: 'https://github.com/longgangsima',
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
