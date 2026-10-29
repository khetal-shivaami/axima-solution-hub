import { motion } from "framer-motion";
import { Award } from "lucide-react";

const partners = [
  { name: "Microsoft", logo: "/lovable-uploads/logos/Microsoft_365.webp", color: "#4FC3F7" },
  { name: "Check Point", logo: "/lovable-uploads/logos/CheckPoint-revers.png", color: "#EC1A52" },
  { name: "Zoom", logo: "/lovable-uploads/logos/Zoom-01.webp", color: "#58A6FF" },
  { name: "JumpCloud", logo: "/lovable-uploads/logos/Jumpcloud-01.webp", color: "#2DD4BF" },
  { name: "Spin.AI", logo: "/lovable-uploads/logos/Spin.ai.webp", color: "#A78BFA" },
  { name: "Atera", logo: "/lovable-uploads/logos/Atera-01.webp", color: "#FF9A5A" },
  { name: "1Password", logo: "/lovable-uploads/logos/OnePassword-01.webp", color: "#4D9FFF" },
  { name: "FlexiSign", logo: "/lovable-uploads/logos/Flexisign-logo-02.webp", color: "#F472B6" },
];

const ITEM_WIDTH = 200;
// Pitch of 240px so six logos are visible on screen at a time; each copy of
// the list (10 × 240 = 2400px) is wider than any screen, so the same logo
// never appears twice at once.
const ITEM_MARGIN = 40;
const COPY_WIDTH = partners.length * (ITEM_WIDTH + ITEM_MARGIN);
// Two copies are the minimum for a seamless loop; each copy is far wider
// than any screen, so duplicates are never visible together and the
// strip always stays covered.
const COPIES = 2;
const LOOP_DISTANCE = COPY_WIDTH;

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
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {Array.from({ length: COPIES }).flatMap((_, copy) =>
            partners.map((partner, idx) => (
              <div
                key={`${copy}-${partner.name}-${idx}`}
                className="flex shrink-0 flex-col items-center justify-center gap-3"
                style={{ width: ITEM_WIDTH, marginRight: ITEM_MARGIN }}
              >
                <div
                  className="relative flex h-24 w-40 items-center justify-center rounded-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${partner.color}26 0%, ${partner.color}0D 100%)`,
                    border: `1px solid ${partner.color}33`,
                    boxShadow: `0 0 24px ${partner.color}1A, inset 0 0 18px ${partner.color}0D`,
                  }}
                >
                  <span
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 120%, ${partner.color}3D 0%, transparent 70%)`,
                    }}
                  />
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="eager"
                    className="relative h-14 w-36 object-contain"
                    style={{ filter: `drop-shadow(0 0 10px ${partner.color}59)` }}
                  />
                </div>
                <span
                  className="text-xs font-medium"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </span>
              </div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TechPartnersRibbon;
