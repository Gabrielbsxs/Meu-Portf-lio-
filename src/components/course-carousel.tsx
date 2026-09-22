import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Clock, Signal, Target, Users } from "lucide-react";
import type { Course } from "@/data/courses";
import { StarRating } from "@/components/star-rating";

export function CourseCarousel({ courses }: { courses: Course[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {courses.map((course, i) => (
            <div key={course.slug} className="min-w-0 flex-[0_0_100%] px-1" aria-hidden={selected !== i}>
              <article className="surface-card grid gap-0 overflow-hidden shadow-lift lg:grid-cols-2">
                <img
                  src={course.image}
                  alt={course.imageAlt}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1280}
                  height={800}
                  className="aspect-[16/10] w-full bg-secondary object-contain p-2 transition-opacity duration-500 sm:p-3 lg:aspect-auto lg:h-full lg:min-h-64"
                />
                <div className="flex min-w-0 flex-col justify-center gap-4 p-5 sm:gap-5 sm:p-10">
                  <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-primary">
                    {course.category}
                  </span>
                  <h3 className="break-words text-2xl font-semibold leading-snug text-foreground sm:text-4xl">{course.title}</h3>
                  <StarRating rating={course.rating} />
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {course.shortDescription}
                  </p>

                  <dl className="grid gap-3 sm:grid-cols-2">
                    <Info icon={<Signal className="size-4" />} label="Nível" value={course.level} />
                    <Info icon={<Clock className="size-4" />} label="Duração" value={course.duration} />
                    <Info icon={<Users className="size-4" />} label="Modalidade" value={course.format} />
                    <Info icon={<Target className="size-4" />} label="Indicado para" value={course.audience} />
                  </dl>

                  {course.ctaHref ? (
                    <a
                      href={course.ctaHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:w-fit"
                    >
                      {course.ctaLabel}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      to="/cursos/$slug"
                      params={{ slug: course.slug }}
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:w-fit"
                    >
                      {course.ctaLabel}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Curso anterior"
          className="rounded-full border border-border bg-card p-3 text-primary shadow-soft transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar curso">
          {courses.map((course, i) => (
            <button
              key={course.slug}
              type="button"
              role="tab"
              aria-selected={selected === i}
              aria-label={`Ir para ${course.title}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selected === i ? "w-8 bg-accent" : "w-2.5 bg-primary-soft hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Próximo curso"
          className="rounded-full border border-border bg-card p-3 text-primary shadow-soft transition-colors hover:bg-secondary"
        >
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary/70 px-4 py-3">
      <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span aria-hidden="true" className="text-accent">
          {icon}
        </span>
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-foreground">{value}</dd>
    </div>
  );
}
