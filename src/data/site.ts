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

export { siteMeta };
