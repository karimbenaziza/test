import {
  LayoutDashboard,
  Target,
  Repeat,
  Sigma,
  CalendarClock,
  BookOpen,
  Settings,
  type LucideIcon,
} from "lucide-react";

import type { Accent } from "@/lib/data";

export interface NavItem {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export const SIDEBAR_NAV: NavItem[] = [
  { label: "Tableau de bord", icon: LayoutDashboard, active: true },
  { label: "Moteur d'erreurs", icon: Target },
  { label: "Répétition espacée", icon: Repeat },
  { label: "Prédictions IA", icon: Sigma },
  { label: "Annales", icon: BookOpen },
  { label: "Planning", icon: CalendarClock },
  { label: "Réglages", icon: Settings },
];

export interface KpiTile {
  label: string;
  value: string;
  delta: string;
  accent: Accent;
}

export const KPIS: KpiTile[] = [
  { label: "Moyenne générale", value: "15,4", delta: "+2,1 ce mois", accent: "green" },
  { label: "Streak de révision", value: "24 j", delta: "Record perso", accent: "amber" as Accent },
  { label: "Exercices / semaine", value: "86", delta: "+12 vs. sem.", accent: "blue" },
  { label: "Prêt pour l'examen", value: "73%", delta: "+8 pts", accent: "purple" },
];

export interface SubjectMastery {
  subject: string;
  level: number;
  accent: Accent;
}

export const SUBJECT_MASTERY: SubjectMastery[] = [
  { subject: "Spé Maths", level: 78, accent: "green" },
  { subject: "Spé Physique-Chimie", level: 64, accent: "blue" },
  { subject: "Philosophie", level: 52, accent: "purple" },
  { subject: "Histoire-Géographie", level: 71, accent: "green" },
  { subject: "Anglais (LVA)", level: 83, accent: "blue" },
];

export const WEAK_SUBJECTS = [
  { subject: "Maths — Probabilités conditionnelles", level: 38, accent: "green" as Accent },
  { subject: "Physique — Ondes et signaux", level: 52, accent: "blue" as Accent },
  { subject: "Philo — Méthode de la dissertation", level: 61, accent: "purple" as Accent },
];

export const UPCOMING_EXAMS = [
  { name: "Spé Maths — Écrit", date: "Dans 18 jours", tag: "Coef. 16", accent: "green" as Accent },
  { name: "Grand Oral", date: "Dans 32 jours", tag: "Coef. 10", accent: "blue" as Accent },
  { name: "Philosophie", date: "Dans 41 jours", tag: "Coef. 8", accent: "purple" as Accent },
];

export const RECOMMENDED_DRILLS = [
  { name: "Suites & limites", count: "12 exos", minutes: "~25 min", accent: "green" as Accent },
  { name: "Produit scalaire", count: "8 exos", minutes: "~15 min", accent: "blue" as Accent },
  { name: "Lois à densité", count: "15 exos", minutes: "~30 min", accent: "purple" as Accent },
];

export const PREDICTIONS = [
  { topic: "Géométrie dans l'espace", prob: 92 },
  { topic: "Fonction exponentielle", prob: 87 },
  { topic: "Probabilités conditionnelles", prob: 81 },
  { topic: "Nombres complexes", prob: 74 },
];

// 7 weeks x 7 days revision activity (0–4 intensity), for the streak heatmap.
export const ACTIVITY: number[] = [
  1, 2, 0, 3, 2, 4, 1, 0, 2, 3, 3, 1, 2, 4, 2, 1, 0, 2, 3, 4, 3, 4, 3, 2, 1, 0,
  2, 3, 2, 3, 4, 4, 3, 2, 1, 3, 4, 2, 3, 4, 4, 3, 2, 3, 4, 3, 4, 4, 3,
];
