
import { motion } from "framer-motion";

const partners = [
  "Microsoft Cloud Solution Provider",
  "Microsoft 365 Certified Partner",
  "Azure Cloud Expert",
  "Microsoft Teams Specialist",
  "Power Platform Professional",
  "Security & Compliance Expert",
  "Enterprise Mobility Partner",
  "Microsoft Copilot Partner"
];

export const MovingRibbon = () => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border-y border-white/10 overflow-hidden py-4">
      <motion.div
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap"
      >
        {[...partners, ...partners].map((partner, idx) => (
          <div
            key={idx}
            className="mx-8 flex items-center gap-2 text-white/80"
          >
            <span className="text-axima-blue">•</span>
            {partner}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
