
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Monitor, Users, MessageCircleQuestion, PlayCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    date: "15th March 2026",
    title: "Microsoft 365 Business Essentials",
    description:
      "Discover how Microsoft 365 Business Essentials can transform your team's productivity with cloud-based tools, collaboration features, and enterprise-grade security.",
    speaker: "Axima Cloud Experts",
    time: "3:00 PM IST",
    duration: "60 minutes",
  },
  {
    date: "22nd March 2026",
    title: "Microsoft Copilot for Business",
    description:
      "Learn how AI-powered Microsoft Copilot can streamline your workflows, automate repetitive tasks, and boost organizational efficiency.",
    speaker: "Axima AI Specialists",
    time: "4:00 PM IST",
    duration: "45 minutes",
  },
  {
    date: "5th April 2026",
    title: "Azure Cloud Migration Strategies",
    description:
      "A comprehensive session on planning and executing seamless cloud migrations to Microsoft Azure for businesses of all sizes.",
    speaker: "Azure Solution Architects",
    time: "2:00 PM IST",
    duration: "75 minutes",
  },
  {
    date: "18th April 2026",
    title: "Scalefusion Device Management",
    description:
      "Explore Scalefusion's powerful device management capabilities to secure and manage your organization's endpoints efficiently.",
    speaker: "Scalefusion Team",
    time: "3:30 PM IST",
    duration: "50 minutes",
  },
];

const whyAttend = [
  {
    icon: Monitor,
    title: "Live Demos",
    description: "See products and solutions in action",
  },
  {
    icon: Users,
    title: "Expert Speakers",
    description: "Learn from industry professionals",
  },
  {
    icon: MessageCircleQuestion,
    title: "Q&A Sessions",
    description: "Get your questions answered live",
  },
  {
    icon: PlayCircle,
    title: "Recordings",
    description: "Access recordings anytime, anywhere",
  },
];

const UpcomingEvents = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-axima-blue/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-axima-blue/30 text-axima-blue text-sm mb-6">
              <Calendar className="w-4 h-4" />
              Live & On-Demand Events
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Learn from{" "}
              <span className="bg-gradient-to-r from-axima-blue to-purple-500 bg-clip-text text-transparent">
                Industry Experts
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join our exclusive events to stay ahead in cloud technology, SaaS
              distribution, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Upcoming Events
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Click on an event to see details and register
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-xl bg-white/5 hover:border-axima-blue/50 transition-all cursor-pointer"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-axima-blue/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-axima-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{event.date}</p>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                    </div>
                  </div>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-white/10 pt-4">
                        <p className="text-gray-300 mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span>🎤 {event.speaker}</span>
                          <span>🕐 {event.time}</span>
                          <span>⏱ {event.duration}</span>
                        </div>
                        <a
                          href="/contact"
                          className="inline-block mt-4 px-6 py-2 bg-axima-blue text-white rounded-lg hover:bg-axima-blue/80 transition-colors text-sm font-medium"
                        >
                          Register Now
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Attend Our Events?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyAttend.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border border-white/10 bg-black/40"
              >
                <div className="w-14 h-14 rounded-xl bg-axima-blue/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-axima-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UpcomingEvents;
