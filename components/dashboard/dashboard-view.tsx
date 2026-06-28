"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Flame,
  TrendingUp,
  Target,
  CalendarClock,
  Dumbbell,
  ChevronRight,
  Menu,
  X,
  Bell,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { ACCENT } from "@/lib/data";
import {
  SIDEBAR_NAV,
  KPIS,
  SUBJECT_MASTERY,
  WEAK_SUBJECTS,
  UPCOMING_EXAMS,
  RECOMMENDED_DRILLS,
  PREDICTIONS,
  ACTIVITY,
} from "@/lib/dashboard-data";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 },
  }),
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-ink text-white">
        <Sparkles className="h-5 w-5" />
      </span>
      <span className="text-lg font-bold tracking-[-0.02em] text-ink">
        Révisio<span className="text-brand-green"> AI</span>
      </span>
    </Link>
  );
}

function Sidebar() {
  return (
    <nav className="flex flex-1 flex-col gap-1">
      {SIDEBAR_NAV.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
              item.active
                ? "bg-ink text-white shadow-drop-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-ink"
            )}
          >
            <Icon className="h-5 w-5 shrink-0" />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

export function DashboardView() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto flex max-w-[1400px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col gap-8 border-r border-border bg-white/60 p-6 lg:flex">
          <Logo />
          <Sidebar />
          <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-green/10 to-brand-purple/10 p-5">
            <p className="text-sm font-bold text-ink">Passez Premium</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Débloquez les prédictions IA sur toutes vos filières.
            </p>
            <Link
              href="/#tarifs"
              className="mt-3 inline-flex rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white"
            >
              Découvrir
            </Link>
          </div>
        </aside>

        {/* Mobile slide-over */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <motion.aside
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="flex h-full w-72 flex-col gap-8 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <Logo />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <Sidebar />
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main */}
        <main className="min-w-0 flex-1">
          {/* Top bar */}
          <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-border bg-canvas/80 px-5 py-4 backdrop-blur-xl sm:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-drop-sm lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <p className="text-sm text-muted-foreground">Bonjour Emma 👋</p>
                <h1 className="text-lg font-bold tracking-[-0.01em] text-ink sm:text-xl">
                  Tableau de bord
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="hidden items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink shadow-drop-sm transition-transform hover:-translate-y-0.5 sm:flex"
              >
                <ArrowLeft className="h-4 w-4" />
                Accueil
              </Link>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-drop-sm">
                <Bell className="h-5 w-5 text-ink" />
              </button>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/15 text-sm font-bold text-brand-green">
                EM
              </span>
            </div>
          </header>

          <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
            {/* Greeting banner */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4 rounded-card border border-border bg-ink p-6 text-white shadow-drop sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <p className="label-mono text-xs text-white/50">
                  Terminale Générale · Spé Maths / Physique
                </p>
                <p className="mt-2 max-w-md text-xl font-bold leading-snug sm:text-2xl">
                  Tu es à{" "}
                  <span className="text-brand-green">73%</span> de ton objectif
                  Mention Très Bien.
                </p>
              </div>
              <div className="flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-2.5">
                <Flame className="h-5 w-5 text-brand-amber" />
                <span className="text-sm font-bold">Streak 24 jours</span>
              </div>
            </motion.div>

            {/* KPI tiles */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {KPIS.map((kpi, i) => {
                const a = ACCENT[kpi.accent];
                return (
                  <motion.div
                    key={kpi.label}
                    variants={fade}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    className="rounded-3xl border border-border bg-card p-5 shadow-drop-sm"
                  >
                    <p className="text-xs text-muted-foreground">{kpi.label}</p>
                    <p className="mt-2 text-3xl font-extrabold tracking-[-0.02em] text-ink">
                      {kpi.value}
                    </p>
                    <p className={cn("mt-1 text-xs font-semibold", a.text)}>
                      {kpi.delta}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {/* Subject mastery */}
              <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                className="rounded-card border border-border bg-card p-6 shadow-drop sm:p-7 lg:col-span-2"
              >
                <div className="mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-brand-green" />
                  <h2 className="text-base font-bold text-ink">
                    Maîtrise par matière
                  </h2>
                </div>
                <ul className="flex flex-col gap-5">
                  {SUBJECT_MASTERY.map((s) => {
                    const a = ACCENT[s.accent];
                    return (
                      <li key={s.subject}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-ink">{s.subject}</span>
                          <span className="text-muted-foreground">{s.level}%</span>
                        </div>
                        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${s.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={cn("h-full rounded-full", a.dot)}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* Activity heatmap */}
                <div className="mt-8 border-t border-border pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-ink">
                      Activité de révision
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      7 dernières semaines
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ACTIVITY.map((v, i) => (
                      <span
                        key={i}
                        title={`Niveau ${v}`}
                        className={cn(
                          "h-5 w-5 rounded-md",
                          v === 0 && "bg-secondary",
                          v === 1 && "bg-brand-green/25",
                          v === 2 && "bg-brand-green/45",
                          v === 3 && "bg-brand-green/70",
                          v === 4 && "bg-brand-green"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* AI predictions */}
              <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                className="rounded-card border-2 border-brand-purple/40 bg-card p-6 shadow-drop sm:p-7"
              >
                <div className="mb-6 flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <h2 className="text-base font-bold text-ink">Prédictions IA</h2>
                </div>
                <p className="mb-5 text-xs leading-relaxed text-muted-foreground">
                  Sujets les plus probables au prochain écrit, d'après les annales
                  et les tendances.
                </p>
                <ul className="flex flex-col gap-4">
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
                          animate={{ width: `${p.prob}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-brand-purple"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>

            {/* Lower grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {/* Weak subjects */}
              <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                className="rounded-card border border-border bg-card p-6 shadow-drop"
              >
                <div className="mb-5 flex items-center gap-2">
                  <Target className="h-5 w-5 text-brand-green" />
                  <h2 className="text-sm font-bold text-ink">Matières fragiles</h2>
                </div>
                <ul className="flex flex-col gap-4">
                  {WEAK_SUBJECTS.map((s) => {
                    const a = ACCENT[s.accent];
                    return (
                      <li key={s.subject}>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-ink">{s.subject}</span>
                          <span className="text-muted-foreground">{s.level}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${s.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={cn("h-full rounded-full", a.dot)}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.section>

              {/* Upcoming exams */}
              <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                className="rounded-card border border-border bg-card p-6 shadow-drop"
              >
                <div className="mb-5 flex items-center gap-2">
                  <CalendarClock className="h-5 w-5 text-brand-blue" />
                  <h2 className="text-sm font-bold text-ink">Examens à venir</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {UPCOMING_EXAMS.map((e) => (
                    <li
                      key={e.name}
                      className="flex items-center justify-between rounded-2xl bg-secondary/60 px-3.5 py-3"
                    >
                      <div>
                        <p className="text-xs font-semibold text-ink">{e.name}</p>
                        <p className="text-[11px] text-muted-foreground">{e.date}</p>
                      </div>
                      <span
                        className={cn(
                          "rounded-full bg-white px-2.5 py-1 text-[10px] font-bold shadow-drop-sm",
                          ACCENT[e.accent].text
                        )}
                      >
                        {e.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Recommended drills */}
              <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                className="rounded-card border border-border bg-card p-6 shadow-drop"
              >
                <div className="mb-5 flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-brand-purple" />
                  <h2 className="text-sm font-bold text-ink">
                    Exercices recommandés
                  </h2>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {RECOMMENDED_DRILLS.map((d) => (
                    <li
                      key={d.name}
                      className="group flex items-center justify-between rounded-2xl border border-border px-3.5 py-3 transition-colors hover:bg-secondary/60"
                    >
                      <div>
                        <p className="text-xs font-semibold text-ink">{d.name}</p>
                        <p className={cn("text-[11px] font-medium", ACCENT[d.accent].text)}>
                          {d.count} · {d.minutes}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
