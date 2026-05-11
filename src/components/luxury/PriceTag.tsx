import { motion } from "framer-motion";

export function PriceTag({ original, offer }: { original: number; offer: number }) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-black/30 p-4">
      <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold">
        <span className="rounded-full border border-gold/35 px-2 py-1">Best Deal</span>
        <span className="rounded-full border border-gold/35 px-2 py-1">Today's Offer</span>
        <span className="rounded-full border border-gold/35 px-2 py-1">Limited Time Discount</span>
      </div>
      <div className="mt-3 flex items-end gap-3">
        <span className="text-sm text-muted-foreground line-through">₹{original}</span>
        <motion.span
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-3xl font-display text-gradient-gold"
        >
          ₹{offer}
        </motion.span>
        <span className="rounded-full bg-gold/15 px-2 py-1 text-xs font-semibold text-gold">
          40% OFF
        </span>
      </div>
    </div>
  );
}
