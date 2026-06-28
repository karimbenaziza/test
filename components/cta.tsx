"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Cta() {
  return (
    <section className="px-4 pb-20 sm:pb-28">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-card bg-ink px-6 py-16 text-center shadow-drop-lg sm:px-12 sm:py-20">
          {/* accent glows */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-brand-purple/20 blur-3xl" />

          <div className="relative flex flex-col items-center">
            <span className="label-mono text-xs text-white/50">
              Prêt à réviser intelligemment ?
            </span>
            <h2 className="display mt-5 max-w-2xl text-balance text-4xl text-white sm:text-6xl">
              Révisez ce qui compte{" "}
              <span className="text-brand-green">vraiment</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
              Rejoignez les 25 000 élèves qui gagnent des points en révisant
              moins, mais mieux. Essai gratuit, sans carte bancaire.
            </p>
            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <Button asChild variant="green" size="lg" className="w-full sm:w-auto">
                <a href="#filieres">
                  <ArrowRight className="h-5 w-5" />
                  Choisir ma filière
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full border border-white/15 bg-white/10 text-white shadow-none hover:bg-white/20 sm:w-auto"
              >
                <a href="#tarifs">Voir les tarifs</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
