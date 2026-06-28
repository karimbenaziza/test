"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "container flex h-16 items-center justify-between rounded-full px-4 transition-all duration-300 sm:px-6",
          scrolled
            ? "border border-border bg-white/80 shadow-drop-sm backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        )}
      >
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-ink text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-[-0.02em] text-ink">
            Révisio<span className="text-brand-green"> AI</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden h-10 px-5 sm:inline-flex">
            <a href="#filieres" className="label-mono tracking-[0.08em]">
              Commencer
            </a>
          </Button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink shadow-drop-sm md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container mt-2 overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-drop md:hidden"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full">
                <a href="#filieres" onClick={() => setOpen(false)}>
                  Commencer
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
