export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogCategories = ["All", "Cloud", "Google Workspace", "Security", "AI"];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How Cloud Migration Can Transform Your Business in 2025",
    slug: "cloud-migration-transform-business-2025",
    shortDescription:
      "Discover the key strategies for successful cloud migration and how it can drive innovation, reduce costs, and improve operational efficiency for your organization.",
    content: `
## Why Cloud Migration Matters

Cloud migration is no longer a luxury — it's a strategic necessity. Organizations worldwide are shifting workloads to the cloud to unlock agility, resilience, and cost savings.

### Key Benefits

- **Scalability**: Scale resources up or down based on demand without over-provisioning hardware.
- **Cost Efficiency**: Pay only for what you use, eliminating capital expenditure on physical servers.
- **Business Continuity**: Cloud-native disaster recovery ensures minimal downtime.
- **Innovation Speed**: Leverage AI, machine learning, and analytics services available out of the box.

### Steps to a Successful Migration

1. **Assess your current infrastructure** — Identify workloads, dependencies, and compliance requirements.
2. **Choose the right cloud model** — Public, private, or hybrid based on your business needs.
3. **Plan the migration roadmap** — Prioritize applications by complexity and business impact.
4. **Execute in phases** — Start with low-risk workloads and iterate.
5. **Optimize post-migration** — Continuously monitor and right-size resources.

### Common Pitfalls to Avoid

- Underestimating bandwidth and latency requirements
- Ignoring security and compliance during migration
- Lack of employee training on new cloud tools

> "The cloud is not just about technology — it's about transforming how your business operates." — Axima Solutions

### Conclusion

A well-planned cloud migration strategy can be a game-changer. Partner with experienced cloud solution providers like Axima to ensure a smooth transition.
    `,
    author: "Axima Team",
    publishDate: "2025-03-15",
    category: "Cloud",
    tags: ["Cloud Migration", "Digital Transformation", "Infrastructure"],
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    metaTitle: "Cloud Migration Strategies for Business in 2025 | Axima",
    metaDescription:
      "Learn how cloud migration can transform your business with cost savings, scalability, and innovation. Expert strategies from Axima.",
  },
  {
    id: "2",
    title: "Top 5 Cybersecurity Threats Every Business Must Watch in 2025",
    slug: "top-cybersecurity-threats-2025",
    shortDescription:
      "Stay ahead of evolving cyber threats. Learn about the most critical security risks facing businesses today and how to protect your organization.",
    content: `
## The Evolving Threat Landscape

Cybersecurity threats are becoming more sophisticated every year. In 2025, businesses face a new generation of attacks powered by AI and automation.

### 1. AI-Powered Phishing Attacks

Attackers are using generative AI to craft highly convincing phishing emails that bypass traditional filters. These messages mimic writing styles of known contacts, making them extremely difficult to detect.

**How to protect yourself:**
- Implement advanced email security with AI-based detection
- Conduct regular employee awareness training
- Use multi-factor authentication (MFA) across all accounts

### 2. Ransomware-as-a-Service (RaaS)

Ransomware has become a commodity. Criminal groups now offer RaaS platforms, enabling even low-skill attackers to launch devastating campaigns.

**How to protect yourself:**
- Maintain offline backups with tested recovery procedures
- Segment your network to limit lateral movement
- Deploy endpoint detection and response (EDR) solutions

### 3. Supply Chain Attacks

Compromising a single vendor can give attackers access to hundreds of downstream organizations. These attacks exploit trust relationships between businesses and their suppliers.

### 4. Cloud Misconfiguration

As more workloads move to the cloud, misconfigurations remain the number one cause of data breaches. Open storage buckets, excessive permissions, and unencrypted data are common issues.

### 5. Insider Threats

Whether malicious or accidental, insider threats account for a significant portion of data breaches. Disgruntled employees or careless handling of sensitive data can have catastrophic consequences.

### Conclusion

Proactive security measures and continuous monitoring are essential. Axima's security assessment services can help you identify and mitigate vulnerabilities before they're exploited.
    `,
    author: "Axima Security Team",
    publishDate: "2025-02-28",
    category: "Security",
    tags: ["Cybersecurity", "Threat Intelligence", "Data Protection"],
    featuredImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    metaTitle: "Top 5 Cybersecurity Threats in 2025 | Axima Security",
    metaDescription:
      "Discover the top cybersecurity threats of 2025 and learn actionable strategies to protect your business from AI phishing, ransomware, and more.",
  },
  {
    id: "3",
    title: "Microsoft Copilot: The AI Assistant Revolutionizing Productivity",
    slug: "microsoft-copilot-ai-productivity",
    shortDescription:
      "Explore how Microsoft Copilot is changing the way teams work with AI-powered assistance across Microsoft 365 apps and beyond.",
    content: `
## What is Microsoft Copilot?

Microsoft Copilot is an AI-powered assistant integrated into Microsoft 365 applications. It uses large language models combined with your organizational data to help you work smarter and faster.

### How Copilot Works

Copilot sits alongside your everyday tools — Word, Excel, PowerPoint, Outlook, and Teams. It understands context from your documents, emails, and meetings to provide intelligent suggestions and automate repetitive tasks.

### Key Use Cases

#### In Word
- Draft documents from prompts or existing notes
- Summarize lengthy reports
- Rewrite content for different audiences

#### In Excel
- Analyze complex datasets with natural language queries
- Generate formulas and charts automatically
- Identify trends and anomalies

#### In PowerPoint
- Create presentations from Word documents or outlines
- Design slides with professional layouts
- Add speaker notes and transitions

#### In Teams
- Summarize meeting discussions in real time
- Generate action items automatically
- Catch up on missed conversations

### Getting Started with Copilot

1. Ensure your Microsoft 365 licenses include Copilot
2. Verify your data is properly organized in SharePoint and OneDrive
3. Train your team on effective prompting techniques
4. Start with pilot groups before organization-wide rollout

### The ROI of Copilot

Early adopters report:
- **70%** reduction in time spent on routine tasks
- **50%** faster document creation
- **40%** improvement in meeting productivity

### Conclusion

Microsoft Copilot is more than a tool — it's a productivity multiplier. Contact Axima to learn how to deploy Copilot effectively in your organization.
    `,
    author: "Axima AI Team",
    publishDate: "2025-01-20",
    category: "AI",
    tags: ["Microsoft Copilot", "AI", "Productivity", "Microsoft 365"],
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    metaTitle: "Microsoft Copilot: AI Productivity Guide | Axima",
    metaDescription:
      "Learn how Microsoft Copilot AI assistant boosts productivity across Word, Excel, PowerPoint, and Teams. Implementation guide by Axima.",
  },
];
