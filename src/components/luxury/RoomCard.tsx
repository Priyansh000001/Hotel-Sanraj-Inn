import { motion } from "framer-motion";
import { BedDouble, Sparkles, Tv, Wifi } from "lucide-react";
import type { Room } from "@/lib/mock-data";
import { OfferBadge } from "@/components/luxury/OfferBadge";
import { PremiumButton } from "@/components/luxury/PremiumButton";

const ICONS = [Wifi, Tv, BedDouble, Sparkles];

export function RoomCard({
  room,
  index = 0,
  onExplore,
}: {
  room: Room;
  index?: number;
  onExplore: (room: Room) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-gold/20 bg-card/90 shadow-glass"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <OfferBadge />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-gold">{room.tagline}</p>
          <h3 className="font-display text-3xl">{room.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{room.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          {room.amenities.slice(0, 4).map((item, idx) => {
            const Icon = ICONS[idx] ?? Sparkles;
            return (
              <div key={item} className="flex items-center gap-2">
                <Icon size={14} className="text-gold" /> {item}
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-gold/30 bg-black/30 p-4">
          <div className="flex items-end gap-3">
            <span className="text-sm text-muted-foreground line-through">
              ₹{room.originalPrice}
            </span>
            <span className="text-3xl font-display text-gradient-gold">₹{room.offerPrice}</span>
          </div>
        </div>

        <PremiumButton className="w-full" onClick={() => onExplore(room)}>
          View Details
        </PremiumButton>
      </div>
    </motion.article>
  );
}
