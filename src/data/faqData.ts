import {
  BadgeDollarSign,
  Link2,
  LockKeyhole,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Category = {
  id: string;
  label: string;
  articleCount: number;
  icon: LucideIcon;
};

export type Faq = {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
};

export const categories: Category[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    articleCount: 6,
    icon: Rocket,
  },
  {
    id: 'platform',
    label: 'Platform & Features',
    articleCount: 8,
    icon: ShieldCheck,
  },
  {
    id: 'security',
    label: 'Security & Compliance',
    articleCount: 7,
    icon: LockKeyhole,
  },
  {
    id: 'pricing',
    label: 'Pricing & Billing',
    articleCount: 6,
    icon: BadgeDollarSign,
  },
  {
    id: 'integrations',
    label: 'Integrations',
    articleCount: 9,
    icon: Link2,
  },
];

export const faqs: Faq[] = [
  {
    id: 'start-speed',
    categoryId: 'getting-started',
    question: 'How quickly can I get started with Digitomics InfraOps?',
    answer:
      'Most teams can connect their cloud accounts, invite teammates, and see their first optimization insights in the same day.',
  },
  {
    id: 'security',
    categoryId: 'security',
    question: 'Is my data secure and compliant with regulations?',
    answer:
      'Digitomics uses encrypted connections, role-based access, audit-friendly activity history, and least-privilege integrations for cloud cost data.',
  },
  {
    id: 'roi',
    categoryId: 'platform',
    question: 'What kind of ROI can I expect from using Digitomics?',
    answer:
      'Savings depend on your cloud footprint, but the platform is designed to uncover unused resources, rightsizing opportunities, and policy gaps quickly.',
  },
  {
    id: 'existing-tools',
    categoryId: 'integrations',
    question: 'Can Digitomics integrate with my existing tools?',
    answer:
      'Yes. The workflow supports common cloud providers, collaboration tools, and reporting exports so finance and engineering teams can keep their current process.',
  },
  {
    id: 'technical-expertise',
    categoryId: 'getting-started',
    question: 'Do I need technical expertise to use the platform?',
    answer:
      'No. Engineering teams can go deeper when needed, while finance and operations users get guided recommendations and plain-language summaries.',
  },
  {
    id: 'cancel-data',
    categoryId: 'security',
    question: 'What happens to my data if I cancel my subscription?',
    answer:
      'Your access can be closed cleanly, and retained data is handled according to your account terms and compliance requirements.',
  },
  {
    id: 'pricing-scale',
    categoryId: 'pricing',
    question: 'How does pricing scale as my business grows?',
    answer:
      'Pricing can scale with account coverage, usage, and the operational features your team needs as your cloud estate expands.',
  },
  {
    id: 'cloud-providers',
    categoryId: 'integrations',
    question: 'Which cloud providers and services are supported?',
    answer:
      'Digitomics is built for multi-cloud FinOps workflows, with support shaped around infrastructure, billing, and optimization data sources.',
  },
  {
    id: 'ai-savings',
    categoryId: 'platform',
    question: 'How does the AI engine identify cost savings?',
    answer:
      'The engine reviews usage patterns, resource configuration, and spending trends to surface high-confidence recommendations for review.',
  },
  {
    id: 'dashboards',
    categoryId: 'platform',
    question: 'Can I customize dashboards and reports?',
    answer:
      'Yes. Dashboards and reports can be adjusted for leadership views, engineering ownership, and finance review workflows.',
  },
];
