import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('microsoft365-benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="px-4 py-2 text-sm bg-gradient-to-r from-axima-blue/20 to-axima-blue/10 rounded-full border border-axima-blue/20 text-axima-blue hover-lift">
              Authorized Microsoft Partner
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transform Your Business with Microsoft Solutions
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Empower your organization with Microsoft's comprehensive suite of cloud solutions. 
            As a trusted Microsoft Cloud Solution Provider, we deliver seamless integration, 
            enhanced productivity, and robust security.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              className="bg-axima-blue hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group hover-lift"
              onClick={scrollToProducts}
            >
              Explore Microsoft Solutions 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              className="glass-card px-8 py-6 text-lg rounded-full hover-lift"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Sales
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white/[0.02]" />
      <div className="absolute -top-1/2 left-0 -z-10 h-[200%] w-full">
        <div className="absolute -top-96 left-1/2 -translate-x-1/2 transform-gpu blur-3xl">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-axima-blue/20 to-transparent opacity-40" />
        </div>
      </div>
    </div>
  );
};