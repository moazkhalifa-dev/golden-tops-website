import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ServicesListClient from "./ServicesListClient";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <ServicesListClient locale={locale as Locale} dict={dict} />;
}
