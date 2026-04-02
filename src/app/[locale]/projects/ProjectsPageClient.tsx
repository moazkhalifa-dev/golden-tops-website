"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/shared";
import CTABanner from "@/components/sections/CTABanner";
import type { Locale } from "@/i18n/config";

const projectImages = [
  "/images/Opening_of_the_first_phase_of_the_Sports_Track_Project_in_Riyadh_3_1_1024x683_1_f080ad5d5f.webp",
  "/images/fourth.webp",
  "/images/website.vercel.app.nextimage.webp",
  "/images/About GoldenTops.webp",
  "/images/Our Services second.webp",
  "/images/Our Services third.webp",
];

interface ProjectsPageClientProps {
  locale: Locale;
  dict: Record<string, any>;
}

export default function ProjectsPageClient({
  locale,
  dict,
}: ProjectsPageClientProps) {
  const p = dict.projects;
  const [activeCategory, setActiveCategory] = useState(p.categories[0]);

  const categoryMapEn: Record<string, string> = {
    All: "All",
    الكل: "All",
    Residential: "Residential",
    سكني: "Residential",
    Commercial: "Commercial",
    تجاري: "Commercial",
    Hospitality: "Hospitality",
    ضيافة: "Hospitality",
    Office: "Office",
    مكاتب: "Office",
  };

  const filteredProjects =
    activeCategory === p.categories[0]
      ? p.items
      : p.items.filter((project: any) => {
          const enCat = categoryMapEn[project.category] || project.category;
          const activeCatEn = categoryMapEn[activeCategory] || activeCategory;
          return enCat === activeCatEn || project.category === activeCategory;
        });

  return (
    <>
      <PageHero title={p.pageTitle} description={p.pageDescription} />

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          {/* Filters */}
          <ScrollReveal className="mb-12">
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 rounded-[28px] border border-[#efe7d8] bg-sand-50 p-4 shadow-sm">
              {p.categories.map((cat: string) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat
                      ? "border-secondary-700 bg-secondary-700 text-white shadow-md"
                      : "border-white bg-white text-neutral-600 hover:border-secondary-200 hover:text-secondary-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: any, index: number) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-[#eee5d4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={projectImages[index % projectImages.length]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-secondary-900/92 via-secondary-900/38 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-300 mb-1">
                      {project.location}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="border-t border-[#f3ead8] p-5 transition-all duration-300 group-hover:translate-y-3 group-hover:opacity-0">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-600">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-secondary-900">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <CTABanner locale={locale} dict={dict} />
    </>
  );
}
