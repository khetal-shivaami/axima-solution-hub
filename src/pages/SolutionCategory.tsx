import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Navbar, navItems, categorySlug } from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoStrap from "@/components/BookDemoStrap";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const intros: Record<string, string> = {
  "cloud-infrastructure": "Build, run and scale your business on secure, reliable cloud platforms — with local expertise to guide every step.",
  "email-collaboration": "Bring email, documents, meetings and AI together so your teams can work from anywhere, together.",
  "video-conferencing": "Crystal-clear meetings, webinars and team calls that keep everyone connected.",
  "backup-solutions": "Protect your business data from loss, ransomware and downtime with dependable backup and recovery.",
  "cyber-security": "Stop threats before they reach your people, devices and data with unified protection.",
  "iam-and-mdm": "Control who accesses what, and keep every device secure and compliant — from one place.",
  "e-signature": "Sign, send and manage documents digitally — faster, safer and paperless.",
  hrms: "Simplify hiring, payroll, attendance and people management in one HR platform.",
  itsm: "Monitor, manage and support your IT with smart service management tools.",
  "operating-systems": "Fast, secure, cloud-first devices that are simple to manage at scale.",
  "social-media-management": "Plan, schedule and grow your brand's social presence effortlessly.",
};

const reasons = [
  "Certified experts who understand Indian businesses",
  "Honest, transparent pricing with GST-ready billing",
  "Smooth migration, setup and onboarding",
  "Dedicated local support whenever you need it",
];

const SolutionCategory = () => {
  const { slug = "" } = useParams();
  const columns = navItems.flatMap((n) => n.mega ?? []);
  const category = columns.find((c) => categorySlug(c.title) === slug && c.title !== "Services");
  if (!category) return <NotFound />;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="px-4 pt-32 pb-16 text-center md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-axima-blue">Smarter Solutions</p>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">{category.title}</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            {intros[slug] ?? `Explore our ${category.title} solutions tailored for growing businesses.`}
          </p>
        </motion.div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={item.href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-axima-blue/15 via-white/5 to-transparent p-8 transition-all hover:-translate-y-1 hover:border-axima-blue/60"
              >
                <h2 className="mb-2 text-2xl font-semibold group-hover:text-axima-blue">{item.label}</h2>
                <p className="mb-6 flex-1 text-gray-400">{item.description}</p>
                <span className="flex items-center gap-2 text-sm font-semibold text-axima-blue">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Why buy {category.title} from Axima?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-axima-blue" />
                <span className="text-gray-300">{r}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild className="bg-axima-blue hover:bg-axima-blue/90">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      <BookDemoStrap />
      <Footer />
    </div>
  );
};

export default SolutionCategory;
