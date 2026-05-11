export function OfferBadge() {
  return (
    <div className="absolute left-4 top-4 flex items-center gap-2">
      <span className="rounded-full bg-red-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
        40% OFF
      </span>
      <span className="rounded-full border border-gold/35 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-gold">
        Luxury Suite
      </span>
    </div>
  );
}
