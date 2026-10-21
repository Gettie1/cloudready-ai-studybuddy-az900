
export const quizQuestions = [
  {
    q: 'Which cloud service model gives you the most control over virtual machines and operating systems?',
    options: ['SaaS', 'PaaS', 'IaaS', 'Serverless only'],
    answer: 2,
    explanation:
      'IaaS provides virtualized infrastructure. You manage the operating system and applications, while the provider manages the physical infrastructure.',
  },
  {
    q: 'What is an Azure region?',
    options: [
      'A billing invoice',
      'A geographical area containing one or more datacenters',
      'A user password',
      'A type of database',
    ],
    answer: 1,
    explanation:
      'An Azure region is a geographical area that contains one or more datacenters connected through a low-latency network.',
  },
  {
    q: 'Which Azure service helps enforce rules about how resources are configured?',
    options: [
      'Azure Policy',
      'Azure Photos',
      'Microsoft Word',
      'Azure Marketplace only',
    ],
    answer: 0,
    explanation:
      'Azure Policy can audit and enforce organizational standards for resources.',
  },
  {
    q: 'Which is an example of SaaS?',
    options: [
      'Renting raw virtual machines',
      'Managing a physical datacenter',
      'Using a ready-to-use web-based email application',
      'Configuring a virtual network',
    ],
    answer: 2,
    explanation:
      'SaaS provides a ready-to-use software application. The provider manages the underlying platform and infrastructure.',
  },
  {
    q: 'What is the main purpose of Azure Resource Manager resource groups?',
    options: [
      'Group and manage related Azure resources',
      'Replace all passwords',
      'Increase internet speed',
      'Create physical datacenters',
    ],
    answer: 0,
    explanation:
      'A resource group is a logical container for Azure resources that are managed together.',
  },
]
