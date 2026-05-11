import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-5 max-w-3xl ${a} ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 text-[11px] tracking-luxe uppercase text-gold ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="w-8 h-px bg-gold" /> {eyebrow} <span className="w-8 h-px bg-gold" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
