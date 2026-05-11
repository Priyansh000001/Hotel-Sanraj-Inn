import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Testimonial } from "@/lib/mock-data";
import "swiper/css";

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3500 }}
      loop
      spaceBetween={24}
      slidesPerView={1}
    >
      {items.map((t) => (
        <SwiperSlide key={t.author}>
          <div className="mx-auto max-w-4xl rounded-3xl border border-gold/20 bg-black/30 p-8 text-center">
            <p className="font-display text-2xl italic leading-relaxed text-foreground/95 md:text-4xl">
              "{t.quote}"
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gold">{t.author}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
