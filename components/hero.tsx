"use client";

import { ArrowRight, Play, Atom } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import { STATS } from "@/lib/data";

const COURSE_CHIPS = [
  { label: "Bac", accent: "bg-ink" },
  { label: "Brevet", accent: "bg-ink/80" },
  { label: "PASS", accent: "bg-ink/70" },
  { label: "Prépa", accent: "bg-ink/60" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dotgrid pb-16 pt-32 sm:pt-40">
      {/* Soft accent glows */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container relative flex flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-drop-sm">
            <Atom className="h-4 w-4 text-brand-green" />
            <span className="label-mono text-[11px] text-muted-foreground sm:text-xs">
              IA Éducative • Conçue pour le système français
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="display mt-8 max-w-4xl text-balance text-5xl text-ink sm:text-7xl lg:text-8xl"
        >
          <span className="text-brand-green">RÉVISE</span> CE QUI COMPTE VRAIMENT
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Notre intelligence artificielle analyse les annales, détecte vos
          erreurs et vous aide à réviser uniquement ce qui a le plus d'impact
          sur vos résultats.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#filieres">
              <ArrowRight className="h-5 w-5" />
              Choisir ma filière
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#demo">
              <Play className="h-4 w-4 fill-current" />
              Voir la démonstration
            </a>
          </Button>
        </motion.div>

        {/* Course chips */}
        <motion.div variants={item} className="mt-12 flex items-center -space-x-3">
          {COURSE_CHIPS.map((chip) => (
            <span
              key={chip.label}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-canvas text-[11px] font-bold text-white ${chip.accent}`}
            >
              {chip.label.slice(0, 2)}
            </span>
          ))}
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-canvas bg-brand-green text-lg font-bold text-white">
            +
          </span>
        </motion.div>

        {/* Inline stat row */}
        <motion.div
          variants={item}
          className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-extrabold tracking-[-0.02em] text-ink sm:text-3xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>
              <span className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
