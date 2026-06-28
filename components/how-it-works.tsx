import { Reveal } from "@/components/reveal";
import { STEPS } from "@/lib/data";

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-24 bg-ink py-20 text-white sm:py-28"
    >
      <div className="container">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="label-mono text-xs text-white/50">
            Comment ça marche
          </span>
          <h2 className="display max-w-2xl text-4xl text-white sm:text-5xl">
            Cinq étapes pour réviser ce qui compte
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i}
              className="flex flex-col gap-4 bg-ink p-7"
            >
              <span className="label-mono text-sm text-brand-green">
                {step.number}
              </span>
              <h3 className="text-lg font-bold leading-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
