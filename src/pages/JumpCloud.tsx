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
  "Cloud directory for user lifecycle management with LDAP, RADIUS, and SAML support",
  "Single sign-on for thousands of pre-integrated SaaS applications",
  "Multi-factor authentication with push, TOTP, and hardware key support",
  "Cross-platform MDM for Windows, macOS, Linux, iOS, and Android devices",
  "Conditional access policies based on user role, device trust, and network location",
  "Full audit logs, compliance reporting, and real-time activity monitoring",
];

const benefits = [
  "Replace on-premise Active Directory with a cloud-native directory that requires no hardware",
  "Reduce password fatigue and helpdesk load with SSO across every app employees use",
  "Enforce security policies uniformly across every device regardless of operating system",
  "Onboard and offboard employees in minutes with automated provisioning and deprovisioning",
  "Lower licensing cost compared to running separate IAM and MDM tools simultaneously",
];

const faqs = [
  {
    "question": "What is JumpCloud, and how does it help IT teams?",
    "answer": "JumpCloud is a cloud-based directory platform that helps organisations manage user identities, devices, and access to business resources. It supports centralised administration across different IT environments."
  },
  {
    "question": "Why work with a JumpCloud partner?",
    "answer": "A JumpCloud partner can help businesses evaluate directory and access management requirements, plan deployment, and configure suitable capabilities. Implementation and ongoing support depend on the partner's service scope."
  },
  {
    "question": "How does JumpCloud support identity and access management (IAM)?",
    "answer": "JumpCloud supports identity and access management (IAM) by helping IT teams manage user accounts, authentication, device access, and permissions. Centralised controls can simplify administration and strengthen access governance."
  },
  {
    "question": "Can JumpCloud replace Active Directory?",
    "answer": "JumpCloud can serve as a cloud directory alternative for certain Active Directory use cases. The right approach depends on existing applications, authentication requirements, device management, and legacy infrastructure."
  },
  {
    "question": "Does JumpCloud provide a single sign-on (SSO) solution?",
    "answer": "JumpCloud supports single sign-on (SSO) for compatible applications, allowing users to access multiple services through a central authentication experience. Supported applications and protocols depend on the configuration and subscription."
  },
  {
    "question": "Can JumpCloud manage users and devices from one platform?",
    "answer": "JumpCloud combines directory services with device management capabilities to help IT teams administer user access and supported devices centrally. Available features depend on the selected package and configuration."
  }
];

const JumpCloud = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"JumpCloud Partner in India | Directory, SSO & MDM | Axima"}</title>
        <meta name="description" content={"Manage identities, access and devices from one console with JumpCloud. Cloud directory, SSO, MFA, device management and patching, deployed by Axima."} />
        <meta property="og:title" content={"JumpCloud Partner in India | Directory, SSO & MDM | Axima"} />
        <meta property="og:description" content={"Manage identities, access and devices from one console with JumpCloud. Cloud directory, SSO, MFA, device management and patching, deployed by Axima."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"JumpCloud Partner in India | Directory, SSO & MDM | Axima"} />
        <meta name="twitter:description" content={"Manage identities, access and devices from one console with JumpCloud. Cloud directory, SSO, MFA, device management and patching, deployed by Axima."} />
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
              IAM & MDM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">JumpCloud</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"JumpCloud is an AI-powered unified IT management platform that brings identity and access management (IAM) and device management together in one cloud console. More than 250,000 organisations in over 160 countries use it to control who gets in, what they can reach and which devices they use, whether their teams work in the office, at home or on the move."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"At its core is a cloud directory with Cloud LDAP and Cloud RADIUS, which makes JumpCloud a practical Active Directory alternative for businesses that want to retire on-premise servers. Single sign-on (SSO) over SAML and OIDC connects users to their apps, and multi-factor authentication (MFA) supports push, TOTP, security keys, Touch ID, Windows Hello and passwordless login with JumpCloud Go. Unified endpoint management covers macOS, Windows, Linux, iOS, iPadOS and Android, with patch management built in. Conditional access checks device trust, network and location before granting access, and Password Vault, privileged access management and SaaS management complete the platform."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Axima helps you roll out JumpCloud without disrupting your team. We migrate users and groups from Active Directory, connect your HR system and apps, set up zero-touch enrolment for devices, and automate onboarding and offboarding so access is removed as soon as someone leaves. As your JumpCloud partner in India, we stay with you, with support available 24/7."}
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

export default JumpCloud;
