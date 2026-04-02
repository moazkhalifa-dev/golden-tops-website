"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/shared";
import type { Locale } from "@/i18n/config";

interface HeroProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function Hero({ locale, dict }: HeroProps) {
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/website.vercel.app.nextimage.webp"
          alt="Golden Tops Projects"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-black/42" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/28 to-black/52" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-4 pb-16 pt-[110px] md:px-5 md:pb-20 md:pt-[132px] lg:px-6 lg:pt-[148px]">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm"
          >
            {h.eyebrow}
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-6 text-4xl font-bold leading-[1.02] text-white md:text-5xl lg:text-6xl xl:text-[72px]"
            style={{ textShadow: "0 12px 30px rgba(0, 0, 0, 0.4)" }}
          >
            {h.heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto mb-10 max-w-3xl text-base leading-[1.9] text-white/90 md:text-lg lg:text-xl"
            style={{ textShadow: "0 8px 24px rgba(0, 0, 0, 0.35)" }}
          >
            {h.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              href="/services"
              locale={locale}
              variant="primary"
              size="large"
              className="bg-primary-600 hover:bg-primary-500 hover:shadow-[0_18px_35px_-18px_rgba(172,135,52,0.8)]"
            >
              {h.cta1}
            </Button>
            <Button
              href="/contact"
              locale={locale}
              variant="outline"
              size="large"
            >
              {h.cta2}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
