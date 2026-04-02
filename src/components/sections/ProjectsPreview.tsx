"use client";

import Image from "next/image";
import ScrollReveal, {
  SectionHeadingReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/ScrollReveal";
import { ArrowPillLink, Container } from "@/components/ui/shared";
import type { Locale } from "@/i18n/config";

const projectImages = [
  "/images/Opening_of_the_first_phase_of_the_Sports_Track_Project_in_Riyadh_3_1_1024x683_1_f080ad5d5f.webp",
  "/images/fourth.webp",
  "/images/website.vercel.app.nextimage.webp",
  "/images/About GoldenTops.webp",
  "/images/Our Services second.webp",
  "/images/Our Services third.webp",
];

interface ProjectsPreviewProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function ProjectsPreview({
  locale,
  dict,
}: ProjectsPreviewProps) {
  const pp = dict.projectsPreview;
  const items = dict.projects.items.slice(0, 6);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeadingReveal
          className="mx-auto mb-12 max-w-3xl md:mb-14"
          eyebrowClassName="mb-4"
          titleClassName="mb-4"
          eyebrow={
            <span className="inline-block rounded-full border border-secondary-200 bg-secondary-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary-600">
              {pp.eyebrow}
            </span>
          }
          title={
            <h2 className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl lg:text-[48px]">
              {pp.heading}
            </h2>
          }
          description={
            <p className="text-base leading-relaxed text-neutral-500 md:text-lg">
              {pp.description}
            </p>
          }
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {items.map((project: any, index: number) => (
            <StaggerItem key={project.id}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer border border-neutral-100 hover:border-secondary-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={projectImages[index % projectImages.length]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/85 via-secondary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary-200">
                    {project.location}
                  </p>
                </div>

                {/* Always visible on mobile */}
                <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary-950/80 to-transparent p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center">
          <ArrowPillLink href="/projects" locale={locale}>
            {pp.viewAll}
          </ArrowPillLink>
        </ScrollReveal>
      </Container>
    </section>
  );
}
