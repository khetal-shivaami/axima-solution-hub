import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";

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
  { name: "Word", description: "Create and edit professional documents" },
  { name: "Excel", description: "Powerful spreadsheet and data analysis" },
  { name: "PowerPoint", description: "Create impactful presentations" },
  { name: "Teams", description: "Collaborate and communicate in real-time" },
  { name: "Outlook", description: "Professional email and calendar management" },
  { name: "OneDrive", description: "Secure cloud storage and file sharing" },
  { name: "SharePoint", description: "Team collaboration and document management" },
  { name: "Exchange", description: "Enterprise email and calendar server" },
  { name: "Intune", description: "Mobile device and application management" },
  { name: "Azure Information Protection", description: "Data protection and compliance" },
  { name: "Publisher (PC only)", description: "Desktop publishing and design" },
  { name: "Access (PC only)", description: "Database creation and management" }
];

export const Microsoft365Benefits = () => {
  return (
    <div className="py-12 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Microsoft 365 (Formerly Microsoft Office 365)</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A cloud solution helps businesses work more efficiently and effectively by streamlining their processes. 
            The most important benefit for companies was they would work anywhere and any time. 
            As a result, if you're not on the cloud, you're out of the race.
          </p>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            Every organisation needs data. With the surge in its use and digital transformation in businesses, 
            a solution to help businesses become more productive was required. This is where cloud computing solutions come in. 
            Why choose Microsoft 365 when there are so many other cloud solutions? Microsoft 365 is a cloud-based software service that offers 
            secure, anywhere access to emails and calendars, office web apps, instant messaging, video conferencing, and file sharing.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/30 border border-axima-blue/20 rounded-lg p-3 text-center text-white"
            >
              {feature.name}
            </div>
          ))}
        </motion.div>

        <motion.h2 
          className="text-2xl font-bold text-white text-center mb-8"
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