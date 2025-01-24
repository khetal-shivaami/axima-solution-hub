import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Delivering Cloud Solutions for Your Success
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Axima Corporation is one of Microsoft's Trusted Cloud Solution Providers in India, dedicated to helping businesses leverage the benefits of cloud solutions.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Button
              className="bg-axima-blue hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Solutions <ArrowRight className="ml-2" />
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};