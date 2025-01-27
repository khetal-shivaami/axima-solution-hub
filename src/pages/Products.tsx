import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const microsoftSolutions = [
  {
    name: "Microsoft 365",
    description: "Microsoft 365 is a cloud-based service that is designed to help meet your organization's needs for robust security, reliability, and user productivity.",
    image: "/lovable-uploads/logos/Microsoft_365.png"
  },
  {
    name: "MS Azure",
    description: "MS Azure is a comprehensive cloud platform that provides scalable, on-demand computing resources and services, enabling businesses to build, deploy, and manage applications efficiently.",
    image: "/lovable-uploads/logos/Azure.png"
  },
  {
    name: "MS Azure from Jio Region",
    description: "MS Azure from Jio Region provides Azure services with data centers located within India, ensuring enhanced security compliance and data residency.",
    image: "/lovable-uploads/logos/Azure.png"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Our Products</h1>
          
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl font-semibold mb-2">We Provide Complete Cloud Solutions</h2>
            <h3 className="text-xl">Explore Our Microsoft Solutions</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {microsoftSolutions.map((solution, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative bg-black/40 border border-axima-blue/20 rounded-lg p-6 text-center text-white hover:border-axima-blue transition-all duration-300 hover:bg-black/50 hover:scale-105 cursor-pointer h-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative z-10">
                      <img 
                        src={solution.image} 
                        alt={`${solution.name} logo`} 
                        className="w-20 h-20 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-axima-blue transition-colors duration-300">
                        {solution.name}
                      </h3>
                      <p className="text-sm text-gray-300">{solution.description}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-axima-blue/0 via-axima-blue/5 to-axima-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-black/90 border border-axima-blue text-white">
                  <h4 className="font-semibold mb-2">{solution.name}</h4>
                  <p className="text-sm text-gray-300">{solution.description}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Other Innovative Solutions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Other Innovative Solutions in Shiviom</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {innovativeSolutions.map((solution, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger>
                    <div className="p-4 rounded-lg bg-black/40 border border-axima-blue/20 hover:border-axima-blue hover:bg-black/60 transition-all duration-300 transform hover:scale-102">
                      <div className="flex flex-col items-center gap-4">
                        <img 
                          src={solution.image} 
                          alt={solution.name}
                          className="w-20 h-16 object-contain rounded-lg"
                          loading="eager"
                          decoding="async"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{solution.name}</h3>
                          <p className="text-gray-300 text-sm line-clamp-2">{solution.description}</p>
                        </div>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-black/90 text-white border border-axima-blue">
                    <h4 className="font-semibold mb-2">{solution.name}</h4>
                    <p className="text-sm text-gray-300">{solution.description}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
