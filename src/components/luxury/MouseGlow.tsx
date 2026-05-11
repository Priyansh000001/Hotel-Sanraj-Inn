import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/** Soft mouse-follow gradient for cinematic feel — desktop only */
export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[1] hidden lg:block"
      style={{
        left: pos.x - 300,
        top: pos.y - 300,
        width: 600,
        height: 600,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--gold) 8%, transparent) 0%, transparent 60%)",
        filter: "blur(40px)",
      }}
    />
  );
}
