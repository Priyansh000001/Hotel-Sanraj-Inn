import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function RoomGallery({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={10}
      slidesPerView={1}
      className="rounded-2xl"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={`${src}-${idx}`}>
          <img
            src={src}
            alt={`Room view ${idx + 1}`}
            className="h-[420px] w-full rounded-2xl object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
