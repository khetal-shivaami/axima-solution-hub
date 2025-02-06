import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const desktopImages = [
  "/lovable-uploads/banner/Banner-06microsoft_6_11zon.jpg",
  "/lovable-uploads/banner/Banner-04copilot_5_11zon.jpg",
  "/lovable-uploads/banner/Banner-09jioregion_4_11zon.jpg"
];

const mobileImages = [
  "/lovable-uploads/banner/mobilebanner/Banner-11microsoft_2_11zon.jpg",
  "/lovable-uploads/banner/mobilebanner/Banner-14copilot_1_11zon.jpg",
  "/lovable-uploads/banner/mobilebanner/Banner-12jioregion_3_11zon.jpg"
];

export const OverlappingBanners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const images = isMobile ? mobileImages : desktopImages;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div 
      ref={containerRef}
      className="relative h-[200vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {images.map((src, index) => {
          const translateY = useTransform(
            scrollYProgress,
            [index / images.length, (index + 1) / images.length],
            ["0%", "-100%"]
          );

          const opacity = useTransform(
            scrollYProgress,
            [
              index / images.length,
              (index + 0.5) / images.length,
              (index + 1) / images.length
            ],
            [1, 1, 0]
          );

          return (
            <motion.div
              key={src}
              style={{ translateY, opacity }}
              className="absolute inset-0 h-full w-full"
            >
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};