import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import AboutPageClient from "./AboutPageClient";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <AboutPageClient locale={locale as Locale} dict={dict} />;
}
