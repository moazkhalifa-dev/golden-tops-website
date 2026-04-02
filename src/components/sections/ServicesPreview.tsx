"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal, {
  SectionHeadingReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/ScrollReveal";
import { ArrowPillLink, Container } from "@/components/ui/shared";
import type { Locale } from "@/i18n/config";

const serviceImages: Record<string, string> = {
  design: "/images/fourth.webp",
  mep: "/images/Our Servicesfirst.webp",
  finishing: "/images/Our Services second.webp",
  maintenance: "/images/Our Services third.webp",
};

interface ServicesPreviewProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function ServicesPreview({
  locale,
  dict,
}: ServicesPreviewProps) {
  const sp = dict.servicesPreview;
  const items = dict.services.items;

  return (
    <section className="bg-sand-50 py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeadingReveal
          className="mx-auto mb-12 max-w-3xl md:mb-14"
          eyebrowClassName="mb-4"
          titleClassName="mb-4"
          eyebrow={
            <span className="inline-block rounded-full border border-secondary-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary-600">
              {sp.eyebrow}
            </span>
          }
          title={
            <h2 className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl lg:text-[48px]">
              {sp.heading}
            </h2>
          }
          description={
            <p className="text-base leading-relaxed text-neutral-500 md:text-lg">
              {sp.description}
            </p>
          }
        />

        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((service: any) => {
            const imgSrc = serviceImages[service.icon] || serviceImages.design;
            return (
              <StaggerItem key={service.slug}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-primary-200/80 bg-white shadow-[0_24px_55px_-32px_rgba(21,34,51,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-30px_rgba(21,34,51,0.28)]">
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden"
                  >
                    <Image
                      src={imgSrc}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-lg font-semibold text-secondary-900 transition-colors group-hover:text-secondary-700">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-sm leading-7 text-neutral-500">
                      {service.shortDesc}
                    </p>
                    <div className="mt-auto">
                      <ArrowPillLink
                        href={`/services/${service.slug}`}
                        locale={locale}
                        className="h-12 w-full justify-between px-5 text-sm"
                      >
                        {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                      </ArrowPillLink>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
