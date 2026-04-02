import Image from "next/image";
import ScrollReveal, {
  SectionHeadingReveal,
} from "@/components/common/ScrollReveal";
import { Container } from "@/components/ui/shared";
import { FaStar } from "react-icons/fa";

interface TestimonialsProps {
  dict: Record<string, any>;
}

const clientPhotos = [
  "/images/CLIENTS/istockphoto_1390994387_612x612_d52fa1f21f.webp",
  "/images/CLIENTS/istockphoto_1494356290_612x612_d635b4e034.webp",
  "/images/CLIENTS/istockphoto_484758778_612x612_0822c935b7.webp",
];

export default function Testimonials({ dict }: TestimonialsProps) {
  const t = dict.testimonials;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeadingReveal
          className="mx-auto mb-12 max-w-3xl md:mb-14"
          eyebrowClassName="mb-4"
          titleClassName="mb-4"
          eyebrow={
            <span className="inline-block rounded-full border border-secondary-200 bg-secondary-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary-600">
              {t.eyebrow}
            </span>
          }
          title={
            <h2 className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl lg:text-[48px]">
              {t.heading}
            </h2>
          }
          description={
            <p className="text-base leading-relaxed text-neutral-500 md:text-lg">
              {t.description}
            </p>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {t.items.map(
            (
              item: { quote: string; name: string; role: string },
              index: number,
            ) => (
              <ScrollReveal key={item.name} delay={index * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-secondary-100 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-7 shadow-[0_20px_55px_-38px_rgba(21,34,51,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-38px_rgba(21,34,51,0.32)] md:p-8">
                  <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-primary-500" />
                  <div className="mb-6 flex items-center gap-1 text-primary-500">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <FaStar key={starIndex} className="h-4 w-4" />
                    ))}
                  </div>

                  <p className="mb-8 text-base leading-8 text-neutral-600 md:text-[17px]">
                    {item.quote}
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-primary-100">
                      <Image
                        src={clientPhotos[index]}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className={
                          index === 1
                            ? "object-cover object-top"
                            : "object-cover"
                        }
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary-900">
                        {item.name}
                      </h3>
                      <p className="text-sm font-medium text-secondary-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
