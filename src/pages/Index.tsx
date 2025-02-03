import { Hero } from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Stats } from "@/components/Stats";
import { TrustedBy } from "@/components/TrustedBy";
import { Microsoft365Benefits } from "@/components/Microsoft365Benefits";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />
      
      {/* Hero Section with Dynamic Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-axima-blue/20 via-transparent to-transparent" />
        <Hero />
      </motion.div>

      {/* Featured Products Carousel with Floating Effect */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 -mt-20"
      >
        <ImageCarousel />
      </motion.section>

      {/* Stats Section with Glowing Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-20 py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-axima-blue/10 via-transparent to-transparent" />
        <Stats />
      </motion.section>

      {/* Microsoft 365 Benefits with Tech Background */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-30 py-20 tech-background"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
        <Microsoft365Benefits />
        
        {/* Call to Action */}
        <motion.div 
          className="container mx-auto px-4 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            className="bg-axima-blue hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore All Microsoft Solutions <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Trusted By Section with Floating Animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-40 bg-black/40 py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Trusted By Industry Leaders</h2>
          <TrustedBy />
        </div>
      </motion.section>

      {/* Footer with Gradient Border */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-50 border-t border-gradient-to-r from-axima-blue/30 via-purple-500/30 to-axima-blue/30"
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Index;