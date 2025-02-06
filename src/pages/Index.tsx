import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";
import { TrustedBy } from "@/components/TrustedBy";
import { Microsoft365Benefits } from "@/components/Microsoft365Benefits";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleHero } from "@/components/ParticleHero";
import { useRef } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageOneY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const imageTwoY = useTransform(scrollYProgress, [0, 1], ["50%", "150%"]);
  const imageThreeY = useTransform(scrollYProgress, [0, 1], ["100%", "200%"]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <Navbar />
      
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[310px] w-[310px] rounded-full bg-axima-blue/20 blur-[100px]"
        />
        
        <ParticleHero />
      </div>

      {/* Overlapping Hero Section */}
      <div ref={containerRef} className="relative h-[150vh] overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <motion.div
              style={{ y: imageOneY }}
              className="absolute inset-0 w-full h-screen flex items-center justify-center"
            >
              <img
                src="/lovable-uploads/banner/Banner-06microsoft_6_11zon.jpg"
                alt="Microsoft Banner"
                className="w-full max-w-4xl rounded-xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              style={{ y: imageTwoY }}
              className="absolute inset-0 w-full h-screen flex items-center justify-center"
            >
              <img
                src="/lovable-uploads/banner/Banner-04copilot_5_11zon.jpg"
                alt="Copilot Banner"
                className="w-full max-w-4xl rounded-xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              style={{ y: imageThreeY }}
              className="absolute inset-0 w-full h-screen flex items-center justify-center"
            >
              <img
                src="/lovable-uploads/banner/Banner-09jioregion_4_11zon.jpg"
                alt="Jio Region Banner"
                className="w-full max-w-4xl rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10"
      >
        <Stats />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10"
      >
        <div className="tech-background">
          <Microsoft365Benefits />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 bg-black/40 backdrop-blur-sm"
      >
        <TrustedBy />
      </motion.div>

      <motion.footer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10"
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Index;