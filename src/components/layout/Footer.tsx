import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/shared";

interface FooterProps {
  locale: Locale;
  dict: Record<string, any>;
}

interface FooterLink {
  href: string;
  label: string;
}

interface SocialLink {
  icon: typeof FaXTwitter;
  href: string;
  name: string;
}

export default function Footer({ locale, dict }: FooterProps) {
  const isArabic = locale === "ar";

  const navLinks: FooterLink[] = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/projects`, label: dict.nav.projects },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const serviceLinks: FooterLink[] = dict.services.items.map(
    (service: any) => ({
      href: `/${locale}/services/${service.slug}`,
      label: service.title,
    }),
  );

  const socialLinks: SocialLink[] = [
    { icon: FaXTwitter, href: "#", name: "X (Twitter)" },
    { icon: FaInstagram, href: "#", name: "Instagram" },
    { icon: FaLinkedinIn, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="relative overflow-hidden bg-secondary-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/Opening_of_the_first_phase_of_the_Sports_Track_Project_in_Riyadh_3_1_1024x683_1_f080ad5d5f.webp"
          alt="Riyadh Sports Track"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.72)_0%,rgba(11,17,26,0.88)_20%,rgba(14,24,37,0.94)_55%,rgba(11,17,26,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,154,46,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(74,122,138,0.14),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/60 to-transparent" />

      <Container className="relative py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="rounded-[30px] border border-white/10 bg-[rgba(19,19,20,0.72)] p-6 shadow-[0_32px_90px_-42px_rgba(0,0,0,0.65)] backdrop-blur-[3px] md:p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <Link href={`/${locale}`} className="inline-flex items-center">
                  <Image
                    src="/images/logo.webp"
                    alt="Golden Tops"
                    width={172}
                    height={56}
                    className="h-10 w-auto object-contain brightness-125"
                  />
                </Link>

                <span className="rounded-full border border-primary-400/25 bg-primary-500/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300">
                  {isArabic ? "جودة متميزة" : "Premium Build"}
                </span>
              </div>

              <p className="mb-5 max-w-md text-[14px] leading-7 text-white/88 md:text-[15px]">
                {dict.footer.description}
              </p>

              <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-300/90">
                    {isArabic ? "الموقع" : "Location"}
                  </p>
                  <p className="font-medium text-white/90">
                    {dict.contact.address}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-300/90">
                    {isArabic ? "ساعات العمل" : "Working Hours"}
                  </p>
                  <p className="font-medium leading-6 text-white/90">
                    {dict.contact.workingHours}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ icon: Icon, href, name }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/35 hover:bg-primary-500 hover:text-white"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:pt-4">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
              {dict.footer.quickLinks}
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-white/82 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-400 transition-transform duration-200 group-hover:scale-125" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:pt-4">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
              {dict.footer.servicesTitle}
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-start gap-2 text-[15px] leading-6 text-white/82 transition-colors duration-200 hover:text-white"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400 transition-transform duration-200 group-hover:scale-125" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:pt-4">
            <div className="rounded-[28px] border border-primary-400/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-5 shadow-[0_24px_60px_-38px_rgba(0,0,0,0.55)] backdrop-blur-[2px] md:p-6">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
                {dict.footer.contactTitle}
              </h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.035)] p-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/12 text-primary-300">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-300/80">
                      {isArabic ? "العنوان" : "Address"}
                    </p>
                    <p className="text-[15px] leading-6 text-white/92">
                      {dict.contact.address}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.035)] p-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/12 text-primary-300">
                    <FaPhone className="text-sm" />
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-300/80">
                      {isArabic ? "الهاتف" : "Phone"}
                    </p>
                    <a
                      href={`tel:${dict.contact.phone}`}
                      className="text-[15px] text-white/92 transition-colors hover:text-white"
                    >
                      {dict.contact.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.035)] p-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/12 text-primary-300">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-300/80">
                      {isArabic ? "البريد الإلكتروني" : "Email"}
                    </p>
                    <a
                      href={`mailto:${dict.contact.email}`}
                      className="text-[15px] text-white/92 transition-colors hover:text-white"
                    >
                      {dict.contact.email}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${dict.contact.phone}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <FaPhone className="text-xs text-primary-300" />
                  {isArabic ? "اتصال" : "Call"}
                </a>

                <a
                  href={`https://wa.me/${String(dict.contact.whatsapp).replace(/\s+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary-500 px-4 text-sm font-semibold text-white shadow-[0_18px_40px_-20px_rgba(196,154,46,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-400"
                >
                  <FaWhatsapp className="text-sm" />
                  {isArabic ? "واتساب" : "WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/8 bg-[rgba(9,14,21,0.88)]">
        <Container className="flex flex-col gap-2 py-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-sm text-secondary-300/75">
            {dict.footer.copyright}
          </p>
          <div className="space-y-1 text-center md:text-right">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary-400/80">
              {isArabic
                ? "مقاولات وتشطيبات بمعايير تنفيذ متميزة"
                : "Contracting & Finishing with Premium Execution Standards"}
            </p>
            <p className="text-xs text-primary-300/90">
              {isArabic
                ? "تصميم وتطوير: Moaz Khalifa"
                : "Designed & Developed by Moaz Khalifa"}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
