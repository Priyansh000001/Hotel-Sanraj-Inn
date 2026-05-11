import { useState } from "react";
import { LuxuryButton } from "@/components/luxury/LuxuryButton";

export function FloatingBookingBar({ onExplore }: { onExplore: () => void }) {
  const [checkIn] = useState(new Date().toISOString().slice(0, 10));
  const [checkOut] = useState(new Date(Date.now() + 86400000).toISOString().slice(0, 10));

  return (
    <div className="glass-strong rounded-2xl border border-gold/25 p-4 md:p-5 shadow-luxe">
      <div className="grid gap-3 md:grid-cols-4 md:items-end">
        <label className="text-xs uppercase tracking-[0.2em] text-gold">
          Check in
          <input
            type="date"
            defaultValue={checkIn}
            className="mt-1 w-full rounded-xl border border-border bg-transparent p-2 [color-scheme:dark]"
          />
        </label>
        <label className="text-xs uppercase tracking-[0.2em] text-gold">
          Check out
          <input
            type="date"
            defaultValue={checkOut}
            className="mt-1 w-full rounded-xl border border-border bg-transparent p-2 [color-scheme:dark]"
          />
        </label>
        <label className="text-xs uppercase tracking-[0.2em] text-gold">
          Guests
          <select className="mt-1 w-full rounded-xl border border-border bg-background p-2">
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </label>
        <LuxuryButton onClick={onExplore} className="h-[42px]">
          Book Your Luxury Stay
        </LuxuryButton>
      </div>
    </div>
  );
}
