import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Vision = () => {
  const benefits = [
    "Take advantage of competitive pricing with our wholesale price list",
    "Access a range of value-added tools, products, and services through a unified approach",
    "Enhance customer satisfaction with multiple touchpoints",
    "Benefit from our experienced technical support team dedicated to meeting your needs",
    "Have a dedicated representative as your primary contact to ensure customer satisfaction",
    "Join over 2,000 satisfied customers across India",
    "Leverage our 7+ years of expertise in Cloud Technology",
    "Our strong understanding of Cloud security",
    "Enjoy prompt and reliable customer support"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
          <div className="w-24 h-1 bg-axima-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            With a passion and conviction to succeed, our vision is to be the leading email solution provider in India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Axima</h2>
          <div className="w-24 h-1 bg-axima-blue mx-auto mb-12"></div>
          
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gray-800"
              >
                <Check className="w-6 h-6 text-axima-blue flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};