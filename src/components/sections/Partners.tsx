"use client";

import Image from "next/image";
import { SectionHeadingReveal } from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/shared";

interface PartnersProps {
  dict: Record<string, any>;
}

const customerLogos = [
  {
    src: "/images/OUR CUSTOMERS/saudi_aramco_logo_freelogovectors_net_640x400_c9c3a45623.webp",
    alt: "Saudi Aramco",
  },
  {
    src: "/images/OUR CUSTOMERS/pngwing_com_db9c019526.webp",
    alt: "Domino's Pizza",
  },
  {
    src: "/images/OUR CUSTOMERS/OIP_06dadb89ba.webp",
    alt: "Dunkin'",
  },
  {
    src: "/images/OUR CUSTOMERS/mbc_group_logo_png_seeklogo_232675_7672ab68f6.webp",
    alt: "MBC Group",
  },
  {
    src: "/images/OUR CUSTOMERS/R_c9ccadfcc6.png",
    alt: "Mobily",
  },
  {
    src: "/images/OUR CUSTOMERS/shear_dwmynwz_bytza_8d88812f46.png",
    alt: "Pizzaratti",
  },
  {
    src: "/images/OUR CUSTOMERS/OIP_e8349d9945.webp",
    alt: "2M",
  },
];

export default function Partners({ dict }: PartnersProps) {
  const p = dict.partners;

  return (
    <section className="bg-sand-50 py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeadingReveal
          className="mx-auto mb-12 max-w-3xl md:mb-14"
          eyebrowClassName="mb-4"
          titleClassName="mb-4"
          eyebrow={
            <span className="inline-block rounded-full border border-secondary-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary-600">
              {p.eyebrow}
            </span>
          }
          title={
            <h2 className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl lg:text-[48px]">
              {p.heading}
            </h2>
          }
          description={
            <p className="text-base leading-relaxed text-neutral-500 md:text-lg">
              {p.description}
            </p>
          }
        />

        <div className="relative overflow-hidden py-3" dir="ltr">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-sand-50 to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-sand-50 to-transparent md:w-24" />

          <div className="partners-marquee flex w-max items-center gap-5 md:gap-7">
            {[...customerLogos, ...customerLogos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="group flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-primary-500 bg-white p-6 shadow-[0_10px_30px_rgba(201,160,67,0.14)] transition-transform duration-300 hover:-translate-y-1 md:h-44 md:w-44 md:p-8"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 128px, 176px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .partners-marquee {
          animation: partners-marquee 28s linear infinite;
        }

        .partners-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
