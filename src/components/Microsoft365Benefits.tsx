import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Microsoft Teams",
    description: "Connect and collaborate with anyone, anywhere through chat, calls, and meetings.",
    details: "Host online meetings, collaborate on documents in real-time, and stay connected with your team."
  },
  {
    title: "Exchange Online",
    description: "Enterprise-grade email, calendar, and contacts solution.",
    details: "50GB mailbox per user, shared calendaring, and advanced security features."
  },
  {
    title: "SharePoint Online",
    description: "Create team sites to share and manage content, knowledge, and applications.",
    details: "Secure file sharing, intranet portals, and document management with version control."
  },
  {
    title: "OneDrive for Business",
    description: "Store, sync, and share work files securely.",
    details: "1TB of cloud storage per user with advanced security and sharing capabilities."
  },
  {
    title: "Security & Compliance",
    description: "Built-in security features to protect your data.",
    details: "Advanced threat protection, data loss prevention, and compliance tools."
  },
  {
    title: "Office Apps",
    description: "Latest versions of Word, Excel, PowerPoint, and more.",
    details: "Desktop and web versions of Office apps with AI-powered features."
  }
];

export const Microsoft365Benefits = () => {
  return (
    <div className="py-12 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Microsoft 365 Benefits
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HoverCard>
                <HoverCardTrigger>
                  <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60 cursor-pointer">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-black/90 text-white border border-axima-blue">
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-300">{benefit.details}</p>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};