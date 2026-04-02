import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ServiceDetailClient from "./ServiceDetailClient";

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = [
    "design-interior-solutions",
    "mep-technical-works",
    "finishing-fit-out",
    "post-sales-maintenance",
  ];

  return ["en", "ar"].flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);

  const service = dict.services.items.find((s: any) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = dict.services.items.filter(
    (s: any) => s.slug !== slug,
  );

  return (
    <ServiceDetailClient
      locale={locale as Locale}
      dict={dict}
      service={service}
      relatedServices={relatedServices}
    />
  );
}
