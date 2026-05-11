import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Sparkles, UtensilsCrossed, Waves, HeartPulse, Dumbbell, ShieldCheck } from "lucide-react";
import { AnimatedGallery } from "@/components/luxury/AnimatedGallery";
import { AnimatedSection } from "@/components/luxury/AnimatedSection";
import { HeroSection } from "@/components/luxury/HeroSection";
import { LuxuryModal } from "@/components/luxury/LuxuryModal";
import { RoomCard } from "@/components/luxury/RoomCard";
import { SectionHeading } from "@/components/luxury/SectionHeading";
import { TestimonialSlider } from "@/components/luxury/TestimonialSlider";
import { FAQS, GALLERY, IMAGES, ROOMS, TESTIMONIALS, type Room } from "@/lib/mock-data";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Sanraj Inn | Luxury Hotel Catalog" },
      {
        name: "description",
        content:
          "Explore premium Hotel Sanraj Inn rooms, offers, interiors, and curated experiences.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState<Room | null>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.08 });
    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    gsap.utils.toArray<HTMLElement>(".lux-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        },
      );
    });

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleExplore = (room: Room) => {
    setActiveRoom(room);
    setOpen(true);
  };

  return (
    <div className="relative">
      <HeroSection
        heroRef={heroRef}
        yBg={yBg}
        image={IMAGES.hero}
        onExplore={() =>
          document.getElementById("room-catalog")?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <AnimatedSection className="lux-reveal mx-auto max-w-[1400px] px-6 py-24 lg:px-16">
        <div id="room-catalog" />
        <SectionHeading
          eyebrow="Room Catalog"
          title={
            <>
              Signature rooms in <span className="text-gradient-gold italic">matte luxury</span>
            </>
          }
          subtitle="Original price ₹2000. Offer price ₹1300. Explore every suite with cinematic detail previews."
        />
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room, idx) => (
            <RoomCard key={room.id} room={room} index={idx} onExplore={handleExplore} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="lux-reveal bg-ink/40 px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Hotel Experience"
            title={
              <>
                A world of <span className="text-gradient-gold italic">elevated living</span>
              </>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: UtensilsCrossed,
                title: "Fine Dining",
                desc: "Chef-curated culinary stories served in elegant settings",
              },
              {
                icon: HeartPulse,
                title: "Spa & Wellness",
                desc: "Calming rituals and therapeutic wellness experiences",
              },
              {
                icon: Waves,
                title: "Infinity Pool",
                desc: "Waterline luxury with skyline-like evening ambience",
              },
              {
                icon: Sparkles,
                title: "Luxury Interiors",
                desc: "Refined room palettes, textures, and mood lighting",
              },
              {
                icon: Dumbbell,
                title: "Rooftop Lounge",
                desc: "Contemporary social spaces with premium atmosphere",
              },
              {
                icon: ShieldCheck,
                title: "Premium Service",
                desc: "Thoughtful hospitality designed for comfort and confidence",
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-5">
                <item.icon size={18} className="text-gold" />
                <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="lux-reveal mx-auto max-w-[1400px] px-6 py-24 lg:px-16">
        <SectionHeading
          eyebrow="Hotel Gallery"
          title="Visual Catalog"
          subtitle="Masonry-inspired luxury gallery with smooth reveal interactions."
        />
        <div className="mt-12">
          <AnimatedGallery images={GALLERY as unknown as string[]} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="lux-reveal bg-ink/40 px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow="Testimonials" title="Customer stories" />
          <div className="mt-10">
            <TestimonialSlider items={TESTIMONIALS} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="lux-reveal mx-auto max-w-[1000px] px-6 py-24 lg:px-16">
        <SectionHeading eyebrow="FAQ" title="Catalog information" />
        <div className="mt-10 space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gold/20 bg-black/20 p-5"
            >
              <summary className="cursor-pointer list-none font-medium">{item.q}</summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>

      <LuxuryModal room={activeRoom} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
