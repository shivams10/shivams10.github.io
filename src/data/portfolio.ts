/**
 * Every piece of copy on the site lives here.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivams10.github.io"
).replace(/\/$/, "");

export const profile = {
  name: "Shivam Shukla",
  shortName: "Shivam",
  initials: "SS",
  role: "Senior Frontend Engineer",
  currentRole: "Frontend Developer at HumynLabs AI",
  stack: ["React.js", "Next.js", "React Native", "TypeScript"],
  headline:
    "I build React interfaces that load fast and scale with the team behind them.",
  intro:
    "Senior Frontend Engineer with 4+ years shipping React.js, Next.js and React Native products used by 10K+ people every month. I care about frontend architecture, Core Web Vitals and TypeScript-first component design, and I deliver full stack when the product needs it: Node.js APIs, MySQL, Docker and CI/CD.",
  email: "shivams91099@gmail.com",
  github: "https://github.com/shivams10",
  githubHandle: "shivams10",
  linkedin: "https://linkedin.com/in/shivam-shukla-4b870b1b3c",
  resume: "/Shivam_Shukla_Resume.pdf",
};

export const stats = [
  { value: "4+", label: "years shipping frontends" },
  { value: "10K+", label: "monthly active users" },
  { value: "53M+", label: "verified users on KGeN" },
  { value: "6–7", label: "engineers mentored" },
];

/** Screenshot base name in /public/images/work (…-720/1280/1920.avif|webp). */
export type Shot = { name: string; alt: string };

export type Client = {
  name: string;
  blurb: string;
  url?: string;
  points: string[];
  image?: Shot;
  /** Phone screenshots of the client's mobile app (portrait), with a store link. */
  app?: { label: string; href: string; shots: Shot[] };
};

export type Job = {
  company: string;
  role: string;
  period: string;
  url?: string;
  summary?: string;
  points: string[];
  image?: Shot;
  clients?: Client[];
};

export const experience: Job[] = [
  {
    company: "HumynLabs AI",
    role: "Frontend Developer",
    period: "Oct 2026 — Present",
    url: "https://humynlabs.ai",
    summary: "Multi-sensory human data platform for robotics and physical AI.",
    points: [
      "Own the humynlabs.ai website end to end, frontend and backend, driving SEO, Core Web Vitals (LCP) and performance.",
      "Developed the Humyn Lens Android app and owned its Google Play Store launch: release builds, internal testing and store compliance.",
      "Built the app's end-to-end authentication system and its listing page with debounced search, filters and infinite scrolling.",
    ],
    image: {
      name: "humynlabs",
      alt: 'humynlabs.ai homepage: "The research & data engine for Physical AI" over a robot arm playing chess with a person',
    },
  },
  {
    company: "Spark Eighteen",
    role: "Senior Frontend Engineer",
    period: "Sep 2022 — Oct 2026",
    points: [
      "Led frontend architecture across cross-platform products serving 10K+ MAU (4K DAU), partnering directly with clients.",
      "Mentored 6–7 engineers and led code reviews across client accounts, enforcing code quality and best practices.",
    ],
    clients: [
      {
        name: "KGeN",
        blurb: "Web3 gaming network with 53M+ verified users",
        url: "https://engage.kgen.io/",
        points: [
          "Improved Lighthouse SEO from 60 to 100 and performance from 65 to 98; cut LCP from 2.5s to 0.4s and bundle size by ~40% with code splitting and lazy loading.",
          "Architected a Turborepo monorepo of 4 Next.js and React.js websites; built and published a shared authentication npm package, shipped via Jenkins and AWS CodeBuild.",
          "Managed Android and iOS releases for React Native apps: versioning, store compliance and rollouts.",
          "Built region-aware experiences for Indian and international users, with separate auth flows, region-specific features and multi-language support.",
          "Delivered real-time KYC verification over Server-Sent Events and integrated a USDT crypto wallet for send and receive.",
          "Built 2D animations in HTML/CSS/JS and 3D scenes with Three.js; handled large data sets with debouncing, throttling and infinite scroll on TanStack Query, Redux and Context API.",
          "Designed REST APIs in a Node.js/Express.js backend for a CRUD-driven marketing site; integrated Sentry and Bugsnag for crash reporting.",
          "Built AI-powered developer workflows with Claude and custom skill files, automating code review with CodeRabbit.",
        ],
        image: {
          name: "kgen",
          alt: 'KGeN Engage homepage with the "Your Data Trains The World\'s AI" hero and featured K-Quests',
        },
        app: {
          label: "KGeN: AI Quests & Rewards",
          href: "https://play.google.com/store/apps/details?id=com.indiggcommunity",
          shots: [
            {
              name: "kgen-app-1",
              alt: "KGeN app K-Quest tab: live and upcoming game quests with rewards and slots left",
            },
            {
              name: "kgen-app-2",
              alt: "KGeN app AI Training tab: quests such as Navigate.AI II and Handwrite to Train AI",
            },
            {
              name: "kgen-app-3",
              alt: "KGeN app Clans screen: recommended clans with locations and member counts",
            },
            {
              name: "kgen-app-4",
              alt: "KGeN app KStore screen: featured vouchers such as Valorant Points priced in K-Points",
            },
          ],
        },
      },
      {
        name: "KStore",
        blurb: "E-commerce for digital gift cards, vouchers and gaming top-ups",
        url: "https://kstore.global/",
        points: [
          "Built core e-commerce flows: product listing, cart and payment gateway integration.",
        ],
        image: {
          name: "kstore",
          alt: "KStore homepage with a gift-card hero banner, shopping categories and best-deal vouchers",
        },
      },
      {
        name: "HumynLabs AI",
        blurb: "Client engagement before joining full time",
        url: "https://humynlabs.ai",
        points: [
          "Built the humynlabs.ai website and the Humyn Lens Android app, then joined HumynLabs AI directly in Oct 2026.",
        ],
      },
    ],
  },
  {
    company: "PRP Webs",
    role: "Frontend Web Developer",
    period: "Jul 2022 — Sep 2022",
    points: [
      "Built React.js interfaces on REST APIs and optimised Shopify and WordPress sites, bringing LCP under 1.5 seconds.",
    ],
  },
];

