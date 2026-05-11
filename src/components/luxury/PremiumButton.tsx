import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PremiumButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full gradient-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground magnetic-btn",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
