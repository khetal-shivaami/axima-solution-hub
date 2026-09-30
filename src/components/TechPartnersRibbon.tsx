import { motion } from "framer-motion";
import { Award } from "lucide-react";
import checkPointLogo from "@/assets/check-point-logo.asset.json";

const partners = [
  { name: "Microsoft", logo: "/lovable-uploads/logos/Microsoft_365.webp" },
  { name: "Check Point", logo: `https://axima-solution-hub.lovable.app${checkPointLogo.url}` },
  { name: "Zoom", logo: "/lovable-uploads/logos/Zoom-01.webp" },
  { name: "JumpCloud", logo: "/lovable-uploads/logos/Jumpcloud-01.webp" },
  { name: "Scalefusion", logo: "/lovable-uploads/logos/Scalefusion-01.webp" },
  { name: "Spin.AI", logo: "/lovable-uploads/logos/Spin.ai.webp" },
  { name: "HYCU", logo: "/lovable-uploads/logos/Hycu-2-01.webp" },
  { name: "Atera", logo: "/lovable-uploads/logos/Atera-01.webp" },
  { name: "1Password", logo: "/lovable-uploads/logos/OnePassword-01.webp" },
  { name: "FlexiSign", logo: "/lovable-uploads/logos/Flexisign-logo-02.webp" },
];

const ITEM_WIDTH = 260;
const ITEM_MARGIN = 24;
const LOOP_DISTANCE = partners.length * (ITEM_WIDTH + ITEM_MARGIN);

const TechPartnersRibbon = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-5 h-5 text-axima-blue" />
        <span className="text-xs uppercase tracking-widest text-axima-blue font-medium">
          Technology Partners
        </span>
      </div>

      <div className="relative overflow-hidden border-y border-white/10 py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex whitespace-nowrap items-center will-change-transform"
          animate={{ x: [0, -LOOP_DISTANCE] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="mx-3 flex flex-col items-center justify-center gap-2"
              style={{ width: ITEM_WIDTH }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                loading="lazy"
                className="h-14 w-40 object-contain"
              />
              <span className="text-xs font-medium text-gray-300">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechPartnersRibbon;
