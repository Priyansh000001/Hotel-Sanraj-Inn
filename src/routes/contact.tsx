import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/luxury/SectionHeading";
import { FAQS } from "@/lib/mock-data";

const PHONE = "7300070816";
const MAP_URL = "https://maps.app.goo.gl/CBqTy6AjuDySEGSy7?g_st=iw";
const WHATSAPP_URL = `https://wa.me/91${PHONE}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hotel Sanraj Inn" },
      {
        name: "description",
        content: "Visit Hotel Sanraj Inn, call us, or message us on WhatsApp for quick support.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-32 pt-40 lg:px-16">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s stay <span className="italic text-gradient-gold">connected</span>
          </>
        }
        subtitle="Visit us, call directly, or message on WhatsApp for fastest responses."
      />

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl border border-border/60 p-10"
        >
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-4xl md:text-5xl">Visit</h3>
              <p className="mt-4 text-lg text-muted-foreground md:text-2xl">
                Hotel Sanraj Inn, Jaipur, Rajasthan
              </p>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xl font-semibold text-gold transition hover:opacity-85 md:text-3xl"
              >
                Open in Google Maps <ExternalLink size={18} />
              </a>
            </div>

            <div>
              <h3 className="font-display text-4xl md:text-5xl">Phone</h3>
              <a href={`tel:+91${PHONE}`} className="mt-4 block text-3xl text-gold md:text-4xl">
                +91 {PHONE}
              </a>
            </div>

            <div>
              <h3 className="font-display text-4xl md:text-5xl">WhatsApp</h3>
              <p className="mt-4 text-lg text-muted-foreground md:text-2xl">
                Fastest for enquiries & custom requests.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#64d56b] px-8 py-4 text-lg font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110"
              >
                Message Us
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-border/60"
        >
          <iframe
            title="Hotel Sanraj Inn Location"
            src="https://www.google.com/maps?q=26.9124,75.7873&z=15&output=embed"
            className="h-full min-h-[620px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      <section className="mx-auto mt-28 max-w-3xl">
        <SectionHeading
          eyebrow="Helpful to know"
          title={
            <>
              Frequent <span className="italic text-gradient-gold">questions</span>
            </>
          }
        />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="glass rounded-xl border-0 px-6">
              <AccordionTrigger className="py-5 text-left font-display text-lg hover:text-gold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
