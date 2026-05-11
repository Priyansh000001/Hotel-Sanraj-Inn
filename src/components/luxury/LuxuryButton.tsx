import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LuxuryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function LuxuryButton({ children, className, ...props }: LuxuryButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground magnetic-btn disabled:cursor-not-allowed disabled:opacity-70",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
