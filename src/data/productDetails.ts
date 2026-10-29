export interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  description: string;
  cta: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  metaTitle?: string;
  metaDescription?: string;
}

export const productDetails: Record<string, ProductDetail> = {
  "microsoft-azure": {
    slug: "microsoft-azure",
    name: "Microsoft Azure",
    category: "Cloud Infrastructure",
    description: "Microsoft Azure is an enterprise-grade cloud computing platform with more than 200 products spanning compute, networking, storage, databases and AI. It connects naturally with the Microsoft tools your business already uses, so you can modernise infrastructure, build intelligent applications and manage hybrid cloud environments from a single control plane.

There are now four Azure regions in India: Pune, Chennai, Mumbai and Hyderabad, the newest, which went live in 2026. Azure holds MeitY accreditation, which makes Indian data residency and compliance easier to meet. Microsoft Entra ID (formerly Azure Active Directory) secures sign-in across your apps, Azure Arc brings on-premise and multi-cloud servers under one view, and Microsoft Foundry gives your developers Azure OpenAI and thousands of other AI models in a governed environment. Virtual machines spread across availability zones are backed by a 99.99% uptime SLA.

As a Microsoft Solutions Partner, Axima is a Microsoft Azure partner in India that helps you move to Azure the right way. We assess your workloads, plan your Azure migration, apply Azure Hybrid Benefit so existing Windows Server and SQL Server licences with Software Assurance cost less on Azure, and monitor your environment around the clock. Honest advice. No hidden costs. A team that stays with you after go-live.",
    cta: "Start Building Today",
    features: [
      "200+ products spanning compute, networking, storage, databases, and AI",
      "Azure Active Directory for identity management and single sign-on across apps",
      "Azure DevOps and GitHub Actions integration for end-to-end CI/CD pipelines",
      "Hybrid cloud support with Azure Arc for managing on-premise and multi-cloud resources",
      "Azure OpenAI Service for deploying GPT-4 and other models in a governed environment",
      "Built-in compliance coverage across 100+ regulatory certifications",
    ],
    benefits: [
      "Extend your existing Microsoft 365 and Dynamics 365 investments without re-platforming",
      "Achieve consistent governance across on-premise, cloud, and edge with Azure Arc",
      "Accelerate developer productivity with Visual Studio, GitHub Copilot, and native DevOps tooling",
      "Scale enterprise workloads reliably with 99.99% SLA-backed availability zones",
      "Simplify licensing with Microsoft Azure Hybrid Benefit for existing Windows Server and SQL Server customers",
    ],
    faqs: [
      {
            "question": "What is Microsoft Azure, and how can it benefit my business?",
            "answer": "Microsoft Azure is a cloud computing platform offering services for computing, storage, networking, databases, AI, and security. It helps businesses scale resources, modernise applications, and improve operational efficiency."
      },
      {
            "question": "Why choose Axima as your Microsoft Azure reseller in India?",
            "answer": "Axima helps businesses explore Microsoft Azure solutions based on their IT requirements and budget. Get assistance with subscription options, licensing guidance, and cloud solution selection."
      },
      {
            "question": "What services does a Microsoft Azure service provider offer?",
            "answer": "A Microsoft Azure service provider can assist with cloud infrastructure, virtual machines, storage, networking, security, backup, and cost optimisation."
      },
      {
            "question": "How can Axima help with Azure migration?",
            "answer": "Azure migration involves moving applications, data, and IT workloads to Microsoft Azure. Axima can help assess cloud requirements and coordinate suitable migration services to support scalability and business continuity."
      },
      {
            "question": "Why choose a Microsoft Azure partner in India?",
            "answer": "A Microsoft Azure partner in India can help businesses select suitable cloud solutions, understand licensing options, plan deployments, and address technical requirements based on their business objectives."
      },
      {
            "question": "How much does Microsoft Azure cost?",
            "answer": "Microsoft Azure pricing depends on resource usage, storage, services, and deployment region. Businesses can optimise costs by monitoring consumption and selecting suitable pricing options for their workloads."
      }
    ],
    metaTitle: "Microsoft Azure Reseller in India | Azure Services | Axima",
    metaDescription: "Move to Azure with a Microsoft Solutions Reseller. Azure migration, hybrid cloud, Azure Hybrid Benefit and 24/7 support, with four Azure regions in India.",
  },
  "amazon-web-services": {
    slug: "amazon-web-services",
    name: "Amazon Web Services",
    category: "Cloud Infrastructure",
    description: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud, with more than 240 services that help businesses of every size innovate faster, reduce costs and build with confidence. AWS cloud services cover almost any workload: Amazon EC2 for virtual servers, Amazon S3 for object storage designed for 11 nines of durability, AWS Lambda for serverless computing, Amazon SageMaker AI for machine learning and Amazon Bedrock for building generative AI applications and agents.

AWS has a strong footprint in India. The AWS Mumbai region and the AWS Hyderabad region each run three Availability Zones, Local Zones in Delhi and Kolkata bring compute closer to users in the north and east, and both regions are MeitY-empanelled for government and regulated workloads. Pay-as-you-go pricing replaces upfront hardware spend, and Savings Plans bring the cost down for steady workloads.

Axima helps you get more from AWS without the complexity. As your AWS partner in India, we plan and run your AWS migration, right-size your environment for cost optimisation, and provide 24/7 AWS managed services so your applications stay available. You get a dedicated representative who knows your environment, not a ticket number in a queue.",
    cta: "Start Building Today",
    features: [
      "200+ fully featured cloud services across compute, storage, networking, and databases",
      "EC2 with a wide range of instance types optimised for compute, memory, and GPU workloads",
      "S3 for object storage with eleven nines of durability and lifecycle management",
      "AWS Lambda for serverless computing triggered by events without managing infrastructure",
      "Amazon SageMaker for building, training, and deploying machine learning models at scale",
      "AWS IAM, GuardDuty, and Shield for layered security and DDoS protection",
    ],
    benefits: [
      "Deploy in 33 geographic regions to serve users with minimal latency anywhere in the world",
      "Reduce capital expenditure by shifting from fixed infrastructure to variable, usage-based costs",
      "Move faster with managed services that eliminate undifferentiated heavy lifting",
      "Access the largest ecosystem of partners, ISVs, and marketplace solutions in the cloud",
      "Build resilient systems with multi-AZ architecture, automated backups, and disaster recovery tools",
    ],
    faqs: [
      {
            "question": "What is Amazon Web Services (AWS), and why do businesses use it?",
            "answer": "Amazon Web Services (AWS) provides cloud-based computing, storage, databases, networking, and AI capabilities. Businesses use AWS to host applications, manage data, and scale IT resources according to their needs."
      },
      {
            "question": "What AWS cloud services can help my business grow?",
            "answer": "AWS cloud services include virtual servers, cloud storage, managed databases, networking, security, analytics, and AI tools. Businesses can combine these services to build flexible and scalable IT environments."
      },
      {
            "question": "How can an AWS Partner in India help my business?",
            "answer": "Axima - AWS Partner in India can help businesses evaluate cloud requirements, select suitable AWS solutions, plan deployments, and improve cloud resource utilisation."
      },
      {
            "question": "Can AWS help migrate my existing IT infrastructure to the cloud?",
            "answer": "Yes, AWS supports the migration of applications, databases, and workloads from on-premises infrastructure or other cloud platforms. A planned migration can help minimise disruption and prepare your IT environment for future growth."
      },
      {
            "question": "How does AWS ensure cloud security and data protection?",
            "answer": "AWS provides security capabilities such as identity and access management, data encryption, network controls, and threat monitoring. Businesses can configure these tools to protect workloads, control access, and support their security and compliance requirements."
      },
      {
            "question": "How much do AWS cloud services cost?",
            "answer": "AWS costs depend on the services used, resource capacity, data storage, and consumption. Businesses can monitor usage, right-size resources, and select suitable pricing options to manage cloud expenditure."
      }
    ],
    metaTitle: "AWS Partner in India | Amazon Web Services Cloud | Axima",
    metaDescription: "Build on Amazon Web Services with Axima. AWS migration, Mumbai and Hyderabad regions, Amazon Bedrock, cost optimisation and 24/7 AWS managed services.",
  },
  "microsoft-365": {
    slug: "microsoft-365",
    name: "Microsoft 365",
    category: "Email & Collaboration",
    description: "Microsoft 365 brings business email, documents and team collaboration together in one productivity suite built for the modern workplace. It combines the Microsoft 365 apps your team already knows (Word, Excel, PowerPoint and Outlook) with cloud services such as Exchange Online, SharePoint and 1 TB of OneDrive storage per user, plus professional business email on your own domain.

Microsoft 365 for business comes in three core plans. Microsoft 365 Business Basic and Business Standard, include Copilot Chat for secure AI assistance, while Microsoft 365 Business Premium adds advanced security with Microsoft Defender, Intune, Entra ID and Purview. Each plan is also available with Microsoft 365 Copilot built into Word, Excel, PowerPoint and Teams, and with or without Teams, so you pay only for what your people use. Business plans suit teams of up to 300 users, and for organisations provisioned in India, core data such as email, files and Teams chats is stored at rest in India.

Axima started with Microsoft 365, and it is still at the heart of what we do. As a Microsoft Solutions Partner and Microsoft 365 partner in India, we help you choose the right plan, buy Microsoft 365 at honest prices, handle your Microsoft 365 migration from Google Workspace, Zoho or on-premise Exchange, and secure your tenant from day one. Our certified team supports you 24/7, long after the sale.",
    cta: "Start Building Today",
    features: [
      "Outlook for intelligent email management with focused inbox and calendar integration",
      "Microsoft Teams is built in for chat, calls, and file sharing without switching apps",
      "Word, Excel, PowerPoint, and OneNote with real-time co-authoring across devices",
      "OneDrive for cloud storage with granular sharing controls and offline access",
      "Microsoft Copilot across apps for AI-assisted writing, summarisation, and data analysis",
      "Advanced threat protection with Defender for Office 365 and anti-phishing policies",
    ],
    benefits: [
      "Consolidate your productivity stack into a single licensed, managed environment",
      "Enable hybrid work with seamless access across desktop, browser, and mobile",
      "Protect sensitive communications with built-in compliance, DLP, and eDiscovery tools",
      "Reduce IT overhead with centralised admin controls and automated update management",
      "Scale from small teams to enterprise organisations without changing platforms",
    ],
    faqs: [
      {
            "question": "What is Microsoft 365, and what does it include?",
            "answer": "Microsoft 365 combines productivity applications such as Word, Excel, PowerPoint, and Outlook with cloud storage and collaboration tools. Business plans offer features based on your organisation's requirements."
      },
      {
            "question": "Why choose a Microsoft 365 Partner in India?",
            "answer": "A Microsoft 365 Partner in India can help businesses select suitable licences, understand plan options, and coordinate deployment and migration services according to their requirements."
      },
      {
            "question": "Which Microsoft 365 plan is right for my business?",
            "answer": "Microsoft 365 offers different plans with web and desktop applications, business email, cloud storage, and security features. The right plan depends on your team's workflow, application needs, and security requirements."
      },
      {
            "question": "How much does Microsoft 365 cost?",
            "answer": "Microsoft 365 pricing depends on the selected plan, number of users, and subscription terms. Contact Axima to compare available plans and get pricing based on your business requirements."
      },
      {
            "question": "Can I buy Microsoft 365 with a custom business email?",
            "answer": "Yes, eligible Microsoft 365 business plans include professional business email using your company's domain, such as name@yourcompany.com. You can choose a plan based on your email, storage, and productivity requirements."
      },
      {
            "question": "Can I migrate my existing business email to Microsoft 365?",
            "answer": "Yes, email migration can transfer existing mailboxes, messages, and other supported data to Microsoft 365. Migration planning depends on your current email platform, data volume, and business continuity requirements."
      }
    ],
    metaTitle: "Microsoft 365 Partner in India | Buy Microsoft 365 | Axima",
    metaDescription: "Buy Microsoft 365 business plans from a Microsoft Solutions Partner. Outlook, Teams, OneDrive and Copilot, with setup, migration and 24/7 support in India.",
  },
  "google-workspace": {
    slug: "google-workspace",
    name: "Google Workspace",
    category: "Email & Collaboration",
    description: "Google Workspace is a cloud-based collaboration suite that brings Gmail, Google Meet, Google Drive, Docs, Sheets, Slides and Calendar together for real-time collaboration. Your team gets Gmail for business with custom domain email, shared drives for files, and documents several people can edit at once, so there are no version conflicts and no attachments going back and forth. Gmail blocks more than 99.9% of attacks, and Google backs the service with a 99.9% uptime SLA.

Gemini is now built into Google Workspace. It helps your team draft emails in Gmail, summarise long documents, analyse data in Sheets and take notes in Google Meet, and Google states that your data is not used to train Gemini models or for ads targeting. Google Workspace plans range from Business Starter with 30 GB of pooled storage per user to Business Standard (2 TB), Business Plus (5 TB) and Enterprise, with meetings of up to 1,000 participants on the top tier.

Axima helps you pick the right plan based on how your team works, not on what costs the most. We set up your domain, run your Google Workspace migration from Microsoft 365, Zoho or legacy mail servers using Google's Data Import tool, and support your users 24/7. As a Google Workspace partner in India, we make the switch feel simple.",
    cta: "Start Building Today",
    features: [
      "Gmail with smart compose, advanced search, and integrated Meet and Chat",
      "Google Drive with shared drives, role-based access, and unlimited storage on select plans",
      "Docs, Sheets, and Slides with simultaneous multi-user editing and comment resolution",
      "Google Meet for HD video conferencing with live captions and noise cancellation",
      "Gemini for Workspace for AI-powered writing, summarisation, and data insights",
      "Admin console with centralised user management, device policies, and audit logs",
    ],
    benefits: [
      "Work in real time with colleagues without emailing attachments back and forth",
      "Access everything from any browser on any device with no local installation required",
      "Reduce data loss risk with automatic saving and full version history across all files",
      "Deploy and manage at scale with a single admin console and zero-touch provisioning",
      "Cut licensing costs with transparent per-user pricing and no hidden add-on fees",
    ],
    faqs: [
      {
            "question": "What is Google Workspace for business?",
            "answer": "Google Workspace brings Gmail, Google Drive, Docs, Sheets, Meet, Calendar, and other collaboration tools into one cloud-based productivity platform. It helps teams communicate and work together using business accounts."
      },
      {
            "question": "Why choose a Google Workspace Reseller?",
            "answer": "A Google Workspace Reseller can help businesses select subscriptions, manage licensing, and understand available services. Axima can help you explore suitable options based on your organisation's requirements."
      },
      {
            "question": "How can a Google Workspace partner in India help my business?",
            "answer": "A Google Workspace partner in India can assist with plan selection, subscription setup, email migration, and deployment services, depending on its capabilities. This helps businesses organise their cloud productivity environment."
      },
      {
            "question": "Which Google Workspace plan should I choose?",
            "answer": "Google Workspace offers plans with different storage limits, collaboration features, security controls, and AI capabilities. Compare each plan against your team's communication, administration, and productivity needs before choosing."
      },
      {
            "question": "How much does Google Workspace cost?",
            "answer": "Google Workspace pricing varies by plan, number of users, and billing commitment. Contact Axima to compare available subscriptions and identify an option suited to your business requirements."
      },
      {
            "question": "Can I buy Google Workspace for my company's business email?",
            "answer": "Yes, you can buy Google Workspace to create professional Gmail addresses using your company's domain. Eligible plans also include collaboration tools, cloud storage, and administrative controls."
      }
    ],
    metaTitle: "Google Workspace Partner in India | Business Email | Axima",
    metaDescription: "Get Google Workspace with Gmail, Meet, Drive and Gemini built in. Plan advice, custom domain email, migration and 24/7 support from Axima across India.",
  },
  "zoho-mail": {
    slug: "zoho-mail",
    name: "Zoho Mail",
    category: "Email & Collaboration",
    description: "Zoho Mail for business is a secure business email platform used by more than 550,000 businesses worldwide. It is built by Zoho, the software company headquartered in Chennai, and it is completely ad-free: Zoho has committed never to show ads in its products or sell user information. Every mailbox gives you professional custom domain email with a built-in calendar, tasks, notes and contacts.

For Indian organisations, Zoho Mail can be hosted in Zoho's data centres in Mumbai and Chennai, giving you business email hosted in India. Security includes TLS in transit, AES-256 encryption at rest, S/MIME and OpenPGP, backed by SOC 2 and ISO 27001 certification and a 99.9% uptime SLA. Zia, Zoho's AI assistant, drafts replies and summarises long threads, and Streams turns email into team conversations with @mentions. As part of Zoho Workplace, Zoho Mail connects with Zoho CRM, Zoho Cliq, Zoho WorkDrive and the wider Zoho suite.

Axima helps you set up Zoho Mail in India the right way, from domain and DNS configuration to email migration from Google Workspace, Microsoft 365 or any IMAP server using Zoho's free migration tools. We recommend the plan that fits your team size and budget, and our support team is on call 24/7. Clean email. Honest pricing. A partner who picks up the phone.",
    cta: "Start Building Today",
    features: [
      "Ad-free business email hosted on custom domains with up to 50 GB per user",
      "Streams for threaded team discussions directly within the inbox",
      "Built-in calendar, tasks, notes, and bookmarks in a single interface",
      "Integration with Zoho CRM, Zoho Projects, Zoho Cliq, and 40+ Zoho apps",
      "eDiscovery, email archiving, and admin-level audit trails for compliance",
      "S/MIME support, two-factor authentication, and end-to-end encryption",
    ],
    benefits: [
      "Eliminate ad clutter and data tracking with a platform built for business privacy",
      "Reduce tool sprawl by combining email with tasks, notes, and team chat in one place",
      "Lower total cost of ownership with competitive pricing and no per-feature upsells",
      "Manage your entire organisation from a powerful admin panel with granular controls",
      "Get started quickly with easy domain setup, migration tools, and 24/7 support",
    ],
    faqs: [
      {
            "question": "What is Zoho Mail for business?",
            "answer": "Zoho Mail for business provides professional email hosting using your company's domain. It includes features such as email management, calendars, user administration, and security controls, depending on the selected plan."
      },
      {
            "question": "Why choose a Zoho Mail Partner?",
            "answer": "A Zoho Mail Partner can help businesses evaluate email plans, configure domain-based email, and understand subscription options. Available implementation and support services depend on the partner's service portfolio."
      },
      {
            "question": "What is the difference between Zoho Mail and Zoho Workplace?",
            "answer": "Zoho Mail focuses on business email and related productivity features. Zoho Workplace combines email with additional collaboration tools, such as document editing, file management, team chat, and online meetings, depending on the plan."
      },
      {
            "question": "Which Zoho Mail plan is suitable for my organisation?",
            "answer": "Zoho Mail offers plans with different mailbox storage capacities, security features, and administration capabilities. Choose a plan based on your email usage, retention needs, and business requirements."
      },
      {
            "question": "How much does Zoho Mail cost?",
            "answer": "Zoho Mail pricing depends on the selected edition, storage requirements, and billing terms. Zoho Workplace plans include additional collaboration features at different price points. Contact Axima to explore suitable options."
      },
      {
            "question": "Can I migrate my existing business email to Zoho Mail?",
            "answer": "Yes, supported email data can be migrated from existing email platforms to Zoho Mail. The migration process depends on your current provider, mailbox volume, and required data, helping your organisation plan the transition effectively."
      }
    ],
    metaTitle: "Zoho Mail for Business in India | Secure Email | Axima",
    metaDescription: "Get ad-free business email with Zoho Mail, hosted in Indian data centres. Custom domain email, Zia AI, Streams, migration and 24/7 support from Axima.",
  },
  "zoom": {
    slug: "zoom",
    name: "Zoom",
    category: "Video Conferencing",
    description: "Zoom is the video conferencing platform businesses rely on for clear, reliable meetings at any scale. Zoom Workplace, its AI-first work platform, brings Zoom Meetings together with team chat, Zoom Phone, Mail and Calendar, Scheduler, Docs, Whiteboard, Notes and Zoom Rooms, so your team can meet, message and follow up in one place across desktop, mobile and browser.

AI is built into Zoom Workplace. Paid plans include AI features such as meeting summaries and in-meeting questions at no additional cost, and Zoom states that it does not use your audio, video or chat content to train AI models. Meetings host up to 100 participants by default, or up to 1,000 with the Large Meeting add-on, while Zoom Webinars supports up to 100,000 attendees. End-to-end encryption is available on all plans. Zoom holds a Unified Licence from India's Department of Telecommunications, and Zoom Phone in India is live in telecom circles including Mumbai, Delhi NCR, Karnataka and Tamil Nadu.

Axima helps you choose the right Zoom plans in India for your team, whether you need a few licences for client calls or video conferencing for every meeting room. We handle licensing, account setup and admin training, then back you with 24/7 support. Fewer dropped calls. Better meetings. One partner to call.",
    cta: "Start Building Today",
    features: [
      "HD video and audio meetings with up to 1,000 participants on select plans",
      "Zoom AI Companion for meeting summaries, action items, and in-meeting chat assist",
      "Breakout rooms, polling, whiteboards, and annotation for interactive sessions",
      "Zoom Phone for cloud telephony integrated within the same platform",
      "Webinar and Zoom Events for large-scale virtual and hybrid events",
      "End-to-end encryption, waiting rooms, and host controls for secure meetings",
    ],
    benefits: [
      "Join meetings instantly from browser, desktop, or mobile without friction",
      "Reduce travel costs and time with reliable remote collaboration at enterprise scale",
      "Improve meeting outcomes with AI-generated summaries and follow-up task tracking",
      "Integrate with Google Workspace, Microsoft 365, Salesforce, Slack, and 1,000+ apps",
      "Support hybrid teams with hardware-agnostic room solutions and consistent UX",
    ],
    faqs: [
      {
            "question": "What is Zoom Workplace, and how does it support business collaboration?",
            "answer": "Zoom Workplace combines video meetings, team chat, phone, and collaboration tools in one platform. It helps teams communicate, share information, and coordinate work across locations."
      },
      {
            "question": "Why choose a Zoom Workplace partner in India?",
            "answer": "A Zoom Workplace partner in India can help businesses evaluate subscriptions, select suitable features, and coordinate setup based on their communication requirements and team size."
      },
      {
            "question": "Where can I buy Zoom Workplace in India?",
            "answer": "Businesses can purchase Zoom Workplace through available sales channels or an authorised Zoom Workplace reseller in India. Axima can help you explore suitable plans based on your business needs."
      },
      {
            "question": "What is the difference between Zoom Meetings and Zoom Workplace?",
            "answer": "Zoom Meetings focuses on video conferencing, while Zoom Workplace brings meetings together with chat, phone, scheduling, and other collaboration features. Available capabilities depend on the selected plan."
      },
      {
            "question": "How do I choose the right Zoom Workplace plan?",
            "answer": "The right Zoom Workplace plan depends on meeting capacity, collaboration features, administration controls, and AI capabilities. Compare available plans against your team's requirements before purchasing."
      },
      {
            "question": "Can a Zoom Workplace provider help with business deployment?",
            "answer": "A Zoom Workplace provider can help assess licensing needs and coordinate deployment, configuration, and user onboarding, depending on the services offered."
      }
    ],
    metaTitle: "Zoom Workplace in India | Video Conferencing | Axima",
    metaDescription: "Buy Zoom Workplace through Axima. HD video meetings, Zoom Webinars, Zoom Phone and built-in AI meeting summaries, with setup and 24/7 support in India.",
  },
  "microsoft-teams": {
    slug: "microsoft-teams",
    name: "Microsoft Teams",
    category: "Video Conferencing",
    description: "Microsoft Teams is a collaboration hub that brings video meetings, persistent chat, file sharing and apps into one workspace. For organisations running Microsoft 365, Microsoft Teams for business is the natural place to meet, message and co-author Word, Excel and PowerPoint files without switching tools, and it connects with more than 700 apps.

Teams scales with you. Business plans host meetings of up to 300 participants, enterprise plans support 1,000 interactive attendees plus view-only audiences, and town halls reach thousands of employees at once. Microsoft Teams Essentials offers a standalone option for small businesses, Microsoft Teams Rooms turns meeting spaces into hybrid-ready conference rooms, and Copilot in Teams recaps meetings, lists decisions and answers questions about what was discussed. Teams Phone adds business calling. In India it runs through Operator Connect with an Indian telecom operator or through Direct Routing, both set up to meet local telecom rules.

Axima is a Microsoft Solutions Partner and helps you get Teams right from the start. We guide you through Microsoft Teams licensing, including Microsoft 365 plans with and without Teams, set up Teams Phone for India, configure policies for secure external collaboration, and train your people to use it well. Our 24/7 support team is here whenever you need us.",
    cta: "Start Building Today",
    features: [
      "HD video meetings with up to 10,000 participants in Teams Town Halls",
      "Persistent channels for organised team conversations with threaded replies",
      "Real-time file co-authoring on Word, Excel, and PowerPoint directly in Teams",
      "Teams Phone for cloud-based calling with PSTN connectivity",
      "Copilot in Teams for meeting summaries, recaps, and intelligent chat assistance",
      "Conditional access, information barriers, and eDiscovery for enterprise governance",
    ],
    benefits: [
      "Consolidate chat, meetings, and files without switching between separate tools",
      "Reduce licensing complexity for Microsoft 365 customers with Teams included by default",
      "Keep sensitive data within the Microsoft compliance and security boundary",
      "Improve hybrid meeting equity with Together Mode and front-row layouts",
      "Extend functionality with 700+ app integrations and custom Teams app development",
    ],
    faqs: [
      {
            "question": "What is Microsoft Teams for Business?",
            "answer": "Microsoft Teams for Business is a collaboration platform for workplace chat, online meetings, calling, and file sharing. It helps employees communicate and work together across teams and locations."
      },
      {
            "question": "Why work with a Microsoft Teams partner?",
            "answer": "A Microsoft Teams partner can help businesses evaluate licensing, configure collaboration features, and plan deployment."
      },
      {
            "question": "What Microsoft Teams options are available for businesses in India?",
            "answer": "Microsoft Teams availability and features depend on the subscription, licensing terms, and business requirements. Organisations in India should compare the available options for meetings, messaging, calling, and Microsoft 365 integration."
      },
      {
            "question": "Can Microsoft Teams support remote and hybrid teams?",
            "answer": "Yes, Microsoft Teams enables distributed teams to communicate through chat, video meetings, calls, and file collaboration. Access and capabilities depend on the organisation's configuration and licences."
      },
      {
            "question": "Can Microsoft Teams integrate with Microsoft 365 applications?",
            "answer": "Microsoft Teams integrates with supported Microsoft 365 services, including SharePoint, OneDrive, Word, and Excel. These integrations help teams share files and collaborate within their workflows."
      },
      {
            "question": "How can businesses select the right Microsoft Teams licensing?",
            "answer": "Licensing depends on the required meeting, calling, collaboration, and administration features. Reviewing your current Microsoft subscriptions and user requirements can help identify a suitable option."
      }
    ],
    metaTitle: "Microsoft Teams for Business | Teams Phone India | Axima",
    metaDescription: "Get Microsoft Teams for business from a Microsoft Solutions Partner. Meetings, chat, Copilot, Teams Rooms and Teams Phone set up for India, with 24/7 support.",
  },
  "hycu": {
    slug: "hycu",
    name: "HYCU",
    category: "Backup Solutions",
    description:
      "HYCU is a purpose-built multi-cloud data protection platform that simplifies backup, recovery, and migration across cloud, on-premise, and SaaS environments. It gives IT teams full visibility and control without the complexity of legacy backup tools.",
    cta: "Start Building Today",
    features: [
      "Agentless backup for Google Cloud, AWS, Azure, VMware, and Nutanix workloads",
      "SaaS backup for Microsoft 365, Google Workspace, Salesforce, and Jira",
      "Application-consistent snapshots with granular file and object-level recovery",
      "HYCU Protégé for self-service data protection across distributed environments",
      "Automated policy-based backup scheduling with customisable retention rules",
      "Single-pane-of-glass dashboard for backup status, SLA tracking, and alerts",
    ],
    benefits: [
      "Eliminate backup agent management with a fully agentless, API-driven architecture",
      "Recover faster with instant VM restore and granular item-level recovery options",
      "Reduce data loss risk with automated, policy-driven protection across every environment",
      "Simplify multi-cloud backup with one platform instead of separate tools per cloud",
      "Meet compliance requirements with immutable backups and audit-ready reporting",
    ],
    faqs: [
      { question: "What environments does HYCU support?", answer: "HYCU supports Google Cloud, AWS, Azure, VMware, Nutanix, and a growing list of SaaS applications." },
      { question: "Is HYCU agentless?", answer: "Yes. HYCU uses API-based integration without requiring agents installed on protected workloads." },
      { question: "Can HYCU back up SaaS applications?", answer: "Yes. HYCU Protégé covers Microsoft 365, Google Workspace, Salesforce, Jira, Confluence, and more." },
      { question: "How quickly can data be restored?", answer: "HYCU supports instant VM recovery and granular file-level restore, with recovery times measured in minutes." },
      { question: "Does HYCU support immutable backups?", answer: "Yes. Immutable storage options protect backup data from ransomware and accidental deletion." },
    ],
  },
  "spin-ai": {
    slug: "spin-ai",
    name: "Spin.AI",
    category: "Backup Solutions",
    description: "Spin.AI is a SaaS security company whose SpinOne platform protects business data in Google Workspace, Microsoft 365, Salesforce and Slack. It brings automated SaaS backup, ransomware detection and response, data loss prevention and third-party app risk management together in one platform, and it is trusted by more than 2,000 organisations in over 100 countries.

SpinBackup takes automated snapshot backups once a day on standard plans or three times a day on enterprise plans, with AES-256 encryption at rest and a choice of storage on AWS, Google Cloud or Microsoft Azure. SpinRDR spots ransomware activity, stops the attack and restores affected files, backed by a two-hour ransomware recovery SLA. SpinSPM assesses more than 1,000,000 OAuth apps and browser extensions for risk, helping you control shadow IT, and SpinDLP finds and protects sensitive data. Spin.AI is SOC 2 Type II certified and supports HIPAA, GDPR and PCI DSS compliance.

Native recycle bins and retention settings are not the same as a full backup. Axima helps you close that gap with Spin.AI for Google Workspace backup and Microsoft 365 backup, from setup and backup policies to restore testing and ongoing monitoring. If something goes wrong, our 24/7 team helps you get your data back fast.",
    cta: "Start Building Today",
    features: [
      "Automated daily backup for Gmail, Drive, Calendar, Contacts, and SharePoint",
      "Ransomware detection and automated recovery with AI-powered threat response",
      "Third-party app risk assessment and access control for OAuth-connected apps",
      "Granular restore at the file, folder, email, and record level",
      "Centralised admin dashboard with user-level backup status and audit logs",
      "Data loss prevention policies with sensitive data discovery and classification",
    ],
    benefits: [
      "Protect against the most common SaaS data loss scenarios including ransomware and human error",
      "Recover lost data in minutes without relying on native recycle bins or retention policies",
      "Reduce shadow IT risk by monitoring and scoring every third-party app connected to your workspace",
      "Strengthen compliance posture with automated backup logs and data classification reports",
      "Save IT time with a policy-driven platform that runs without manual intervention",
    ],
    faqs: [
      {
            "question": "What is Spin.AI backup for Google Workspace and Microsoft 365?",
            "answer": "Spin.AI provides SaaS data protection through SpinOne, helping businesses back up and recover business-critical cloud data. It supports Google Workspace and Microsoft 365 environments."
      },
      {
            "question": "Why does my business need Google Workspace backup?",
            "answer": "Google Workspace backup helps protect Gmail, Google Drive, Calendar, and Contacts data against accidental deletion, data loss, and other incidents. It enables businesses to restore supported data when required."
      },
      {
            "question": "How does Microsoft 365 backup protect business data?",
            "answer": "Microsoft 365 backup helps safeguard supported data across services such as Exchange Online, SharePoint, OneDrive, and Teams. It provides an additional recovery option beyond built-in service availability and retention features."
      },
      {
            "question": "What is SaaS backup, and why is it important?",
            "answer": "SaaS backup creates separate recoverable copies of data stored in cloud applications. It helps organisations recover important information following accidental deletion, malicious activity, or data corruption."
      },
      {
            "question": "How can a Spin.AI partner help my organisation?",
            "answer": "A Spin.AI partner can help businesses evaluate backup requirements, select suitable protection options, and plan deployment for supported SaaS applications. Available implementation and support services depend on the partner's scope."
      },
      {
            "question": "Can backed-up SaaS data be restored after accidental deletion?",
            "answer": "Yes, supported backup solutions can help restore recoverable data following accidental deletion or other data-loss incidents. Restoration options depend on the product configuration, backup history, and retention policy."
      }
    ],
    metaTitle: "Spin.AI Backup for Google Workspace & Microsoft 365 | Axima",
    metaDescription: "Protect Google Workspace, Microsoft 365, Salesforce and Slack with SpinOne. Automated SaaS backup, ransomware recovery and app risk control, via Axima.",
  },
  "digiboxx": {
    slug: "digiboxx",
    name: "Digiboxx",
    category: "Backup Solutions",
    description:
      "Digiboxx is India's homegrown cloud storage and backup platform built for individuals, businesses, and government organisations that need secure, affordable data storage with full data residency within India. It is a Make in India initiative backed by NITI Aayog.",
    cta: "Start Building Today",
    features: [
      "Cloud storage and backup with data centres 100% located within India",
      "File sharing with password-protected links and expiry controls",
      "Team collaboration with folder-level access permissions and shared workspaces",
      "Automatic backup for desktops and mobile devices with scheduled sync",
      "API access for developers and enterprise integration with existing workflows",
      "Compliance-ready architecture aligned with Indian data protection requirements",
    ],
    benefits: [
      "Keep all organisational data within Indian borders for regulatory and sovereignty compliance",
      "Reduce dependency on foreign cloud providers for sensitive business and government data",
      "Lower storage costs with affordable plans designed for Indian businesses and institutions",
      "Enable secure file sharing across teams and external stakeholders without data leaving the country",
      "Support Digital India initiatives with a platform purpose-built for Indian compliance requirements",
    ],
    faqs: [
      { question: "Where is Digiboxx data stored?", answer: "All data is stored exclusively in data centres located within India, ensuring full data residency compliance." },
      { question: "Is Digiboxx suitable for enterprises?", answer: "Yes. Digiboxx offers enterprise plans with custom storage, admin controls, and API integration capabilities." },
      { question: "Can I share files securely with external users?", answer: "Yes. Digiboxx allows password-protected, expiry-controlled link sharing with external recipients." },
      { question: "Is Digiboxx a government-approved platform?", answer: "It is backed by NITI Aayog and positioned as a preferred platform for government and public sector data storage." },
      { question: "What devices does Digiboxx support?", answer: "It is accessible via web browser, Windows and Mac desktop apps, and iOS and Android mobile apps." },
    ],
  },
  "checkpoint": {
    slug: "checkpoint",
    name: "Check Point",
    category: "Cyber Security",
    description: "Check Point is a leading provider of AI-powered, cloud-delivered cybersecurity solutions designed to protect organizations against phishing, ransomware, malware, zero-day attacks, and other advanced cyber threats. As a Check Point partner, we provide security solutions that help businesses safeguard their digital environments. Check Point Email Security protects Microsoft 365 and Google Workspace against email-borne threats through advanced inline and API-based protection, leveraging its patented security architecture to detect phishing, business email compromise (BEC), malicious attachments, and sensitive-data leakage. Powered by ThreatCloud AI, it strengthens email security through intelligent threat detection, malware prevention, and Data Loss Prevention (DLP) capabilities.

Check Point's comprehensive portfolio also includes Endpoint Security, offering EPP, EDR, and XDR capabilities to prevent, detect, investigate, and respond to endpoint threats; Quantum Network Security, providing next-generation firewall protection, intrusion prevention, application control, and secure connectivity; and CloudGuard, helping protect cloud workloads, applications, and infrastructure across AWS, Microsoft Azure, and Google Cloud. Powered by advanced threat intelligence and centralized security management, Check Point solutions help organizations improve visibility, simplify security operations, and build a stronger defense against evolving cyber threats.",
    cta: "Start Building Today",
    features: [
      "Check Point Infinity platform for consolidated security across all attack surfaces",
      "Next-generation firewall with intrusion prevention, application control, and URL filtering",
      "CloudGuard for cloud-native security across AWS, Azure, and Google Cloud workloads",
      "Harmony Endpoint for advanced threat protection on desktops, laptops, and mobile devices",
      "ThreatCloud AI with real-time threat intelligence from 150,000+ connected networks globally",
      "Zero-day threat prevention with sandboxing, anti-ransomware, and credential theft protection",
    ],
    benefits: [
      "Reduce security complexity by consolidating multiple point solutions into one unified platform",
      "Prevent attacks in real time rather than detecting and responding after the damage is done",
      "Gain full visibility across network, cloud, and endpoint from a single management console",
      "Stay ahead of emerging threats with continuously updated AI-driven threat intelligence",
      "Simplify compliance with built-in reporting for GDPR, PCI DSS, HIPAA, and ISO 27001",
    ],
    faqs: [
      {
            "question": "What are Check Point security solutions?",
            "answer": "Check Point security solutions help protect networks, cloud environments, email systems, endpoints, and users against cyber threats. Businesses can select solutions based on their security architecture and risk requirements."
      },
      {
            "question": "Why choose a Check Point Partner for cybersecurity?",
            "answer": "A Check Point Partner can help organisations evaluate security requirements, identify suitable products, and coordinate implementation. The available deployment and support services depend on the partner's authorisations and expertise."
      },
      {
            "question": "What is the Check Point cyber security platform used for?",
            "answer": "The Check Point cyber security platform offers security capabilities for network protection, cloud workloads, email, and user access. It helps organisations strengthen threat prevention and security management across their IT environments."
      },
      {
            "question": "How does a Check Point firewall protect business networks?",
            "answer": "A Check Point firewall controls network traffic according to configured security policies. Depending on the model and subscription, it can provide capabilities such as intrusion prevention, application control, and threat protection."
      },
      {
            "question": "How does Check Point Email Security protect business email?",
            "answer": "Check Point Email Security helps detect and prevent threats such as phishing, malicious attachments, and harmful links. It supports protection for business email environments, including Microsoft 365 and Google Workspace."
      },
      {
            "question": "Can Check Point security solutions protect cloud and on-premises environments?",
            "answer": "Yes, Check Point offers security solutions for cloud and on-premises environments. The appropriate deployment depends on your infrastructure, workloads, network design, and security objectives."
      }
    ],
    metaTitle: "Check Point Cyber Security Solutions in India | Axima",
    metaDescription: "Stop attacks before they reach your business with Check Point. Firewalls, email security, cloud and endpoint protection powered by ThreatCloud AI, via Axima.",
  },
};
