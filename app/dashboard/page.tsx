import type { Metadata } from "next";

import { DashboardView } from "@/components/dashboard/dashboard-view";

export const metadata: Metadata = {
  title: "Tableau de bord — Révisio AI",
  description:
    "Suivez votre progression, votre streak de révision, vos matières fragiles et les prédictions d'examen de l'IA.",
};

export default function DashboardPage() {
  return <DashboardView />;
}
