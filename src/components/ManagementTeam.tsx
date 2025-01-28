import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

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
    <div className="py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Our Management Team</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/40 rounded-lg overflow-hidden group"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-axima-blue transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-400 mb-2">{member.position}</p>
              <p className="text-gray-300 text-sm mb-4">{member.profile}</p>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-axima-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};