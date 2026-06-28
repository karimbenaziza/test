"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { FEATURES, ACCENT } from "@/lib/data";

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Features() {
  return (
    <section id="fonctionnalites" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Fonctionnalités"
          title="Une IA qui révise à votre place les bonnes choses"
          description="Trois moteurs travaillent ensemble pour transformer vos erreurs en points gagnés le jour J."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => {
            const a = ACCENT[feature.accent];
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.id}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex flex-col rounded-card border-2 bg-card p-8 shadow-drop ${a.border}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.bg} ${a.text}`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 shadow-drop-sm">
                    <span className={`h-2 w-2 rounded-full ${a.dot} animate-pulse-dot`} />
                    <span className="label-mono text-[10px] text-ink">
                      {feature.status}
                    </span>
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-bold tracking-[-0.02em] text-ink">
                  {feature.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                <div className="mt-8 border-t border-border pt-5">
                  <a
                    href="#tarifs"
                    className={`group inline-flex items-center gap-2 text-sm font-semibold ${a.text}`}
                  >
                    Découvrir
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
