import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Catalog" },
  { to: "/about", label: "Heritage" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong py-3" : "bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Link to="/" className="group flex items-center gap-2">
            <span className="font-display text-2xl tracking-tight text-gradient-gold">
              Hotel Sanraj Inn
            </span>
            <span className="hidden pt-1 text-[10px] uppercase tracking-luxe text-muted-foreground sm:inline">
              Luxury Catalog
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/rooms"
              className="hidden rounded-full gradient-gold px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground sm:inline-flex"
            >
              Explore Rooms
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 text-foreground lg:hidden"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-strong fixed inset-0 z-40 px-8 pt-28 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={n.to} className="font-display text-4xl text-foreground hover:text-gold">
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
