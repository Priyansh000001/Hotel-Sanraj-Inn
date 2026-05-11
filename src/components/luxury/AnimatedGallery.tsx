import { motion } from "framer-motion";

export function AnimatedGallery({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className={`overflow-hidden rounded-2xl ${i % 5 === 0 ? "md:col-span-2" : ""}`}
        >
          <img
            src={src}
            loading="lazy"
            alt={`Hotel Sanraj Inn Gallery ${i + 1}`}
            className="h-64 w-full object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
}
