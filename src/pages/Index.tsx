import { Hero } from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Stats } from "@/components/Stats";
import { TrustedBy } from "@/components/TrustedBy";
import { Microsoft365Benefits } from "@/components/Microsoft365Benefits";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navbar />
      
      {/* Hero Section with Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 mix-blend-multiply" />
        <Hero />
      </motion.div>

      {/* Featured Products Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 -mt-20"
      >
        <ImageCarousel />
      </motion.section>

      {/* Microsoft 365 Benefits with Tech Background */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-20 py-20 tech-background"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
        <Microsoft365Benefits />
      </motion.section>

      {/* Stats Section with Glowing Effect */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-axima-blue/20 via-transparent to-transparent" />
        <Stats />
      </motion.section>

      {/* Trusted By Section with Floating Animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-40"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        <TrustedBy />
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