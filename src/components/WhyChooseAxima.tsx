import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Users,
  MapPin,
  Headset,
  Award,
  Calendar,
  Building2,
  BadgeDollarSign,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const AnimatedNumber = ({
  value,
  duration = 1,
}: {
  value: number | string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && value !== "") {
      let start = 0;
      const end = parseInt(value.toString(), 10);
      if (isNaN(end)) return;

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

  return <span ref={ref}>{value === "" ? "" : count}</span>;
};

const reasons = [
  {
    value: 2000,
    suffix: "+",
    label: "Satisfied Customers",
    description:
      "Trusted by businesses across India for reliable technology and ongoing support.",
    icon: Users,
  },
  {
    value: 5,
    suffix: "+",
    label: "Key Cities",
    description:
      "Local presence in major business hubs with quick on-ground support.",
    icon: MapPin,
  },
  {
    value: 24,
    suffix: " hrs",
    label: "Technical Support",
    description:
      "Certified specialists resolve issues fast, any time of day or night.",
    icon: Headset,
  },
  {
    value: 98,
    suffix: " %",
    label: "Customer Satisfaction",
    description:
      "Responsive service and long-term partnerships that keep clients happy.",
    icon: Award,
  },
  {
    value: 10,
    suffix: " +",
    label: "Years Experience",
    description:
      "A decade of expertise across cloud, security, and enterprise tech.",
    icon: Calendar,
  },
  {
    value: "",
    suffix: "",
    label: "One Partner, Everything Covered",
    description:
      "Cloud, security, devices, and support — all handled under one roof.",
    icon: Building2,
  },
  {
    value: "",
    suffix: "",
    label: "Honest Pricing",
    description:
      "Clear, wholesale pricing with no hidden costs or complex contracts.",
    icon: BadgeDollarSign,
  },
  {
    value: "",
    suffix: "",
    label: "Scales With You",
    description:
      "From 1 users to 10,000+, solutions that grow as your business grows.",
    icon: TrendingUp,
  },
  {
    value: "",
    suffix: "",
    label: "Your Dedicated Partner",
    description:
      "One representative who knows your business and stays with you always.",
    icon: UserCheck,
  },
];

export const WhyChooseAxima = () => {
  return (
    <section className="relative z-10 py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Axima</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const hasValue = reason.value !== "";
            return (
              <motion.div
                key={reason.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-axima-blue/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
                <div className="relative h-full bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-axima-blue/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-axima-blue/20 text-axima-blue group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {hasValue ? (
                      <h3 className="text-4xl md:text-5xl font-bold text-white">
                        <AnimatedNumber value={reason.value} />
                        {reason.suffix}
                      </h3>
                    ) : null}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-axima-blue transition-colors duration-300">
                    {reason.label}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {reason.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-axima-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
