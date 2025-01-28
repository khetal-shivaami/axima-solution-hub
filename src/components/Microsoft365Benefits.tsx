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
    navigate(`/product/${productName.toLowerCase()}`);
  };

  return (
    <div className="py-12 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Title and Description */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Microsoft 365 (Formerly Microsoft Office 365)</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                A cloud solution helps businesses work more efficiently and effectively by streamlining their processes. 
                The most important benefit for companies was they would work anywhere and any time. 
                As a result, if you're not on the cloud, you're out of the race.
              </p>
              <p>
                Every organisation needs data. With the surge in its use and digital transformation in businesses, 
                a solution to help businesses become more productive was required. This is where cloud computing solutions come in.
              </p>
              <p>
                Why choose Microsoft 365 when there are so many other cloud solutions? Microsoft 365 is a cloud-based software service that offers 
                secure, anywhere access to emails and calendars, office web apps, instant messaging, video conferencing, and file sharing.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Product Grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative bg-black/30 border border-axima-blue/20 rounded-lg p-4 text-center text-white hover:border-axima-blue transition-all duration-300 hover:bg-black/50 hover:scale-105 cursor-pointer"
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
                      <h3 className="font-semibold mb-1 group-hover:text-axima-blue transition-colors duration-300">
                        {feature.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-axima-blue/0 via-axima-blue/5 to-axima-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
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

        {/* Benefits Section */}
        <motion.h2 
          className="text-2xl font-bold text-white text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Features of Microsoft 365
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            >
              <HoverCard>
                <HoverCardTrigger>
                  <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60 cursor-pointer h-full">
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
