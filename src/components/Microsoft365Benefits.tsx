import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    title: "Microsoft Planner",
    description: "Plan your day in advance with Microsoft Planner. From making work schedules, assigning tasks and sharing files, everything is possible with this tool.",
    details: "Efficiently organize tasks and collaborate with team members using Microsoft Planner's intuitive interface."
  },
  {
    title: "Microsoft MyAnalytics",
    description: "Enhance your focus, wellbeing and productivity at the digital workplace with Microsoft MyAnalytics. Powered by artificial intelligence, it keeps track of the time one spends on different applications.",
    details: "Get insights into your work patterns and improve productivity with AI-powered analytics."
  },
  {
    title: "Kaizala",
    description: "Working in a hybrid model makes collaboration with team members even more crucial. Kaizala is a messaging platform that may be used by both internal and external users. Receive timely notifications and efficiently coordinate at work.",
    details: "Seamless communication and coordination in hybrid work environments."
  }
];

const features = [
  { 
    name: "Word", 
    description: "Create and edit professional documents",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_word.png"
  },
  { 
    name: "Excel", 
    description: "Powerful spreadsheet and data analysis",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_excel.png"
  },
  { 
    name: "PowerPoint", 
    description: "Create impactful presentations",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_powerpoint.png"
  },
  { 
    name: "Teams", 
    description: "Collaborate and communicate in real-time",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_teams.png"
  },
  { 
    name: "Outlook", 
    description: "Professional email and calendar management",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_outlook.png"
  },
  { 
    name: "OneDrive", 
    description: "Secure cloud storage and file sharing",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_onedrive.png"
  },
  { 
    name: "SharePoint", 
    description: "Team collaboration and document management",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_sharepoint.png"
  },
  { 
    name: "Exchange", 
    description: "Enterprise email and calendar server",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_exchange.png"
  },
  { 
    name: "Intune", 
    description: "Mobile device and application management",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_intune.png"
  },
  { 
    name: "Azure Information Protection", 
    description: "Data protection and compliance",
    logo: "/lovable-uploads/logos/microsoft_logos/azure_information_prot.png"
  },
  { 
    name: "Publisher (PC only)", 
    description: "Desktop publishing and design",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_publisher.png"
  },
  { 
    name: "Access (PC only)", 
    description: "Database creation and management",
    logo: "/lovable-uploads/logos/microsoft_logos/microsoft_access.png"
  }
];

export const Microsoft365Benefits = () => {
  const navigate = useNavigate();

  const handleProductClick = (productName: string) => {
    const staticRoutes: Record<string, string> = {
      "Excel": "excel",
      "Word": "word",
      "PowerPoint": "powerpoint",
      "Teams": "teams",
      "Outlook": "outlook",
      "OneDrive": "onedrive",
      "Sharepoint": "sharepoint",
      "Intune": "intune",
      "Azure Information Protection": "aip",
      "Publisher (PC only)": "publisher",
      "Access (PC only)": "access",
      "Exchange": "exchange",
    };
  
    const route = staticRoutes[productName] || productName.toLowerCase();
    navigate(`/product/${route}`);
  };
  
  return (
    <div className="py-12 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Microsoft 365 Solutions</h2>
          <p className="text-lg text-gray-300">
            Transform your business with cloud-powered productivity tools and enterprise-grade security.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-axima-blue/20 to-transparent p-8 rounded-2xl border border-axima-blue/20">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Microsoft 365?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Experience seamless collaboration and enhanced productivity with Microsoft 365's comprehensive cloud solution. 
                  Work from anywhere, anytime with enterprise-grade security and reliability.
                </p>
                <p>
                  From email and calendar management to advanced AI-powered tools, Microsoft 365 provides everything your 
                  business needs to succeed in the digital age.
                </p>
              </div>
            </div>

            {benefits.map((benefit, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-black/90 border border-axima-blue text-white">
                  <p className="text-sm">{benefit.details}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 content-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <motion.div
                    className="group relative bg-black/30 border border-axima-blue/20 rounded-lg p-4 text-center hover:border-axima-blue transition-all duration-300 cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProductClick(feature.name)}
                  >
                    <div className="relative z-10">
                      <img 
                        src={feature.logo} 
                        alt={`${feature.name} logo`} 
                        className="w-12 h-12 mx-auto mb-2 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="font-semibold text-white group-hover:text-axima-blue transition-colors duration-300">
                        {feature.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-axima-blue/0 via-axima-blue/5 to-axima-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-black/90 border border-axima-blue text-white">
                  <h4 className="font-semibold mb-2">{feature.name}</h4>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
