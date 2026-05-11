import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Bed, Check, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { ROOMS } from "@/lib/mock-data";
import { SectionHeading } from "@/components/luxury/SectionHeading";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Reserve — Hotel Sanraj Inn" },
      {
        name: "description",
        content:
          "Reserve your Hotel Sanraj Inn suite, villa or residence in three considered steps.",
      },
    ],
  }),
  component: BookingPage,
});

const STEPS = ["Dates", "Suite", "Guest", "Confirm"] as const;

function BookingPage() {
  const [step, setStep] = useState(0);
  const today = new Date().toISOString().slice(0, 10);
  const [arrival, setArrival] = useState(today);
  const [departure, setDeparture] = useState(
    new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10),
  );
  const [guests, setGuests] = useState(2);
  const [roomId, setRoomId] = useState(ROOMS[0].id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState("");
  const [done, setDone] = useState(false);

  const room = ROOMS.find((r) => r.id === roomId)!;
  const nights = useMemo(
    () =>
      Math.max(
        1,
        Math.round((new Date(departure).getTime() - new Date(arrival).getTime()) / 86400000),
      ),
    [arrival, departure],
  );
  const subtotal = room.price * nights;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  if (done) {
    return (
      <div className="min-h-screen pt-40 pb-32 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl text-center glass-strong rounded-2xl p-12"
        >
          <div className="size-20 rounded-full gradient-gold mx-auto flex items-center justify-center text-primary-foreground mb-6">
            <Sparkles size={32} />
          </div>
          <h2 className="font-display text-5xl">
            Reservation <span className="italic text-gradient-gold">received</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A confirmation has been dispatched to <span className="text-gold">{email}</span>. Your
            butler will reach out within the hour to compose your stay.
          </p>
          <div className="mt-8 hairline pt-6 text-sm text-muted-foreground">
            Confirmation N°{" "}
            <span className="text-gold tracking-luxe">AUR-{Date.now().toString().slice(-6)}</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
      <SectionHeading
        eyebrow="Reservation"
        title={
          <>
            Compose your <span className="italic text-gradient-gold">stay</span>
          </>
        }
      />

      {/* Stepper */}
      <div className="mt-16 flex items-center justify-center gap-2 md:gap-6">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2 md:gap-6">
            <div
              className={`flex flex-col items-center gap-2 transition ${i === step ? "" : i < step ? "opacity-70" : "opacity-30"}`}
            >
              <div
                className={`size-9 rounded-full flex items-center justify-center text-xs font-medium transition ${i <= step ? "gradient-gold text-primary-foreground" : "border border-border"}`}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <div className="text-[10px] tracking-luxe uppercase">{s}</div>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`w-8 md:w-20 h-px ${i < step ? "bg-gold" : "bg-border"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-8">
        {/* Step Content */}
        <div className="lg:col-span-2 glass-strong rounded-2xl p-8 md:p-10 min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {step === 0 && (
                <div className="space-y-7">
                  <h3 className="font-display text-3xl">When shall we expect you?</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-luxe uppercase text-gold mb-2">
                        Arrival
                      </label>
                      <div className="flex items-center gap-3 border-b border-border focus-within:border-gold pb-3">
                        <Calendar size={18} className="text-gold" />
                        <input
                          type="date"
                          value={arrival}
                          onChange={(e) => setArrival(e.target.value)}
                          className="bg-transparent outline-none text-foreground flex-1 [color-scheme:dark]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-luxe uppercase text-gold mb-2">
                        Departure
                      </label>
                      <div className="flex items-center gap-3 border-b border-border focus-within:border-gold pb-3">
                        <Calendar size={18} className="text-gold" />
                        <input
                          type="date"
                          value={departure}
                          onChange={(e) => setDeparture(e.target.value)}
                          className="bg-transparent outline-none text-foreground flex-1 [color-scheme:dark]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-luxe uppercase text-gold mb-2">
                      Guests
                    </label>
                    <div className="flex items-center gap-3 border-b border-border pb-3">
                      <Users size={18} className="text-gold" />
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={guests}
                        onChange={(e) => setGuests(+e.target.value)}
                        className="bg-transparent outline-none w-20"
                      />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {nights} {nights === 1 ? "night" : "nights"} · {guests}{" "}
                    {guests === 1 ? "guest" : "guests"}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="font-display text-3xl">Choose your sanctuary</h3>
                  <div className="space-y-4">
                    {ROOMS.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => setRoomId(r.id)}
                        className={`w-full text-left flex gap-5 p-3 rounded-xl border transition ${roomId === r.id ? "border-gold bg-gold/5" : "border-border hover:border-gold/40"}`}
                      >
                        <img
                          src={r.image}
                          alt={r.name}
                          className="size-24 md:size-28 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="text-[10px] tracking-luxe uppercase text-gold">
                            {r.tagline}
                          </div>
                          <div className="font-display text-2xl mt-1">{r.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {r.size} · {r.beds} · {r.view}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-2xl text-gradient-gold">
                            ${r.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">/ night</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-7">
                  <h3 className="font-display text-3xl">A few details</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-luxe uppercase text-gold mb-2">
                        Full name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-luxe uppercase text-gold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-luxe uppercase text-gold mb-2">
                      Special requests
                    </label>
                    <textarea
                      rows={4}
                      value={requests}
                      onChange={(e) => setRequests(e.target.value)}
                      placeholder="Champagne on arrival, dietary preferences, anniversary celebration…"
                      className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 resize-none placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-display text-3xl">Confirm your reservation</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      ["Suite", room.name],
                      [
                        "Arrival",
                        new Date(arrival).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        }),
                      ],
                      [
                        "Departure",
                        new Date(departure).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        }),
                      ],
                      ["Nights", String(nights)],
                      ["Guests", String(guests)],
                      ["Name", name || "—"],
                      ["Email", email || "—"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-border/50 py-2">
                        <span className="text-muted-foreground">{k}</span>
                        <span className="font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  {requests && (
                    <div className="text-sm">
                      <div className="text-muted-foreground mb-1">Notes</div>
                      <div className="italic">{requests}</div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-10 pt-6 border-t border-border">
            <button
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-luxe uppercase border border-border rounded-full disabled:opacity-30 hover:border-gold hover:text-gold transition"
            >
              <ArrowLeft size={14} /> Back
            </button>
            {step < STEPS.length - 1 ? (
              <button
                onClick={next}
                className="inline-flex items-center gap-2 px-7 py-2.5 text-xs tracking-luxe uppercase gradient-gold text-primary-foreground rounded-full magnetic-btn"
              >
                Continue <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={() => setDone(true)}
                className="inline-flex items-center gap-2 px-7 py-2.5 text-xs tracking-luxe uppercase gradient-gold text-primary-foreground rounded-full magnetic-btn"
              >
                Confirm Reservation <Check size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Summary */}
        <aside className="glass rounded-2xl p-7 h-fit lg:sticky lg:top-28 space-y-5">
          <div className="reveal-img aspect-[16/10] rounded-xl overflow-hidden">
            <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-gold">{room.tagline}</div>
            <div className="font-display text-2xl mt-1">{room.name}</div>
          </div>
          <div className="space-y-2 text-sm border-t border-border pt-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground flex items-center gap-2">
                <Bed size={13} className="text-gold" />
                {room.beds}
              </span>
              <span>{room.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Nights</span>
              <span>{nights}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxes & service</span>
              <span>${taxes.toLocaleString()}</span>
            </div>
          </div>
          <div className="border-t border-border pt-4 flex justify-between items-end">
            <span className="text-xs tracking-luxe uppercase text-muted-foreground">Total</span>
            <span className="font-display text-3xl text-gradient-gold">
              ${total.toLocaleString()}
            </span>
          </div>
          <div className="text-xs text-muted-foreground italic">
            Complimentary cancellation up to 7 days prior to arrival.
          </div>
        </aside>
      </div>
    </div>
  );
}
