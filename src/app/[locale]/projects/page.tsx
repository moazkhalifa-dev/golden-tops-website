import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ProjectsPageClient from "./ProjectsPageClient";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <ProjectsPageClient locale={locale as Locale} dict={dict} />;
}
