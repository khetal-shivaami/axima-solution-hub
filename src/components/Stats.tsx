import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Users, Clock } from "lucide-react";

const AnimatedNumber = ({ value, duration = 1 }: { value: number | string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString(), 10);
      const steps = 50;
      const increment = end / steps;
      const incrementTime = (duration * 1000) / steps;
      
      const timer = setInterval(() => {
        start = Math.min(start + increment, end);
        setCount(Math.floor(start));
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

export const Stats = () => {
  const stats = [
    {
      value: 2000,
      label: "Microsoft Licenses Deployed",
      suffix: "+",
      description: "Successfully deployed Microsoft solutions to thousands of businesses across India.",
      icon: Users
    },
    {
      value: 99,
      label: "Customer Satisfaction",
      suffix: "%",
      description: "Our customers trust us for reliable Microsoft product deployment and support.",
      icon: Shield
    },
    {
      value: 24,
      label: "Technical Support",
      suffix: " hrs",
      description: "Round-the-clock Microsoft-certified support team at your service.",
      icon: Clock
    }
  ];

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-axima-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
                
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-axima-blue/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-axima-blue/20 text-axima-blue">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-5xl font-bold text-white">
                      <AnimatedNumber value={stat.value} />
                      {stat.suffix}
                    </h2>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{stat.label}</h3>
                  <p className="text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};