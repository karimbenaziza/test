"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { PLANS, ACCENT } from "@/lib/data";
import { cn } from "@/lib/utils";

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Pricing() {
  return (
    <section id="tarifs" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Tarifs"
          title="Un abonnement, des points en plus"
          description="Sans engagement. Annulable à tout moment. Essai gratuit sans carte bancaire."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
        >
          {PLANS.map((plan) => {
            const a = ACCENT[plan.accent];
            return (
              <motion.div
                key={plan.name}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "relative flex flex-col rounded-card border bg-card p-8 shadow-drop",
                  plan.featured
                    ? "border-2 border-brand-green shadow-drop-lg lg:-mt-4 lg:mb-4"
                    : "border-border"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-green px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow-green">
                    Le plus choisi
                  </span>
                )}

                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="display text-5xl text-ink">{plan.price}</span>
                  <span className="mb-1 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink">
                      <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", a.bg)}>
                        <Check className={cn("h-3.5 w-3.5", a.text)} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? "green" : "outline"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
