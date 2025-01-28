import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const teamMembers = [
  {
    name: "John Smith",
    position: "Chief Executive Officer",
    image: "/lovable-uploads/photo-1497366754035-f200968a6e72.jpg",
    linkedin: "https://linkedin.com/in/john-smith",
    profile: "20+ years of experience in technology and business leadership"
  },
  {
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    image: "/lovable-uploads/photo-1497366216548-37526070297c.jpg",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    profile: "Expert in cloud solutions and digital transformation"
  },
  {
    name: "Michael Chen",
    position: "Chief Operations Officer",
    image: "/lovable-uploads/photo-1497366811353-6870744d04b2.jpg",
    linkedin: "https://linkedin.com/in/michael-chen",
    profile: "Specialized in operational excellence and team management"
  }
];

export const ManagementTeam = () => {
  return (
    <section className="space-y-8 py-12">
      <h2 className="text-3xl font-bold text-center text-white">Our Leadership</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 space-y-4 group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-black/40 border-none backdrop-blur-sm">
              <div className="aspect-square w-48 mx-auto overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="relative inline-block group">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold inline-flex items-center justify-center gap-2 text-white group-hover:text-axima-blue transition-colors"
                        >
                          {member.name}
                          <Linkedin 
                            className="h-5 w-5 text-[#0077b5] opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visit LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-muted-foreground text-center">{member.position}</p>
                <p className="mt-4 text-muted-foreground text-center">
                  {member.profile}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};