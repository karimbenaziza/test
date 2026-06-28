import { Sparkles } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Filières",
    links: ["Bac Général", "Bac Technologique", "Brevet", "PASS / LAS", "Prépa (CPGE)"],
  },
  {
    title: "Produit",
    links: ["Fonctionnalités", "Tableau de bord", "Prédiction d'examens", "Tarifs"],
  },
  {
    title: "Ressources",
    links: ["Annales", "Blog révisions", "Centre d'aide", "Parcoursup"],
  },
  {
    title: "Entreprise",
    links: ["À propos", "Établissements", "Contact", "Recrutement"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-ink text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-[-0.02em] text-ink">
                Révisio<span className="text-brand-green"> AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              L'IA qui révise ce qui compte vraiment. Conçue pour le système
              éducatif français.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-ink">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Révisio AI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {["Mentions légales", "Confidentialité (RGPD)", "CGU"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-ink"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
