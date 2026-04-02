"use client";

import { SectionHeadingReveal } from "@/components/common/ScrollReveal";
import { ArrowPillLink, Container } from "@/components/ui/shared";
import { FaPhone } from "react-icons/fa";
import type { Locale } from "@/i18n/config";

interface CTABannerProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function CTABanner({ locale, dict }: CTABannerProps) {
  const c = dict.cta;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-[#efe5d0] bg-sand-50 px-6 py-10 text-center shadow-[0_30px_80px_-40px_rgba(21,34,51,0.25)] md:px-10 md:py-14">
          <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-primary-200/30 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-52 w-52 rounded-full bg-secondary-100/70 blur-3xl" />
          <div className="relative">
            <SectionHeadingReveal
              className="mx-auto max-w-2xl"
              eyebrowClassName="mb-6"
              titleClassName="mb-5"
              descriptionClassName="mb-10"
              eyebrow={
                <span className="inline-block rounded-full border border-secondary-100 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary-700">
                  {locale === "ar" ? "تواصل معنا" : "Get In Touch"}
                </span>
              }
              title={
                <h2 className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl lg:text-5xl">
                  {c.heading}
                </h2>
              }
              description={
                <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                  {c.description}
                </p>
              }
            />

            <SectionHeadingReveal
              title={
                <div className="flex flex-wrap justify-center gap-4">
                  <ArrowPillLink href="/contact" locale={locale}>
                    {c.button}
                  </ArrowPillLink>
                  <a
                    href={`tel:${dict.contact?.phone || "+966XXXXXXXXX"}`}
                    className="inline-flex h-14 items-center gap-2.5 rounded-full border border-secondary-200 bg-white px-7 text-base font-semibold text-secondary-800 shadow-[0_18px_40px_-28px_rgba(21,34,51,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary-300 hover:bg-secondary-50"
                  >
                    <FaPhone className="text-sm text-primary-500" />
                    {c.phone}
                  </a>
                </div>
              }
              titleClassName=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
