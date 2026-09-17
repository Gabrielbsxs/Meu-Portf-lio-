import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, Signal, Target, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getCourse } from "@/data/courses";
import { profile } from "@/data/profile";
import { StarRating } from "@/components/star-rating";

export const Route = createFileRoute("/cursos/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Curso não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.course.title} — ${profile.name}`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.course.shortDescription },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.course.shortDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-5 pt-10">
          <Link
            to="/cursos"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar para todos os cursos
          </Link>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 lg:grid-cols-2 lg:py-14">
          <img
            src={course.image}
            alt={course.imageAlt}
            width={1280}
            height={800}
            className="aspect-[16/10] w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-primary">
              {course.category}
            </span>
            <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">{course.title}</h1>
            <StarRating rating={course.rating} className="mt-4" />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{course.fullDescription}</p>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              <Info icon={<Signal className="size-4" />} label="Nível" value={course.level} />
              <Info icon={<Clock className="size-4" />} label="Duração" value={course.duration} />
              <Info icon={<Users className="size-4" />} label="Modalidade" value={course.format} />
              <Info icon={<Target className="size-4" />} label="Indicado para" value={course.audience} />
            </dl>

            {course.ctaHref && (
              <a
                href={course.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                {course.ctaLabel}
              </a>
            )}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-7 px-5 py-8 lg:grid-cols-3">
          <Block title="Benefícios" items={course.benefits} />
          <Block title="Conteúdos abordados" items={course.syllabus} ordered />
          <Block title="Para quem é" items={course.forWho} />
        </section>

        {course.details && (
          <section className="mx-auto max-w-6xl px-5 py-8" aria-labelledby="detalhes-formacao">
            <h2 id="detalhes-formacao" className="text-2xl font-semibold text-foreground">Detalhes da formação</h2>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {course.details.map((detail) => (
                <Info key={detail.label} icon={<Check className="size-4" />} label={detail.label} value={detail.value} />
              ))}
            </dl>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="surface-card flex flex-col items-center gap-5 p-10 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Conheça esta formação</h2>
            <p className="max-w-xl text-muted-foreground">
              Fale comigo e descubra se este curso é o passo certo para o seu momento.
            </p>
            {course.ctaHref ? (
              <a href={course.ctaHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                {course.ctaLabel}
              </a>
            ) : (
              <Link to="/cursos" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Ver outros cursos
              </Link>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Block({ title, items, ordered }: { title: string; items: string[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <section className="surface-card p-7">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <List className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            {item}
          </li>
        ))}
      </List>
    </section>
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
