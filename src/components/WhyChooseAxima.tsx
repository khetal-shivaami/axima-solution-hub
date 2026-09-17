import { motion } from "framer-motion";
import {
  Building2,
  BadgeDollarSign,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const reasons = [
  {
    title: "One Partner, Everything Covered",
    description:
      "Cloud, productivity, cybersecurity, device management, and support, all under one roof. No more juggling vendors or chasing multiple helpdesks.",
    icon: Building2,
  },
  {
    title: "Honest Pricing",
    description:
      "Get access to wholesale pricing and value-added tools without hidden costs or complicated contracts.",
    icon: BadgeDollarSign,
  },
  {
    title: "Scales With You",
    description:
      "Whether you're a 5-person startup or a 500-person enterprise, we seamlessly support 1 to 10,000+ users.",
    icon: TrendingUp,
  },
  {
    title: "Your Dedicated Partner",
    description:
      "You get a dedicated representative who knows your business and stays with you long after the sale.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-axima-blue/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
                <div className="relative h-full bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-axima-blue/50 transition-all duration-300">
                  <div className="p-3 rounded-lg bg-axima-blue/20 text-axima-blue w-fit mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-axima-blue transition-colors duration-300">
                    {reason.title}
                  </h3>
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
