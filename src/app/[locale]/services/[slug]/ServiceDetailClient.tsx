"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Container, Button } from "@/components/ui/shared";
import { HiCheck } from "react-icons/hi";
import type { Locale } from "@/i18n/config";

const serviceImages: Record<string, string> = {
  design: "/images/fourth.webp",
  mep: "/images/Our Servicesfirst.webp",
  finishing: "/images/Our Services second.webp",
  maintenance: "/images/Our Services third.webp",
};

interface ServiceDetailClientProps {
  locale: Locale;
  dict: Record<string, any>;
  service: any;
  relatedServices: any[];
}

export default function ServiceDetailClient({
  locale,
  dict,
  service,
  relatedServices,
}: ServiceDetailClientProps) {
  const s = dict.services;

  return (
    <>
      <PageHero title={service.title} description={service.shortDesc} />

      {/* Main Content */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left - Main content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                {/* Service image */}
                <div className="relative mb-8 rounded-[30px] border border-[#eee5d4] bg-[#fffdf9] p-3 shadow-[0_32px_70px_-42px_rgba(21,34,51,0.28)]">
                  <div className="relative aspect-video overflow-hidden rounded-[24px]">
                    <Image
                      src={serviceImages[service.icon] || serviceImages.design}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                </div>

                <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
                  {service.description}
                </p>
              </ScrollReveal>

              {/* Features */}
              <ScrollReveal delay={0.2}>
                <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-6">
                  {locale === "ar" ? "ما نقدمه" : "What We Offer"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-[#f0e8d8] bg-sand-50 p-4 transition-colors duration-300 hover:bg-[#f8f1e4]"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center shrink-0 mt-0.5">
                        <HiCheck className="text-white text-sm" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal delay={0.3}>
                <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-6">
                  {locale === "ar" ? "المزايا الرئيسية" : "Key Benefits"}
                </h3>
                <div className="space-y-4 mb-10">
                  {service.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 shrink-0" />
                      <p className="text-base text-neutral-500 leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal delay={0.4}>
                <div className="rounded-[28px] border border-[#eee5d4] bg-sand-50 p-7 md:p-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {s.ctaTitle}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
                    {s.ctaDescription}
                  </p>
                  <Button href="/contact" locale={locale} variant="primary">
                    {s.ctaButton}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Sidebar - Related Services */}
            <div>
              <ScrollReveal variant="slideLeft">
                <div className="sticky top-28">
                  <h3 className="text-lg font-bold text-secondary-900 mb-5">
                    {s.relatedTitle}
                  </h3>
                  <div className="space-y-4">
                    {relatedServices.map((rs: any) => {
                      return (
                        <Link
                          key={rs.slug}
                          href={`/${locale}/services/${rs.slug}`}
                          className="group flex items-start gap-4 rounded-2xl border border-[#f0e8d8] bg-sand-50 p-4 transition-all duration-300 hover:bg-white hover:shadow-md"
                        >
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 relative">
                            <Image
                              src={
                                serviceImages[rs.icon] || serviceImages.design
                              }
                              alt={rs.title}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-secondary-900 group-hover:text-secondary-600 transition-colors mb-1">
                              {rs.title}
                            </h4>
                            <p className="text-xs text-neutral-500 line-clamp-2">
                              {rs.shortDesc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Quick Contact */}
                  <div className="mt-6 rounded-[26px] bg-secondary-900 p-6 text-center">
                    <h4 className="text-base font-semibold text-white mb-2">
                      {locale === "ar" ? "هل تحتاج مساعدة؟" : "Need Help?"}
                    </h4>
                    <p className="text-sm text-secondary-300 mb-5">
                      {locale === "ar"
                        ? "تواصل مع فريقنا"
                        : "Get in touch with our team"}
                    </p>
                    <Button
                      href="/contact"
                      locale={locale}
                      variant="primary"
                      className="w-full"
                    >
                      {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
