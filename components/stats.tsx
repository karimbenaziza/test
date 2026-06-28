import { Users, Library, TrendingUp } from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";
import { STATS } from "@/lib/data";

const ICONS = [Users, Library, TrendingUp];
const ACCENTS = ["text-brand-green", "text-brand-blue", "text-brand-purple"];

export function Stats() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STATS.map((stat, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={stat.label}
                delay={i}
                className="flex flex-col gap-4 rounded-card border border-border bg-card p-8 shadow-drop"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary ${ACCENTS[i]}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div className="display text-5xl text-ink sm:text-6xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="text-base font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
