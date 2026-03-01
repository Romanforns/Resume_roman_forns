import { z } from 'zod';

export const domainEnum = z.enum([
  'data-engineering',
  'analytics-bi',
  'architecture-integration',
  'blockchain-web3',
  'ml-ai',
  'sap-salesforce',
  'devops-platform',
]);

export const caseStudySchema = z.object({
  slug: z.string(),
  title: z.string(),
  timeframe: z.string(),
  role: z.string().optional(),
  domain: z.array(domainEnum).or(domainEnum),
  stack: z.array(z.string()),
  problem: z.string().optional(),
  approach: z.string().optional(),
  outcome: z.string().optional(),
  metrics: z.array(z.string()).optional(),
  artifacts: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
  highlights: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  confidentialityLevel: z.enum(['public', 'confidential', 'internal']).default('public'),
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudySchema>;

export const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  companyUrl: z.string().optional(),
  start: z.string(),
  end: z.string(),
  summary: z.string(),
  impact: z.array(z.string()).optional(),
  projects: z.array(z.string()).optional(),
});

export const cvSchema = z.object({
  name: z.string(),
  headline: z.string(),
  summary: z.string(),
  summaryExtended: z.string().optional(),
  coreStrengths: z.array(z.string()),
  experience: z.array(experienceSchema),
  selectedProjectSlugs: z.array(z.string()).optional(),
  skills: z.array(
    z.object({
      category: z.string(),
      items: z.string(),
      level: z.number().min(0).max(100).optional(),
    })
  ),
  areasOfExpertise: z.array(z.string()),
  professionalAttributes: z.array(z.string()),
  languages: z.array(
    z.object({
      name: z.string(),
      level: z.string().optional(),
      levelPercent: z.number().optional(),
    })
  ),
  education: z.array(
    z.object({
      degree: z.string(),
      institution: z.string(),
      institutionUrl: z.string().optional(),
      start: z.string(),
      end: z.string(),
    })
  ),
  certifications: z.array(z.object({ name: z.string(), issuer: z.string().optional() })).optional(),
  contact: z.object({
    location: z.string().optional(),
    phone: z.string().optional(),
    email: z.string(),
    skype: z.string().optional(),
    skypeId: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
  }),
  personalProjects: z
    .array(
      z.object({
        title: z.string(),
        slug: z.string().optional(),
        timeframe: z.string(),
        description: z.string(),
      })
    )
    .optional(),
});

export type CVData = z.infer<typeof cvSchema>;
