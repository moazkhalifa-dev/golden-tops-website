import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Stats from "@/components/sections/Stats";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Hero locale={locale as Locale} dict={dict} />
      <AboutPreview locale={locale as Locale} dict={dict} />
      <ServicesPreview locale={locale as Locale} dict={dict} />
      <Stats locale={locale as Locale} dict={dict} />
      <ProjectsPreview locale={locale as Locale} dict={dict} />
      <Partners dict={dict} />
      <Testimonials dict={dict} />
      <CTABanner locale={locale as Locale} dict={dict} />
    </>
  );
}
