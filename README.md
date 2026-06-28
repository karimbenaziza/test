# Révisio AI

> L'IA qui révise ce qui compte vraiment.

Landing page premium pour une application EdTech française d'aide à la révision,
propulsée par l'IA. Conçue pour le système éducatif français : **Baccalauréat
général & technologique, Brevet des collèges, PASS / LAS, Parcoursup, concours
post-bac, Prépa (CPGE), BTS et DUT**.

## Stack technique

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** (design system sur mesure)
- **Framer Motion** (animations : fade-up au scroll, compteurs animés, lift au survol)
- **shadcn/ui** (primitives : Button, Card, Badge, Accordion)
- **Lucide Icons**

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Design system

| Token        | Valeur     |
| ------------ | ---------- |
| Vert         | `#18C37E`  |
| Bleu         | `#3B82F6`  |
| Violet       | `#8B5CF6`  |
| Noir (ink)   | `#111111`  |
| Fond         | `#FAFAFA`  |
| Border radius| `28px`     |

- Typographie : **Inter** (titres bold, grande échelle) + **JetBrains Mono**
  (labels en majuscules espacées).
- Ombres : **strong bottom shadow** (`shadow-drop`, `shadow-drop-lg`) +
  ombres « glow » colorées sous les CTA.
- Esthétique : minimaliste, fond clair, éléments noirs, accents verts / bleus /
  violets, cartes arrondies — style Apple / Linear, mobile-first (390px).

## Structure des sections

1. **Hero** — badge, titre géant (`RÉVISE` en vert), CTA, compteurs.
2. **Statistiques** — 25 000 élèves · 120 matières · +2,1 pts (compteurs animés).
3. **Sélection de filière** — 6 cartes (Bac Général, Bac Techno, Brevet, PASS/LAS, Parcoursup, Prépa).
4. **Fonctionnalités** — Moteur d'Erreurs (vert), Répétition Espacée (bleu), Prédiction d'Examens (violet).
5. **Tableau de bord élève** — progression, streak, matières fragiles, examens, exercices, prédictions IA.
6. **Comment ça marche** — 5 étapes.
7. **Témoignages** — cartes élèves notées 5 étoiles.
8. **Tarifs** — Essentiel 9,99 € · Premium 19,99 € · Établissement (sur devis).
9. **FAQ** — accordéon.
10. **CTA** + **Footer**.

## Arborescence

```
app/
  layout.tsx        # fonts, métadonnées, <html lang="fr">
  page.tsx          # assemblage des sections
  globals.css       # tokens + utilitaires (dot grid, label-mono, display)
components/
  ui/               # shadcn : button, card, badge, accordion
  navbar.tsx hero.tsx stats.tsx course-selection.tsx features.tsx
  dashboard-preview.tsx how-it-works.tsx testimonials.tsx
  pricing.tsx faq.tsx cta.tsx footer.tsx
  animated-counter.tsx reveal.tsx section-heading.tsx
lib/
  data.ts           # données mock (filières, features, tarifs, FAQ…)
  utils.ts          # cn()
```

Toutes les données sont fictives (mock) et centralisées dans `lib/data.ts`.
