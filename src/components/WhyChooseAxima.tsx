import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Microsoft 365 Expertise",
    description: "Certified Microsoft 365 partner with deep expertise in cloud solutions and digital transformation."
  },
  {
    title: "Comprehensive Support",
    description: "24/7 dedicated support team ensuring your business operations run smoothly."
  },
  {
    title: "Custom Solutions",
    description: "Tailored Microsoft 365 solutions designed to meet your specific business needs."
  },
  {
    title: "Security First",
    description: "Advanced security measures and compliance standards to protect your data."
  },
  {
    title: "Seamless Integration",
    description: "Efficient integration of Microsoft 365 tools with your existing systems."
  },
  {
    title: "Cost Effective",
    description: "Competitive pricing and optimal resource utilization for maximum ROI."
  }
];

export const WhyChooseAxima = () => {
  return (
    <section className="py-12 space-y-8">
      <h2 className="text-3xl font-bold text-center text-white">Why Choose Axima</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full p-6 bg-black/40 border border-transparent hover:border-axima-blue backdrop-blur-sm transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-axima-blue/20 group-hover:bg-axima-blue/30 transition-colors">
                  <Check className="w-5 h-5 text-axima-blue" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-axima-blue transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};