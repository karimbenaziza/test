"use client";

import Link from "next/link";
import {
  Flame,
  Target,
  CalendarClock,
  Dumbbell,
  Sparkles,
  TrendingUp,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const WEAK_SUBJECTS = [
  { subject: "Maths — Probabilités", level: 38, accent: "bg-brand-green" },
  { subject: "Physique — Ondes", level: 52, accent: "bg-brand-blue" },
  { subject: "Philo — Dissertation", level: 61, accent: "bg-brand-purple" },
];

const EXAMS = [
  { name: "Spé Maths — Écrit", date: "Dans 18 jours", tag: "Coef. 16" },
  { name: "Grand Oral", date: "Dans 32 jours", tag: "Coef. 10" },
  { name: "Philosophie", date: "Dans 41 jours", tag: "Coef. 8" },
];

const DRILLS = [
  { name: "Suites & limites", count: "12 exos", accent: "text-brand-green" },
  { name: "Produit scalaire", count: "8 exos", accent: "text-brand-blue" },
  { name: "Lois continues", count: "15 exos", accent: "text-brand-purple" },
];

const PREDICTIONS = [
  { topic: "Géométrie dans l'espace", prob: 92 },
  { topic: "Fonction exponentielle", prob: 87 },
  { topic: "Probabilités conditionnelles", prob: 81 },
];

export function DashboardPreview() {
  return (
    <section id="demo" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Tableau de bord élève"
          title="Toute votre progression, en un coup d'œil"
          description="Streak de révision, matières fragiles, examens à venir et prédictions de l'IA — réunis dans un espace clair et motivant."
        />

        <Reveal className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/dashboard">
              Ouvrir le tableau de bord
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </Reveal>

        <Reveal className="mt-14">
          <div className="rounded-card border border-border bg-card p-4 shadow-drop-lg sm:p-6">
            {/* Top bar */}
            <div className="flex flex-col gap-4 rounded-3xl bg-secondary/60 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Bonjour Emma 👋</p>
                  <p className="text-lg font-bold text-ink">
                    Terminale Générale · Spé Maths / Physique
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-drop-sm">
                <Flame className="h-5 w-5 text-brand-amber" />
                <span className="text-sm font-bold text-ink">Streak 24 jours</span>
              </div>
            </div>

            {/* Progress + grid */}
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {/* Progress card */}
              <div className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-6 shadow-drop-sm lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-brand-green" />
                    <span className="text-sm font-semibold text-ink">
                      Progression globale
                    </span>
                  </div>
                  <span className="text-sm font-bold text-brand-green">73%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "73%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-blue"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 pt-1">
                  {[
                    { label: "Objectif", value: "Mention TB" },
                    { label: "Moyenne", value: "15,4 / 20" },
                    { label: "Exos / sem.", value: "86" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl bg-secondary/70 p-4 text-center"
                    >
                      <p className="text-lg font-extrabold text-ink">{m.value}</p>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI predictions */}
              <div className="flex flex-col gap-4 rounded-3xl border-2 border-brand-purple/40 bg-white p-6 shadow-drop-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    Prédictions IA
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {PREDICTIONS.map((p) => (
                    <li key={p.topic}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-ink">{p.topic}</span>
                        <span className="font-bold text-brand-purple">
                          {p.prob}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.prob}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-brand-purple"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Lower grid */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Weak subjects */}
              <div className="rounded-3xl border border-border bg-white p-6 shadow-drop-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-brand-green" />
                  <span className="text-sm font-semibold text-ink">
                    Matières fragiles
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  {WEAK_SUBJECTS.map((s) => (
                    <li key={s.subject}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-ink">{s.subject}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full ${s.accent}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Upcoming exams */}
              <div className="rounded-3xl border border-border bg-white p-6 shadow-drop-sm">
                <div className="mb-4 flex items-center gap-2">
                  <CalendarClock className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm font-semibold text-ink">
                    Examens à venir
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {EXAMS.map((e) => (
                    <li
                      key={e.name}
                      className="flex items-center justify-between rounded-2xl bg-secondary/60 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-xs font-semibold text-ink">{e.name}</p>
                        <p className="text-[11px] text-muted-foreground">{e.date}</p>
                      </div>
                      <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-brand-blue shadow-drop-sm">
                        {e.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended drills */}
              <div className="rounded-3xl border border-border bg-white p-6 shadow-drop-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-brand-purple" />
                  <span className="text-sm font-semibold text-ink">
                    Exercices recommandés
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {DRILLS.map((d) => (
                    <li
                      key={d.name}
                      className="group flex items-center justify-between rounded-2xl border border-border px-3 py-2.5 transition-colors hover:bg-secondary/60"
                    >
                      <div>
                        <p className="text-xs font-semibold text-ink">{d.name}</p>
                        <p className={`text-[11px] font-medium ${d.accent}`}>
                          {d.count}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
