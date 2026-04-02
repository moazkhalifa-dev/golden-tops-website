"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/shared";
import CTABanner from "@/components/sections/CTABanner";
import type { Locale } from "@/i18n/config";

const serviceImages: Record<string, string> = {
  design: "/images/fourth.webp",
  mep: "/images/Our Servicesfirst.webp",
  finishing: "/images/Our Services second.webp",
  maintenance: "/images/Our Services third.webp",
};

interface ServicesListClientProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function ServicesListClient({
  locale,
  dict,
}: ServicesListClientProps) {
  const s = dict.services;

  return (
    <>
      <PageHero title={s.pageTitle} description={s.pageDescription} />

      <section className="bg-sand-50 py-20 md:py-24 lg:py-28">
        <Container>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            staggerDelay={0.15}
          >
            {s.items.map((service: any) => {
              const imgSrc =
                serviceImages[service.icon] || serviceImages.design;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="group block h-full overflow-hidden rounded-[28px] border border-[#eee5d4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[21/9] overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent" />
                    </div>
                    <div className="p-7 md:p-8">
                      <span className="mb-4 inline-flex rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-700">
                        {locale === "ar"
                          ? "خدمة متخصصة"
                          : "Specialized Service"}
                      </span>
                      <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-secondary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {service.features
                          .slice(0, 3)
                          .map((f: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-neutral-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                              {f}
                            </li>
                          ))}
                      </ul>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all duration-300">
                        {locale === "ar" ? "اقرأ المزيد" : "Learn More"}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            locale === "ar"
                              ? "rotate-180 group-hover:-translate-x-1"
                              : "group-hover:translate-x-1"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <CTABanner locale={locale} dict={dict} />
    </>
  );
}
