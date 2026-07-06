import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Vision } from "@/components/Vision";
import { ManagementTeam } from "@/components/ManagementTeam";
import { WhyChooseAxima } from "@/components/WhyChooseAxima";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "2,000+", label: "Happy Customers" },
  { icon: MapPin, value: "4", label: "Cities across India" },
  { icon: Award, value: "10+", label: "Global Tech Partners" },
];

const partners = [
  "Microsoft", "Check Point", "Zoom", "JumpCloud",
  "Scalefusion", "Spin.AI", "HYCU", "Atera", "1Password", "FlexiSign",
];

const locations = ["Mumbai", "Bangalore", "Chennai", "Delhi"];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-axima-blue border border-axima-blue/30 rounded-full mb-6">
              About Axima
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your technology partner,{" "}
              <span className="bg-gradient-to-r from-axima-blue to-cyan-400 bg-clip-text text-transparent">
                built for Indian business.
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A Mumbai-based team helping businesses across India adopt the right tools for productivity, collaboration, and security.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-axima-blue/40 transition-all"
                >
                  <Icon className="w-6 h-6 text-axima-blue mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-10 bg-axima-blue" />
              <span className="text-xs font-medium uppercase tracking-widest text-axima-blue">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Axima Corporation</h2>

            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                Axima Corporation is a Mumbai-based technology partner helping businesses across India adopt the right tools for productivity, collaboration, and security.
              </p>
              <p>
                A sister company of Shivaami, one of India's most recognised cloud technology companies, Axima brings the same depth of expertise to the Microsoft ecosystem and beyond.
              </p>
              <p>
                We have been in the business for over a decade. We started with Microsoft 365 and have since grown into a multi-product partner.
              </p>
              <p>
                Today we work with global technology leaders, including Check Point, Microsoft, Zoom, JumpCloud, Scalefusion, Spin.AI, HYCU, Atera, 1Password, and FlexiSign.
              </p>
              <p>
                Whether you need cloud infrastructure, endpoint management, cybersecurity, or digital workflows, we bring everything under one roof.
              </p>
              <p>
                As a Microsoft Solutions Partner, we are authorised to deliver, implement, and support Microsoft solutions for businesses of every size.
              </p>
              <p>
                Our certified team is available around the clock to help you evaluate, implement, and get the most from every solution we offer. We don't just sell software. We make sure it works for your business.
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:sticky lg:top-28 self-start"
          >
            <div className="bg-gradient-to-br from-axima-blue/10 to-transparent border border-axima-blue/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-axima-blue" />
                <span className="text-xs uppercase tracking-widest text-axima-blue font-medium">Locations</span>
              </div>
              <div className="space-y-3">
                {locations.map((loc) => (
                  <div key={loc} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                    <span className="text-white font-medium">{loc}</span>
                    <span className="text-xs text-gray-500">India</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-axima-blue" />
                <span className="text-xs uppercase tracking-widest text-axima-blue font-medium">Technology Partners</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-axima-blue/40 hover:text-white transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <Vision />
      <WhyChooseAxima />
      <ManagementTeam />

      <Footer />
    </div>
  );
};

export default About;
