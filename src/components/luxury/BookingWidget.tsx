import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Minus, Plus, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function BookingWidget({ floating = false }: { floating?: boolean }) {
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex-1 min-w-[140px]">
      <label className="block text-[10px] tracking-luxe uppercase text-gold mb-1.5">{label}</label>
      {children}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: floating ? 60 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-strong rounded-2xl p-5 md:p-7 ${floating ? "shadow-luxe" : ""}`}
    >
      <div className="flex flex-wrap gap-5 items-end">
        <Field label="Arrival">
          <div className="flex items-center gap-2 text-foreground">
            <Calendar size={16} className="text-gold" />
            <input
              type="date"
              defaultValue={today}
              className="bg-transparent outline-none text-sm font-medium [color-scheme:dark]"
            />
          </div>
        </Field>
        <Field label="Departure">
          <div className="flex items-center gap-2 text-foreground">
            <Calendar size={16} className="text-gold" />
            <input
              type="date"
              defaultValue={tomorrow}
              className="bg-transparent outline-none text-sm font-medium [color-scheme:dark]"
            />
          </div>
        </Field>
        <Field label="Guests">
          <div className="flex items-center gap-3">
            <Users size={16} className="text-gold" />
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="size-6 rounded-full border border-border flex items-center justify-center hover:border-gold"
            >
              <Minus size={11} />
            </button>
            <span className="text-sm font-medium w-4 text-center tabular-nums">{guests}</span>
            <button
              onClick={() => setGuests(guests + 1)}
              className="size-6 rounded-full border border-border flex items-center justify-center hover:border-gold"
            >
              <Plus size={11} />
            </button>
          </div>
        </Field>
        <Field label="Suites">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setRooms(Math.max(1, rooms - 1))}
              className="size-6 rounded-full border border-border flex items-center justify-center hover:border-gold"
            >
              <Minus size={11} />
            </button>
            <span className="text-sm font-medium w-4 text-center tabular-nums">{rooms}</span>
            <button
              onClick={() => setRooms(rooms + 1)}
              className="size-6 rounded-full border border-border flex items-center justify-center hover:border-gold"
            >
              <Plus size={11} />
            </button>
          </div>
        </Field>
        <Link
          to="/booking"
          className="group inline-flex items-center justify-center gap-2 gradient-gold text-primary-foreground px-7 py-3.5 rounded-full text-xs tracking-[0.22em] uppercase font-medium magnetic-btn whitespace-nowrap"
        >
          Check Availability
          <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.div>
  );
}
