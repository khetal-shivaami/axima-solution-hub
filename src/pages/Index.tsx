
import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ParticleHero } from "@/components/ParticleHero";
import { MovingRibbon } from "@/components/MovingRibbon";
import { Testimonials } from "@/components/Testimonials";
import { Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ACEAdvantage } from "@/components/ACEAdvantage";
import { WhyChooseAxima } from "@/components/WhyChooseAxima";

const Index = () => {
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

{/* About Section */}
<motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-axima-blue/20">
              <Building2 className="w-8 h-8 text-axima-blue" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 text-center">About Us</h1>

          <Card className="bg-black/40 border-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Axima Corporation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xl text-gray-300">
                Axima Corporation is a certified Microsoft 365 partner, dedicated to helping businesses leverage the benefits of cloud solutions. In today's competitive landscape, companies seek collaborative tools that provide a strategic advantage. Microsoft 365 delivers exactly that. With Axima's expertise in integrating Microsoft 365, your business gains enhanced flexibility and agility, empowering you to stay ahead in the market.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <ACEAdvantage />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10"
      >
        <Stats />
      </motion.div>

      <WhyChooseAxima />

      

      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10"
      >
        <Testimonials />
      </motion.div>

      <motion.footer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10"
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Index;
