"use client";

import ScrollReveal from "@/components/common/ScrollReveal";
import { useCountUp } from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/shared";
import { HiCog, HiUserGroup, HiUsers, HiStar } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import type { Locale } from "@/i18n/config";

interface StatsProps {
  locale: Locale;
  dict: Record<string, any>;
}

const statIcons = [HiCog, HiUsers, HiUserGroup, HiStar];

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { count, ref } = useCountUp(value, 2000);
  const Icon = statIcons[index % statIcons.length];

  return (
    <div
      ref={ref}
      className="rounded-[26px] border border-white/10 bg-white/5 p-6 backdrop-blur-[1px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 md:p-7"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10">
        <Icon className="h-7 w-7 text-primary-400" />
      </div>
      <div>
        <div className="text-4xl font-bold text-white md:text-5xl">
          {count}
          <span className="text-primary-400">{suffix}</span>
        </div>
        <p className="mt-2 text-sm font-medium text-secondary-100 md:text-base">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Stats({ locale, dict }: StatsProps) {
  const s = dict.stats;
  const heading =
    locale === "ar"
      ? "جولدن توبس تقدم حلولاً متكاملة لكل احتياجاتكم"
      : "Golden Tops Services For All Your Needs";
  const description =
    locale === "ar"
      ? "نقدم تنفيذًا متكاملًا في التشطيبات الداخلية والخارجية، والأعمال الخشبية، والتصميم، وأعمال ما بعد البيع تحت سقف واحد لضمان جودة عالية ونتائج موثوقة."
      : "Golden Tops provides comprehensive interior and exterior finishes. We specialize in high-quality tiles, wooden works, design, and post-sales works, all under one roof for your complete needs.";
  const phoneLabel = locale === "ar" ? "تحتاج مساعدة؟" : "Need help?";

  return (
    <section className="relative overflow-hidden bg-secondary-900 py-16 text-white md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,168,200,0.2),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(196,154,46,0.1),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#3f6c7f_0%,#456f80_45%,#385e6d_100%)] opacity-90" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <ScrollReveal>
            <div>
              <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                {s.eyebrow}
              </span>
              <h2 className="mb-6 max-w-xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[52px]">
                {heading}
              </h2>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-white">
                  {phoneLabel}
                </span>
                <a
                  href={`tel:${dict.contact?.phone || "+966547518888"}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                    <FaPhone className="text-xs text-primary-300" />
                  </span>
                  {dict.contact?.phone || "+966547518888"}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: 2x2 Stat Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
            {s.items.map((item: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <StatCard
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  index={i}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
