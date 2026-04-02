"use client";

import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import ScrollReveal, {
  SectionHeadingReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/shared";
import Partners from "@/components/sections/Partners";
import CTABanner from "@/components/sections/CTABanner";
import {
  HiOutlineLightBulb,
  HiOutlineBadgeCheck,
  HiOutlineGlobe,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
  HiOutlineStar,
  HiOutlineSupport,
} from "react-icons/hi";
import type { Locale } from "@/i18n/config";

const approachIcons = [
  HiOutlineLightBulb,
  HiOutlineBadgeCheck,
  HiOutlineGlobe,
  HiOutlineClock,
  HiOutlineUserGroup,
];
const whyIcons = [
  HiOutlineUserGroup,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
  HiOutlineStar,
  HiOutlineSupport,
];

interface AboutPageClientProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function AboutPageClient({
  locale,
  dict,
}: AboutPageClientProps) {
  const a = dict.about;

  return (
    <>
      <PageHero title={a.pageTitle} description={a.pageDescription} />

      {/* Company Overview */}
      <section className="bg-white py-20 md:py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionHeadingReveal
              align="left"
              eyebrowClassName="mb-4"
              titleClassName="mb-6"
              eyebrow={
                <span className="inline-block rounded-full border border-secondary-100 bg-secondary-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary-700">
                  {a.overviewTitle}
                </span>
              }
              title={
                <h2 className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl">
                  {a.overviewTitle}
                </h2>
              }
              description={
                <>
                  <p className="mb-4 text-base leading-relaxed text-neutral-500 md:text-lg">
                    {a.overviewText}
                  </p>
                  <p className="text-base leading-relaxed text-neutral-500 md:text-lg">
                    {a.overviewText2}
                  </p>
                </>
              }
            />

            <ScrollReveal variant="slideLeft">
              <div className="relative rounded-[30px] border border-[#efe7d8] bg-[#fffdf9] p-3 shadow-[0_32px_70px_-42px_rgba(21,34,51,0.28)]">
                <div className="aspect-[4/3] overflow-hidden rounded-[24px] relative">
                  <Image
                    src="/images/About GoldenTops.webp"
                    alt="About Golden Tops"
                    fill
                    className="rounded-[24px] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-sand-50 py-20 md:py-24 lg:py-28">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Mission */}
            <StaggerItem>
              <div className="h-full rounded-[28px] border border-[#eee5d4] bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <HiOutlineStar className="text-2xl text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {a.mission.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {a.mission.text}
                </p>
              </div>
            </StaggerItem>

            {/* Vision */}
            <StaggerItem>
              <div className="h-full rounded-[28px] border border-[#eee5d4] bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <HiOutlineGlobe className="text-2xl text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {a.vision.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {a.vision.text}
                </p>
              </div>
            </StaggerItem>

            {/* Values */}
            <StaggerItem>
              <div className="h-full rounded-[28px] border border-[#eee5d4] bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <HiOutlineShieldCheck className="text-2xl text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {a.values.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {a.values.items.map((v: string, i: number) => (
                    <span
                      key={i}
                      className="inline-block text-xs font-medium px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20 md:py-24 lg:py-28">
        <Container>
          <SectionHeadingReveal
            className="mb-12 md:mb-16"
            title={
              <h2 className="text-3xl font-bold text-secondary-900 md:text-4xl">
                {a.approachTitle}
              </h2>
            }
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {a.approach.map((item: any, i: number) => {
              const Icon = approachIcons[i] || HiOutlineLightBulb;
              return (
                <StaggerItem key={i}>
                  <div className="flex h-full items-start gap-4 rounded-[24px] border border-transparent bg-white p-5 transition-all duration-300 hover:border-[#eee5d4] hover:bg-sand-50 hover:shadow-sm">
                    <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <Icon className="text-xl text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-secondary-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Why Clients Choose Us */}
      <section className="bg-secondary-900 py-20 md:py-24 lg:py-28">
        <Container>
          <SectionHeadingReveal
            className="mb-12 md:mb-16"
            eyebrowClassName="mb-4"
            eyebrow={
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-300">
                {locale === "ar" ? "لماذا نحن" : "Why Golden Tops"}
              </span>
            }
            title={
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {a.whyTitle}
              </h2>
            }
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {a.whyItems.map((item: any, i: number) => {
              const Icon = whyIcons[i] || HiOutlineCheckCircle;
              return (
                <StaggerItem key={i}>
                  <div className="rounded-[26px] border border-white/8 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8">
                    <div className="w-11 h-11 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                      <Icon className="text-xl text-primary-400" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-secondary-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <Partners dict={dict} />
      <CTABanner locale={locale} dict={dict} />
    </>
  );
}
