import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import type { Room } from "@/lib/mock-data";
import { RoomGallery } from "@/components/luxury/RoomGallery";

export function LuxuryModal({
  room,
  open,
  onClose,
}: {
  room: Room | null;
  open: boolean;
  onClose: () => void;
}) {
  const gallery = room ? [room.image, room.image, room.image] : [];

  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && room && (
        <motion.div
          className="fixed inset-0 z-[120] bg-black/75 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto mt-10 w-full max-w-5xl rounded-3xl border border-gold/25 bg-card p-4 md:p-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${room.name} details`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-3xl md:text-4xl">{room.name}</h3>
              <button
                onClick={onClose}
                className="rounded-full border border-border p-2 hover:border-gold"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            <RoomGallery images={gallery} />
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <p className="text-sm uppercase tracking-[0.2em] text-gold">{room.tagline}</p>
                <p className="mt-3 text-muted-foreground">{room.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {room.amenities.map((a) => (
                    <div key={a} className="rounded-xl border border-border/50 px-3 py-2">
                      {a}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-black/25 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-gold">Today's Offer</div>
                <div className="mt-2 text-sm line-through text-muted-foreground">
                  ₹{room.originalPrice}
                </div>
                <div className="font-display text-4xl text-gradient-gold">₹{room.offerPrice}</div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs text-gold">
                  <Sparkles size={13} /> 40% OFF
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
