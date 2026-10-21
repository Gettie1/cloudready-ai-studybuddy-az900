
import { Cloud, Server, ShieldCheck } from 'lucide-react'

export const topics = [
  {
    id: 'cloud',
    title: 'Cloud Concepts',
    subtitle: 'Cloud computing, benefits and service models',
    icon: Cloud,
    color: 'bg-sky-100 text-sky-700',
    lessons: [
      'What is cloud computing?',
      'Public, private and hybrid cloud',
      'IaaS, PaaS and SaaS',
      'Benefits of cloud computing',
    ],
  },
  {
    id: 'architecture',
    title: 'Azure Architecture & Services',
    subtitle: 'Regions, resources, compute and networking',
    icon: Server,
    color: 'bg-violet-100 text-violet-700',
    lessons: [
      'Regions and Availability Zones',
      'Azure resources and resource groups',
      'Virtual machines and containers',
      'Azure storage and networking',
    ],
  },
  {
    id: 'governance',
    title: 'Management & Governance',
    subtitle: 'Security, costs, compliance and monitoring',
    icon: ShieldCheck,
    color: 'bg-emerald-100 text-emerald-700',
    lessons: [
      'Microsoft Entra ID and access',
      'Azure Policy and resource locks',
      'Cost Management',
      'Azure Monitor and Service Health',
    ],
  },
]
