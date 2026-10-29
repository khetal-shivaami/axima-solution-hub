import { Helmet } from "react-helmet-async";
import { FaqSchema } from "@/components/FaqSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoStrap from "@/components/BookDemoStrap";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";

const features = [
  "200+ products spanning compute, networking, storage, databases, and AI",
  "Azure Active Directory for identity management and single sign-on across apps",
  "Azure DevOps and GitHub Actions integration for end-to-end CI/CD pipelines",
  "Hybrid cloud support with Azure Arc for managing on-premise and multi-cloud resources",
  "Azure OpenAI Service for deploying GPT-4 and other models in a governed environment",
  "Built-in compliance coverage across 100+ regulatory certifications",
];

const benefits = [
  "Extend your existing Microsoft 365 and Dynamics 365 investments without re-platforming",
  "Achieve consistent governance across on-premise, cloud, and edge with Azure Arc",
  "Accelerate developer productivity with Visual Studio, GitHub Copilot, and native DevOps tooling",
  "Scale enterprise workloads reliably with 99.99% SLA-backed availability zones",
  "Simplify licensing with Microsoft Azure Hybrid Benefit for existing Windows Server and SQL Server customers",
];

const faqs = [
  {
    "question": "What is Microsoft Azure, and how can it benefit my business?",
    "answer": "Microsoft Azure is a cloud computing platform offering services for computing, storage, networking, databases, AI, and security. It helps businesses scale resources, modernise applications, and improve operational efficiency."
  },
  {
    "question": "Why choose Axima as your Microsoft Azure reseller in India?",
    "answer": "Axima helps businesses explore Microsoft Azure solutions based on their IT requirements and budget. Get assistance with subscription options, licensing guidance, and cloud solution selection."
  },
  {
    "question": "What services does a Microsoft Azure service provider offer?",
    "answer": "A Microsoft Azure service provider can assist with cloud infrastructure, virtual machines, storage, networking, security, backup, and cost optimisation."
  },
  {
    "question": "How can Axima help with Azure migration?",
    "answer": "Azure migration involves moving applications, data, and IT workloads to Microsoft Azure. Axima can help assess cloud requirements and coordinate suitable migration services to support scalability and business continuity."
  },
  {
    "question": "Why choose a Microsoft Azure partner in India?",
    "answer": "A Microsoft Azure partner in India can help businesses select suitable cloud solutions, understand licensing options, plan deployments, and address technical requirements based on their business objectives."
  },
  {
    "question": "How much does Microsoft Azure cost?",
    "answer": "Microsoft Azure pricing depends on resource usage, storage, services, and deployment region. Businesses can optimise costs by monitoring consumption and selecting suitable pricing options for their workloads."
  }
];

const MSAzure = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"Microsoft Azure Reseller in India | Azure Services | Axima"}</title>
        <meta name="description" content={"Move to Azure with a Microsoft Solutions Reseller. Azure migration, hybrid cloud, Azure Hybrid Benefit and 24/7 support, with four Azure regions in India."} />
        <meta property="og:title" content={"Microsoft Azure Reseller in India | Azure Services | Axima"} />
        <meta property="og:description" content={"Move to Azure with a Microsoft Solutions Reseller. Azure migration, hybrid cloud, Azure Hybrid Benefit and 24/7 support, with four Azure regions in India."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Microsoft Azure Reseller in India | Azure Services | Axima"} />
        <meta name="twitter:description" content={"Move to Azure with a Microsoft Solutions Reseller. Azure migration, hybrid cloud, Azure Hybrid Benefit and 24/7 support, with four Azure regions in India."} />
      </Helmet>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Navbar />
      <FaqSchema faqs={faqs} />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Hero */}
          <div className="text-left w-full pt-8">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-4">
              Cloud Infrastructure
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Microsoft Azure</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Microsoft Azure is an enterprise-grade cloud computing platform with more than 200 products spanning compute, networking, storage, databases and AI. It connects naturally with the Microsoft tools your business already uses, so you can modernise infrastructure, build intelligent applications and manage hybrid cloud environments from a single control plane."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"There are now four Azure regions in India: Pune, Chennai, Mumbai and Hyderabad, the newest, which went live in 2026. Azure holds MeitY accreditation, which makes Indian data residency and compliance easier to meet. Microsoft Entra ID (formerly Azure Active Directory) secures sign-in across your apps, Azure Arc brings on-premise and multi-cloud servers under one view, and Microsoft Foundry gives your developers Azure OpenAI and thousands of other AI models in a governed environment. Virtual machines spread across availability zones are backed by a 99.99% uptime SLA."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"As a Microsoft Solutions Partner, Axima is a Microsoft Azure partner in India that helps you move to Azure the right way. We assess your workloads, plan your Azure migration, apply Azure Hybrid Benefit so existing Windows Server and SQL Server licences with Software Assurance cost less on Azure, and monitor your environment around the clock. Honest advice. No hidden costs. A team that stays with you after go-live."}
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

          <BookDemoStrap />


          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-black/40 border border-white/10 hover:border-axima-blue/40 transition-all duration-300 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-5 text-left flex items-start justify-between gap-3"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-axima-blue flex-shrink-0 mt-0.5" />
                          <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-300 pl-12 pr-5 pb-5 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default MSAzure;
