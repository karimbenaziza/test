"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { TESTIMONIALS, ACCENT } from "@/lib/data";

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Testimonials() {
  return (
    <section id="avis" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Ils ont gagné des points"
          title="Des résultats concrets, filière par filière"
          description="Plus de 25 000 élèves révisent déjà avec Révisio AI, du Brevet aux études supérieures."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => {
            const a = ACCENT[t.accent];
            return (
              <motion.figure
                key={t.name}
                variants={card}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col rounded-card border border-border bg-card p-7 shadow-drop"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-amber text-brand-amber"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] font-medium leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${a.bg} ${a.text}`}>
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
