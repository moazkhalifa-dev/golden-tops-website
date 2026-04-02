"use client";

import Image from "next/image";
import ScrollReveal, {
  SectionHeadingReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/ScrollReveal";
import { ArrowPillLink, Container } from "@/components/ui/shared";
import { HiCheckCircle } from "react-icons/hi";
import type { Locale } from "@/i18n/config";

interface AboutPreviewProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function AboutPreview({ locale, dict }: AboutPreviewProps) {
  const a = dict.aboutPreview;
  const isArabic = locale === "ar";

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <ScrollReveal className="mb-6 flex justify-center lg:mb-8">
          <span className="inline-block rounded-full border border-secondary-200 bg-secondary-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary-600 shadow-sm">
            {a.eyebrow}
          </span>
        </ScrollReveal>

        <div
          dir="ltr"
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16"
        >
          {/* Image */}
          <ScrollReveal
            variant="slideLeft"
            className={`relative order-2 mx-auto w-full max-w-[560px] ${
              isArabic
                ? "lg:order-1 lg:justify-self-start"
                : "lg:order-2 lg:justify-self-end"
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-[12px] border border-[#efe4cf] shadow-[0_28px_65px_-32px_rgba(21,34,51,0.28)]">
                <Image
                  src="/images/About GoldenTops.webp"
                  alt="About Golden Tops"
                  fill
                  className="rounded-[12px] object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-[24px] border border-[#efe5d0] bg-[#fffaf0] p-5 shadow-lg md:block">
                <div className="text-3xl font-bold text-secondary-800">15+</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-500">
                  {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className={`order-1 max-w-[580px] ${
              isArabic
                ? "text-right lg:order-2 lg:justify-self-end"
                : "text-left lg:order-1 lg:justify-self-start"
            }`}
          >
            <SectionHeadingReveal
              align={isArabic ? "right" : "left"}
              titleClassName="mb-5"
              descriptionClassName="mb-8"
              title={
                <h2 className="text-3xl font-bold leading-[1.08] text-secondary-900 md:text-[40px] lg:text-[42px]">
                  {a.heading}
                </h2>
              }
              description={
                <p className="text-base leading-[1.75] text-neutral-600 md:text-lg">
                  {a.description}
                </p>
              }
            />

            <StaggerContainer
              className="mb-8 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2"
              staggerDelay={0.08}
            >
              {a.pillars.map((pillar: any, i: number) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3">
                    <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-primary-500" />
                    <div>
                      <h4 className="text-sm font-semibold text-secondary-800 md:text-base">
                        {pillar.title}
                      </h4>
                      <p className="text-xs leading-5 text-neutral-500 md:text-[13px]">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <ScrollReveal delay={0.4} className="mt-8 flex justify-center lg:mt-10">
          <ArrowPillLink href="/about" locale={locale}>
            {a.cta}
          </ArrowPillLink>
        </ScrollReveal>
      </Container>
    </section>
  );
}
