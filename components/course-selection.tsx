"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { COURSES, ACCENT } from "@/lib/data";

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function CourseSelection() {
  return (
    <section id="filieres" className="scroll-mt-24 py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Choisissez votre filière"
          title="Un parcours pour chaque examen français"
          description="Du collège aux études supérieures, chaque filière est calée sur les programmes officiels et les annales réelles."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {COURSES.map((course) => {
            const a = ACCENT[course.accent];
            const Icon = course.icon;
            return (
              <motion.a
                key={course.id}
                href="#tarifs"
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group flex flex-col rounded-card border bg-card p-7 shadow-drop ${a.border}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.bg} ${a.text}`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="label-mono text-[10px] text-muted-foreground">
                    {course.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-[-0.01em] text-ink">
                  {course.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {course.description}
                </p>

                <div className="mt-6 flex items-center gap-1.5 border-t border-border pt-5">
                  <span className={`text-sm font-semibold ${a.text}`}>
                    Découvrir le parcours
                  </span>
                  <ArrowUpRight
                    className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${a.text}`}
                  />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
