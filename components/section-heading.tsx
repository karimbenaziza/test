import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="label-mono text-xs text-muted-foreground">{eyebrow}</span>
      <h2 className="display text-4xl sm:text-5xl text-ink max-w-2xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
