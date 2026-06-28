import {
  Target,
  Repeat,
  Sigma,
  GraduationCap,
  FlaskConical,
  BookOpen,
  Stethoscope,
  Compass,
  Brain,
  type LucideIcon,
} from "lucide-react";

export type Accent = "green" | "blue" | "purple" | "amber";

export const ACCENT: Record<
  Accent,
  { text: string; bg: string; border: string; ring: string; dot: string; hex: string }
> = {
  green: {
    text: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/40",
    ring: "ring-brand-green/30",
    dot: "bg-brand-green",
    hex: "#18C37E",
  },
  blue: {
    text: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/40",
    ring: "ring-brand-blue/30",
    dot: "bg-brand-blue",
    hex: "#3B82F6",
  },
  purple: {
    text: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/40",
    ring: "ring-brand-purple/30",
    dot: "bg-brand-purple",
    hex: "#8B5CF6",
  },
  amber: {
    text: "text-brand-amber",
    bg: "bg-brand-amber/10",
    border: "border-brand-amber/40",
    ring: "ring-brand-amber/30",
    dot: "bg-brand-amber",
    hex: "#F59E0B",
  },
};

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

export const STATS: Stat[] = [
  { value: 25000, suffix: "", label: "élèves accompagnés" },
  { value: 120, suffix: "", label: "matières couvertes" },
  { value: 2.1, prefix: "+", decimals: 1, suffix: " pts", label: "de moyenne gagnés" },
];

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
  tag: string;
}

export const COURSES: Course[] = [
  {
    id: "bac-general",
    title: "Bac Général",
    description:
      "Spécialités, Grand Oral et tronc commun. Des annales du bac analysées par l'IA, spé par spé.",
    icon: GraduationCap,
    accent: "green",
    tag: "Première & Terminale",
  },
  {
    id: "bac-techno",
    title: "Bac Technologique",
    description:
      "STMG, STI2D, ST2S, STL… Révisions ciblées sur les épreuves et les coefficients qui comptent.",
    icon: FlaskConical,
    accent: "blue",
    tag: "Voies technologiques",
  },
  {
    id: "brevet",
    title: "Brevet",
    description:
      "Maths, français, histoire-géo et sciences. Le DNB décortiqué pour les élèves de 3ᵉ.",
    icon: BookOpen,
    accent: "purple",
    tag: "Collège · 3ᵉ",
  },
  {
    id: "pass-las",
    title: "PASS / LAS",
    description:
      "La première année de médecine au rythme du concours. QCM chronométrés et classements.",
    icon: Stethoscope,
    accent: "green",
    tag: "Études de santé",
  },
  {
    id: "parcoursup",
    title: "Parcoursup",
    description:
      "Tests d'entrée, lettres de motivation et concours post-bac pour sécuriser vos vœux.",
    icon: Compass,
    accent: "blue",
    tag: "Orientation post-bac",
  },
  {
    id: "prepa",
    title: "Prépa (CPGE)",
    description:
      "MPSI, PCSI, ECG, BL… Colles, DS et concours blancs calibrés sur le niveau attendu.",
    icon: Brain,
    accent: "purple",
    tag: "BTS · DUT · CPGE",
  },
];

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
  status: string;
}

