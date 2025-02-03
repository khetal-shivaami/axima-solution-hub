import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "User Input",
    description: "Ask questions or request assistance in natural language",
    icon: "💭",
  },
  {
    title: "Security Check",
    description: "Enterprise-grade security validates and protects your data",
    icon: "🔒",
  },
  {
    title: "AI Processing",
    description: "Advanced AI analyzes context and generates responses",
    icon: "⚡",
  },
  {
    title: "Smart Response",
    description: "Receive intelligent, contextual assistance instantly",
    icon: "✨",
  },
];

const Copilot = () => {
  const [scope, animate] = useAnimate();
  const activeStep = useRef(0);

  useEffect(() => {
    const animateSteps = async () => {
      while (true) {
        for (let i = 0; i < steps.length; i++) {
          activeStep.current = i;
          await animate(
            `#step-${i}`,
            { scale: 1.05, backgroundColor: "rgba(0, 163, 255, 0.2)" },
            { duration: 0.5 }
          );
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await animate(
            `#step-${i}`,
            { scale: 1, backgroundColor: "rgba(0, 0, 0, 0.3)" },
            { duration: 0.5 }
          );
          
          // Animate the arrow if not the last step
          if (i < steps.length - 1) {
            await animate(
              `#arrow-${i}`,
              { x: [0, 20, 0], opacity: [0.4, 1, 0.4] },
              { duration: 1 }
            );
          }
        }
      }
    };

    animateSteps();
  }, [animate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black tech-background">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12" ref={scope}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          How Microsoft Copilot Works
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                id={`step-${index}`}
                className="relative bg-black/30 border border-axima-blue/20 rounded-xl p-6 text-white hover:border-axima-blue transition-all duration-300 w-64"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  id={`arrow-${index}`}
                  className="hidden md:block mx-4"
                  initial={{ opacity: 0.4 }}
                >
                  <ArrowRight className="w-6 h-6 text-axima-blue" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Copilot;