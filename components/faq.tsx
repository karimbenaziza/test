import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Vous avez des questions ?"
          description="Tout ce qu'il faut savoir avant de commencer vos révisions avec l'IA."
        />

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
