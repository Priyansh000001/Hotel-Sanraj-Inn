import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 hidden md:block"
        >
          <div className="glass-strong relative flex max-w-xs items-center gap-3 rounded-2xl p-4 pr-10 shadow-luxe">
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
            <div className="flex size-10 items-center justify-center rounded-full gradient-gold text-primary-foreground">
              <Camera size={18} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-luxe text-gold">Visual Catalog</div>
              <div className="text-sm">Explore premium suite visuals</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
