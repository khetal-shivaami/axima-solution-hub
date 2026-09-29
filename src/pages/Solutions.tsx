import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Navbar, navItems } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookDemoStrap } from "@/components/BookDemoStrap";

const categories = navItems.find((n) => n.label === "Products & Services")?.mega ?? [];

const Solutions = () => {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="pt-36 pb-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Products & <span className="text-axima-blue">Services</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore every solution Axima offers, grouped by category.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-[280px_1fr] gap-6">
          <aside className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible border border-white/10 rounded-xl p-3 bg-white/[0.03] h-fit md:sticky md:top-32">
            {categories.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActive(i)}
                className={`flex items-center justify-between gap-2 whitespace-nowrap text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  i === active
                    ? "bg-axima-blue text-white"
                    : "text-axima-blue hover:bg-white/5"
                }`}
              >
                {c.title}
                <ChevronRight className="w-4 h-4 hidden md:block" />
              </button>
            ))}
          </aside>

          <div key={current?.title} className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{current?.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {current?.items.map((p) => (
                <Link
                  key={p.href}
                  to={p.href}
                  className="group border border-white/10 rounded-xl p-6 bg-white/[0.03] hover:border-axima-blue/60 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-axima-blue transition-colors">
                    {p.label}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{p.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-axima-blue">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookDemoStrap />
      <Footer />
    </div>
  );
};

export default Solutions;
