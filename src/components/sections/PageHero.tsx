"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/shared";

interface PageHeroProps {
  title: string;
  description?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#eee5d4] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f2_100%)] pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(161,192,219,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(233,199,122,0.14),transparent_24%)]" />
      <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-primary-100/35 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center rounded-full border border-secondary-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-secondary-700 shadow-sm"
          >
            Golden Tops
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl lg:text-[52px]"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg"
            >
              {description}
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  );
}
