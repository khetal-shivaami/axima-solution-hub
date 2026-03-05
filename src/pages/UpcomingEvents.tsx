
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Monitor, Users, MessageCircleQuestion, PlayCircle, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EventData {
  event_id: number;
  event_title: string;
  event_description: string | null;
  event_date: string;
  event_start_time: string;
  registration_link: string;
  status: string;
}

const formatEventDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
};

const formatEventTime = (seconds: string) => {
  const totalSeconds = parseFloat(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period} IST`;
};

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
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://34.100.173.113:5000/adminpanel/get_axima_event_data/", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error && data.events) {
          setEvents(data.events.filter((e: EventData) => e.status === "active"));
        }
      })
      .catch((err) => console.error("Failed to fetch events:", err))
      .finally(() => setLoading(false));
  }, []);

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

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-axima-blue" />
            </div>
          ) : events.length === 0 ? (
            <p className="text-center text-gray-400 py-12">No upcoming events at the moment.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {events.map((event, index) => (
                <motion.div
                  key={event.event_id}
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
                        <p className="text-sm text-gray-400">{formatEventDate(event.event_date)}</p>
                        <h3 className="text-lg font-semibold">{event.event_title}</h3>
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
                          {event.event_description && (
                            <p className="text-gray-300 mb-3">{event.event_description}</p>
                          )}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span>🕐 {formatEventTime(event.event_start_time)}</span>
                            <span>📅 {formatEventDate(event.event_date)}</span>
                          </div>
                          <a
                            href={event.registration_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
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
          )}
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
