import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bed, Users, Maximize, Eye, Check } from "lucide-react";
import { ROOMS, type Room } from "@/lib/mock-data";
import { SectionHeading } from "@/components/luxury/SectionHeading";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Suites & Villas — Hotel Sanraj Inn" },
      {
        name: "description",
        content:
          "Explore the Hotel Sanraj Inn portfolio of cinematic suites, private villas and signature residences.",
      },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  const [selected, setSelected] = useState<Room | null>(null);
  return (
    <div className="pt-40 pb-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
      <SectionHeading
        eyebrow="The Collection"
        title={
          <>
            One hundred and forty-two{" "}
            <span className="italic text-gradient-gold">private worlds</span>
          </>
        }
        subtitle="Each suite is composed by hand — bespoke linens, crafted joinery, and views worth crossing oceans for."
      />

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-24 mt-24">
        {ROOMS.map((r, i) => (
          <motion.article
            key={r.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={i % 2 === 1 ? "md:mt-32" : ""}
          >
            <div
              className="reveal-img aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative cursor-pointer"
              onClick={() => setSelected(r)}
            >
              <img
                src={r.image}
                alt={r.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 cinematic-vignette opacity-60" />
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full glass text-[10px] tracking-luxe uppercase">
                {r.view}
              </div>
            </div>
            <p className="text-[11px] tracking-luxe uppercase text-gold mb-2">{r.tagline}</p>
            <h3 className="font-display text-4xl mb-4">{r.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">{r.description}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Maximize size={14} className="text-gold" />
                {r.size}
              </span>
              <span className="flex items-center gap-2">
                <Users size={14} className="text-gold" />
                {r.guests} guests
              </span>
              <span className="flex items-center gap-2">
                <Bed size={14} className="text-gold" />
                {r.beds}
              </span>
              <span className="flex items-center gap-2">
                <Eye size={14} className="text-gold" />
                {r.view}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-5">
              <div>
                <div className="text-xs text-muted-foreground">From</div>
                <div className="font-display text-3xl text-gradient-gold">
                  ${r.price.toLocaleString()}
                  <span className="text-sm text-muted-foreground"> /night</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelected(r)}
                  className="px-5 py-2.5 text-xs tracking-luxe uppercase border border-border hover:border-gold hover:text-gold rounded-full transition"
                >
                  View
                </button>
                <button
                  onClick={() => setSelected(r)}
                  className="px-5 py-2.5 text-xs tracking-luxe uppercase gradient-gold text-primary-foreground rounded-full magnetic-btn"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-10 size-10 rounded-full glass-strong flex items-center justify-center hover:text-gold"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 cinematic-vignette" />
              </div>
              <div className="p-8 md:p-12 grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <p className="text-[11px] tracking-luxe uppercase text-gold">
                      {selected.tagline}
                    </p>
                    <h3 className="font-display text-5xl mt-2">{selected.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selected.description}
                  </p>
                  <div>
                    <h4 className="text-xs tracking-luxe uppercase text-gold mb-4">
                      Suite Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                      {selected.amenities.map((a) => (
                        <div key={a} className="flex items-center gap-3 text-sm">
                          <Check size={14} className="text-gold" /> {a}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-5 glass rounded-xl p-6 h-fit">
                  <div>
                    <div className="text-xs text-muted-foreground">From</div>
                    <div className="font-display text-4xl text-gradient-gold">
                      ${selected.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">per night, taxes included</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size</span>
                      <span>{selected.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Guests</span>
                      <span>{selected.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Beds</span>
                      <span>{selected.beds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">View</span>
                      <span>{selected.view}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="block text-center w-full px-6 py-3 gradient-gold text-primary-foreground rounded-full text-xs tracking-luxe uppercase magnetic-btn"
                  >
                    Back to Catalog
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
