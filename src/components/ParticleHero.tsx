
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const ParticleHero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('microsoft365-benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00A3FF",
            },
            links: {
              color: "#00A3FF",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <br></br><br></br><br></br>
          {/* Partner Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6 mt-20 sm:mt-0" // Added margin-top for mobile
          >
            <span className="px-4 py-2 text-sm bg-gradient-to-r from-axima-blue/20 to-axima-blue/10 rounded-full border border-axima-blue/20 text-axima-blue hover-lift">
              Authorized Microsoft Partner
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight px-4" // Adjusted text size and added padding
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Transform Your Business
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
              with
            </span>
            <br className="sm:hidden" /> {/* Line break only on mobile */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-axima-blue via-blue-400 to-blue-600">
              Microsoft Solutions
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed px-4" // Adjusted text size and added padding
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Empower your organization with Microsoft's comprehensive suite of cloud solutions. 
            As a trusted Microsoft Cloud Solution Provider, we deliver seamless integration, 
            enhanced productivity, and robust security.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4" // Adjusted gap and added padding
          >
            <Button
              className="w-full sm:w-auto bg-axima-blue hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group hover:-translate-y-1"
              onClick={() => window.location.href = '/products'}
            >
              Explore Products 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              className="w-full sm:w-auto glass-card px-8 py-6 text-lg rounded-full group hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Book Demo
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
};
