import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Zap,
  Cloud,
  Mail,
  Video,
  Users,
  FileSignature,
  Share2,
  Shield,
  Key,
  Monitor,
  Database,
  Settings,
  Award,
  HeartHandshake,
  Headphones,
  GraduationCap,
} from "lucide-react";

const pillars = [
  {
    title: "Accelerated",
    description:
      "Cloud, collaboration, and productivity tools that keep your business moving forward.",
    icon: Zap,
    gradient: "from-axima-blue/15",
    items: [
      {
        title: "Cloud Infrastructure",
        description: "Scale your operations on the world's most reliable cloud platforms",
        icon: Cloud,
      },
      {
        title: "Email & Collaboration",
        description: "Work, communicate, and share without friction, from anywhere",
        icon: Mail,
      },
      {
        title: "Video Conferencing",
        description: "Connect your teams and clients with seamless virtual meetings",
        icon: Video,
      },
      {
        title: "HR & Workforce Tools",
        description: "Manage your people, processes, and productivity in one place",
        icon: Users,
      },
      {
        title: "E-Signature & Compliance",
        description: "Sign, approve, and close faster without the paperwork",
        icon: FileSignature,
      },
      {
        title: "Social Media Management",
        description: "Plan, publish, and track your brand presence with ease",
        icon: Share2,
      },
    ],
  },
  {
    title: "Controlled",
    description:
      "Security, identity, and backup solutions that give you full visibility and zero blind spots.",
    icon: Shield,
    gradient: "from-cyan-500/10",
    items: [
      {
        title: "Cyber Security",
        description: "Stay protected against modern threats before they reach your business",
        icon: Shield,
      },
      {
        title: "Identity & Access Management",
        description: "Control who gets in, what they see, and what they can do",
        icon: Key,
      },
      {
        title: "Endpoint & Device Management",
        description: "Every device in your organisation is monitored and secured",
        icon: Monitor,
      },
      {
        title: "Backup & Recovery",
        description: "Your data stays safe, recoverable, and always within reach",
        icon: Database,
      },
      {
        title: "IT Service Management",
        description: "Keep your IT running smoothly with the right tools in place",
        icon: Settings,
      },
    ],
  },
  {
    title: "Empowered",
    description:
      "Expert-led services that ensure your technology works the way your business needs it to.",
    icon: Award,
    gradient: "from-indigo-500/10",
    items: [
      {
        title: "Security Assessments",
        description: "Understand your risks and get a clear plan to address them",
        icon: Shield,
      },
      {
        title: "Managed Services",
        description: "Proactive monitoring, maintenance, and management around the clock",
        icon: HeartHandshake,
      },
      {
        title: "Support Packages",
        description: "Reliable technical support when your team needs it most",
        icon: Headphones,
      },
      {
        title: "Training Services",
        description: "Build the skills your team needs to get the most from their tools",
        icon: GraduationCap,
      },
    ],
  },
];

export const ACEAdvantage = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Axima ACE Advantage
          </h2>
          <p className="text-lg text-gray-300">
            Most businesses juggle multiple vendors for productivity, security, and support. Axima
            brings it all together under one trusted partner, so your team can focus on work that
            matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-axima-blue/10 to-black/40 border-white/10 backdrop-blur-sm hover:border-axima-blue/40 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-axima-blue/20">
                        <PillarIcon className="w-6 h-6 text-axima-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{pillar.description}</p>
                    <div className="space-y-4">
                      {pillar.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={item.title} className="flex items-start gap-3 group">
                            <div className="p-2 rounded-md bg-axima-blue/10 text-axima-blue group-hover:bg-axima-blue/20 transition-colors mt-0.5">
                              <ItemIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">{item.title}</h4>
                              <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
