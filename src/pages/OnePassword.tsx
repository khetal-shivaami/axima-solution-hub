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
  "Encrypted password vault with AES-256 and end-to-end zero-knowledge architecture",
  "Team vaults with granular sharing controls and role-based access permissions",
  "Watchtower for breach monitoring, weak password detection, and security health scoring",
  "1Password Secrets Automation for managing API keys, tokens, and infrastructure credentials",
  "SSO integration with Okta, Azure AD, Google Workspace, and JumpCloud",
  "Admin console with usage reports, access logs, and policy enforcement",
];

const benefits = [
  "Eliminate weak and reused passwords across your workforce without enforcing complex rules manually",
  "Reduce breach risk with a zero-knowledge model where even 1Password cannot access your data",
  "Save IT time with centralised credential management and automated offboarding vault recovery",
  "Enable developer teams to manage secrets securely without hardcoding credentials in code",
  "Build a stronger security culture with visibility into password hygiene across every team",
];

const faqs = [
  {
    question: "Is 1Password zero-knowledge?",
    answer:
      "Yes. 1Password uses a dual-key encryption model meaning only you hold the keys to decrypt your data.",
  },
  {
    question: "Can 1Password be used for team credential sharing?",
    answer:
      "Yes. Shared vaults allow teams to access common credentials with role-based permissions and access logs.",
  },
  {
    question: "Does 1Password support SSO?",
    answer:
      "Yes. It integrates with major identity providers including Okta, Azure AD, and Google Workspace via SAML.",
  },
  {
    question: "What is Watchtower?",
    answer:
      "Watchtower monitors your saved credentials against known breach databases and flags weak, reused, or compromised passwords.",
  },
  {
    question: "Can developers use 1Password for secret management?",
    answer:
      "Yes. 1Password Secrets Automation manages infrastructure secrets, API tokens, and SSH keys with CI/CD pipeline integration.",
  },
];

const OnePassword = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
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
              IAM & MDM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">1Password</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              1Password is a business password manager that keeps every credential, secret, and sensitive document secure, organised, and accessible only to the people who need it. It reduces the risk of breaches caused by weak or reused passwords across your entire organisation.
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

export default OnePassword;
