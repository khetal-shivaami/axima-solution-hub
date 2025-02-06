import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const teamMembers = [
  {
    name: "Punit Thakkar",
    position: "Chairman",
    image: "/lovable-uploads/managementteam/PunitThakkar.JPG",
    linkedin: "https://www.linkedin.com/in/punitshivaami/?original_referer=https%3A%2F%2Fwww.shivaami.com%2F",
    profile: "With over two decades of experience in the IT industry, Punit Thakkar has been instrumental in shaping Shiviom's vision and growth strategy. As a mentor and leader, his guidance has been key to establishing Shiviom as a leading cloud solutions provider. Punit's dedication to innovation and talent development continues to drive the company's success and impact across industries."
  },
  {
    name: "Akshay Thakkar",
    position: "CEO",
    image: "/lovable-uploads/managementteam/AkshayThakkar.png",
    linkedin: "https://www.linkedin.com/in/akshay-thakkar-bb5112120/",
    profile: "Akshay Thakkar is a visionary leader driving Shiviom's success with over 10 years of entrepreneurial expertise. He has been instrumental in embracing advanced technologies and expanding the company's service offerings to meet dynamic market demands. With a strong belief in the principle that 'organizations are bigger than individuals', his collaborative leadership inspires innovation, teamwork, and excellence."
  },
  {
    name: "Ashika Suresh",
    position: "Deputy General Manager",
    image: "/lovable-uploads/managementteam/AshikaSuresh.png",
    linkedin: "https://www.linkedin.com/in/ashika-suresh-152515113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    profile: "Specialized in operational excellence and team management"
  }
];

export const ManagementTeam = () => {
  return (
    <section className="space-y-8 py-12">
      <h2 className="text-3xl font-bold text-center text-white">Our Management Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-[400px] perspective"
          >
            <div className="relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden">
                <div className="h-full p-6 space-y-4 group bg-black/40 border border-transparent hover:border-axima-blue backdrop-blur-sm rounded-lg">
                  <div className="aspect-square w-48 mx-auto overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white group-hover:text-axima-blue transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-400">{member.position}</p>
                  </div>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <div className="h-full p-6 space-y-4 bg-black/40 border border-transparent hover:border-axima-blue backdrop-blur-sm rounded-lg flex flex-col">
                  <p className="text-gray-400 flex-grow">{member.profile}</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 text-white hover:text-axima-blue transition-colors"
                        >
                          <Linkedin className="h-6 w-6" />
                          <span>Connect on LinkedIn</span>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visit LinkedIn Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};