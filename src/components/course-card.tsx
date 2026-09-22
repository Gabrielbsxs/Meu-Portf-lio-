import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Signal, Users } from "lucide-react";
import type { Course } from "@/data/courses";
import { StarRating } from "@/components/star-rating";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <img
        src={course.image}
        alt={course.imageAlt}
        loading="lazy"
        width={1280}
        height={800}
        className="aspect-[16/10] w-full bg-secondary object-contain p-2 sm:p-3"
      />
      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-primary">
          {course.category}
        </span>
        <h3 className="mt-3 break-words text-xl font-semibold leading-snug text-foreground">{course.title}</h3>
        <StarRating rating={course.rating} className="mt-3" />
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.shortDescription}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <Signal className="size-3.5" aria-hidden="true" /> {course.level}
          </li>
          <li className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" /> {course.duration}
          </li>
          <li className="flex items-center gap-1.5">
            <Users className="size-3.5" aria-hidden="true" /> {course.format}
          </li>
        </ul>

        {course.ctaHref ? (
          <a
            href={course.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            {course.ctaLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        ) : (
          <Link
            to="/cursos/$slug"
            params={{ slug: course.slug }}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            {course.ctaLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