export const FEATURES: Feature[] = [
  {
    id: "moteur-erreurs",
    title: "Moteur d'Erreurs",
    description:
      "Chaque erreur devient un exercice ciblé. L'application détecte vos faiblesses et construit vos révisions.",
    icon: Target,
    accent: "green",
    status: "ACTIF",
  },
  {
    id: "repetition-espacee",
    title: "Répétition Espacée",
    description:
      "Les notions reviennent juste avant l'oubli afin de renforcer durablement la mémoire.",
    icon: Repeat,
    accent: "blue",
    status: "ACTIF",
  },
  {
    id: "prediction-examens",
    title: "Prédiction d'Examens",
    description:
      "L'IA identifie les sujets les plus probables à partir des annales, des programmes et des tendances des examens.",
    icon: Sigma,
    accent: "purple",
    status: "ACTIF",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Choisissez votre filière",
    description:
      "Bac, Brevet, PASS/LAS, Prépa… L'IA charge le programme officiel et les annales associées.",
  },
  {
    number: "02",
    title: "Réalisez un test diagnostique",
    description:
      "Un court bilan adaptatif mesure votre niveau réel, matière par matière.",
  },
  {
    number: "03",
    title: "L'IA détecte vos lacunes",
    description:
      "Le moteur d'erreurs cartographie précisément ce qui vous fait perdre des points.",
  },
  {
    number: "04",
    title: "Révisez avec des exercices ciblés",
    description:
      "Des séries calibrées sur vos faiblesses, en répétition espacée pour ancrer durablement.",
  },
  {
    number: "05",
    title: "Suivez votre progression",
    description:
      "Tableau de bord, streak et prédictions d'examen mis à jour en temps réel.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  accent: Accent;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "J'ai gagné 3 points en spécialité maths en deux mois de révisions ciblées.",
    name: "Emma",
    role: "Terminale Générale",
    accent: "green",
    initials: "EM",
  },
  {
    quote: "L'application m'a aidé à réussir PASS. Les QCM chronométrés font toute la différence.",
    name: "Lucas",
    role: "Étudiant en médecine",
    accent: "blue",
    initials: "LU",
  },
  {
    quote: "Les prédictions d'examen m'ont fait réviser exactement les bons chapitres pour le Brevet.",
    name: "Inès",
    role: "Troisième",
    accent: "purple",
    initials: "IN",
  },
  {
    quote: "En prépa ECG, la répétition espacée a changé ma façon de bosser les colles.",
    name: "Hugo",
    role: "CPGE ECG",
    accent: "green",
    initials: "HU",
  },
  {
    quote: "J'ai préparé mes tests Parcoursup sereinement, sans réviser dans le vide.",
    name: "Sarah",
    role: "Terminale STMG",
    accent: "blue",
    initials: "SA",
  },
  {
    quote: "Le tableau de bord me montre clairement où je perds des points. Très motivant.",
    name: "Noah",
    role: "BTS SIO",
    accent: "purple",
    initials: "NO",
  },
];

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  accent: Accent;
}

export const PLANS: Plan[] = [
  {
    name: "Essentiel",
    price: "9,99€",
    period: "/mois",
    description: "Pour démarrer ses révisions avec l'IA sur une filière.",
    accent: "blue",
    cta: "Commencer",
    features: [
      "1 filière au choix",
      "Moteur d'erreurs",
      "Répétition espacée",
      "Tableau de bord de progression",
      "Annales corrigées",
    ],
  },
  {
    name: "Premium",
    price: "19,99€",
    period: "/mois",
    description: "L'expérience complète pour viser la mention.",
    accent: "green",
    featured: true,
    cta: "Choisir Premium",
    features: [
      "Toutes les filières",
      "Prédiction d'examens par IA",
      "Exercices illimités & QCM chronométrés",
      "Plan de révision personnalisé",
      "Suivi du Grand Oral",
      "Support prioritaire",
    ],
  },
  {
    name: "Établissement",
    price: "Sur devis",
    period: "",
    description: "Pour les lycées, collèges et organismes de soutien.",
    accent: "purple",
    cta: "Nous contacter",
    features: [
      "Licences multi-classes",
      "Tableau de bord enseignant",
      "Suivi par groupe et par élève",
      "Intégration ENT",
      "Accompagnement dédié",
    ],
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "Révisio AI suit-il vraiment le programme français ?",
    answer:
      "Oui. Chaque parcours est calé sur les programmes officiels de l'Éducation nationale et sur les annales réelles : Baccalauréat général et technologique, Brevet des collèges, PASS/LAS, Parcoursup, concours post-bac, CPGE, BTS et DUT.",
  },
  {
    question: "Comment l'IA prédit-elle les sujets d'examen ?",
    answer:
      "Le moteur analyse plusieurs années d'annales, l'évolution des programmes et les tendances récentes pour estimer la probabilité d'apparition de chaque notion. Vous révisez en priorité ce qui a le plus d'impact sur votre note.",
  },
  {
    question: "À partir de quel niveau puis-je l'utiliser ?",
    answer:
      "De la 3ᵉ (Brevet) jusqu'aux études supérieures (PASS/LAS, Prépa, BTS, DUT). Le test diagnostique adapte automatiquement la difficulté à votre niveau réel.",
  },
  {
    question: "Puis-je changer de filière en cours d'abonnement ?",
    answer:
      "Avec l'offre Premium, toutes les filières sont incluses : vous basculez quand vous voulez. L'offre Essentiel couvre une filière au choix, modifiable depuis votre espace.",
  },
  {
    question: "Mes données sont-elles protégées ?",
    answer:
      "Vos données restent hébergées en Europe et sont traitées conformément au RGPD. Elles ne servent qu'à personnaliser vos révisions et ne sont jamais revendues.",
  },
  {
    question: "Y a-t-il un essai gratuit ?",
    answer:
      "Oui, vous pouvez tester le diagnostic et une première série d'exercices ciblés gratuitement, sans carte bancaire.",
  },
];

export const NAV_LINKS = [
  { label: "Filières", href: "#filieres" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];
