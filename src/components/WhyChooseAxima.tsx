import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Building2,
  BadgeDollarSign,
  TrendingUp,
  UserCheck,
  Clock,
  Users,
  Calendar,
} from "lucide-react";

const reasons = [
  {
    title: "One Partner, Everything Covered",
    description:
      "Cloud, productivity, cybersecurity, device management, and support, all under one roof. No more juggling vendors or chasing multiple helpdesks.",
    icon: Building2,
  },
  {
    title: "Honest Pricing",
    description:
      "Get access to wholesale pricing and value-added tools without hidden costs or complicated contracts.",
    icon: BadgeDollarSign,
  },
  {
    title: "Scales With You",
    description:
      "Whether you're a 5-person startup or a 500-person enterprise, we seamlessly support 1 to 10,000+ users.",
    icon: TrendingUp,
  },
  {
    title: "Your Dedicated Partner",
    description:
      "You get a dedicated representative who knows your business and stays with you long after the sale.",
    icon: UserCheck,
  },
  {
    title: "24/7 Expert Support",
    description:
      "Certified specialists available around the clock. We respond fast and stay on it until it's resolved.",
    icon: Clock,
  },
  {
    title: "2,000+ Happy Customers",
    description:
      "From Mumbai to Bangalore to Delhi, Indian businesses trust Axima to keep their technology running every day.",
    icon: Users,
  },
  {
    title: "A Decade of Experience",
    description:
      "Ten years across cloud infrastructure, security, and enterprise technology. We know this space inside out.",
    icon: Calendar,
  },
];

export const WhyChooseAxima = () => {
  return (
    <section className="relative z-10 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Axima</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm hover:border-axima-blue/40 hover:scale-[1.02] transition-all duration-300">
                  <div className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-axima-blue/20 text-axima-blue flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">{reason.title}</h3>
                      <p className="text-sm text-gray-400 leading-snug">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

