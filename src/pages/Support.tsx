import { Mail, Phone, LifeBuoy, AlertTriangle, ShieldAlert, Headphones, Lightbulb } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  {
    n: 1,
    icon: Headphones,
    title: "Initial Support",
    lines: [
      { icon: Mail, text: "support@axima.in", href: "mailto:support@axima.in" },
      { icon: Phone, text: "+91 77578 41333", href: "tel:+917757841333" },
    ],
  },
  {
    n: 2,
    icon: AlertTriangle,
    title: "Priority Escalation",
    lines: [
      { icon: Phone, text: "+91 77578 41333 (Ext: 2)", href: "tel:+917757841333" },
      { icon: Mail, text: "escalation@axima.in", href: "mailto:escalation@axima.in" },
    ],
  },
  {
    n: 3,
    icon: ShieldAlert,
    title: "C-Suite Escalation",
    lines: [{ icon: Mail, text: "management@axima.in", href: "mailto:management@axima.in" }],
  },
];

const Support = () => (
  <div className="min-h-screen bg-black text-white">
    <Navbar />
    <section className="pt-36 pb-12 container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        We're here to help you <span className="text-axima-blue">every step of the way</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Comprehensive support with a dedicated helpdesk, expert assistance, and a three-tier escalation
        process for quick resolutions.
      </p>
    </section>

    <section className="container mx-auto px-4 pb-12">
      <div className="rounded-2xl border border-axima-blue/30 bg-gradient-to-br from-axima-blue/15 to-transparent p-8 md:flex items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <LifeBuoy className="w-10 h-10 text-axima-blue shrink-0" />
          <div>
            <h2 className="text-2xl font-bold">India Customers</h2>
            <p className="text-gray-400 mt-1">Dedicated support desk — get quick access to all your support needs in one place.</p>
          </div>
        </div>
        <a href="mailto:support@axima.in" className="inline-block mt-6 md:mt-0 bg-axima-blue hover:opacity-90 px-6 py-3 rounded-full font-semibold whitespace-nowrap">
          Raise a Support Ticket
        </a>
      </div>
    </section>

    <section className="container mx-auto px-4 pb-12 text-center">
      <h2 className="text-3xl font-bold mb-2">Reach Out to Us</h2>
      <p className="text-gray-400 mb-8">Multiple ways to connect with our support team</p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <a href="mailto:support@axima.in" className="border border-white/10 rounded-xl p-6 bg-white/[0.03] hover:border-axima-blue/50 transition">
          <Mail className="w-8 h-8 text-axima-blue mx-auto mb-3" />
          <h3 className="font-semibold">Email Support</h3>
          <p className="text-gray-400 text-sm mt-1">support@axima.in</p>
        </a>
        <a href="tel:+917757841333" className="border border-white/10 rounded-xl p-6 bg-white/[0.03] hover:border-axima-blue/50 transition">
          <Phone className="w-8 h-8 text-axima-blue mx-auto mb-3" />
          <h3 className="font-semibold">Phone Support</h3>
          <p className="text-gray-400 text-sm mt-1">+91 77578 41333</p>
        </a>
      </div>
    </section>

    <section className="container mx-auto px-4 pb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Support Escalation Matrix</h2>
        <p className="text-gray-400">Our three-tier support system ensures your issues are resolved efficiently</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.n} className="relative border border-white/10 rounded-2xl p-6 bg-white/[0.03] hover:border-axima-blue/50 transition">
            <span className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-axima-blue flex items-center justify-center font-bold">{t.n}</span>
            <t.icon className="w-8 h-8 text-axima-blue mt-3 mb-3" />
            <h3 className="text-xl font-semibold mb-4">{t.title}</h3>
            <ul className="space-y-2">
              {t.lines.map((l) => (
                <li key={l.text}>
                  <a href={l.href} className="flex items-center gap-2 text-gray-300 hover:text-axima-blue text-sm">
                    <l.icon className="w-4 h-4" /> {l.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-3xl mx-auto space-y-3 text-center">
        <p className="text-amber-400">⚠️ Please mention your query reference number for speedy resolution.</p>
        <p className="flex items-center justify-center gap-2 text-gray-300 text-sm">
          <Lightbulb className="w-4 h-4 text-axima-blue" />
          <strong>Pro Tip:</strong> Provide your ticket number, domain name, and contact details for faster resolution.
        </p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Support;
