import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ContactPageClient from "./ContactPageClient";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <ContactPageClient locale={locale as Locale} dict={dict} />;
}
