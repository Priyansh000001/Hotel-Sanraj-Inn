import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { IMAGES, TIMELINE, STATS } from "@/lib/mock-data";
import { SectionHeading } from "@/components/luxury/SectionHeading";
import { AnimatedCounter } from "@/components/luxury/AnimatedCounter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Heritage — Hotel Sanraj Inn" },
      {
        name: "description",
        content:
          "Our story, philosophy and the quiet pursuit of timeless luxury hospitality since 1996.",
      },
    ],
  }),
  component: AboutPage,
});

const AWARDS = [
  "Forbes Travel — Five Stars (2018–2025)",
  "Condé Nast Gold List — Best Resort 2024",
  "World's 50 Best Hotels — №7",
  "Michelin Three Keys",
  "Travel + Leisure World's Best — Top 10",
  "Robb Report Best of the Best 2023",
];

function AboutPage() {
  return (
    <div className="pt-40 pb-32">
      {/* Hero statement */}
      <section className="px-6 lg:px-16 max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Since 1996"
          title={
            <>
              A quiet pursuit of <span className="italic text-gradient-gold">timelessness</span>
            </>
          }
          subtitle="Hotel Sanraj Inn was born from a single belief: that true luxury cannot be designed — only revealed, slowly, by the hands of those who care."
        />
      </section>

      {/* Founder split */}
      <section className="mt-32 px-6 lg:px-16 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="reveal-img aspect-[4/5] rounded-2xl overflow-hidden"
        >
          <img
            src={IMAGES.butler}
            alt="Founder"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-[11px] tracking-luxe uppercase text-gold">
            — A letter from the founder
          </p>
          <h3 className="font-display text-4xl md:text-5xl leading-tight">
            "We are <span className="italic text-gradient-gold">curators</span> of moments — not
            buildings."
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            When we acquired our first estate in 1996, the world was already loud. We did not wish
            to compete with that noise. We wished to offer its opposite: a place where every detail
            was considered, every surface honest, every silence earned.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Three decades later, our promise is unchanged. May you find here what we set out to
            build — stillness, beauty, and time.
          </p>
          <div className="pt-4 font-display text-2xl text-gradient-gold italic">
            — Adrien Laurent
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="mt-40 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Heritage"
          title={
            <>
              Three decades, <span className="italic text-gradient-gold">one philosophy</span>
            </>
          }
        />
        <div className="mt-20 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-20 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div
                className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}
              >
                <div className="font-display text-6xl text-gradient-gold mb-3">{t.year}</div>
                <h4 className="font-display text-2xl mb-2">{t.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 size-3 rounded-full gradient-gold ring-4 ring-background" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Counters */}
      <section className="mt-32 py-24 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial-gold opacity-40" />
        <div className="relative max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="space-y-3">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <div className="text-xs tracking-luxe uppercase text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="mt-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Recognition"
          title={
            <>
              Honored, <span className="italic text-gradient-gold">quietly</span>
            </>
          }
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AWARDS.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="glass rounded-xl p-6 flex items-start gap-4"
            >
              <Award className="text-gold shrink-0 mt-1" size={22} />
              <div className="text-sm leading-relaxed">{a}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
