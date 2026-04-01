import { siteMeta } from "./metadata";

export const navLinks = [
  { href: "/", label: "About", key: "about" },
  { href: "/posts", label: "Post", key: "post" },
  { href: "/projects", label: "Project", key: "project" },
] as const;

export const posts = [
  {
    slug: "building-scalable-microservices-with-go",
    title: "Building Scalable Microservices with Go",
    category: "Engineering",
    date: "Feb 15, 2024",
    excerpt:
      "An in-depth guide to designing and implementing microservices architecture using Go, covering service discovery, API gateways, and deployment strategies.",
    description: "Thoughts, insights, and technical writings",
  },
  {
    slug: "the-evolution-of-cicd-pipelines",
    title: "The Evolution of CI/CD Pipelines",
    category: "Engineering",
    date: "Jan 28, 2024",
    excerpt:
      "Exploring how CI/CD practices have evolved from simple scripts to sophisticated pipelines, and what the future holds for automated deployments.",
    description: "Lessons from modern delivery systems and platform thinking.",
  },
  {
    slug: "designing-for-developer-experience",
    title: "Designing for Developer Experience",
    category: "Product",
    date: "Jan 15, 2024",
    excerpt:
      "How prioritizing developer experience in product design leads to better outcomes, happier teams, and more sustainable engineering practices.",
    description: "Why developer ergonomics should be treated as a product feature.",
  },
  {
    slug: "from-monolith-to-microservices-a-migration-story",
    title: "From Monolith to Microservices: A Migration Story",
    category: "Engineering",
    date: "Dec 20, 2023",
    excerpt:
      "Lessons learned from migrating a large monolithic application to a microservices architecture, including challenges, benefits, and best practices.",
    description: "A candid migration story from risk to resilience.",
  },
  {
    slug: "the-art-of-code-reviews",
    title: "The Art of Code Reviews",
    category: "Engineering",
    date: "Nov 30, 2023",
    excerpt:
      "Best practices for conducting effective code reviews that improve code quality, foster team learning, and maintain positive working relationships.",
    description: "Code review as a craft, not a gate.",
  },
] as const;

export const featuredPost = {
  ...posts[0],
  sections: [
    {
      title: "Why Go fits the problem",
      body: [
        "Go offers a strong balance of runtime efficiency, straightforward concurrency primitives, and a standard library that covers most service-level needs without a heavy framework tax.",
        "That combination makes it a practical choice for teams building many small services where consistency, startup time, and operational simplicity matter.",
      ],
    },
    {
      title: "Architecture decisions that matter early",
      body: [
        "Start by defining service boundaries around business capabilities instead of database tables. That keeps ownership clean and reduces the temptation to recreate a distributed monolith.",
        "Introduce API gateways, service discovery, and centralized observability as platform concerns so individual services can stay focused on domain behavior.",
      ],
    },
    {
      title: "Delivery and operability",
      body: [
        "Scalability is not just about throughput. It is also about how quickly the team can ship, monitor, and roll back changes safely.",
        "CI/CD automation, structured logs, and health-based deployments should be treated as part of the product architecture, not as cleanup work for later.",
      ],
    },
  ],
} as const;

export const projects = [
  {
    slug: "core-platform-modernization",
    title: "Core Platform Modernization",
    role: "Senior Software Engineer",
    duration: "2023 - 2024",
    excerpt:
      "Led the migration of a legacy monolith to scalable microservices, improving system reliability and deployment speed. Architected CI/CD pipelines and mentored the engineering team.",
    tags: ["Microservices", "CI/CD", "Cloud Platform"],
  },
  {
    slug: "nexus-mobile-platform",
    title: "Nexus Mobile Platform",
    role: "Software Engineer",
    duration: "2022 - 2023",
    excerpt:
      "Developed a cross-platform mobile app for personalized learning, integrating real-time notifications and analytics. Enhanced onboarding and engagement with robust backend APIs.",
    tags: ["Microservices", "API Development", "Analytics"],
  },
  {
    slug: "atlas-b2b-platform",
    title: "Atlas B2B Platform",
    role: "Full Stack Engineer",
    duration: "2021 - 2022",
    excerpt:
      "Engineered a scalable B2B platform for enterprise workflow automation and integrations with secure authentication, real-time dashboards, and optimized database performance.",
    tags: ["Full Stack", "Workflow Automation", "Security"],
  },
  {
    slug: "realtime-collaboration-suite",
    title: "Realtime Collaboration Suite",
    role: "Backend Engineer",
    duration: "2020 - 2021",
    excerpt:
      "Built scalable websocket infrastructure for live document editing and chat, with distributed event processing and low-latency global delivery.",
    tags: ["Websockets", "Distributed Systems", "Low Latency"],
  },
  {
    slug: "ai-data-pipeline",
    title: "AI Data Pipeline",
    role: "Data Engineer",
    duration: "2019 - 2020",
    excerpt:
      "Designed and implemented ETL pipelines for large-scale AI training datasets, automating validation, transformation, and cloud storage integration.",
    tags: ["ETL", "Cloud Storage", "Data Validation"],
  },
] as const;

export const featuredProject = {
  ...projects[0],
  summary:
    "Led the transformation of a legacy monolith into a scalable, cloud-native microservices platform. The work improved reliability, deployment speed, and engineering velocity.",
  overview: [
    "Core Platform Modernization was initiated to address the growing pains of a rapidly scaling SaaS product. The legacy system suffered from frequent outages, slow deployments, and limited scalability.",
  ],
  overviewPoints: [
    "Problem: Monolithic architecture causing bottlenecks and operational risk.",
    "Objective: Enable rapid feature delivery, high availability, and seamless scaling.",
    "Scope: Full migration to microservices, CI/CD automation, and cloud infrastructure adoption.",
  ],
  features: [
    "Microservices architecture design and implementation",
    "Automated CI/CD pipelines with GitHub Actions and ArgoCD",
    "Cloud migration with AWS and Kubernetes",
    "Centralized logging and monitoring",
    "Zero-downtime deployments",
  ],
  responsibilities: [
    "Architected and led the migration from monolith to microservices",
    "Designed and implemented CI/CD pipelines",
    "Mentored and coordinated a team of 6 engineers",
    "Defined service boundaries and API contracts",
    "Owned cloud infrastructure setup and automation",
  ],
  techStack: ["Go", "Node.js", "Kubernetes", "AWS", "PostgreSQL", "GitHub Actions"],
  previews: [
    {
      src: "https://placehold.co/1200x700/e8f0fe/1b1b4e?text=Platform+Dashboard",
      alt: "Platform dashboard preview",
    },
    {
      src: "https://placehold.co/1200x700/dbeafe/1b1b4e?text=Service+Observability",
      alt: "Service observability preview",
    },
    {
      src: "https://placehold.co/1200x700/e0f2fe/1b1b4e?text=Deployment+Workflow",
      alt: "Deployment workflow preview",
    },
  ],
} as const;

export { siteMeta };
