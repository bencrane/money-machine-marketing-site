// Synthetic company dataset for the audience builder (~80 companies)

export interface AudienceCompany {
  name: string;
  domain: string;
  industry: string;
  size: CompanySize;
  techStack: string[];
  intentScore: number; // 0-100
  intentTopics: string[];
  region: string;
  fundingStage: string;
  revenue: string;
}

export type CompanySize = "1-50" | "51-200" | "201-1000" | "1001-5000" | "5000+";

export interface AudienceFilters {
  sizes: CompanySize[];
  industries: string[];
  techStack: string[];
  intentMin: number;
  regions: string[];
}

export const allIndustries = [
  "Developer Tools",
  "Fintech",
  "Data Infrastructure",
  "Cybersecurity",
  "AI / ML",
  "Cloud Infrastructure",
  "Product Analytics",
  "HR Tech",
  "Sales Tech",
  "Design Tools",
];

export const allTechStack = [
  "React",
  "TypeScript",
  "Python",
  "Go",
  "Kubernetes",
  "AWS",
  "GCP",
  "PostgreSQL",
  "Snowflake",
  "Rust",
];

export const allRegions = ["US West", "US East", "Europe", "APAC"];

export const audienceCompanies: AudienceCompany[] = [
  { name: "Linear", domain: "linear.app", industry: "Developer Tools", size: "51-200", techStack: ["TypeScript", "React", "PostgreSQL"], intentScore: 88, intentTopics: ["Project management", "Developer productivity"], region: "US West", fundingStage: "Series B", revenue: "$20M–50M" },
  { name: "Vercel", domain: "vercel.com", industry: "Cloud Infrastructure", size: "201-1000", techStack: ["TypeScript", "Go", "AWS"], intentScore: 91, intentTopics: ["Edge computing", "Serverless"], region: "US West", fundingStage: "Series D", revenue: "$100M–200M" },
  { name: "Supabase", domain: "supabase.com", industry: "Data Infrastructure", size: "51-200", techStack: ["TypeScript", "PostgreSQL", "Go"], intentScore: 89, intentTopics: ["Backend-as-a-service", "Open source"], region: "US West", fundingStage: "Series C", revenue: "$20M–50M" },
  { name: "PostHog", domain: "posthog.com", industry: "Product Analytics", size: "51-200", techStack: ["Python", "TypeScript", "React"], intentScore: 86, intentTopics: ["Product analytics", "Session replay"], region: "US West", fundingStage: "Series B", revenue: "$10M–30M" },
  { name: "Clerk", domain: "clerk.com", industry: "Developer Tools", size: "51-200", techStack: ["TypeScript", "React", "Go"], intentScore: 90, intentTopics: ["Authentication", "User management"], region: "US East", fundingStage: "Series B", revenue: "$10M–30M" },
  { name: "Neon", domain: "neon.tech", industry: "Data Infrastructure", size: "51-200", techStack: ["Rust", "PostgreSQL", "TypeScript"], intentScore: 86, intentTopics: ["Serverless database", "Branching"], region: "US West", fundingStage: "Series B", revenue: "$10M–30M" },
  { name: "Ramp", domain: "ramp.com", industry: "Fintech", size: "201-1000", techStack: ["Python", "TypeScript", "React", "AWS"], intentScore: 92, intentTopics: ["Spend management", "Corporate cards"], region: "US East", fundingStage: "Series D", revenue: "$200M–500M" },
  { name: "Mercury", domain: "mercury.com", industry: "Fintech", size: "201-1000", techStack: ["TypeScript", "React", "PostgreSQL", "AWS"], intentScore: 88, intentTopics: ["Startup banking", "Treasury"], region: "US West", fundingStage: "Series C", revenue: "$100M–200M" },
  { name: "Brex", domain: "brex.com", industry: "Fintech", size: "1001-5000", techStack: ["TypeScript", "React", "Kubernetes", "AWS"], intentScore: 85, intentTopics: ["Enterprise expense", "Corporate cards"], region: "US West", fundingStage: "Late Stage", revenue: "$300M+" },
  { name: "Datadog", domain: "datadog.com", industry: "Cloud Infrastructure", size: "5000+", techStack: ["Go", "Python", "TypeScript", "AWS"], intentScore: 78, intentTopics: ["Observability", "APM"], region: "US East", fundingStage: "Public", revenue: "$2B+" },
  { name: "Figma", domain: "figma.com", industry: "Design Tools", size: "1001-5000", techStack: ["TypeScript", "React", "AWS"], intentScore: 82, intentTopics: ["Design systems", "Collaboration"], region: "US West", fundingStage: "Late Stage", revenue: "$500M+" },
  { name: "Retool", domain: "retool.com", industry: "Developer Tools", size: "201-1000", techStack: ["TypeScript", "React", "Python", "PostgreSQL"], intentScore: 87, intentTopics: ["Internal tools", "Low-code"], region: "US West", fundingStage: "Series C", revenue: "$50M–100M" },
  { name: "dbt Labs", domain: "dbt.com", industry: "Data Infrastructure", size: "201-1000", techStack: ["Python", "TypeScript", "React", "Snowflake"], intentScore: 81, intentTopics: ["Data transformation", "Analytics engineering"], region: "US East", fundingStage: "Series D", revenue: "$100M–200M" },
  { name: "PlanetScale", domain: "planetscale.com", industry: "Data Infrastructure", size: "51-200", techStack: ["Go", "TypeScript", "React"], intentScore: 84, intentTopics: ["Serverless MySQL", "Database branching"], region: "US West", fundingStage: "Series C", revenue: "$20M–50M" },
  { name: "Amplitude", domain: "amplitude.com", industry: "Product Analytics", size: "201-1000", techStack: ["TypeScript", "React", "AWS", "Snowflake"], intentScore: 80, intentTopics: ["Product analytics", "CDP"], region: "US West", fundingStage: "Public", revenue: "$250M+" },
  { name: "Loom", domain: "loom.com", industry: "Sales Tech", size: "201-1000", techStack: ["TypeScript", "React", "Python", "GCP"], intentScore: 76, intentTopics: ["Async video", "Sales enablement"], region: "US West", fundingStage: "Acquired", revenue: "$100M+" },
  { name: "Snyk", domain: "snyk.io", industry: "Cybersecurity", size: "1001-5000", techStack: ["TypeScript", "Go", "Python", "AWS"], intentScore: 83, intentTopics: ["AppSec", "Supply chain security"], region: "Europe", fundingStage: "Series G", revenue: "$200M+" },
  { name: "Wiz", domain: "wiz.io", industry: "Cybersecurity", size: "1001-5000", techStack: ["Go", "Python", "TypeScript", "AWS", "GCP"], intentScore: 95, intentTopics: ["Cloud security", "CNAPP"], region: "US East", fundingStage: "Series E", revenue: "$500M+" },
  { name: "CrowdStrike", domain: "crowdstrike.com", industry: "Cybersecurity", size: "5000+", techStack: ["Go", "Python", "AWS", "Kubernetes"], intentScore: 72, intentTopics: ["Endpoint security", "XDR"], region: "US West", fundingStage: "Public", revenue: "$3B+" },
  { name: "Cohere", domain: "cohere.com", industry: "AI / ML", size: "201-1000", techStack: ["Python", "Go", "GCP", "Kubernetes"], intentScore: 93, intentTopics: ["Enterprise LLM", "RAG"], region: "US West", fundingStage: "Series D", revenue: "$50M–100M" },
  { name: "Anthropic", domain: "anthropic.com", industry: "AI / ML", size: "201-1000", techStack: ["Python", "Rust", "GCP", "Kubernetes"], intentScore: 96, intentTopics: ["AI safety", "Enterprise AI"], region: "US West", fundingStage: "Series E", revenue: "$500M+" },
  { name: "Mistral AI", domain: "mistral.ai", industry: "AI / ML", size: "51-200", techStack: ["Python", "Rust", "GCP"], intentScore: 91, intentTopics: ["Open-source LLM", "EU AI"], region: "Europe", fundingStage: "Series B", revenue: "$20M–50M" },
  { name: "Scale AI", domain: "scale.com", industry: "AI / ML", size: "201-1000", techStack: ["Python", "TypeScript", "React", "AWS"], intentScore: 87, intentTopics: ["Data labeling", "AI infrastructure"], region: "US West", fundingStage: "Series F", revenue: "$200M+" },
  { name: "Replicate", domain: "replicate.com", industry: "AI / ML", size: "51-200", techStack: ["Python", "Go", "GCP"], intentScore: 84, intentTopics: ["Model hosting", "AI inference"], region: "US West", fundingStage: "Series B", revenue: "$10M–30M" },
  { name: "Grafana Labs", domain: "grafana.com", industry: "Cloud Infrastructure", size: "1001-5000", techStack: ["Go", "TypeScript", "React", "AWS"], intentScore: 79, intentTopics: ["Observability", "Open source"], region: "US East", fundingStage: "Series D", revenue: "$200M+" },
  { name: "HashiCorp", domain: "hashicorp.com", industry: "Cloud Infrastructure", size: "1001-5000", techStack: ["Go", "TypeScript", "React", "AWS", "GCP"], intentScore: 75, intentTopics: ["Infrastructure automation", "Zero trust"], region: "US West", fundingStage: "Public", revenue: "$500M+" },
  { name: "Pulumi", domain: "pulumi.com", industry: "Cloud Infrastructure", size: "51-200", techStack: ["Go", "TypeScript", "Python", "AWS"], intentScore: 82, intentTopics: ["IaC", "Platform engineering"], region: "US West", fundingStage: "Series C", revenue: "$20M–50M" },
  { name: "Temporal", domain: "temporal.io", industry: "Developer Tools", size: "201-1000", techStack: ["Go", "TypeScript", "GCP", "Kubernetes"], intentScore: 85, intentTopics: ["Workflow orchestration", "Durable execution"], region: "US West", fundingStage: "Series B", revenue: "$20M–50M" },
  { name: "Resend", domain: "resend.com", industry: "Developer Tools", size: "1-50", techStack: ["TypeScript", "React", "Rust", "PostgreSQL"], intentScore: 83, intentTopics: ["Developer email", "Transactional email"], region: "US West", fundingStage: "Series A", revenue: "$5M–15M" },
  { name: "Fly.io", domain: "fly.io", industry: "Cloud Infrastructure", size: "51-200", techStack: ["Rust", "Go", "TypeScript"], intentScore: 79, intentTopics: ["Edge compute", "GPU hosting"], region: "US West", fundingStage: "Series B", revenue: "$10M–30M" },
  { name: "Rippling", domain: "rippling.com", industry: "HR Tech", size: "1001-5000", techStack: ["Python", "TypeScript", "React", "AWS"], intentScore: 90, intentTopics: ["HR platform", "Workforce management"], region: "US West", fundingStage: "Series E", revenue: "$300M+" },
  { name: "Deel", domain: "deel.com", industry: "HR Tech", size: "1001-5000", techStack: ["TypeScript", "React", "Python", "AWS"], intentScore: 88, intentTopics: ["Global payroll", "EOR"], region: "US West", fundingStage: "Series D", revenue: "$400M+" },
  { name: "Gusto", domain: "gusto.com", industry: "HR Tech", size: "1001-5000", techStack: ["Python", "React", "TypeScript", "AWS", "PostgreSQL"], intentScore: 77, intentTopics: ["Payroll", "SMB HR"], region: "US West", fundingStage: "Series F", revenue: "$400M+" },
  { name: "Gong", domain: "gong.io", industry: "Sales Tech", size: "1001-5000", techStack: ["Python", "TypeScript", "React", "AWS"], intentScore: 86, intentTopics: ["Revenue intelligence", "Conversation analytics"], region: "US West", fundingStage: "Series E", revenue: "$200M+" },
  { name: "Outreach", domain: "outreach.io", industry: "Sales Tech", size: "1001-5000", techStack: ["TypeScript", "React", "Python", "AWS"], intentScore: 82, intentTopics: ["Sales engagement", "Revenue execution"], region: "US West", fundingStage: "Series G", revenue: "$200M+" },
  { name: "Apollo.io", domain: "apollo.io", industry: "Sales Tech", size: "201-1000", techStack: ["TypeScript", "React", "Python", "PostgreSQL"], intentScore: 89, intentTopics: ["Sales intelligence", "Prospecting"], region: "US West", fundingStage: "Series D", revenue: "$100M+" },
  { name: "Clay", domain: "clay.com", industry: "Sales Tech", size: "51-200", techStack: ["TypeScript", "React", "Python", "PostgreSQL"], intentScore: 94, intentTopics: ["Data enrichment", "GTM automation"], region: "US East", fundingStage: "Series B", revenue: "$20M–50M" },
  { name: "Fivetran", domain: "fivetran.com", industry: "Data Infrastructure", size: "1001-5000", techStack: ["Python", "TypeScript", "React", "Snowflake", "AWS"], intentScore: 80, intentTopics: ["ELT", "Data integration"], region: "US West", fundingStage: "Series D", revenue: "$200M+" },
  { name: "Airbyte", domain: "airbyte.com", industry: "Data Infrastructure", size: "201-1000", techStack: ["Python", "TypeScript", "React", "Kubernetes"], intentScore: 85, intentTopics: ["Open source ELT", "Data movement"], region: "US West", fundingStage: "Series B", revenue: "$20M–50M" },
  { name: "Hex", domain: "hex.tech", industry: "Data Infrastructure", size: "51-200", techStack: ["Python", "TypeScript", "React", "Snowflake"], intentScore: 83, intentTopics: ["Collaborative analytics", "Data notebooks"], region: "US West", fundingStage: "Series B", revenue: "$10M–30M" },
  { name: "1Password", domain: "1password.com", industry: "Cybersecurity", size: "1001-5000", techStack: ["Rust", "TypeScript", "React", "Go", "AWS"], intentScore: 81, intentTopics: ["Password management", "Enterprise secrets"], region: "US East", fundingStage: "Series C", revenue: "$200M+" },
  { name: "Tailscale", domain: "tailscale.com", industry: "Cybersecurity", size: "51-200", techStack: ["Go", "TypeScript", "React"], intentScore: 84, intentTopics: ["Zero trust networking", "VPN alternative"], region: "US East", fundingStage: "Series B", revenue: "$20M–50M" },
  { name: "Mixpanel", domain: "mixpanel.com", industry: "Product Analytics", size: "201-1000", techStack: ["Python", "TypeScript", "React", "GCP"], intentScore: 78, intentTopics: ["Product analytics", "Self-serve"], region: "US West", fundingStage: "Series C", revenue: "$100M+" },
  { name: "Heap", domain: "heap.io", industry: "Product Analytics", size: "201-1000", techStack: ["TypeScript", "React", "Python", "AWS"], intentScore: 76, intentTopics: ["Auto-capture analytics", "Digital insights"], region: "US West", fundingStage: "Acquired", revenue: "$50M+" },
  { name: "Lattice", domain: "lattice.com", industry: "HR Tech", size: "201-1000", techStack: ["TypeScript", "React", "Python", "PostgreSQL"], intentScore: 79, intentTopics: ["Performance management", "OKRs"], region: "US West", fundingStage: "Series F", revenue: "$100M+" },
  { name: "Pendo", domain: "pendo.io", industry: "Product Analytics", size: "1001-5000", techStack: ["TypeScript", "React", "Python", "AWS"], intentScore: 77, intentTopics: ["Product adoption", "In-app guidance"], region: "US East", fundingStage: "Series F", revenue: "$150M+" },
  { name: "Webflow", domain: "webflow.com", industry: "Design Tools", size: "201-1000", techStack: ["TypeScript", "React", "Go", "AWS"], intentScore: 81, intentTopics: ["Visual development", "No-code"], region: "US West", fundingStage: "Series C", revenue: "$100M+" },
  { name: "Framer", domain: "framer.com", industry: "Design Tools", size: "51-200", techStack: ["TypeScript", "React", "Go"], intentScore: 85, intentTopics: ["Website builder", "Design-to-code"], region: "Europe", fundingStage: "Series C", revenue: "$30M–60M" },
];

export function filterAudience(
  companies: AudienceCompany[],
  filters: AudienceFilters,
): AudienceCompany[] {
  return companies.filter((c) => {
    if (filters.sizes.length > 0 && !filters.sizes.includes(c.size)) return false;
    if (filters.industries.length > 0 && !filters.industries.includes(c.industry)) return false;
    if (filters.techStack.length > 0 && !filters.techStack.some((t) => c.techStack.includes(t))) return false;
    if (c.intentScore < filters.intentMin) return false;
    if (filters.regions.length > 0 && !filters.regions.includes(c.region)) return false;
    return true;
  });
}
