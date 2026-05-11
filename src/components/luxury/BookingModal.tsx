import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import type { Room } from "@/lib/mock-data";
import { LuxuryButton } from "@/components/luxury/LuxuryButton";

export function BookingModal({
  room,
  open,
  onClose,
}: {
  room: Room | null;
  open: boolean;
  onClose: () => void;
}) {
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10));
  const [checkOut, setCheckOut] = useState(
    new Date(Date.now() + 86400000).toISOString().slice(0, 10),
  );
  const [guests, setGuests] = useState(2);
  const [done, setDone] = useState(false);

  const nights = useMemo(() => {
    const d = Math.max(
      1,
      Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000),
    );
    return Number.isNaN(d) ? 1 : d;
  }, [checkIn, checkOut]);

  if (!room) return null;

  const subtotal = room.offerPrice * nights;
  const discount = (room.originalPrice - room.offerPrice) * nights;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="glass-strong w-full max-w-3xl rounded-3xl border border-gold/30 p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-3xl">Book {room.name}</h3>
              <button
                onClick={onClose}
                className="rounded-full border border-border p-2 hover:border-gold"
              >
                <X size={16} />
              </button>
            </div>

            {done ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <CheckCircle2 className="mx-auto text-gold" size={72} />
                </motion.div>
                <h4 className="mt-5 font-display text-4xl">Room Booked Successfully</h4>
                <p className="mt-2 text-muted-foreground">Enjoy Your Luxury Stay</p>
                <LuxuryButton
                  className="mt-7"
                  onClick={() => {
                    setDone(false);
                    onClose();
                  }}
                >
                  Done
                </LuxuryButton>
              </motion.div>
            ) : (
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-56 w-full rounded-2xl object-cover"
                  />
                  <p className="mt-3 text-sm text-muted-foreground">{room.description}</p>
                </div>
                <div className="space-y-3 rounded-2xl border border-border/50 bg-black/20 p-4 text-sm">
                  <label className="block">
                    Check-in
                    <input
                      className="mt-1 w-full rounded-xl border border-border bg-transparent p-2 [color-scheme:dark]"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </label>
                  <label className="block">
                    Check-out
                    <input
                      className="mt-1 w-full rounded-xl border border-border bg-transparent p-2 [color-scheme:dark]"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </label>
                  <label className="block">
                    Guests
                    <select
                      className="mt-1 w-full rounded-xl border border-border bg-background p-2"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4].map((g) => (
                        <option key={g} value={g}>
                          {g} Guest{g > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="mt-3 rounded-xl border border-gold/25 bg-gold/5 p-3">
                    <div className="flex justify-between">
                      <span>Price ({nights} night)</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-green-300">
                      <span>Discount Applied</span>
                      <span>-₹{discount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Fees</span>
                      <span>₹{taxes}</span>
                    </div>
                    <div className="mt-2 flex justify-between border-t border-border pt-2 text-base font-semibold">
                      <span>Final Total</span>
                      <span className="text-gradient-gold">₹{total}</span>
                    </div>
                  </div>

                  <LuxuryButton className="w-full" onClick={() => setDone(true)}>
                    Confirm Booking
                  </LuxuryButton>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
