
import type { Language } from '../types'

export const demoAnswer = (question: string, language: Language) => {
  const q = question.toLowerCase()
  const sw = language === 'sw'

  let definition =
    'Cloud computing means using computing services such as servers, storage and software over the internet instead of owning and maintaining all the physical equipment yourself.'

  let example =
    'Imagine a Kenyan online shop that receives more orders during a holiday sale. Cloud services can help it add computing capacity when demand increases.'

  let azure =
    'Microsoft Azure is a cloud platform offering computing, storage, networking, databases and many other services.'

  let tip =
    'For AZ-900, understand the benefits of cloud computing, including scalability, elasticity and paying for resources you use.'

  if (
    q.includes('iaas') ||
    q.includes('paas') ||
    q.includes('saas') ||
    q.includes('service model')
  ) {
    definition =
      'IaaS provides computing infrastructure, PaaS provides a managed platform for building and running applications, and SaaS provides ready-to-use software.'

    example =
      'IaaS is like renting an empty shop and arranging it yourself. PaaS is like renting a fitted kitchen so you can focus on cooking. SaaS is like ordering a ready-made meal.'

    azure =
      'Azure Virtual Machines are an IaaS example. Azure App Service is a PaaS example. Microsoft 365 is an example of SaaS.'

    tip =
      'Remember: IaaS gives you more management responsibility; SaaS gives you less. PaaS sits between them.'
  } else if (
    q.includes('region') ||
    q.includes('availability zone')
  ) {
    definition =
      'An Azure region is a geographical area containing one or more datacenters. Availability Zones are separate physical locations within a supported region.'

    example =
      'A Kenyan business could design its service to keep working if one datacenter location experiences a problem, using supported resilience options.'

    azure =
      'Azure regions and Availability Zones help organizations plan for latency, data residency and resilience.'

    tip =
      'A region is a geographical area; an Availability Zone is a distinct physical location within a region.'
  } else if (q.includes('resource group')) {
    definition =
      'An Azure resource group is a logical container for resources that you want to manage together.'

    example =
      'A university could group the cloud resources for its student portal together, making it easier to organize and manage them.'

    azure =
      'Azure Resource Manager helps deploy and manage resources in resource groups.'

    tip =
      'A resource belongs to one resource group at a time, although resources can be moved between groups when supported.'
  } else if (
    q.includes('security') ||
    q.includes('identity') ||
    q.includes('entra')
  ) {
    definition =
      'Identity and access management help verify who a user is and control what that user is allowed to do.'

    example =
      'At a university, a lecturer may be allowed to update marks while a student can only view their own results.'

    azure =
      'Microsoft Entra ID provides identity and access capabilities. Azure role-based access control (RBAC) helps manage permissions to Azure resources.'

    tip =
      'Authentication checks who you are; authorization determines what you can access.'
  } else if (q.includes('cost') || q.includes('pricing')) {
    definition =
      'Cloud cost management helps you understand, monitor and control spending on cloud resources.'

    example =
      'A small business can review its monthly cloud bill and turn off test resources when they are no longer needed.'

    azure =
      'Azure Cost Management helps analyze and manage Azure spending. Pricing depends on the services and usage.'

    tip =
      'Remember that cloud costs can depend on consumption, service type, region and pricing options.'
  } else if (
    q.includes('policy') ||
    q.includes('governance')
  ) {
    definition =
      'Cloud governance is the set of rules and processes used to keep cloud resources secure, compliant and properly managed.'

    example =
      'A university could set a rule that all departmental cloud resources must have approved tags and locations.'

    azure =
      'Azure Policy can audit or enforce organizational standards. Resource locks can help protect important resources from accidental changes or deletion.'

    tip =
      'Azure Policy is for evaluating and enforcing rules; resource locks help prevent certain changes or deletions.'
  }

  if (!sw) {
    return `**DEMO RESPONSE — not live AI**

**Simple definition**
${definition}

**African example**
${example}

**Azure connection**
${azure}

**AZ-900 study tip**
${tip}

**Check your understanding:** Can you explain this concept in your own words?`
  }

  return `**JIBU LA MAJARIBIO — si AI ya moja kwa moja**

**Maelezo rahisi**
${definition}

**Mfano wa Afrika**
${example}

**Uhusiano na Azure**
${azure}

**Kidokezo cha AZ-900**
${tip}

**Jipime:** Unaweza kueleza dhana hii kwa maneno yako mwenyewe?`
}
