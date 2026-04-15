export type Project = {
    slug: string;
    title: string;
    role: string;
    duration: string;
    excerpt: string;
    description: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        slug: "core-platform-modernization",
        title: "Core Platform Modernization",
        role: "Senior Software Engineer",
        duration: "2023 - 2024",
        excerpt:
            "Led the migration of a legacy monolith to scalable microservices, improving system reliability and deployment speed. Architected CI/CD pipelines and mentored the engineering team.",
        description:
            "Core Platform Modernization involved migrating a legacy monolithic application to a modern microservices architecture. This project aimed to improve system reliability, deployment speed, and overall engineering efficiency.",
        tags: ["Microservices", "CI/CD", "Cloud Platform"],
    }
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