export type Project = {
  name: string;
  repo: string;
  tagline: string;
  description: string;
  highlights: string[];
  metrics?: { value: string; label: string }[];
  stack: string[];
  links: { label: string; href: string }[];
  /** Screenshot base name in /public/images/projects (…-720/1280.avif|webp). */
  image?: { name: string; alt: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "QA Kit",
    repo: "qa-workflow",
    tagline: "A Claude Code plugin that does QA properly",
    description:
      "Point it at a PRD, a Figma frame, a Jira ticket or a branch. It works out what the change is supposed to do, ranks the risk, hunts for edge cases, writes tests at the cheapest level that can catch a regression, then proves each test can actually fail. Developers can ship tested work without waiting on a dedicated QA engineer.",
    highlights: [
      "18 commands orchestrated by a single /qa entry point",
      "3 agents plus Playwright MCP to drive the real app like a manual tester",
      "Separates real bugs from bad tests when a test fails",
    ],
    metrics: [
      { value: "53% → 90%", label: "mutation score" },
      { value: "32K → 5.5K", label: "agent context tokens" },
    ],
    stack: [
      "Claude Code",
      "Agents",
      "Playwright MCP",
      "Mutation testing",
      "JavaScript",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/shivams10/qa-workflow" },
    ],
    featured: true,
  },
  {
    name: "Chat Nest",
    repo: "chat-nest",
    tagline: "AI chat SDK with streaming and cost controls",
    description:
      "A production-ready AI chat platform published as a 3-package npm monorepo: a React hook and client SDK, an Express streaming server, and shared contracts. Teams can add AI chat without giving up reliability, cancellation or spend control.",
    highlights: [
      "Token streaming over Server-Sent Events, with cancellation that reaches the model call",
      "Daily token budgets, per-request caps, rate limiting and message trimming",
      "useAiChat() hook with switchable response profiles",
    ],
    stack: ["TypeScript", "React", "Express", "SSE", "OpenAI", "npm"],
    links: [
      { label: "GitHub", href: "https://github.com/shivams10/chat-nest" },
      { label: "npm", href: "https://www.npmjs.com/package/chat-nest-sdk" },
    ],
    image: {
      name: "chat-nest",
      alt: "Chat Nest demo app streaming answers, with usage profile, daily budget and max-token controls in the header",
    },
  },
  {
    name: "DocSync",
    repo: "OfflineDocs",
    tagline: "Offline-first collaborative documents",
    description:
      "Documents you have opened stay fully editable with no network. Saves made offline are queued and sync once the connection returns, and edits from different people merge automatically through a CRDT, so nobody has to resolve a conflict.",
    highlights: [
      "Next.js 16 PWA with an offline save queue and web push",
      "Per-document roles and live presence",
      "Dictation transcribed by a self-hosted faster-whisper service",
    ],
    stack: [
      "Next.js 16",
      "PWA",
      "CRDT",
      "Express 5",
      "PostgreSQL",
      "Prisma",
      "FastAPI",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/shivams10/OfflineDocs" },
    ],
    image: {
      name: "docsync",
      alt: "DocSync editor showing a design-notes document with a collaborator's presence chip in the toolbar",
    },
  },
  {
    name: "PDF RAG with Voice",
    repo: "rag-pdf",
    tagline: "Ask a PDF questions, typed or spoken",
    description:
      "Upload a PDF and get answers grounded in its content. Documents are chunked, embedded and retrieved through Qdrant, then answered by Gemini through a LangChain RAG chain, with retrieval scoped to the document you uploaded.",
    highlights: [
      "Voice questions transcribed locally by Whisper, so no audio leaves the machine",
      "Retrieval filtered by document ID so one PDF never leaks into another",
      "S3-backed uploads with validation and size caps",
    ],
    stack: [
      "LangChain",
      "Qdrant",
      "Gemini",
      "Whisper",
      "React",
      "Express",
      "AWS S3",
    ],
    links: [{ label: "GitHub", href: "https://github.com/shivams10/rag-pdf" }],
    image: {
      name: "rag-pdf",
      alt: "PDF Q&A app with an uploaded PDF and an answer grounded in the document's text",
    },
  },
  {
    name: "Nest Assessment",
    repo: "nest-assessment",
    tagline: "Exam portal for campus hiring",
    description:
      "Recruiters create exam sessions for colleges, build multiple question sets with AI-assisted generation and publish them. Candidates take timed exams, and both sides see the results.",
    highlights: [
      "AI-generated question sets with OpenAI",
      "JWT access and refresh tokens plus Google OAuth",
      "pnpm + Turborepo monorepo with shared types",
    ],
    stack: ["NestJS", "React", "Prisma", "PostgreSQL", "OpenAI", "Turborepo"],
    links: [
      { label: "GitHub", href: "https://github.com/shivams10/nest-assessment" },
    ],
    image: {
      name: "nest-assessment",
      alt: "Nest Assessment admin question bank with technical and aptitude questions and an AI Generator button",
    },
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux",
      "Context API",
      "TanStack Query",
      "Tailwind CSS",
      "Mantine UI",
      "Three.js",
      "Responsive design",
    ],
  },
  {
    group: "Performance & UX",
    items: [
      "Core Web Vitals",
      "Code splitting",
      "Lazy loading",
      "Bundle optimisation",
      "Debouncing & throttling",
      "Infinite scrolling",
      "UI animation",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST API design",
      "Server-Sent Events",
      "MySQL",
      "Firebase",
      "Jest",
    ],
  },
  {
    group: "AI / LLM",
    items: [
      "RAG",
      "LangChain.js",
      "Embeddings",
      "Prompt structuring",
      "Token optimisation",
      "Streaming responses",
      "Claude",
      "Cursor",
    ],
  },
  {
    group: "Tooling & DevOps",
    items: [
      "Turborepo",
      "npm publishing",
      "Docker",
      "Jenkins",
      "CI/CD",
      "AWS CodeBuild",
      "AWS ECR",
      "Sentry",
      "Bugsnag",
      "ESLint",
      "Prettier",
      "Husky",
      "Git",
      "Agile/Scrum",
    ],
  },
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
];

export const education = [
  {
    title: "B.Tech, Computer Science and Engineering",
    place: "Poornima College of Engineering, Jaipur",
    detail: "GPA 8.75",
  },
  {
    title: "Higher Secondary (Maths/CS) & Secondary",
    place: "Lions English School, Silvassa",
    detail: "80% / CGPA 8.2",
  },
];

export const certifications = [
  { title: "Develop Generative AI Applications", issuer: "Coursera" },
  { title: "Frontend System Design", issuer: "Namaste.dev" },
  { title: "Docker Training Course", issuer: "KodeKloud" },
  { title: "The Web Developer Bootcamp", issuer: "Udemy" },
];

export const achievements: { title: string; detail?: string }[] = [
  { title: "Employee of the Month" },
  {
    title: "CodeChef 3-Star",
    detail: "Peak rating 1614 in competitive programming",
  },
];

export const nav = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
