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
  "SSO support for 5,000+ pre-built application integrations using SAML, OAuth, and OIDC",
  "Adaptive MFA with risk-based authentication triggers and 15+ second-factor options",
  "User provisioning and deprovisioning with SCIM support across major directories",
  "Customer identity and access management for securing external user-facing applications",
  "API gateway security with token-based authentication and rate limiting",
  "On-premise, cloud, and hybrid deployment options to fit existing infrastructure",
];

const benefits = [
  "Secure every application in your stack without replacing your existing directory or infrastructure",
  "Reduce unauthorised access incidents with adaptive, context-aware MFA policies",
  "Speed up IT workflows with automated user lifecycle management across connected apps",
  "Extend SSO to legacy and custom-built applications that standard tools cannot reach",
  "Lower compliance risk with centralised access governance and detailed audit reporting",
];

const faqs = [
  {
    "question": "What is miniOrange, and what security challenges does it address?",
    "answer": "miniOrange provides identity and access management (IAM) solutions that help organisations manage authentication and access to applications. Its capabilities include SSO, multi-factor authentication, and user lifecycle management."
  },
  {
    "question": "How can a miniOrange partner help my business?",
    "answer": "A miniOrange partner can help assess identity security requirements, identify suitable solutions, and coordinate configuration for supported applications. Available implementation and support services depend on the partner's capabilities."
  },
  {
    "question": "What is miniOrange SSO, and how does it work?",
    "answer": "miniOrange SSO enables users to access multiple connected applications through a central authentication process. It helps simplify sign-ins while allowing administrators to apply consistent access policies."
  },
  {
    "question": "How does miniOrange support identity and access management (IAM)?",
    "answer": "miniOrange IAM helps organisations manage user identities, application access, authentication policies, and account provisioning. These capabilities support centralised access control across business systems."
  },
  {
    "question": "Why is multi-factor authentication important for business security?",
    "answer": "Multi-factor authentication (MFA) requires users to verify their identity using additional authentication factors beyond a password. It helps reduce the risk of unauthorised access caused by stolen or compromised credentials."
  },
  {
    "question": "Can miniOrange provide SSO and MFA for cloud and on-premises applications?",
    "answer": "miniOrange supports authentication integrations for various cloud, enterprise, and legacy applications. Available SSO and MFA options depend on application compatibility, deployment requirements, and the selected solution."
  }
];

const MiniOrange = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Helmet>
        <title>{"miniOrange SSO & MFA in India | Identity Management | Axima"}</title>
        <meta name="description" content={"Secure every app with miniOrange single sign-on, adaptive MFA and user provisioning. Cloud, on-premise or hybrid identity security, deployed by Axima."} />
        <meta property="og:title" content={"miniOrange SSO & MFA in India | Identity Management | Axima"} />
        <meta property="og:description" content={"Secure every app with miniOrange single sign-on, adaptive MFA and user provisioning. Cloud, on-premise or hybrid identity security, deployed by Axima."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"miniOrange SSO & MFA in India | Identity Management | Axima"} />
        <meta name="twitter:description" content={"Secure every app with miniOrange single sign-on, adaptive MFA and user provisioning. Cloud, on-premise or hybrid identity security, deployed by Axima."} />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">miniOrange</h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"miniOrange is an identity and access management (IAM) platform that secures your applications with single sign-on, multi-factor authentication and automated user lifecycle management. Founded in 2012, it serves more than 30,000 premium customers in over 100 countries and has grown beyond IAM into data security, privileged access management and customer identity."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"miniOrange SSO offers 6,000+ integrations across cloud, on-premise and in-house applications, using SAML 2.0, OAuth 2.0, OpenID Connect, JWT and WS-Federation, and it can extend single sign-on to legacy apps through reverse-proxy and header-based authentication. It connects to Active Directory, LDAP, Microsoft Entra ID, Okta and ADFS, so you keep your existing directory. miniOrange MFA supports 15+ authentication methods, from OTP, push notifications and authenticator apps to YubiKey and FIDO2 biometrics, and adaptive MFA checks IP address, location, device and time before asking for more proof. Its customer identity and access management (CIAM) module secures sign-up and login for your external users."}
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {"Axima helps you deploy miniOrange in the cloud, on-premise or in a hybrid model, whichever suits your compliance needs. We map your applications, configure SSO and MFA policies, and set up centralised access governance with audit reporting. Fewer passwords. Fewer tickets. Stronger security."}
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

export default MiniOrange;
