export interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  description: string;
  cta: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const productDetails: Record<string, ProductDetail> = {
  "microsoft-azure": {
    slug: "microsoft-azure",
    name: "Microsoft Azure",
    category: "Cloud Infrastructure",
    description:
      "Microsoft Azure is an enterprise-grade cloud platform that integrates seamlessly with existing Microsoft tools, enabling businesses to modernise infrastructure, build intelligent apps, and manage hybrid environments from a single control plane.",
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
      { question: "How does Azure differ from other cloud providers?", answer: "Azure's deep integration with Microsoft's software ecosystem makes it the natural choice for organisations already running Windows, Office 365, or Dynamics." },
      { question: "Does Azure support hybrid cloud setups?", answer: "Yes. Azure Arc and Azure Stack allow you to manage on-premise servers and edge locations alongside your cloud resources." },
      { question: "What AI capabilities does Azure offer?", answer: "Azure provides access to OpenAI models, Azure Machine Learning, Cognitive Services, and Copilot integrations across its product suite." },
      { question: "Is Azure compliant with Indian data regulations?", answer: "Azure operates data centres in Pune and Chennai, supporting data residency requirements and local compliance frameworks." },
      { question: "What is Azure Hybrid Benefit?", answer: "It lets existing Microsoft licence holders run Windows Server and SQL Server workloads on Azure at a significantly reduced cost." },
    ],
  },
  "amazon-web-services": {
    slug: "amazon-web-services",
    name: "Amazon Web Services",
    category: "Cloud Infrastructure",
    description:
      "Amazon Web Services is the world's most adopted cloud platform, offering the broadest set of infrastructure services to help businesses of every size innovate faster, reduce costs, and build with confidence at a global scale.",
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
      { question: "What makes AWS different from other cloud platforms?", answer: "AWS offers the widest breadth of services, the most mature global infrastructure, and the largest partner and developer ecosystem in the cloud." },
      { question: "Is AWS suitable for enterprise workloads?", answer: "Yes. AWS powers mission-critical systems for some of the world's largest enterprises, governments, and regulated industries." },
      { question: "How does AWS pricing work?", answer: "AWS charges based on actual usage with no upfront commitment required. Reserved and Savings Plans options offer significant discounts for predictable workloads." },
      { question: "Does AWS have data centres in India?", answer: "Yes. AWS operates regions in Mumbai and Hyderabad, with local zones expanding across major Indian cities." },
      { question: "What support does AWS offer for migration?", answer: "AWS provides the Migration Acceleration Program, purpose-built migration tools, and a network of certified migration partners to simplify the transition." },
    ],
  },
  "microsoft-365": {
    slug: "microsoft-365",
    name: "Microsoft 365",
    category: "Email & Collaboration",
    description:
      "Microsoft 365 brings together email, documents, and team collaboration into one integrated suite built for the modern workplace. It combines the familiarity of Office apps with enterprise-grade cloud infrastructure and AI-powered productivity tools.",
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
      { question: "What is included in a Microsoft 365 subscription?", answer: "Plans include Office apps, Exchange email, Teams, OneDrive storage, and security features depending on the tier selected." },
      { question: "Can Microsoft 365 replace my on-premise Exchange server?", answer: "Yes. Exchange Online delivers the same enterprise email capabilities fully hosted in the cloud." },
      { question: "Is Microsoft 365 secure enough for regulated industries?", answer: "Yes. It supports HIPAA, GDPR, ISO 27001, and other compliance frameworks with built-in governance tools." },
      { question: "How many users can be on a single plan?", answer: "Plans are available for individual users up to large enterprises with no hard ceiling on licensed seats." },
      { question: "Does Microsoft 365 work offline?", answer: "Yes. Desktop apps and OneDrive sync allow users to work without internet access and sync changes automatically when reconnected." },
    ],
  },
  "google-workspace": {
    slug: "google-workspace",
    name: "Google Workspace",
    category: "Email & Collaboration",
    description:
      "Google Workspace is a cloud-native collaboration suite that brings Gmail, Meet, Drive, Docs, and more into a unified environment designed for real-time teamwork. It eliminates version conflicts and inbox bottlenecks so teams can focus on work, not tools.",
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
      { question: "What is the difference between Google Workspace and free Google accounts?", answer: "Workspace adds custom domain email, admin controls, shared drives, enhanced security, and SLA-backed uptime, not available in personal accounts." },
      { question: "Can I migrate from Microsoft 365 to Google Workspace?", answer: "Yes. Google provides a migration tool and partner-assisted pathways to move email, calendar, and files with minimal disruption." },
      { question: "What storage do users get?", answer: "Storage is pooled across the organisation, with amounts varying by plan from 30 GB per user to 5 TB and beyond." },
      { question: "Is Google Workspace suitable for large enterprises?", answer: "Yes. Enterprise plans include advanced DLP, eDiscovery, Vault for archiving, and dedicated support." },
      { question: "Does Google Workspace include video calling?", answer: "Yes. Google Meet is fully integrated and supports meetings, webinars, and live streaming, depending on the plan." },
    ],
  },
  "zoho-mail": {
    slug: "zoho-mail",
    name: "Zoho Mail",
    category: "Email & Collaboration",
    description:
      "Zoho Mail is a privacy-focused, ad-free business email platform that integrates tightly with the broader Zoho ecosystem. It gives organisations clean, reliable email with built-in collaboration tools at a cost that makes sense for growing businesses.",
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
      { question: "Is Zoho Mail really ad-free?", answer: "Yes. Zoho does not scan email content for advertising purposes and displays no ads in its interface." },
      { question: "Can I use Zoho Mail without other Zoho products?", answer: "Yes. Zoho Mail works as a standalone email platform, though it integrates well across the Zoho suite." },
      { question: "Does Zoho Mail support email migration?", answer: "Yes. It supports migration from Gmail, Outlook, Yahoo, and other IMAP-compatible services." },
      { question: "What compliance certifications does Zoho Mail hold?", answer: "Zoho is ISO 27001 certified and GDPR compliant, with data centres across multiple global regions." },
      { question: "Is there a free plan available?", answer: "Yes. Zoho Mail offers a free plan for up to five users with 5 GB of storage per user on a custom domain." },
    ],
  },
  "zoom": {
    slug: "zoom",
    name: "Zoom",
    category: "Video Conferencing",
    description:
      "Zoom is the go-to video conferencing platform for businesses that need reliable, high-quality meetings at any scale. From one-on-ones to company-wide webinars, it delivers a consistent experience across every device and network condition.",
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
      { question: "Does Zoom work without downloading the app?", answer: "Yes. Participants can join directly from a browser without installing anything." },
      { question: "How many people can join a Zoom meeting?", answer: "Up to 100 participants on the free plan, scaling to 1,000 on enterprise plans." },
      { question: "Is Zoom secure for confidential business meetings?", answer: "Yes. Zoom offers end-to-end encryption, SSO, role-based access, and compliance with SOC 2 and HIPAA requirements." },
      { question: "Can Zoom be used for webinars?", answer: "Yes. Zoom Webinars supports up to 50,000 view-only attendees with registration, Q&A, and analytics." },
      { question: "Does Zoom integrate with calendar apps?", answer: "Yes. Zoom integrates natively with Google Calendar and Outlook for one-click meeting scheduling." },
    ],
  },
  "microsoft-teams": {
    slug: "microsoft-teams",
    name: "Microsoft Teams",
    category: "Video Conferencing",
    description:
      "Microsoft Teams is a unified collaboration hub that combines video meetings, persistent chat, file sharing, and app integrations into one workspace. It is the natural choice for organisations already running Microsoft 365.",
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
      { question: "Is Microsoft Teams free to use?", answer: "A free version is available with limited features. Full capabilities require a Microsoft 365 subscription." },
      { question: "Can external users join Teams meetings?", answer: "Yes. External participants can join via a meeting link without needing a Teams account." },
      { question: "How is Teams different from Zoom?", answer: "Teams is a broader collaboration platform with chat, files, and app integrations built in, while Zoom focuses primarily on video conferencing." },
      { question: "Does Teams work on mobile devices?", answer: "Yes. The Teams mobile app is available on iOS and Android with full meeting and chat functionality." },
      { question: "Can Teams replace a business phone system?", answer: "Yes. Teams Phone with a calling plan or direct routing supports outbound and inbound calls to any number." },
    ],
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
    description:
      "Spin.AI is a SaaS security and backup platform built specifically to protect Google Workspace and Microsoft 365 data from ransomware, accidental deletion, and third-party app risk. It combines automated backup with AI-driven threat detection in a single solution.",
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
      { question: "What does Spin.AI back up?", answer: "It backs up Gmail, Google Drive, Calendar, Contacts, Shared Drives, and Microsoft 365 including Exchange, OneDrive, and SharePoint." },
      { question: "How does Spin.AI handle ransomware?", answer: "Its AI engine detects unusual encryption activity in real time and can automatically isolate the threat and initiate recovery." },
      { question: "Can I restore a single file or email?", answer: "Yes. Spin.AI supports granular restore at the individual file, folder, or message level." },
      { question: "Is Spin.AI compliant with data regulations?", answer: "Yes. It supports GDPR, HIPAA, and SOC 2 compliance with data stored in the region of your choice." },
      { question: "Does Spin.AI monitor third-party app access?", answer: "Yes. It scores OAuth-connected apps by risk level and allows admins to revoke access directly from the dashboard." },
    ],
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
    description:
      "Check Point is a global leader in cyber security, delivering unified threat prevention across network, cloud, endpoint, and mobile environments. Its AI-powered security architecture stops the most sophisticated attacks before they reach your business.",
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
      { question: "What is the Check Point Infinity platform?", answer: "It is Check Point's unified security architecture that consolidates network, cloud, endpoint, mobile, and IoT security under one management layer." },
      { question: "Does Check Point protect cloud environments?", answer: "Yes. CloudGuard covers workload protection, posture management, and network security across all major cloud platforms." },
      { question: "How does Check Point handle zero-day threats?", answer: "Its SandBlast technology uses sandboxing and threat emulation to catch unknown threats before they execute." },
      { question: "Is Check Point suitable for small and mid-sized businesses?", answer: "Yes. Check Point offers scalable solutions including Quantum Spark for SMBs and larger Quantum appliances for enterprise." },
      { question: "What support and services does Check Point offer?", answer: "Check Point provides 24/7 technical support, managed security services, and a global network of certified partners." },
    ],
  },
};
