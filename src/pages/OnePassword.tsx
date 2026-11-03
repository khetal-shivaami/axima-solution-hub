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
    "question": "What is 1Password for business?",
    "answer": "1Password is a business password manager that helps organisations securely store, share, and manage passwords, credentials, and other sensitive information. It supports centralised access management for teams."
  },
  {
    "question": "Why choose a 1Password partner in India?",
    "answer": "A 1Password partner in India can help businesses evaluate subscription options, plan deployment, and understand administrative controls."
  },
  {
    "question": "How does an enterprise password manager improve security?",
    "answer": "An enterprise password manager helps teams generate strong passwords, store credentials securely, and share access through controlled vaults. It can reduce unsafe password practices and improve credential management."
  },
  {
    "question": "Can 1Password manage employee access to shared credentials?",
    "answer": "Yes, 1Password supports shared vaults and permission controls that help administrators manage access to business credentials. Available controls depend on the plan and configuration."
  },
  {
    "question": "How can I buy 1Password for my organisation in India?",
    "answer": "Businesses can explore 1Password subscriptions through available purchasing channels or a 1Password reseller in India like Axima. Compare user requirements, administrative features, and plan options before purchasing."
  },
  {
    "question": "Is 1Password suitable for enterprise IT environments?",
    "answer": "1Password offers business and enterprise capabilities for managing credentials across teams. Organisations should evaluate administrative controls, security requirements, integrations, and deployment needs before selecting a plan."
  }
];

const OnePassword = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"1Password Business | Business Password Manager | Axima"}</title>
        <meta name="description" content={"Protect every login with 1Password Business. Zero-knowledge encryption, shared vaults, Watchtower alerts and SSO with Entra ID or Google Workspace, via Axima."} />
        <meta property="og:title" content={"1Password Business | Business Password Manager | Axima"} />
        <meta property="og:description" content={"Protect every login with 1Password Business. Zero-knowledge encryption, shared vaults, Watchtower alerts and SSO with Entra ID or Google Workspace, via Axima."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"1Password Business | Business Password Manager | Axima"} />
        <meta name="twitter:description" content={"Protect every login with 1Password Business. Zero-knowledge encryption, shared vaults, Watchtower alerts and SSO with Entra ID or Google Workspace, via Axima."} />
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
          <div className="text-left w-full pt-20">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-4">
              IAM & MDM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">1Password</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"1Password is a business password manager that keeps every password, passkey and sensitive document secure, organised and available only to the people who need it. More than 200,000 businesses use 1Password Business to stop password reuse, end the habit of sharing logins over chat and email, and give every employee strong, unique credentials without asking them to remember them."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Your data is protected with end-to-end AES-256 encryption, and a 128-bit Secret Key stored only on your devices means 1Password holds your encrypted data but never the keys to it. Shared vaults with granular permissions make team password sharing simple and auditable, and Watchtower flags breached, reused and weak passwords, missing two-factor authentication and unsecured websites. Admins can connect single sign-on with Okta, Microsoft Entra ID, Google Workspace or JumpCloud, provision users automatically through SCIM, and review activity in an audit trail. For developers, the 1Password SSH agent, CLI and service accounts keep secrets out of code. 1Password is SOC 2 Type II and ISO 27001 certified."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Axima helps you roll out 1Password across your organisation, whether you need a password manager for teams of ten or an enterprise password manager for thousands of users. We import existing passwords, set up vaults, connect your identity provider and train employees so adoption sticks. If anyone gets locked out, our 24/7 support is there."}
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
