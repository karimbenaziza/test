import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Révisio AI — L'IA qui révise ce qui compte vraiment",
  description:
    "Révisio AI analyse les annales, détecte vos erreurs et vous aide à réviser uniquement ce qui a le plus d'impact sur vos résultats. Bac, Brevet, PASS/LAS, Parcoursup, Prépa, BTS & DUT.",
  keywords: [
    "révisions",
    "Baccalauréat",
    "Brevet",
    "PASS LAS",
    "Parcoursup",
    "Prépa CPGE",
    "BTS",
    "IA éducative",
  ],
  openGraph: {
    title: "Révisio AI — L'IA qui révise ce qui compte vraiment",
    description:
      "Révisez uniquement ce qui a le plus d'impact sur vos résultats, grâce à l'IA conçue pour le système éducatif français.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
