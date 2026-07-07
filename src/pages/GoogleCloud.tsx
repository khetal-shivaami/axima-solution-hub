import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";

const features = [
  "Global network spanning 40+ regions with low-latency connectivity",
  "Compute Engine and GKE for flexible VM and container workloads",
  "BigQuery for serverless, petabyte-scale data analytics",
  "Vertex AI for building, deploying, and managing ML models",
  "Cloud Storage with multi-region redundancy and fine-grained access controls",
  "Integrated security with Chronicle SIEM, Security Command Center, and zero-trust architecture",
];

const benefits = [
  "Reduce infrastructure overhead with fully managed services that scale automatically",
  "Cut the total cost of ownership with sustained use discounts and committed use contracts",
  "Accelerate AI adoption with pre-trained Google models and Gemini integration",
  "Meet compliance requirements across ISO, SOC 2, GDPR, and India-specific frameworks",
  "Get faster time-to-market with CI/CD pipelines and DevOps-ready tooling",
];

const faqs = [
  {
    question: "What is Google Cloud used for?",
    answer:
      "It supports a wide range of workloads, including app hosting, data analytics, machine learning, and enterprise migrations.",
  },
  {
    question: "Is Google Cloud suitable for small businesses?",
    answer:
      "Yes. Pay-as-you-go pricing and free-tier options make it accessible at any scale.",
  },
  {
    question: "How secure is Google Cloud?",
    answer:
      "It uses the same security infrastructure that protects Google Search and Gmail, with built-in threat detection and encryption at rest and in transit.",
  },
  {
    question: "Can I migrate my existing workloads to Google Cloud?",
    answer:
      "Yes. Google offers migration tools, partner support, and a structured migration framework for lift-and-shift or re-architecting.",
  },
  {
    question: "What support plans are available?",
    answer:
      "Plans range from basic documentation access to 24/7 technical support with dedicated TAMs.",
  },
];

const GoogleCloud = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto pt-8">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-4">
              Cloud Infrastructure
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Google Cloud</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Google Cloud gives businesses a secure, intelligent infrastructure to run workloads, build applications, and scale without limits. It combines high-performance computing with AI-native tools built into every layer of the stack.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-axima-blue hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Start Building Today
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 group h-full">
                    <div className="p-4 flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-axima-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-axima-blue" />
                      </div>
                      <p className="text-gray-300 group-hover:text-axima-blue transition-colors duration-300">
                        {feature}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/40 border border-white/10 hover:border-axima-blue transition-all duration-300 group h-full">
                    <div className="p-4 flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-axima-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-axima-blue" />
                      </div>
                      <p className="text-gray-300 group-hover:text-axima-blue transition-colors duration-300">
                        {benefit}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/40 border border-white/10 hover:border-axima-blue/40 transition-all duration-300">
                    <div className="p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <HelpCircle className="h-5 w-5 text-axima-blue flex-shrink-0 mt-0.5" />
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      </div>
                      <p className="text-gray-300 pl-8 leading-relaxed">{faq.answer}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default GoogleCloud;
