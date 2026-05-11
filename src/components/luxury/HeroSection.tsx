import { motion } from "framer-motion";
import type { RefObject } from "react";
import type { MotionValue } from "framer-motion";
import { PremiumButton } from "@/components/luxury/PremiumButton";

export function HeroSection({
  heroRef,
  yBg,
  image,
  onExplore,
}: {
  heroRef: RefObject<HTMLDivElement | null>;
  yBg: MotionValue<string>;
  image: string;
  onExplore: () => void;
}) {
  return (
    <section ref={heroRef} className="relative h-[100svh] min-h-[720px] overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <img
          src={image}
          alt="Hotel Sanraj Inn luxury room"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 cinematic-vignette" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-background" />
      </motion.div>
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.24em] text-gold"
        >
          Hotel Sanraj Inn Luxury Catalog
        </motion.p>
        <motion.h1
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-4 max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl"
        >
          Curated Rooms. <span className="text-gradient-gold italic">Cinematic Luxury.</span>
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-10 max-w-max rounded-2xl border border-gold/20 bg-black/30 p-4 backdrop-blur-lg"
        >
          <PremiumButton onClick={onExplore}>Explore Luxury Rooms</PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}
