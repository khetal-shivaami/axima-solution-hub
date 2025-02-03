import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 1 }: { value: number | string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString(), 10);
      // Increase speed by reducing the total steps to 50
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
      description: "Successfully deployed Microsoft solutions to thousands of businesses across India."
    },
    {
      value: 99,
      label: "Customer Satisfaction",
      suffix: "%",
      description: "Our customers trust us for reliable Microsoft product deployment and support."
    },
    {
      value: 24,
      label: "Technical Support",
      suffix: " hrs",
      description: "Round-the-clock Microsoft-certified support team at your service."
    }
  ];

  return (
    <div className="w-full bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h2 className="text-6xl font-bold text-white">
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </h2>
              <h3 className="text-2xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};