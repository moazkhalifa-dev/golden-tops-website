"use client";

import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Container, Button } from "@/components/ui/shared";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import type { Locale } from "@/i18n/config";

interface ContactPageClientProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function ContactPageClient({
  locale,
  dict,
}: ContactPageClientProps) {
  const c = dict.contact;
  const services = dict.services.items;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfoItems = [
    {
      icon: FaMapMarkerAlt,
      label: locale === "ar" ? "العنوان" : "Address",
      value: c.address,
    },
    {
      icon: FaPhone,
      label: locale === "ar" ? "الهاتف" : "Phone",
      value: c.phone,
      href: `tel:${c.phone}`,
    },
    {
      icon: FaWhatsapp,
      label: locale === "ar" ? "واتساب" : "WhatsApp",
      value: c.whatsapp,
      href: `https://wa.me/${c.whatsapp.replace(/\s+/g, "")}`,
    },
    {
      icon: FaEnvelope,
      label: locale === "ar" ? "البريد الإلكتروني" : "Email",
      value: c.email,
      href: `mailto:${c.email}`,
    },
    {
      icon: FaClock,
      label: locale === "ar" ? "ساعات العمل" : "Working Hours",
      value: c.workingHours,
    },
  ];

  return (
    <>
      <PageHero title={c.pageTitle} description={c.pageDescription} />

      <section className="bg-sand-50 py-20 md:py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="rounded-[30px] border border-[#eee5d4] bg-white p-7 shadow-sm md:p-8">
                  <h2 className="mb-8 text-2xl font-bold text-secondary-900 md:text-3xl">
                    {c.formTitle}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          {c.nameLabel}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder={c.namePlaceholder}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-secondary-100 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 transition-all bg-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          {c.emailLabel}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder={c.emailPlaceholder}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-secondary-100 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 transition-all bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          {c.phoneLabel}
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder={c.phonePlaceholder}
                          className="w-full px-4 py-3 rounded-xl border border-secondary-100 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 transition-all bg-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          {c.serviceLabel}
                        </label>
                        <select
                          id="contact-service"
                          className="w-full px-4 py-3 rounded-xl border border-secondary-100 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 transition-all bg-white text-neutral-600"
                        >
                          <option value="">{c.servicePlaceholder}</option>
                          {services.map((s: any) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        {c.messageLabel}
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder={c.messagePlaceholder}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-secondary-100 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 transition-all resize-none bg-white"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="large">
                      {submitted
                        ? locale === "ar"
                          ? "✓ تم الإرسال"
                          : "✓ Sent!"
                        : c.submitButton}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="slideLeft">
                <div className="rounded-[30px] border border-[#eee5d4] bg-white p-7 shadow-sm md:p-8">
                  <h2 className="mb-8 text-2xl font-bold text-secondary-900 md:text-3xl">
                    {c.infoTitle}
                  </h2>

                  <div className="mb-8 space-y-4">
                    {contactInfoItems.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-2xl border border-[#f0e8d8] bg-sand-50 p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-secondary-100 bg-white">
                          <item.icon className="text-primary-500" />
                        </div>
                        <div>
                          <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={
                                item.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-neutral-800 transition-colors hover:text-primary-500"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-neutral-800">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${c.whatsapp.replace(/\s+/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-500 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                    >
                      <FaWhatsapp className="text-lg" />
                      {c.chatWhatsapp}
                    </a>
                    <a
                      href={`tel:${c.phone}`}
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-secondary-700 text-sm font-semibold text-white transition-colors hover:bg-secondary-800"
                    >
                      <FaPhone className="text-sm" />
                      {c.callNow}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Embedded map */}
      <section className="bg-white pb-16 md:pb-20 lg:pb-24">
        <Container>
          <div className="overflow-hidden rounded-[30px] border border-[#eee5d4] bg-sand-50 shadow-sm">
            <iframe
              title={
                locale === "ar"
                  ? "موقع الرياض على الخريطة"
                  : "Riyadh location map"
              }
              src="https://www.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&z=12&output=embed"
              className="h-[300px] w-full border-0 md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
